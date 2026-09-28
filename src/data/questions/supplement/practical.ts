import type { Question } from '../../../types'

// 보강 개념(구조체, 추상 클래스, DDL · 집합 연산, 악성코드, 보안 모델 등)에 맞춘 변형 문제 (기출 원문 아님)
const SRC = '빈출 변형'

export const supplementPractical: Question[] = [
  /* ───────── 프로그래밍 ───────── */
  {
    id: 'ap-c01', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
typedef struct {
    char name[10];
    int kor, eng;
} Student;

int main() {
    Student s[3] = {{"Kim", 90, 80}, {"Lee", 70, 100}, {"Park", 85, 75}};
    Student *p = &s[1];
    int i, best = 0;
    for (i = 1; i < 3; i++)
        if (s[i].kor + s[i].eng > s[best].kor + s[best].eng) best = i;
    printf("%s %d ", s[best].name, p->eng);
    p++;
    printf("%c", p->name[1]);
    return 0;
}`,
    answer: ['Kim 100 a'],
    explanation: '합계는 Kim 170, Lee 170, Park 160. 170 > 170은 거짓이라 best는 0(Kim). p는 s[1]이므로 eng 100, p++ 후 s[2] "Park"의 두 번째 글자는 a.',
  },
  {
    id: 'ap-c02', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
struct Node {
    int value;
    struct Node *next;
};

int main() {
    struct Node c = {30, NULL};
    struct Node b = {20, &c};
    struct Node a = {10, &b};
    struct Node *p = &a;
    int sum = 0;
    while (p != NULL) {
        sum += p->value;
        p = p->next;
    }
    printf("%d %d", sum, a.next->next->value);
    return 0;
}`,
    answer: ['60 30'],
    explanation: 'a → b → c 순서로 따라가며 10 + 20 + 30 = 60. a.next는 b, b.next는 c이므로 30.',
  },
  {
    id: 'ap-j01', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `abstract class Shape {
    abstract int area();
    void print() { System.out.print(area() + " "); }
}
class Rect extends Shape {
    int w, h;
    Rect(int w, int h) { this.w = w; this.h = h; }
    int area() { return w * h; }
}
class Counter {
    static int cnt = 0;
    int id;
    Counter() { cnt++; id = cnt; }
}
public class Main {
    public static void main(String[] args) {
        Shape s = new Rect(3, 4);
        s.print();
        Counter a = new Counter();
        Counter b = new Counter();
        System.out.print(a.id + " " + Counter.cnt);
    }
}`,
    answer: ['12 1 2'],
    explanation: 'Rect의 area()가 호출되어 12. a.id는 생성 당시 cnt 값 1, cnt는 static이라 두 객체가 공유하여 2.',
  },
  {
    id: 'ap-j02', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `interface Greeting {
    String say();
}
class Ko implements Greeting {
    public String say() { return "안녕"; }
}
class En implements Greeting {
    public String say() { return "Hi"; }
}
public class Main {
    public static void main(String[] args) {
        Greeting[] g = { new Ko(), new En(), new Ko() };
        String r = "";
        for (Greeting x : g) r += x.say().length();
        System.out.print(r);
    }
}`,
    answer: ['222'],
    explanation: '"안녕".length()는 2, "Hi".length()도 2. 숫자를 문자열에 이어 붙이므로 "222".',
  },
  {
    id: 'ap-p01', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: 'C언어에서 malloc, free, atoi, rand 함수가 선언된 표준 헤더 파일 이름을 쓰시오.',
    answer: ['stdlib.h', '<stdlib.h>'],
    explanation: 'stdlib.h는 메모리 할당 · 형 변환 · 난수 함수를 담는다. 문자열 함수는 string.h에 있다.',
  },

  /* ───────── SQL ───────── */
  {
    id: 'ap-s01', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: '[A] 테이블의 값은 1, 2, 3이고 [B] 테이블의 값은 2, 3, 4이다. 다음 SQL의 결과 행 수를 쓰시오.',
    code: `SELECT 값 FROM A
UNION ALL
SELECT 값 FROM B;`,
    answer: ['6', '6개', '6행'],
    explanation: 'UNION ALL은 중복을 제거하지 않으므로 3 + 3 = 6행. UNION이었다면 1, 2, 3, 4로 4행이다.',
  },
  {
    id: 'ap-s02', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: '두 SELECT 결과에서 공통으로 존재하는 행만 조회하는 SQL 집합 연산자를 쓰시오.',
    answer: ['INTERSECT'],
    explanation: 'INTERSECT는 교집합, EXCEPT(MINUS)는 차집합, UNION은 합집합이다.',
  },
  {
    id: 'ap-s03', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: '다음은 학년이 1~4 사이의 값만 허용되도록 하는 테이블 생성문이다. 빈칸에 들어갈 제약 조건 키워드를 쓰시오.',
    code: `CREATE TABLE 학생 (
    학번 INT PRIMARY KEY,
    학년 INT (  빈칸  ) (학년 BETWEEN 1 AND 4)
);`,
    answer: ['CHECK'],
    explanation: 'CHECK 제약 조건은 값이 조건식을 만족할 때만 저장되게 한다.',
  },
  {
    id: 'ap-s04', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: '참조하는 부모 테이블의 행이 삭제되면 이를 참조하는 자식 테이블의 행도 함께 삭제되게 하는 외래키 옵션을 쓰시오.',
    code: `FOREIGN KEY (학과코드) REFERENCES 학과(학과코드) ON DELETE (  빈칸  )`,
    answer: ['CASCADE'],
    explanation: 'ON DELETE CASCADE는 연쇄 삭제, SET NULL은 NULL로 변경, RESTRICT는 삭제를 거부한다.',
  },
  {
    id: 'ap-s05', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: 'DBMS가 스스로 생성 · 유지하며, 데이터베이스에 저장된 모든 객체에 대한 정보(메타데이터)를 담고 있는 시스템 데이터베이스를 쓰시오.',
    answer: ['시스템 카탈로그', '카탈로그', 'System Catalog', '데이터 사전', 'Data Dictionary'],
    explanation: '시스템 카탈로그 = 데이터 사전. 사용자는 조회만 할 수 있다.',
  },

  /* ───────── 보안 ───────── */
  {
    id: 'ap-x01', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '보안 패치가 배포되기 전, 아직 알려지지 않았거나 대응책이 없는 취약점을 이용하는 공격을 쓰시오.',
    answer: ['제로데이 공격', '제로데이', 'Zero-Day', 'Zero Day', 'Zero-Day Attack'],
    explanation: '취약점이 공개된 날(Day 0)보다 먼저 공격이 이뤄진다는 뜻이다.',
  },
  {
    id: 'ap-x02', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '사용자의 PC에 몰래 설치되어 그 자원으로 암호화폐를 채굴하는 공격을 쓰시오.',
    answer: ['크립토재킹', 'Cryptojacking', '크립토 재킹'],
    explanation: 'Crypto(암호화폐) + Hijacking(가로채기).',
  },
  {
    id: 'ap-x03', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '관리자 권한을 획득한 뒤 침입 흔적과 악성 프로그램의 존재를 숨기는 도구 모음을 쓰시오.',
    answer: ['루트킷', 'Rootkit'],
    explanation: '유닉스 관리자 계정 root + kit(도구 모음).',
  },
  {
    id: 'ap-x04', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '기밀성을 강조하는 접근 통제 모델로, "No Read Up, No Write Down" 규칙을 갖는 모델을 쓰시오.',
    answer: ['벨-라파듈라', '벨라파듈라', 'Bell-LaPadula', 'BLP', '벨 라파듈라'],
    explanation: '벨-라파듈라는 기밀성, 비바(Biba)는 무결성(No Read Down, No Write Up) 모델이다.',
  },
  {
    id: 'ap-x05', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '한 번의 로그인으로 여러 시스템이나 서비스를 추가 인증 없이 이용할 수 있게 하는 인증 방식을 쓰시오.',
    answer: ['SSO', 'Single Sign-On', 'Single Sign On'],
    explanation: 'SSO = Single Sign-On.',
  },
  {
    id: 'ap-x06', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '사용자에 대한 인증(Authentication), 인가(Authorization), 계정 관리(Accounting)를 묶어 부르는 보안 체계를 쓰시오.',
    answer: ['AAA'],
    explanation: 'AAA: 누구인지 확인 → 무엇을 할 수 있는지 결정 → 무엇을 했는지 기록.',
  },
  {
    id: 'ap-x07', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '공격자를 유인하기 위해 일부러 취약하게 만들어 둔 가짜 시스템을 쓰시오.',
    answer: ['허니팟', 'Honeypot', 'Honey Pot'],
    explanation: '꿀단지로 벌레를 모으듯 공격자를 유인해 행동을 관찰한다.',
  },
  {
    id: 'ap-x08', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '로그인한 사용자가 자신의 의지와 무관하게 공격자가 의도한 요청(수정, 삭제 등)을 서버로 보내게 하는 웹 공격을 영문 약어로 쓰시오.',
    answer: ['CSRF', 'XSRF', 'Cross-Site Request Forgery', 'Cross Site Request Forgery'],
    explanation: 'CSRF = Cross-Site Request Forgery (사이트 간 요청 위조).',
  },

  /* ───────── DB 이론 ───────── */
  {
    id: 'ap-b01', exam: 'practical', subjectId: 'db-theory', source: SRC, type: 'short',
    question: '트랜잭션이 잠금만 할 수 있는 확장 단계와 해제만 할 수 있는 축소 단계로 나누어 로킹하는 병행 제어 규약을 쓰시오.',
    answer: ['2단계 로킹', '2PL', '2단계 로킹 규약', 'Two-Phase Locking', '2 Phase Locking'],
    explanation: '2단계 로킹은 직렬성을 보장하지만 교착상태가 발생할 수 있다.',
  },
  {
    id: 'ap-b02', exam: 'practical', subjectId: 'db-theory', source: SRC, type: 'short',
    question: '데이터 모델을 구성하는 3요소를 쓰시오. (구조 외 2가지)',
    answer: ['연산, 제약 조건', '연산 제약 조건', '제약 조건, 연산', '제약 조건 연산', 'Operation, Constraint'],
    explanation: '데이터 모델 3요소: 구조(Structure), 연산(Operation), 제약 조건(Constraint).',
  },

  /* ───────── 테스트 ───────── */
  {
    id: 'ap-t01', exam: 'practical', subjectId: 'test', source: SRC, type: 'short',
    question: '결정문 안의 각 개별 조건이 다른 조건과 관계없이 전체 결과에 독립적으로 영향을 주는지 확인하는 커버리지를 쓰시오.',
    answer: ['변경 조건/결정 커버리지', 'MC/DC', 'MCDC', '변경 조건 결정 커버리지', 'Modified Condition/Decision Coverage'],
    explanation: 'MC/DC는 항공 등 안전이 중요한 분야에서 요구되는 커버리지이다.',
  },
  {
    id: 'ap-t02', exam: 'practical', subjectId: 'test', source: SRC, type: 'short',
    question: 'ISO/IEC 9126의 소프트웨어 품질 특성 6가지 중, 다른 환경으로 옮겨도 쉽게 설치 · 적응해 사용할 수 있는 정도를 나타내는 특성을 쓰시오.',
    answer: ['이식성', 'Portability'],
    explanation: '이식성의 부특성: 적응성, 설치성, 대체성, 공존성.',
  },

  /* ───────── OS · 네트워크 ───────── */
  {
    id: 'ap-o01', exam: 'practical', subjectId: 'os-network', source: SRC, type: 'short',
    question: '헤드 위치 53, 요청 큐가 98, 183, 37, 122, 14, 124, 65, 67일 때 FCFS 방식의 총 헤드 이동 거리를 쓰시오.',
    answer: ['640'],
    explanation: '45 + 85 + 146 + 85 + 108 + 110 + 59 + 2 = 640.',
  },
  {
    id: 'ap-o02', exam: 'practical', subjectId: 'os-network', source: SRC, type: 'short',
    question: '정수 변수와 P · V 연산을 이용해 임계 구역에 대한 상호 배제를 구현하는, 다익스트라가 제안한 기법을 쓰시오.',
    answer: ['세마포어', 'Semaphore'],
    explanation: 'P: 자원 획득(S − 1), V: 자원 반납(S + 1).',
  },
  {
    id: 'ap-o03', exam: 'practical', subjectId: 'os-network', source: SRC, type: 'short',
    question: 'IPv6 패킷을 IPv4 패킷 안에 캡슐화하여 IPv4 네트워크를 통과시키는 IPv4 → IPv6 전환 기법을 쓰시오.',
    answer: ['터널링', 'Tunneling'],
    explanation: '전환 기법: 듀얼 스택, 터널링, 헤더 변환.',
  },

  /* ───────── 디자인 · UML ───────── */
  {
    id: 'ap-d01', exam: 'practical', subjectId: 'design', source: SRC, type: 'short',
    question: '객체 모델링, 동적 모델링, 기능 모델링 순서로 분석하는 객체지향 분석 방법론의 이름을 쓰시오.',
    answer: ['럼바우', 'Rumbaugh', 'OMT', '럼바우 방법', '럼바우(OMT)'],
    explanation: '럼바우(OMT): 객체(객체 다이어그램) → 동적(상태 다이어그램) → 기능(DFD). "객동기"',
  },
  {
    id: 'ap-u01', exam: 'practical', subjectId: 'uml', source: SRC, type: 'short',
    question: '요구사항 분석부터 코드 생성, 테스트까지 소프트웨어 개발 과정을 자동화해 주는 도구를 통칭하는 용어를 쓰시오.',
    answer: ['CASE', 'CASE 도구', 'Computer Aided Software Engineering'],
    explanation: 'CASE = Computer Aided Software Engineering. 상위 · 하위 · 통합 CASE로 나뉜다.',
  },

  /* ───────── 신기술 ───────── */
  {
    id: 'ap-n01', exam: 'practical', subjectId: 'new-tech', source: SRC, type: 'short',
    question: '클라우드 서비스 중, 개발자가 애플리케이션을 개발 · 실행할 수 있는 플랫폼(운영체제, 런타임, 미들웨어 등)을 제공하는 모델을 영문 약어로 쓰시오.',
    answer: ['PaaS', 'Platform as a Service'],
    explanation: 'IaaS(인프라) → PaaS(플랫폼) → SaaS(소프트웨어) 순으로 제공 범위가 넓어진다.',
  },
  {
    id: 'ap-n02', exam: 'practical', subjectId: 'new-tech', source: SRC, type: 'short',
    question: 'IoT 환경에서 사용하는 발행-구독(Publish-Subscribe) 방식의 경량 메시지 프로토콜을 쓰시오.',
    answer: ['MQTT'],
    explanation: 'MQTT는 브로커를 중심으로 발행 · 구독하며, 저전력 · 저대역폭 환경에 적합하다.',
  },
  {
    id: 'ap-n03', exam: 'practical', subjectId: 'new-tech', source: SRC, type: 'short',
    question: '시스템 구성 요소 중 한 곳이 고장 나면 전체 시스템이 중단되는 지점을 영문 약어로 쓰시오.',
    answer: ['SPOF', 'Single Point of Failure'],
    explanation: 'SPOF(단일 장애점)는 이중화로 제거해 고가용성(HA)을 확보한다.',
  },
  /* ───────── 네트워크 단답 ───────── */
  {
    id: 'ap-o04', exam: 'practical', subjectId: 'os-network', source: SRC, type: 'short',
    question: '기지국이나 액세스 포인트 같은 기반 시설 없이, 이동 단말기끼리 임시로 구성하는 네트워크를 쓰시오.',
    answer: ['애드혹 네트워크', '애드혹', 'Ad-hoc Network', 'Ad-hoc', 'Ad hoc Network', 'Adhoc'],
    explanation: '재난 현장, 군사 작전처럼 기반 시설이 없는 곳에서 사용한다.',
  },
  {
    id: 'ap-o05', exam: 'practical', subjectId: 'os-network', source: SRC, type: 'short',
    question: '라우터, 스위치 같은 네트워크 장비의 상태를 원격으로 감시하고 관리하는 응용 계층 프로토콜을 영문 약어로 쓰시오.',
    answer: ['SNMP', 'Simple Network Management Protocol'],
    explanation: 'SNMP = Simple Network Management Protocol. UDP 161, 162번 포트를 사용한다.',
  },
  {
    id: 'ap-o06', exam: 'practical', subjectId: 'os-network', source: SRC, type: 'short',
    question: '호스트가 멀티캐스트 그룹에 가입하거나 탈퇴하는 것을 관리하는 네트워크 계층 프로토콜을 쓰시오.',
    answer: ['IGMP', 'Internet Group Management Protocol'],
    explanation: 'ICMP는 오류 · 제어 메시지, IGMP는 멀티캐스트 그룹 관리.',
  },
  {
    id: 'ap-o07', exam: 'practical', subjectId: 'os-network', source: SRC, type: 'short',
    question: '물리적인 배치와 관계없이 스위치에서 논리적으로 LAN을 분리해 브로드캐스트 영역을 나누는 기술을 영문 약어로 쓰시오.',
    answer: ['VLAN', 'Virtual LAN', 'Virtual Local Area Network'],
    explanation: 'VLAN = Virtual LAN. 같은 스위치에 연결돼도 서로 다른 네트워크처럼 동작한다.',
  },
  {
    id: 'ap-o08', exam: 'practical', subjectId: 'os-network', source: SRC, type: 'short',
    question: '네트워크에 접속한 호스트에 IP 주소, 서브넷 마스크, 게이트웨이 등을 자동으로 할당하는 프로토콜을 쓰시오.',
    answer: ['DHCP', 'Dynamic Host Configuration Protocol'],
    explanation: 'DHCP = Dynamic Host Configuration Protocol.',
  },
  {
    id: 'ap-o09', exam: 'practical', subjectId: 'os-network', source: SRC, type: 'short',
    question: '블루투스 기기들이 하나의 마스터와 최대 7개의 슬레이브로 구성하는 소규모 무선 네트워크를 쓰시오.',
    answer: ['피코넷', 'Piconet', 'PICONET'],
    explanation: '피코넷 여러 개가 연결된 것은 스캐터넷(Scatternet)이다.',
  },
]
