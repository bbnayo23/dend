import type { Question } from '../../../types'

// 결합도 · 응집도 · 블랙박스 · 커버리지(순서도) 실기 문제 (기출 원문 아님)
// 출제 회차가 확인된 문제는 source에 회차를 적고, 나머지는 빈출 변형으로 둔다.
const SRC = '빈출 변형'

// 2020년 3회 · 2023년 1회에 같은 모양의 제어 흐름 그래프가 나왔다.
const LOOP_GRAPH = `   +-----> [1]           [n] = 처리,  <n> = 결정(마름모)
   |        |
   |        v
   |       <2> ---F---+
   |        | T       |
   |        v         |
   |       [3]        |
   |        |         |
   |        v         |
   |       [4] <------+
   |        |
   |        v
   |       [5]
   |        |
   |        v
   +--T--- <6>
            | F
            v
           [7]`

const DIAMOND_GRAPH = `          [1]            [n] = 처리,  <n> = 결정(마름모)
           |
           v
          <2>
       T /   \\ F
        v     v
      [3]     [4]
        \\     /
         v   v
          <5>
       T /   \\ F
        v     |
      [6]     |
        \\     |
         v    v
          [7]`

export const supplementPracticalModuleTest: Question[] = [
  /* ───────── 결합도 ───────── */
  {
    id: 'mt-d01', exam: 'practical', subjectId: 'design', source: '2021년 3회 · 2024년 2회 기출 변형', type: 'short',
    question: '결합도 종류 중, 단순히 처리할 값만 전달하는 것이 아니라 "어떻게 처리하라"는 제어 요소(플래그)까지 전달되는 경우의 결합도를 영문으로 쓰시오.',
    answer: ['Control', 'Control Coupling'],
    explanation: '제어(Control) 결합도. 받는 모듈이 보내는 모듈의 지시에 따라 움직이므로, 하위 모듈이 상위 모듈의 처리 방식을 좌우하는 권리 전도 현상이 생길 수 있다.',
  },
  {
    id: 'mt-d02', exam: 'practical', subjectId: 'design', source: SRC, type: 'short',
    question: '다음 (1) ~ (3)에 해당하는 결합도를 보기에서 골라 순서대로 쓰시오. (예: 자료, 제어, 외부)\n\n(1) 한 모듈이 다른 모듈의 내부 변수나 기능을 직접 참조하거나 수정한다.\n(2) 모듈 간 인터페이스로 배열이나 구조체 같은 자료 구조가 통째로 전달된다.\n(3) 매개변수가 아닌, 모듈 밖에 선언된 전역 변수를 여러 모듈이 참조하고 갱신한다.\n\n[보기] 자료, 스탬프, 제어, 외부, 공통, 내용',
    answer: ['내용, 스탬프, 공통', '내용결합도, 스탬프결합도, 공통결합도', 'Content, Stamp, Common'],
    explanation: '(1) 남의 내부를 직접 건드림 → 내용, (2) 자료 구조를 통째로 → 스탬프, (3) 전역 변수 공유 → 공통.',
  },
  {
    id: 'mt-d03', exam: 'practical', subjectId: 'design', source: SRC, type: 'short',
    question: '다음 보기의 결합도를 결합도가 강한(나쁜) 것부터 약한(좋은) 것 순서로 기호를 나열하시오. (예: ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ)\n\n[보기] ㄱ. 자료 결합도  ㄴ. 내용 결합도  ㄷ. 제어 결합도  ㄹ. 공통 결합도  ㅁ. 스탬프 결합도  ㅂ. 외부 결합도',
    answer: ['ㄴ, ㄹ, ㅂ, ㄷ, ㅁ, ㄱ', 'ㄴㄹㅂㄷㅁㄱ', 'ㄴ→ㄹ→ㅂ→ㄷ→ㅁ→ㄱ', 'ㄴ>ㄹ>ㅂ>ㄷ>ㅁ>ㄱ'],
    explanation: '내공외제스자: 내용(ㄴ) → 공통(ㄹ) → 외부(ㅂ) → 제어(ㄷ) → 스탬프(ㅁ) → 자료(ㄱ).',
  },
  {
    id: 'mt-d04', exam: 'practical', subjectId: 'design', source: SRC, type: 'short',
    question: '다음 C 코드에서 함수 save와 show 사이의 결합도를 쓰시오.',
    code: `int total = 0;

void save(int s) { total += s; }
void show()      { printf("%d", total); }`,
    answer: ['공통 결합도', '공통', 'Common Coupling', 'Common', '공유 결합도'],
    explanation: '두 함수가 매개변수가 아닌 전역 변수 total을 함께 고치고 읽는다 → 공통 결합도. total을 누가 바꿨는지 추적하기 어려워진다.',
  },
  {
    id: 'mt-d05', exam: 'practical', subjectId: 'design', source: SRC, type: 'short',
    question: '다음 C 코드에서 main이 printKor를 호출할 때의 결합도를 쓰시오.',
    code: `typedef struct { char name[10]; int kor, eng, math; } Student;

void printKor(Student s) { printf("%d", s.kor); }

int main() {
    Student st = {"Kim", 90, 80, 70};
    printKor(st);
}`,
    answer: ['스탬프 결합도', '스탬프', 'Stamp Coupling', 'Stamp'],
    explanation: '구조체 전체를 넘기지만 kor 하나만 쓴다 → 스탬프 결합도. printKor(st.kor)처럼 값만 넘기면 자료 결합도가 된다.',
  },

  /* ───────── 응집도 ───────── */
  {
    id: 'mt-d06', exam: 'practical', subjectId: 'design', source: SRC, type: 'short',
    question: '다음 보기의 응집도를 응집도가 강한(좋은) 것부터 약한(나쁜) 것 순서로 기호를 나열하시오. (예: ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅅ)\n\n[보기] ㄱ. 시간적  ㄴ. 기능적  ㄷ. 우연적  ㄹ. 교환적  ㅁ. 절차적  ㅂ. 순차적  ㅅ. 논리적',
    answer: ['ㄴ, ㅂ, ㄹ, ㅁ, ㄱ, ㅅ, ㄷ', 'ㄴㅂㄹㅁㄱㅅㄷ', 'ㄴ→ㅂ→ㄹ→ㅁ→ㄱ→ㅅ→ㄷ', 'ㄴ>ㅂ>ㄹ>ㅁ>ㄱ>ㅅ>ㄷ'],
    explanation: '기순교절시논우: 기능(ㄴ) → 순차(ㅂ) → 교환(ㄹ) → 절차(ㅁ) → 시간(ㄱ) → 논리(ㅅ) → 우연(ㄷ).',
  },
  {
    id: 'mt-d07', exam: 'practical', subjectId: 'design', source: SRC, type: 'short',
    question: '모듈 내 하나의 활동에서 나온 출력 데이터를 그다음 활동의 입력 데이터로 사용하는 경우의 응집도를 쓰시오.',
    answer: ['순차적 응집도', '순차적', '순차 응집도', 'Sequential Cohesion', 'Sequential'],
    explanation: '빵 공장처럼 앞 단계 결과가 다음 단계 재료가 된다. 순서는 있지만 데이터를 넘기지 않으면 절차적 응집도이다.',
  },
  {
    id: 'mt-d08', exam: 'practical', subjectId: 'design', source: SRC, type: 'short',
    question: '다음 (1) ~ (3)에 해당하는 응집도를 순서대로 쓰시오. (예: 기능적, 순차적, 우연적)\n\n(1) 동일한 입력과 출력 데이터를 사용해 서로 다른 기능을 수행하는 요소들이 모여 있다.\n(2) 프로그램 초기화처럼 특정 시점에 함께 처리되어야 하는 기능들이 모여 있다.\n(3) 유사한 성격을 갖거나 같은 분류로 볼 수 있는 처리들이 한 모듈에 모여 있다.',
    answer: [
      '교환적, 시간적, 논리적',
      '통신적, 시간적, 논리적',
      '교환적 응집도, 시간적 응집도, 논리적 응집도',
      '통신적 응집도, 시간적 응집도, 논리적 응집도',
      'Communicational, Temporal, Logical',
    ],
    explanation: '(1) 같은 데이터를 함께 씀 → 교환적(통신적), (2) 같은 시간대 → 시간적, (3) 비슷한 종류끼리 모음 → 논리적.',
  },

  /* ───────── 블랙박스 테스트 ───────── */
  {
    id: 'mt-t01', exam: 'practical', subjectId: 'test', source: SRC, type: 'short',
    question: '다음 (1) ~ (3)에 해당하는 블랙박스 테스트 기법을 보기에서 골라 순서대로 쓰시오. (예: 오류 예측, 비교 검사, 동등 분할)\n\n(1) 입력 조건의 중간값보다 경계값에서 오류가 발생할 확률이 높다는 점을 이용해 경계값을 테스트 케이스로 선정한다.\n(2) 입력 데이터의 영역을 유효한 값과 무효한 값의 그룹으로 나누고 대표값으로 테스트 케이스를 정한다.\n(3) 입력 데이터 간의 관계와 출력에 영향을 미치는 상황을 그래프로 체계적으로 분석해 효용성이 높은 테스트 케이스를 선정한다.\n\n[보기] 동등 분할, 경계값 분석, 원인-결과 그래프, 오류 예측, 비교 검사',
    answer: [
      '경계값 분석, 동등 분할, 원인-결과 그래프',
      '경계값 분석, 동치 분할, 원인-결과 그래프',
      '경계값 분석, 동등 분할, 원인 결과 그래프',
      '경계값 분석, 동치 분할, 원인 결과 그래프',
      '경계값분석, 동등분할, 원인-결과그래프',
      'Boundary Value Analysis, Equivalence Partitioning, Cause-Effect Graph',
    ],
    explanation: '"경계"가 보이면 경계값 분석, "유효 · 무효 그룹"이면 동등(동치) 분할, "입력과 출력의 관계 그래프"면 원인-결과 그래프.',
  },
  {
    id: 'mt-t02', exam: 'practical', subjectId: 'test', source: SRC, type: 'short',
    question: '점수(0 ~ 100)가 60 이상이면 합격, 60 미만이면 불합격, 범위 밖이면 오류를 출력하는 프로그램이 있다. 다음 (1), (2)처럼 테스트 값을 고른 블랙박스 기법을 순서대로 쓰시오. (예: 오류 예측, 비교 검사)',
    code: `(1) -10, 30, 80, 150
(2) -1, 0, 59, 60, 100, 101`,
    answer: [
      '동등 분할, 경계값 분석',
      '동치 분할, 경계값 분석',
      '동등 분할 테스트, 경계값 분석 테스트',
      'Equivalence Partitioning, Boundary Value Analysis',
    ],
    explanation: '(1) 무효 · 불합격 · 합격 · 무효 구간에서 대표값을 하나씩 → 동등 분할. (2) 구간이 바뀌는 경계와 바로 옆 값 → 경계값 분석.',
  },
  {
    id: 'mt-t03', exam: 'practical', subjectId: 'test', source: SRC, type: 'short',
    question: '다음 보기에서 블랙박스 테스트 기법만 모두 골라 기호로 쓰시오. (예: ㄱ, ㄷ)\n\n[보기] ㄱ. 기초 경로 검사  ㄴ. 동등 분할  ㄷ. 조건 검사  ㄹ. 경계값 분석  ㅁ. 루프 검사  ㅂ. 원인-결과 그래프  ㅅ. 데이터 흐름 검사',
    answer: ['ㄴ, ㄹ, ㅂ', 'ㄴㄹㅂ'],
    explanation: '블랙박스(명세 기반): 동등 분할, 경계값 분석, 원인-결과 그래프. 나머지 기초 경로 · 조건 · 루프 · 데이터 흐름 검사는 코드 구조를 보는 화이트박스 기법.',
  },
  {
    id: 'mt-t04', exam: 'practical', subjectId: 'test', source: SRC, type: 'short',
    question: '테스터의 경험과 감각으로 오류가 발생할 만한 부분을 예측해 테스트하는, 다른 블랙박스 기법을 보충하는 테스트 기법을 쓰시오.',
    answer: ['오류 예측', '오류 예측 검사', '오류 예측 기법', 'Error Guessing'],
    explanation: '"경험 · 감 · 보충"이 키워드. 여러 버전의 프로그램에 같은 입력을 넣어 결과를 비교하는 것은 비교 검사이다.',
  },

  /* ───────── 커버리지 · 순서도 ───────── */
  {
    id: 'mt-t05', exam: 'practical', subjectId: 'test', source: '2020년 3회 · 2023년 1회 기출 변형', type: 'short',
    question: '다음 제어 흐름 그래프가 분기 커버리지를 만족하기 위한 테스트 경로 2개를 노드 번호로 쓰시오. (예: 1234, 1256)',
    code: LOOP_GRAPH,
    answer: ['1234561, 124567', '124567, 1234561', '1234567, 124561', '124561, 1234567'],
    explanation: '결정 노드는 <2>와 <6>. 1234561은 2의 T(→3)와 6의 T(→1)를, 124567은 2의 F(→4)와 6의 F(→7)를 지나간다. 화살표 4개를 모두 지났으므로 분기 커버리지 만족. 1234567 + 124561 조합도 정답.',
  },
  {
    id: 'mt-t06', exam: 'practical', subjectId: 'test', source: SRC, type: 'short',
    question: '다음 제어 흐름 그래프가 구문(문장) 커버리지를 만족하는 가장 짧은 테스트 경로 1개를 노드 번호로 쓰시오. (예: 1234)',
    code: LOOP_GRAPH,
    answer: ['1234567'],
    explanation: '모든 노드를 한 번씩만 지나면 된다. 2에서 T로 가야 3을 들르고, 6에서 F로 나가면 7에서 끝난다.',
  },
  {
    id: 'mt-t07', exam: 'practical', subjectId: 'test', source: SRC, type: 'short',
    question: '다음 제어 흐름 그래프에서 맥케이브(McCabe)의 순환 복잡도를 구하시오.',
    code: LOOP_GRAPH,
    answer: ['3'],
    explanation: '간선: 1→2, 2→3, 2→4, 3→4, 4→5, 5→6, 6→1, 6→7 = 8개, 노드 7개. V(G) = 8 − 7 + 2 = 3. 결정 노드 2개 + 1 = 3으로도 구할 수 있다.',
  },
  {
    id: 'mt-t08', exam: 'practical', subjectId: 'test', source: SRC, type: 'short',
    question: '다음 제어 흐름 그래프가 분기 커버리지를 만족하기 위한 테스트 경로 2개를 노드 번호로 쓰시오. (예: 1234, 1256)',
    code: DIAMOND_GRAPH,
    answer: [
      '123567, 12457',
      '12457, 123567',
      '12357, 124567',
      '124567, 12357',
    ],
    explanation: '결정 노드 <2>, <5>의 T · F를 한 번씩. 123567(2-T, 5-T) + 12457(2-F, 5-F), 또는 12357(2-T, 5-F) + 124567(2-F, 5-T).',
  },
  {
    id: 'mt-t09', exam: 'practical', subjectId: 'test', source: SRC, type: 'short',
    question: '다음 코드를 두 테스트 케이스로 테스트했다. 이 테스트가 만족하는 커버리지를 보기에서 고르시오. (단, 단축 평가는 고려하지 않는다)\n\n[보기] 구문 커버리지, 결정 커버리지, 조건 커버리지',
    code: `if (a > 0 && b > 0) {
    printf("OK");
}

테스트 1: a = 1,  b = -1
테스트 2: a = -1, b = 1`,
    answer: ['조건 커버리지', '조건', 'Condition Coverage'],
    explanation: 'a > 0과 b > 0이 각각 참 · 거짓을 한 번씩 가졌으므로 조건 커버리지 만족. 하지만 if 전체 결과는 두 번 다 거짓이라 결정 커버리지는 불만족이고, printf도 실행되지 않아 구문 커버리지도 불만족.',
  },
  {
    id: 'mt-t10', exam: 'practical', subjectId: 'test', source: SRC, type: 'short',
    question: '다음 (1) ~ (3)에 해당하는 테스트 커버리지를 보기에서 골라 순서대로 쓰시오. (예: 다중 조건, 결정, 구문)\n\n(1) 프로그램의 모든 문장을 최소 한 번씩 실행한다.\n(2) 결정 포인트 내의 전체 조건식이 참과 거짓을 최소 한 번씩 갖도록 한다.\n(3) 결정 포인트 내의 각 개별 조건식이 참과 거짓을 최소 한 번씩 갖도록 한다.\n\n[보기] 구문, 결정, 조건, 다중 조건',
    answer: ['구문, 결정, 조건', '구문 커버리지, 결정 커버리지, 조건 커버리지', '문장, 분기, 조건', 'Statement, Decision, Condition'],
    explanation: '구문 = 모든 문장, 결정(분기) = if 전체의 참 · 거짓, 조건 = if 안 개별 조건의 참 · 거짓.',
  },
]
