/* =========================================================
   JS dùng chung cho cả 4 trang
   ========================================================= */

/* ---------- Lưu trữ ---------- */
const Store = {
  get(k, d){ try{ return JSON.parse(localStorage.getItem(k)) ?? d; }catch{ return d; } },
  set(k, v){ localStorage.setItem(k, JSON.stringify(v)); },
  del(k){ localStorage.removeItem(k); }
};
const K = { days:'en.days', start:'en.start', theme:'en.theme', topics:'en.topics',
            vocab:'en.vocab' };

/* ---------- Chuẩn hoá chuỗi để tìm kiếm ----------
   1. Bỏ dấu tiếng Việt  → "hạn cuối" tìm được bằng "han cuoi"
   2. Gộp IPA về ASCII gần nhất → "/ˈdedlaɪn/" tìm được bằng "dedlain",
      "/θɔːt/" bằng "thot". Không có bàn phím IPA nào cả.
      Riêng ɡ (U+0261) BẮT BUỘC phải gộp: nó KHÁC chữ g ASCII,
      nên không gộp thì "get" không khớp "/ɡet/". */
const noAccent = s => s.toLowerCase().normalize('NFD')
  .replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd')
  .replace(/[ˈˌː]/g, '')                          // dấu trọng âm, dấu dài
  .replace(/tʃ/g, 'ch').replace(/dʒ/g, 'j')       // phải đứng TRƯỚC ʃ và ʒ
  .replace(/ʃ/g, 'sh').replace(/ʒ/g, 'zh')
  .replace(/[θð]/g, 'th').replace(/ŋ/g, 'ng')
  .replace(/ɡ/g, 'g').replace(/ɪ/g, 'i').replace(/ʊ/g, 'u')
  .replace(/[ɒɔ]/g, 'o').replace(/[æɑʌə]/g, 'a')
  .replace(/[ɜɛ]/g, 'e').replace(/ɹ/g, 'r');

/* ---------- Tiến độ từ vựng (trang Từ vựng) ---------- */
const vocabDone = () => Store.get(K.vocab, {});
function setVocab(id, on){
  const m = vocabDone();
  if (on) m[id] = 1; else delete m[id];
  Store.set(K.vocab, m);
}

/* ---------- Sáng / tối ---------- */
(function theme(){
  const saved = Store.get(K.theme, null);
  /* matchMedia có ở mọi trình duyệt thật, nhưng nếu thiếu thì đừng để
     nguyên file app.js chết theo — mọi hàm bên dưới sẽ mất. */
  const dark = saved ?? (typeof matchMedia === 'function'
    && matchMedia('(prefers-color-scheme:dark)').matches);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  document.addEventListener('click', e => {
    const btn = e.target.closest('.theme-btn');
    if (!btn) return;
    const isDark = document.documentElement.dataset.theme === 'dark';
    document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
    Store.set(K.theme, !isDark);
    paintThemeBtn();
  });
  paintThemeBtn();
})();

function paintThemeBtn(){
  const dark = document.documentElement.dataset.theme === 'dark';
  document.querySelectorAll('.theme-btn').forEach(b => {
    b.textContent = dark ? '☀' : '☾';
    b.setAttribute('aria-label', dark ? 'Chuyển sang nền sáng' : 'Chuyển sang nền tối');
  });
}

/* ---------- Đánh dấu menu đang ở trang nào ---------- */
(function markNav(){
  const file = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === file) a.classList.add('here');
  });
})();

/* ---------- Ngày bắt đầu khoá học ---------- */
const iso = d => d.toLocaleDateString('sv');          // YYYY-MM-DD
const today = () => iso(new Date());

function startDate(){
  let s = Store.get(K.start, null);
  if (!s){ s = today(); Store.set(K.start, s); }
  return s;
}
/* Theo LỊCH: hôm nay là ngày thứ mấy kể từ ngày bắt đầu (1..182).
   Chỉ dùng để báo bạn đang chậm bao nhiêu — không dùng để chọn bài. */
function calendarDayNo(){
  const ms = new Date(today()) - new Date(startDate());
  const n = Math.floor(ms / 86400000) + 1;
  return Math.min(Math.max(n, 1), 182);
}

/* Theo TIẾN ĐỘ: ngày đầu tiên chưa tích = ngày cần học tiếp.
   Bỏ một tuần thì vẫn tiếp tục từ ngày còn dở, lịch không đẩy bạn đi. */
function currentDayNo(){
  const done = doneDays();
  let n = 1;
  while (n < 182 && done[n]) n++;
  return n;
}

/* Đã học xong cả 182 ngày chưa */
function isFinished(){ return countDone() >= 182; }

/* Chậm bao nhiêu ngày so với lịch (0 = đúng lịch hoặc đang vượt) */
function daysBehind(){ return Math.max(0, calendarDayNo() - currentDayNo()); }
/* Ngày thứ n → { weekIndex, dayIndex } */
function locate(n){
  return { w: Math.floor((n - 1) / 7), d: (n - 1) % 7 };
}
function dayNo(weekIndex, dayIndex){ return weekIndex * 7 + dayIndex + 1; }

/* ---------- Tiến độ theo ngày ---------- */
const doneDays = () => Store.get(K.days, {});
function setDay(n, val){
  const m = doneDays();
  if (val) m[n] = 1; else delete m[n];
  Store.set(K.days, m);
}
function countDone(){ return Object.keys(doneDays()).length; }

/* =========================================================
   BÀI TẬP TỰ CHẤM — dùng chung cho trang Bài học và Ôn tập
   Dữ liệu: { title, options:[...], items:[[câu, đáp án, giải thích], ...] }
   Câu hỏi dùng ___ làm chỗ điền.
   ========================================================= */
const Quiz = {
  mountAll(map, sel='.quiz'){
    document.querySelectorAll(sel).forEach(box => {
      const q = map[box.dataset.quiz];
      if (q) Quiz.mount(box, q);
    });
  },

  mount(box, q){
    box.innerHTML = `
      <div class="quiz-h"><h4>${q.title}</h4><span class="quiz-score" hidden></span></div>
      <ol class="quiz-list">${q.items.map((it,i) => `
        <li data-i="${i}">
          <span class="qq">${it[0].replace('___',
            `<select data-i="${i}"><option value="">— chọn —</option>${
              (q.options||[]).map(o=>`<option>${o}</option>`).join('')}</select>`)}</span>
          <span class="qf"></span>
        </li>`).join('')}</ol>
      <div class="quiz-a">
        <button class="btn sm" type="button" data-act="check">Kiểm tra</button>
        <button class="btn ghost sm" type="button" data-act="clear">Làm lại</button>
      </div>`;

    box.addEventListener('click', e => {
      const act = e.target.dataset.act;
      if (act === 'check') Quiz.check(box, q);
      if (act === 'clear') Quiz.clear(box);
    });
  },

  check(box, q){
    let right = 0, blank = 0;
    box.querySelectorAll('.quiz-list li').forEach(li => {
      const i = +li.dataset.i;
      const val = li.querySelector('select').value;
      const [, ans, why] = q.items[i];
      const fb = li.querySelector('.qf');
      li.classList.remove('ok','no');
      if (!val){ fb.innerHTML = '<em>chưa chọn</em>'; blank++; return; }
      if (val === ans){ li.classList.add('ok'); right++; fb.innerHTML = '<em>✓</em>'; }
      else { li.classList.add('no');
        fb.innerHTML = `<em>✗ đúng là <b>${ans}</b> — ${why}</em>`; }
    });
    const n = q.items.length, s = box.querySelector('.quiz-score');
    s.hidden = false;
    s.textContent = `${right}/${n}`;
    s.className = 'quiz-score ' +
      (right === n ? 'all' : right >= n*0.75 ? 'most' : 'few');
    if (typeof q.onScore === 'function') q.onScore(right, n, blank);
    return right;
  },

  clear(box){
    box.querySelectorAll('select').forEach(s => s.value = '');
    box.querySelectorAll('.quiz-list li').forEach(li => {
      li.classList.remove('ok','no');
      li.querySelector('.qf').innerHTML = '';
    });
    box.querySelector('.quiz-score').hidden = true;
  }
};

/* ---------- Tổng số giờ đã học ---------- */
function minutesOfDay(n){
  const { w, d } = locate(n);
  const week = WEEKS[w];
  if (!week) return 0;
  const days = buildWeek(week);
  return days[d] ? days[d].min : 0;
}
function hoursDone(){
  let min = 0;
  for (const n of Object.keys(doneDays())) min += minutesOfDay(+n);
  return min / 60;
}
function hoursTotal(){
  let min = 0;
  WEEKS.forEach(w => buildWeek(w).forEach(d => { min += d.min; }));
  return min / 60;
}
