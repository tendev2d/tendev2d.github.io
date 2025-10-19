// Frontend script; formatted for readability (logic unchanged)
$(function () {
  // Default to logged-out visual state until session is verified
  document.body.classList.add('logged-out');
  // Elements
  const $card = $('#serverCard');
  const $ip = $('#ip');
  const $port = $('#port');
  const $max = $('#max');
  const $ttl = $('#ttl');
  const $sub = $('.sub');
  const $mobileBlock = $('#mobileBlock');
  const $signupCta = $('#signupCta');
  const $serverToggleBtn = $('#serverToggleBtn');
  const $loginBtn = $('#loginBtn');
  const $logoutBtn = $('#logoutBtn');
  const $changePassBtn = $('#changePassBtn');
  const $navEmail = $('#navEmail');
  const $heroTitle = $('#heroTitle');
  const $heroSubtitle = $('#heroSubtitle');
  const $accountEmail = $('#accountEmail');
  const $renewBtn = $('#renewBtn');
  const $ttlWarn = $('#ttlWarn');
  const TTL_WARN_THRESHOLD = 5 * 60; // 5 minutes

  // State
  let timerId = null;
  let ttl = 0;
  let serverRunning = false; // explicit state instead of relying on button text

  // Format seconds -> HH:MM:SS
  function fmt(s) {
    const h = String(Math.floor(s / 3600)).padStart(2, '0');
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
    const sec = String(s % 60).padStart(2, '0');
    return `${h}:${m}:${sec}`;
  }

  // Button loading helper
  function withBtnLoading($btn, fn, opts = {}) {
    const originalHtml = $btn.data('orig-html') || $btn.html();
    const originalWidth = $btn.outerWidth();
    const label = opts.label || '...';
    if (!$btn.data('orig-html')) $btn.data('orig-html', originalHtml);
    $btn.prop('disabled', true).css('width', originalWidth);
    $btn.html(`<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span><span>${label}</span>`);
    const done = () => {
      $btn.prop('disabled', false).html($btn.data('orig-html')).css('width', '');
    };
    return Promise.resolve()
      .then(fn)
      .then(r => { done(); return r; })
      .catch(e => { done(); throw e; });
  }

  // API helpers
  async function apiGetConfig() {
    const res = await fetch('/api/server/config', {
      headers: { 'Authorization': 'Bearer ' + window.sessionToken }
    });
    if (!res.ok) throw new Error('Failed to load');
    return res.json();
  }

  async function apiPatchConfig(patch) {
    const res = await fetch('/api/server/config', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + window.sessionToken },
      body: JSON.stringify(patch)
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'Failed to save');
    return data;
  }
  async function apiStartServer() {
    const res = await fetch('/api/server/start', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + window.sessionToken }
    });
    const json = await res.json().catch(() => ({}));
    if (res.status === 429 && json.error === 'Cooldown active') {
      const ms = json.cooldownMs || 0;
      const mins = Math.ceil(ms / 60000);
      showToast('error', `Too many attempts. Please wait about ${mins} minute(s) and try again.`);
      throw new Error('Cooldown');
    }
    if (!res.ok) throw new Error(json.error || 'Server start failed');
    return json;
  }

  async function apiStatusServer() {
    const res = await fetch('/api/server/status', {
      headers: { 'Authorization': 'Bearer ' + window.sessionToken }
    });
    if (!res.ok) return null;
    return res.json();
  }

  async function apiStopServer() {
    const res = await fetch('/api/server/stop', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + window.sessionToken }
    });
    return res.ok;
  }

  // User data APIs
  async function apiListUsers() {
    const res = await fetch('/api/user/players', {
      headers: { 'Authorization': 'Bearer ' + window.sessionToken }
    });
    if (!res.ok) throw new Error('Failed to list');
    return res.json(); // { players, max }
  }
  async function apiUpdateUser(id, patch) {
    const res = await fetch(`/api/user/players/${encodeURIComponent(id)}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + window.sessionToken },
      body: JSON.stringify(patch)
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'Update failed');
    return data;
  }
  async function apiDeleteUser(id) {
    const res = await fetch(`/api/user/players/${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + window.sessionToken }
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'Delete failed');
    return data;
  }

  function isLoggedIn() {
    return !!window.sessionToken;
  }

  async function checkSession() {
    if (!window.sessionToken) return false;
    try {
      const res = await fetch('/api/session', {
        headers: {
          'Authorization': 'Bearer ' + window.sessionToken
        }
      });
      if (!res.ok) return false;
      const data = await res.json();
      return !!data.email;
    } catch {
      return false;
    }
  }

  // Mobile / layout checks
  const MIN_DESKTOP_WIDTH = 900;

  function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  function isPortrait() {
    return window.matchMedia('(orientation: portrait)').matches;
  }

  function shouldBlockMobile() {
    const w = window.innerWidth;
    return isMobileDevice() && (isPortrait() || w < MIN_DESKTOP_WIDTH);
  }

  function updateMobileBlock() {
    if (shouldBlockMobile()) {
      $mobileBlock.removeAttr('hidden');
      document.body.classList.add('no-scroll');
    } else {
      $mobileBlock.attr('hidden', '');
      document.body.classList.remove('no-scroll');
    }
  }

  // Countdown
  function startCountdown(seconds) {
    clearInterval(timerId);
    ttl = seconds;
    $ttl.text(fmt(ttl));
    timerId = setInterval(() => {
      ttl = Math.max(0, ttl - 1);
      $ttl.text(fmt(ttl));
      handleTtlWarning();
      if (ttl === 0) clearInterval(timerId);
    }, 1000);
  }

  function handleTtlWarning() {
    if (ttl <= TTL_WARN_THRESHOLD && ttl > 0) {
      $ttl.addClass('text-warning');
      $ttlWarn.show();
      $renewBtn.removeAttr('hidden');
    } else {
      $ttl.removeClass('text-warning');
      $ttlWarn.hide();
      if (ttl > 0) $renewBtn.attr('hidden', '');
    }
  }

  // Initialize server block if authenticated (status only)
  async function initServerIfAuthed() {
    updateMobileBlock();
    if (shouldBlockMobile()) {
      $sub.text('Desktop required. Please rotate or use PC.');
      return;
    }
    if (!isLoggedIn() || !(await checkSession())) {
      setLoggedOutState();
      return;
    }
    try {
      const s = await apiStatusServer();
      if (s) {
        applyServerData(s);
        setServerRunningState();
        // Preload spawn config silently
        try { await loadSpawnConfig(false); } catch { }
      } else {
        setServerStoppedState();
      }
      setLoggedInState();
    } catch (e) {
      console.error(e);
      showToast('error', 'Status check failed');
    }
  }

  // ===== Spawn config UI =====
  async function loadSpawnConfig(showMsg = true) {
    if (!window.sessionToken) {
      if (showMsg) showToast('error', 'Login required');
      return;
    }
    const data = await apiGetConfig();
    if (data && data.spawn) {
      $('#cfg-mapId').val(data.spawn.mapId);
      $('#cfg-x').val(data.spawn.x);
      $('#cfg-y').val(data.spawn.y);
      $('#cfg-char-name').val(data.spawn.characterName);
      $('#cfg-char-index').val(data.spawn.characterIndex);
      if (showMsg) showToast('success', 'Config loaded');
    }
  }

  $('#btn-load-config').on('click', async () => {
    try { await loadSpawnConfig(true); } catch (e) { showToast('error', e.message || 'Load failed'); }
  });

  $('#btn-save-config').on('click', async () => {
    if (!window.sessionToken) return showToast('error', 'Login required');
    const patch = {
      mapId: Number($('#cfg-mapId').val()),
      x: Number($('#cfg-x').val()),
      y: Number($('#cfg-y').val()),
      characterName: $('#cfg-char-name').val(),
      characterIndex: Number($('#cfg-char-index').val()),
    };
    try {
      await apiPatchConfig(patch);
      showToast('success', 'Config saved');
    } catch (e) {
      showToast('error', e.message || 'Save failed');
    }
  });

  function applyServerData(s) {
    $ip.text(s.ip);
    $port.text(s.port);
    $max.text(s.maxUsers);
    $accountEmail.text(s.email || '—');
    $card.removeAttr('hidden');
    startCountdown(s.ttlSeconds);
  }

  function setLoggedInState() {
    document.body.classList.remove('logged-out');
    document.body.classList.add('logged-in');
    $signupCta.attr('hidden', '');
    $('#infoBtn').removeAttr('hidden');
    $('#configBtn').removeAttr('hidden');
    $loginBtn.attr('hidden', '');
    $logoutBtn.removeAttr('hidden');
    $changePassBtn.removeAttr('hidden');
    $serverToggleBtn.removeAttr('hidden');
    if ($card.is(':hidden')) {
      $heroTitle.text('Server control');
      $heroSubtitle.text('Start a temporary server');
    } else {
      $heroTitle.text('Your temporary server');
      $heroSubtitle.text('Live details & remaining time');
    }
    if (window.sessionEmail) {
      $accountEmail.text(window.sessionEmail);
      // Show plain email only (remove title to avoid hover tooltip)
      $navEmail.text(window.sessionEmail).removeAttr('title').removeAttr('hidden');
    }
  }

  function setLoggedOutState() {
    document.body.classList.remove('logged-in');
    document.body.classList.add('logged-out');
    $card.attr('hidden', '');
    $signupCta.removeAttr('hidden');
    $('#infoBtn').attr('hidden', '');
    $('#configBtn').attr('hidden', '');
    $loginBtn.removeAttr('hidden');
    $logoutBtn.attr('hidden', '');
    $changePassBtn.attr('hidden', '');
    $serverToggleBtn.attr('hidden', '');
    $serverToggleBtn.text('Start Server');
    $heroTitle.text('Server control');
    $heroSubtitle.text('Start a temporary server');
    $accountEmail.text('—');
    $navEmail.html('').attr('hidden', '');
    $ttlWarn.hide();
    $renewBtn.attr('hidden', '');
  }

  function setServerRunningState() {
    $serverToggleBtn.text('Stop Server');
    $serverToggleBtn.removeClass('btn-primary btn-outline-light').addClass('btn-danger');
    // Update stored original html so spinner restore uses current label
    $serverToggleBtn.data('orig-html', $serverToggleBtn.html());
    $card.removeAttr('hidden');
    $heroTitle.text('Your temporary server');
    $heroSubtitle.text('Live details & remaining time');
    $serverToggleBtn.addClass('btn-server-running');
    serverRunning = true;
  }

  function setServerStoppedState() {
    clearInterval(timerId);
    ttl = 0;
    $ttl.text('—');
    $ip.text('—');
    $port.text('—');
    $max.text('—');
    $card.attr('hidden', '');
    $serverToggleBtn.text('Start Server');
    $serverToggleBtn.removeClass('btn-danger').addClass('btn-primary');
    // Update stored original html so spinner restore uses current label
    $serverToggleBtn.data('orig-html', $serverToggleBtn.html());
    $serverToggleBtn.removeClass('btn-server-running');
    $heroTitle.text('Server control');
    $heroSubtitle.text('Start a temporary server');
    serverRunning = false;
  }

  // Initial run
  initServerIfAuthed();

  // Resize + orientation listeners
  window.addEventListener('resize', () => {
    updateMobileBlock();
    if (!$mobileBlock.is(':visible')) {
      initServerIfAuthed();
    }
  });

  window.addEventListener('orientationchange', () => {
    updateMobileBlock();
    if (!$mobileBlock.is(':visible')) {
      initServerIfAuthed();
    }
  });

  // Login form handler
  $('#loginForm').on('submit', function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(this).entries());
    if (!data.email || !data.password) return showToast('error', 'Email & password required.');
    const $submit = $(this).find('button[type="submit"]');
    withBtnLoading($submit, () => fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(r => r.json().then(j => ({ ok: r.ok, j })))
      .then(({ ok, j }) => {
        if (!ok) return showToast('error', j.error || 'Login failed');
        window.sessionToken = j.token;
        window.sessionEmail = data.email;
        if ($('#rememberChk').is(':checked')) {
          localStorage.setItem('sessionToken', window.sessionToken);
          localStorage.setItem('sessionEmail', window.sessionEmail);
        }
        bootstrap.Modal.getInstance(document.getElementById('authModal')).hide();
        showToast('success', 'Logged in');
        initServerIfAuthed();
      })
      .catch(err => {
        console.error(err);
        showToast('error', 'Network error');
      }), { label: 'Logging in' });
  });

  // Signup form handler
  $('#signupForm').on('submit', function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(this).entries());
    if (!data.email || !data.password || !data.confirm) return showToast('error', 'All fields required.');
    if (data.password !== data.confirm) return showToast('error', 'Passwords do not match.');
    const $submit = $(this).find('button[type="submit"]');
    withBtnLoading($submit, () => fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: data.email, password: data.password })
    })
      .then(r => r.json().then(j => ({ ok: r.ok, j })))
      .then(({ ok, j }) => {
        if (!ok) return showToast('error', j.error || 'Signup failed');
        // Do not set session on signup until email verified.
        showToast('success', (j.message || 'Account created') + ' (verify your email before logging in)');
        bootstrap.Modal.getInstance(document.getElementById('authModal')).hide();
        initServerIfAuthed();
      })
      .catch(err => {
        console.error(err);
        showToast('error', 'Network error');
      }), { label: 'Signing up' });
  });

  // Forgot password link
  $(document).on('click', '#forgotPassLink', function (e) {
    e.preventDefault();
    const forgotModal = new bootstrap.Modal(document.getElementById('forgotModal'));
    forgotModal.show();
  });

  // Forgot password form
  $('#forgotForm').on('submit', function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(this).entries());
    if (!data.email) return showToast('error', 'Email required');
    const $submit = $(this).find('button[type="submit"]');
    withBtnLoading($submit, () => fetch('/api/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: data.email })
    })
      .then(r => r.json().then(j => ({ ok: r.ok, j })))
      .then(({ ok, j }) => {
        if (!ok) return showToast('error', j.error || 'Request failed');
        showToast('success', j.message || 'If that email exists, a reset link was sent');
        bootstrap.Modal.getInstance(document.getElementById('forgotModal')).hide();
        if (j.debug && j.debug.resetLink) {
          console.log('DEBUG reset link:', j.debug.resetLink);
        }
      })
      .catch(err => {
        console.error(err);
        showToast('error', 'Network error');
      }), { label: 'Sending' });
  });

  // Toast helper
  function showToast(type, message) {
    let $container = $('#toastContainer');
    if ($container.length === 0) {
      $container = $('<div id="toastContainer" class="toast-container position-fixed top-0 start-50 translate-middle-x pt-3" style="z-index:1060; width:320px; max-width:90%;"></div>');
      $('body').append($container);
    }
    const id = 't' + Date.now() + Math.random().toString(16).slice(2);
    const colors = type === 'success'
      ? 'bg-success'
      : type === 'error'
        ? 'bg-danger'
        : 'bg-secondary';
    const $toast = $(`<div class="toast-item ${colors} text-white shadow rounded mb-2 px-3 py-2" id="${id}" style="font-size:.85rem; display:none;">${message}</div>`);
    $container.append($toast);
    $toast.fadeIn(150);
    setTimeout(() => {
      $toast.fadeOut(350, () => $toast.remove());
    }, 3200);
  }

  // Logout handler
  $logoutBtn.on('click', () => {
    window.sessionToken = null;
    window.sessionEmail = null;
    localStorage.removeItem('sessionToken');
    localStorage.removeItem('sessionEmail');
    showToast('success', 'Logged out');
    setLoggedOutState();
  });

  // (removed) Upgrade button handler

  // Change password form handler
  $('#changePassForm').on('submit', function (e) {
    e.preventDefault();
    if (!window.sessionToken) return showToast('error', 'Not authenticated');
    const data = Object.fromEntries(new FormData(this).entries());
    if (!data.currentPassword || !data.newPassword || !data.confirmPassword) {
      return showToast('error', 'All fields required');
    }
    if (data.newPassword !== data.confirmPassword) {
      return showToast('error', 'Passwords do not match');
    }
    if (data.newPassword.length < 6) {
      return showToast('error', 'New password too short');
    }
    const $submit = $(this).find('button[type="submit"]');
    withBtnLoading($submit, () => fetch('/api/change-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + window.sessionToken },
      body: JSON.stringify(data)
    })
      .then(r => r.json().then(j => ({ ok: r.ok, j })))
      .then(({ ok, j }) => {
        if (!ok) return showToast('error', j.error || 'Change failed');
        bootstrap.Modal.getInstance(document.getElementById('changePassModal')).hide();
        showToast('success', j.message || 'Password changed');
        // (Optional) Could force re-login here
      })
      .catch(err => {
        console.error(err);
        showToast('error', 'Network error');
      }), { label: 'Saving' });
  });

  // Server toggle handler
  $serverToggleBtn.on('click', async () => {
    if (!isLoggedIn()) return;
    withBtnLoading($serverToggleBtn, async () => {
      if (!serverRunning) {
        try {
          const data = await apiStartServer();
          applyServerData(data);
          setServerRunningState();
          showToast('success', 'Server started');
        } catch (e) {
          if (e.message === 'Cooldown') return; // toast already shown
          console.error(e);
          showToast('error', 'Start failed');
        }
      } else {
        try {
          const ok = await apiStopServer();
          if (!ok) return showToast('error', 'Stop failed');
          setServerStoppedState();
          showToast('success', 'Server stopped');
        } catch (e) {
          console.error(e);
          showToast('error', 'Stop failed');
        }
      }
      setLoggedInState();
    }, { label: 'Working' });
  });

  // Renew TTL
  $renewBtn.on('click', async () => {
    if (!isLoggedIn()) return;
    withBtnLoading($renewBtn, async () => {
      try {
        const res = await fetch('/api/server/renew', {
          method: 'POST',
          headers: { 'Authorization': 'Bearer ' + window.sessionToken }
        });
        if (!res.ok) return showToast('error', 'Renew failed');
        const data = await res.json();
        showToast('success', 'TTL renewed');
        startCountdown(data.ttlSeconds);
      } catch (e) {
        console.error(e);
        showToast('error', 'Network error');
      }
    }, { label: 'Renewing' });
  });

  // Auto restore session if remember me
  (function restoreSession() {
    const storedToken = localStorage.getItem('sessionToken');
    const storedEmail = localStorage.getItem('sessionEmail');
    if (storedToken && storedEmail) {
      window.sessionToken = storedToken;
      window.sessionEmail = storedEmail;
      initServerIfAuthed();
    }
  })();

  // Auto-load config when modal opens
  document.getElementById('configModal')?.addEventListener('show.bs.modal', async () => {
    try { await loadSpawnConfig(false); } catch { }
  });

  // Load version progress from HTML data attributes (no fetch)
  function refreshVersionProgress() {
    const container = document.getElementById('versionProgress');
    if (!container) return;
    let percent = Number(container.dataset.percent);
    let nextLabel = container.dataset.next || 'v1.1';
    if (!Number.isFinite(percent)) percent = 0;
    percent = Math.max(0, Math.min(100, percent));

    const bar = document.getElementById('versionProgressBar');
    const pct = document.getElementById('versionProgressPct');
    const lab = document.getElementById('versionProgressLabel');
    if (bar && pct && lab) {
      bar.style.width = percent + '%';
      bar.setAttribute('aria-valuenow', String(percent));
      pct.textContent = percent + '%';
      lab.textContent = nextLabel;
    }
  }

  // Initial update only
  refreshVersionProgress();

  // ===== Users tab logic =====
  let selectedUser = null;
  async function refreshUsersList() {
    const $sel = $('#usersSelect');
    $sel.empty();
    if (!window.sessionToken) return;
    try {
      const data = await apiListUsers();
      (data.players || []).forEach(p => {
        const label = p.username || p.name || p.email || p.id;
        const $opt = $(`<option value="${p.id}">${label}</option>`);
        $opt.data('player', p);
        $sel.append($opt);
      });
    } catch (e) {
      showToast('error', e.message || 'Load users failed');
    }
  }

  function selectUser(p) {
    selectedUser = p;
    $('#usr-selected-name').val(p.username || p.name || p.email || p.id);
    $('#usr-mapId').val(p.mapId ?? '');
    $('#usr-x').val(p.x ?? '');
    $('#usr-y').val(p.y ?? '');
    $('#btn-user-delete').prop('disabled', false);
    $('#btn-user-save').prop('disabled', false);
  }

  async function saveSelectedUser() {
    if (!selectedUser) return;
    const patch = {};
    const mapId = $('#usr-mapId').val();
    const x = $('#usr-x').val();
    const y = $('#usr-y').val();
    if (mapId !== '') patch.mapId = Number(mapId);
    if (x !== '') patch.x = Number(x);
    if (y !== '') patch.y = Number(y);
    try {
      await apiUpdateUser(selectedUser.id, patch);
      showToast('success', 'User updated');
      await refreshUsersList();
    } catch (e) {
      showToast('error', e.message || 'Update failed');
    }
  }

  async function deleteSelectedUser() {
    if (!selectedUser) return;
    try {
      await apiDeleteUser(selectedUser.id);
      showToast('success', 'User deleted');
      selectedUser = null;
      $('#usr-selected-name').val('');
      $('#usr-mapId').val('');
      $('#usr-x').val('');
      $('#usr-y').val('');
      $('#btn-user-delete').prop('disabled', true);
      $('#btn-user-save').prop('disabled', true);
      await refreshUsersList();
    } catch (e) {
      showToast('error', e.message || 'Delete failed');
    }
  }

  document.getElementById('configModal')?.addEventListener('shown.bs.modal', async () => {
    // On fully shown, load users list for Users tab
    try { await refreshUsersList(); } catch { }
  });
  $('#btn-user-save').on('click', saveSelectedUser);
  $('#btn-user-delete').on('click', deleteSelectedUser);
  $('#usersSelect').on('change', function () {
    const p = $(this).find(':selected').data('player');
    if (p) selectUser(p);
  });

});
