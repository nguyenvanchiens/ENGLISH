/* =========================================================
   KHÁI NIỆM — vì sao tiếng Anh cần từng điểm ngữ pháp

   Phủ kín 26 tuần bằng 29 khái niệm, không phải 130 bài rời.
   Lý do: các ngày trong cùng một tuần chia sẻ CÙNG MỘT khái niệm.
   "Hiện tại đơn — quy tắc thêm s" và "Hiện tại đơn vs tiếp diễn"
   là hai bài tập khác nhau của một ý duy nhất. Viết 130 khối thì
   122 khối sẽ là bản sao của nhau.

   Mỗi khái niệm có bốn phần, luôn theo thứ tự này:
     job    việc nó làm — nó chở thông tin gì
     bridge tiếng Việt chở thông tin đó bằng dụng cụ gì
     note   chỗ khác nhau thật sự giữa hai tiếng
     lose   bỏ đi thì mất gì

   hard: 1 = khái niệm tiếng Việt KHÔNG CÓ gì tương đương.
         Bốn cái khó nhất: hiện tại hoàn thành, điều kiện,
         hoàn thành tiếp diễn, nhịp điệu khi nghe.
   ========================================================= */

const CONCEPTS = [
/* ---------------- THÁNG 1 ---------------- */
{ w:1, m:1, d:'Ngày 1–3', t:'Mạo từ  a · an · the',
  job:'Mạo từ trả lời trước một câu hỏi mà người đọc chưa kịp hỏi: <b>cái nào?</b> Và đây là điều lạ nhất về nó — mạo từ <b>không nói về cái vật, nó nói về người nghe</b>. Bạn chọn <code>a</code> hay <code>the</code> tuỳ theo trong đầu người nghe đã có cái đó hay chưa.',
  bridge:[['Tôi mua <b>một</b> quyển sách','I bought <b>a</b> book'],
          ['Quyển sách <b>đó</b> rất hay','<b>The</b> book is very good'],
          ['Tôi thích đọc sách','I like reading books']],
  note:'Tiếng Việt dùng <em>một</em>, dùng <em>đó / này / kia</em>, hoặc không dùng gì. Tiếng Anh dùng <code>a</code>, <code>the</code>, hoặc không dùng gì. <b>Cùng một việc, khác dụng cụ.</b> Việc này bạn đã làm cả đời bằng tiếng Việt rồi.',
  lose:'Người bản ngữ đọc <code>I am developer</code> thì thấy <em>developer</em> trơ trọi giống một khái niệm trừu tượng, không giống một cái nghề. Bỏ mạo từ không chỉ sai luật — nó làm mất thông tin.' },

{ w:1, m:1, d:'Ngày 4–5', t:'Danh từ đếm được và không đếm được',
  job:'Tiếng Anh bắt bạn quyết định trước mỗi danh từ: <b>cái này đếm từng cái được, hay chỉ đo được?</b> Quyết định đó điều khiển ba thứ phía sau — động từ số ít hay số nhiều, thêm <code>s</code> hay không, và dùng <code>many</code> hay <code>much</code>.',
  bridge:[['một <b>quyển</b> sách','a book'],
          ['một <b>cốc</b> nước','<b>a glass of</b> water'],
          ['một <b>lời</b> khuyên','<b>a piece of</b> advice']],
  note:'<b>Bạn đã biết khái niệm này rồi</b> — tiếng Việt gọi là loại từ. Ta không nói “một nước”, ta nói “một <b>cốc</b> nước”. Tiếng Anh y vậy: không phải <em>an information</em> mà <em>a piece of information</em>. Khác biệt duy nhất là tiếng Việt dùng loại từ cho gần như mọi danh từ, tiếng Anh chỉ dùng cho nhóm không đếm được.',
  lose:'Sai một chỗ này thì sai theo cả chuỗi: <code>there are some milk</code>, <code>many informations</code>, <code>I have many work</code>. Ba lỗi nhưng một nguyên nhân.' },

{ w:2, m:1, d:'Ngày 8–12', t:'Giới từ',
  job:'Giới từ là <b>cái móc</b> nối một danh từ vào phần còn lại của câu. Nó trả lời: cái này ở đâu, lúc nào, thuộc về ai, đi cùng cái gì.',
  bridge:[['ở Hà Nội','<b>in</b> Hanoi'],
          ['vào thứ Hai','<b>on</b> Monday'],
          ['chờ ai','wait <b>for</b> somebody'],
          ['nghe nhạc','listen <b>to</b> music']],
  note:'Chỗ khó thật sự <b>không phải</b> at / on / in — phần đó có luật (điểm, mặt, khối). Chỗ khó là <b>giới từ đi kèm động từ và tính từ</b>: tiếng Việt nói “chờ ai”, tiếng Anh phải nói <em>wait <b>for</b> somebody</em>. Những cái này <b>không có luật</b>. Đừng dịch — học <em>listen to</em> như một từ duy nhất.',
  lose:'Sai giới từ là lỗi bị nhận ra nhanh nhất, vì người bản ngữ nghe cụm đó hàng nghìn lần nên tai bắt được ngay. Và nó không tự hết theo thời gian — chỉ hết khi bạn học theo cụm.' },

{ w:3, m:1, d:'Ngày 15–19', t:'Hiện tại đơn và hiện tại tiếp diễn',
  job:'Tiếng Anh bắt bạn chọn giữa hai câu hỏi: <b>việc này là thói quen, hay đang xảy ra lúc này?</b> Hai câu hỏi khác nhau thì hai thì khác nhau — không có cách nói chung chung ở giữa.',
  bridge:[['Tôi làm ở Hà Nội <em>(việc lâu dài)</em>','I <b>work</b> in Hanoi'],
          ['Tôi đang làm dự án này','I <b>am working</b> on this project'],
          ['Tôi thường đi bộ đi làm','I <b>usually walk</b> to work']],
  note:'Tiếng Việt phân biệt bằng cách <b>thêm chữ</b>: “đang”, “thường”, “hay”. Bỏ mấy chữ đó thì câu vẫn đúng, người nghe tự hiểu. Tiếng Anh thì <b>đổi hình động từ</b> và không cho phép bỏ — <em>I work</em> và <em>I am working</em> là hai câu khác nghĩa.',
  lose:'Nói <em>I am working in Hanoi</em> khi ý là “tôi làm việc ở Hà Nội” thì người ta hiểu bạn đang tạm ở Hà Nội, sắp đi. Nghĩa lệch hẳn mà bạn không biết.' },

{ w:4, m:1, d:'Ngày 22–26', t:'Quá khứ đơn',
  job:'Tiếng Anh <b>ghi thời gian lên chính động từ</b>. Đó là ý cốt lõi của toàn bộ hệ thống 12 thì: không phải thêm từ chỉ thời gian, mà là <b>đổi hình động từ</b>.',
  bridge:[['Hôm qua tôi xem phim','Yesterday I <b>watched</b> a movie'],
          ['Tôi <b>đã</b> ăn rồi','I <b>ate</b>'],
          ['Tôi <b>không</b> đi','I <b>didn\'t</b> go']],
  note:'Tiếng Việt dùng “đã / rồi” và <b>động từ không đổi</b>. Tiếng Anh ngược lại: động từ đổi hình, và khi đã đổi thì không cần thêm từ chỉ thời gian. Đây cũng là lý do phải học 80 động từ bất quy tắc — chúng đổi theo cách riêng của mình.',
  lose:'Viết <em>Yesterday I watch a movie</em> thì câu tự mâu thuẫn: <em>yesterday</em> nói quá khứ, <em>watch</em> nói hiện tại. Người đọc phải chọn tin cái nào.' },

/* ---------------- THÁNG 2 ---------------- */
{ w:5, m:2, d:'Ngày 29–33', t:'Hiện tại hoàn thành', hard:1,
  job:'Đây là thì <b>khó nhất với người Việt</b>, vì tiếng Việt không có gì tương đương. Nó không nói về quá khứ, cũng không nói về hiện tại — nó nói về <b>quá khứ còn ảnh hưởng tới hiện tại</b>. Câu hỏi nó trả lời không phải “khi nào” mà là “<b>bây giờ tình hình thế nào</b>”.',
  bridge:[['Tôi mất chìa khoá rồi <em>(giờ không vào được)</em>','I <b>have lost</b> my key'],
          ['Tôi mất chìa khoá hôm qua <em>(kể chuyện)</em>','I <b>lost</b> my key yesterday'],
          ['Tôi sống ở đây 5 năm rồi <em>(vẫn đang)</em>','I <b>have lived</b> here for 5 years']],
  note:'Cả ba câu tiếng Việt dùng “mất / sống” y như nhau, phân biệt bằng chữ “rồi” và bằng ngữ cảnh. Tiếng Anh chia thành hai thì riêng. Mẹo chắc nhất: <b>nếu câu có mốc thời gian cụ thể trong quá khứ (yesterday, last week, in 2020) thì KHÔNG dùng hiện tại hoàn thành</b> — vì thì này cố tình không nói khi nào, nó chỉ quan tâm kết quả bây giờ.',
  lose:'Đây là điểm phân biệt A2 với B1 rõ nhất. Không dùng được thì bạn cứ mãi ở A2, dù từ vựng nhiều đến đâu.' },

{ w:6, m:2, d:'Ngày 36–40', t:'Các cách nói về tương lai',
  job:'Tiếng Anh có nhiều cách nói về tương lai, và <b>cách bạn chọn tiết lộ mức độ chắc chắn và mức độ đã lên kế hoạch</b>.',
  bridge:[['Tôi sẽ giúp bạn <em>(vừa nghĩ ra)</em>','I <b>will</b> help you'],
          ['Tôi định đi Đà Nẵng <em>(đã tính)</em>','I <b>am going to</b> go to Da Nang'],
          ['Mai tôi gặp khách <em>(đã hẹn xong)</em>','I <b>am meeting</b> the client tomorrow']],
  note:'Tiếng Việt dùng “sẽ / định / sắp” khá lỏng, nhiều khi bỏ hẳn — “mai tôi gặp khách” là đủ. Tiếng Anh <b>buộc bạn chọn</b>, và mỗi lựa chọn nói thêm một điều: <em>will</em> là vừa quyết định, <em>going to</em> là đã tính trước, <em>am meeting</em> là đã hẹn chắc.',
  lose:'Dùng <em>will</em> cho mọi thứ thì bạn nghe như luôn ứng biến, chưa bao giờ lên kế hoạch. Nghĩa vẫn hiểu, nhưng giọng điệu sai.' },

{ w:7, m:2, d:'Ngày 43–45', t:'So sánh hơn và so sánh nhất',
  job:'Đây là một trong ít chỗ tiếng Anh <b>đổi hình từ theo mức độ</b> — thêm <code>-er</code>, <code>-est</code>, hoặc thêm <code>more</code> / <code>most</code>. Và cái quyết định dùng cách nào là <b>độ dài của từ</b>, không phải nghĩa của nó.',
  bridge:[['nhanh <b>hơn</b>','fast<b>er</b>'],
          ['nhanh <b>nhất</b>','the fast<b>est</b>'],
          ['quan trọng <b>hơn</b>','<b>more</b> important'],
          ['bằng nhau','<b>as</b> fast <b>as</b>']],
  note:'Tiếng Việt chỉ thêm “hơn / nhất”, từ gốc không đổi. Tiếng Anh đổi hình từ, và có hai cách: từ <b>ngắn</b> (một âm tiết) thêm đuôi, từ <b>dài</b> (ba âm tiết trở lên) thêm <em>more / most</em>. Từ hai âm tiết thì tuỳ — nhưng đa số đuôi <code>-y</code> thì thêm đuôi (<em>busy → busier</em>).',
  lose:'<em>more fast</em> hay <em>importanter</em> nghe rất “dịch máy”. Nhưng đây là lỗi dễ sửa nhất trong cả danh sách, vì luật ngắn và ít ngoại lệ.' },

{ w:7, m:2, d:'Ngày 46–47', t:'Tính từ và trạng từ',
  job:'Hai loại này mô tả hai thứ khác nhau: <b>tính từ mô tả người hoặc vật, trạng từ mô tả hành động</b>. Chọn sai loại là chọn sai đối tượng đang được mô tả.',
  bridge:[['Anh ấy là người cẩn thận','He is a <b>careful</b> person'],
          ['Anh ấy làm việc cẩn thận','He works <b>carefully</b>'],
          ['Xe này nhanh','This car is <b>fast</b>']],
  note:'Tiếng Việt dùng <b>cùng một chữ</b> “cẩn thận” cho cả hai — vị trí trong câu tự nói lên nó đang mô tả gì. Tiếng Anh đổi hình từ bằng cách thêm <code>-ly</code>. Đây là lý do bạn thấy <code>-ly</code> ở khắp nơi. Nhớ hai ngoại lệ: <em>fast</em> và <em>hard</em> không thêm <code>-ly</code>; còn <em>friendly, lovely</em> có <code>-ly</code> nhưng là tính từ.',
  lose:'<em>He works careful</em> nghe như “anh ấy làm việc, và anh ấy là người cẩn thận” — hai ý dính vào nhau, người đọc phải tự tách ra.' },

{ w:8, m:2, d:'Ngày 50–54', t:'Động từ khuyết thiếu',
  job:'Nhóm từ này không mô tả hành động — chúng mô tả <b>thái độ của người nói về hành động</b>: bắt buộc, được phép, có thể, nên. Cùng một hành động, đổi modal là đổi hoàn toàn quan hệ giữa bạn và người nghe.',
  bridge:[['Bạn <b>phải</b> làm xong','You <b>must</b> finish'],
          ['Bạn <b>nên</b> làm xong','You <b>should</b> finish'],
          ['Bạn <b>không cần</b> làm xong','You <b>don\'t have to</b> finish'],
          ['<b>Cấm</b> bạn làm việc đó','You <b>mustn\'t</b> do that']],
  note:'Tiếng Việt cũng có “phải / nên / có thể” nên khái niệm này dễ. Chỗ bẫy là một cặp duy nhất: <b><code>mustn\'t</code> KHÔNG phải phủ định của <code>must</code></b>. <em>You mustn\'t go</em> là cấm đi. <em>You don\'t have to go</em> là không cần đi, tuỳ bạn. Hai nghĩa <b>trái ngược nhau</b>, và người Việt hay lẫn vì tiếng Việt dùng “không phải” cho cả hai.',
  lose:'Lẫn hai từ đó là loại lỗi gây hậu quả thật trong công việc — bạn nói “cấm” khi ý là “không bắt buộc”.' },

/* ---------------- THÁNG 3 ---------------- */
{ w:9, m:3, d:'Ngày 57–61', t:'Câu điều kiện', hard:1,
  job:'Câu điều kiện là cách nói về <b>chuyện chưa xảy ra hoặc không thật</b>. Và tiếng Anh làm một việc rất lạ: nó <b>lùi thì về quá khứ để đánh dấu “cái này không thật”</b>, chứ không phải để nói về quá khứ.',
  bridge:[['Nếu trời mưa, tôi ở nhà <em>(có thể xảy ra)</em>','<b>If it rains</b>, I <b>will</b> stay home'],
          ['Nếu tôi giàu, tôi mua nhà <em>(không thật)</em>','<b>If I were</b> rich, I <b>would</b> buy a house'],
          ['Nếu tôi đã biết, tôi đã nói <em>(quá khứ, không thật)</em>','<b>If I had known</b>, I <b>would have</b> told you']],
  note:'Tiếng Việt dùng cùng chữ “nếu” cho cả ba, còn thật hay không thì để ngữ cảnh lo. Tiếng Anh <b>đánh dấu bằng thì</b>. Nhớ thế này là đủ: <b>lùi thì càng xa thì càng ít thật</b> — hiện tại là có thể xảy ra, lùi một bước là không thật ở hiện tại, lùi hai bước là không thật ở quá khứ. Không liên quan gì tới thời gian.',
  lose:'Đây là điểm ngữ pháp làm người nghe đánh giá trình độ nhanh nhất. Dùng đúng loại 2 và loại 3 là dấu hiệu rõ ràng của B1+.' },

{ w:10, m:3, d:'Ngày 64–68', t:'V-ing và to V',
  job:'Khi hai động từ đứng cạnh nhau, tiếng Anh bắt động từ thứ hai đổi hình — thành <b>V-ing</b> hoặc <b>to V</b>. Và cái quyết định dùng dạng nào là <b>động từ thứ nhất</b>, không phải nghĩa của câu.',
  bridge:[['Tôi thích đọc sách','I enjoy <b>reading</b> books'],
          ['Tôi muốn đọc sách','I want <b>to read</b> books'],
          ['Tôi giỏi bơi','I am good at <b>swimming</b>']],
  note:'Tiếng Việt để hai động từ cạnh nhau là xong — “thích đọc”, “muốn đọc”, giống nhau. Tiếng Anh thì <em>enjoy</em> luôn đi với V-ing, <em>want</em> luôn đi với to V, và <b>không có lý do nào cả</b> — đây là chỗ phải học thuộc danh sách. Chỉ có một luật chắc chắn: <b>sau mọi giới từ luôn là V-ing</b>.',
  lose:'May là sai chỗ này không đổi nghĩa — trừ vài động từ đặc biệt: <em>I stopped smoking</em> (bỏ thuốc) khác hẳn <em>I stopped to smoke</em> (dừng lại để hút).' },

{ w:11, m:3, d:'Ngày 71–75', t:'Câu bị động',
  job:'Bị động không phải cách nói vòng vo. Nó là công cụ để <b>đổi thứ được nói tới</b>: đưa cái quan trọng lên đầu câu, và bỏ hẳn người thực hiện khi ai làm không quan trọng.',
  bridge:[['Người ta xây cây cầu này năm 1990','This bridge <b>was built</b> in 1990'],
          ['Ai đó đã sửa lỗi rồi','The bug <b>has been fixed</b>'],
          ['Họ đang xử lý yêu cầu của bạn','Your request <b>is being handled</b>']],
  note:'Tiếng Việt có “được / bị” nhưng dùng ít hơn nhiều, và ta hay thay bằng chủ ngữ mơ hồ: “người ta”, “ai đó”, “họ”. Tiếng Anh không thích chủ ngữ mơ hồ — nó <b>bỏ hẳn chủ ngữ</b> bằng câu bị động. Đó là lý do tài liệu kỹ thuật và báo chí tiếng Anh đầy câu bị động: không phải để vòng vo, mà vì ai làm thật sự không quan trọng.',
  lose:'Không dùng được bị động thì bạn buộc phải viết <em>someone / people / they</em> liên tục, và văn nghe như kể chuyện chứ không như báo cáo.' },

{ w:12, m:3, d:'Ngày 78–82', t:'Quá khứ hoàn thành',
  job:'Khi kể chuyện quá khứ mà có <b>hai mốc thời gian</b>, tiếng Anh cần cách nói rõ cái nào xảy ra trước. Đó là việc của <code>had + V3</code>.',
  bridge:[['Tôi đến thì họ đi rồi','When I arrived, they <b>had left</b>'],
          ['Tôi ăn rồi mới đi làm','I went to work after I <b>had eaten</b>'],
          ['Trước đó tôi chưa từng thấy vậy','I <b>had</b> never <b>seen</b> that before']],
  note:'Tiếng Việt đánh dấu thứ tự bằng chữ “rồi”, “trước đó”, hoặc chỉ bằng <b>thứ tự kể</b> — kể trước thì hiểu là xảy ra trước. Tiếng Anh cho bạn tự do đảo thứ tự kể, vì thì đã giữ thông tin đó. Đây là lý do văn kể chuyện tiếng Anh linh hoạt hơn.',
  lose:'Không dùng thì bạn buộc phải kể đúng theo thứ tự xảy ra, và mọi câu chuyện nghe như liệt kê: rồi… rồi… rồi…' },

/* ---------------- THÁNG 4 ---------------- */
{ w:13, m:4, d:'Ngày 85–89', t:'Mệnh đề quan hệ',
  job:'Đây là cách <b>nhét một câu vào giữa một câu khác</b> để giải thích thêm về một danh từ, mà không phải cắt thành hai câu rời.',
  bridge:[['Người đang nói là quản lý của tôi','The man <b>who is talking</b> is my manager'],
          ['Cái file tôi gửi bạn hôm qua','The file <b>that I sent you</b> yesterday'],
          ['Đây là công ty tôi làm việc','This is the company <b>where I work</b>']],
  note:'Tiếng Việt làm việc này bằng <b>trật tự từ</b>, không cần từ nối: “người đang nói” — đặt cạnh nhau là hiểu. Tiếng Anh <b>bắt buộc có từ nối</b>: <em>who, which, that, where</em>. Bỏ đi thì câu vỡ.',
  lose:'Không có nó thì bạn chỉ viết được câu ngắn, và bài nghe như văn lớp một: <em>This is a file. I sent it to you. It has the report.</em>' },

{ w:14, m:4, d:'Ngày 92–96', t:'Câu tường thuật',
  job:'Khi kể lại lời người khác, tiếng Anh <b>lùi thì một bước</b> — vì lời đó đã nói ở quá khứ so với lúc bạn kể.',
  bridge:[['Anh ấy nói: “Tôi đang bận”','He said he <b>was</b> busy'],
          ['Cô ấy nói: “Tôi sẽ đến”','She said she <b>would</b> come'],
          ['Anh ấy hỏi tôi đang ở đâu','He asked <b>where I was</b>']],
  note:'Tiếng Việt kể lại thì <b>giữ nguyên câu gốc</b> — “anh ấy nói anh ấy đang bận”, không đổi gì. Tiếng Anh đổi thì, đổi đại từ, đổi cả từ chỉ thời gian (<em>today</em> → <em>that day</em>). Lý do: tiếng Anh giữ mọi thứ trong câu <b>đồng bộ về mốc thời gian</b>, còn tiếng Việt để người nghe tự hiểu.',
  lose:'Không lùi thì thì người đọc không biết đâu là lời bạn, đâu là lời người khác — hai giọng dính vào nhau.' },

{ w:15, m:4, d:'Ngày 99–103', t:'Phrasal verbs',
  job:'Đây không phải ngữ pháp mà là <b>cách người bản ngữ nói hằng ngày</b>. Cùng một ý, tiếng Anh có hai cách: một từ dài gốc Latin, và một cụm động từ ghép giới từ. Cụm ngắn là cách nói thật; từ dài là cách viết trang trọng.',
  bridge:[['hoãn lại','<b>put off</b> <em>(nói)</em> · postpone <em>(viết)</em>'],
          ['tìm ra','<b>find out</b> <em>(nói)</em> · discover <em>(viết)</em>'],
          ['chịu đựng','<b>put up with</b> <em>(nói)</em> · tolerate <em>(viết)</em>']],
  note:'Tiếng Việt cũng có chuyện này — “hoãn” và “để sau” là hai giọng của cùng một ý. Nhưng tiếng Anh dùng cụm nhiều hơn hẳn, và <b>nghĩa của cụm không suy ra được từ hai từ ghép lại</b>: <em>put off</em> chẳng liên quan gì tới <em>put</em> hay <em>off</em>. Nên phải học như từ mới, không dịch từng chữ.',
  lose:'Không biết phrasal verb thì bạn <b>hiểu được văn viết nhưng không hiểu được người ta nói</b>. Đây chính là lý do nhiều người đọc tốt mà nghe không nổi.' },

{ w:16, m:4, d:'Ngày 106–110', t:'Liên kết ý',
  job:'Từ nối cho người đọc biết <b>câu sau có quan hệ gì với câu trước</b>: cùng chiều, ngược chiều, nguyên nhân, hay kết quả. Nó là biển chỉ đường trong bài viết.',
  bridge:[['nhưng','<b>however</b> · <b>but</b>'],
          ['vì vậy','<b>therefore</b> · <b>so</b>'],
          ['mặc dù <em>+ một câu</em>','<b>although</b> it rained…'],
          ['mặc dù <em>+ một danh từ</em>','<b>despite</b> the rain…']],
  note:'Tiếng Việt có đủ những từ này nên khái niệm không lạ. Chỗ khó là <b>tiếng Anh phân biệt từ nối theo vị trí ngữ pháp</b>: <em>although</em> nối hai mệnh đề, còn <em>despite</em> phải đi với danh từ. Cùng nghĩa “mặc dù” nhưng không thay nhau được.',
  lose:'Đây chính là chỗ chữa lỗi lớn nhất trong bài viết thử của bạn — bạn dùng dấu phẩy nối năm câu liền. Từ nối là dụng cụ đúng cho việc đó.' },

/* ---------------- THÁNG 5 ---------------- */
{ w:17, m:5, d:'Ngày 113–116', t:'Thì hoàn thành tiếp diễn', hard:1,
  job:'Nhóm thì này trả lời một câu hỏi rất cụ thể: <b>việc đó kéo dài bao lâu, và có còn đang tiếp tục không?</b> Nó không nói kết quả — nó nói quá trình.',
  bridge:[['Tôi học tiếng Anh 6 tháng rồi <em>(vẫn học)</em>','I <b>have been learning</b> English for 6 months'],
          ['Tôi học xong 6 bài <em>(kết quả)</em>','I <b>have learned</b> 6 lessons'],
          ['Tôi chờ 2 tiếng mới gặp được','I <b>had been waiting</b> for 2 hours']],
  note:'Tiếng Việt gộp hết vào “rồi” và “đang”. Tiếng Anh tách ra: <em>have learned</em> nhấn kết quả, <em>have been learning</em> nhấn quá trình còn chạy. Với hầu hết câu thì cả hai đều được hiểu — <b>đây là điểm ngữ pháp để văn tự nhiên hơn, không phải để đúng hay sai</b>.',
  lose:'Không dùng thì bạn không sai, chỉ là văn thiếu một tầng nghĩa. Đây đúng là loại điểm phân biệt B1 với B2.' },

{ w:17, m:5, d:'Ngày 117', t:'Modal perfect — đoán về quá khứ',
  job:'Đây là cách <b>đoán về chuyện đã xảy ra</b>. Bạn không biết chắc, nên bạn nói ra mức độ tin của mình.',
  bridge:[['Chắc chắn anh ấy quên rồi','He <b>must have</b> forgotten'],
          ['Có lẽ anh ấy đã quên','He <b>might have</b> forgotten'],
          ['Đáng lẽ anh ấy phải nhắc tôi','He <b>should have</b> told me']],
  note:'Tiếng Việt dùng “chắc là / có lẽ / đáng lẽ” — thêm từ vào trước, động từ không đổi. Tiếng Anh ghép <b>modal + have + V3</b>, ba modal cho ba mức độ tin khác nhau. Riêng <em>should have</em> mang thêm sắc thái <b>tiếc hoặc trách</b>, không chỉ là đoán.',
  lose:'Thiếu nhóm này thì bạn không nói được về những chuyện mình không chắc — mà trong công việc thì phần lớn chuyện đều không chắc.' },

{ w:18, m:5, d:'Ngày 120–124', t:'Đảo ngữ và câu chẻ',
  job:'Hai cấu trúc này <b>không thêm thông tin gì mới</b>. Việc duy nhất của chúng là đổi chỗ nhấn mạnh — đưa thứ bạn muốn người đọc chú ý lên đầu câu.',
  bridge:[['Tôi chưa bao giờ thấy chuyện như thế','<b>Never have I seen</b> anything like that'],
          ['Cái tôi cần là thời gian','<b>What I need is</b> time'],
          ['Chính anh ấy làm việc đó','<b>It was he who</b> did it']],
  note:'Tiếng Việt nhấn mạnh bằng <b>thêm từ</b> (“chính”, “chứ”, “cơ”) hoặc bằng <b>giọng nói</b>. Văn viết tiếng Anh không có giọng, nên nó <b>đảo trật tự câu</b> để làm việc đó. Đây là lý do những cấu trúc này nghe “văn vẻ” — chúng thuộc văn viết, không phải văn nói.',
  lose:'Không dùng thì bài viết đúng nhưng đều một giọng, không có chỗ nào nổi lên. Đây là điểm ngữ pháp B2 rõ nhất.' },

{ w:19, m:5, d:'Ngày 127–131', t:'Cấu trúc đoạn văn',
  job:'Đây không phải ngữ pháp mà là <b>cách sắp xếp ý</b>. Và tiếng Anh có một quy ước rất chặt mà tiếng Việt không có: <b>câu đầu đoạn phải nói ngay ý chính</b>, các câu sau chỉ để chứng minh câu đầu.',
  bridge:[['mở bài dẫn dắt cho hay','vào thẳng luận điểm ở câu đầu'],
          ['ý chính để cuối cho có cao trào','ý chính lên ngay đầu đoạn'],
          ['một đoạn nhiều ý','<b>một đoạn một ý</b>']],
  note:'Văn Việt hay dẫn dắt trước rồi mới tới ý, và để câu hay nhất ở cuối. Văn Anh làm ngược lại: <b>nói kết luận trước, giải thích sau</b>. Người đọc tiếng Anh mong biết ngay đoạn này nói gì để quyết định có đọc tiếp hay không.',
  lose:'Ngữ pháp đúng hết mà sắp xếp theo kiểu Việt thì bài vẫn bị chấm thấp — vì người đọc không tìm thấy luận điểm ở đâu.' },

{ w:20, m:5, d:'Ngày 134–138', t:'Vì sao nghe không ra', hard:1,
  job:'Bạn nghe không ra <b>không phải vì không biết từ</b>. Phần lớn là vì người bản ngữ <b>nối âm và bỏ âm</b>: <em>want to</em> thành <em>wanna</em>, <em>going to</em> thành <em>gonna</em>, <em>did you</em> thành <em>didja</em>. Từ bạn biết cả, nhưng nó không phát ra như trong từ điển.',
  bridge:[['nghe từng chữ rời','nghe theo <b>cụm</b>'],
          ['dịch thầm trong đầu','nghe rồi <b>nhại lại ngay</b>, không dịch'],
          ['nghe một lần rồi bỏ','nghe <b>một đoạn nhiều lần</b> cho tới khi trôi']],
  note:'Tiếng Việt là ngôn ngữ <b>âm tiết đều</b> — mỗi chữ một nhịp, rõ như nhau. Tiếng Anh <b>có trọng âm</b>: từ quan trọng đọc rõ và dài, từ phụ đọc nhanh và mờ gần như biến mất. Tai người Việt được huấn luyện để nghe mọi âm đều nhau, nên gặp tiếng Anh thì mất phương hướng. Shadowing chữa đúng chỗ này: <b>bắt miệng bạn làm theo nhịp đó</b>, rồi tai tự nhận ra.',
  lose:'Học thêm từ vựng mãi mà không luyện nhịp thì nghe vẫn không khá lên. Đây là lý do nhiều người có 5.000 từ mà vẫn không hiểu hội thoại.' },

{ w:21, m:5, d:'Ngày 141–145', t:'Collocation và word family',
  job:'Biết một từ <b>không đủ để dùng nó</b>. Bạn còn phải biết từ nào đi cùng nó. <em>deadline</em> đi với <em>meet</em>, không đi với <em>catch</em>. Không có luật — chỉ có thói quen của người bản ngữ.',
  bridge:[['bắt kịp deadline','<b>meet</b> a deadline <em>(không phải catch)</em>'],
          ['làm một quyết định','<b>make</b> a decision <em>(không phải do)</em>'],
          ['gây ra một lỗi','<b>make</b> a mistake <em>(không phải create)</em>']],
  note:'Đây là chỗ dịch từng chữ từ tiếng Việt sẽ sai nhiều nhất, vì tiếng Việt ghép động từ với danh từ theo logic khác. Và đây cũng là <b>ranh giới thật giữa “biết từ” và “dùng được từ”</b>.',
  lose:'Câu của bạn đúng ngữ pháp, đúng từ, nhưng nghe như dịch máy. Đây là thứ cuối cùng cần sửa để lên B2, và cũng là thứ mất nhiều thời gian nhất.' },

/* ---------------- THÁNG 6 ---------------- */
{ w:22, m:6, d:'Ngày 148–152', t:'Tháng 6 — ôn theo khối, không ôn theo bài',
  job:'Tháng cuối không học điểm mới. Việc của nó là <b>gom các khái niệm rời thành từng khối</b>, vì bạn không dùng ngữ pháp theo từng bài — bạn dùng cả hệ thống cùng lúc trong một câu.',
  bridge:[['ôn lại bài 1, bài 2, bài 3…','ôn <b>khối THÌ</b> — cả 12 thì cùng lúc'],
          ['học lại từng luật','ôn <b>khối ĐIỀU KIỆN &amp; GIẢ ĐỊNH</b>'],
          ['làm lại bài tập cũ','làm <b>test trộn</b> — không biết câu nào thuộc bài nào']],
  note:'Ôn theo bài thì bạn biết trước câu này đang hỏi về cái gì, nên trả lời đúng mà không thật sự nhớ. Ôn theo khối và làm test trộn thì <b>bỏ đi cái gợi ý đó</b> — và đó mới là tình huống thật khi bạn viết hoặc nói.',
  lose:'Ôn theo bài cho bạn cảm giác đã nắm chắc, rồi tới lúc viết thật thì không rút ra được. Đây là bẫy phổ biến nhất của người tự học.' },

{ w:23, m:6, d:'Ngày 155–159', t:'Đọc — ba cách đọc khác nhau',
  job:'Đọc không phải một kỹ năng mà là <b>ba kỹ năng riêng</b>, dùng cho ba mục đích khác nhau. Người học thường chỉ biết cách thứ ba, và đó là lý do đọc chậm.',
  bridge:[['đọc để nắm ý chính trong 2 phút','<b>skimming</b>'],
          ['đọc để tìm một chi tiết cụ thể','<b>scanning</b>'],
          ['đọc để hiểu cả ý ẩn của tác giả','<b>inference</b> — khó nhất']],
  note:'Người Việt học tiếng Anh thường được dạy một cách duy nhất: đọc từng chữ từ đầu đến cuối, tra hết từ mới. Cách đó dùng cho <em>inference</em> thì đúng, nhưng dùng để nắm ý chính thì <b>chậm gấp mười lần</b> và làm bạn nản. Chọn cách đọc theo việc bạn cần làm.',
  lose:'Chỉ biết một cách đọc thì mỗi bài đọc đều thành một buổi tra từ điển — và bạn sẽ bỏ đọc sau hai tuần.' },

{ w:24, m:6, d:'Ngày 162–166', t:'Viết — tự sửa bằng checklist',
  job:'Việc của tuần này không phải viết nhiều hơn, mà là <b>tự bắt được lỗi của mình</b>. Vì viết mà không ai sửa thì bạn chỉ đang luyện cho lỗi thành thói quen.',
  bridge:[['viết xong là gửi luôn','viết xong <b>chạy checklist 10 lỗi</b>'],
          ['đọc lại thấy “trôi” là được','soát <b>từng loại lỗi một lượt</b>'],
          ['nhờ người khác sửa hết','tự bắt trước, còn lại mới nhờ']],
  note:'Đọc lại toàn bài để tìm mọi loại lỗi cùng lúc thì mắt bạn sẽ trượt qua hết — vì não không soát được nhiều thứ song song. Cách chạy được: <b>mỗi lượt chỉ tìm một loại lỗi</b>. Lượt một soát mạo từ, lượt hai soát thì, lượt ba soát số ít số nhiều. Chậm hơn nhưng bắt được gấp mấy lần.',
  lose:'Không có checklist thì bạn sửa được lỗi lạ mà bỏ qua lỗi quen — đúng những lỗi bạn mắc nhiều nhất, vì mắt đã nhìn quen thành đúng.' },

{ w:25, m:6, d:'Ngày 169–173', t:'Nghe &amp; nói — đo lại bằng bản ghi âm',
  job:'Tuần này không học gì mới. Việc của nó là <b>nghe lại chính giọng bạn từ tuần 1</b> và so với bây giờ — vì tiến bộ về phát âm là thứ bạn không tự cảm nhận được trong lúc nó đang diễn ra.',
  bridge:[['cảm giác “mình khá hơn rồi”','<b>nghe lại bản ghi âm tuần 1</b>'],
          ['tự đánh giá trong đầu','đếm số lỗi phát âm ở hai bản ghi'],
          ['so với người khác','so với <b>chính mình 6 tháng trước</b>']],
  note:'Đây là lý do lộ trình bắt ghi âm ngay từ ngày ôn tập tuần 1, dù lúc đó nghe rất tệ. Bản ghi tệ đó là <b>mốc</b> — không có nó thì sáu tháng sau bạn không có gì để so, và sẽ không tin là mình đã khá lên.',
  lose:'Không có mốc thì tiến bộ trở nên vô hình, và cái vô hình thì không giữ được động lực.' },

{ w:26, m:6, d:'Ngày 176–182', t:'Thi thử — vì sao phải thi cả 4 kỹ năng',
  job:'Bài thi cuối không phải để lấy điểm. Nó để trả lời một câu: <b>sáu tháng qua đã đổi được cái gì, và còn thiếu cái gì.</b> Muốn trả lời được thì phải đo cả bốn kỹ năng, không chỉ ngữ pháp.',
  bridge:[['thi ngữ pháp cho biết trình độ','ngữ pháp chỉ là <b>một</b> trong bốn phần'],
          ['điểm cao là xong','<b>ghi lại chủ điểm còn yếu</b> mới là mục đích'],
          ['thi xong nghỉ','thi xong <b>lập kế hoạch 6 tháng tiếp</b>']],
  note:'Đo ngữ pháp thì dễ và cho điểm cao, nên rất dễ tự lừa mình. Nhưng ngữ pháp là phần lộ trình lo được trọn vẹn nhất — nó <b>không phải chỗ bạn còn yếu</b>. Chỗ yếu nằm ở nói và từ vựng, và chỉ bài thi bốn phần mới lộ ra được.',
  lose:'Chỉ đo ngữ pháp thì bạn sẽ kết khoá với cảm giác đã gần B2, rồi vào một cuộc họp tiếng Anh thật và mất hết tự tin.' },
];

/* =========================================================
   TỪ LOẠI — phần giải thích nền, đặt ở ĐẦU trang Khái niệm.
   Không chỉ định nghĩa: mỗi loại kèm CÁCH NHẬN RA nó,
   vì biết định nghĩa mà không nhận ra được thì vô dụng.

   Vì sao ở đây chứ không ở trang Từ vựng: "danh từ là gì" là một
   KHÁI NIỆM, không phải một danh sách từ. Và nó phải đứng trước
   mọi khái niệm ngữ pháp khác — không biết danh từ là gì thì
   không hiểu nổi "danh từ đếm được".
   ========================================================= */
const POS = [
  { vi:'Danh từ', en:'noun', tag:'N', cls:'blue',
    what:'Chỉ người, vật, nơi, hoặc một ý tưởng.',
    how:[
      'Đứng được sau a / an / the',
      'Thêm s khi nhiều hơn một: one task → two tasks',
      'Làm chủ ngữ hoặc tân ngữ của câu' ],
    ends:'-tion · -sion · -ment · -ness · -ity · -er · -ance',
    ex:[['dog','con chó'],['city','thành phố'],
        ['deadline','hạn cuối'],['decision','quyết định']] },

  { vi:'Động từ', en:'verb', tag:'V', cls:'red',
    what:'Chỉ hành động, hoặc chỉ trạng thái tồn tại.',
    how:[
      'Đổi hình theo thì: work → worked → will work',
      'Đứng được sau chủ ngữ: I work · she works',
      'Mỗi câu tiếng Anh phải có ít nhất một động từ' ],
    ends:'-ise · -ize · -ify · -en · -ate',
    ex:[['run','chạy'],['is','là, thì, ở'],
        ['submit','gửi, nộp'],['simplify','làm đơn giản đi']] },

  { vi:'Tính từ', en:'adjective', tag:'ADJ', cls:'green',
    what:'Mô tả danh từ — cho biết người hay vật đó thế nào.',
    how:[
      'Đứng TRƯỚC danh từ: a blue car',
      'Hoặc đứng sau be: the car is blue',
      'KHÔNG thêm s, dù danh từ có nhiều: two blue cars' ],
    ends:'-ful · -less · -able · -ible · -ous · -ive · -al · -y',
    ex:[['happy','vui'],['blue','xanh'],
        ['reliable','đáng tin cậy'],['careless','bất cẩn']] },

  { vi:'Trạng từ', en:'adverb', tag:'ADV', cls:'amber',
    what:'Mô tả động từ, tính từ, hoặc một trạng từ khác — cho biết làm thế nào, khi nào, ở đâu, mức độ bao nhiêu.',
    how:[
      'Phần lớn là tính từ + ly: quick → quickly',
      'Trả lời câu hỏi: thế nào? khi nào? ở đâu? bao nhiêu?',
      'Bỏ trạng từ ra khỏi câu thì câu vẫn đúng ngữ pháp' ],
    ends:'-ly (gần như luôn luôn)',
    ex:[['quickly','một cách nhanh chóng'],['very','rất'],
        ['regularly','thường xuyên'],['carefully','một cách cẩn thận']] },
];

/* Một câu chứa đủ bốn loại — cách hiểu nhanh nhất */
const POS_DEMO = {
  vi:'Người quản lý đáng tin cậy đã trả lời rất nhanh.',
  parts:[
    ['The','mạo từ','' ],
    ['reliable','tính từ','green'],
    ['manager','danh từ','blue'],
    ['answered','động từ','red'],
    ['very','trạng từ','amber'],
    ['quickly','trạng từ','amber'],
  ]
};

/* Bốn loại còn lại — không phải loại chính, nhưng lộ trình có dạy */
const POS_OTHER = [
  { vi:'Mạo từ',   en:'article',     ex:'a · an · the',
    note:'Chỉ có ba từ, nhưng là lỗi số một trong bài viết của bạn.', week:'Tuần 1' },
  { vi:'Giới từ',  en:'preposition', ex:'in · on · at · for · with',
    note:'Nối danh từ với phần còn lại của câu. Học theo cụm, đừng học lẻ.', week:'Tuần 2' },
  { vi:'Đại từ',   en:'pronoun',     ex:'I · you · he · it · they',
    note:'Thay cho danh từ để không phải nhắc lại. I luôn viết hoa.', week:'Tuần 14' },
  { vi:'Liên từ',  en:'conjunction', ex:'and · but · because · although',
    note:'Nối hai câu thành một. Đây là thứ giúp bạn hết dùng dấu phẩy nối câu.', week:'Tuần 16' },
];

/* Một gốc → bốn từ. Đây là cách nhân vốn từ lên bốn lần
   mà không phải học bốn từ mới. Chính là chủ đề tuần 21. */
const WFAMILY = [
  ['act','action','active','actively','hành động'],
  ['analyse','analysis','analytical','analytically','phân tích'],
  ['care','care','careful','carefully','sự quan tâm, cẩn thận'],
  ['compare','comparison','comparative','comparatively','so sánh'],
  ['create','creation','creative','creatively','tạo ra'],
  ['decide','decision','decisive','decisively','quyết định'],
  ['differ','difference','different','differently','khác nhau'],
  ['produce','production','productive','productively','sản xuất, tạo ra'],
  ['rely','reliance','reliable','reliably','dựa vào, tin cậy'],
  ['simplify','simplicity','simple','simply','đơn giản'],
  ['strengthen','strength','strong','strongly','mạnh'],
  ['succeed','success','successful','successfully','thành công'],
];

/* Ba cái bẫy riêng của người Việt — lấy từ chính bài test của bạn */
const POS_TRAP = [
  { t:'Tính từ đứng TRƯỚC danh từ — ngược với tiếng Việt',
    vn:'xe màu xanh  ·  người quản lý giỏi',
    bad:'a car blue · a manager good',
    good:'a blue car · a good manager',
    why:'Tiếng Việt để tính từ sau danh từ, tiếng Anh để trước. Đây là lỗi bạn sẽ mắc nhiều nhất khi mới viết nhanh.' },
  { t:'Danh từ đếm được không đứng một mình',
    vn:'Tôi là developer.',
    bad:'I am developer.',
    good:'I am a developer.',
    why:'Đây đúng là lỗi trong bài viết của bạn. Danh từ đếm được ở dạng số ít gần như luôn cần a / an / the / my đứng trước.' },
  { t:'Nhiều hơn một thì danh từ phải thêm s — tính từ thì không',
    vn:'hai mươi sáu tuổi  ·  đọc sách',
    bad:'twenty six year old · reading booking',
    good:'twenty-six years old · reading books',
    why:'Cũng từ bài viết của bạn. Và chú ý: book là quyển sách, booking là việc đặt chỗ — cùng gốc nhưng khác nghĩa hoàn toàn.' },
];

/* Hai ngoại lệ phải biết, kẻo tin đuôi từ quá mức */
const POS_WARN = [
  'Đuôi -ly KHÔNG phải lúc nào cũng là trạng từ. friendly, lovely, lonely đều là TÍNH TỪ. Nhớ mặt ba từ này.',
  'Nhiều từ làm được nhiều loại mà không đổi hình. work vừa là danh từ (công việc) vừa là động từ (làm việc). book vừa là quyển sách vừa là đặt chỗ. Nhìn vị trí trong câu để biết nó đang làm loại nào.',
];

/* =========================================================
   NỀN TRƯỚC NỀN — 12 thuật ngữ bị dùng mà chưa từng định nghĩa

   Rà lại cả 7 bài học và 29 khái niệm thì thấy nhiều chỗ dùng
   thuật ngữ như thể người đọc đã biết: "nối hai mệnh đề",
   "từ 1 âm tiết", "be + V3", "làm chủ ngữ". Chưa định nghĩa
   thì đọc tới là mơ hồ, và mơ hồ thì học thành học vẹt.

   Mỗi mục có bốn phần:
     what  nó là gì, nói bằng lời thường
     ex    ví dụ đối chiếu, có cả trường hợp KHÔNG phải
     warn  chỗ dễ hiểu sai, hoặc chỗ tiếng Việt làm khác
     need  cần cho tuần nào — để biết vì sao phải đọc nó
   ========================================================= */

const BASICS = [
{ g:'Bộ khung của một câu', n:'A',
  intro:'Bốn thuật ngữ này là tên các bộ phận của câu. Không biết tên bộ phận thì mọi luật về trật tự từ đều thành vô nghĩa.',
  items:[
  { vi:'Chủ ngữ', en:'subject',
    what:'Ai hoặc cái gì làm việc đó. Luôn đứng <b>trước</b> động từ.',
    ex:[['<b>I</b> work here.','I là chủ ngữ'],
        ['<b>The server</b> crashed.','cả cụm the server là chủ ngữ'],
        ['Đi chưa?','tiếng Việt BỎ được chủ ngữ — tiếng Anh thì không']],
    warn:'Tiếng Việt cho phép bỏ chủ ngữ: “Đi chưa?” là câu đủ. Tiếng Anh gần như luôn phải có — <em>Have <b>you</b> gone yet?</em> Bỏ đi thì câu vỡ.',
    need:'is/are với danh từ (tuần 1) · hiện tại đơn thêm s (tuần 3) · câu bị động (tuần 11) · mệnh đề quan hệ (tuần 13)' },

  { vi:'Tân ngữ', en:'object',
    what:'Cái bị tác động bởi hành động. Đứng <b>sau</b> động từ.',
    ex:[['I fixed <b>the bug</b>.','the bug là tân ngữ'],
        ['She gave <b>me</b> <b>the file</b>.','hai tân ngữ trong một câu'],
        ['I <b>work</b> here.','câu này KHÔNG có tân ngữ — vẫn đúng']],
    warn:'Không phải câu nào cũng có tân ngữ. <em>I work</em> đủ nghĩa rồi. Nhưng <em>I fixed</em> thì thiếu — người đọc chờ nghe bạn sửa cái gì.',
    need:'câu bị động (tuần 11) — bị động lấy tân ngữ đưa lên làm chủ ngữ · phrasal verb tách được (tuần 15) — tân ngữ chen vào giữa hai từ' },

  { vi:'Mệnh đề', en:'clause',
    what:'Một nhóm từ có <b>đủ chủ ngữ và động từ riêng</b>. Đây là viên gạch để xây câu dài. Nhóm từ <b>không có động từ</b> thì gọi là <b>cụm từ</b>, không phải mệnh đề.',
    ex:[['I work here','MỘT mệnh đề'],
        ['I work here <b>because I like the team</b>','HAI mệnh đề'],
        ['in the morning','CỤM TỪ — không có động từ nên không phải mệnh đề']],
    warn:'Đây là chỗ quan trọng nhất trong cả nhóm. <em>although</em> cần một <b>mệnh đề</b> đi sau, còn <em>despite</em> cần một <b>cụm từ</b>: <em>although it rained</em> nhưng <em>despite the rain</em>. Không biết hai thứ đó khác nhau ở đâu thì luật này thành học vẹt.',
    need:'câu điều kiện (tuần 9) · mệnh đề quan hệ (tuần 13) · câu tường thuật (tuần 14) · although vs despite (tuần 16)' },

  { vi:'Câu đơn · câu ghép · câu phức', en:'simple · compound · complex',
    what:'Ba cấp độ của một câu, tính theo số mệnh đề và cách nối chúng. <b>Cả sáu tháng của lộ trình là đi từ cấp một lên cấp ba.</b>',
    ex:[['I fixed the bug.','CÂU ĐƠN — một mệnh đề'],
        ['I fixed the bug <b>and</b> I pushed the code.','CÂU GHÉP — hai mệnh đề ngang hàng'],
        ['I pushed the code <b>after I fixed the bug</b>.','CÂU PHỨC — một chính, một phụ']],
    warn:'Bài viết thử cho thấy <b>câu đơn của bạn đã đúng</b>. Và lỗi dùng dấu phẩy nối năm câu liền chính là: bạn đang muốn viết câu ghép mà chưa có dụng cụ để nối. Tháng 1–2 vá câu đơn, tháng 3–4 lên câu ghép và câu phức, tháng 5–6 xếp chúng thành đoạn.',
    need:'liên kết ý (tuần 16) · mệnh đề quan hệ (tuần 13) · cấu trúc đoạn văn (tuần 19)' },
]},

{ g:'Động từ đổi hình', n:'B',
  intro:'Toàn bộ hệ thống 12 thì đứng trên bốn ý này. Đọc xong nhóm này thì 12 thì không còn là 12 thứ rời phải học thuộc riêng.',
  items:[
  { vi:'Thì', en:'tense',
    what:'Cái đánh dấu <b>khi nào</b> ngay trên chính động từ. Đây là ý lớn nhất của tiếng Anh mà tiếng Việt không có.',
    ex:[['work → worked → will work','cùng một việc, ba thời điểm, ba hình khác nhau'],
        ['làm → <b>đã</b> làm → <b>sẽ</b> làm','tiếng Việt thêm từ, động từ giữ nguyên'],
        ['3 thời điểm × 4 dạng = 12 thì','hiện tại · quá khứ · tương lai  ×  đơn · tiếp diễn · hoàn thành · hoàn thành tiếp diễn']],
    warn:'Hãy nhìn 12 thì là một <b>bảng 3 × 4</b>, không phải 12 thứ rời rạc. Hiểu được cách ghép hai trục thì bạn suy ra được cả 12 mà không phải nhớ 12 công thức.',
    need:'mọi tuần về thì — tuần 3, 4, 5, 6, 12, 17' },

  { vi:'V1 · V2 · V3 và “phân từ”', en:'base · past · past participle',
    what:'Mọi động từ tiếng Anh có ba dạng chính, dùng ở ba chỗ khác nhau. <b>V1</b> là dạng gốc, <b>V2</b> là quá khứ đơn, <b>V3</b> gọi là <b>phân từ quá khứ</b>.',
    ex:[['go · went · gone','V1 · V2 · V3'],
        ['work · worked · worked','động từ có quy tắc thì V2 trùng V3'],
        ['have <b>gone</b> · was <b>eaten</b>','V3 không tự đứng một mình, luôn cần từ đi kèm']],
    warn:'Chữ “phân từ” nghe lạ nhưng việc của nó rất đơn giản: nó là dạng <b>phải đi kèm từ khác</b>. Và vì V3 được dùng ở ba chỗ quan trọng, nên 80 động từ bất quy tắc phải học <b>cả cột V3</b>, không chỉ cột V2.',
    need:'quá khứ đơn dùng V2 (tuần 4) · have + V3 (tuần 5) · be + V3 cho bị động (tuần 11) · had + V3 (tuần 12)' },

  { vi:'Trợ động từ', en:'auxiliary verb',
    what:'Động từ <b>giúp việc</b> — tự nó không mang nghĩa, nó ở đó để tạo phủ định, tạo câu hỏi, hoặc ghép thì. Ba cái chính: <b>be · do · have</b>.',
    ex:[['I <b>don\'t</b> go.','do dùng để phủ định'],
        ['<b>Did</b> you go?','do dùng để hỏi'],
        ['I <b>am</b> working. · It <b>was</b> fixed.','be dùng cho tiếp diễn và bị động'],
        ['I <b>have</b> finished.','have dùng cho thì hoàn thành']],
    warn:'Đây là câu trả lời cho một thắc mắc rất hay gặp: <b>vì sao “I don’t go” lại có chữ “do”?</b> Vì tiếng Anh không cho phủ định trực tiếp một động từ thường — phải mượn <em>do</em> để gắn chữ <em>not</em> vào. Tiếng Việt thì phủ định thẳng: “tôi <b>không</b> đi”, chẳng cần mượn gì.',
    need:'mọi câu phủ định và câu hỏi · thì tiếp diễn · thì hoàn thành (tuần 5) · câu bị động (tuần 11)' },

  { vi:'Hoà hợp chủ ngữ – động từ', en:'agreement',
    what:'Động từ phải <b>đổi theo chủ ngữ</b> là số ít hay số nhiều. Tiếng Việt không có việc này.',
    ex:[['He work<b>s</b> · They work','số ít thêm s, số nhiều thì không'],
        ['There <b>is</b> some milk · There <b>are</b> three bugs','không đếm được → is · số nhiều → are'],
        ['nó đi · họ đi','tiếng Việt: động từ y nguyên']],
    warn:'Đây là lỗi bạn sẽ mắc nhiều nhất khi viết nhanh, đơn giản vì tiếng Việt không huấn luyện bạn để ý chỗ này. Nó không làm câu sai nghĩa, nhưng bị nhận ra ngay lập tức.',
    need:'is/are (tuần 1) · hiện tại đơn thêm s (tuần 3) · danh từ chỉ có số nhiều như police, trousers (tuần 1)' },
]},

{ g:'Âm và chữ', n:'C',
  intro:'Bốn ý này phục vụ hai việc rất cụ thể: chọn đúng a hay an, và đọc được phiên âm để không bao giờ phải đoán cách đọc một từ mới.',
  items:[
  { vi:'Âm tiết', en:'syllable',
    what:'Một <b>nhịp</b> khi đọc một từ. Đếm âm tiết bằng cách đếm số lần <b>miệng mở ra</b>.',
    ex:[['fast','1 âm tiết'],['bu-sy','2 âm tiết'],['im-por-tant','3 âm tiết']],
    warn:'Không đếm được âm tiết thì luật so sánh hơn thành đoán bừa: từ <b>1 âm tiết</b> thêm <code>-er</code> (<em>faster</em>), từ <b>3 âm tiết trở lên</b> thêm <code>more</code> (<em>more important</em>).',
    need:'so sánh hơn và so sánh nhất (tuần 7) · trọng âm từ (phát âm mỗi Chủ nhật)' },

  { vi:'Nguyên âm và phụ âm', en:'vowel · consonant',
    what:'<b>Nguyên âm</b> là âm mà miệng mở, hơi ra tự do: a e i o u. <b>Phụ âm</b> là âm mà lưỡi, môi hoặc răng chặn hơi lại: b k t s… Chỗ quyết định: <b>tính theo ÂM, không theo CHỮ</b>.',
    ex:[['<b>an</b> hour','chữ đầu là h (phụ âm) nhưng đọc /ˈaʊə/ → âm đầu là nguyên âm'],
        ['<b>a</b> university','chữ đầu là u (nguyên âm) nhưng đọc /juː/ → âm đầu là phụ âm'],
        ['<b>an</b> MP3 file','chữ đầu là M nhưng đọc /em/ → nguyên âm']],
    warn:'Cách kiểm nhanh mà không cần biết phiên âm: <b>đọc to từ đó lên</b>. Miệng mở ra thì dùng <code>an</code>, miệng khép lại thì dùng <code>a</code>.',
    need:'chọn a hay an (tuần 1)' },

  { vi:'Trọng âm', en:'stress',
    what:'Trong từ nhiều âm tiết, tiếng Anh <b>nhấn mạnh một âm tiết</b> và làm mờ những âm còn lại. Tiếng Việt thì mọi âm đều nhau.',
    ex:[['de-<b>VE</b>-lop','nhấn âm giữa'],
        ['<b>TECH</b>-ni-cal','nhấn âm đầu'],
        ['<b>RE</b>cord (danh từ) · re<b>CORD</b> (động từ)','đổi trọng âm là đổi loại từ']],
    warn:'Đặt sai trọng âm thì người nghe có thể <b>không nhận ra từ</b>, dù bạn đọc đúng từng âm một. Đây cũng là lý do bạn nghe người bản ngữ không ra: họ làm mờ những âm không được nhấn, gần như bỏ hẳn.',
    need:'phát âm mỗi Chủ nhật · nghe và shadowing (tuần 20)' },

  { vi:'Cách đọc phiên âm', en:'IPA',
    what:'Bộ ký hiệu ghi <b>âm thật</b> — một ký hiệu đúng một âm, không lộn xộn như chữ viết tiếng Anh. Chỉ cần biết bốn dấu là đọc được.',
    ex:[['/ /','dấu bao ngoài: đây là phiên âm, không phải chữ'],
        ['ˈ','âm tiết ngay SAU dấu này được nhấn mạnh'],
        ['ː','âm dài — /iː/ trong <em>feel</em> dài hơn /ɪ/ trong <em>fill</em>'],
        ['ˌ','nhấn phụ, nhẹ hơn dấu ˈ']],
    warn:'Đọc được phiên âm thì bạn <b>không bao giờ phải đoán cách đọc một từ mới</b> nữa — tra từ điển là biết ngay. Đây là kỹ năng học một lần dùng cả đời, và mất khoảng hai buổi.',
    need:'260 phiên âm ở trang Từ vựng · tra từ điển Oxford · dựng thẻ Anki có phát âm' },
]},
];
