import type { Question } from '../../../types'

// 이상 현상 · 함수적 종속 · 반정규화 · 인터페이스 · 스텁/드라이버 · 정보보안 · VPN · 라우팅 실기 문제 (기출 원문 아님)
const SRC = '빈출 변형'

// 순서를 묻지 않는 답: 모든 순서를 정답으로 인정
const anyOrder = (items: string[]): string[] =>
  items.length <= 1 ? items : items.flatMap((x, i) => anyOrder(items.filter((_, j) => j !== i)).map((rest) => `${x}, ${rest}`))

const ENROLL = `[수강]  기본키: (학번, 과목)
학번 | 이름   | 과목 | 성적
100  | 김철수 | DB   | A
100  | 김철수 | OS   | B
200  | 이영희 | DB   | B`

export const supplementPracticalTheory: Question[] = [
  /* ───────── DB: 이상 현상 ───────── */
  {
    id: 'th-db01', exam: 'practical', subjectId: 'db-theory', source: SRC, type: 'short',
    question: '다음 [수강] 테이블에서 (1) ~ (3)의 상황에 해당하는 이상 현상을 순서대로 쓰시오. (예: 갱신, 삽입, 삭제)\n\n(1) 이영희가 DB 수강을 취소해 해당 행을 지웠더니 학생 이영희의 정보까지 사라졌다.\n(2) 아직 수강 신청을 하지 않은 새 학생 300번은 과목 값이 없어 테이블에 넣을 수 없다.\n(3) 김철수의 이름을 바꾸면서 첫 번째 행만 고쳐 같은 학번의 이름이 서로 달라졌다.',
    code: ENROLL,
    answer: ['삭제, 삽입, 갱신', '삭제 이상, 삽입 이상, 갱신 이상'],
    explanation: '(1) 원치 않는 정보까지 함께 지워짐 → 삭제 이상, (2) 원하는 정보만 넣을 수 없음 → 삽입 이상, (3) 일부만 수정되어 불일치 → 갱신 이상. 원인은 학생 정보와 수강 정보가 한 테이블에 중복되어 있기 때문이다.',
  },
  {
    id: 'th-db02', exam: 'practical', subjectId: 'db-theory', source: '2022년 1회 기출 변형', type: 'short',
    question: '릴레이션에서 한 튜플을 삭제할 때, 삭제를 원하지 않은 다른 정보까지 연쇄적으로 함께 삭제되는 이상 현상을 쓰시오.',
    answer: ['삭제 이상', 'Deletion Anomaly'],
    explanation: '이상 현상 3가지: 삽입 이상(못 넣음), 삭제 이상(같이 지워짐), 갱신 이상(불일치). 정규화로 테이블을 주제별로 나누면 해결된다.',
  },
  {
    id: 'th-db10', exam: 'practical', subjectId: 'db-theory', source: '2020년 4회 기출 변형', type: 'short',
    question: '데이터의 중복으로 인해 릴레이션 조작 시 예기치 못하게 발생하는 이상 현상 3가지를 쓰시오. (순서 무관, 예: ○○ 이상, ○○ 이상, ○○ 이상)',
    answer: [...anyOrder(['삽입 이상', '삭제 이상', '갱신 이상']), ...anyOrder(['삽입', '삭제', '갱신'])],
    explanation: '삽입 이상(원치 않는 값까지 넣어야 함), 삭제 이상(원치 않는 정보까지 지워짐), 갱신 이상(일부만 수정되어 불일치). 정규화로 해결한다.',
  },

  /* ───────── DB: 함수적 종속 · 정규화 ───────── */
  {
    id: 'th-db03', exam: 'practical', subjectId: 'db-theory', source: SRC, type: 'short',
    question: '다음 릴레이션의 기본키는 (학번, 과목코드)이다. "학번 → 이름"처럼 기본키의 일부에만 종속되는 함수적 종속을 무엇이라 하는지 쓰시오.',
    code: `[수강] 학번 | 과목코드 | 이름 | 성적
(학번, 과목코드) → 성적
학번 → 이름`,
    answer: ['부분 함수적 종속', '부분 함수 종속', '부분 종속', 'Partial Functional Dependency'],
    explanation: '성적은 (학번, 과목코드) 둘 다 있어야 정해지므로 완전 함수적 종속, 이름은 학번만으로 정해지므로 부분 함수적 종속. 부분 종속을 없애면 2NF가 된다.',
  },
  {
    id: 'th-db04', exam: 'practical', subjectId: 'db-theory', source: SRC, type: 'short',
    question: '릴레이션에서 A → B 이고 B → C 일 때, A → C 가 성립하는 함수적 종속을 무엇이라 하는지 쓰시오.',
    answer: ['이행적 함수 종속', '이행 함수 종속', '이행적 함수적 종속', '이행 종속', 'Transitive Functional Dependency'],
    explanation: '예: 학번 → 학과, 학과 → 학과장 이면 학번 → 학과장. 이행적 함수 종속을 제거하면 3NF가 된다.',
  },
  {
    id: 'th-db05', exam: 'practical', subjectId: 'db-theory', source: SRC, type: 'short',
    question: '다음 정규화 과정의 (1) ~ (3)에 들어갈 정규형을 순서대로 쓰시오. (예: 1NF, 4NF, 5NF)',
    code: `비정규 릴레이션
   │ 도메인이 원자값
   ▼
  1NF
   │ 부분 함수적 종속 제거
   ▼
  (1)
   │ 이행적 함수 종속 제거
   ▼
  (2)
   │ 결정자이면서 후보키가 아닌 것 제거
   ▼
  (3)`,
    answer: ['2NF, 3NF, BCNF', '제2정규형, 제3정규형, BCNF', '2정규형, 3정규형, BCNF', '제2정규형, 제3정규형, 보이스-코드 정규형'],
    explanation: '도부이결다조: 도메인 원자값(1NF) → 부분 종속 제거(2NF) → 이행 종속 제거(3NF) → 결정자 = 후보키(BCNF) → 다치 종속 제거(4NF) → 조인 종속 제거(5NF).',
  },
  {
    id: 'th-db06', exam: 'practical', subjectId: 'db-theory', source: SRC, type: 'short',
    question: '함수적 종속 X → Y 에서, 값을 정해 주는 쪽인 X를 무엇이라 하는지 쓰시오.',
    answer: ['결정자', 'Determinant'],
    explanation: 'X → Y: X는 결정자, Y는 종속자. 학번(결정자)을 알면 이름(종속자)이 하나로 정해진다.',
  },
  {
    id: 'th-db11', exam: 'practical', subjectId: 'db-theory', source: '2022년 2회 기출 변형', type: 'short',
    question: '다음은 함수적 종속에 대한 설명이다. (1) ~ (3)에 들어갈 용어를 보기에서 골라 순서대로 쓰시오. (예: Natural, Hybrid, Defined)\n\n[학생수강] 테이블의 기본키는 {학번, 과목}이다.\n(1) 성적은 {학번, 과목} 전체에 의해서만 결정되므로 ( 1 ) 함수 종속이다.\n(2) 학년은 기본키 중 학번만으로 결정되므로 ( 2 ) 함수 종속이다.\n(3) X → Y, Y → Z 일 때 X → Z 가 성립하는 것을 ( 3 ) 함수 종속이라 한다.\n\n[보기] Hybrid, Multi Valued, Transitive, Full, Defined, Natural, Relational, Partial',
    code: `[학생수강] 학번 | 과목 | 성적 | 학년
          1001 | DB   | A    | 3
          1001 | OS   | B    | 3
          1002 | DB   | C    | 2`,
    answer: ['Full, Partial, Transitive', '완전, 부분, 이행'],
    explanation: '기본키 전체에 종속 → Full(완전), 기본키 일부에 종속 → Partial(부분), 징검다리로 종속 → Transitive(이행). Multi Valued는 4NF의 다치 종속.',
  },
  {
    id: 'th-db12', exam: 'practical', subjectId: 'db-theory', source: '2021년 2회 기출 변형', type: 'short',
    question: '다음과 같이 [주문상품] 테이블을 두 테이블로 분해했다. 부분 함수적 종속을 제거해 완전 함수적 종속을 만족하게 된 이 정규형을 쓰시오.',
    code: `[주문상품]  키: (주문번호, 상품코드)
주문번호 | 상품코드 | 상품명 | 수량        상품코드 → 상품명

            ↓ 분해

[주문상품]  주문번호 | 상품코드 | 수량
[상품]      상품코드 | 상품명`,
    answer: ['제2정규형', '2NF', '2정규형', '제 2 정규형', '2차 정규형'],
    explanation: '상품명은 키의 일부(상품코드)만으로 정해지는 부분 함수적 종속이었다. 이를 [상품]으로 떼어 내면 2NF가 된다.',
  },
  {
    id: 'th-db13', exam: 'practical', subjectId: 'db-theory', source: '2024년 1회 기출 변형', type: 'short',
    question: '다음과 같이 [사원] 테이블을 두 테이블로 분해했다. 분해 결과가 만족하는 정규형을 쓰시오.',
    code: `[사원]  키: 사번
사번 | 이름 | 부서코드 | 부서명        사번 → 부서코드, 부서코드 → 부서명

            ↓ 분해

[사원]  사번 | 이름 | 부서코드
[부서]  부서코드 | 부서명`,
    answer: ['제3정규형', '3NF', '3정규형', '제 3 정규형', '3차 정규형'],
    explanation: '사번 → 부서코드 → 부서명 의 이행적 함수 종속을 제거했으므로 3NF. 키가 속성 하나(사번)라 부분 종속은 처음부터 없다.',
  },

  /* ───────── DB: 반정규화 ───────── */
  {
    id: 'th-db07', exam: 'practical', subjectId: 'db-theory', source: '2020년 1회 · 2021년 1회 · 2024년 2회 기출 변형', type: 'short',
    question: '정규화된 엔터티 · 속성 · 관계에 대해 시스템의 조회 성능 향상과 개발 · 운영의 단순화를 위해 중복, 통합, 분리 등을 수행하는 데이터 모델링 기법을 쓰시오.',
    answer: ['반정규화', '역정규화', '비정규화', 'Denormalization', 'De-normalization'],
    explanation: '반정규화는 성능을 얻는 대신 데이터 일관성 · 무결성이 깨질 위험이 있다. 테이블 병합 · 분할, 중복 테이블 추가, 컬럼 중복, 관계 중복 등이 있다.',
  },
  {
    id: 'th-db08', exam: 'practical', subjectId: 'db-theory', source: SRC, type: 'short',
    question: '반정규화 기법 중, 하나의 테이블을 행(레코드) 기준으로 나누어 여러 테이블로 저장하는 분할 방법을 쓰시오. (예: 주문 테이블을 연도별로 나눔)',
    answer: ['수평 분할', '수평분할', 'Horizontal Partitioning', '수평 분할 기법'],
    explanation: '행 기준은 수평 분할, 열(컬럼) 기준으로 자주 쓰는 컬럼만 떼어 내는 것은 수직 분할이다.',
  },
  {
    id: 'th-db09', exam: 'practical', subjectId: 'db-theory', source: SRC, type: 'short',
    question: '조인 횟수를 줄이기 위해 다른 테이블에 있는 컬럼을 복사해 함께 두는 반정규화 기법을 쓰시오.',
    answer: ['컬럼 중복', '중복 컬럼 추가', '중복 속성 추가', '컬럼 중복화', '속성 중복'],
    explanation: '예: 주문 테이블에 고객 이름을 복사해 두면 고객 테이블과 조인하지 않아도 된다. 대신 고객 이름이 바뀌면 두 곳을 모두 고쳐야 한다.',
  },

  /* ───────── 인터페이스: EAI ───────── */
  {
    id: 'th-if01', exam: 'practical', subjectId: 'interface', source: '2020년 3회 기출 변형', type: 'short',
    question: '다음 (1) ~ (4)에 해당하는 EAI 구축 유형을 보기에서 골라 순서대로 쓰시오. (예: Hybrid, Message Bus, Point-to-Point, Hub & Spoke)\n\n(1) 단일 접점인 허브 시스템을 통해 데이터를 전송하는 중앙 집중형 방식으로, 확장과 유지보수가 쉽지만 허브 장애 시 전체 시스템에 영향을 준다.\n(2) 애플리케이션 사이에 미들웨어를 두어 처리하는 방식으로, 확장성이 뛰어나고 대용량 처리가 가능하다.\n(3) 가장 기본적인 방식으로, 애플리케이션을 1:1로 직접 연결한다. 변경과 재사용이 어렵다.\n(4) 그룹 내에서는 Hub & Spoke, 그룹 간에는 Message Bus 방식을 사용한다.\n\n[보기] Point-to-Point, Hub & Spoke, Message Bus, Hybrid',
    answer: [
      'Hub & Spoke, Message Bus, Point-to-Point, Hybrid',
      'Hub&Spoke, MessageBus, PointtoPoint, Hybrid',
      'Hub and Spoke, Message Bus, Point to Point, Hybrid',
      '허브 앤 스포크, 메시지 버스, 포인트 투 포인트, 하이브리드',
    ],
    explanation: '허브 하나를 거치면 Hub & Spoke, 버스(미들웨어)를 두면 Message Bus, 1:1 직접 연결은 Point-to-Point, 섞어 쓰면 Hybrid.',
  },
  {
    id: 'th-if02', exam: 'practical', subjectId: 'interface', source: '2021년 1회 기출 변형', type: 'short',
    question: '기업 내에서 서로 다른 애플리케이션과 시스템을 하나로 통합해 데이터와 프로세스를 연계하는 솔루션을 영문 약어로 쓰시오.',
    answer: ['EAI', 'Enterprise Application Integration'],
    explanation: 'EAI = Enterprise Application Integration. 구축 유형: Point-to-Point, Hub & Spoke, Message Bus, Hybrid.',
  },
  {
    id: 'th-if03', exam: 'practical', subjectId: 'interface', source: SRC, type: 'short',
    question: '애플리케이션 통합 측면에서 EAI와 유사하지만, 서비스 중심으로 표준 기반의 버스를 통해 시스템을 느슨하게 결합하는 통합 솔루션을 영문 약어로 쓰시오.',
    answer: ['ESB', 'Enterprise Service Bus'],
    explanation: 'ESB = Enterprise Service Bus. SOA(서비스 지향 아키텍처) 환경에서 서비스들을 버스로 연결한다.',
  },

  /* ───────── 인터페이스: 전송 데이터 · 구현 ───────── */
  {
    id: 'th-if04', exam: 'practical', subjectId: 'interface', source: '2020년 1회 기출 변형', type: 'short',
    question: '속성 - 값 쌍(attribute-value pair)으로 이루어진 데이터 객체를 전달하기 위해, 사람이 읽기 쉬운 텍스트를 사용하는 개방형 표준 데이터 형식을 쓰시오. AJAX에서 XML을 대신해 많이 사용된다.',
    answer: ['JSON', 'JavaScript Object Notation'],
    explanation: 'JSON 예: { "name": "홍길동", "age": 20 }. XML은 태그로 감싸고, YAML은 들여쓰기로 구조를 표현한다.',
  },
  {
    id: 'th-if05', exam: 'practical', subjectId: 'interface', source: '2020년 2회 · 2023년 1회 · 2025년 2회 기출 변형', type: 'short',
    question: '웹 페이지 전체를 새로 고치지 않고, JavaScript를 이용해 서버와 비동기로 데이터를 주고받아 페이지의 필요한 부분만 갱신하는 기술을 쓰시오.',
    answer: ['AJAX', 'Ajax', 'Asynchronous JavaScript and XML'],
    explanation: 'AJAX = Asynchronous JavaScript and XML. 검색창에 글자를 치면 추천어가 바로 뜨는 기능이 대표적인 예이다.',
  },
  {
    id: 'th-if10', exam: 'practical', subjectId: 'interface', source: '2020년 1회 기출 변형', type: 'short',
    question: 'HTML의 단점을 보완하고, 사용자가 태그를 직접 정의할 수 있어 웹에서 구조화된 데이터를 주고받는 데 쓰이는 다목적 마크업 언어를 쓰시오.',
    answer: ['XML', 'eXtensible Markup Language', 'Extensible Markup Language'],
    explanation: 'XML = eXtensible Markup Language. SOAP 메시지와 WSDL도 XML로 작성한다. 더 가벼운 대안이 JSON이다.',
  },
  {
    id: 'th-if11', exam: 'practical', subjectId: 'interface', source: '2022년 1회 기출 변형', type: 'short',
    question: 'xUnit 계열 테스트 프레임워크 중, Java 언어용 단위 테스트 프레임워크를 쓰시오.',
    answer: ['JUnit', 'Junit', '제이유닛'],
    explanation: 'xUnit 계열: Java → JUnit, C++ → CppUnit, .Net → NUnit. 인터페이스 구현 검증 도구로도 쓰인다.',
  },
  {
    id: 'th-if06', exam: 'practical', subjectId: 'interface', source: SRC, type: 'short',
    question: '인터페이스 전송 데이터는 세 부분으로 구성된다. 다음 (1) ~ (3)에 해당하는 이름을 순서대로 쓰시오. (예: 개별부, 종료부, 공통부)\n\n(1) 송수신 시스템, 전송 일시 등 인터페이스의 공통 정보가 담긴 부분\n(2) 실제로 전달할 업무 데이터가 담긴 부분\n(3) 전송 데이터의 끝을 표시하는 부분',
    answer: ['공통부, 개별부, 종료부', '헤더, 바디, 트레일러', 'Header, Body, Trailer'],
    explanation: '택배 상자로 치면 송장(공통부) + 물건(개별부) + 마감 테이프(종료부).',
  },
  {
    id: 'th-if07', exam: 'practical', subjectId: 'interface', source: SRC, type: 'short',
    question: '다음 (1) ~ (3)에 해당하는 인터페이스 구현 검증 도구를 보기에서 골라 순서대로 쓰시오. (예: NTAF, Selenium, watir)\n\n(1) Java, C++, .Net 등 다양한 언어를 지원하는 단위 테스트 프레임워크\n(2) 웹 기반으로 테스트 케이스의 설계, 실행, 결과 확인 등을 지원하는 테스트 프레임워크\n(3) 서비스 호출, 컴포넌트 재사용 등 다양한 환경을 지원하며, 분산 환경의 각 테스트 대상에 데몬을 두고 테스트하는 프레임워크\n\n[보기] xUnit, STAF, FitNesse, NTAF, Selenium, watir',
    answer: ['xUnit, FitNesse, STAF'],
    explanation: 'NTAF는 NHN이 FitNesse와 STAF의 장점을 합친 도구, Selenium은 다양한 브라우저를 지원하는 웹 테스트 도구, watir는 Ruby 기반 웹 테스트 도구이다.',
  },
  {
    id: 'th-if08', exam: 'practical', subjectId: 'interface', source: SRC, type: 'short',
    question: '인터페이스 구현 방법 중, 송신 시스템과 수신 시스템 사이에 별도의 중간 테이블을 두고 송신 측이 데이터를 기록하면 수신 측이 읽어 가는 방식에서 사용하는 이 테이블을 무엇이라 하는지 쓰시오.',
    answer: ['인터페이스 엔티티', '인터페이스 테이블', 'Interface Entity', 'Interface Table'],
    explanation: '구현 방법은 ① JSON · XML 등을 직접 송수신하는 데이터 통신 방식과 ② 인터페이스 엔티티(테이블)를 이용하는 방식이 있다.',
  },
  {
    id: 'th-if09', exam: 'practical', subjectId: 'interface', source: SRC, type: 'short',
    question: '애플리케이션의 성능을 실시간으로 모니터링하며 인터페이스 동작 상태를 감시하는 도구를 영문 약어로 쓰시오. (예: 스카우터, 제니퍼)',
    answer: ['APM', 'Application Performance Management', 'Application Performance Monitoring'],
    explanation: 'APM = Application Performance Management. 검증 도구(xUnit, STAF 등)와 달리 운영 중 상태를 감시한다.',
  },

  /* ───────── 테스트: 스텁 · 드라이버 · 레벨 ───────── */
  {
    id: 'th-ts01', exam: 'practical', subjectId: 'test', source: '2021년 2회 · 2021년 3회 · 2023년 2회 기출 변형', type: 'short',
    question: '통합 테스트를 위해 다음 두 가짜 모듈을 만들었다. (1), (2)의 이름을 순서대로 쓰시오. (예: 클러스터, 목)',
    code: `(1) 아직 개발되지 않은 하위 모듈 getTax() 대신 고정값만 돌려주는 모듈
    int getTax(int price) { return 100; }

(2) 아직 개발되지 않은 상위 모듈 대신, 시험할 하위 모듈 calcTotal()을 호출하고 결과를 출력하는 모듈
    int main() { printf("%d", calcTotal(1000)); }`,
    answer: ['스텁, 드라이버', 'Stub, Driver', '테스트 스텁, 테스트 드라이버'],
    explanation: '불려 오는 쪽(하위) 대역은 스텁 → 하향식 통합에서 사용. 불러 주는 쪽(상위) 대역은 드라이버 → 상향식 통합에서 사용.',
  },
  {
    id: 'th-ts06', exam: 'practical', subjectId: 'test', source: '2021년 1회 기출 변형', type: 'short',
    question: '다음 (1), (2)에 해당하는 테스트 레벨을 보기에서 골라 순서대로 쓰시오. (예: 시스템, 인수)\n\n(1) 개별 모듈, 서브루틴이 정상적으로 동작하는지 확인하는 테스트\n(2) 모듈 사이의 인터페이스와 상호 작용이 정상적으로 동작하는지 확인하는 테스트\n\n[보기] 시스템, 인수, 알파, 단위, 통합, 회귀',
    answer: ['단위, 통합', '단위 테스트, 통합 테스트'],
    explanation: '테스트 레벨: 단위(모듈 하나) → 통합(모듈 사이 인터페이스) → 시스템(전체 시스템) → 인수(사용자 요구 충족).',
  },
  {
    id: 'th-ts02', exam: 'practical', subjectId: 'test', source: SRC, type: 'short',
    question: '상향식 통합 테스트에서 하위 모듈들을 특정 기능 단위로 묶어 놓은 것을 무엇이라 하는지 쓰시오.',
    answer: ['클러스터', 'Cluster'],
    explanation: '상향식 통합: 하위 모듈을 클러스터로 묶고 → 드라이버로 테스트 → 드라이버를 실제 상위 모듈로 바꿔 가며 위로 통합한다.',
  },
  {
    id: 'th-ts03', exam: 'practical', subjectId: 'test', source: SRC, type: 'short',
    question: '상위 모듈은 하향식으로, 하위 모듈은 상향식으로 동시에 통합해 나가는 통합 테스트 방식을 쓰시오.',
    answer: ['샌드위치 통합', '샌드위치', '혼합식 통합', '혼합식', 'Sandwich', 'Sandwich Integration'],
    explanation: '샌드위치(혼합식)는 스텁과 드라이버가 모두 필요하다. 모든 모듈을 한꺼번에 통합하는 방식은 빅뱅 통합이다.',
  },
  {
    id: 'th-ts04', exam: 'practical', subjectId: 'test', source: '2022년 1회 기출 변형', type: 'short',
    question: 'V-모델에서 다음 (1) ~ (3)의 개발 단계와 짝을 이루어 검증하는 테스트 레벨을 순서대로 쓰시오. (예: 시스템, 단위, 통합)\n\n(1) 요구사항 분석\n(2) 설계\n(3) 구현(코딩)',
    answer: ['인수, 통합, 단위', '인수 테스트, 통합 테스트, 단위 테스트'],
    explanation: 'V-모델: 요구사항 ↔ 인수 테스트, 분석 ↔ 시스템 테스트, 설계 ↔ 통합 테스트, 구현 ↔ 단위 테스트. 테스트는 단위 → 통합 → 시스템 → 인수 순서로 진행한다.',
  },
  {
    id: 'th-ts05', exam: 'practical', subjectId: 'test', source: SRC, type: 'short',
    question: '스텁, 드라이버, 테스트 슈트, 테스트 케이스, 테스트 스크립트, 목 오브젝트처럼 테스트를 지원하기 위해 만든 코드와 데이터의 묶음을 무엇이라 하는지 쓰시오.',
    answer: ['테스트 하네스', 'Test Harness', '테스트 하니스'],
    explanation: '하네스(harness)는 말에 채우는 마구라는 뜻. 테스트 대상을 실행하고 결과를 확인하도록 돕는 도구 모음이다.',
  },

  /* ───────── 정보보안 기본 ───────── */
  {
    id: 'th-se01', exam: 'practical', subjectId: 'security', source: '2020년 4회 기출 변형', type: 'short',
    question: '다음 (1) ~ (3)에 해당하는 정보보안 3요소를 순서대로 쓰시오. (예: 무결성, 가용성, 기밀성)\n\n(1) 인가된 사용자가 필요할 때 언제든 정보와 시스템을 사용할 수 있어야 한다.\n(2) 인가된 사용자만 정보에 접근해 내용을 볼 수 있어야 한다.\n(3) 인가된 사용자만 정보를 수정할 수 있고, 전송 중 변조되지 않아야 한다.',
    answer: ['가용성, 기밀성, 무결성', 'Availability, Confidentiality, Integrity'],
    explanation: '기밀성(아무나 못 봄), 무결성(아무나 못 고침), 가용성(필요할 때 쓸 수 있음). DDoS는 가용성, 스니핑은 기밀성, 변조는 무결성을 깨뜨린다.',
  },
  {
    id: 'th-se02', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: 'OTP 토큰, 스마트카드, 공인인증서처럼 사용자가 가지고 있는 것을 이용해 인증하는 유형을 쓰시오.',
    answer: ['소유 기반 인증', '소유 기반', '소유', 'Something You Have', 'Type 2'],
    explanation: '인증 유형: 지식 기반(비밀번호), 소유 기반(OTP · 카드), 생체 기반(지문 · 홍채), 행위 기반(서명 · 음성), 위치 기반.',
  },
  {
    id: 'th-se03', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '데이터를 송신한 사람이 나중에 송신 사실을 부인하거나, 수신한 사람이 수신 사실을 부인하지 못하도록 증거를 남기는 보안 요소를 쓰시오.',
    answer: ['부인 방지', 'Non-repudiation', '부인방지', '송수신 부인 방지'],
    explanation: '전자 서명으로 보장한다. 보안 3요소(기밀성 · 무결성 · 가용성)에 인증 · 부인 방지를 더해 보안 요소로 묶기도 한다.',
  },

  /* ───────── VPN ───────── */
  {
    id: 'th-se04', exam: 'practical', subjectId: 'security', source: '2022년 2회 · 2024년 3회 기출 변형', type: 'short',
    question: '인터넷 같은 공중망을 이용하면서도 암호화와 터널링 기술로 마치 전용선처럼 안전하게 통신할 수 있게 해 주는 가상 사설망을 영문 약어로 쓰시오.',
    answer: ['VPN', 'Virtual Private Network'],
    explanation: 'VPN = Virtual Private Network. 계층별 프로토콜: 2계층 PPTP · L2TP, 3계층 IPsec, 4계층 이상 SSL/TLS VPN.',
  },
  {
    id: 'th-se05', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: 'IPsec의 두 보안 프로토콜 중 (1) 데이터 인증과 무결성만 제공하고 암호화는 하지 않는 것과 (2) 암호화까지 제공하는 것을 순서대로 쓰시오. (예: IKE, SA)',
    answer: ['AH, ESP', 'Authentication Header, Encapsulating Security Payload'],
    explanation: 'AH = Authentication Header(인증만), ESP = Encapsulating Security Payload(암호화 + 인증). 키 교환에는 IKE를 사용한다.',
  },
  {
    id: 'th-se06', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: 'IPsec 동작 모드 중, 원래의 IP 헤더까지 포함한 패킷 전체를 암호화 · 캡슐화하고 새로운 IP 헤더를 붙여 전송하는 모드를 쓰시오.',
    answer: ['터널 모드', 'Tunnel Mode', '터널모드'],
    explanation: '전송 모드는 데이터(페이로드)만 보호하고 원래 IP 헤더는 그대로 둔다. 본사 ↔ 지사처럼 게이트웨이 사이의 VPN에는 터널 모드를 쓴다.',
  },
  {
    id: 'th-se07', exam: 'practical', subjectId: 'security', source: '2023년 1회 기출 변형', type: 'short',
    question: 'PPTP와 L2F의 장점을 결합한 2계층 터널링 프로토콜로, 자체 암호화 기능이 없어 IPsec과 함께 사용하는 프로토콜을 쓰시오.',
    answer: ['L2TP', 'Layer 2 Tunneling Protocol'],
    explanation: 'L2TP = Layer 2 Tunneling Protocol. 보통 L2TP/IPsec 형태로 암호화를 더해 쓴다.',
  },
  {
    id: 'th-se08', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '별도의 클라이언트 프로그램을 설치하지 않고 웹 브라우저만으로 접속할 수 있는, 전송 계층 보안 프로토콜 기반의 VPN을 쓰시오.',
    answer: ['SSL VPN', 'SSL/TLS VPN', 'TLS VPN', 'SSLVPN'],
    explanation: 'SSL VPN은 HTTPS와 같은 SSL/TLS를 사용해 브라우저로 바로 접속한다. IPsec VPN은 보통 전용 클라이언트나 장비가 필요하다.',
  },

  /* ───────── 라우팅 프로토콜 ───────── */
  {
    id: 'th-rt01', exam: 'practical', subjectId: 'os-network', source: '2023년 3회 기출 변형', type: 'short',
    question: '거리 벡터 알고리즘을 사용하고, 홉 수(Hop Count)를 기준으로 경로를 정하며, 최대 홉 수가 15로 제한되는 내부 라우팅 프로토콜을 쓰시오.',
    answer: ['RIP', 'Routing Information Protocol'],
    explanation: 'RIP는 30초마다 라우팅 테이블 전체를 이웃에게 보낸다. 16홉 이상은 도달 불가로 처리해 소규모 네트워크에 적합하다.',
  },
  {
    id: 'th-rt02', exam: 'practical', subjectId: 'os-network', source: SRC, type: 'short',
    question: '서로 다른 자율 시스템(AS) 사이에서 라우팅 정보를 교환하는 대표적인 외부 라우팅 프로토콜을 쓰시오.',
    answer: ['BGP', 'Border Gateway Protocol'],
    explanation: 'BGP = Border Gateway Protocol. 경로 벡터 방식으로 인터넷 전체의 AS 사이 경로를 정한다.',
  },
  {
    id: 'th-rt03', exam: 'practical', subjectId: 'os-network', source: '2022년 2회 기출 변형', type: 'short',
    question: '다음 (1) ~ (4)에 해당하는 용어를 보기에서 골라 순서대로 쓰시오. (예: AS, HOP, NAT, ISP)\n\n(1) 하나의 자율 시스템(AS) 내부에서 경로를 정하는 라우팅 프로토콜의 총칭\n(2) 서로 다른 자율 시스템(AS) 사이에서 라우팅 정보를 교환하는 프로토콜의 총칭\n(3) RIP의 단점을 개선해 대규모 네트워크에서 사용하는 링크 상태 방식의 내부 라우팅 프로토콜\n(4) AS 사이에서 사용하는 대표적인 외부 게이트웨이 프로토콜\n\n[보기] BGP, AS, HOP, OSPF, NAT, ISP, EGP, IGP',
    answer: ['IGP, EGP, OSPF, BGP'],
    explanation: 'IGP(Interior) = 내부 총칭 → RIP, OSPF. EGP(Exterior) = 외부 총칭 → BGP. 대규모 · 링크 상태는 OSPF, AS 사이는 BGP.',
  },
  {
    id: 'th-rt04', exam: 'practical', subjectId: 'os-network', source: SRC, type: 'short',
    question: '다음 (1), (2)의 라우팅 프로토콜이 최적 경로를 계산할 때 사용하는 알고리즘을 순서대로 쓰시오. (예: 프림, 크루스칼)\n\n(1) RIP\n(2) OSPF',
    answer: ['벨만-포드, 다익스트라', '벨만포드, 다익스트라', 'Bellman-Ford, Dijkstra', '벨만 포드, 다익스트라'],
    explanation: 'RIP는 거리 벡터 방식(벨만-포드), OSPF는 링크 상태 방식(다익스트라 최단 경로 우선, SPF)을 사용한다.',
  },
  {
    id: 'th-rt05', exam: 'practical', subjectId: 'os-network', source: '2024년 2회 기출 변형', type: 'short',
    question: '다음 네트워크에서 간선의 숫자를 거리(비용)로 볼 때, A에서 F까지 거리의 합이 가장 작은 경로를 쓰시오. (예: A → B → C → F)',
    code: `       2         3
  A ------- B ------- C
  |         |         |
 1|        4|         | 2
  |         |         |
  D ------- E ------- F
       2         3`,
    answer: ['A → D → E → F', 'A-D-E-F', 'ADEF', 'A,D,E,F'],
    explanation: 'A → D → E → F = 1 + 2 + 3 = 6. A → B → C → F = 2 + 3 + 2 = 7, A → B → E → F = 2 + 4 + 3 = 9 이므로 6이 가장 작다.',
  },
]
