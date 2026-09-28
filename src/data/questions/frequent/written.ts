import type { Question } from '../../../types'

// 2018년 이후 반복 출제된 주제를 바탕으로 새로 쓴 변형 문제 (기출 원문 아님)
const SRC = '빈출 변형'

export const frequentWritten: Question[] = [
  /* ───────── 1과목 · 소프트웨어 설계 ───────── */
  {
    id: 'fw-d01', exam: 'written', subjectId: 'design', source: SRC, type: 'choice',
    question: '애자일 선언문의 가치로 옳지 않은 것은?',
    choices: [
      '프로세스와 도구보다 개인과 상호작용',
      '방대한 문서보다 실행되는 소프트웨어',
      '고객과의 협업보다 계약 협상',
      '계획을 따르기보다 변화에 대응',
    ],
    answer: 2,
    explanation: '애자일은 계약 협상보다 고객과의 협업을 더 중시한다.',
  },
  {
    id: 'fw-d02', exam: 'written', subjectId: 'design', source: SRC, type: 'choice',
    question: 'XP(eXtreme Programming)의 핵심 가치가 아닌 것은?',
    choices: ['용기', '단순성', '피드백', '기록'],
    answer: 3,
    explanation: 'XP의 5가지 가치는 용기, 단순성, 의사소통, 피드백, 존중이다.',
  },
  {
    id: 'fw-d03', exam: 'written', subjectId: 'design', source: SRC, type: 'choice',
    question: '럼바우 분석 기법에서 자료 흐름도(DFD)를 이용하는 모델링은?',
    choices: ['객체 모델링', '동적 모델링', '기능 모델링', '정적 모델링'],
    answer: 2,
    explanation: '객체 모델링은 객체 다이어그램, 동적 모델링은 상태 다이어그램, 기능 모델링은 DFD를 사용한다. (객동기)',
  },
  {
    id: 'fw-d04', exam: 'written', subjectId: 'design', source: SRC, type: 'choice',
    question: '요구사항 검증 방법 중, 작성자가 아닌 전문가가 명세서를 공식적으로 검사해 결함을 찾는 방법은?',
    choices: ['워크스루', '인스펙션', '프로토타이핑', '테스트 설계'],
    answer: 1,
    explanation: '워크스루는 명세서를 미리 나눠 준 뒤 짧게 검토하는 방법이고, 인스펙션은 작성자 외 전문가가 결함을 공식적으로 찾는 방법이다.',
  },
  {
    id: 'fw-d05', exam: 'written', subjectId: 'design', source: SRC, type: 'choice',
    question: 'UML 관계 중 부분 객체가 전체 객체와 생명주기를 함께하는(전체가 사라지면 부분도 사라지는) 관계는?',
    choices: ['연관', '집합', '포함(합성)', '의존'],
    answer: 2,
    explanation: '집합은 부분이 따로 존재할 수 있고(빈 마름모), 포함(합성)은 생명주기를 함께한다(채운 마름모).',
  },
  {
    id: 'fw-d06', exam: 'written', subjectId: 'design', source: SRC, type: 'choice',
    question: '시퀀스 다이어그램의 구성 요소가 아닌 것은?',
    choices: ['액터', '생명선', '메시지', '노드'],
    answer: 3,
    explanation: '시퀀스 다이어그램은 액터, 객체, 생명선, 실행(활성) 상자, 메시지로 구성된다. 노드는 배치 다이어그램의 요소이다.',
  },
  {
    id: 'fw-d07', exam: 'written', subjectId: 'design', source: SRC, type: 'choice',
    question: '메시지를 기반으로 비동기 방식으로 통신하는 미들웨어는?',
    choices: ['RPC', 'MOM', 'ORB', 'TP-Monitor'],
    answer: 1,
    explanation: 'MOM(Message Oriented Middleware)은 메시지 기반 비동기 통신에 적합하다.',
  },
  {
    id: 'fw-d08', exam: 'written', subjectId: 'design', source: SRC, type: 'choice',
    question: 'GoF 디자인 패턴 중 행위 패턴에 해당하는 것은?',
    choices: ['Composite', 'Observer', 'Builder', 'Proxy'],
    answer: 1,
    explanation: 'Composite · Proxy는 구조 패턴, Builder는 생성 패턴이다.',
  },
  {
    id: 'fw-d09', exam: 'written', subjectId: 'design', source: SRC, type: 'choice',
    question: '다음 중 응집도가 가장 강한(가장 바람직한) 것은?',
    choices: ['우연적 응집도', '논리적 응집도', '기능적 응집도', '시간적 응집도'],
    answer: 2,
    explanation: '응집도는 기능 > 순차 > 교환 > 절차 > 시간 > 논리 > 우연 순으로 강하다. (기순교절시논우)',
  },
  {
    id: 'fw-d10', exam: 'written', subjectId: 'design', source: SRC, type: 'choice',
    question: 'UI 설계 원칙 중 사용자의 목적을 정확하고 완벽하게 달성해야 한다는 원칙은?',
    choices: ['직관성', '유효성', '학습성', '유연성'],
    answer: 1,
    explanation: '직관성은 쉽게 이해, 학습성은 쉽게 배움, 유연성은 요구를 최대한 수용하는 원칙이다.',
  },
  {
    id: 'fw-d11', exam: 'written', subjectId: 'design', source: SRC, type: 'choice',
    question: '자료 사전에서 자료의 반복을 의미하는 기호는?',
    choices: ['=', '+', '{ }', '( )'],
    answer: 2,
    explanation: '= 정의, + 연결, [ | ] 선택, { } 반복, ( ) 생략 가능, * * 주석.',
  },
  {
    id: 'fw-d12', exam: 'written', subjectId: 'design', source: SRC, type: 'choice',
    question: '객체지향에서 데이터와 함수를 하나로 묶고 내부 구현을 외부에 숨기는 특징은?',
    choices: ['상속', '캡슐화', '다형성', '추상화'],
    answer: 1,
    explanation: '캡슐화는 정보 은닉을 가능하게 해 외부 변경의 영향을 줄인다.',
  },
  {
    id: 'fw-d13', exam: 'written', subjectId: 'design', source: SRC, type: 'choice',
    question: '데이터 처리 단계를 필터로 캡슐화하고 파이프를 통해 다음 단계로 전달하는 아키텍처 패턴은?',
    choices: ['MVC 패턴', '브로커 패턴', '파이프-필터 패턴', '마스터-슬레이브 패턴'],
    answer: 2,
    explanation: '파이프-필터는 데이터가 필터를 차례로 거치며 처리된다. 리눅스의 파이프(|)가 대표적인 예이다.',
  },

  /* ───────── 2과목 · 소프트웨어 개발 ───────── */
  {
    id: 'fw-v01', exam: 'written', subjectId: 'development', source: SRC, type: 'choice',
    question: '빈 스택에 A, B, C를 차례로 push한 뒤 pop을 2번, D를 push, pop을 1번 했다. 스택에 남은 데이터는?',
    choices: ['A', 'B', 'C', 'D'],
    answer: 0,
    explanation: 'push A, B, C → pop(C), pop(B) → [A] → push D → [A, D] → pop(D) → [A].',
  },
  {
    id: 'fw-v02', exam: 'written', subjectId: 'development', source: SRC, type: 'choice',
    question: '다음 트리를 후위 순회(Postorder)한 결과는?',
    code: `        A
       / \\
      B   C
     / \\   \\
    D   E   F`,
    choices: ['A B D E C F', 'D B E A C F', 'D E B F C A', 'D E F B C A'],
    answer: 2,
    explanation: '후위는 Left → Right → Root. B 서브트리(D E B) → C 서브트리(F C) → A. 전위는 A B D E C F, 중위는 D B E A C F.',
  },
  {
    id: 'fw-v03', exam: 'written', subjectId: 'development', source: SRC, type: 'choice',
    question: '중위 표기식 A * (B + C) - D 를 후위 표기식으로 바르게 바꾼 것은?',
    choices: ['A B C + * D -', 'A B + C * D -', 'A B C * + D -', '* A + B C - D'],
    answer: 0,
    explanation: '((A * (B + C)) - D) 로 괄호를 치고 연산자를 닫는 괄호 뒤로 옮긴 뒤 괄호를 지운다.',
  },
  {
    id: 'fw-v04', exam: 'written', subjectId: 'development', source: SRC, type: 'choice',
    question: '하향식 통합 테스트에서 아직 개발되지 않은 하위 모듈을 대신하는 것은?',
    choices: ['드라이버', '스텁', '클러스터', '오라클'],
    answer: 1,
    explanation: '하향식은 아래가 없으니 스텁, 상향식은 위가 없으니 드라이버.',
  },
  {
    id: 'fw-v05', exam: 'written', subjectId: 'development', source: SRC, type: 'choice',
    question: '개발자의 장소에서 사용자가 개발자 앞에서 수행하는 인수 테스트는?',
    choices: ['알파 테스트', '베타 테스트', '회귀 테스트', '강도 테스트'],
    answer: 0,
    explanation: '베타 테스트는 사용자 환경에서 개발자 없이 수행한다.',
  },
  {
    id: 'fw-v06', exam: 'written', subjectId: 'development', source: SRC, type: 'choice',
    question: '특정한 몇 개의 입력값에 대해서만 기대 결과를 제공하는 테스트 오라클은?',
    choices: ['참 오라클', '샘플링 오라클', '추정(휴리스틱) 오라클', '일관성 검사 오라클'],
    answer: 1,
    explanation: '참 오라클은 모든 입력, 샘플링은 일부 입력, 추정은 일부 + 나머지 추정, 일관성 검사는 변경 전후 비교.',
  },
  {
    id: 'fw-v07', exam: 'written', subjectId: 'development', source: SRC, type: 'choice',
    question: '형상 관리(버전 관리) 도구에 해당하지 않는 것은?',
    choices: ['Git', 'SVN', 'CVS', 'JUnit'],
    answer: 3,
    explanation: 'JUnit은 Java 단위 테스트 도구이다.',
  },
  {
    id: 'fw-v08', exam: 'written', subjectId: 'development', source: SRC, type: 'choice',
    question: '[8, 3, 4, 9, 7]을 선택 정렬로 오름차순 정렬할 때 1회전 후의 결과는?',
    choices: ['[3, 8, 4, 9, 7]', '[3, 4, 8, 9, 7]', '[3, 4, 7, 8, 9]', '[8, 3, 4, 7, 9]'],
    answer: 0,
    explanation: '선택 정렬은 최솟값(3)을 찾아 맨 앞(8)과 교환한다.',
  },
  {
    id: 'fw-v09', exam: 'written', subjectId: 'development', source: SRC, type: 'choice',
    question: '제어 흐름 그래프의 간선 수가 8, 노드 수가 6일 때 맥케이브 순환 복잡도는?',
    choices: ['2', '3', '4', '6'],
    answer: 2,
    explanation: 'V(G) = E − N + 2 = 8 − 6 + 2 = 4.',
  },
  {
    id: 'fw-v10', exam: 'written', subjectId: 'development', source: SRC, type: 'choice',
    question: '같은 테스트 케이스로 반복 테스트하면 더 이상 새로운 결함을 찾지 못한다는 테스트 원리는?',
    choices: ['파레토 법칙', '살충제 패러독스', '오류-부재의 궤변', '브룩스의 법칙'],
    answer: 1,
    explanation: '테스트 케이스를 주기적으로 검토하고 개선해야 한다는 의미이다.',
  },
  {
    id: 'fw-v11', exam: 'written', subjectId: 'development', source: SRC, type: 'choice',
    question: '빌드 자동화 도구가 아닌 것은?',
    choices: ['Jenkins', 'Gradle', 'Maven', 'Selenium'],
    answer: 3,
    explanation: 'Selenium은 웹 애플리케이션 테스트 도구이다.',
  },
  {
    id: 'fw-v12', exam: 'written', subjectId: 'development', source: SRC, type: 'choice',
    question: '오류를 수정한 뒤, 수정 때문에 새로운 오류가 생기지 않았는지 확인하는 테스트는?',
    choices: ['회귀 테스트', '회복 테스트', '안전 테스트', '병행 테스트'],
    answer: 0,
    explanation: '회복 테스트는 장애 후 복구, 안전 테스트는 보안, 병행 테스트는 기존 시스템과 결과 비교.',
  },
  {
    id: 'fw-v13', exam: 'written', subjectId: 'development', source: SRC, type: 'choice',
    question: '다음 중 선형 자료 구조가 아닌 것은?',
    choices: ['스택', '큐', '데크', '그래프'],
    answer: 3,
    explanation: '트리와 그래프는 비선형 자료 구조이다.',
  },
  {
    id: 'fw-v14', exam: 'written', subjectId: 'development', source: SRC, type: 'choice',
    question: '입력값의 유효 범위가 1 이상 100 이하일 때, 경계값 분석으로 고른 테스트 값으로 가장 적절한 것은?',
    choices: ['50', '0, 1, 100, 101', '1, 50, 100', '-100, 200'],
    answer: 1,
    explanation: '경계값 분석은 경계 바로 안쪽과 바깥쪽 값을 테스트한다.',
  },

  /* ───────── 3과목 · 데이터베이스 구축 ───────── */
  {
    id: 'fw-b01', exam: 'written', subjectId: 'database', source: SRC, type: 'choice',
    question: '릴레이션 R(학번, 과목, 성적, 학생이름)의 기본키가 (학번, 과목)이고 학번 → 학생이름 종속이 있다. 이 종속을 제거하는 정규화 단계는?',
    choices: ['1NF', '2NF', '3NF', 'BCNF'],
    answer: 1,
    explanation: '학생이름이 기본키의 일부(학번)에만 종속되는 부분 함수 종속이므로 2NF에서 제거한다.',
  },
  {
    id: 'fw-b02', exam: 'written', subjectId: 'database', source: SRC, type: 'choice',
    question: '외래키 값은 참조하는 릴레이션의 기본키 값이거나 NULL이어야 한다는 무결성은?',
    choices: ['개체 무결성', '참조 무결성', '도메인 무결성', '키 무결성'],
    answer: 1,
    explanation: '개체 무결성은 기본키가 NULL · 중복 불가라는 규칙이다.',
  },
  {
    id: 'fw-b03', exam: 'written', subjectId: 'database', source: SRC, type: 'choice',
    question: '후보키가 만족해야 하는 성질은?',
    choices: ['유일성만', '최소성만', '유일성과 최소성', '중복성과 최소성'],
    answer: 2,
    explanation: '유일성만 만족하면 슈퍼키, 유일성과 최소성을 모두 만족하면 후보키이다.',
  },
  {
    id: 'fw-b04', exam: 'written', subjectId: 'database', source: SRC, type: 'choice',
    question: '관계대수에서 릴레이션의 특정 속성(열)만 추출하는 연산은?',
    choices: ['Select(σ)', 'Project(π)', 'Join(⋈)', 'Division(÷)'],
    answer: 1,
    explanation: 'σ는 행(조건), π는 열을 고른다.',
  },
  {
    id: 'fw-b05', exam: 'written', subjectId: 'database', source: SRC, type: 'choice',
    question: '다음 릴레이션의 카디널리티와 디그리를 순서대로 나열한 것은?',
    code: `[사원]
사번 | 이름 | 부서 | 직급
101  | 김   | 개발 | 대리
102  | 이   | 기획 | 사원
103  | 박   | 개발 | 과장`,
    choices: ['3, 3', '3, 4', '4, 3', '4, 4'],
    answer: 1,
    explanation: '카디널리티는 튜플(행) 수 3, 디그리는 속성(열) 수 4.',
  },
  {
    id: 'fw-b06', exam: 'written', subjectId: 'database', source: SRC, type: 'choice',
    question: '뷰(View)에 대한 설명으로 옳지 않은 것은?',
    choices: [
      '논리적으로만 존재하는 가상 테이블이다.',
      'ALTER 문으로 뷰의 정의를 변경할 수 있다.',
      '뷰를 삭제할 때는 DROP VIEW를 사용한다.',
      '보여줄 데이터를 제한해 보안에 도움이 된다.',
    ],
    answer: 1,
    explanation: '뷰는 ALTER로 변경할 수 없고, 삭제 후 다시 만들어야 한다.',
  },
  {
    id: 'fw-b07', exam: 'written', subjectId: 'database', source: SRC, type: 'choice',
    question: 'DROP TABLE 실행 시 이 테이블을 참조하는 다른 개체까지 함께 삭제하는 옵션은?',
    choices: ['RESTRICT', 'CASCADE', 'DISTINCT', 'SET NULL'],
    answer: 1,
    explanation: 'RESTRICT는 참조 중인 개체가 있으면 삭제를 거부한다.',
  },
  {
    id: 'fw-b08', exam: 'written', subjectId: 'database', source: SRC, type: 'choice',
    question: '로킹 단위에 대한 설명으로 옳은 것은?',
    choices: [
      '로킹 단위가 크면 병행성이 높아진다.',
      '로킹 단위가 작으면 오버헤드가 감소한다.',
      '로킹 단위가 크면 관리가 쉽지만 병행성이 낮아진다.',
      '로킹 단위는 데이터베이스 전체로만 설정할 수 있다.',
    ],
    answer: 2,
    explanation: '단위가 크면 병행성↓ 오버헤드↓ 관리 쉬움, 작으면 병행성↑ 오버헤드↑.',
  },
  {
    id: 'fw-b09', exam: 'written', subjectId: 'database', source: SRC, type: 'choice',
    question: '커밋 전에도 변경 내용을 DB에 바로 반영하는 즉시 갱신 회복 기법에 필요한 연산은?',
    choices: ['REDO만', 'UNDO만', 'REDO와 UNDO', '필요 없음'],
    answer: 2,
    explanation: '즉시 갱신은 커밋된 작업은 REDO, 커밋 안 된 작업은 UNDO 한다. 연기 갱신은 REDO만 필요하다.',
  },
  {
    id: 'fw-b10', exam: 'written', subjectId: 'database', source: SRC, type: 'choice',
    question: '데이터베이스 설계 단계 중 E-R 다이어그램을 작성하는 단계는?',
    choices: ['요구 조건 분석', '개념적 설계', '논리적 설계', '물리적 설계'],
    answer: 1,
    explanation: '논리적 설계는 테이블 매핑과 정규화, 물리적 설계는 저장 구조와 인덱스를 정한다.',
  },
  {
    id: 'fw-b11', exam: 'written', subjectId: 'database', source: SRC, type: 'choice',
    question: 'DDL(데이터 정의어)에 해당하지 않는 것은?',
    choices: ['CREATE', 'ALTER', 'DROP', 'UPDATE'],
    answer: 3,
    explanation: 'UPDATE는 DML(데이터 조작어)이다.',
  },
  {
    id: 'fw-b12', exam: 'written', subjectId: 'database', source: SRC, type: 'choice',
    question: '병행 제어 기법이 아닌 것은?',
    choices: ['로킹', '타임스탬프 순서', '낙관적 검증', '정규화'],
    answer: 3,
    explanation: '병행 제어 기법은 로킹, 타임스탬프 순서, 낙관적 검증, 다중 버전 기법이다.',
  },
  {
    id: 'fw-b13', exam: 'written', subjectId: 'database', source: SRC, type: 'choice',
    question: '분산 데이터베이스의 투명성에 해당하지 않는 것은?',
    choices: ['위치 투명성', '중복 투명성', '병행 투명성', '종속 투명성'],
    answer: 3,
    explanation: '분산 DB 투명성은 위치, 중복, 병행, 장애 투명성이다.',
  },
  {
    id: 'fw-b14', exam: 'written', subjectId: 'database', source: SRC, type: 'choice',
    question: '실행 중인 트랜잭션의 중간 결과를 다른 트랜잭션이 참조할 수 없다는 특성은?',
    choices: ['원자성', '일관성', '독립성(격리성)', '영속성'],
    answer: 2,
    explanation: '독립성(Isolation)은 동시에 실행되는 트랜잭션끼리 간섭하지 않는 성질이다.',
  },
  {
    id: 'fw-b15', exam: 'written', subjectId: 'database', source: SRC, type: 'choice',
    question: 'SELECT 문의 논리적 실행 순서로 옳은 것은?',
    choices: [
      'SELECT → FROM → WHERE → GROUP BY',
      'FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY',
      'FROM → SELECT → WHERE → ORDER BY',
      'WHERE → FROM → SELECT → HAVING',
    ],
    answer: 1,
    explanation: '쓰는 순서(SELECT부터)와 실행 순서(FROM부터)가 다르다.',
  },

  /* ───────── 4과목 · 프로그래밍 언어 활용 ───────── */
  {
    id: 'fw-g01', exam: 'written', subjectId: 'programming', source: SRC, type: 'choice',
    question: '다음 C 프로그램의 출력 결과는?',
    code: `#include <stdio.h>
int main() {
    int a[5] = {2, 4, 6, 8, 10};
    int sum = 0;
    for (int i = 0; i < 5; i += 2) {
        sum += a[i];
    }
    printf("%d", sum);
    return 0;
}`,
    choices: ['12', '18', '20', '30'],
    answer: 1,
    explanation: 'i = 0, 2, 4 → a[0] + a[2] + a[4] = 2 + 6 + 10 = 18.',
  },
  {
    id: 'fw-g02', exam: 'written', subjectId: 'programming', source: SRC, type: 'choice',
    question: '다음 Python 코드의 출력 결과는?',
    code: `a = [10, 20, 30, 40, 50]
print(a[-2], a[1:3])`,
    choices: ['40 [20, 30]', '40 [20, 30, 40]', '30 [20, 30]', '20 [10, 20]'],
    answer: 0,
    explanation: 'a[-2]는 뒤에서 두 번째(40), a[1:3]은 인덱스 1부터 3 직전까지([20, 30]).',
  },
  {
    id: 'fw-g03', exam: 'written', subjectId: 'programming', source: SRC, type: 'choice',
    question: '다음 Java 프로그램의 출력 결과는?',
    code: `public class Main {
    public static void main(String[] args) {
        int x = 10;
        int y = x++ + --x;
        System.out.print(y);
    }
}`,
    choices: ['19', '20', '21', '22'],
    answer: 1,
    explanation: 'x++는 10을 쓰고 x = 11, --x는 x = 10으로 줄인 뒤 10을 사용 → 10 + 10 = 20.',
  },
  {
    id: 'fw-g04', exam: 'written', subjectId: 'programming', source: SRC, type: 'choice',
    question: 'C언어에서 다음 연산자 중 우선순위가 가장 높은 것은?',
    choices: ['&&', '==', '*', '='],
    answer: 2,
    explanation: '산술(*) > 관계·등가(==) > 논리(&&) > 대입(=). (단산시관비논조대)',
  },
  {
    id: 'fw-g05', exam: 'written', subjectId: 'programming', source: SRC, type: 'choice',
    question: 'HRN 스케줄링에서 가장 먼저 실행되는 작업은?',
    code: `작업 | 대기 시간 | 서비스 시간
A    |     5     |     20
B    |    40     |     20
C    |    15     |     45
D    |    20     |      2`,
    choices: ['A', 'B', 'C', 'D'],
    answer: 3,
    explanation: '(대기 + 서비스) / 서비스: A 1.25, B 3, C 약 1.33, D 11 → 값이 가장 큰 D.',
  },
  {
    id: 'fw-g06', exam: 'written', subjectId: 'programming', source: SRC, type: 'choice',
    question: '페이지 프레임이 3개일 때 참조열 7, 0, 1, 2, 0, 3, 0, 4 를 FIFO로 처리하면 페이지 부재는 몇 번 발생하는가?',
    choices: ['5번', '6번', '7번', '8번'],
    answer: 2,
    explanation: '7F 0F 1F 2F(7 교체) 0H 3F(0 교체) 0F(1 교체) 4F(2 교체) → 부재 7번.',
  },
  {
    id: 'fw-g07', exam: 'written', subjectId: 'programming', source: SRC, type: 'choice',
    question: '은행원 알고리즘은 교착상태 해결 방법 중 어디에 해당하는가?',
    choices: ['예방', '회피', '발견', '회복'],
    answer: 1,
    explanation: '은행원 알고리즘은 자원을 할당해도 안전한지 미리 확인하는 회피 기법이다.',
  },
  {
    id: 'fw-g08', exam: 'written', subjectId: 'programming', source: SRC, type: 'choice',
    question: 'OSI 7계층 중 경로 설정(라우팅)을 담당하는 계층은?',
    choices: ['데이터 링크 계층', '네트워크 계층', '전송 계층', '세션 계층'],
    answer: 1,
    explanation: '네트워크 계층(3계층)은 IP 주소로 경로를 정하며 라우터가 이 계층 장비이다.',
  },
  {
    id: 'fw-g09', exam: 'written', subjectId: 'programming', source: SRC, type: 'choice',
    question: 'IPv6 주소는 몇 비트인가?',
    choices: ['32비트', '64비트', '128비트', '256비트'],
    answer: 2,
    explanation: 'IPv4는 32비트, IPv6는 128비트이다.',
  },
  {
    id: 'fw-g10', exam: 'written', subjectId: 'programming', source: SRC, type: 'choice',
    question: '192.168.1.0/26 네트워크에서 서브넷 하나당 사용할 수 있는 호스트 수는?',
    choices: ['30', '62', '64', '126'],
    answer: 1,
    explanation: '호스트 비트 6개 → 2⁶ = 64, 네트워크 주소와 브로드캐스트 주소를 빼면 62.',
  },
  {
    id: 'fw-g11', exam: 'written', subjectId: 'programming', source: SRC, type: 'choice',
    question: '프로세스 처리 시간보다 페이지 교체에 드는 시간이 더 많아지는 현상은?',
    choices: ['스래싱', '워킹 셋', '구역성', '단편화'],
    answer: 0,
    explanation: '스래싱은 페이지 부재가 너무 잦아 CPU 이용률이 급격히 떨어지는 현상이다.',
  },
  {
    id: 'fw-g12', exam: 'written', subjectId: 'programming', source: SRC, type: 'choice',
    question: '17KB 프로그램을 최적 적합(Best Fit)으로 배치할 때 선택되는 영역은?',
    code: `영역1: 10KB   영역2: 25KB   영역3: 18KB   영역4: 30KB`,
    choices: ['영역1', '영역2', '영역3', '영역4'],
    answer: 2,
    explanation: '들어갈 수 있는 영역(25, 18, 30) 중 남는 공간이 가장 작은 18KB. 최초 적합이면 영역2, 최악 적합이면 영역4.',
  },
  {
    id: 'fw-g13', exam: 'written', subjectId: 'programming', source: SRC, type: 'choice',
    question: '준비 상태의 프로세스가 CPU를 할당받아 실행 상태로 바뀌는 것은?',
    choices: ['디스패치', '타이머 런아웃', '블록', '웨이크업'],
    answer: 0,
    explanation: '타이머 런아웃은 실행 → 준비, 블록은 실행 → 대기, 웨이크업은 대기 → 준비.',
  },
  {
    id: 'fw-g14', exam: 'written', subjectId: 'programming', source: SRC, type: 'choice',
    question: 'UDP에 대한 설명으로 옳은 것은?',
    choices: [
      '연결형 서비스를 제공한다.',
      '흐름 제어와 순서 보장을 제공한다.',
      '비연결형이며 신뢰성보다 속도가 중요할 때 사용한다.',
      '3-way handshake로 연결을 설정한다.',
    ],
    answer: 2,
    explanation: '나머지는 모두 TCP의 특징이다.',
  },
  {
    id: 'fw-g15', exam: 'written', subjectId: 'programming', source: SRC, type: 'choice',
    question: 'Java에서 같은 패키지와 다른 패키지의 자식 클래스에서 접근할 수 있는 접근 제어자는?',
    choices: ['public', 'protected', 'default', 'private'],
    answer: 1,
    explanation: 'public은 어디서나, default는 같은 패키지만, private은 같은 클래스만 접근 가능하다.',
  },

  /* ───────── 5과목 · 정보시스템 구축 관리 ───────── */
  {
    id: 'fw-m01', exam: 'written', subjectId: 'management', source: SRC, type: 'choice',
    question: '총 30,000 라인의 프로젝트를 개발자 5명이 진행하고, 1인당 월평균 300 라인을 개발한다면 개발 기간은?',
    choices: ['10개월', '20개월', '30개월', '60개월'],
    answer: 1,
    explanation: '노력(인월) = 30,000 / 300 = 100, 개발 기간 = 100 / 5명 = 20개월.',
  },
  {
    id: 'fw-m02', exam: 'written', subjectId: 'management', source: SRC, type: 'choice',
    question: 'COCOMO 유형 중 30만 라인 이상의 초대형 규모로, 운영체제처럼 하드웨어와 밀접한 시스템 개발에 적합한 것은?',
    choices: ['조직형(Organic)', '반분리형(Semi-Detached)', '내장형(Embedded)', '분산형(Distributed)'],
    answer: 2,
    explanation: '조직형은 5만 라인 이하 업무용, 반분리형은 30만 라인 이하 컴파일러 · 인터프리터 등.',
  },
  {
    id: 'fw-m03', exam: 'written', subjectId: 'management', source: SRC, type: 'choice',
    question: 'CMMI 성숙도 단계를 순서대로 나열한 것은?',
    choices: [
      '초기 → 관리 → 정의 → 정량적 관리 → 최적화',
      '초기 → 정의 → 관리 → 최적화 → 정량적 관리',
      '관리 → 초기 → 정의 → 최적화 → 정량적 관리',
      '초기 → 관리 → 최적화 → 정의 → 정량적 관리',
    ],
    answer: 0,
    explanation: "'초관정정최'로 외운다.",
  },
  {
    id: 'fw-m04', exam: 'written', subjectId: 'management', source: SRC, type: 'choice',
    question: '해시(단방향) 알고리즘이 아닌 것은?',
    choices: ['MD5', 'SHA-256', 'HAVAL', 'ARIA'],
    answer: 3,
    explanation: 'ARIA는 국내에서 개발한 대칭키 블록 암호이다.',
  },
  {
    id: 'fw-m05', exam: 'written', subjectId: 'management', source: SRC, type: 'choice',
    question: '출발지 주소를 공격 대상으로 위조한 ICMP 패킷을 브로드캐스트해, 대량의 응답이 공격 대상에게 몰리게 하는 공격은?',
    choices: ['Smurfing', 'Teardrop', 'LAND Attack', 'SYN Flooding'],
    answer: 0,
    explanation: 'Teardrop은 패킷 조각 순서 조작, LAND는 출발지 = 목적지 위조, SYN Flooding은 SYN만 대량 전송.',
  },
  {
    id: 'fw-m06', exam: 'written', subjectId: 'management', source: SRC, type: 'choice',
    question: 'TCP 연결 과정의 SYN 패킷만 대량으로 보내 서버의 연결 자원을 고갈시키는 공격은?',
    choices: ['Ping of Death', 'SYN Flooding', 'Smurfing', 'Teardrop'],
    answer: 1,
    explanation: '3-way handshake를 끝내지 않아 서버가 연결 대기 상태로 자원을 계속 붙잡게 된다.',
  },
  {
    id: 'fw-m07', exam: 'written', subjectId: 'management', source: SRC, type: 'choice',
    question: '주체와 객체의 보안 등급을 비교해 접근 권한을 부여하는 접근 통제 방식은?',
    choices: ['DAC', 'MAC', 'RBAC', 'ACL'],
    answer: 1,
    explanation: 'DAC는 소유자(신분) 기반, RBAC는 역할 기반이다.',
  },
  {
    id: 'fw-m08', exam: 'written', subjectId: 'management', source: SRC, type: 'choice',
    question: '현실의 물리적 사물을 가상 공간에 똑같이 구현해 시뮬레이션하는 기술은?',
    choices: ['메타버스', '디지털 트윈', '매시업', '증강 현실'],
    answer: 1,
    explanation: '디지털 트윈은 현실의 가상 쌍둥이를 만들어 분석 · 예측에 활용한다.',
  },
  {
    id: 'fw-m09', exam: 'written', subjectId: 'management', source: SRC, type: 'choice',
    question: '복귀 주소와 변수 사이에 특정 값을 두고, 그 값이 바뀌면 버퍼 오버플로로 판단하는 기법은?',
    choices: ['스택 가드', '스택 쉴드', 'ASLR', 'DEP'],
    answer: 0,
    explanation: '스택 쉴드는 복귀 주소를 별도 공간에 저장해 두고 비교하는 기법이다.',
  },
  {
    id: 'fw-m10', exam: 'written', subjectId: 'management', source: SRC, type: 'choice',
    question: '두 개 이상의 디스크에 같은 데이터를 복제해 저장하는 RAID 레벨은?',
    choices: ['RAID 0', 'RAID 1', 'RAID 5', 'RAID 6'],
    answer: 1,
    explanation: 'RAID 0은 스트라이핑(나눠 저장), RAID 1은 미러링(복제), RAID 5는 분산 패리티.',
  },
  {
    id: 'fw-m11', exam: 'written', subjectId: 'management', source: SRC, type: 'choice',
    question: '프로젝트 특성에 맞게 기존 개발 방법론의 절차와 산출물을 수정하는 작업은?',
    choices: ['리팩토링', '테일러링', '형상 관리', '프로토타이핑'],
    answer: 1,
    explanation: '테일러링은 규모 · 요구사항 · 보유 기술(내부)과 법적 제약 · 표준(외부)을 고려해 방법론을 조정한다.',
  },
  {
    id: 'fw-m12', exam: 'written', subjectId: 'management', source: SRC, type: 'choice',
    question: '사용자 인증 유형 중 OTP, 스마트카드처럼 가지고 있는 것으로 인증하는 방식은?',
    choices: ['지식 기반', '소유 기반', '생체 기반', '위치 기반'],
    answer: 1,
    explanation: '지식 기반은 비밀번호, 생체 기반은 지문 · 홍채 등이다.',
  },
  {
    id: 'fw-m13', exam: 'written', subjectId: 'management', source: SRC, type: 'choice',
    question: '침입을 탐지하는 데 그치지 않고 실시간으로 차단까지 하는 보안 솔루션은?',
    choices: ['IDS', 'IPS', 'SIEM', 'DLP'],
    answer: 1,
    explanation: 'IDS는 탐지, IPS는 탐지 + 차단, SIEM은 로그 통합 분석, DLP는 정보 유출 방지.',
  },
  {
    id: 'fw-m14', exam: 'written', subjectId: 'management', source: SRC, type: 'choice',
    question: 'Rayleigh-Norden 곡선을 기반으로 하는 비용 산정 모형은?',
    choices: ['COCOMO', 'Putnam', '기능 점수(FP)', 'LOC'],
    answer: 1,
    explanation: 'Putnam 모형은 SLIM 도구로 자동화되어 있다.',
  },
  {
    id: 'fw-m15', exam: 'written', subjectId: 'management', source: SRC, type: 'choice',
    question: '다음 작업 네트워크에서 임계 경로(CPM)에 따른 최소 완료 기간은?',
    code: `A(3일) → B(5일) → D(4일)
A(3일) → C(2일) → D(4일)`,
    choices: ['9일', '10일', '12일', '14일'],
    answer: 2,
    explanation: '가장 긴 경로 A → B → D = 3 + 5 + 4 = 12일이 임계 경로이다.',
  },
]
