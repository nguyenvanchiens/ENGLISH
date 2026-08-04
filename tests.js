/* =========================================================
   NĂM BÀI KIỂM TRA MỐC — Test 2, 3, 4, 5 và bài thi thử cuối khoá.
   (Test 1 nằm sẵn trong on-tap.html vì nó đi cùng bài viết đầu vào.)

   Vì sao chúng phải có mặt ở đây, không phải "bạn tự soạn":
   luật của lộ trình là dưới 60% thì học lại cả tháng. Một bài kiểm tra
   do chính người học soạn vào đúng ngày đo thì chỉ chứa những câu người
   ấy biết làm — nó không đo được gì, và luật kia thành trang trí.

   Mỗi bài có cùng một khung để 6 lần đo so được với nhau:
   · ~80% câu hỏi thuộc nội dung tháng vừa học
   · ~20% lấy lại các tháng TRƯỚC — đây là phần phát hiện việc quên
   · từ Test 3 trở đi có thêm một bài đọc
   · phần viết và phần nói không tự chấm, luôn gửi ra ngoài

   ĐỊNH DẠNG CÂU: [câu hỏi, đáp án, giải thích, [các lựa chọn]]
   Mỗi câu đúng MỘT dấu ___ (Quiz chỉ thay chỗ trống đầu tiên).
   ========================================================= */

const TESTS = [

/* ============================================================
   TEST 1 · ngày 26 · tuần 4 · mục tiêu A2 vững
   Bài này giữ danh sách lựa chọn CHUNG cho cả 30 câu: tháng 1 chỉ có
   4 chủ điểm và chúng đứng cạnh nhau trong đầu người học, nên việc phải
   phân biệt a/an/the/at/on/in trong cùng một danh sách chính là bài kiểm tra.
   Từ Test 2 trở đi mỗi câu có lựa chọn riêng, vì gộp 50 câu 4 chủ điểm
   vào một danh sách thì thành bài kiểm tra trí nhớ thị giác.
   ============================================================ */
{ id:'t1', no:1, month:1, day:26, week:4, goal:'A2 vững', mins:40,
  title:'Test 1 — Ngữ pháp tháng 1 · 30 câu · 40 phút',
  covers:'Mạo từ · giới từ · danh từ đếm được và lượng · thì hiện tại · quá khứ đơn',
  options:['a','an','the','(không cần)','at','on','in','is','are','was','were',
           'some','any','much','many','go','goes','went','do','does','did','am','can','could'],
  items:[
    /* mạo từ 1-8 */
    ['I am ___ developer at a small company.','a','nghề nghiệp luôn có a/an'],
    ['She is ___ engineer in our team.','an','âm /e/ là nguyên âm'],
    ['I bought a laptop. ___ laptop was expensive.','the','đã nhắc ở câu trước'],
    ['He is ___ best tester I know.','the','so sánh nhất'],
    ['I need ___ information about this bug.','(không cần)','information không đếm được'],
    ['I like reading ___ books in my free time.','(không cần)','số nhiều, nói chung'],
    ['We waited for ___ hour before the meeting.','an','đọc /aʊə/ → nguyên âm'],
    ['My sister studies at ___ university in Hanoi.','a','đọc /juː/ → phụ âm'],
    /* giới từ 9-16 */
    ['My birthday is ___ July.','in','tháng'],
    ["The meeting starts ___ 9 o'clock.",'at','giờ'],
    ["I don't work ___ Sunday.",'on','thứ'],
    ['We usually deploy ___ the morning.','in','buổi'],
    ["I can't sleep ___ night.",'at','ngoại lệ at night'],
    ['The company was founded ___ 2018.','in','năm'],
    ['My laptop is ___ the desk.','on','trên mặt bàn'],
    ['I am ___ a meeting now.','in','in a meeting — cụm cố định'],
    /* đếm được & lượng 17-21 */
    ['There ___ some milk in the fridge.','is','milk không đếm được'],
    ['There ___ three bugs in this file.','are','bugs số nhiều'],
    ["I don't have ___ money this month.",'any','câu phủ định'],
    ['How ___ time do we have left?','much','time không đếm được'],
    ['How ___ people joined the call?','many','people đếm được'],
    /* thì hiện tại 22-26 */
    ['She ___ to the gym every morning.','goes','hiện tại đơn, chủ ngữ số ít'],
    ['He ___ not work in my team.','does','phủ định hiện tại đơn với he'],
    ['My colleagues ___ very helpful.','are','colleagues số nhiều'],
    ['I ___ a developer, not a designer.','am','chủ ngữ I → am'],
    ['He ___ speak English very well.','can','khả năng ở hiện tại'],
    /* quá khứ 27-30 */
    ['Yesterday I ___ to the office by bus.','went','yesterday → quá khứ đơn'],
    ['She ___ at home last weekend.','was','chủ ngữ số ít, quá khứ'],
    ['They ___ not finish the task on time.','did','phủ định quá khứ: did not'],
    ['I ___ swim when I was five years old.','could','quá khứ của can'],
  ],
  write:{ mins:25, words:'100–120 từ', prompts:[
      'Đề A — Describe your typical working day. What do you usually do from morning to evening?',
      'Đề B — Write about a problem you fixed at work last month. What was the problem and how did you solve it?' ],
    check:['Mọi chữ I đã viết hoa chưa?',
           'Mọi nghề nghiệp đã có a / an chưa?',
           'Mỗi câu kết thúc bằng dấu chấm chứ không phải dấu phẩy?',
           'Động từ số ít đã thêm -s chưa? (He works)',
           'Đề B nói về quá khứ — đã dùng quá khứ đơn chưa?',
           'Giới từ thời gian: at giờ · on ngày · in tháng?'] },
  listen:{ mins:10, how:'MỐC NGHE ĐẦU TIÊN của cả khoá. Chọn 1 tập BBC English at Work chưa nghe, nghe chay 1 lần, rồi làm bộ câu hỏi của tập đó, quy về thang 10. Đạt ≥ 7/10 thì tháng 2 lên BBC 6 Minute English; dưới 7 thì ở lại English at Work thêm 1 tháng — nguồn nghe đi theo điểm số, không đi theo tờ lịch.' },
  speak:{ mins:5, topic:'Describe your job and your team in one minute.',
          how:'Ghi âm. Giữ file này cẩn thận: mọi so sánh về kỹ năng nói trong 6 tháng tới đều lấy nó làm gốc.' } },

/* ============================================================
   TEST 2 · ngày 54 · tuần 8 · mục tiêu A2+
   ============================================================ */
{ id:'t2', no:2, month:2, day:54, week:8, goal:'A2+', mins:35,
  title:'Test 2 — Ngữ pháp tháng 2 · 40 câu · 35 phút',
  covers:'Hiện tại hoàn thành · thì tương lai · so sánh · động từ khuyết thiếu · 6 câu ôn tháng 1',
  items:[
    /* --- hiện tại hoàn thành (10) --- */
    ['I ___ in this company since 2020.','have worked','since → hiện tại hoàn thành, việc còn đang tiếp diễn',['have worked','worked','am working']],
    ['She ___ the report yet.',"hasn't finished",'yet trong câu phủ định đi với hiện tại hoàn thành',["hasn't finished","didn't finish","doesn't finish"]],
    ['Have you ever ___ to Singapore?','been','have been = đã từng đến rồi về; have gone = đang ở đó',['been','gone','went']],
    ['We ___ this bug three times this week.','have fixed','this week chưa kết thúc → hiện tại hoàn thành',['have fixed','fixed','are fixing']],
    ['He ___ his laptop last Monday.','bought','last Monday là mốc quá khứ xác định → quá khứ đơn',['bought','has bought','buys']],
    ["I've known her ___ ten years.",'for','for + khoảng thời gian, since + mốc thời gian',['for','since','from']],
    ['They have ___ deployed the new version.','already','already đứng giữa have và V3',['already','yet','since']],
    ['I have ___ eaten sushi in my life.','never','never = chưa từng, dùng trong câu khẳng định về kinh nghiệm',['never','ever','yet']],
    ['She has worked here ___ March.','since','March là một mốc trên trục thời gian',['since','for','in']],
    ['The team ___ the sprint goal yesterday.','reached','yesterday → quá khứ đơn, không dùng hiện tại hoàn thành',['reached','has reached','have reached']],
    /* --- thì tương lai (8) --- */
    ['Look at those clouds — it ___ rain.','is going to','có dấu hiệu nhìn thấy được ở hiện tại → be going to',['is going to','will','rains']],
    ['The phone is ringing. — I ___ answer it.','will','quyết định ngay lúc nói → will',['will','am going to','answered']],
    ['I ___ my manager at 3 p.m. tomorrow. It is in the calendar.','am meeting','lịch hẹn đã sắp xếp → hiện tại tiếp diễn chỉ tương lai',['am meeting','will meet','meet']],
    ['We ___ release the app next month — the plan is fixed.','are going to','kế hoạch đã định trước → be going to',['are going to','will','release']],
    ['I think it ___ be difficult.','will','I think + dự đoán chủ quan → will',['will','is','was']],
    ['Her flight ___ at 6 a.m. tomorrow.','leaves','lịch trình cố định (tàu, máy bay) → hiện tại đơn',['leaves','will leave','is leaving']],
    ['I promise I ___ send the file tonight.','will','lời hứa → will',['will','am going to','send']],
    ['What ___ you going to do after the release?','are','be going to: are + you + going to',['are','do','will']],
    /* --- so sánh & trạng từ (8) --- */
    ['This bug is ___ than the last one.','more difficult','tính từ dài → more + tính từ',['more difficult','difficulter','most difficult']],
    ['Python is ___ to learn than C++.','easier','tính từ 2 âm tiết kết thúc bằng -y → đổi y thành ier',['easier','more easy','easiest']],
    ['He is the ___ developer in the team.','best','good → better → best',['best','better','goodest']],
    ['My laptop is not ___ fast as yours.','as','cấu trúc not as ... as',['as','than','more']],
    ['The meeting was very ___. I almost fell asleep.','boring','vật/việc gây ra cảm giác → đuôi -ing',['boring','bored','bore']],
    ['I was ___ with the result.','disappointed','người nhận cảm giác → đuôi -ed',['disappointed','disappointing','disappoint']],
    ['She speaks English ___.','fluently','bổ nghĩa cho động từ speaks → trạng từ',['fluently','fluent','more fluent']],
    ['This is ___ interesting book I have ever read.','the most','so sánh nhất của tính từ dài → the most',['the most','most','the more']],
    /* --- động từ khuyết thiếu (8) --- */
    ["You ___ smoke here — it is a hospital.","mustn't",'cấm tuyệt đối → mustn\'t',["mustn't","don't have to","needn't"]],
    ["It's Saturday — I ___ get up early.","don't have to",'không bắt buộc, khác hẳn với cấm',["don't have to","mustn't","can't"]],
    ['___ you help me with this ticket, please?','Could','đề nghị lịch sự → Could',['Could','Should','Must']],
    ['You ___ see a doctor. You look terrible.','should','lời khuyên → should',['should','must not','can']],
    ['When I was six, I ___ swim.','could','khả năng trong quá khứ → could',['could','can','must']],
    ['She ___ be at home — her car is outside.','must','suy đoán gần như chắc chắn → must',['must','can\'t','mustn\'t']],
    ['It ___ rain later — take an umbrella just in case.','might','khả năng không chắc → might',['might','must','can']],
    ['Employees ___ wear a badge in the building.','have to','quy định từ bên ngoài → have to',['have to','had to','having to']],
    /* --- ôn tháng 1 (6) --- */
    ['I bought ___ new phone yesterday.','a','danh từ đếm được số ít, nhắc lần đầu',['a','the','(không cần)']],
    ['The bug appears only ___ Monday mornings.','on','thứ trong tuần → on',['on','at','in']],
    ['There ___ a lot of tickets in the backlog.','are','tickets số nhiều',['are','is','be']],
    ['She ___ not work on weekends.','does','phủ định hiện tại đơn với she',['does','do','did']],
    ['How ___ money do you need?','much','money không đếm được',['much','many','a lot']],
    ['I ___ to Da Nang last summer.','went','last summer → quá khứ đơn',['went','have gone','go']],
  ],
  write:{ mins:20, words:'120 từ', prompts:[
      'Đề A — Write about a project you are working on now. What is it, and what have you done so far?',
      'Đề B — Write about your plans for the next three months at work.' ],
    check:['Đề A có ít nhất 2 câu hiện tại hoàn thành (have/has + V3) chưa?',
           'Đề B có cả will và be going to, mỗi cái đúng vai trò của nó chưa?',
           'Có ít nhất 1 câu so sánh (-er / more) chưa?',
           'Mọi nghề nghiệp và danh từ đếm được số ít đã có a / an / the chưa?',
           'Mỗi câu vẫn kết thúc bằng dấu chấm chứ không phải dấu phẩy?'] },
  listen:{ mins:10, how:'Chọn 1 tập BBC 6 Minute English bạn CHƯA nghe. Nghe đúng 1 lần, không phụ đề, không tua lại. Rồi làm bộ câu hỏi có sẵn của chính tập đó trên trang BBC và quy về thang 10.' },
  speak:{ mins:5, topic:'Describe your working week. What do you usually do, and what have you finished recently?',
          how:'Nói 1 phút, ghi âm, không chuẩn bị quá 30 giây. Gửi bản ghi cho AI chấm cùng bài viết — đừng tự chấm.' } },

/* ============================================================
   TEST 3 · ngày 82 · tuần 12 · mốc CHẠM B1
   ============================================================ */
{ id:'t3', no:3, month:3, day:82, week:12, goal:'B1', mins:40,
  title:'Test 3 — Mốc chạm B1 · 45 câu · 40 phút',
  covers:'Câu điều kiện · bị động · V-ing và to V · quá khứ hoàn thành · 7 câu ôn tháng 1–2',
  items:[
    /* --- câu điều kiện (10) --- */
    ['If you ___ water to 100°C, it boils.','heat','sự thật luôn đúng → điều kiện loại 0, cả hai vế hiện tại đơn',['heat','will heat','heated']],
    ['If it rains tomorrow, we ___ the deploy.','will postpone','loại 1: if + hiện tại đơn, vế chính will + V',['will postpone','postpone','would postpone']],
    ['If I ___ you, I would talk to the manager.','were','loại 2: giả định trái hiện tại, dùng were cho mọi ngôi',['were','am','will be']],
    ['If we had tested it, we ___ this bug.','would have found','loại 3: giả định trái quá khứ',['would have found','would find','had found']],
    ['I wish I ___ more free time.','had','wish + quá khứ đơn để tiếc về hiện tại',['had','have','will have']],
    ['We can ship on Friday ___ nothing breaks.','as long as','điều kiện kèm ràng buộc',['as long as','unless','in case']],
    ['___ you hurry, you will miss the train.','Unless','unless = if not',['Unless','If','As long as']],
    ['Take a power bank ___ your phone dies.','in case','đề phòng việc có thể xảy ra',['in case','unless','if not']],
    ['She would call you if she ___ your number.','knew','loại 2 → vế if dùng quá khứ đơn',['knew','knows','had known']],
    ['If he ___ harder, he would have passed.','had worked','loại 3 → vế if dùng had + V3',['had worked','worked','would work']],
    /* --- câu bị động (10) --- */
    ['This service ___ by 2 million users every day.','is used','bị động hiện tại đơn',['is used','uses','is using']],
    ['The bug ___ yesterday.','was fixed','bị động quá khứ đơn',['was fixed','fixed','is fixed']],
    ['The report ___ tomorrow morning.','will be sent','bị động tương lai: will be + V3',['will be sent','will send','is sending']],
    ['The server ___ right now — wait 5 minutes.','is being restarted','bị động hiện tại tiếp diễn',['is being restarted','is restarting','restarted']],
    ['My phone ___ last week.','got stolen','get + V3: bị động thân mật, nhấn vào việc xảy ra bất ngờ',['got stolen','stole','was stealing']],
    ['English ___ in many countries.','is spoken','bị động hiện tại đơn, số nhiều tác nhân không cần nêu',['is spoken','speaks','is speaking']],
    ['The feature has ___ tested already.','been','bị động hiện tại hoàn thành: has been + V3',['been','being','be']],
    ['The email must ___ before 5 p.m.','be sent','sau modal → be + V3',['be sent','send','to send']],
    ['This code was written ___ a junior developer.','by','nêu tác nhân → by',['by','from','with']],
    ['The office ___ every evening.','is cleaned','bị động hiện tại đơn, tác nhân không quan trọng',['is cleaned','cleans','is cleaning']],
    /* --- V-ing và to V (10) --- */
    ['I enjoy ___ documentation in English.','reading','enjoy + V-ing',['reading','to read','read']],
    ['She decided ___ the offer.','to accept','decide + to V',['to accept','accepting','accept']],
    ['We finished ___ the module yesterday.','refactoring','finish + V-ing',['refactoring','to refactor','refactor']],
    ['He promised ___ the file tonight.','to send','promise + to V',['to send','sending','send']],
    ['I am interested in ___ backend.','learning','sau mọi giới từ → V-ing',['learning','to learn','learn']],
    ['Thank you for ___ me.','helping','for là giới từ → V-ing',['helping','to help','help']],
    ['This laptop is too slow ___ video.','to edit','too + tính từ + to V',['to edit','editing','for edit']],
    ['He is not old enough ___.','to drive','enough + to V',['to drive','driving','for driving']],
    ['I forgot ___ the door — it was open all night.','to lock','forget to V = quên chưa làm việc đó',['to lock','locking','lock']],
    ['I remember ___ him at the conference last year.','meeting','remember + V-ing = nhớ việc đã làm rồi',['meeting','to meet','meet']],
    /* --- quá khứ hoàn thành (8) --- */
    ['When I arrived, the meeting ___ already started.','had','việc xảy ra TRƯỚC một mốc quá khứ',['had','has','was']],
    ['She told me she ___ the book before.','had read','lùi thì trong câu tường thuật về việc trước đó',['had read','has read','reads']],
    ['By the time we deployed, QA ___ everything.','had tested','by the time + quá khứ → vế kia dùng had + V3',['had tested','tested','has tested']],
    ['After he ___ lunch, he went back to work.','had finished','after + quá khứ hoàn thành',['had finished','finished','has finished']],
    ['I ___ never seen such a strange bug before that day.','had','before that day là mốc quá khứ',['had','have','was']],
    ['He said the server ___ down twice that week.','had gone','tường thuật việc đã xảy ra trước lúc nói',['had gone','has gone','goes']],
    ['The train ___ by the time we got to the station.','had left','việc trước của hai việc quá khứ',['had left','left','has left']],
    ['When I called her, she ___ already left.','had','trước thời điểm gọi',['had','has','was']],
    /* --- ôn tháng 1–2 (7) --- */
    ['She has worked here ___ 2019.','since','2019 là mốc',['since','for','from']],
    ['I ___ my keys yesterday.','lost','yesterday → quá khứ đơn',['lost','have lost','had lost']],
    ['There ___ some milk in the fridge.','is','milk không đếm được',['is','are','be']],
    ['This is ___ hardest ticket in the sprint.','the','so sánh nhất luôn có the',['the','a','(không cần)']],
    ['You ___ wear a helmet — it is the law.','have to','quy định từ bên ngoài',['have to','should','might']],
    ['The meeting starts ___ 9 a.m.','at','giờ cụ thể → at',['at','on','in']],
    ['I ___ to Japan twice.','have been','kinh nghiệm, không nêu thời điểm',['have been','went','have gone']],
  ],
  read:{ title:'Phần đọc — 5 câu · 10 phút',
    text:`Two years ago, Minh worked in an office in Ho Chi Minh City. He spent almost two hours a day on the road, and by the time he got home he was too tired to study or cook. When his company moved to a remote-first model, he decided to move back to Da Lat, where his parents live.

At first the change was harder than he expected. Working from home sounds relaxing, but nobody had told him how quiet it would be. He missed the small conversations with his team, and after three months he noticed that he was working later and later every evening — there was no bus to catch, so there was no reason to stop.

What finally helped was a rule he made for himself: he leaves the house at six every evening, whatever is on the screen. He also joined a co-working space twice a week. He now says he would not go back to an office job, but he warns his friends that remote work does not save you time by itself. It only gives you the hours back. What you do with them is a separate problem.`,
    qs:[
      ['Vì sao Minh chuyển về Đà Lạt? ___','Công ty cho làm việc từ xa','Bài nói công ty chuyển sang remote-first, sau đó anh mới quyết định chuyển về',['Công ty cho làm việc từ xa','Vì anh mất việc ở thành phố','Vì bố mẹ anh bị ốm']],
      ['Điều gì làm anh bất ngờ trong thời gian đầu? ___','Sự yên tĩnh và cảm giác thiếu người trò chuyện','"nobody had told him how quiet it would be" và anh nhớ những cuộc nói chuyện nhỏ',['Sự yên tĩnh và cảm giác thiếu người trò chuyện','Mạng internet quá chậm','Nhà bố mẹ quá chật']],
      ['Vì sao anh làm việc muộn dần lên? ___','Không còn cái mốc phải rời văn phòng','"there was no bus to catch, so there was no reason to stop"',['Không còn cái mốc phải rời văn phòng','Vì anh được trả thêm tiền','Vì công ty giao thêm việc']],
      ['Anh giải quyết bằng cách nào? ___','Tự đặt luật rời nhà lúc 6 giờ và đi co-working 2 buổi/tuần','Hai việc được nêu ngay sau "What finally helped"',['Tự đặt luật rời nhà lúc 6 giờ và đi co-working 2 buổi/tuần','Xin quay lại văn phòng','Thuê thêm người làm cùng']],
      ['Câu cuối bài hàm ý gì? ___','Làm từ xa trả lại thời gian, nhưng dùng thời gian đó thế nào là việc khác','"It only gives you the hours back. What you do with them is a separate problem."',['Làm từ xa trả lại thời gian, nhưng dùng thời gian đó thế nào là việc khác','Làm từ xa luôn tiết kiệm thời gian','Anh khuyên bạn bè đừng làm từ xa']],
    ] },
  write:{ mins:25, words:'150 từ', prompts:[
      'Đề A — Describe a problem your team had and how it was solved. (Dùng ít nhất 3 câu bị động.)',
      'Đề B — If you could change one thing about how your team works, what would you change and why? (Dùng ít nhất 2 câu điều kiện.)' ],
    check:['Đề A: có đủ 3 câu bị động, và mỗi câu có thật sự cần bị động không (tác nhân không quan trọng)?',
           'Đề B: câu điều kiện loại 2 có dùng đúng were / would không?',
           'Có chỗ nào đáng lẽ phải dùng had + V3 vì nó xảy ra trước việc kia không?',
           'Sau enjoy / finish / avoid đã dùng V-ing, sau decide / promise / plan đã dùng to V chưa?',
           'Đoạn có ít nhất 3 từ nối (because, so, after that…) chưa?'] },
  listen:{ mins:10, how:'1 tập BBC 6 Minute English chưa nghe, nghe chay đúng 1 lần, rồi làm bộ câu hỏi của tập đó và quy về thang 10. So điểm với Test 2 — đây là lần thứ ba bạn đo nghe.' },
  speak:{ mins:5, topic:'Talk about a mistake you made at work and what you had learned by the end of it.',
          how:'Nói 1 phút, ghi âm. Gửi bản ghi + bài viết cho AI chấm theo 4 tiêu chí: phát âm, độ trôi, ngữ pháp, độ phong phú từ vựng.' } },

/* ============================================================
   TEST 4 · ngày 110 · tuần 16 · mục tiêu B1 vững
   ============================================================ */
{ id:'t4', no:4, month:4, day:110, week:16, goal:'B1 vững', mins:40,
  title:'Test 4 — B1 vững · 45 câu · 40 phút',
  covers:'Mệnh đề quan hệ · câu tường thuật · phrasal verbs · từ nối · 7 câu ôn tháng 1–3',
  items:[
    /* --- mệnh đề quan hệ (10) --- */
    ['The developer ___ wrote this code left the company.','who','chủ ngữ là người → who',['who','which','whose']],
    ['The bug ___ we found yesterday is critical.','which','chủ ngữ là vật → which / that',['which','who','whose']],
    ['This is the office ___ I work.','where','chỉ nơi chốn → where',['where','which','when']],
    ['I met a designer ___ portfolio is amazing.','whose','chỉ sở hữu → whose',['whose','who','which']],
    ['2020 was the year ___ everything changed.','when','chỉ thời gian → when',['when','where','which']],
    ['My manager, ___ joined last year, is from Da Nang.','who','mệnh đề không xác định về người, không dùng that',['who','that','which']],
    ['The file ___ on the desk is mine.','lying','rút gọn mệnh đề chủ động → V-ing',['lying','lies','which lying']],
    ['The email ___ yesterday contained the password.','sent','rút gọn mệnh đề bị động → V3',['sent','sending','send']],
    ['Hanoi, ___ is the capital of Vietnam, has 8 million people.','which','mệnh đề không xác định về vật → which, có dấu phẩy',['which','that','where']],
    ['Everything ___ he said was true.','that','sau everything / all / the only → dùng that',['that','which','what']],
    /* --- câu tường thuật (10) --- */
    ['He said, "I am tired." → He said he ___ tired.','was','lùi thì: am → was',['was','is','had been']],
    ['"I will call you," she said. → She said she ___ call me.','would','lùi thì: will → would',['would','will','would have']],
    ['"I have finished." → He said he ___ finished.','had','lùi thì: have → had',['had','has','would have']],
    ['"We met yesterday." → She said they had met ___.','the day before','đổi trạng từ: yesterday → the day before',['the day before','yesterday','tomorrow']],
    ['"Are you coming?" he asked. → He asked ___ I was coming.','if','tường thuật câu hỏi Yes/No → if / whether',['if','that','what']],
    ['"Where do you live?" → She asked me where I ___.','lived','câu hỏi tường thuật trở về trật tự câu kể',['lived','did live','do live']],
    ['"Don\'t touch it!" → He told me ___ touch it.','not to','mệnh lệnh phủ định → tell somebody not to V',['not to',"don't to",'to not']],
    ['"Please help me." → She asked me ___ her.','to help','ask somebody to V',['to help','help','helping']],
    ['He ___ me that the server was down.','told','tell + tân ngữ; say không đi kèm tân ngữ trực tiếp',['told','said','spoke']],
    ['Could you ___ more slowly, please?','speak','speak/talk nói về hành động nói; say cần nội dung theo sau',['speak','say','tell']],
    /* --- phrasal verbs (10) --- */
    ['I need to ___ up early tomorrow.','get','get up = thức dậy',['get','wake','stand']],
    ['Please ___ over the ticket to Minh.','hand','hand over = bàn giao',['hand','take','give']],
    ['We will ___ up on this issue next week.','follow','follow up = theo dõi tiếp',['follow','keep','catch']],
    ['Can you ___ out what is causing the crash?','find','find out = tìm ra',['find','sort','work']],
    ['The meeting was ___ off because of the storm.','called','call off = huỷ',['called','put','taken']],
    ['I ___ across an interesting article yesterday.','came','come across = tình cờ gặp',['came','went','got']],
    ['Please turn ___ the light when you leave.','off','turn off = tắt',['off','down','over']],
    ['She grew ___ in Hai Phong.','up','grow up = lớn lên',['up','on','in']],
    ['We need to ___ up with a better solution.','come','come up with = nghĩ ra',['come','make','take']],
    ['He ___ down my proposal.','turned','turn down = từ chối',['turned','put','fell']],
    /* --- liên kết ý (8) --- */
    ['___ it was raining, we went out.','Although','although + mệnh đề đầy đủ',['Although','Despite','However']],
    ['___ the rain, we went out.','Despite','despite + danh từ, không có mệnh đề',['Despite','Although','Even though']],
    ['The API was slow. ___, users complained.','Therefore','chỉ kết quả',['Therefore','However','Moreover']],
    ['The plan is risky. ___, it is the only option we have.','However','chỉ sự tương phản giữa hai câu',['However','Therefore','Moreover']],
    ['First we test, ___ we deploy.','then','chỉ trình tự',['then','however','despite']],
    ['___, I would like to thank the team.','First of all','mở đầu một chuỗi ý',['First of all','Finally','On the other hand']],
    ['He is smart. ___, he works hard.','Moreover','bổ sung thêm một ý cùng chiều',['Moreover','However','Although']],
    ['The design is good. ___, the code is slow.','On the other hand','đưa ra mặt ngược lại',['On the other hand','Moreover','Therefore']],
    /* --- ôn tháng 1–3 (7) --- */
    ['If I ___ you, I would take the job.','were','điều kiện loại 2',['were','was','am']],
    ['The bug ___ fixed last night.','was','bị động quá khứ đơn',['was','is','has']],
    ['I enjoy ___ in English.','writing','enjoy + V-ing',['writing','to write','write']],
    ['By the time we arrived, they ___ left.','had','quá khứ hoàn thành',['had','have','were']],
    ['She has been here ___ March.','since','mốc thời gian',['since','for','from']],
    ['You ___ smoke in the office.',"mustn't",'cấm',["mustn't","don't have to",'might not']],
    ['This is ___ most useful tool I know.','the','so sánh nhất',['the','a','(không cần)']],
  ],
  read:{ title:'Phần đọc — 5 câu · 10 phút',
    text:`Every company says it wants feedback from its users, but few of them are ready for what happens next. When a small Vietnamese startup called Tabi opened a public feedback board last year, it received more than 400 messages in the first month. The founders, who had expected perhaps thirty, spent two weeks reading them and found that most of the complaints were about the same three things.

That was the good news. The bad news was that fixing those three things would take about four months, and the team had already promised investors a new product for the same period. They chose the repairs, and told the investors why.

The decision cost them a funding round, which they only admitted publicly a year later. But the number of users who stopped using the app each month fell from nine per cent to two. One of the founders now says that the feedback board was the cheapest thing they ever built and the most expensive thing they ever read.`,
    qs:[
      ['Điều gì làm hai nhà sáng lập bất ngờ? ___','Số lượng phản hồi lớn hơn nhiều so với dự tính','Họ dự tính khoảng 30 nhưng nhận hơn 400',['Số lượng phản hồi lớn hơn nhiều so với dự tính','Người dùng khen nhiều hơn chê','Nhà đầu tư gửi phản hồi']],
      ['"That was the good news" chỉ điều gì? ___','Phần lớn lời phàn nàn tập trung vào đúng 3 việc','Câu ngay trước đó nói most complaints were about the same three things',['Phần lớn lời phàn nàn tập trung vào đúng 3 việc','Họ nhận được 400 tin nhắn','Nhà đầu tư đồng ý chờ']],
      ['Họ đã chọn gì? ___','Sửa ba vấn đề thay vì làm sản phẩm mới đã hứa','"They chose the repairs, and told the investors why."',['Sửa ba vấn đề thay vì làm sản phẩm mới đã hứa','Làm sản phẩm mới trước','Đóng bảng phản hồi lại']],
      ['Kết quả đo được là gì? ___','Tỉ lệ người dùng rời bỏ mỗi tháng giảm từ 9% xuống 2%','Con số nêu ở đoạn cuối',['Tỉ lệ người dùng rời bỏ mỗi tháng giảm từ 9% xuống 2%','Doanh thu tăng gấp đôi','Họ gọi được vòng vốn mới']],
      ['Câu cuối có ý gì? ___','Làm bảng phản hồi thì rẻ, nhưng hành động theo nó thì rất đắt','"cheapest thing they ever built and the most expensive thing they ever read"',['Làm bảng phản hồi thì rẻ, nhưng hành động theo nó thì rất đắt','Đọc phản hồi tốn nhiều tiền thuê người','Họ hối hận vì đã mở bảng phản hồi']],
    ] },
  write:{ mins:25, words:'150 từ', prompts:[
      'Đề A — Write an email to your manager reporting a problem and proposing two options. (Dùng ít nhất 2 mệnh đề quan hệ và 3 từ nối.)',
      'Đề B — A colleague asked you for advice about learning English. Write what you told them. (Dùng câu tường thuật.)' ],
    check:['Mệnh đề quan hệ có đúng who cho người, which/that cho vật không?',
           'Mệnh đề không xác định đã có dấu phẩy ở cả hai đầu chưa?',
           'Đề B: đã lùi thì đầy đủ (am→was, will→would, have→had) chưa?',
           'Từ nối có bị lặp lại một từ quá 2 lần không?',
           'Email có đủ 3 phần: lý do viết → nội dung → đề nghị hành động chưa?'] },
  listen:{ mins:10, how:'1 tập podcast dev nói chậm (Syntax, CodeNewbie), nghe 5 phút KHÔNG phụ đề, tự ghi 10 ý chính, rồi bật transcript đối chiếu. Đúng 1 ý = 1 điểm.' },
  speak:{ mins:5, topic:'Explain to a non-technical friend what you do at work. Then explain the same thing to a new developer on your team.',
          how:'Nói 1 phút, ghi âm. Cùng một nội dung, hai người nghe khác nhau — đây là bài kiểm tra khả năng đổi cách diễn đạt, không phải kiểm tra từ vựng.' } },

/* ============================================================
   TEST 5 · ngày 145 · tuần 21 · mục tiêu ngưỡng B2
   ============================================================ */
{ id:'t5', no:5, month:5, day:145, week:21, goal:'B2−', mins:45,
  title:'Test 5 — Ngưỡng B2 · 50 câu · 45 phút',
  covers:'12 thì · modal perfect · đảo ngữ · câu chẻ · used to · điều kiện trộn · collocation · 6 câu ôn',
  items:[
    /* --- 12 thì (12) --- */
    ['I ___ for this company for three years now.','have been working','việc bắt đầu trong quá khứ và vẫn đang tiếp diễn',['have been working','am working','work']],
    ['She was tired because she ___ all night.','had been coding','việc kéo dài trước một mốc quá khứ',['had been coding','has been coding','was coding']],
    ['By next June, I ___ here for four years.','will have worked','tương lai hoàn thành: mốc trong tương lai',['will have worked','will work','am working']],
    ['This time tomorrow, we ___ the new version.','will be testing','tương lai tiếp diễn: đang diễn ra tại một thời điểm tương lai',['will be testing','will test','test']],
    ['When I got to the office, everyone ___.','had left','trước mốc quá khứ',['had left','has left','left']],
    ['He ___ his current job in 2021.','started','mốc quá khứ xác định',['started','has started','had started']],
    ['I ___ this bug since Monday and still cannot find it.','have been chasing','nhấn vào quá trình kéo dài tới hiện tại',['have been chasing','chased','am chasing']],
    ['Water ___ at 100°C.','boils','sự thật hiển nhiên → hiện tại đơn',['boils','is boiling','has boiled']],
    ['Look — the build ___ again.','is failing','đang diễn ra ngay lúc nói',['is failing','fails','has failed']],
    ['They ___ the report before the meeting started.','had finished','việc trước của hai việc quá khứ',['had finished','finished','have finished']],
    ['I ___ him three times this morning, but he has not answered.','have called','this morning chưa kết thúc',['have called','called','had called']],
    ['She ___ in Da Nang before she moved to Hanoi.','had lived','việc trước → quá khứ hoàn thành',['had lived','has lived','lives']],
    /* --- modal perfect (6) --- */
    ['The build is broken. Someone ___ pushed to main.','must have','suy đoán gần như chắc chắn về quá khứ',['must have','should have','might not have']],
    ['You ___ told me earlier — I would have helped.','should have','trách nhẹ về việc đã không làm',['should have','must have','can have']],
    ['He ___ have seen the message; his phone was off.','cannot','khẳng định điều không thể đã xảy ra',['cannot','must','should']],
    ['I ___ have left my badge at home. Let me check my bag.','might','khả năng chưa chắc về quá khứ',['might','must','should']],
    ['We ___ have shipped on Friday, but QA found a bug.','could','việc đã có thể xảy ra nhưng đã không',['could','must','should not']],
    ['She ___ have known about the change — nobody told her.','cannot',"cấu trúc can't have + V3 = chắc chắn đã không",['cannot','must','might']],
    /* --- đảo ngữ (6) --- */
    ['Never ___ I seen such a strange bug.','have','never đứng đầu → đảo trợ động từ lên trước chủ ngữ',['have','I have','did']],
    ['Hardly ___ we deployed when the server crashed.','had','hardly ... when + quá khứ hoàn thành đảo',['had','have','did']],
    ['No sooner had he arrived ___ the meeting started.','than','no sooner ... than',['than','when','that']],
    ['Not only ___ the code slow, it was also unreadable.','was','not only đầu câu → đảo be lên trước chủ ngữ',['was','it was','did']],
    ['Rarely ___ a release go so smoothly.','does','rarely đầu câu → đảo trợ động từ, does + V nguyên thể',['does','is','has']],
    ['Only after the incident ___ we add monitoring.','did','only after + mệnh đề → đảo ở vế chính',['did','we did','had']],
    /* --- câu chẻ (5) --- */
    ['It was Minh ___ found the root cause.','who','nhấn vào người → It was + người + who',['who','which','what']],
    ['It is the database ___ is slow, not the API.','that','nhấn vào vật → that / which',['that','who','what']],
    ['___ I need is more time, not more people.','What','câu chẻ dạng what: What I need is ...',['What','That','It']],
    ['It was in 2022 ___ we rewrote the whole system.','that','nhấn vào thời gian → It was ... that',['that','when','which']],
    ['___ he did was rewrite the entire module in one night.','What','What + mệnh đề + was + V',['What','That','It']],
    /* --- used to (4) --- */
    ['I ___ work at a bank before I became a developer.','used to','thói quen trong quá khứ nay không còn',['used to','am used to','use to']],
    ['I am ___ to working from home now.','used','be used to = đã quen với',['used','use','using']],
    ['It took a month, but I got used to ___ up at six.','getting','be/get used to + V-ing',['getting','get','got']],
    ['She ___ smoke, but she stopped last year.','used to','quá khứ, nay không còn',['used to','is used to','uses to']],
    /* --- điều kiện trộn (5) --- */
    ['If I had studied English earlier, I ___ a better job now.','would have','vế if quá khứ, vế chính hiện tại → would have + danh từ',['would have','would have had','had']],
    ['If she were more careful, she ___ that mistake yesterday.','would not have made','vế if hiện tại (tính cách), vế chính quá khứ',['would not have made','would not make','did not make']],
    ['If we had hired him, he ___ our tech lead today.','would be','nguyên nhân quá khứ, kết quả hiện tại',['would be','would have been','is']],
    ['If I were not so tired, I ___ to your party last night.','would have gone','trạng thái hiện tại, hệ quả trong quá khứ',['would have gone','would go','went']],
    ['If they had listened to QA, the app ___ down right now.','would not be','nguyên nhân quá khứ, kết quả hiện tại',['would not be','would not have been','is not']],
    /* --- collocation & từ vựng B2 (6) --- */
    ['We need to ___ the deadline for the release.','meet','meet a deadline',['meet','reach','catch']],
    ['I want to ___ an issue at the next stand-up.','raise','raise an issue',['raise','lift','say']],
    ['The team ___ a decision yesterday.','made','make a decision',['made','did','took']],
    ['This change will have a big ___ on performance.','impact','have an impact on',['impact','affect','effort']],
    ['Let me ___ some research before we choose.','do','do research',['do','make','take']],
    ['We should ___ into account the cost of migration.','take','take something into account',['take','put','make']],
    /* --- ôn tháng 1–4 (6) --- */
    ['The report ___ to the client yesterday.','was sent','bị động quá khứ đơn',['was sent','sent','has sent']],
    ['She said she ___ call me back.','would','lùi thì will → would',['would','will','would have']],
    ['The engineer ___ fixed it has left the company.','who','chủ ngữ là người',['who','which','whose']],
    ['___ the rain, the event started on time.','Despite','despite + danh từ',['Despite','Although','However']],
    ['I look forward to ___ from you.','hearing','sau giới từ to trong look forward to → V-ing',['hearing','hear','be heard']],
    ['We had to ___ off the meeting.','call','call off = huỷ',['call','turn','put']],
  ],
  read:{ title:'Phần đọc mức B2 — 5 câu · 12 phút',
    text:`For most of the twentieth century, the standard advice to anyone learning a language was to study its grammar thoroughly before trying to use it. The reasoning seemed sound: you would not ask someone to play a concert before they had learned the notes. What this comparison missed is that language, unlike music, is something the learner has already done once. Nobody teaches a five-year-old the rules for word order, and yet the five-year-old almost never gets it wrong.

Research since the 1980s has consistently found that comprehensible input — material a learner understands about eighty per cent of — accounts for far more of the eventual result than the number of grammar exercises completed. This does not mean grammar study is useless. It appears to work best as a way of noticing: a learner who has recently studied the present perfect will hear it in conversation, where before they heard nothing in particular.

The practical conclusion is less romantic than "just immerse yourself" and less comfortable than "finish the textbook". Grammar earns its place as roughly a quarter of study time, on condition that the other three quarters consist of listening and reading that the learner can almost, but not quite, follow easily.`,
    qs:[
      ['Điểm yếu của phép so sánh với âm nhạc là gì? ___','Người học ngôn ngữ đã từng làm được việc đó một lần rồi','"language, unlike music, is something the learner has already done once"',['Người học ngôn ngữ đã từng làm được việc đó một lần rồi','Âm nhạc khó hơn ngôn ngữ','Trẻ con không học được nhạc']],
      ['"comprehensible input" trong bài nghĩa là gì? ___','Tài liệu người học hiểu được khoảng 80%','Bài định nghĩa ngay trong câu: material a learner understands about eighty per cent of',['Tài liệu người học hiểu được khoảng 80%','Tài liệu do giáo viên bản ngữ soạn','Tài liệu có phụ đề tiếng mẹ đẻ']],
      ['Theo bài, học ngữ pháp có tác dụng gì? ___','Giúp người học NHẬN RA cấu trúc khi gặp lại trong lúc nghe','"It appears to work best as a way of noticing"',['Giúp người học NHẬN RA cấu trúc khi gặp lại trong lúc nghe','Thay thế hoàn toàn cho việc nghe','Giúp nói nhanh hơn ngay lập tức']],
      ['Tác giả đề xuất tỉ lệ nào cho ngữ pháp? ___','Khoảng một phần tư thời gian học','"roughly a quarter of study time"',['Khoảng một phần tư thời gian học','Một nửa thời gian học','Càng nhiều càng tốt']],
      ['Giọng điệu của tác giả với hai khẩu hiệu ở đoạn cuối là gì? ___','Cho rằng cả hai đều quá đơn giản so với thực tế','"less romantic than... and less comfortable than..." — phê phán cả hai',['Cho rằng cả hai đều quá đơn giản so với thực tế','Hoàn toàn đồng ý với "just immerse yourself"','Khuyên nên học hết sách giáo khoa']],
    ] },
  write:{ mins:30, words:'180 từ', prompts:[
      'Đề A — Some companies now require developers to work in the office five days a week. Do you agree with this policy? Give your opinion with two reasons and one counter-argument.',
      'Đề B — Describe a technical decision your team made that you disagreed with. Explain both sides fairly, then give your view.' ],
    check:['Có đủ 3 phần: câu chủ đề → luận cứ có ví dụ → kết luận chưa?',
           'Có ít nhất 1 câu đảo ngữ hoặc 1 câu chẻ dùng ĐÚNG chỗ (không phải nhét vào cho đủ)?',
           'Có dùng ít nhất 4 collocation của tuần 21 không?',
           'Phần phản biện có được trình bày công bằng, hay chỉ dựng lên để đánh đổ?',
           'Chạy checklist 10 lỗi của tuần 19 — bắt được bao nhiêu lỗi?'] },
  listen:{ mins:10, how:'1 talk hội thảo 15 phút chưa xem, TẮT phụ đề. Ghi 10 ý chính trong lúc nghe. Bật lại phụ đề, đối chiếu, đúng 1 ý = 1 điểm. So với Test 4 — cùng cách chấm, nên số so được với nhau.' },
  speak:{ mins:5, topic:'Should companies let developers choose their own tools? Argue for two minutes.',
          how:'Nói 2 phút về một chủ đề trừu tượng — đây là dạng B2 thật, khác hẳn với kể về công việc của mình. Ghi âm và gửi AI chấm cùng bài viết.' } },

/* ============================================================
   TEST 6 · ngày 176–179 · tuần 26 · thi thử cuối khoá
   Bốn ngày, mỗi ngày một kỹ năng — giống cấu trúc một kỳ thi thật.
   ============================================================ */
{ id:'t6', no:6, month:6, day:176, week:26, goal:'Đánh giá CEFR', mins:45,
  title:'Test 6 — Thi thử cuối khoá · phần 1 · 60 câu · 45 phút',
  covers:'Toàn bộ 6 tháng. Ngày 176 làm phần này; ngày 177 đọc, ngày 178 viết, ngày 179 nghe và nói.',
  items:[
    /* --- mạo từ, giới từ, danh từ (8) --- */
    ['She works as ___ engineer at a startup.','an','engineer bắt đầu bằng âm nguyên âm',['an','a','the']],
    ['I need ___ advice about this architecture.','(không cần)','advice không đếm được, nói chung',['(không cần)','an','the']],
    ['The team meets ___ Monday mornings.','on','thứ trong tuần',['on','at','in']],
    ['He has worked here ___ five years.','for','khoảng thời gian',['for','since','during']],
    ['She is good ___ solving hard problems.','at','good at + V-ing',['at','in','for']],
    ['How ___ tickets are still open?','many','tickets đếm được',['many','much','a lot']],
    ['We depend ___ this library for authentication.','on','depend on',['on','of','from']],
    ['There is ___ information missing in the ticket.','some','some trong câu khẳng định, information không đếm được',['some','a','many']],
    /* --- hệ thống thì (12) --- */
    ['I ___ this framework since last year.','have been using','kéo dài từ quá khứ tới hiện tại',['have been using','use','used']],
    ['He ___ the office at six every day.','leaves','thói quen → hiện tại đơn',['leaves','is leaving','has left']],
    ['They ___ the migration last weekend.','completed','mốc quá khứ xác định',['completed','have completed','had completed']],
    ['By the time the client called, we ___ the fix.','had deployed','trước một mốc quá khứ',['had deployed','deployed','have deployed']],
    ['This time next week I ___ on the beach.','will be sitting','đang diễn ra tại một thời điểm tương lai',['will be sitting','will sit','sit']],
    ['She ___ here for ten years by next March.','will have worked','tương lai hoàn thành',['will have worked','will work','has worked']],
    ['Be quiet — the baby ___.','is sleeping','đang diễn ra ngay lúc nói',['is sleeping','sleeps','has slept']],
    ['I ___ him since we worked together in 2019.','have known','know là động từ trạng thái, không dùng tiếp diễn',['have known','have been knowing','know']],
    ['When I called, he ___ lunch.','was having','đang diễn ra khi việc khác xen vào',['was having','had','has had']],
    ['The report ___ yet.',"has not arrived",'yet + hiện tại hoàn thành phủ định',["has not arrived",'did not arrive','does not arrive']],
    ['We ___ three releases so far this quarter.','have shipped','quý này chưa kết thúc',['have shipped','shipped','had shipped']],
    ['He said he ___ working on it since morning.','had been','lùi thì của has been',['had been','has been','was']],
    /* --- câu điều kiện & giả định (6) --- */
    ['If the tests ___, the pipeline stops.','fail','loại 0: sự thật luôn đúng',['fail','will fail','failed']],
    ['If we finish early, we ___ ship on Thursday.','will','loại 1',['will','would','would have']],
    ['If I ___ more experience, I would apply.','had','loại 2',['had','have','would have']],
    ['If they had told us, we ___ the outage.','could have prevented','loại 3',['could have prevented','could prevent','can prevent']],
    ['If he had accepted the offer, he ___ in Singapore now.','would be','điều kiện trộn: quá khứ → hiện tại',['would be','would have been','is']],
    ['I wish I ___ said that in the meeting.',"had not",'wish + had + V3: tiếc về quá khứ',["had not",'did not','would not']],
    /* --- bị động (6) --- */
    ['The new policy ___ next month.','will be announced','bị động tương lai',['will be announced','will announce','announces']],
    ['The bug ___ by a user, not by QA.','was reported','bị động quá khứ đơn',['was reported','reported','has reporting']],
    ['This library ___ by thousands of projects.','is used','bị động hiện tại đơn',['is used','uses','is using']],
    ['The database is ___ migrated right now.','being','bị động hiện tại tiếp diễn',['being','been','be']],
    ['All changes must ___ reviewed before merging.','be','sau modal → be + V3',['be','been','being']],
    ['The document has ___ updated twice this week.','been','bị động hiện tại hoàn thành',['been','being','be']],
    /* --- V-ing / to V (5) --- */
    ['They avoided ___ the real problem.','discussing','avoid + V-ing',['discussing','to discuss','discuss']],
    ['We plan ___ the API next quarter.','to rewrite','plan + to V',['to rewrite','rewriting','rewrite']],
    ['He is used to ___ under pressure.','working','be used to + V-ing',['working','work','to work']],
    ['She stopped ___ notes and just listened.','taking','stop + V-ing = ngừng hẳn việc đó',['taking','to take','take']],
    ['The code is complex enough ___ a second reviewer.','to need','enough + to V',['to need','needing','for need']],
    /* --- mệnh đề quan hệ (5) --- */
    ['The tool ___ we chose turned out to be slow.','that','tân ngữ, chỉ vật',['that','who','whose']],
    ['My colleague, ___ speaks Japanese, joined the call.','who','mệnh đề không xác định về người',['who','that','which']],
    ['That is the room ___ we do interviews.','where','chỉ nơi chốn',['where','which','when']],
    ['The candidate ___ CV you sent looks strong.','whose','chỉ sở hữu',['whose','who','which']],
    ['The tickets ___ last week are still open.','created','rút gọn mệnh đề bị động',['created','creating','which creating']],
    /* --- tường thuật (4) --- */
    ['He told me he ___ finish it by Friday.','would','lùi thì will → would',['would','will','would have']],
    ['She asked me ___ I had tested it.','if','câu hỏi Yes/No tường thuật',['if','that','what']],
    ['They said they ___ already deployed.','had','lùi thì have → had',['had','have','were']],
    ['My manager told me ___ worry about it.','not to','tell somebody not to V',['not to',"don't",'to not']],
    /* --- modal & modal perfect (5) --- */
    ['You ___ push directly to main — it is blocked anyway.',"mustn't",'cấm',["mustn't","don't have to",'might not']],
    ['We ___ come in on Saturday; the deadline moved.',"don't have to",'không bắt buộc',["don't have to","mustn't","can't"]],
    ['He ___ have forgotten — he never forgets anything.','cannot','khẳng định điều không thể',['cannot','must','should']],
    ['You ___ have asked me; I had the answer.','should','trách nhẹ về việc đã không làm',['should','must','can']],
    ['It ___ be a network issue, but I am not sure.','might','khả năng chưa chắc',['might','must','cannot']],
    /* --- đảo ngữ & câu chẻ (4) --- */
    ['Never before ___ we had so many users at once.','have','never before đầu câu → đảo',['have','we have','did']],
    ['It was the config file ___ caused the outage.','that','câu chẻ nhấn vào vật',['that','who','what']],
    ['___ surprised me was how fast they replied.','What','câu chẻ dạng what',['What','That','It']],
    ['Not only ___ it fail, it also lost data.','did','not only + trợ động từ đảo lên trước',['did','it did','was']],
    /* --- phrasal verb & collocation (5) --- */
    ['Could you ___ up on that email from Tuesday?','follow','follow up on',['follow','look','come']],
    ['We need to ___ a decision before Friday.','make','make a decision',['make','do','take']],
    ['The release was ___ off until next month.','put','put off = hoãn',['put','called','turned']],
    ['This will have a serious ___ on the timeline.','impact','have an impact on',['impact','affect','effect on']],
    ['Let me ___ this issue at the retro.','raise','raise an issue',['raise','rise','lift']],
  ],
  read:{ title:'Phần 2 — Đọc hiểu · ngày 177 · 5 câu · 40 phút cho cả 3 bài',
    text:`The most common mistake in planning a personal project is not underestimating the work — everybody knows about that — but underestimating how much of the work is invisible until you begin. A developer who plans to build a small tool in a weekend is usually right about the code and wrong about everything around it: the account system, the error messages, the fifteen small decisions per hour that nobody writes down in advance.

This is why experienced teams do not plan by guessing the total. They plan by finding the smallest version that a real person could use, shipping it, and then letting the next set of decisions become visible. The method is not popular because it feels like admitting that you cannot see the end. In practice, nobody can see the end; the only question is whether your plan pretends otherwise.

There is a cost to this approach, and it is worth stating honestly. Projects planned this way are harder to sell to anyone who wants a date, and they can drift if no one keeps asking what the smallest useful next version is. The discipline is not in the shipping. It is in that question.`,
    qs:[
      ['Theo tác giả, sai lầm phổ biến nhất là gì? ___','Không thấy được phần việc chỉ lộ ra sau khi đã bắt đầu','"underestimating how much of the work is invisible until you begin"',['Không thấy được phần việc chỉ lộ ra sau khi đã bắt đầu','Đánh giá thấp tổng khối lượng công việc','Chọn sai công nghệ']],
      ['Đội ngũ có kinh nghiệm lập kế hoạch bằng cách nào? ___','Tìm phiên bản nhỏ nhất dùng được, ship, rồi để các quyết định tiếp theo lộ ra','Nêu ngay ở đầu đoạn 2',['Tìm phiên bản nhỏ nhất dùng được, ship, rồi để các quyết định tiếp theo lộ ra','Ước lượng tổng thời gian thật kỹ','Thuê thêm người ngay từ đầu']],
      ['Vì sao cách làm đó không được ưa chuộng? ___','Vì nó giống như thừa nhận mình không nhìn thấy điểm kết thúc','"it feels like admitting that you cannot see the end"',['Vì nó giống như thừa nhận mình không nhìn thấy điểm kết thúc','Vì nó tốn kém hơn','Vì nó đòi hỏi công cụ đắt tiền']],
      ['Tác giả thừa nhận nhược điểm nào? ___','Khó thuyết phục người cần một mốc ngày, và dễ trôi nếu không ai hỏi bước nhỏ tiếp theo','Nêu ở đoạn cuối',['Khó thuyết phục người cần một mốc ngày, và dễ trôi nếu không ai hỏi bước nhỏ tiếp theo','Chất lượng mã nguồn kém hơn','Không dùng được cho đội lớn']],
      ['Câu "The discipline is not in the shipping. It is in that question." nghĩa là gì? ___','Phần khó không phải là ship, mà là liên tục hỏi bước nhỏ hữu ích tiếp theo là gì','"that question" trỏ về câu hỏi ở ngay trước đó',['Phần khó không phải là ship, mà là liên tục hỏi bước nhỏ hữu ích tiếp theo là gì','Ship càng nhanh càng tốt','Kỷ luật quan trọng hơn kỹ năng']],
    ] },
  write:{ mins:40, words:'1 email + 1 bài 180 từ', prompts:[
      'Phần 1 — Email: your team will be late on a deliverable. Write to the client: what happened, what you are doing, what you need from them.',
      'Phần 2 — Bài luận 180 từ: "Learning a language as an adult is mostly a problem of time, not talent." Do you agree?' ],
    check:['Email có đủ 3 phần và có giữ được giọng lịch sự khi báo tin xấu không?',
           'Bài luận có luận điểm rõ ở câu đầu chưa?',
           'Mỗi luận cứ có ít nhất 1 ví dụ cụ thể chưa?',
           'Có ít nhất 5 cấu trúc mức B2 (thì hoàn thành tiếp diễn, modal perfect, đảo ngữ, câu chẻ, điều kiện trộn) không?',
           'Chạy checklist 10 lỗi của tuần 19 lần cuối — còn bao nhiêu lỗi so với Test 1?'] },
  listen:{ mins:25, how:'Ngày 179. Nghe 20 câu không phụ đề, không nghe lại lần 2 — dùng 2 tập podcast/talk chưa nghe, mỗi tập 10 ý chính. Chấm giống Test 4 và Test 5 để so được cả ba lần.' },
  speak:{ mins:20, topic:'3 phút về công việc của bạn, không chuẩn bị trước. Rồi 2 phút bảo vệ một quan điểm kỹ thuật mà bạn tin.',
          how:'Ngày 179. Ghi âm cả hai. Nghe lại bản ghi tuần 1 ngay sau đó — đây là phép đo thật nhất của 6 tháng, và là thứ duy nhất trong khoá không thể tự lừa mình được.' } },

];
