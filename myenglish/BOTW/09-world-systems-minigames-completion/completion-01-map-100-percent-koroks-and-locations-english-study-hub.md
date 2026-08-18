# Map 100%, Koroks, and Discoverable Locations — English Study Hub

## Nguồn học và giới hạn

- **Phạm vi:** bộ đếm map completion của **base game không cài DLC**, không phải mọi hoạt động trong game.
- **Cách giải thích phổ biến:** [Zelda Wiki — 100% Completion](https://zeldawiki.wiki/wiki/100%25_Completion) ghi cách chia **226 locations / khoảng 0.08%** thường gặp. Đây là cách đếm quy ước của wiki, không thay thế pipeline dữ liệu cộng đồng dưới đây.
- **Pipeline minh bạch:** [MrCheeze's BOTW Waypoint Map](https://mrcheeze.github.io/botw-waypoint-map/), [tracked_locations.txt](https://github.com/MrCheeze/botw-waypoint-map/blob/gh-pages/tracked_locations.txt) và [generated map_locations.js](https://github.com/MrCheeze/botw-waypoint-map/blob/gh-pages/map_locations.js). `tracked_locations.txt` có 200 candidate names; generator bỏ 13, tạo 187 `Location_*` rows; bốn rows là Divine Beast Remains nên 187 − 4 = **183 named-location flags**.
- **Kiểm chéo số 183:** [GameFAQs — BOTW 100% completion](https://gamefaqs.gamespot.com/boards/189707-the-legend-of-zelda-breath-of-the-wild/76375808?page=2). Đây vẫn là nguồn cộng đồng, không phải bảng denominator do Nintendo công bố.
- **Nguồn chính thức về khám phá:** [Nintendo Explorer's Guide](https://assets.nintendo.com/image/upload/v1675114089/Microsites/zelda-breath-of-the-wild/pdf/ExplorersGuide.pdf) hỗ trợ các hệ Korok, Shrine và khám phá vùng; guide không in bảng 1,207.
- **Video tham khảo trực tiếp:** [Zelda: Breath of the Wild - Full Game 100% Walkthrough](https://www.youtube.com/watch?v=0b0TNce_9tc), BeardBear, **44:08:01**, English UI, English game voice, no commentary; có DLC nên chỉ dùng ngữ cảnh hình ảnh. Các chapter phụ: Kilton Medals `43:11:09–43:16:36`, Hestu's Gift `43:23:08–43:31:31`, Run Officially Complete `43:31:31–43:35:51`. Khung hình đối chiếu chỉ chứng minh trạng thái nhìn thấy; không có chapter Compendium và auto-caption không dùng làm subtitle/transcript.
- **Ranh giới số liệu:** `900 + 120 + 4 + 183 = 1,207` là cách phân rã reverse-engineered của cộng đồng. Nó không được gọi là official Nintendo denominator và không được trộn với 226 locations của Zelda Wiki.
- **Ranh giới DLC:** cài Expansion Pass làm đổi mẫu số của bản đồ; bài này chỉ dùng base game. Side Quests, Memories, Compendium, Shrine chests, armor và medals không tăng map percentage.

## Ôn bài trước — sáu cụm nối tuyến

Bài nối trước theo README là **Minigames 04 — Skill and Luck**. Sáu cụm dưới đây chuyển từ việc báo score sang việc báo một counter có phạm vi rõ.

| Chunk | IPA / trạng thái | Đọc Việt | Móc nghĩa |
|---|---|---|---|
| `state the denominator` | /steɪt ðə dɪˈnɑməˌneɪtər/ | x-tâi-t đờ đị-**NO**-mờ-nây-tờ(r) | nói mẫu số |
| `count unique entries` | /kaʊnt juˈniːk ˈentriz/ | cao-n-t yuu-**NII-C EN**-tri-z | đếm mục riêng |
| `separate two goals` | /ˈsepəˌreɪt tuː ɡoʊlz/ | **XE**-pờ-rây-t tuu gâu-l-z | tách hai mục tiêu |
| `verify a location` | /ˈverəˌfaɪ ə loʊˈkeɪʃən/ | **VE**-rờ-phai ờ lâu-**CÂY**-shần | xác nhận địa điểm |
| `leave an item unchecked` | /liːv ən ˈaɪtəm ʌnˈtʃekt/ | lii-v en **AI**-tầm ần-che-c-t | để mục chưa xác nhận |
| `report one hundred percent` | /rɪˈpɔrt wʌn ˈhʌndrəd pərˈsent/ | rị-**PO(R)-T** uân **HÂN**-đờ-rờ-đ pờ(r)-**XEN-T** | báo 100% đúng phạm vi |

## Hai sổ số liệu — map counter và Korok economy

### Base-game map ledger

| Map element | Count | Approximate share | What registers it |
|---|---|---|---|
| Korok Seed locations | 900 | about 74.56% of the data-derived denominator | Solve each Korok puzzle so its seed icon appears. |
| Ancient Shrines | 120 | about 9.94% | Activate/discover each shrine icon; chest completion is separate. |
| Divine Beasts | 4 | about 0.33% | Complete the four Divine Beast map entries. |
| Discoverable-location flags | 183 | about 15.16% | Enter the trigger zone for named bridges, ruins, settlements, forests, and landmarks. |
| **Total** | **1,207** | **100% before display rounding** | Every entry is weighted equally by the map counter. |

Giá trị hiển thị được làm tròn. Mỗi entry có cùng trọng số trong pipeline 1,207; tổng phần trăm trung gian có thể không khớp phép cộng các tỷ lệ đã làm tròn.

### Korok completion ledger

| Stage | Practical meaning |
|---|---|
| First encounter | Help Hestu retrieve his maracas and learn that Korok Seeds buy inventory slots. |
| Early upgrades | Spend increasing numbers of seeds on weapon, bow, or shield capacity. |
| Hestu relocations | Continue upgrades through his roadside/stable appearances and later Korok Forest. |
| Maximum inventory | **441 seeds** are sufficient to purchase every available inventory expansion. |
| Remaining exploration | The other 459 seeds exist for discovery/completion, not additional slots. |
| All 900 | Speak with Hestu after finding all seeds and fully upgrading the stashes to receive `Hestu's Gift`. |
| Reward meaning | The Gift is a symbolic Key Item; it does not grant a new combat ability. |
| Map effect | Each solved Korok contributes one equal-weight icon to map completion. |

**Hai mẫu số không được trộn:** 441 mở hết inventory slots; 900 giải hết Korok locations. Hestu's Gift cần đủ **900** và các stashes đã được nâng tối đa.

## Tên bài — title pieces và cách đọc

| Title piece | IPA / trạng thái | Đọc Việt | Nghĩa đúng trong bài |
|---|---|---|---|
| `Map 100%` | /mæp wʌn ˈhʌndrəd pərˈsent/ | me-p uân **HÂN**-đờ-rờ-đ pờ(r)-**XEN-T** | map counter đạt 100.00% |
| `Koroks` | English localization; không tự gán IPA | nghe theo English game audio | 900 Korok locations |
| `discoverable locations` | /dɪˈskʌvərəbəl loʊˈkeɪʃənz/ | đị-**X-CÂ**-vờ-rờ-bồ lâu-**CÂY**-shần-z | các location flags có thể kích hoạt |
| `English Study Hub` | /ˈɪŋɡlɪʃ ˈstʌdi hʌb/ | **ING**-gờ-lị-sh **X-TÂ**-đi hâ-b | bài học hệ thống |

IPA common words được đối chiếu bằng [Cambridge Dictionary](https://dictionary.cambridge.org/) và [Merriam-Webster](https://www.merriam-webster.com/). Proper names giữ theo English localization hoặc English game audio; bài không tự chế IPA cho tên riêng.

## Từ và cụm trọng tâm

| # | Nhóm | English chunk | POS/type | Đọc Việt — học cột này | IPA Mỹ / trạng thái | Nghĩa và điểm bám |
|---|---|---|---|---|---|---|
| 1 | COUNTER | read the map percentage | verb phrase | rii-đ đờ me-p pờ(r)-**XEN**-tị-j | /riːd ðə mæp pərˈsentɪdʒ/ | đọc counter trên map |
| 2 | COUNTER | state a base-game scope | verb phrase | x-tâi-t ờ bâi-x gâi-m x-câu-p | /steɪt ə beɪs ɡeɪm skoʊp/ | khóa base-only |
| 3 | COUNTER | count equal-weight entries | verb phrase | cao-n-t **II**-c-uồ-uây-t **EN**-tri-z | /kaʊnt ˈiːkwəl weɪt ˈentriz/ | đếm entries ngang trọng số |
| 4 | COUNTER | distinguish map completion | verb phrase | đị-**X-TING**-guị-sh me-p cầm-**PLII**-shần | /dɪˈstɪŋɡwɪʃ mæp kəmˈpliːʃən/ | tách map khỏi full completion |
| 5 | MATH | add nine hundred Koroks | verb phrase | e-đ nai-n **HÂN**-đờ-rờ-đ Korok-x | /æd naɪn ˈhʌndrəd .../ | 900 entries |
| 6 | MATH | add one hundred twenty Shrines | verb phrase | e-đ uân **HÂN**-đờ-rờ-đ **TUEN**-ti shrai-n-z | /æd wʌn ˈhʌndrəd ˈtwenti ʃraɪnz/ | 120 entries |
| 7 | MATH | include four Divine Beasts | verb phrase | in-**CLUU-Đ** pho(r) đờ-**VAI-N** bii-x-t-x | /ɪnˈkluːd fɔr dɪˈvaɪn biːsts/ | 4 entries |
| 8 | MATH | derive one hundred eighty-three flags | verb phrase | đị-**RAI-V** uân **HÂN**-đờ-rờ-đ **ÂY**-ti thrii ph-le-g-z | /dɪˈraɪv wʌn ˈhʌndrəd ˈeɪti θriː flæɡz/ | 183 từ pipeline |
| 9 | PIPELINE | start with two hundred candidates | verb phrase | x-ta(r)-t uị(đh) tuu **HÂN**-đờ-rờ-đ **CAN**-đờ-đâi-t-x | /stɑrt wɪð tuː ˈhʌndrəd ˈkændəˌdeɪts/ | tracked_locations input |
| 10 | PIPELINE | skip thirteen names | verb phrase | x-ki-p thơ(r)-**TII-N** nây-m-z | /skɪp ˌθɝˈtiːn neɪmz/ | 200 → 187 |
| 11 | PIPELINE | emit one hundred eighty-seven rows | verb phrase | ị-**MIT** uân **HÂN**-đờ-rờ-đ **ÂY**-ti **XE**-vần râu-z | /ɪˈmɪt wʌn ˈhʌndrəd ˈeɪti ˈsevən roʊz/ | generated map file |
| 12 | PIPELINE | subtract four Beast entries | verb phrase | xờ-b-**TRÉC-T** pho(r) bii-x-t **EN**-tri-z | /səbˈtrækt fɔr biːst ˈentriz/ | 187 → 183 locations |
| 13 | SCOPE | keep 226 locations separate | verb phrase | kii-p tuu **HÂN**-đờ-rờ-đ tuen-ti xíc-x lâu-**CÂY**-shần-z **XÉ**-pờ-rịt | /kiːp tuː ˈhʌndrəd ˈtwenti sɪks loʊˈkeɪʃənz ˈsepərət/ | wiki convention riêng |
| 14 | SCOPE | avoid an official-denominator claim | verb phrase | ờ-**VOI-Đ** en ờ-**PHÍ**-shồ đị-**NO**-mờ-nây-tờ(r) c-lâi-m | /əˈvɔɪd ən əˈfɪʃəl dɪˈnɑməˌneɪtər kleɪm/ | không nói Nintendo công bố |
| 15 | SCOPE | exclude installed DLC entries | verb phrase | ịc-**X-CLUU-Đ** in-**X-TO-L-Đ** đii-e-l-xii **EN**-tri-z | /ɪkˈskluːd ɪnˈstɔld ˌdiː el ˈsiː ˈentriz/ | giữ denominator base |
| 16 | SCOPE | leave quests outside the counter | verb phrase | lii-v kwe-x-t-x ao-t-**XAI-Đ** đờ cao-n-tờ(r) | /liːv kwests ˌaʊtˈsaɪd ðə ˈkaʊntər/ | quest không tăng map % |
| 17 | KOROK | buy every inventory expansion | verb phrase | bai **EV**-ri **IN**-vần-to-ri ịc-**X-PEN**-shần | /baɪ ˈevri ˈɪnvənˌtɔri ɪkˈspænʃən/ | dùng 441 seeds |
| 18 | KOROK | find all nine hundred seeds | verb phrase | phai-n-đ o-l nai-n **HÂN**-đờ-rờ-đ xii-đ-z | /faɪnd ɔl naɪn ˈhʌndrəd siːdz/ | hoàn tất locations |
| 19 | KOROK | fully upgrade the stashes | verb phrase | **PHU**-li â-p-g-râi-đ đờ x-te-shị-z | /ˈfʊli ʌpˈɡreɪd ðə ˈstæʃɪz/ | điều kiện Gift |
| 20 | KOROK | receive Hestu's Gift | verb phrase | rị-**XII-V** Hestu-z giph-t | /rɪˈsiːv ... ɡɪft/ | symbolic Key Item |
| 21 | LOCATION | enter the trigger zone | verb phrase | **EN**-tờ(r) đờ **TRI**-gờ(r) zâu-n | /ˈentər ðə ˈtrɪɡər zoʊn/ | kích hoạt tên |
| 22 | LOCATION | wait for the place name | verb phrase | uêi(t) pho(r) đờ p-lâi-x nây-m | /weɪt fɔr ðə pleɪs neɪm/ | xác nhận hiển thị |
| 23 | LOCATION | cross a bridge on the ground | verb phrase | c-ro-x ờ b-rị-j on đờ g-rao-n-đ | /krɔs ə brɪdʒ ɑn ðə ɡraʊnd/ | tránh chỉ glide overhead |
| 24 | LOCATION | mark only verified flags | verb phrase | ma(r)-c **ÂU-N-LI VE**-rờ-phai-đ ph-le-g-z | /mɑrk ˈoʊnli ˈverəˌfaɪd flæɡz/ | không tick sớm |

### Mục B — gặp thì hiểu, chưa cần ép thuộc

| Cụm B | POS | Đọc Việt | Nghĩa trong bài | IPA / trạng thái |
|---|---|---|---|---|
| `map-completion counter` | noun phrase | me-p cầm-**PLII**-shần cao-n-tờ(r) | bộ đếm map | /mæp kəmˈpliːʃən ˈkaʊntər/ |
| `equal-weight entry` | noun phrase | **II**-c-uồ-uây-t **EN**-tri | mục có trọng số bằng nhau | /ˈiːkwəl weɪt ˈentri/ |
| `reverse-engineered` | adjective | rị-**VƠ(R)-X EN**-jờ-ni-r-đ | suy ra từ dữ liệu/cơ chế | /ˌriːvɝs ˌendʒəˈnɪrd/ |
| `candidate name` | noun phrase | **CAN**-đờ-đâi-t nây-m | tên đầu vào | /ˈkændəˌdeɪt neɪm/ |
| `emitted row` | noun phrase | ị-**MIT**-ị-đ râu | hàng được generator tạo | /ɪˈmɪtɪd roʊ/ |
| `location flag` | noun phrase | lâu-**CÂY**-shần ph-le-g | cờ địa điểm | /loʊˈkeɪʃən flæɡ/ |
| `display rounding` | noun phrase | đị-**X-P-LÂY RAO-N**-đing | làm tròn khi hiển thị | /dɪˈspleɪ ˈraʊndɪŋ/ |
| `inventory stash` | noun phrase | **IN**-vần-to-ri x-te-sh | kho ô chứa | /ˈɪnvənˌtɔri stæʃ/ |
| `symbolic reward` | noun phrase | xim-**BA**-lị-c rị-**UO(R)-Đ** | phần thưởng biểu tượng | /sɪmˈbɑlɪk rɪˈwɔrd/ |
| `trigger zone` | noun phrase | **TRI**-gờ(r) zâu-n | vùng kích hoạt | /ˈtrɪɡər zoʊn/ |
| `discoverable` | adjective | đị-**X-CÂ**-vờ-rờ-bồ | có thể được ghi nhận khi khám phá | /dɪˈskʌvərəbəl/ |
| `base-only` | adjective | bâi-x **ÂU-N-LI** | chỉ game gốc | /beɪs ˈoʊnli/ |

### Phát âm chọn lọc — 16 cụm đại diện

| Cụm | IPA Mỹ / trạng thái | Đọc Việt | Điểm luyện |
|---|---|---|---|
| `Map 100%` | /mæp wʌn ˈhʌndrəd pərˈsent/ | me-p uân **HÂN**-đờ-rờ-đ pờ(r)-**XEN-T** | title phrase |
| `Koroks` | English localization | nghe theo English game audio | proper localized plural |
| `discoverable locations` | /dɪˈskʌvərəbəl loʊˈkeɪʃənz/ | đị-**X-CÂ**-vờ-rờ-bồ lâu-**CÂY**-shần-z | hai stress |
| `completion counter` | /kəmˈpliːʃən ˈkaʊntər/ | cầm-**PLII**-shần **CAO-N**-tờ(r) | completion stress |
| `denominator` | /dɪˈnɑməˌneɪtər/ | đị-**NO**-mờ-nây-tờ(r) | GA stress |
| `equal-weight entries` | /ˈiːkwəl weɪt ˈentriz/ | **II**-c-uồ-uây-t **EN**-tri-z | plural /z/ |
| `one thousand two hundred seven` | /wʌn ˈθaʊzənd tuː ˈhʌndrəd ˈsevən/ | uân **THAO**-zần-đ tuu **HÂN**-đờ-rờ-đ **XE**-vần | 1,207 |
| `one hundred eighty-three` | /wʌn ˈhʌndrəd ˈeɪti θriː/ | uân **HÂN**-đờ-rờ-đ **ÂY**-ti thrii | 183 |
| `two hundred candidates` | /tuː ˈhʌndrəd ˈkændəˌdeɪts/ | tuu **HÂN**-đờ-rờ-đ **CAN**-đờ-đâi-t-x | pipeline input |
| `subtract four` | /səbˈtrækt fɔr/ | xờ-b-**TRÉC-T** pho(r) | 187−4 |
| `inventory expansion` | /ˈɪnvənˌtɔri ɪkˈspænʃən/ | **IN**-vần-to-ri ịc-**X-PEN**-shần | system phrase |
| `Hestu's Gift` | common gift /ɡɪft/ | Hestu-z giph-t | proper + common |
| `fully upgraded stashes` | /ˈfʊli ʌpˈɡreɪdɪd ˈstæʃɪz/ | **PHU**-li â-p-**G-RÂY**-đị-đ x-te-shị-z | full /fʊl/ no n |
| `trigger zone` | /ˈtrɪɡər zoʊn/ | **TRI**-gờ(r) zâu-n | zone /oʊ/ |
| `count toward` | /kaʊnt təˈwɔrd/ | cao-n-t tờ-uo(r)(d) | nối nhẹ toward |
| `without installed DLC` | /wɪˈðaʊt ɪnˈstɔld ˌdiː el ˈsiː/ | uị(đh)-ao(t) in-**X-TO-L-Đ** đii-e-l-xii | giữ đủ âm của without |

## Mô-đun 1/4 — Map 100% chỉ đo bốn nhóm entry

**Dữ kiện:** Sau lần hạ Ganon đầu tiên, starred save làm map percentage hiện ra. Base-only counter gồm 900 Korok icons, 120 Shrine icons, 4 Divine Beast entries và 183 named-location flags; quests, Compendium, chests và equipment nằm ngoài.

**Cách dùng khi học:** Khi báo 100.00%, luôn thêm “on the starred-save map counter” và nêu rõ phiên bản đang dùng. Không nói “I completed everything” nếu chỉ nhìn phần trăm trên bản đồ.

**Logic cần giữ:** Bốn nhóm cộng 1,207; mỗi entry có trọng số bằng nhau trong cách tính từ dữ liệu cộng đồng. Số hiển thị được làm tròn nhưng quy tắc tính không đổi.

### Móc nhận diện

| Nhãn | English | Đọc Việt | Bắt ý |
|---|---|---|---|
| `[EXACT UI]` | `100.00%` | uân **HÂN**-đờ-rờ-đ pờ(r)-**XEN-T** | map display token |
| `[PARA]` | `The percentage appears on the starred save after the first Ganon clear.` | đờ pờ(r)-**XEN**-tị-j ờ-**PIA(R)-Z** on đờ x-ta(r)-đ xâi-v **A-PH**-tờ(r) đờ phơ(r)-x-t Ganon c-lia(r) | visibility gate |
| `[PARA]` | `Nine hundred plus one hundred twenty plus four plus one hundred eighty-three equals one thousand two hundred seven.` | nai-n **HÂN**-đờ-rờ-đ p-lâ-x uân **HÂN**-đờ-rờ-đ **TUEN**-ti p-lâ-x pho(r) p-lâ-x uân **HÂN**-đờ-rờ-đ **ÂY**-ti thrii **II**-c-uồ-z uân **THAO**-zần-đ tuu **HÂN**-đờ-rờ-đ **XE**-vần | phép tính |
| `[PARA]` | `Quest completion remains outside this map counter.` | kwe-x-t cầm-**PLII**-shần rị-**MÂY-N-Z** ao-t-**XAI-Đ** đị-x me-p cao-n-tờ(r) | scope exclusion |

### Cụm riêng của phần này

| English chunk | IPA Mỹ / trạng thái | Đọc Việt | Dùng để nói |
|---|---|---|---|
| count toward map completion | /kaʊnt təˈwɔrd mæp kəmˈpliːʃən/ | cao-n-t tờ-uo(r)(d) me-p cầm-**PLII**-shần | được tính vào map |
| account for one entry | /əˈkaʊnt fɔr wʌn ˈentri/ | ờ-**CAO-N-T** pho(r) uân **EN**-tri | chiếm một mục |
| exclude quest status | /ɪkˈskluːd kwest ˈsteɪtəs/ | ịc-**X-CLUU-Đ** kwe-x-t **X-TÂY**-tờ-x | không tính trạng thái quest |
| report a rounded display | /rɪˈpɔrt ə ˈraʊndɪd dɪˈspleɪ/ | rị-**PO(R)-T** ờ **RAO-N**-đị-đ đị-**X-P-LÂY** | nói giá trị làm tròn |

### Đối chiếu không được trộn

Map counter 100.00% là Fact về map flags. “Mọi quest, chest và Compendium đều xong” là claim sai nếu không có sổ riêng.

### Tự kiểm tra

1. Bốn nhóm nào thuộc base map counter?
2. Side Quest completion có tăng map percentage không?
3. Vì sao tổng các tỷ lệ đã làm tròn có thể lệch nhẹ?

### Đáp án tự kiểm tra

1. 900 Koroks, 120 Shrines, 4 Divine Beasts, 183 locations.
2. Không.
3. UI và bảng tỷ lệ làm tròn từng phần trong khi entry weights vẫn bằng nhau.

---

## Mô-đun 2/4 — Pipeline 200 → 187 → 183 giải thích location flags

**Dữ kiện:** tracked_locations có 200 candidates; 13 bị skip; map_locations.js phát 187 Location rows; bốn Remains rows là Divine Beasts đã đếm riêng, nên còn 183 location flags.

**Cách dùng khi học:** Nói rõ đây là community reverse-engineering. Dùng 226 khi trình bày convention của Zelda Wiki, không thay nó vào phương trình 1,207.

**Logic cần giữ:** 200 − 13 = 187; 187 − 4 = 183. Hai phép trừ giải quyết overlap và khác biệt phạm vi, không chứng minh Nintendo công bố denominator.

### Móc nhận diện

| Nhãn | English | Đọc Việt | Bắt ý |
|---|---|---|---|
| `[PARA]` | `The source list starts with two hundred candidate names.` | đờ xo(r)-x li-x-t x-ta(r)-t-x uị(đh) tuu **HÂN**-đờ-rờ-đ **CAN**-đờ-đâi-t nây-m-z | pipeline input |
| `[PARA]` | `Thirteen skipped names leave one hundred eighty-seven emitted rows.` | thơ(r)-**TII-N** x-ki-p-t nây-m-z lii-v uân **HÂN**-đờ-rờ-đ **ÂY**-ti **XE**-vần ị-**MIT**-ị-đ râu-z | first subtraction |
| `[PARA]` | `Removing four Beast rows leaves one hundred eighty-three location flags.` | rị-**MUU**-ving pho(r) bii-x-t râu-z lii-v-z uân **HÂN**-đờ-rờ-đ **ÂY**-ti thrii lâu-**CÂY**-shần ph-le-g-z | second subtraction |

### Cụm riêng của phần này

| English chunk | IPA Mỹ / trạng thái | Đọc Việt | Dùng để nói |
|---|---|---|---|
| trace the generated rows | /treɪs ðə ˈdʒenəˌreɪtɪd roʊz/ | t-râi-x đờ **JE**-nờ-rây-tị-đ râu-z | theo dữ liệu output |
| remove an overlapping category | /rɪˈmuːv ən ˌoʊvərˈlæpɪŋ ˈkætəɡɔri/ | rị-**MUU-V** en âu-vờ(r)-**LE**-ping **CA**-tờ-go-ri | loại overlap Beast |
| label a community estimate | /ˈleɪbəl ə kəˈmjuːnəti ˈestəmət/ | **LÂY**-bồ ờ cờ-**MYUU**-nờ-ti **E-X**-tờ-mịt | nói đúng vai trò nguồn |
| keep conventions separate | /kiːp kənˈvenʃənz ˈsepərət/ | kii-p cờ-n-**VEN**-shần-z **XÉ**-pờ-rịt | 183 ≠ 226 |

### Đối chiếu không được trộn

183 là count dùng trong phương trình reverse-engineered. 226 là cách liệt kê conventional trên Zelda Wiki; không cộng cả hai và không gọi số nào là official Nintendo table.

### Tự kiểm tra

1. 200 candidates trở thành 187 rows bằng cách nào?
2. Vì sao còn 183 sau 187?
3. Số 226 được dùng trong vai trò nào?

### Đáp án tự kiểm tra

1. 13 candidate names bị skip.
2. Bốn Divine Beast Remains rows được đếm ở category 4 riêng.
3. Một convention khác của Zelda Wiki, không thay 183 trong phương trình này.

---

## Mô-đun 3/4 — 441 inventory seeds khác 900 Korok locations

**Dữ kiện:** 441 Korok Seeds đủ mua toàn bộ weapon/bow/shield expansions; 459 seeds còn lại không mở thêm slot. Hestu's Gift cần all 900 cùng fully upgraded stashes.

**Cách dùng khi học:** Dùng “maximize inventory” cho 441 và “find every Korok location” cho 900. Khi nói reward, giữ exact token Hestu's Gift và gọi nó symbolic Key Item.

**Logic cần giữ:** Một seed vừa là currency vừa là map-location completion entry. Currency goal dừng ở 441; discovery goal dừng ở 900; reward gate kiểm mục tiêu sau.

### Móc nhận diện

| Nhãn | English | Đọc Việt | Bắt ý |
|---|---|---|---|
| `[PARA]` | `Four hundred forty-one seeds maximize the inventory stashes.` | pho(r) **HÂN**-đờ-rờ-đ pho(r)-ti-uân xii-đ-z **MÉC**-xờ-mai-z đờ **IN**-vần-to-ri x-te-shị-z | slot threshold |
| `[PARA]` | `All nine hundred locations complete the Korok map set.` | o-l nai-n **HÂN**-đờ-rờ-đ lâu-**CÂY**-shần-z cầm-**PLII-T** đờ Korok me-p xe-t | discovery threshold |
| `[EXACT UI]` | `Hestu's Gift` | Hestu-z giph-t | symbolic Key Item |

### Cụm riêng của phần này

| English chunk | IPA Mỹ / trạng thái | Đọc Việt | Dùng để nói |
|---|---|---|---|
| maximize the inventory | /ˈmæksəˌmaɪz ði ˈɪnvənˌtɔri/ | **MÉC**-xờ-mai-z đi **IN**-vần-to-ri | mua hết slot |
| keep searching after 441 | /kiːp ˈsɝtʃɪŋ ˈæftər fɔr ˈhʌndrəd ˈfɔrti wʌn/ | kii-p **XƠ(R)**-ching **A-PH**-tờ(r) pho(r) **HÂN**-đờ-rờ-đ pho(r)-ti-uân | tiếp tục tới 900 |
| fully upgrade every stash | /ˈfʊli ʌpˈɡreɪd ˈevri stæʃ/ | **PHU**-li â-p-**G-RÂY-Đ EV**-ri x-te-sh | hoàn tất inventory gate |
| receive a symbolic Key Item | /rɪˈsiːv ə sɪmˈbɑlɪk kiː ˈaɪtəm/ | rị-**XII-V** ờ xim-**BA**-lị-c kii **AI**-tầm | nhận reward không combat |

### Đối chiếu không được trộn

441/900 không phải “một con số đúng, một con số sai”. Chúng trả lời hai câu khác nhau: đủ currency để mở slot và đủ locations để hoàn tất Korok set.

### Tự kiểm tra

1. Bao nhiêu seeds đủ mua mọi inventory expansion?
2. Điều kiện Hestu's Gift gồm những gì?
3. Hestu's Gift có mở combat ability mới không?

### Đáp án tự kiểm tra

1. 441.
2. Tìm đủ 900 seeds và nâng tối đa các stashes.
3. Không; đây là symbolic Key Item.

---

## Mô-đun 4/4 — Location flag cần trigger thực và denominator phụ thuộc DLC

**Dữ kiện:** Một location chỉ được tick khi trigger vùng hoạt động và place name được ghi nhận; chỉ lượn trên cao có thể bỏ lỡ. DLC-installed map có denominator khác base-only.

**Cách dùng khi học:** Đi qua bridge/ruin/stable ở độ cao phù hợp, chờ tên hiện, rồi mới mark. Nếu version có DLC, không dùng base 1,207 làm exact denominator.

**Logic cần giữ:** Map discovery phụ thuộc trigger geometry, không chỉ nhìn thấy địa điểm. Version flag thay inclusion set nên cùng 100.00% có thể dựa trên denominator khác.

### Móc nhận diện

| Nhãn | English | Đọc Việt | Bắt ý |
|---|---|---|---|
| `[PARA]` | `The place name should appear before I mark the flag.` | đờ p-lâi-x nây-m shu-đ ờ-**PIA(R)** bờ-**PHO(R)** ai ma(r)-c đờ ph-le-g | verification rule |
| `[PARA]` | `Gliding overhead may miss a ground-level trigger zone.` | g-lai-đing âu-vờ(r)-**HE-Đ** mâi mi-x ờ g-rao-n-đ **LE**-vồ **TRI**-gờ(r) zâu-n | method boundary |
| `[PARA]` | `Installed DLC changes the map denominator.` | in-**X-TO-L-Đ** đii-e-l-xii **CHÂY-N-JỊ-Z** đờ me-p đị-**NO**-mờ-nây-tờ(r) | version boundary |

### Cụm riêng của phần này

| English chunk | IPA Mỹ / trạng thái | Đọc Việt | Dùng để nói |
|---|---|---|---|
| enter a named place | /ˈentər ə neɪmd pleɪs/ | **EN**-tờ(r) ờ nây-m-đ p-lâi-x | đi vào vùng địa điểm |
| trigger the map label | /ˈtrɪɡər ðə mæp ˈleɪbəl/ | **TRI**-gờ(r) đờ me-p **LÂY**-bồ | làm tên xuất hiện |
| recheck a small bridge | /ˌriːˈtʃek ə smɔl brɪdʒ/ | rii-**CHE-C** ờ x-mo-l b-rị-j | kiểm cầu nhỏ |
| match the denominator to the version | /mætʃ ðə dɪˈnɑməˌneɪtər tə ðə ˈvɝʒən/ | me-ch đờ đị-**NO**-mờ-nây-tờ(r) tờ đờ **VƠ(R)**-zhần | khóa base/DLC |

### Đối chiếu không được trộn

Nhìn thấy landmark từ trên không không nhất thiết set flag. Ngược lại, thấy place name xuất hiện là bằng chứng hệ thống tốt hơn để đánh dấu location.

### Tự kiểm tra

1. Dấu hiệu nào nên xuất hiện trước khi tick location?
2. Vì sao glide overhead có thể bỏ lỡ?
3. Có được dùng 1,207 cho một save cài DLC mà không kiểm version không?

### Đáp án tự kiểm tra

1. Place name/map label.
2. Trigger có thể nằm ở ground level.
3. Không; DLC thay inclusion set và denominator.


## Bảng cue học tập — 16 điểm bám

| Cue | Phần | Nguồn hoặc phạm vi | Dữ kiện | Giới hạn |
|---|---|---|---|---|
| 1.1 | Mô-đun 1 | Base map ledger | 900+120+4+183 | chỉ bốn nhóm |
| 1.2 | Mô-đun 1 | Starred-save map display | 100.00% hiện sau lần hạ Ganon đầu tiên | mức hoàn thành bản đồ, không phải mọi hoạt động |
| 1.3 | Mô-đun 1 | Quy tắc tính | quests/chests/Compendium excluded | sổ riêng |
| 1.4 | Mô-đun 1 | Counter logic | equal weight + rounding | display có làm tròn |
| 2.1 | Mô-đun 2 | tracked_locations.txt | 200 candidates | community input |
| 2.2 | Mô-đun 2 | generator skip list | 13 skipped → 187 | phép trừ một |
| 2.3 | Mô-đun 2 | map_locations.js | 4 Remains rows overlap | phép trừ hai |
| 2.4 | Mô-đun 2 | Zelda Wiki convention | 226 locations / ~0.08 | không thay 183 |
| 3.1 | Mô-đun 3 | Korok economy | 441 seeds | max slots |
| 3.2 | Mô-đun 3 | Korok discovery | 459 remaining after 441 | tới all 900 |
| 3.3 | Mô-đun 3 | Hestu gate | 900 + fully upgraded stashes | reward condition |
| 3.4 | Mô-đun 3 | Hestu's Gift | symbolic Key Item | không combat ability |
| 4.1 | Mô-đun 4 | World trigger | place name appears | verification |
| 4.2 | Mô-đun 4 | Travel method | ground-level crossing | glide may miss |
| 4.3 | Mô-đun 4 | Version boundary | DLC changes denominator | base-only 1,207 |
| 4.4 | Mô-đun 4 | README route | Minigames04→Completion01→02 | thứ tự học |

## Kể lại — 8 câu `[PARA]`

Các câu sau là câu luyện tự nhiên, không phải phụ đề hoặc bản chép lời trong game.

1. `[PARA]` **The base-only map counter tracks four kinds of entries.**  
   **Đọc Việt:** đờ bâi-x **ÂU-N-LI** me-p cao-n-tờ(r) t-re-c-x pho(r) kai-n-đ-z ờv **EN**-tri-z.  
   **Nghĩa:** Counter base-only theo dõi bốn loại entry.
2. `[PARA]` **Nine hundred Koroks, one hundred twenty Shrines, four Beasts, and one hundred eighty-three locations make one thousand two hundred seven.**  
   **Đọc Việt:** nai-n **HÂN**-đờ-rờ-đ Korok-x, uân **HÂN**-đờ-rờ-đ **TUEN**-ti shrai-n-z, pho(r) bii-x-t-x, en uân **HÂN**-đờ-rờ-đ **ÂY**-ti thrii lâu-**CÂY**-shần-z mâi-c uân **THAO**-zần-đ tuu **HÂN**-đờ-rờ-đ **XE**-vần.  
   **Nghĩa:** Bốn nhóm cộng thành 1.207.
3. `[PARA]` **The community pipeline starts with two hundred names and emits one hundred eighty-seven rows after thirteen skips.**  
   **Đọc Việt:** đờ cờ-**MYUU**-nờ-ti **PAI-P**-lai-n x-ta(r)-t-x uị(đh) tuu **HÂN**-đờ-rờ-đ nây-m-z en ị-**MIT-X** uân **HÂN**-đờ-rờ-đ **ÂY**-ti **XE**-vần râu-z **A-PH**-tờ(r) thơ(r)-**TII-N** x-ki-p-x.  
   **Nghĩa:** Pipeline 200 → 187 sau 13 skipped.
4. `[PARA]` **Subtracting four Divine Beast rows leaves one hundred eighty-three location flags.**  
   **Đọc Việt:** xờ-b-**TRÉC**-ting pho(r) đờ-**VAI-N** bii-x-t râu-z lii-v-z uân **HÂN**-đờ-rờ-đ **ÂY**-ti thrii lâu-**CÂY**-shần ph-le-g-z.  
   **Nghĩa:** Trừ bốn Beast rows còn 183 flags.
5. `[PARA]` **Four hundred forty-one seeds maximize inventory, while all nine hundred complete the Korok set.**  
   **Đọc Việt:** pho(r) **HÂN**-đờ-rờ-đ pho(r)-ti-uân xii-đ-z **MÉC**-xờ-mai-z **IN**-vần-to-ri, uai(l) o-l nai-n **HÂN**-đờ-rờ-đ cầm-**PLII-T** đờ Korok xe-t.  
   **Nghĩa:** 441 max inventory, 900 hoàn tất Korok set.
6. `[PARA]` **Hestu's Gift requires all seeds and fully upgraded stashes.**  
   **Đọc Việt:** Hestu-z giph-t rị-**KWAI-Ờ(R)-Z** o-l xii-đ-z en **PHU**-li â-p-**G-RÂY**-đị-đ x-te-shị-z.  
   **Nghĩa:** Gift cần 900 và nâng stash tối đa.
7. `[PARA]` **A location flag should be marked only when its name registers.**  
   **Đọc Việt:** ờ lâu-**CÂY**-shần ph-le-g shu-đ bi ma(r)-c-t **ÂU-N-LI** uen ịt-x nây-m **RE**-jờ-x-tờ(r)-z.  
   **Nghĩa:** Chỉ mark khi tên location register.
8. `[PARA]` **Installed DLC changes the denominator, so this lesson keeps a base-only total.**  
   **Đọc Việt:** in-**X-TO-L-Đ** đii-e-l-xii **CHÂY-N-JỊ-Z** đờ đị-**NO**-mờ-nây-tờ(r), xâu đị-x **LE**-xần kii-p-x ờ bâi-x **ÂU-N-LI** **TÂU**-tồ.  
   **Nghĩa:** DLC đổi denominator nên bài giữ base-only.

## Fact, suy luận và điều bài chưa kết luận

| Mệnh đề | Nhãn | Vì sao |
|---|---|---|
| Base-only pipeline dùng 1,207 equal-weight entries. | Fact | 900+120+4+183. |
| Starred save sau first Ganon clear làm map percentage hiện ra. | Fact | Visibility gate của counter. |
| Nintendo công bố bảng official 1,207. | Sai | Đây là community reverse-engineering. |
| tracked_locations có 200 candidates và 13 skips. | Fact | Nguồn dữ liệu minh bạch. |
| 226 conventional locations thay thế được 183 trong phương trình. | Sai | Hai scope/counting conventions khác nhau. |
| 441 seeds đủ mua mọi inventory expansion. | Fact | Inventory threshold. |
| 441 seeds đủ nhận Hestu's Gift. | Sai | Gift cần all 900 và fully upgraded stashes. |
| Place name xuất hiện là bằng chứng tốt để mark location. | Fact | Trigger đã register. |
| Denominator của DLC-installed save giống base-only. | Sai | DLC thay set entries. |

## Bài luyện

### Test 0 — Truy hồi bài nối trước

Từ Minigames 04, chuyển một câu báo điểm thành câu báo số đếm có tử số, mẫu số và phiên bản.

### Test A — Phép tính 1,207

Viết và đọc phương trình bốn nhóm; nêu hai hoạt động không thuộc counter.

### Test B — Pipeline location

Giải thích 200 → 187 → 183 và vai trò riêng của số 226.

### Test C — Korok economy

Sửa claim: “Finding 441 seeds completes all Korok locations and awards Hestu's Gift.”

### Test D — Location verification

Nêu cách kiểm một bridge flag mà không chỉ glide overhead.

### Test E — Version boundary

Sửa claim: “1,207 is the official denominator for every installed version.”

### Test F — Brief 60 giây

Nói map scope, pipeline, 441/900, Gift gate và DLC boundary.

## Đáp án

- **Test 0:** Ví dụ: “My base-only map counter shows 16 of 16 minigame records” không đủ; phải chuyển sang đúng map data như 1,207/1,207 và nêu base-only.
- **Test A:** 900 Koroks + 120 Shrines + 4 Beasts + 183 locations = 1,207; Side Quests và Compendium nằm ngoài.
- **Test B:** 200 candidates − 13 skips = 187 rows; trừ 4 Beast rows = 183; 226 là convention riêng của Zelda Wiki.
- **Test C:** 441 max inventory; all 900 + fully upgraded stashes mới mở Hestu's Gift.
- **Test D:** Đi qua ở ground level, chờ place name register, rồi mới tick.
- **Test E:** 1,207 là community reverse-engineered base-only count; DLC và convention khác có denominator khác.
- **Test F:** Phần trình bày đạt khi nói đúng bốn nhóm, hai phép trừ, hai mốc Korok và phạm vi phiên bản.

## Lịch ôn `0 → 1 → 3 → 7 → 14`

| Ngày | Việc học | Điểm khóa |
|---|---|---|
| 0 | map table + Module 1 | 1,207 · exclusions |
| 1 | Module 2 | 200→187→183 · 226 separate |
| 3 | Module 3 | 441 ≠ 900 · Gift gate |
| 7 | Module 4 + Tests A–E | location trigger · DLC |
| 14 | Test F + checklist | 24/24 mới hoàn thành |

## Checklist hoàn thành — 24 mục

- [ ] Tôi nói rõ Map 100% là map counter chứ không phải mọi hoạt động.
- [ ] Tôi giữ scope Completion01 ở base game không cài DLC.
- [ ] Tôi đếm đúng 900 Korok locations trong phương trình.
- [ ] Tôi đếm đúng 120 Ancient Shrine entries.
- [ ] Tôi đếm đúng bốn Divine Beast entries.
- [ ] Tôi dùng 183 discoverable-location flags trong pipeline 1,207.
- [ ] Tôi tính 900 + 120 + 4 + 183 = 1,207.
- [ ] Tôi biết mỗi entry có equal weight trong cách phân rã cộng đồng.
- [ ] Tôi không gọi 1,207 là official Nintendo table.
- [ ] Tôi bắt đầu pipeline từ 200 candidate names.
- [ ] Tôi trừ 13 skipped names để còn 187 emitted rows.
- [ ] Tôi trừ bốn Divine Beast Remains rows để còn 183 locations.
- [ ] Tôi giữ 226/~0.08 như Zelda Wiki convention riêng.
- [ ] Tôi không cộng 183 và 226 với nhau.
- [ ] Tôi biết 441 seeds mở hết inventory slots.
- [ ] Tôi biết 459 seeds còn lại vẫn thuộc mục tiêu 900.
- [ ] Tôi nhớ Hestu's Gift cần all 900 và fully upgraded stashes.
- [ ] Tôi không gọi Hestu's Gift là combat ability mới.
- [ ] Tôi chờ place name register trước khi tick location.
- [ ] Tôi biết gliding overhead có thể bỏ lỡ trigger mặt đất.
- [ ] Tôi giữ quests, Compendium và Shrine chests ngoài map counter.
- [ ] Tôi biết Expansion Pass làm đổi denominator.
- [ ] Tôi nối Minigames 04 sang Completion01 đúng tuyến.
- [ ] Tôi chuyển tiếp từ Completion01 sang Completion02.

## Đi tiếp

- [← Skill and Luck — 4 Minigames](minigames-04-skill-and-luck-4-game-english-study-hub.md)
- [Hyrule Compendium, Monster Medals, and Bosses →](completion-02-hyrule-compendium-monster-medals-and-bosses-english-study-hub.md)
