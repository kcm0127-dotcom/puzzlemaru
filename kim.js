/* 김부장 — 퍼즐마루 마스코트. 귀엽고 뚱뚱한 만년 부장님.
   window.kimSVG(mood, size) → svg 문자열. mood: "normal" | "happy" | "sad" | "think" */
window.kimSVG = function (mood, size) {
  mood = mood || "normal";
  size = size || 88;
  var eyes, mouth, extra = "";
  if (mood === "happy") {
    eyes = '<path d="M38 40 q4 -5 8 0" class="kl"/><path d="M62 40 q4 -5 8 0" class="kl"/>';
    mouth = '<path d="M46 52 q8 8 16 0" class="kl"/>';
    extra = '<path d="M20 22 l-5 -7 M28 17 l-2 -8 M80 22 l5 -7 M72 17 l2 -8" class="kl" opacity=".7"/>';
  } else if (mood === "sad") {
    eyes = '<circle cx="42" cy="41" r="2.6" fill="#232220"/><circle cx="66" cy="41" r="2.6" fill="#232220"/><path d="M36 34 l10 4 M72 34 l-10 4" class="kl"/>';
    mouth = '<path d="M47 56 q7 -6 14 0" class="kl"/>';
    extra = '<path d="M73 47 q3 5 0 8" class="kl" opacity=".6"/>';
  } else if (mood === "think") {
    eyes = '<circle cx="42" cy="41" r="2.6" fill="#232220"/><circle cx="66" cy="41" r="2.6" fill="#232220"/>';
    mouth = '<path d="M48 54 h12" class="kl"/>';
    extra = '<circle cx="85" cy="22" r="2.5" class="kl" fill="none"/><circle cx="91" cy="14" r="3.5" class="kl" fill="none"/>';
  } else {
    eyes = '<circle cx="42" cy="41" r="2.6" fill="#232220"/><circle cx="66" cy="41" r="2.6" fill="#232220"/>';
    mouth = '<path d="M47 53 q7 5 14 0" class="kl"/>';
  }
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 108 108" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="김부장">' +
    '<style>.kl{stroke:#232220;stroke-width:2.6;fill:none;stroke-linecap:round;stroke-linejoin:round}</style>' +
    /* 통통한 몸 (셔츠) */
    '<ellipse cx="54" cy="82" rx="32" ry="24" fill="#fff" class="kl"/>' +
    /* 바지 살짝 */
    '<path d="M30 96 q24 10 48 0 l-2 8 q-22 8 -44 0 z" fill="#4a5568" stroke="#232220" stroke-width="2.6" stroke-linejoin="round"/>' +
    /* 넥타이 */
    '<path d="M54 64 l6 5 -4 18 -2 5 -2 -5 -4 -18 z" fill="#c4502e" stroke="#232220" stroke-width="2.2" stroke-linejoin="round"/>' +
    /* 얼굴 */
    '<circle cx="54" cy="40" r="26" fill="#fdf6ec" class="kl"/>' +
    /* 남은 머리카락 (M자) */
    '<path d="M33 28 q4 -10 13 -12 M75 28 q-4 -10 -13 -12 M50 15 q4 -3 8 0" class="kl"/>' +
    /* 볼터치 */
    '<circle cx="35" cy="48" r="4" fill="#f0b9a6" opacity=".8"/><circle cx="73" cy="48" r="4" fill="#f0b9a6" opacity=".8"/>' +
    /* 콧수염 + 코 */
    '<circle cx="54" cy="46" r="2.2" fill="#232220"/>' +
    eyes + mouth + extra +
    /* 짧은 팔 */
    '<path d="M25 76 q-7 4 -6 11 M83 76 q7 4 6 11" class="kl"/>' +
    '</svg>';
};
