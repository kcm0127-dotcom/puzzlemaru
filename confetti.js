window.confettiBurst = function () {
  const cv = document.createElement("canvas");
  cv.style.cssText = "position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:9999";
  cv.width = innerWidth; cv.height = innerHeight;
  document.body.appendChild(cv);
  const ctx = cv.getContext("2d");
  const colors = ["#2563eb", "#7c3aed", "#f59e0b", "#16a34a", "#ef4444", "#ec4899"];
  const parts = Array.from({ length: 140 }, () => ({
    x: innerWidth / 2 + (Math.random() - 0.5) * 200,
    y: innerHeight * 0.35,
    vx: (Math.random() - 0.5) * 14,
    vy: -Math.random() * 13 - 4,
    s: Math.random() * 7 + 4,
    c: colors[Math.floor(Math.random() * colors.length)],
    r: Math.random() * Math.PI,
    vr: (Math.random() - 0.5) * 0.3
  }));
  let frame = 0;
  (function tick() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    for (const p of parts) {
      p.x += p.vx; p.y += p.vy; p.vy += 0.35; p.r += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = p.c;
      ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6);
      ctx.restore();
    }
    if (++frame < 130) requestAnimationFrame(tick);
    else cv.remove();
  })();
};

function showGameOver(opts) {
  var old = document.getElementById("pmOver");
  if (old) old.remove();
  var ov = document.createElement("div");
  ov.id = "pmOver";
  ov.className = "pm-overlay";
  var lines = (opts.lines || []).map(function (l) { return "<div class='pm-line'>" + l + "</div>"; }).join("");
  ov.innerHTML = "<div class='pm-modal'>" +
    "<h2 class='" + (opts.kind === "win" ? "pm-win" : opts.kind === "lose" ? "pm-lose" : "") + "'>" + opts.title + "</h2>" +
    lines +
    "<div class='pm-btns'>" +
    (opts.share ? "<button id='pmShare'>결과 복사</button>" : "") +
    "<button class='primary' id='pmRestart'>다시 하기</button>" +
    "<button id='pmClose'>닫기</button></div></div>";
  document.body.appendChild(ov);
  document.getElementById("pmRestart").addEventListener("click", function () { ov.remove(); if (opts.onRestart) opts.onRestart(); });
  document.getElementById("pmClose").addEventListener("click", function () { ov.remove(); });
  ov.addEventListener("click", function (e) { if (e.target === ov) ov.remove(); });
  if (opts.share) {
    document.getElementById("pmShare").addEventListener("click", function () {
      navigator.clipboard.writeText(opts.share).then(function () {
        document.getElementById("pmShare").textContent = "복사 완료!";
      });
    });
  }
}
