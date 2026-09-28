import type { Question } from '../../../types'

// 보강 개념(코드 설계, 탐색, 품질 표준, 카탈로그, 디스크 스케줄링, 보안 모델 등)에 맞춘 변형 문제 (기출 원문 아님)
const SRC = '빈출 변형'

export const supplementWritten: Question[] = [
  /* ───────── 1과목 · 소프트웨어 설계 ───────── */
  {
    id: 'aw-d01', exam: 'written', subjectId: 'design', source: SRC, type: 'choice',
    question: '유스케이스(Use Case)를 강조하여 사용하는 객체지향 분석 방법론은?',
    choices: ['Rumbaugh', 'Booch', 'Jacobson', 'Coad-Yourdon'],
    answer: 2,
    explanation: '야콥슨(Jacobson)은 유스케이스 중심, 코드-요든은 E-R 다이어그램, 럼바우는 객체 · 동적 · 기능 모델링을 사용한다.',
  },
  {
    id: 'aw-d02', exam: 'written', subjectId: 'design', source: SRC, type: 'choice',
    question: 'E-R 다이어그램을 사용하여 객체의 행위를 모델링하는 객체지향 분석 방법은?',
    choices: ['Booch', 'Coad-Yourdon', 'Wirfs-Brock', 'Jacobson'],
    answer: 1,
    explanation: '코드-요든(Coad-Yourdon) 방법은 E-R 다이어그램으로 객체의 행위를 모델링한다.',
  },
  {
    id: 'aw-d03', exam: 'written', subjectId: 'design', source: SRC, type: 'choice',
    question: '코드 12536을 12356으로 입력했을 때 발생한 코드 오류의 종류는?',
    choices: ['사본(필사) 오류', '전위 오류', '생략 오류', '추가 오류'],
    answer: 1,
    explanation: '좌우 두 자리(5와 3)가 서로 바뀌었으므로 전위(Transposition) 오류이다.',
  },
  {
    id: 'aw-d04', exam: 'written', subjectId: 'design', source: SRC, type: 'choice',
    question: '판매 물품의 길이, 무게, 용량 같은 물리적 수치를 코드에 그대로 적용하는 코드는?',
    choices: ['연상 코드', '블록 코드', '표의 숫자 코드', '순차 코드'],
    answer: 2,
    explanation: '표의 숫자(Significant Digit) 코드는 실제 수치를 코드에 반영한다. 예: 120-720-1500',
  },
  {
    id: 'aw-d05', exam: 'written', subjectId: 'design', source: SRC, type: 'choice',
    question: '요구사항 분석을 위한 CASE 도구에 해당하지 않는 것은?',
    choices: ['SADT', 'SREM', 'PSL/PSA', 'CVS'],
    answer: 3,
    explanation: 'CVS는 버전 관리 도구이다. SADT, SREM, PSL/PSA, TAGS가 요구사항 분석용 CASE 도구이다.',
  },
  {
    id: 'aw-d06', exam: 'written', subjectId: 'design', source: SRC, type: 'choice',
    question: '수학적 원리와 기호로 요구사항을 엄밀하게 표현하는 정형 명세 기법에 해당하는 것은?',
    choices: ['Z', 'Decision Table', '유스케이스', '자연어 명세'],
    answer: 0,
    explanation: '정형 명세 언어로는 Z, VDM, Petri-Net 등이 있다. 자연어 · 다이어그램 기반은 비정형 명세이다.',
  },

  /* ───────── 2과목 · 소프트웨어 개발 ───────── */
  {
    id: 'aw-v01', exam: 'written', subjectId: 'development', source: SRC, type: 'choice',
    question: '이진 탐색(Binary Search)에 대한 설명으로 옳지 않은 것은?',
    choices: [
      '탐색 대상 데이터가 정렬되어 있어야 한다.',
      '가운데 값과 비교해 탐색 범위를 절반씩 줄인다.',
      '평균 시간 복잡도는 O(log n)이다.',
      '정렬되지 않은 데이터에서 선형 탐색보다 항상 빠르다.',
    ],
    answer: 3,
    explanation: '이진 탐색은 정렬된 데이터에서만 사용할 수 있다.',
  },
  {
    id: 'aw-v02', exam: 'written', subjectId: 'development', source: SRC, type: 'choice',
    question: '해싱 함수 중, 키를 여러 부분으로 나눈 뒤 각 부분을 더하거나 XOR하여 주소를 얻는 방법은?',
    choices: ['제산법', '제곱법', '폴딩법', '숫자 분석법'],
    answer: 2,
    explanation: '폴딩법(Folding)은 키를 접듯이 여러 부분으로 쪼개 더하거나 XOR한다. 제산법은 나머지를 이용한다.',
  },
  {
    id: 'aw-v03', exam: 'written', subjectId: 'development', source: SRC, type: 'choice',
    question: '정점이 6개인 무방향 완전 그래프의 간선 수는?',
    choices: ['12', '15', '30', '36'],
    answer: 1,
    explanation: '무방향 완전 그래프의 간선 수는 n(n − 1) / 2 = 6 × 5 / 2 = 15이다.',
  },
  {
    id: 'aw-v04', exam: 'written', subjectId: 'development', source: SRC, type: 'choice',
    question: 'ISO/IEC 9126의 품질 특성에 해당하지 않는 것은?',
    choices: ['신뢰성', '이식성', '효율성', '적시성'],
    answer: 3,
    explanation: 'ISO/IEC 9126의 6가지 품질 특성은 기능성, 신뢰성, 사용성, 효율성, 유지보수성, 이식성이다.',
  },
  {
    id: 'aw-v05', exam: 'written', subjectId: 'development', source: SRC, type: 'choice',
    question: 'ISO/IEC 9126, 14598, 12119를 통합한 소프트웨어 품질 평가 표준은?',
    choices: ['ISO/IEC 25000', 'ISO/IEC 12207', 'ISO/IEC 15504', 'ISO/IEC 27001'],
    answer: 0,
    explanation: 'ISO/IEC 25000(SQuaRE)이 통합 표준이다. 12207은 생명주기 프로세스, 15504는 SPICE이다.',
  },
  {
    id: 'aw-v06', exam: 'written', subjectId: 'development', source: SRC, type: 'choice',
    question: '결정문 안의 각 개별 조건식이 참 · 거짓을 한 번 이상 갖도록 하는 커버리지는?',
    choices: ['구문 커버리지', '결정 커버리지', '조건 커버리지', '다중 조건 커버리지'],
    answer: 2,
    explanation: '조건 커버리지는 개별 조건, 결정 커버리지는 결정문 전체 결과의 참 · 거짓을 확인한다.',
  },
  {
    id: 'aw-v07', exam: 'written', subjectId: 'development', source: SRC, type: 'choice',
    question: '형상 관리에서 변경 요청을 검토하고 승인하여 기준선에 반영하도록 하는 활동은?',
    choices: ['형상 식별', '형상 통제', '형상 감사', '형상 기록'],
    answer: 1,
    explanation: '형상 통제는 형상 통제 위원회(CCB)의 승인을 거쳐 변경을 반영하는 활동이다.',
  },

  /* ───────── 3과목 · 데이터베이스 구축 ───────── */
  {
    id: 'aw-b01', exam: 'written', subjectId: 'database', source: SRC, type: 'choice',
    question: '시스템 카탈로그에 대한 설명으로 옳지 않은 것은?',
    choices: [
      'DB에 저장된 객체들에 대한 정보를 담고 있다.',
      '데이터 사전(Data Dictionary)이라고도 한다.',
      '사용자가 SELECT 문으로 내용을 조회할 수 있다.',
      '사용자가 UPDATE 문으로 직접 내용을 수정할 수 있다.',
    ],
    answer: 3,
    explanation: '카탈로그는 DBMS가 스스로 갱신한다. 사용자는 조회만 할 수 있고 직접 수정할 수 없다.',
  },
  {
    id: 'aw-b02', exam: 'written', subjectId: 'database', source: SRC, type: 'choice',
    question: 'E-R 다이어그램에서 관계(Relationship)를 나타내는 기호는?',
    choices: ['사각형', '마름모', '타원', '이중 타원'],
    answer: 1,
    explanation: '사각형은 개체, 마름모는 관계, 타원은 속성, 이중 타원은 다중값 속성이다.',
  },
  {
    id: 'aw-b03', exam: 'written', subjectId: 'database', source: SRC, type: 'choice',
    question: '데이터 모델의 구성 요소가 아닌 것은?',
    choices: ['구조(Structure)', '연산(Operation)', '제약 조건(Constraint)', '출력(Output)'],
    answer: 3,
    explanation: '데이터 모델은 구조, 연산, 제약 조건 3요소로 구성된다.',
  },
  {
    id: 'aw-b04', exam: 'written', subjectId: 'database', source: SRC, type: 'choice',
    question: '관계해석(Relational Calculus)에 대한 설명으로 옳은 것은?',
    choices: [
      '원하는 정보를 얻는 절차를 순서대로 기술하는 절차적 언어이다.',
      '원하는 정보가 무엇인지만 정의하는 비절차적 언어이다.',
      'σ, π, ⋈ 기호를 사용한다.',
      '관계대수보다 표현 능력이 떨어진다.',
    ],
    answer: 1,
    explanation: '관계해석은 비절차적, 관계대수는 절차적 언어이다. 두 언어의 표현 능력은 동등하다.',
  },
  {
    id: 'aw-b05', exam: 'written', subjectId: 'database', source: SRC, type: 'choice',
    question: '2단계 로킹 규약(2PL)에 대한 설명으로 옳지 않은 것은?',
    choices: [
      '확장 단계에서는 잠금만 할 수 있다.',
      '축소 단계에서는 해제만 할 수 있다.',
      '트랜잭션의 직렬성을 보장한다.',
      '교착상태가 절대 발생하지 않는다.',
    ],
    answer: 3,
    explanation: '2단계 로킹은 직렬성은 보장하지만 교착상태는 발생할 수 있다.',
  },
  {
    id: 'aw-b06', exam: 'written', subjectId: 'database', source: SRC, type: 'choice',
    question: '특정 테이블에 INSERT, UPDATE, DELETE 같은 이벤트가 발생할 때 자동으로 실행되는 절차형 SQL은?',
    choices: ['트리거', '저장 프로시저', '뷰', '커서'],
    answer: 0,
    explanation: '트리거는 이벤트가 생기면 자동으로 실행된다. 저장 프로시저는 CALL · EXECUTE로 직접 호출한다.',
  },

  /* ───────── 4과목 · 프로그래밍 언어 활용 ───────── */
  {
    id: 'aw-p01', exam: 'written', subjectId: 'programming', source: SRC, type: 'choice',
    question: '헤드 위치가 53이고 요청 큐가 98, 183, 37, 122, 14, 124, 65, 67일 때 SSTF 방식의 총 헤드 이동 거리는?',
    choices: ['208', '236', '299', '640'],
    answer: 1,
    explanation: '53 → 65 → 67 → 37 → 14 → 98 → 122 → 124 → 183: 12 + 2 + 30 + 23 + 84 + 24 + 2 + 59 = 236.',
  },
  {
    id: 'aw-p02', exam: 'written', subjectId: 'programming', source: SRC, type: 'choice',
    question: '다익스트라가 제안한 상호 배제 기법으로, P와 V 연산으로 공유 자원 접근을 제어하는 것은?',
    choices: ['모니터', '세마포어', '데커 알고리즘', '은행원 알고리즘'],
    answer: 1,
    explanation: '세마포어는 P(대기) · V(신호) 연산을 사용한다. 은행원 알고리즘은 교착상태 회피 기법이다.',
  },
  {
    id: 'aw-p03', exam: 'written', subjectId: 'programming', source: SRC, type: 'choice',
    question: '스레드(Thread)에 대한 설명으로 옳지 않은 것은?',
    choices: [
      '프로세스 내에서 실행되는 흐름의 단위이다.',
      '같은 프로세스의 스레드끼리 자원을 공유한다.',
      '경량 프로세스라고도 한다.',
      '스레드마다 독립된 메모리 공간 전체를 따로 할당받는다.',
    ],
    answer: 3,
    explanation: '스레드는 같은 프로세스의 코드 · 데이터 · 힙을 공유한다. 스택과 레지스터만 따로 가진다.',
  },
  {
    id: 'aw-p04', exam: 'written', subjectId: 'programming', source: SRC, type: 'choice',
    question: 'C언어에서 문자열의 길이를 구하는 strlen 함수가 선언된 헤더 파일은?',
    choices: ['stdio.h', 'stdlib.h', 'string.h', 'math.h'],
    answer: 2,
    explanation: 'strlen, strcpy, strcmp, strcat은 string.h에 있다. malloc, atoi는 stdlib.h에 있다.',
  },
  {
    id: 'aw-p05', exam: 'written', subjectId: 'programming', source: SRC, type: 'choice',
    question: '세그먼테이션 기법에 대한 설명으로 옳은 것은?',
    choices: [
      '프로그램을 같은 크기의 블록으로 나눈다.',
      '내부 단편화가 주로 발생한다.',
      '논리적인 단위로 나누므로 블록 크기가 서로 다르다.',
      '페이지 테이블로 주소를 변환한다.',
    ],
    answer: 2,
    explanation: '세그먼테이션은 크기가 서로 다른 논리 단위로 나누어 외부 단편화가 생긴다. 같은 크기 분할은 페이징이다.',
  },
  {
    id: 'aw-p06', exam: 'written', subjectId: 'programming', source: SRC, type: 'choice',
    question: 'IPv4에서 IPv6로 전환하는 방법에 해당하지 않는 것은?',
    choices: ['듀얼 스택', '터널링', '헤더 변환', '서브네팅'],
    answer: 3,
    explanation: '전환 방법은 듀얼 스택, 터널링, 헤더 변환이다. 서브네팅은 네트워크를 쪼개는 기법이다.',
  },

  /* ───────── 5과목 · 정보시스템 구축 관리 ───────── */
  {
    id: 'aw-m01', exam: 'written', subjectId: 'management', source: SRC, type: 'choice',
    question: '벨-라파듈라(Bell-LaPadula) 모델의 규칙으로 옳은 것은?',
    choices: ['No Read Down', 'No Write Up', 'No Read Up', 'No Execute'],
    answer: 2,
    explanation: '벨-라파듈라는 기밀성 모델로 No Read Up, No Write Down이다. 무결성 모델인 비바는 그 반대이다.',
  },
  {
    id: 'aw-m02', exam: 'written', subjectId: 'management', source: SRC, type: 'choice',
    question: '자기 복제 능력이 없고, 정상 프로그램으로 위장하여 사용자가 실행하도록 유도하는 악성코드는?',
    choices: ['웜', '바이러스', '트로이 목마', '봇넷'],
    answer: 2,
    explanation: '트로이 목마는 위장하지만 스스로 복제하지 않는다. 웜은 스스로 복제해 전파된다.',
  },
  {
    id: 'aw-m03', exam: 'written', subjectId: 'management', source: SRC, type: 'choice',
    question: '사용자가 정상 주소를 입력해도 DNS 또는 hosts 파일 조작으로 가짜 사이트로 접속되게 하는 공격은?',
    choices: ['스미싱', '파밍', '큐싱', '스피어 피싱'],
    answer: 1,
    explanation: '파밍(Pharming)은 도메인 주소 변환을 조작한다. 스미싱은 문자, 큐싱은 QR 코드를 이용한다.',
  },
  {
    id: 'aw-m04', exam: 'written', subjectId: 'management', source: SRC, type: 'choice',
    question: '클라우드 서비스 중, 서버 · 스토리지 · 네트워크 같은 인프라 자원을 제공하는 모델은?',
    choices: ['SaaS', 'PaaS', 'IaaS', 'BaaS'],
    answer: 2,
    explanation: 'IaaS는 인프라, PaaS는 개발 플랫폼, SaaS는 완성된 소프트웨어를 제공한다.',
  },
  {
    id: 'aw-m05', exam: 'written', subjectId: 'management', source: SRC, type: 'choice',
    question: 'PERT에서 낙관치 4일, 보통치 6일, 비관치 14일인 작업의 예상 소요 기간은?',
    choices: ['6일', '7일', '8일', '9일'],
    answer: 1,
    explanation: '(4 + 4 × 6 + 14) / 6 = 42 / 6 = 7일.',
  },
  {
    id: 'aw-m06', exam: 'written', subjectId: 'management', source: SRC, type: 'choice',
    question: '비밀번호를 해시하기 전에 임의의 값을 덧붙여 레인보우 테이블 공격을 어렵게 하는 기법은?',
    choices: ['솔트(Salt)', '스택 가드', '패딩', '스니핑'],
    answer: 0,
    explanation: '솔트를 붙이면 같은 비밀번호라도 해시값이 달라져 미리 계산한 레인보우 테이블을 쓸 수 없다.',
  },
  {
    id: 'aw-m07', exam: 'written', subjectId: 'management', source: SRC, type: 'choice',
    question: '로그인한 사용자의 권한을 이용해, 사용자가 의도하지 않은 요청을 서버로 보내게 만드는 웹 공격은?',
    choices: ['XSS', 'CSRF', 'SQL 삽입', '디렉터리 탐색'],
    answer: 1,
    explanation: 'CSRF(사이트 간 요청 위조)는 사용자의 인증 정보를 이용해 위조 요청을 보낸다. XSS는 악성 스크립트를 삽입한다.',
  },
]
