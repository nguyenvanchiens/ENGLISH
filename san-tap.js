/* =========================================================
   SÂN TẬP — mỗi tuần một sản phẩm THẬT

   Vấn đề của bản cũ: 29 khái niệm, 433 từ, 126 câu bài tập
   nằm rải rác, không cái nào gặp cái nào. Học xong không có
   chỗ đáp xuống, nên thấy dàn trải và chán.

   Sân tập là chỗ đáp. Mỗi tuần một sản phẩm thật, và nó BẮT
   BUỘC gom ba thứ lại cùng lúc:
     · điểm ngữ pháp của tuần
     · từ vựng mới của tuần
     · các lỗi đang có trong sổ lỗi (phải né)

   Bài tập điền chỗ trống kiểm tra bạn có NHẬN RA luật không.
   Sân tập kiểm tra bạn có DÙNG được nó không. Hai việc khác nhau.

   Mọi sản phẩm đều là thứ một dev đi làm viết thật, và đều
   gửi đi được — không nằm trong vở.

   ship  = gửi đi đâu, để nó ra khỏi máy bạn
   force = vì sao sản phẩm này ép đúng ngữ pháp tuần đó
   ========================================================= */

const ARENA = [
/* ---------------- THÁNG 1 ---------------- */
{ w:1, t:'Viết lại phần giới thiệu bản thân', size:'5 câu',
  ship:'Dán vào LinkedIn hoặc phần About của CV',
  force:'Câu nào cũng phải có mạo từ: <em>I am <b>a</b> developer</em>, <em><b>a</b> team of five</em>. Đây đúng là câu bạn viết sai hôm 30.07 — viết lại cho đúng.',
  must:['Ít nhất 3 mạo từ dùng đúng','5 từ chủ đề công việc văn phòng','Không lặp lại lỗi nào trong sổ lỗi'] },

{ w:2, t:'Hướng dẫn đường đi làm cho đồng nghiệp nước ngoài', size:'6–8 câu',
  ship:'Gửi thật cho một người, hoặc lưu vào ghi chú của team',
  force:'Không thể viết chỉ đường mà không dùng giới từ. Mỗi câu sẽ có ít nhất một <em>at / on / in / to</em>.',
  must:['Ít nhất 8 giới từ khác nhau','5 từ chủ đề địa điểm & di chuyển','Không lặp lại lỗi nào trong sổ lỗi'] },

{ w:3, t:'Viết standup mẫu + một ngày làm việc của bạn', size:'8–10 câu',
  ship:'Dùng làm mẫu standup, gửi vào Slack từ tuần sau',
  force:'Một ngày làm việc là thói quen (hiện tại đơn), việc đang làm là hiện tại tiếp diễn. Hai thì nằm cạnh nhau trong cùng một đoạn.',
  must:['Cả hiện tại đơn và hiện tại tiếp diễn, mỗi thì ít nhất 3 câu','5 từ chủ đề thói quen & lịch trình','Không lặp lại lỗi nào trong sổ lỗi'] },

{ w:4, t:'Báo cáo tuần: tuần vừa rồi tôi đã làm gì', size:'10 câu',
  ship:'Gửi cho quản lý, hoặc dán vào kênh của team',
  force:'Kể chuyện đã xong thì bắt buộc dùng quá khứ đơn từ đầu đến cuối, kể cả động từ bất quy tắc.',
  must:['Ít nhất 10 động từ ở quá khứ đơn, trong đó 4 cái bất quy tắc','Không dùng "yesterday I watch" — kiểm lại từng động từ','Không lặp lại lỗi nào trong sổ lỗi'] },

/* ---------------- THÁNG 2 ---------------- */
{ w:5, t:'Viết phần "What\u2019s changed" cho một bản phát hành', size:'8 dòng',
  ship:'Dán vào release note thật, hoặc phần mô tả tag trên Git',
  force:'Release note là chỗ hiện tại hoàn thành sống tự nhiên nhất: <em>We <b>have added</b>… We <b>have fixed</b>…</em> — việc đã xong nhưng kết quả còn nguyên tới bây giờ.',
  must:['Ít nhất 6 câu hiện tại hoàn thành','Ít nhất 2 câu quá khứ đơn có mốc thời gian, để thấy khác nhau','Không lặp lại lỗi nào trong sổ lỗi'] },

{ w:6, t:'Kế hoạch sprint tới', size:'8–10 câu',
  ship:'Gửi vào kênh của team trước buổi planning',
  force:'Kế hoạch thì có ba mức chắc chắn khác nhau: việc đã chốt lịch, việc đã tính, và việc vừa nghĩ ra. Ba mức đó là ba cách nói tương lai.',
  must:['Dùng cả will, be going to, và hiện tại tiếp diễn chỉ tương lai','5 từ chủ đề kế hoạch & dự định','Không lặp lại lỗi nào trong sổ lỗi'] },

{ w:7, t:'So sánh hai thư viện rồi chọn một', size:'120 từ',
  ship:'Dán vào một issue trên GitHub, hoặc gửi cho team để chốt',
  force:'So sánh thì không tránh được <em>-er / more / the most / as… as</em>. Và bạn phải chọn, nên phải có so sánh nhất.',
  must:['Ít nhất 5 dạng so sánh khác nhau','Ít nhất 3 tính từ và 2 trạng từ dùng đúng chỗ','Không lặp lại lỗi nào trong sổ lỗi'] },

{ w:8, t:'Hướng dẫn cài đặt cho người mới vào team', size:'10 bước',
  ship:'Dán vào README hoặc trang wiki của team',
  force:'Hướng dẫn thì phải phân biệt rõ: cái gì <b>bắt buộc</b>, cái gì <b>nên</b>, cái gì <b>tuỳ chọn</b>, cái gì <b>cấm</b>. Đó chính là must / should / can / mustn\u2019t.',
  must:['Dùng must, should, can, và mustn\u2019t — mỗi cái ít nhất một lần','Có ít nhất một câu don\u2019t have to, để thấy nó khác mustn\u2019t','Không lặp lại lỗi nào trong sổ lỗi'] },

/* ---------------- THÁNG 3 ---------------- */
{ w:9, t:'Phần xử lý sự cố trong tài liệu', size:'6 tình huống',
  ship:'Dán vào phần Troubleshooting của README',
  force:'Mỗi dòng troubleshooting là một câu điều kiện: <em>If the build fails, check…</em> Và có tình huống có thật, có tình huống giả định — hai loại điều kiện khác nhau.',
  must:['Ít nhất 4 câu điều kiện loại 1','Ít nhất 2 câu loại 2, cho tình huống giả định','Không lặp lại lỗi nào trong sổ lỗi'] },

{ w:10, t:'Mô tả một pull request lớn', size:'120 từ',
  ship:'Dán thật vào phần mô tả PR tiếp theo của bạn',
  force:'Mô tả PR luôn có "tôi quyết định làm X", "tôi tránh làm Y", "cần thêm Z" — toàn là chỗ hai động từ đứng cạnh nhau, nên phải chọn V-ing hay to V.',
  must:['Ít nhất 5 cặp động từ + V-ing hoặc to V','Ít nhất 2 chỗ V-ing sau giới từ','Không lặp lại lỗi nào trong sổ lỗi'] },

{ w:11, t:'Một bug report chuẩn', size:'100 từ',
  ship:'Ghi thật vào issue tracker của dự án',
  force:'Bug report là chỗ câu bị động tự nhiên nhất: ai gây ra lỗi không quan trọng, cái gì bị hỏng mới quan trọng. <em>The request <b>is rejected</b>… The log <b>was not written</b>…</em>',
  must:['Ít nhất 5 câu bị động','Ít nhất 1 câu chủ động, để thấy vì sao chỗ đó không nên bị động','Không lặp lại lỗi nào trong sổ lỗi'] },

{ w:12, t:'Post-mortem một sự cố', size:'150 từ',
  ship:'Gửi cho team, hoặc lưu vào tài liệu vận hành',
  force:'Post-mortem có hai mốc quá khứ: chuyện xảy ra TRƯỚC khi phát hiện, và lúc phát hiện. Không có quá khứ hoàn thành thì không kể rõ được cái nào trước cái nào.',
  must:['Ít nhất 4 câu had + V3','Ít nhất 1 câu điều kiện loại 3: đáng lẽ đã… nếu…','Không lặp lại lỗi nào trong sổ lỗi'] },

/* ---------------- THÁNG 4 ---------------- */
{ w:13, t:'Mô tả kiến trúc hệ thống bạn đang làm', size:'150 từ',
  ship:'Dán vào README hoặc tài liệu kiến trúc',
  force:'Không thể mô tả kiến trúc bằng câu ngắn. "Cái service gọi database, cái mà lưu phiên đăng nhập" — mỗi định nghĩa là một mệnh đề quan hệ.',
  must:['Ít nhất 6 mệnh đề quan hệ, dùng cả who / which / that / where','Ít nhất 1 mệnh đề không xác định, có dấu phẩy','Không lặp lại lỗi nào trong sổ lỗi'] },

{ w:14, t:'Biên bản một cuộc họp', size:'120 từ',
  ship:'Gửi vào kênh team sau buổi họp gần nhất',
  force:'Biên bản là kể lại lời người khác. Toàn bộ bài viết sẽ là câu tường thuật, và bạn phải lùi thì trong từng câu.',
  must:['Ít nhất 8 câu tường thuật, có lùi thì','Ít nhất 2 câu hỏi được tường thuật lại','Không lặp lại lỗi nào trong sổ lỗi'] },

{ w:15, t:'Một chuỗi tin nhắn Slack thật', size:'10 tin nhắn',
  ship:'Gửi thật trong ngày, không viết ra giấy rồi cất',
  force:'Slack là văn nói viết ra. Người bản ngữ nhắn tin bằng phrasal verb chứ không dùng từ trang trọng — <em>put off</em> chứ không <em>postpone</em>.',
  must:['Ít nhất 8 phrasal verb khác nhau','Ít nhất 2 cái tách được, có tân ngữ chen vào giữa','Không lặp lại lỗi nào trong sổ lỗi'] },

{ w:16, t:'Đề xuất kỹ thuật: vấn đề, giải pháp, đánh đổi', size:'150 từ',
  ship:'Gửi cho team hoặc quản lý để lấy ý kiến',
  force:'Đề xuất thì phải nối ý ngược chiều liên tục: "cách này nhanh <b>nhưng</b> tốn tiền", "mặc dù khó, <b>vì vậy</b> tôi vẫn chọn". Đây chính là chỗ chữa lỗi dấu phẩy nối năm câu của bạn.',
  must:['Ít nhất 6 từ nối khác nhau','Có cả although (nối mệnh đề) và despite (đi với cụm từ)','Không còn câu nào nối bằng dấu phẩy'] },

/* ---------------- THÁNG 5 ---------------- */
{ w:17, t:'Cập nhật tiến độ dự án', size:'120 từ',
  ship:'Gửi cho quản lý hoặc khách hàng',
  force:'Cập nhật tiến độ phải nói được "đã làm bao lâu và vẫn đang làm" — đó là hoàn thành tiếp diễn. Và "chắc là bị chậm vì…" — đó là modal perfect.',
  must:['Ít nhất 3 câu have been + V-ing','Ít nhất 2 câu modal perfect: must have / might have / should have','Không lặp lại lỗi nào trong sổ lỗi'] },

{ w:18, t:'Viết lại đề xuất của tuần 16 theo văn phong trang trọng', size:'150 từ',
  ship:'Bản này gửi ra ngoài team được — khách hàng hoặc cấp trên',
  force:'Cùng một nội dung, hai giọng. Bạn sẽ thấy rõ đảo ngữ và câu chẻ dùng để làm gì: đẩy thứ quan trọng lên đầu câu.',
  must:['Ít nhất 2 câu đảo ngữ và 2 câu chẻ','Thay ít nhất 6 từ thường bằng từ trang trọng: get → obtain, need → require…','Đặt cạnh bản tuần 16 để so — đây là phần học chính'] },

{ w:19, t:'Một bài blog kỹ thuật ngắn', size:'200 từ',
  ship:'Đăng thật lên Dev.to, Medium, hoặc blog của bạn',
  force:'Bài blog buộc phải có cấu trúc đoạn: câu chủ đề, luận cứ, ví dụ. Đây là lần đầu bạn viết cho người lạ đọc, không phải cho đồng nghiệp đã biết ngữ cảnh.',
  must:['Ba đoạn, mỗi đoạn một ý, câu đầu đoạn nói ngay ý chính','Chạy checklist 10 lỗi lên bài trước khi đăng','Không lặp lại lỗi nào trong sổ lỗi'] },

{ w:20, t:'Ghi âm 3 phút giải thích dự án đang làm', size:'3 phút, không đọc giấy',
  ship:'Gửi bản ghi cho AI nghe và nhận xét phát âm',
  force:'Nói không có giấy thì mọi thứ học được phải tự bật ra. Đây là lần đầu bạn kiểm tra xem nó đã thành phản xạ chưa, hay vẫn phải nghĩ.',
  must:['Nói liên tục 3 phút, không dừng quá 5 giây','Nghe lại và ghi ra 3 lỗi phát âm rõ nhất','So với bản ghi ở tuần 1 — nghe lại cả hai'] },

{ w:21, t:'Mô tả công việc cho chính vị trí của bạn', size:'150 từ',
  ship:'Gửi cho HR, hoặc dùng khi team cần tuyển thêm người',
  force:'Mô tả công việc là văn bản dày collocation nhất: <em>meet a deadline, take on a task, work under pressure</em>. Dịch từng chữ từ tiếng Việt là sai ngay.',
  must:['Ít nhất 10 collocation lấy từ trang Từ vựng','Ít nhất 3 bộ word family: analyse / analysis / analytical','Không lặp lại lỗi nào trong sổ lỗi'] },

/* ---------------- THÁNG 6 ---------------- */
{ w:22, t:'Viết lại bài giới thiệu bản thân của tuần 1', size:'5 câu',
  ship:'Cập nhật lại LinkedIn bằng bản mới',
  force:'Cùng đề bài, cách nhau 21 tuần. Đặt hai bản cạnh nhau là bằng chứng rõ nhất về việc bạn đã khá lên — rõ hơn mọi con số phần trăm.',
  must:['Viết lại mà KHÔNG mở bản cũ ra xem','Xong rồi mới mở bản tuần 1 ra so','Ghi lại: bản mới hơn ở chỗ nào'] },

{ w:23, t:'Tóm tắt một tài liệu kỹ thuật thật', size:'150 từ',
  ship:'Gửi bản tóm tắt cho team, để họ không phải đọc bản gốc',
  force:'Tóm tắt khó hơn dịch. Bạn phải đọc hiểu ý ẩn rồi viết lại bằng lời mình — không copy được câu nào.',
  must:['Chọn một tài liệu bạn ĐANG cần đọc cho công việc, không chọn bài luyện','Không copy nguyên câu nào từ bản gốc','Không lặp lại lỗi nào trong sổ lỗi'] },

{ w:24, t:'README hoàn chỉnh bằng tiếng Anh cho một repo của bạn', size:'300 từ',
  ship:'Đẩy lên GitHub — công khai, ai cũng đọc được',
  force:'Đây là sản phẩm lớn nhất của khoá. Nó gom hết: mô tả (mệnh đề quan hệ), hướng dẫn (modal), xử lý lỗi (điều kiện), cài đặt (bị động).',
  must:['Đủ 5 phần: giới thiệu, cài đặt, cách dùng, xử lý lỗi, đóng góp','Chạy checklist 10 lỗi trước khi đẩy lên','Nhờ AI chấm như thể nó là người bản ngữ đọc lần đầu'] },

{ w:25, t:'Ghi âm 5 phút: trình bày một quyết định kỹ thuật và bảo vệ nó', size:'5 phút',
  ship:'Nghe lại cùng bản ghi tuần 1 và tuần 20',
  force:'Bảo vệ một quyết định khó hơn mô tả một dự án: bạn phải nói được "tôi đã cân nhắc X nhưng chọn Y vì…" — tức là lập luận, không phải kể.',
  must:['Nói liên tục 5 phút, có nêu ít nhất 2 đánh đổi','Nghe lại ba bản ghi: tuần 1, tuần 20, hôm nay','Ghi ra ba thứ đã khác đi'] },

{ w:26, t:'Một câu trả lời thật trên Stack Overflow hoặc một issue GitHub', size:'tuỳ câu hỏi',
  ship:'Đăng công khai, cho người lạ trên thế giới đọc',
  force:'Đây là bài cuối vì nó là thứ thật nhất: người hỏi cần câu trả lời của bạn, không ai chấm điểm, và nếu viết không rõ thì họ không hiểu. Sáu tháng học để làm được đúng việc này.',
  must:['Chọn câu hỏi bạn thật sự biết trả lời','Viết xong đọc lại một lượt bằng checklist rồi mới đăng','Lưu lại đường dẫn — đây là mốc kết thúc khoá'] },
];
