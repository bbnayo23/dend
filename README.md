# dend
시험공부 모두 끝낸다. D:END (Degree End)

정보처리기사 필기 · 실기 개념 정리와 문제 풀이 앱.

## 실행

```bash
pnpm install
pnpm dev        # 개발 서버
pnpm build      # 타입 검사 + dist/ 빌드
pnpm test       # 채점 로직 테스트
```

## 배포 (Vercel)

- Vercel에서 이 GitHub 저장소를 Import 하면 Vite 프로젝트로 자동 인식된다. (Build: `pnpm build`, Output: `dist`)
- `main`에 push 하면 프로덕션 배포, 다른 브랜치는 미리보기 배포.
- `vercel.json`의 rewrite로 `/written/quiz` 같은 경로를 새로고침해도 404가 나지 않는다.

## 데이터 추가

- 개념: `src/data/subjects/written.ts`, `practical.ts` (실기는 필기 개념을 재사용)
- 문제: `src/data/questions/<폴더>/*.ts` 에 추가하고 `src/data/questions/index.ts`에 합친다. (`sample` 예시 · `frequent` 빈출 · `supplement` 보강 개념용)
  - 객관식: `type: 'choice'`, `answer`는 보기 인덱스(0부터)
  - 주관식: `type: 'short'`, `answer`는 인정 정답 목록 (공백 · 대소문자 무시 채점)
- 현재 문제는 빈출 주제 기반 변형 문제이며 기출 원문이 아니다.
- 시험 정보(`/info`): `src/data/examInfo.ts`. 회차별 일정은 해마다 바뀌므로 넣지 않고 Q-Net 링크로 안내한다.
