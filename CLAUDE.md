# CLAUDE.md — 퍼즐마루

## Response Language
All responses must be in **Korean (한글)**. Keep code and identifiers in English.

## 프로젝트
애드센스 수익화를 위한 한국어 퍼즐 게임 사이트.

- 라이브: https://puzzlemaru.xyz (Cloudflare Pages, GitHub push 시 자동배포. pages.dev 접속은 JS로 .xyz 리다이렉트)
- 저장소: github.com/kcm0127-dotcom/puzzlemaru
- 구성: 스도쿠(생성기+오늘의 퍼즐)·지뢰찾기·2048·오목(AI)·모의주식 + 게임별 공략, 블로그 글
- 기술: 정적 HTML/JS/CSS, 빌드 도구 없음. 한/영 토글은 i18n.js

## 프로젝트 관리
할 일·현황은 이 폴더의 **TODO.md**에서 관리한다. 작업 후 TODO.md를 갱신하고 함께 커밋할 것.

## 디자인 원칙
- 종이 톤 배경 + 잉크 블랙 + 감색(#c4502e) 포인트
- 이모지 금지 ("AI티" 나는 것 지양), 아이콘은 직접 그린 SVG 픽토그램
- style.css 공용 사용

## SEO / 수익화
- 구글 Search Console + 네이버 서치어드바이저 등록 완료 (2026-06-11), sitemap.xml 제출됨
- 새 페이지 추가 시 sitemap.xml 갱신 필수
- 애드센스는 puzzlemaru.xyz로 신청 가능. ads.txt 존재

## 주의
- 샌드박스(Claude)에서 git 커밋 시 `.git/*.lock` 잠금 파일이 남아 실패할 수 있음 → 사용자 터미널에서 `rm -f .git/*.lock` 후 커밋/푸시
- 요청 범위를 넘는 기능 추가 금지
