/* 퍼즐마루 한/영 토글 — 사전 기반 텍스트 치환 */
(function () {
  var DICT = {
    /* 내비 · 푸터 */
    "스도쿠": "Sudoku", "지뢰찾기": "Minesweeper", "오목": "Gomoku", "모의주식": "Stocks",
    "공략": "Guides", "읽을거리": "Articles", "홈": "Home", "소개·문의": "About",
    "개인정보처리방침": "Privacy", "공략 모음": "All Guides", "스도쿠 공략": "Sudoku Guide",
    "지뢰찾기 공략": "Minesweeper Guide", "오목 공략": "Gomoku Guide",
    /* 홈 */
    "무료 온라인 퍼즐": "Free Online Puzzles",
    "오늘도 한 판,": "One round a day,",
    "퍼즐마루.": "Puzzlemaru.",
    "설치도 가입도 없이 브라우저에서 바로. 스도쿠부터 오목까지, 매일 새로운 퍼즐이 기다립니다.": "No installs, no sign-ups — play right in your browser. From Sudoku to Gomoku, a fresh puzzle every day.",
    "논리만으로 채우는 숫자 퍼즐": "The classic logic number puzzle",
    "클래식": "Classic",
    "난이도 4단계 · 메모 지원": "4 difficulties · pencil notes",
    "오늘의 스도쿠": "Daily Sudoku",
    "매일 전원 같은 문제": "Same puzzle for everyone, daily",
    "푸는법 공략": "How-to Guide",
    "스캐닝부터 X윙까지": "From scanning to X-Wing",
    "스코어 어택": "Score Attack",
    "콤보·시간 보너스 점수제": "Combo & time-bonus scoring",
    "숫자를 읽고 지뢰를 피하는 클래식": "Read the numbers, dodge the mines",
    "초급 9×9 ~ 고급 30×16": "Easy 9×9 to Expert 30×16",
    "오늘의 보드": "Daily Board",
    "매일 같은 판으로 기록 경쟁": "Race the clock on today's board",
    "패턴 공략": "Pattern Guide",
    "1-2-1 · 코딩(chord)": "1-2-1 · chording",
    "아이템전": "Item Mode",
    "보호막·스캐너·정찰": "Shield · Scanner · Scout",
    "밀고 합쳐서 큰 수를 만드는 퍼즐": "Slide and merge to build big tiles",
    "방향키·스와이프 · 기록 저장": "Arrows/swipe · best score saved",
    "전략 공략": "Strategy Guide",
    "구석 고정 · 계단 쌓기": "Corner lock · staircase",
    "2048 대결": "2048 Duel",
    "김부장과 번갈아 점수 경쟁": "Alternate turns vs. Mr. Kim",
    "혼자서도, 셋이서도, 친구와도": "Solo, three-way, or with a friend",
    "AI 대전": "vs AI",
    "난이도 선택 · 무르기": "Difficulty options · undo",
    "친구와 온라인": "Online with a Friend",
    "방 코드로 1:1 실시간 대국": "Real-time 1:1 via room code",
    "3인 오목": "3-Player Gomoku",
    "나 vs AI 둘의 삼파전": "You vs. two AIs",
    "거꾸로 오목": "Reverse Gomoku",
    "5목을 만들면 패배": "Make five in a row and you lose",
    "열린 3 · 쌍삼 · 수비": "Open threes · double threes · defense",
    "2인 대국": "Local 2P",
    "옆사람과 한 화면에서": "Share one screen",
    "가상 시장에서 배우는 투자 감각": "Learn investing in a virtual market",
    "60일 챌린지": "60-Day Challenge",
    "뉴스·소문·배당 · 김부장과 수익률 대결": "News, rumors, dividends · beat Mr. Kim",
    "오리지널": "Original",
    "퍼즐마루 오리지널": "Puzzlemaru Original",
    "퍼즐마루는": "About Puzzlemaru",
    /* 데일리 게임 */
    "연결고리": "Word Links", "지도틀": "Mapdle",
    "오늘의 퍼즐": "Daily Puzzles",
    "매일 자정 새 문제, 모두에게 같은 문제": "New puzzle at midnight, same for everyone",
    "단어 16개를 4그룹으로 묶기": "Group 16 words into 4 sets",
    "실루엣만 보고 나라 맞히기": "Guess the country by its silhouette",
    "김부장을 소개합니다": "Meet Mr. Kim",
    "퍼즐마루 터줏대감 · 김부장": "Puzzlemaru's own Mr. Kim",
    "오늘도 한 판 풀고 가게.": "Solve one before you go.",
    "아침부터 퍼즐이라니, 자네 인재야.": "Puzzles in the morning? You're a keeper.",
    "점심엔 역시 퍼즐 한 판이지.": "Lunch break means puzzle break.",
    "오후엔 머리가 굳지. 한 판 풀고 가게.": "Afternoons dull the mind. Solve one, sharpen up.",
    "퇴근했으면 한 판은 풀어야지.": "Off work? Then it's puzzle time.",
    "이 시간까지 퍼즐이라니, 적당히 하게나.": "Puzzles at this hour? Don't overdo it.",
    /* 김부장 한마디 */
    "스도쿠는 연필부터 잡는 게 아니야. 눈으로 스캔부터 하는 거라네.": "Sudoku isn't about the pencil. Scan with your eyes first.",
    "점수제라니 젊은 친구들 취향이군. 콤보 끊기면 책임지게.": "Scoring system, eh? Don't you dare break that combo.",
    "숫자는 거짓말을 안 해. 회사 생활과는 다르지.": "Numbers never lie. Unlike office life.",
    "보호막이라니, 나 때는 맨몸으로 밟았다네.": "A shield? Back in my day we stepped on mines bare.",
    "큰 타일은 구석에 모셔두게. 부장 자리처럼 말이야.": "Keep the big tile in the corner — like a manager's desk.",
    "나와 한 판 붙자는 건가? 좋지, 져도 울지 말게.": "Challenging me? Fine — no crying when you lose.",
    "다섯 개를 잇는 건 쉽지. 상대 수를 참고 읽는 게 어렵다네.": "Connecting five is easy. Reading your opponent isn't.",
    "옆자리 동료와 한 판인가? 점심 내기를 걸어보게.": "Playing a coworker? Bet lunch on it.",
    "다섯 개를 만들면 지는 판이야. 이기는 버릇부터 버리게.": "Make five and you lose. Unlearn winning first.",
    "친구를 불러오게. 나는 옆에서 훈수만 두겠네.": "Bring a friend. I'll just kibitz from the side.",
    "셋이 두는 판은 눈치 싸움이지. 회의실이랑 똑같아.": "Three players means mind games. Just like a meeting room.",
    "주식은 말이야, 무릎에 사서 어깨에 파는 거라네.": "Stocks? Buy at the knee, sell at the shoulder.",
    "오늘도 점심시간에 한 판 했다네. 자네도 어디 한번 풀어보게.": "I solved today's over lunch. Your turn, my friend.",
    "세계지도 좀 본 사람은 모양만 봐도 안다네. 험험.": "A man who's read maps knows a country by its shape. Ahem.",
    /* 공통 버튼 · 툴바 */
    "새 게임": "New Game", "무르기": "Undo", "힌트": "Hint", "팁": "Tip",
    "메모": "Notes", "지우기": "Erase", "다시 하기": "Play Again", "닫기": "Close",
    "결과 복사": "Copy Result", "결과 복사하기": "Copy Result", "복사 완료!": "Copied!",
    "게임 방법 · 팁": "How to Play · Tips", "게임 방법": "How to Play",
    "시간": "Time", "실수": "Mistakes", "깃발": "Flags", "점수": "Score", "최고": "Best",
    "나": "Me", "김부장": "Mr. Kim", "박대리": "Mr. Park",
    /* 스도쿠 */
    "빈칸을 누르고 숫자를 입력하세요 · 메모 모드 지원": "Tap a cell and enter a number · note mode available",
    "퍼즐 생성 중...": "Generating puzzle...",
    "오늘의 스도쿠입니다. 행운을 빌어요.": "Today's Sudoku. Good luck!",
    "실수 3회로 게임 종료. 새 게임으로 다시 도전하세요.": "Three mistakes — game over. Try a new game.",
    "퍼즐 완성!": "Puzzle Complete!", "실수 3회": "Three Mistakes",
    "아쉽지만 여기까지. 힌트 버튼을 활용해 보세요.": "So close! Try using the hint button next time.",
    "입문 (쉬움)": "Beginner", "초급": "Easy", "중급": "Medium", "고급": "Hard",
    /* 지뢰찾기 */
    "PC는 우클릭, 모바일은 길게 눌러 깃발을 꽂으세요": "Right-click (or long-press on mobile) to flag",
    "펑. 지뢰를 밟았습니다 — 새 게임으로 다시 도전하세요.": "Boom. You hit a mine — try again.",
    "승인": "PASS", "반려": "FAIL",
    "승리!": "Victory!", "펑!": "Boom!", "패배": "Defeat", "무승부": "Draw", "게임 오버": "Game Over",
    "첫 클릭은 항상 안전해요. 가운데부터 여는 게 유리합니다.": "The first click is always safe. Starting near the center helps.",
    "오늘의 보드 — 모든 방문자에게 같은 판이 출제됩니다.": "Daily board — everyone gets the same layout today.",
    "초급 9×9 · 지뢰 10": "Easy 9×9 · 10 mines", "중급 16×16 · 지뢰 40": "Medium 16×16 · 40 mines", "고급 30×16 · 지뢰 99": "Expert 30×16 · 99 mines",
    /* 2048 */
    "방향키 또는 스와이프로 타일을 미세요": "Use arrow keys or swipe to move tiles",
    "2048 달성! 계속해서 더 큰 타일에 도전하세요.": "2048 reached! Keep going for bigger tiles.",
    "당신 차례입니다.": "Your turn.",
    "김부장이 생각 중...": "Mr. Kim is thinking...",
    /* 오목 */
    "당신이 흑돌(선공) · 다섯 알을 이으면 승리": "You play Black (first) · five in a row wins",
    "당신 차례입니다 (흑)": "Your turn (Black)",
    "AI가 생각 중...": "AI is thinking...",
    "승리! 다섯 알을 이었습니다.": "Victory! Five in a row.",
    "AI 승리. 새 게임으로 설욕하세요.": "AI wins. Get your revenge.",
    "AI 승리": "AI Wins",
    "다섯 알을 이었습니다": "You made five in a row",
    "무승부!": "Draw!",
    "보드가 가득 찼습니다": "The board is full",
    "재대국": "Rematch", "나가기": "Leave",
    "방 만들기": "Create a Room", "코드로 입장": "Join with a Code",
    "6자리 코드가 생성됩니다. 친구에게 코드를 보내면 바로 대국 시작.": "A 6-letter code is created. Send it to a friend to start playing.",
    "친구에게 받은 코드를 입력하세요.": "Enter the code your friend sent you.",
    "새 방 만들기": "Create Room", "입장": "Join", "코드 복사": "Copy Code",
    "친구가 입장하길 기다리는 중 — 코드를 보내주세요": "Waiting for your friend — send them the code",
    "상대 접속 중": "Opponent online", "상대 연결 끊김 (재접속 대기)": "Opponent disconnected (waiting)",
    "상대 대기 중": "Waiting for opponent", "대기 중...": "Waiting...",
    "상대 차례를 기다리는 중...": "Waiting for opponent's move...",
    "승리! 다섯 알을 이었습니다. ": "Victory! Five in a row.",
    "패배. 재대국으로 설욕하세요.": "Defeat. Try a rematch.",
    "쉬움": "Easy", "보통": "Normal",
    /* 모의주식 */
    "1,000만 원으로 60일 수익률 대결 · 종목을 눌러 매매 · 스페이스 키로 하루 진행": "Start with ₩10M · 60-day return battle · tap a stock to trade · Space = next day",
    "다음 날 ▸": "Next Day ▸", "+5일": "+5 Days",
    "총자산": "Total Assets", "수익률": "Return", "현금": "Cash", "주식": "Stocks",
    "횡보장": "Sideways", "강세장": "Bull Market", "약세장": "Bear Market",
    "매수": "Buy", "매도": "Sell", "전량매도": "Sell All", "최대수량": "Max",
    "장 시작 ▸": "Start the Day ▸", "다음 보고 ▸": "Next Report ▸", "다음 ▸": "Next ▸",
    "옆자리 김부장": "Mr. Kim (next desk)", "퇴근 후 부업": "After-Work Side Job",
    "속보": "Breaking", "소문": "Rumor",
    "부업 성공!": "Side Job Done!", "부업 실패": "Side Job Failed",
    "수량을 입력하세요.": "Enter a quantity.",
    "종목": "Stock", "현재가": "Price", "전일비": "Change", "보유": "Held", "평가손익": "P/L",
    "평균단가": "Avg. Cost", "보유 수량": "Holdings"
  };
  var RULES = [
    [/^완성! 기록: (.+)$/, "Solved! Time: $1"],
    [/^승리! 기록: (\d+)초$/, "Victory! Time: $1s"],
    [/^기록 (\d+)초$/, "Time: $1s"],
    [/^기록 (\d+:\d+)$/, "Time: $1"],
    [/^점수 ([\d,]+)$/, "Score $1"],
    [/^최고 기록 ([\d,.]+)%?$/, "Best: $1"],
    [/^더 움직일 수 없습니다\. 게임 오버 — 점수: (\d+)$/, "No more moves. Game over — score: $1"],
    [/^총 (\d+)수$/, "$1 moves"],
    [/^(DAY \d+(?:–\d+)?) 개장 보고$/, "$1 Opening Report"],
    [/^난이도 · (.+)$/, "Difficulty · $1"],
    [/^DAY $/, "DAY "]
  ];

  var lang = "ko";
  try { lang = localStorage.getItem("pm-lang") || "ko"; } catch (e) {}

  function tr(t) {
    var k = t.trim();
    if (!k || !/[가-힣]/.test(k)) return null;
    if (DICT[k]) return t.replace(k, DICT[k]);
    for (var i = 0; i < RULES.length; i++) {
      if (RULES[i][0].test(k)) return t.replace(k, k.replace(RULES[i][0], RULES[i][1]));
    }
    return null;
  }

  function walk(node) {
    if (!node) return;
    if (node.nodeType === 3) {
      var r = tr(node.nodeValue);
      if (r !== null) node.nodeValue = r;
      return;
    }
    if (node.nodeType !== 1) return;
    var tag = node.tagName;
    if (tag === "SCRIPT" || tag === "STYLE") return;
    if (node.placeholder) { var p = tr(node.placeholder); if (p) node.placeholder = p; }
    for (var i = 0; i < node.childNodes.length; i++) walk(node.childNodes[i]);
  }

  function applyAll() {
    document.documentElement.lang = "en";
    walk(document.body);
  }

  function init() {
    var nav = document.querySelector("nav.main");
    if (nav) {
      var a = document.createElement("a");
      a.href = "#";
      a.textContent = lang === "en" ? "한국어" : "EN";
      a.style.fontWeight = "700";
      a.setAttribute("aria-label", "Language");
      a.addEventListener("click", function (e) {
        e.preventDefault();
        try { localStorage.setItem("pm-lang", lang === "en" ? "ko" : "en"); } catch (err) {}
        location.reload();
      });
      nav.appendChild(a);
    }
    if (lang !== "en") return;
    applyAll();
    var mo = new MutationObserver(function (muts) {
      for (var i = 0; i < muts.length; i++) {
        var m = muts[i];
        if (m.type === "characterData") {
          var r = tr(m.target.nodeValue);
          if (r !== null && r !== m.target.nodeValue) m.target.nodeValue = r;
        }
        if (m.addedNodes) for (var j = 0; j < m.addedNodes.length; j++) walk(m.addedNodes[j]);
      }
    });
    mo.observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
