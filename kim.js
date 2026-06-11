/* 김부장 — 퍼즐마루 마스코트. 귀엽고 뚱뚱한 만년 부장님.
   window.kimSVG(mood, size) → svg 문자열. mood: "normal" | "happy" | "sad" | "think" */
window.kimSVG = function (mood, size) {
  mood = mood || "normal";
  size = size || 88;
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
  } else {
    eyes = '<circle cx="42" cy="38" r="2.6" fill="#232220"/><circle cx="66" cy="38" r="2.6" fill="#232220"/>';
    mouth = '<path d="M47 50 q7 5 14 0" class="kl"/>';
  }
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 108 108" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="김부장">' +
    '<style>.kl{stroke:#232220;stroke-width:2.6;fill:none;stroke-linecap:round;stroke-linejoin:round}</style>' +
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
    eyes + mouth + extra +
    '</svg>';
};
/* data-kim="mood" 요소 자동 렌더 (data-kim-size로 크기 지정) */
(function () {
  function init() {
    document.querySelectorAll("[data-kim]").forEach(function (el) {
      el.innerHTML = window.kimSVG(el.getAttribute("data-kim"), Number(el.getAttribute("data-kim-size")) || 64);
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
