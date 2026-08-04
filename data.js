/* =========================================================
   CHƯƠNG TRÌNH 26 TUẦN — A2 → B1 vững → ngưỡng B2
   Mỗi tuần: 5 ngày học mới (90'), 1 ngày ôn tập (60'),
   1 ngày nhẹ (30'). Tổng 9 giờ/tuần, 230 giờ cả khoá.
   Lịch nên đặt 28 tuần: 26 tuần học + 2 tuần đệm cho việc đột xuất.

   Phân bổ thời gian (xem buildWeek ở cuối file):
   · Tháng 1–4 — ngữ pháp 30' | Anki 15' | nghe 15' | nói+viết 10' | từ 10' | đọc 10'
   · Tháng 5–6 — ngữ pháp 20' | Anki 15' | nghe 20' | nói+viết 10' | từ 10' | đọc 15'
     (lên B2 là chuyện lượng input, không phải thêm luật ngữ pháp)

   Bốn nguyên tắc đứng sau các con số này:
   · Ngữ pháp chỉ 30' ngay từ tháng 1. Câu đơn của bạn đã đúng cấu trúc —
     vấn đề là luật chưa thành phản xạ, và phản xạ đến từ input, không từ bài tập.
   · Anki 15' chứ không phải 10', và chỉ 10 từ mới/ngày. Ở trạng thái ổn định
     Anki đưa ~10× số thẻ mới ra để ôn. Thẻ mới chỉ thêm vào 5 ngày thường
     (50 thẻ/tuần), nên hàng đợi ổn định ~70 thẻ/ngày → 15' là 13 giây/thẻ, thoải mái.
     15 từ mới thì thành ~105 thẻ/ngày, tràn ngân sách từ tháng 2 và bạn sẽ bỏ Anki.
   · Nghe MỖI NGÀY từ ngày 1 — không dồn vào 1 tuần cuối khoá.
   · Nói: mỗi ngày NÓI 5 câu trước khi viết, T7 nói 15' với AI voice,
     CN drill phát âm. Tổng ~19 giờ nói thay vì ~4 giờ.
   ========================================================= */

const MONTHS = [
  { n:1, name:'Tháng 1', title:'Vá lỗ hổng A2',
    goal:'Sửa hết những lỗi đang lặp lại trong bài viết: mạo từ, giới từ, thì hiện tại và quá khứ đơn.' },
  { n:2, name:'Tháng 2', title:'Hoàn thiện nền A2',
    goal:'Nắm đủ 6 thì cơ bản, so sánh và động từ khuyết thiếu. Đây là toàn bộ ngữ pháp mức A2.' },
  { n:3, name:'Tháng 3', title:'Bước vào B1',
    goal:'Câu điều kiện, bị động, V-ing/to V, quá khứ hoàn thành. Hết tháng này bạn CHẠM ngưỡng B1 — chưa phải B1 vững.' },
  { n:4, name:'Tháng 4', title:'Đạt B1',
    goal:'Mệnh đề quan hệ, câu tường thuật, phrasal verbs, liên kết ý. Viết được đoạn 120 từ. Đây mới là mốc B1 thật.' },
  { n:5, name:'Tháng 5', title:'Chạm ngưỡng B2',
    goal:'Thì nâng cao, cấu trúc B2, viết học thuật, nghe và nói. Bắt đầu dùng tiếng Anh chủ động.' },
  { n:6, name:'Tháng 6', title:'Củng cố & kiểm tra',
    goal:'Ôn toàn bộ theo khối, luyện 4 kỹ năng riêng, thi thử và đánh giá lại trình độ CEFR.' },
];

const WEEKS = [
  /* ---------- THÁNG 1 ---------- */
  { n:1, m:1, theme:'Mạo từ & danh từ', vocab:'công việc văn phòng',
    review:'chọn a / an / the / không mạo từ cho 10 câu, đối chiếu cây quyết định',
    topics:[
      'Mạo từ a / an — nghe âm chứ không xem chữ',
      'Mạo từ the — 4 trường hợp bắt buộc',
      'Khi nào KHÔNG dùng mạo từ',
      'Danh từ đếm được và không đếm được',
      'some / any / much / many / a lot of' ] },
  { n:2, m:1, theme:'Giới từ', vocab:'địa điểm & di chuyển',
    review:'điền giới từ vào 12 câu — khoanh riêng câu nào bạn phải đoán',
    topics:[
      'at / on / in — thời gian',
      'at / in / on — nơi chốn',
      'Giới từ chuyển động: to, from, into, through',
      'Động từ + giới từ: listen to, wait for, depend on',
      'Tính từ + giới từ: good at, interested in, afraid of' ] },
  { n:3, m:1, theme:'Thì hiện tại', vocab:'thói quen & lịch trình',
    review:'chọn hiện tại đơn hay tiếp diễn cho 12 câu',
    topics:[
      'Hiện tại đơn — quy tắc thêm s / es',
      'Hiện tại tiếp diễn — khi nào dùng',
      'Hiện tại đơn vs tiếp diễn',
      'Động từ không dùng ở tiếp diễn (know, want, need)',
      'Trạng từ tần suất và vị trí trong câu' ] },
  { n:4, m:1, theme:'Quá khứ đơn', vocab:'80 động từ bất quy tắc',
    review:'đọc V2 của 20 động từ bất quy tắc bạn hay sai, không xem bảng', milestone:1,
    topics:[
      'Quá khứ đơn — động từ có quy tắc, cách đọc đuôi -ed',
      'Động từ bất quy tắc — nhóm 1 (40 từ)',
      'Phủ định và nghi vấn: didn\'t, did you...?',
      'Quá khứ tiếp diễn + when / while',
      'KIỂM TRA THÁNG 1 — 40 câu ngữ pháp + 1 bài viết' ] },

  /* ---------- THÁNG 2 ---------- */
  { n:5, m:2, theme:'Hiện tại hoàn thành', vocab:'80 động từ bất quy tắc (cột V3)',
    review:'chọn hiện tại hoàn thành hay quá khứ đơn cho 12 câu',
    topics:[
      'have / has + V3 — cấu tạo và bảng V3',
      'already / yet / just',
      'since / for — mốc thời gian vs khoảng thời gian',
      'ever / never — nói về kinh nghiệm',
      'Hiện tại hoàn thành vs Quá khứ đơn — quan trọng nhất tuần' ] },
  { n:6, m:2, theme:'Thì tương lai', vocab:'kế hoạch & dự định',
    review:'viết 1 câu ví dụ cho mỗi thì trong 6 thì, không mở vở',
    topics:[
      'will — quyết định tức thì và dự đoán',
      'be going to — kế hoạch đã định',
      'will vs be going to',
      'Hiện tại tiếp diễn chỉ tương lai (I\'m meeting him tomorrow)',
      'Tổng hợp: chọn đúng 1 trong 6 thì' ] },
  { n:7, m:2, theme:'So sánh & tính từ', vocab:'tính từ miêu tả người và việc',
    review:'đọc lại đoạn vừa viết — đánh dấu các dạng so sánh đã dùng, thiếu dạng nào?',
    topics:[
      'So sánh hơn: -er / more',
      'So sánh nhất: -est / most + dạng bất quy tắc',
      'as ... as / not as ... as',
      'Tính từ -ed vs -ing (bored / boring)',
      'Trạng từ — cách tạo và vị trí' ] },
  { n:8, m:2, theme:'Động từ khuyết thiếu', vocab:'giao tiếp lịch sự',
    review:'viết 5 câu: xin phép · đề nghị · khuyên bảo · must · have to', milestone:2,
    topics:[
      'can / could / be able to',
      'must / have to / should',
      'mustn\'t vs don\'t have to — hai nghĩa hoàn toàn khác',
      'may / might — nói về khả năng',
      'KIỂM TRA THÁNG 2 — 40 câu + viết 100 từ' ] },

  /* ---------- THÁNG 3 ---------- */
  { n:9, m:3, theme:'Câu điều kiện', vocab:'giả định & phỏng đoán',
    review:'chọn loại điều kiện cho 10 câu, nói ra lý do chọn của 3 câu',
    topics:[
      'Điều kiện loại 0 và loại 1',
      'Điều kiện loại 2 — giả định trái hiện tại',
      'Loại 1 vs loại 2 — khác nhau ở mức độ có thật',
      'unless / as long as / in case',
      'wish + quá khứ đơn' ] },
  { n:10, m:3, theme:'V-ing và to V', vocab:'động từ hay dùng trong công việc',
    review:'tự đọc 20 thẻ Anki động từ + V-ing / to V, không xem đáp án',
    topics:[
      'Động từ + V-ing: enjoy, avoid, finish, deny, suggest',
      'Động từ + to V: want, decide, hope, promise, plan',
      'Động từ dùng được cả hai: start, like, remember, forget',
      'V-ing sau mọi giới từ',
      'too / enough + to V' ] },
  { n:11, m:3, theme:'Câu bị động', vocab:'quy trình & vận hành',
    review:'chuyển 8 câu sang bị động — câu nào cần by + tác nhân, câu nào bỏ?',
    topics:[
      'Bị động hiện tại đơn: is / are + V3',
      'Bị động quá khứ đơn: was / were + V3',
      'Bị động ở các thì còn lại',
      'by + tác nhân — khi nào cần, khi nào bỏ',
      'get + V3 — bị động thân mật' ] },
  { n:12, m:3, theme:'Quá khứ hoàn thành', vocab:'kể chuyện & tường thuật',
    review:'đọc lại đoạn vừa viết — gạch chân 3 thì quá khứ, soát chỗ nào phải dùng had + V3', milestone:3,
    topics:[
      'had + V3 — việc xảy ra trước một mốc quá khứ',
      'by the time / before / after / already',
      'Quá khứ hoàn thành vs Quá khứ đơn',
      'Điều kiện loại 3 và điều kiện TRỘN — quá khứ khác thì hiện tại khác',
      'KIỂM TRA THÁNG 3 — mốc chạm B1: 50 câu + đọc + viết 120 từ' ] },

  /* ---------- THÁNG 4 ---------- */
  { n:13, m:4, theme:'Mệnh đề quan hệ', vocab:'định nghĩa & giải thích',
    review:'nối 6 cặp câu ngắn — 3 cặp có dấu phẩy, 3 cặp không',
    topics:[
      'who / which / that',
      'whose / where / when',
      'Mệnh đề xác định vs không xác định — vai trò của dấu phẩy',
      'Rút gọn mệnh đề quan hệ',
      'Luyện viết câu dài mà vẫn rõ ý' ] },
  { n:14, m:4, theme:'Câu tường thuật', vocab:'động từ tường thuật',
    review:'tường thuật 6 câu trực tiếp — soát riêng việc lùi thì và đổi trạng từ',
    topics:[
      'Quy tắc lùi thì',
      'Đổi đại từ và trạng từ chỉ thời gian',
      'Tường thuật câu hỏi',
      'ask / tell + somebody + to V',
      'say / tell / speak / talk — phân biệt' ] },
  { n:15, m:4, theme:'Phrasal verbs', vocab:'60 phrasal verbs',
    review:'tự đọc 25 thẻ phrasal verb, ghi riêng những từ còn sai',
    topics:[
      '20 phrasal verbs công việc: hand over, follow up, sort out',
      '20 phrasal verbs sinh hoạt hằng ngày',
      'Phrasal verb tách được và không tách được',
      '20 phrasal verbs giao tiếp',
      'Ôn tập và phân loại 60 phrasal verbs' ] },
  { n:16, m:4, theme:'Liên kết ý', vocab:'từ nối trong văn viết',
    review:'đọc lại đoạn vừa viết — đếm từ nối, thay 2 từ nối bằng loại khác', milestone:4,
    topics:[
      'although / though / even though / despite / in spite of',
      'however / therefore / moreover / on the other hand',
      'Trình tự: first, then, after that, finally',
      'Viết đoạn văn 120 từ có liên kết chặt',
      'KIỂM TRA THÁNG 4 — 50 câu + viết 150 từ' ] },

  /* ---------- THÁNG 5 ---------- */
  { n:17, m:5, theme:'Thì nâng cao & modal perfect', vocab:'trạng từ chỉ thời gian nâng cao',
    review:'viết 1 câu cho mỗi thì trong 6 thì nâng cao, không mở bảng',
    topics:[
      'Hiện tại hoàn thành tiếp diễn',
      'Quá khứ hoàn thành tiếp diễn',
      'Tương lai hoàn thành và tương lai tiếp diễn',
      'Tổng hợp 12 thì — sơ đồ trục thời gian',
      'Modal perfect — suy đoán về quá khứ: must / should / could + have + V3' ] },
  { n:18, m:5, theme:'Cấu trúc B2', vocab:'văn phong trang trọng',
    review:'viết 5 câu: 2 đảo ngữ · 2 câu chẻ · 1 used to / be used to',
    topics:[
      'Đảo ngữ: hardly, no sooner, not only',
      'Câu chẻ: It is ... that / What I need is ...',
      'I\'d rather / It\'s time + quá khứ đơn',
      'used to / be used to / get used to',
      'Danh động từ hoàn thành: having done' ] },
  { n:19, m:5, theme:'Viết mức B2', vocab:'từ vựng học thuật cơ bản',
    review:'chạy checklist 10 lỗi lên đoạn vừa viết, đếm số lỗi bắt được',
    topics:[
      'Cấu trúc đoạn: topic sentence + luận cứ + ví dụ',
      'Viết email công việc bằng tiếng Anh',
      'Viết bài nêu ý kiến 180 từ',
      'Viết bài phân tích ưu và nhược điểm',
      'Checklist tự sửa bài — 10 lỗi thường gặp nhất' ] },
  { n:20, m:5, theme:'Nghe & nói', vocab:'phát âm & trọng âm',
    review:'nghe lại bản ghi âm hôm nay, ghi ra 3 lỗi phát âm rõ nhất',
    topics:[
      'Nghe BBC 6 Minute English + ghi chú ý chính',
      'Nghe tech talk có phụ đề, rồi bỏ phụ đề nghe lại',
      'Shadowing — nhại theo 1 đoạn 1 phút cho tới khi trôi',
      'Tự nói 2 phút về công việc, có ghi âm',
      'Đoán nghĩa từ mới qua ngữ cảnh khi nghe' ] },
  { n:21, m:5, theme:'Từ vựng B2', vocab:'collocation & word family',
    review:'tự đọc 25 thẻ collocation, ghi riêng những cụm còn sai', milestone:5,
    topics:[
      'Collocation công việc: meet a deadline, raise an issue',
      'Nâng cấp từ đồng nghĩa: big → significant, get → obtain',
      'Word family: analyse / analysis / analytical',
      'Idiom công sở thông dụng',
      'KIỂM TRA THÁNG 5 — 60 câu + đọc B2 + viết 180 từ' ] },

  /* ---------- THÁNG 6 ---------- */
  { n:22, m:6, theme:'Ôn ngữ pháp tổng hợp', vocab:'ôn toàn bộ từ đã học',
    review:'viết ra 10 lỗi bạn còn mắc nhiều nhất, dán lên bàn làm việc',
    topics:[
      'Ôn khối THÌ — 12 thì, làm 40 câu',
      'Ôn khối ĐIỀU KIỆN, GIẢ ĐỊNH & MODAL PERFECT',
      'Ôn khối BỊ ĐỘNG & MỆNH ĐỀ QUAN HỆ',
      'Ôn khối MẠO TỪ, GIỚI TỪ, DANH TỪ',
      'Test ngữ pháp 60 câu — chấm và ghi lại lỗi' ] },
  { n:23, m:6, theme:'Ôn kỹ năng Đọc', vocab:'từ vựng học thuật nâng cao',
    review:'đọc lại bài khó nhất tuần, tra 10 từ chưa biết',
    topics:[
      'Skimming — đọc lấy ý chính trong 2 phút',
      'Scanning — đọc tìm chi tiết cụ thể',
      'Inference — đọc suy luận, dạng khó nhất',
      'Đoán nghĩa từ mới qua ngữ cảnh',
      'Test đọc 20 câu có bấm thời gian' ] },
  { n:24, m:6, theme:'Ôn kỹ năng Viết', vocab:'cụm từ dùng trong bài luận',
    review:'chạy checklist lên bài dài nhất tuần này, sửa 5 lỗi nặng nhất',
    topics:[
      'Viết email cho 5 tình huống công việc',
      'Viết bài nêu ý kiến 200 từ',
      'Viết bài mô tả số liệu và biểu đồ',
      'Tự sửa 3 bài theo checklist',
      'Test viết — 2 đề trong 40 phút' ] },
  { n:25, m:6, theme:'Ôn Nghe & Nói', vocab:'ngữ điệu & nối âm',
    review:'nghe bản ghi tuần 1, rồi bản ghi hôm nay — ghi ra 3 điểm đã khác',
    topics:[
      'Nghe 3 đoạn hội thoại, ghi ý chính',
      'Nghe bài giảng ngắn, ghi chú dạng gạch đầu dòng',
      'Nói 2 phút × 3 chủ đề, ghi âm và tự nghe lại',
      'Shadowing 1 đoạn 2 phút cho tới khi trôi',
      'Test nghe 20 câu' ] },
  { n:26, m:6, theme:'Kiểm tra cuối khoá', vocab:'—',
    review:'đọc lại toàn bộ ghi chú lỗi của 6 tháng', milestone:6,
    custom:[
      { d:1, min:60, focus:'Thi thử phần 1 — Ngữ pháp & từ vựng', test:true,
        tasks:[['Làm 60 câu trắc nghiệm, không tra cứu, bấm thời gian',45],
               ['Đánh dấu riêng những câu bạn đoán, không chắc',15]] },
      { d:2, min:45, focus:'Thi thử phần 2 — Đọc hiểu', test:true,
        tasks:[['Đọc 3 bài mức B1–B2 và trả lời câu hỏi',40],
               ['Ghi lại mọi từ chưa biết trong 3 bài',5]] },
      { d:3, min:45, focus:'Thi thử phần 3 — Viết', test:true,
        tasks:[['Viết 2 bài: 1 email + 1 bài nêu ý kiến 180 từ',40],
               ['Đọc lại, tự sửa bằng checklist 10 lỗi của tuần 19',5]] },
      { d:4, min:45, focus:'Thi thử phần 4 — Nghe & Nói', test:true,
        tasks:[['Nghe 20 câu không phụ đề, không nghe lại lần 2',25],
               ['Nói 3 phút về công việc của bạn — ghi âm, không chuẩn bị trước',20]] },
      { d:5, min:60, focus:'Chấm bài và xác định trình độ mới',
        tasks:[['Chấm cả 4 phần, tính điểm từng kỹ năng',25],
               ['So sánh với kết quả ngày 30.07.2026',15],
               ['Nghe lại 6 bản ghi âm — tuần 1 và 5 bài kiểm tra tháng',10],
               ['Ghi lại các chủ điểm còn yếu',10]] },
      { d:6, min:45, focus:'Lập kế hoạch 6 tháng tiếp theo',
        tasks:[['Chọn mục tiêu: hoàn thành B2 hay thi chứng chỉ',15],
               ['Lên lịch 6 tháng tới — ưu tiên NÓI, vì đây là kỹ năng còn yếu nhất',20],
               ['Đặt lịch kiểm tra định kỳ mỗi tháng',10]] },
      { d:7, min:30, focus:'Nghỉ — tự thưởng. Kết thúc khoá 6 tháng.',
        tasks:[['Đọc hoặc xem thứ gì bằng tiếng Anh vì bạn thích, không phải để học',30]] } ] },
];

/* =========================================================
   NGHE — nguồn theo tháng, độ khó tăng dần.
   Nguyên tắc: chọn thứ bạn hiểu được ~80%, không nghe vượt trình.
   ========================================================= */
const LISTEN = {
  1:'BBC Learning English · English at Work — nghe 2 lần, có transcript',
  2:'BBC 6 Minute English — nghe chay 1 lần, rồi mở transcript nghe lại',
  3:'BBC 6 Minute English — nghe chay 2 lần TRƯỚC khi mở transcript',
  4:'Podcast dev nói chậm (Syntax, CodeNewbie) — bật phụ đề',
  5:'Talk hội thảo 15 phút — lần 1 bật phụ đề, lần 2 tắt phụ đề',
  6:'Nghe chay, không phụ đề — talk, podcast, hoặc họp thật',
};

/* =========================================================
   PHÁT ÂM — 13 lỗi cố hữu của người Việt.
   Chạy 2 vòng: tuần 1–13, rồi lặp lại tuần 14–26 (ôn cách nhau xa).
   Phát âm sai thì cũng NGHE không ra — nên phải làm từ tuần 1.
   ========================================================= */
const PRON = [
  'Âm cuối /s/ /z/ — books, wants, jobs, does (đừng bỏ âm cuối)',
  'Đuôi -ed 3 cách đọc: worked /t/ · played /d/ · wanted /ɪd/',
  '/θ/ và /ð/ — think, three, this, that (không đọc thành t / d)',
  '/ʃ/ /tʃ/ /dʒ/ — she, chair, job, change',
  'Âm cuối /l/ — will, tell, people, small',
  '/r/ đầu từ — red, right, around, problem',
  '/iː/ vs /ɪ/ — feel/fill · seat/sit · leave/live',
  '/æ/ vs /e/ — bad/bed · man/men · sad/said',
  'Trọng âm từ 2 âm tiết — REcord (danh từ) vs reCORD (động từ)',
  'Trọng âm từ 3+ âm tiết — deVElop, TECHnical, inforMAtion',
  'Nối âm — pick it up, a lot of, check it out',
  '/v/ vs /w/ — very, invite, review (đừng thành w)',
  'Cụm phụ âm cuối — asked, texts, months, worlds',
];

/* =========================================================
   Xây 7 ngày cho một tuần từ dữ liệu bên trên.
   Ngày học mới 90' · ngày ôn 60' · ngày nhẹ 30' — tổng không đổi.
   ========================================================= */
function buildWeek(w){
  if (w.custom) return w.custom;
  const late   = w.m >= 5;          // tháng 5–6: bớt ngữ pháp, tăng nghe
  const listen = LISTEN[w.m];

  const days = w.topics.map((topic, i) => {
    const isTest = !!w.milestone && i === 4;
    /* Ngày kiểm tra tháng — đo CẢ 4 kỹ năng, không chỉ ngữ pháp + viết.
       Nghe và nói phải có mốc mỗi tháng, không thể đợi tới tuần 20 mới đo. */
    if (isTest) return {
      d:i+1, min:90, focus:topic, test:true,
      tasks:[
        ['Làm phần trắc nghiệm, không tra cứu, bấm thời gian',35],
        ['Làm phần viết theo đề',20],
        ['Nghe 10 câu không phụ đề, không nghe lại lần 2',10],
        ['Nói 1 phút về 1 chủ đề tự chọn — ghi âm để so với tháng trước',5],
        ['Tự chấm cả 4 phần, ghi điểm từng kỹ năng',12],
        ['Ghi lại mọi câu sai vào sổ lỗi',8] ] };
    return {
      d:i+1, min:90, focus:topic,
      tasks: late ? [
        ['Ôn Anki — làm hết thẻ đến hạn hôm nay',15],
        ['Học lý thuyết: '+topic,10],
        ['Làm bài tập trong English Grammar in Use',10],
        ['Từ vựng mới — 10 từ chủ đề '+w.vocab,10],
        ['NÓI to 5 câu dùng điểm ngữ pháp vừa học, rồi viết lại',10],
        ['Nghe — '+listen,20],
        ['Đọc 1 trang documentation hoặc graded reader',15] ]
      : [
        ['Ôn Anki — làm hết thẻ đến hạn hôm nay',15],
        ['Học lý thuyết: '+topic,15],
        ['Làm bài tập trong English Grammar in Use',15],
        ['Từ vựng mới — 10 từ chủ đề '+w.vocab,10],
        ['NÓI to 5 câu dùng điểm ngữ pháp vừa học, rồi viết lại',10],
        ['Nghe — '+listen,15],
        ['Đọc 1 trang documentation hoặc graded reader',10] ] };
  });

  /* T7 — ôn tập, và đây là ngày có PHẢN HỒI: nói với AI + chấm bài.
     15 phút nói với AI voice là thứ rẻ nhất mà lộ trình cũ bỏ sót —
     không cần đợi tới tháng 7–12 mới tìm người luyện nói. */
  days.push({ d:6, min:60, focus:'Ôn tập tuần '+w.n, review:true,
    tasks:[
      ['Làm lại toàn bộ câu sai trong tuần',10],
      ['Ôn toàn bộ từ vựng của tuần trên Anki',10],
      ['Viết 1 đoạn 80 từ dùng ngữ pháp tuần này',10],
      ['Tự kiểm tra 5 phút: '+w.review,5],
      ['NÓI 15 phút với AI voice về chủ đề tuần — ghi âm, nghe lại 1 lần',15],
      ['Gửi đoạn văn cho AI chấm — ghi mọi lỗi vào sổ lỗi',10] ] });

  /* CN — ngày nhẹ, nhưng vẫn có phát âm và nghe */
  days.push({ d:7, min:30, focus:'Ngày nhẹ — giữ nhịp', light:true,
    tasks:[
      ['Phát âm — '+PRON[(w.n - 1) % 13],5],
      ['Nghe hoặc xem video tiếng Anh có phụ đề',15],
      ['Ôn nhanh Anki, không học từ mới',10] ] });

  return days;
}

/* =========================================================
   Khoảng cách lên B2 — dùng cho trang Tổng quan.
   need  = B2 thật sự đòi hỏi gì
   now   = bạn đang ở đâu (đo ngày 30.07.2026)
   plan  = sau 230 giờ của lộ trình này bạn ở đâu — con số thật
   reach = 'full' lộ trình lo được hết · 'part' còn thiếu, cần giai đoạn 7–12
   ========================================================= */
const B2_MAP = [
  { area:'Ngữ pháp', gap:'high', reach:'full',
    need:'12 thì · điều kiện loại 0–3 và loại trộn · bị động mọi thì · mệnh đề quan hệ · câu tường thuật · đảo ngữ · câu chẻ · modal perfect',
    now:'Thì hiện tại và quá khứ đơn ở mức nhận biết',
    plan:'Xong hết, kể cả điều kiện trộn (tuần 12) và modal perfect (tuần 17). Đây là phần lộ trình lo được trọn vẹn nhất.' },
  { area:'Từ vựng', gap:'high', reach:'part',
    need:'4.000 – 5.000 từ chủ động, có collocation và word family',
    now:'Khoảng 800 – 1.200 từ',
    plan:'~2.100 từ (10 từ × 120 ngày, nhớ thật ~85% + 60 phrasal verb + 100 collocation + từ gặp khi đọc). Còn thiếu ~2.200 từ — đây là con số thật, không phải con số trên giấy.' },
  { area:'Đọc', gap:'mid', reach:'full',
    need:'Đọc báo, tài liệu kỹ thuật, hiểu cả ý ẩn và giọng điệu tác giả',
    now:'Hiểu tốt văn bản A2, chưa đọc được B2',
    plan:'Đạt. Đọc được docs và Stack Overflow không cần dịch, báo chí thì chậm.' },
  { area:'Viết', gap:'high', reach:'part',
    need:'Viết 250 từ có luận điểm, luận cứ, từ nối, không lỗi cơ bản',
    now:'Viết được câu đơn đúng, chưa nối câu',
    plan:'Viết được 200 từ có liên kết, tự sửa được lỗi cơ bản. Còn thiếu độ sắc của luận điểm.' },
  { area:'Nghe', gap:'unknown', reach:'part',
    need:'Hiểu hội thoại tốc độ tự nhiên, nhiều giọng, không phụ đề',
    now:'Chưa đo — mốc nghe đầu tiên đo ở bài kiểm tra tháng 1 (ngày 28)',
    plan:'~40 giờ luyện, mỗi ngày đều nghe (15′ tháng 1–4, 20′ tháng 5–6). Có mốc đo ở mỗi bài kiểm tra tháng. Hiểu được hội thoại rõ tốc độ trung bình. Giọng lạ và nói nhanh thì chưa.' },
  { area:'Nói', gap:'unknown', reach:'part',
    need:'Nói liên tục 4 phút về chủ đề trừu tượng, phát âm dễ hiểu',
    now:'Chưa đo — mốc nói lấy từ bản ghi AI voice ngày ôn tập tuần 1',
    plan:'~19 giờ nói (5 câu nói to mỗi ngày + 15′ AI voice mỗi T7 + phát âm CN). Nói được 2–3 phút trôi về công việc, sửa được 13 lỗi phát âm gốc. Vẫn là kỹ năng yếu nhất, nhưng không còn là kỹ năng chưa luyện.' },
];
