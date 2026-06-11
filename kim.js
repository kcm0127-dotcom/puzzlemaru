/* 김부장 — 퍼즐마루 마스코트. 귀엽고 뚱뚱한 만년 부장님.
   window.kimSVG(mood, size)  → 전신 svg. mood: "normal"|"happy"|"sad"|"think"|"wink"|"proud"
   window.kimFaceSVG(size)    → 얼굴만 (로고·파비콘용)
   window.kimGreeting()       → 시간대별 인사 한마디 */
(function () {
  function parts(mood) {
    var eyes, mouth, extra = "";
    if (mood === "happy") {
      eyes = '<path d="M38 37 q4 -5 8 0" class="kl"/><path d="M62 37 q4 -5 8 0" class="kl"/>';
      mouth = '<path d="M46 49 q8 8 16 0" class="kl"/>';
      extra = '<path d="M22 18 l-5 -7 M30 13 l-2 -8 M86 18 l5 -7 M78 13 l2 -8" class="kl" opacity=".7"/>';
    } else if (mood === "sad") {
      eyes = '<circle cx="42" cy="38" r="2.6" fill="#232220"/><circle cx="66" cy="38" r="2.6" fill="#232220"/><path d="M36 31 l10 4 M72 31 l-10 4" class="kl"/>';
      mouth = '<path d="M47 53 q7 -6 14 0" class="kl"/>';
      extra = '<path d="M74 44 q3 5 0 8" class="kl" opacity=".6"/>';
    } else if (mood === "think") {
      eyes = '<circle cx="42" cy="38" r="2.6" fill="#232220"/><circle cx="66" cy="38" r="2.6" fill="#232220"/>';
      mouth = '<path d="M48 51 h12" class="kl"/>';
      extra = '<circle cx="88" cy="20" r="2.5" class="kl" fill="none"/><circle cx="95" cy="12" r="3.5" class="kl" fill="none"/>';
    } else if (mood === "wink") {
      eyes = '<path d="M38 38 h8" class="kl"/><circle cx="66" cy="38" r="2.6" fill="#232220"/>';
      mouth = '<path d="M46 49 q8 7 16 0" class="kl"/>';
      extra = '<path d="M20 16 l-4 -6 M86 16 l4 -6" class="kl" opacity=".6"/>';
    } else if (mood === "proud") {
      eyes = '<path d="M38 37 q4 -5 8 0" class="kl"/><path d="M62 37 q4 -5 8 0" class="kl"/>';
      mouth = '<path d="M46 48 q8 9 16 0 z" fill="#232220" opacity=".85"/>';
      extra = '<path d="M16 26 l-7 -3 M18 18 l-6 -6 M92 26 l7 -3 M90 18 l6 -6" class="kl" opacity=".7"/>';
    } else {
      eyes = '<circle cx="42" cy="38" r="2.6" fill="#232220"/><circle cx="66" cy="38" r="2.6" fill="#232220"/>';
      mouth = '<path d="M47 50 q7 5 14 0" class="kl"/>';
    }
    return { eyes: eyes, mouth: mouth, extra: extra };
  }
  var STYLE = '<style>.kl{stroke:#232220;stroke-width:2.6;fill:none;stroke-linecap:round;stroke-linejoin:round}</style>';

  window.kimSVG = function (mood, size) {
    mood = mood || "normal";
    size = size || 88;
    var p = parts(mood);
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 108 108" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="김부장">' +
      STYLE +
      /* 짧은 팔 (몸 뒤) */
      '<path d="M24 74 q-8 4 -7 12 M84 74 q8 4 7 12" class="kl"/>' +
      /* 통통한 몸 (셔츠) */
      '<ellipse cx="54" cy="82" rx="33" ry="23" fill="#fff" class="kl"/>' +
      /* 바지 */
      '<path d="M29 95 q25 11 50 0 l-2 9 q-23 9 -46 0 z" fill="#4a5568" stroke="#232220" stroke-width="2.6" stroke-linejoin="round"/>' +
      /* 넥타이 */
      '<path d="M54 60 l7 5 -5 19 -2 5 -2 -5 -5 -19 z" fill="#c4502e" stroke="#232220" stroke-width="2.2" stroke-linejoin="round"/>' +
      /* 얼굴 — 맨 마지막에 그려서 몸/넥타이 위로 나옴 */
      '<circle cx="54" cy="37" r="25" fill="#fdf6ec" class="kl"/>' +
      /* 남은 머리카락 (M자) */
      '<path d="M34 24 q4 -10 13 -12 M74 24 q-4 -10 -13 -12 M50 11 q4 -3 8 0" class="kl"/>' +
      /* 볼터치 */
      '<circle cx="36" cy="45" r="4" fill="#f0b9a6" opacity=".8"/><circle cx="72" cy="45" r="4" fill="#f0b9a6" opacity=".8"/>' +
      /* 코 */
      '<circle cx="54" cy="43" r="2.2" fill="#232220"/>' +
      p.eyes + p.mouth + p.extra +
      '</svg>';
  };

  /* 얼굴만 — 로고·작은 자리용 */
  window.kimFaceSVG = function (size, mood) {
    size = size || 26;
    var p = parts(mood || "normal");
    return '<svg width="' + size + '" height="' + size + '" viewBox="14 2 80 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="김부장">' +
      STYLE +
      '<circle cx="54" cy="40" r="28" fill="#fdf6ec" class="kl"/>' +
      '<path d="M32 26 q5 -11 15 -13 M76 26 q-5 -11 -15 -13 M50 11 q4 -3 8 0" class="kl"/>' +
      '<circle cx="34" cy="49" r="4.5" fill="#f0b9a6" opacity=".8"/><circle cx="74" cy="49" r="4.5" fill="#f0b9a6" opacity=".8"/>' +
      '<circle cx="54" cy="46" r="2.4" fill="#232220"/>' +
      p.eyes.replace(/cy="38"/g, 'cy="40"') + p.mouth +
      '</svg>';
  };

  /* 시간대별 인사 */
  window.kimGreeting = function () {
    var h = new Date().getHours();
    if (h >= 5 && h < 11) return "아침부터 퍼즐이라니, 자네 인재야.";
    if (h >= 11 && h < 14) return "점심엔 역시 퍼즐 한 판이지.";
    if (h >= 14 && h < 18) return "오후엔 머리가 굳지. 한 판 풀고 가게.";
    if (h >= 18 && h < 23) return "퇴근했으면 한 판은 풀어야지.";
    return "이 시간까지 퍼즐이라니, 적당히 하게나.";
  };

  /* data-kim="mood" 요소 자동 렌더 (data-kim-size로 크기 지정) + 탭하면 윙크 */
  function bindTap(el) {
    if (el.__kimTap) return;
    el.__kimTap = true;
    el.style.cursor = "pointer";
    el.addEventListener("click", function () {
      var prev = el.getAttribute("data-kim") || "normal";
      var size = Number(el.getAttribute("data-kim-size")) || 64;
      el.innerHTML = window.kimSVG("wink", size);
      setTimeout(function () { el.innerHTML = window.kimSVG(prev, size); }, 700);
    });
  }
  function init() {
    document.querySelectorAll("[data-kim]").forEach(function (el) {
      el.innerHTML = window.kimSVG(el.getAttribute("data-kim"), Number(el.getAttribute("data-kim-size")) || 64);
      bindTap(el);
    });
    /* 로고에 김부장 얼굴 자동 삽입 */
    document.querySelectorAll(".logo").forEach(function (logo) {
      if (logo.querySelector(".logo-kim")) return;
      var s = document.createElement("span");
      s.className = "logo-kim";
      s.innerHTML = window.kimFaceSVG(28);
      logo.insertBefore(s, logo.firstChild);
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
