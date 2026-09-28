import type { Concept, Subject } from '../../types'
import * as w from './written'

// 실기는 필기와 범위가 같다. 실기 전용(코드 · SQL 작성) 개념만 여기서 쓰고, 나머지는 필기 개념을 재사용한다.

/* ───────── 프로그래밍 (C · Java · Python) ───────── */

const howToTrace: Concept = {
  title: '코드 문제 푸는 순서',
  level: 3,
  summary: '눈으로 읽지 말고, 변수 값을 표에 적으며 따라간다',
  points: [
    '1. 함정 찾기: 후위 증가, 정수 나눗셈, 오버라이딩처럼 결과를 바꾸는 부분에 표시',
    '2. 변수 추적표 만들기: 한 줄 실행할 때마다 변수 값을 적는다',
    '3. 반복문은 회차마다 한 줄씩, 재귀는 내려가며 적고 올라오며 계산',
    '4. 출력 형식 확인: 공백, 줄바꿈, 쉼표까지 그대로 쓴다',
  ],
  tip: '머릿속으로 계산하지 말고 반드시 표에 적기',
}

const loopControl: Concept = {
  title: '반복문과 continue / break',
  level: 3,
  summary: 'continue는 이번 회차만 건너뛰고, break는 반복문을 빠져나간다',
  code: `int i, sum = 0;
for (i = 1; i <= 10; i++) {
    if (i % 3 == 0) continue;   // 3의 배수는 건너뜀
    if (i > 7) break;           // 7보다 크면 반복 종료
    sum += i;
}
printf("%d", sum);`,
  table: {
    head: ['i', 'i%3==0?', 'i>7?', '동작', 'sum'],
    rows: [
      ['1', 'X', 'X', '더함', '1'],
      ['2', 'X', 'X', '더함', '3'],
      ['3', 'O', '-', '건너뜀', '3'],
      ['4', 'X', 'X', '더함', '7'],
      ['5', 'X', 'X', '더함', '12'],
      ['6', 'O', '-', '건너뜀', '12'],
      ['7', 'X', 'X', '더함', '19'],
      ['8', 'X', 'O', '탈출', '19'],
    ],
  },
  tip: '출력 19 — 두 조건을 검사하는 순서가 결과를 바꾼다',
}

const pointers: Concept = {
  title: 'C 포인터와 배열',
  level: 3,
  summary: '*p는 가리키는 곳의 값, p+1은 다음 칸의 주소',
  points: [
    '&a: a의 주소 / *p: p가 가리키는 값',
    '배열 이름 a는 a[0]의 주소 → a[i] == *(a + i)',
  ],
  code: `int a[] = {10, 20, 30, 40};
int *p = a;      // p는 a[0]을 가리킴
p++;             // p는 a[1]을 가리킴
printf("%d ", *p);
printf("%d ", *(p + 2));
printf("%d", *p + 2);`,
  table: {
    head: ['식', '해석', '값'],
    rows: [
      ['*p', 'p가 가리키는 a[1]', '20'],
      ['*(p + 2)', 'a[1]에서 2칸 뒤 → a[3]', '40'],
      ['*p + 2', 'a[1]의 값 20에 2를 더함', '22'],
    ],
  },
  tip: '괄호가 있으면 주소 먼저 이동, 없으면 값 먼저 꺼내기 → 출력 20 40 22',
}

const recursion: Concept = {
  title: '재귀 함수',
  level: 2,
  summary: '자기 자신을 부르는 함수. 내려가면서 적고, 올라오면서 계산',
  code: `int f(int n) {
    if (n <= 1) return 1;
    return n + f(n - 1);
}
// printf("%d", f(4));

f(4) = 4 + f(3)
           f(3) = 3 + f(2)
                      f(2) = 2 + f(1)
                                 f(1) = 1   ← 종료 조건
거꾸로 올라오며: f(2) = 3, f(3) = 6, f(4) = 10`,
  tip: '종료 조건(n <= 1)부터 찾기 → 출력 10',
}

const cTraps: Concept = {
  title: 'C언어 함정 체크리스트',
  level: 3,
  summary: '결과를 바꾸는 C 문법 포인트',
  points: [
    'a++: 쓰고 나서 증가 / ++a: 증가하고 나서 사용',
    '정수끼리 나눗셈은 소수점 버림: 7 / 2 = 3',
    "문자열 끝에는 '\\0'이 있고, strlen은 '\\0'을 빼고 센다",
    '구조체 포인터: p->name 은 (*p).name 과 같다',
    'static 변수는 함수가 끝나도 값이 유지된다',
    'switch에서 break가 없으면 아래 case까지 계속 실행 (fall-through)',
    '비트 연산 & | ^ << >> 는 우선순위에 주의',
  ],
  code: `int n = 2;
switch (n) {
    case 1: printf("A");
    case 2: printf("B");
    case 3: printf("C"); break;
    default: printf("D");
}
// 출력: BC  (case 2부터 break를 만날 때까지 실행)`,
}

const cBitString: Concept = {
  title: 'C 비트 연산 · 문자열 · 2차원 배열',
  level: 2,
  summary: '2진수로 바꿔 한 자리씩 계산하고, 문자열은 끝의 \\0까지 생각한다',
  code: `int a = 6, b = 3;   // 110, 011
a & b    // 010 = 2   (둘 다 1일 때만 1)
a | b    // 111 = 7   (하나라도 1이면 1)
a ^ b    // 101 = 5   (서로 다를 때 1)
a << 1   // 1100 = 12 (왼쪽 1칸 = ×2)
a >> 1   // 11 = 3    (오른쪽 1칸 = ÷2)

char s[] = "HELLO";
strlen(s)          // 5 ('\\0' 제외)
printf("%c", s[1]) // E  (%c는 한 글자)
printf("%s", s + 2)// LLO (%s는 그 위치부터 끝까지)

int m[2][3] = {{1, 2, 3}, {4, 5, 6}};
m[1][2]            // 6  (1행 2열, 0부터 센다)`,
  tip: '<< n 은 × 2ⁿ, >> n 은 ÷ 2ⁿ',
}

const cStruct: Concept = {
  title: 'C 구조체',
  level: 2,
  summary: '여러 자료형을 하나로 묶은 사용자 정의 타입. 변수는 점(.), 포인터는 화살표(->)',
  points: [
    's.name: 구조체 변수의 멤버 / p->name: 구조체 포인터의 멤버 (= (*p).name)',
    'typedef struct { … } Student; → 이후 struct 없이 Student로 선언',
    '구조체 포인터 p++ 는 구조체 하나 크기만큼 다음 원소로 이동',
  ],
  code: `typedef struct {
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
}`,
  table: {
    head: ['단계', '해석', '값'],
    rows: [
      ['합계', 'Kim 170, Lee 170, Park 160', '-'],
      ['best', '170 > 170 은 거짓 → 바뀌지 않음', '0 (Kim)'],
      ['p->eng', 'p는 s[1] (Lee)', '100'],
      ['p++ → p->name[1]', 'p는 s[2] (Park), 두 번째 글자', 'a'],
    ],
  },
  tip: '> 와 >= 차이로 결과가 바뀐다 → 출력 Kim 100 a',
}

const javaInheritance: Concept = {
  title: 'Java 상속: 메소드 vs 필드',
  level: 3,
  summary: '메소드는 실제 객체(new 뒤)를, 필드는 선언 타입(앞)을 따른다',
  code: `class A {
    int x = 1;
    void show() { System.out.print("A" + x); }
}
class B extends A {
    int x = 2;
    void show() { System.out.print("B" + x); }
}

A obj = new B();
obj.show();              // ①
System.out.print(obj.x); // ②`,
  table: {
    head: ['호출', '기준', '결과'],
    rows: [
      ['obj.show()', '실제 객체 B (동적 바인딩)', 'B2'],
      ['obj.x', '선언 타입 A', '1'],
    ],
  },
  tip: '메소드는 new 뒤를 보고, 변수는 앞의 타입을 본다 → 출력 B21',
}

const javaTraps: Concept = {
  title: 'Java 함정 체크리스트',
  level: 2,
  summary: '실기 Java 문제에 단골로 나오는 포인트',
  points: [
    '오버로딩: 이름 같고 매개변수 다름 / 오버라이딩: 부모 메소드를 자식이 재정의',
    '생성자는 부모 것이 먼저 실행된다 (super())',
    'static 멤버는 모든 객체가 공유한다',
    '문자열 비교: == 는 주소, .equals() 는 내용',
    'try-catch-finally: finally는 예외가 나든 안 나든 항상 실행',
    '배열 기본값: int는 0, 객체는 null',
    '추상 클래스는 객체를 만들 수 없고, 인터페이스는 implements로 구현',
  ],
  code: `class A { A() { System.out.print("A"); } }
class B extends A { B() { System.out.print("B"); } }

new B();   // 출력: AB  (부모 생성자 먼저)`,
}

const javaAbstract: Concept = {
  title: 'Java 추상 클래스 · 인터페이스 · static',
  level: 2,
  summary: '추상 메소드는 자식이 반드시 구현하고, static 변수는 모든 객체가 하나를 나눠 쓴다',
  points: [
    'abstract 클래스: 몸체 없는 추상 메소드를 가질 수 있고, new로 직접 만들 수 없음 → extends로 상속',
    'interface: 모든 메소드가 기본적으로 추상 (public abstract). implements로 구현, 여러 개 구현 가능',
    'static 변수: 클래스에 하나만 존재 → 객체를 몇 개 만들든 공유 / 클래스명.변수로 접근',
    'final: 변수는 값 변경 X, 메소드는 오버라이딩 X, 클래스는 상속 X',
    'this: 자기 자신 객체 / super: 부모 객체',
  ],
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

Shape s = new Rect(3, 4);
s.print();                                  // 12
Counter a = new Counter();
Counter b = new Counter();
System.out.print(a.id + " " + Counter.cnt); // 1 2`,
  tip: 'id는 객체마다 따로, cnt는 모두 공유 → 출력 12 1 2',
}

const pythonList: Concept = {
  title: 'Python 슬라이싱과 리스트',
  level: 3,
  summary: '끝 인덱스는 포함하지 않는다. append는 통째로, extend는 풀어서',
  code: `a = [1, 2, 3, 4, 5]
print(a[1:4])     # ①
print(a[::-2])    # ②
a.append([6, 7])
print(len(a))     # ③
a.extend([8, 9])
print(len(a))     # ④`,
  table: {
    head: ['코드', '해설', '결과'],
    rows: [
      ['a[1:4]', '인덱스 1부터 4 직전까지', '[2, 3, 4]'],
      ['a[::-2]', '끝에서부터 2칸씩 거꾸로', '[5, 3, 1]'],
      ['append([6, 7])', '리스트를 통째로 1개 요소로 추가', '길이 6'],
      ['extend([8, 9])', '요소를 하나씩 풀어서 추가', '길이 8'],
    ],
  },
  tip: 'append는 1개 추가, extend는 여러 개 추가',
}

const pythonTraps: Concept = {
  title: 'Python 함정 체크리스트',
  level: 2,
  summary: '실기 Python 문제에 단골로 나오는 포인트',
  points: [
    'range(시작, 끝, 간격): 끝은 포함하지 않음 → range(1, 5) = 1, 2, 3, 4',
    '// 몫, % 나머지, ** 거듭제곱 → 7 // 2 = 3, 2 ** 3 = 8',
    '리스트 메소드: append, extend, insert, remove(값으로 삭제), pop(위치로 삭제), sort, reverse',
    '세트 { }: 중복 제거, 순서 없음 / 딕셔너리 {키: 값}',
    'lambda x: x * 2 → 이름 없는 한 줄 함수',
    'map(함수, 리스트): 모두 적용 / filter(함수, 리스트): 참인 것만',
    '클래스: __init__ 은 생성자, self 는 자기 자신',
  ],
  code: `print(list(map(lambda x: x * 2, [1, 2, 3])))    # [2, 4, 6]
print(list(filter(lambda x: x % 2, [1, 2, 3]))) # [1, 3]`,
}

const pythonMore: Concept = {
  title: 'Python 문자열 · 딕셔너리 · 컴프리헨션',
  level: 2,
  summary: '한 줄로 리스트를 만들고, 딕셔너리로 개수를 센다',
  code: `s = "Hello"
s[1:4]          # 'ell'   (1부터 4 직전까지)
s[-2:]          # 'lo'    (뒤에서 두 글자)
s.upper()       # 'HELLO'

d = {}
for ch in "apple":
    d[ch] = d.get(ch, 0) + 1   # 없으면 0에서 시작
# {'a': 1, 'p': 2, 'l': 1, 'e': 1}

[x * 2 for x in range(5) if x % 2 == 0]   # [0, 4, 8]
#  └ 결과    └ 반복          └ 조건`,
  points: [
    'dict.get(키, 기본값): 키가 없으면 기본값을 돌려준다',
    'len(딕셔너리)는 키의 개수',
    '메소드가 self를 return 하면 c.add(1).add(2)처럼 연달아 호출할 수 있다',
  ],
  tip: '컴프리헨션은 "결과 for 변수 in 범위 if 조건" 순서로 읽기',
}

/* ───────── SQL ───────── */

const sqlSkeleton: Concept = {
  title: 'SQL 문법 뼈대',
  level: 3,
  summary: '빈칸 채우기 문제는 대부분 이 뼈대에서 나온다',
  code: `-- 테이블 · 인덱스
CREATE INDEX idx_name ON 학생(이름);
ALTER TABLE 학생 ADD 전화번호 VARCHAR(20);
DROP TABLE 학생 CASCADE;

-- 권한
GRANT SELECT, UPDATE ON 학생 TO user1 WITH GRANT OPTION;
REVOKE UPDATE ON 학생 FROM user1;

-- 데이터 조작
INSERT INTO 학생(학번, 이름) VALUES (1001, '홍길동');
UPDATE 학생 SET 학년 = 2 WHERE 학번 = 1001;
DELETE FROM 학생 WHERE 학번 = 1001;`,
  tip: '권한은 줄 때 TO, 뺏을 때 FROM. UPDATE는 SET, INSERT는 VALUES',
}

const sqlDDL: Concept = {
  title: 'CREATE TABLE · VIEW · 집합 연산',
  level: 2,
  summary: '제약 조건이 붙은 테이블 만들기와, 두 쿼리 결과 합치기',
  code: `CREATE TABLE 학생 (
    학번     INT PRIMARY KEY,
    이름     VARCHAR(20) NOT NULL,
    학년     INT CHECK (학년 BETWEEN 1 AND 4),
    이메일   VARCHAR(50) UNIQUE,
    학과코드 INT,
    FOREIGN KEY (학과코드) REFERENCES 학과(학과코드) ON DELETE CASCADE
);

CREATE VIEW 컴공학생 AS
SELECT 학번, 이름 FROM 학생 WHERE 학과코드 = 10;

SELECT 이름 FROM 학생
UNION
SELECT 이름 FROM 교수;`,
  table: {
    head: ['연산 (A = 1, 2, 3 / B = 2, 3, 4)', '결과'],
    rows: [
      ['A UNION B', '1, 2, 3, 4 (중복 제거)'],
      ['A UNION ALL B', '1, 2, 3, 2, 3, 4 (중복 포함)'],
      ['A INTERSECT B', '2, 3'],
      ['A EXCEPT B (MINUS)', '1'],
    ],
  },
  points: [
    '제약 조건: PRIMARY KEY, FOREIGN KEY … REFERENCES, UNIQUE, NOT NULL, CHECK, DEFAULT',
    'ON DELETE CASCADE: 참조하는 부모 행이 지워지면 자식 행도 같이 삭제',
    'ALTER TABLE 학생 ADD / MODIFY / DROP COLUMN 열이름',
    '집합 연산은 두 SELECT의 열 개수와 자료형이 같아야 한다',
  ],
  tip: 'UNION은 중복 제거, UNION ALL만 중복을 남긴다',
}

const selectOrder: Concept = {
  title: 'SELECT 실행 순서',
  level: 3,
  summary: '쓰는 순서와 실행되는 순서가 다르다',
  code: `SELECT 학과, COUNT(*) AS 인원
FROM 학생
WHERE 학년 >= 2
GROUP BY 학과
HAVING COUNT(*) >= 3
ORDER BY 인원 DESC;`,
  table: {
    head: ['실행 순서', '절', '하는 일'],
    rows: [
      ['1', 'FROM', '테이블 가져오기'],
      ['2', 'WHERE', '행 거르기'],
      ['3', 'GROUP BY', '묶기'],
      ['4', 'HAVING', '묶은 그룹 거르기'],
      ['5', 'SELECT', '보여줄 열 고르기'],
      ['6', 'ORDER BY', '정렬'],
    ],
  },
  tip: 'WHERE는 묶기 전, HAVING은 묶은 뒤',
}

const sqlConditions: Concept = {
  title: '조건과 그룹 함수',
  level: 3,
  summary: '원하는 행만 골라내는 조건 문법',
  table: {
    head: ['조건', '뜻'],
    rows: [
      ["LIKE '김%'", '김으로 시작'],
      ["LIKE '%김'", '김으로 끝남'],
      ["LIKE '_수'", '두 글자, 두 번째가 수'],
      ['BETWEEN 1 AND 5', '1 이상 5 이하'],
      ["IN ('A', 'B')", 'A 또는 B'],
      ['IS NULL', '값이 없음 (= NULL 은 틀린 표현)'],
    ],
  },
  points: [
    '그룹 함수 COUNT, SUM, AVG, MAX, MIN — WHERE에서는 못 쓰고 HAVING에서 사용',
    'COUNT(*)는 NULL 포함, COUNT(열)은 NULL 제외',
    'DISTINCT: 중복 제거 / ORDER BY 기본은 ASC(오름차순), DESC는 내림차순',
  ],
  tip: '% = 글자 수 상관없음, _ = 딱 한 글자',
}

const sqlJoin: Concept = {
  title: '조인과 하위 질의',
  level: 2,
  summary: '두 테이블을 연결하거나, 쿼리 안에 쿼리를 넣기',
  points: [
    'INNER JOIN: 양쪽 모두 일치하는 행만',
    'LEFT OUTER JOIN: 왼쪽은 전부 + 오른쪽은 일치하는 것만 (없으면 NULL)',
    'RIGHT / FULL OUTER JOIN: 오른쪽 전부 / 양쪽 전부',
    '하위 질의: 괄호 안의 SELECT가 먼저 실행되고 그 결과를 바깥에서 사용',
  ],
  code: `-- 학생과 수강을 학번으로 연결
SELECT 학생.이름, 수강.과목
FROM 학생 INNER JOIN 수강 ON 학생.학번 = 수강.학번;

-- 수강 기록이 있는 학생 이름
SELECT 이름 FROM 학생
WHERE 학번 IN (SELECT 학번 FROM 수강);`,
}

/* ───────── 단답 키워드 (설명 → 이름) ───────── */

const securityTerms: Concept = {
  title: '보안 단답 키워드 모음',
  level: 3,
  summary: '실기는 설명을 보고 이름을 쓴다. 한글과 영문을 함께 외운다',
  table: {
    head: ['이런 설명이 나오면', '한글', '영문'],
    rows: [
      ['패킷을 몰래 엿봄', '스니핑', 'Sniffing'],
      ['IP · MAC · DNS 등을 위조해 속임', '스푸핑', 'Spoofing'],
      ['로그인된 세션을 가로챔', '세션 하이재킹', 'Session Hijacking'],
      ['SYN만 대량 전송해 연결 대기 자원 고갈', 'SYN 플러딩', 'SYN Flooding'],
      ['출발지를 피해자로 위조한 ICMP를 브로드캐스트', '스머핑', 'Smurfing'],
      ['출발지 IP = 목적지 IP', '랜드 어택', 'LAND Attack'],
      ['조각난 패킷의 offset 조작', '티어드롭', 'Teardrop'],
      ['규정보다 큰 ICMP 패킷', '죽음의 핑', 'Ping of Death'],
      ['웹 페이지에 악성 스크립트 삽입', '크로스 사이트 스크립팅', 'XSS'],
      ['사용자 모르게 위조 요청을 보내게 함', '사이트 간 요청 위조', 'CSRF'],
      ['입력값에 SQL 구문 삽입', 'SQL 삽입', 'SQL Injection'],
      ['표적이 자주 가는 사이트를 감염', '워터링 홀', 'Watering Hole'],
      ['특정 대상을 오랫동안 지속 공격', '지능형 지속 위협', 'APT'],
      ['파일을 암호화하고 몸값 요구', '랜섬웨어', 'Ransomware'],
      ['DNS를 조작해 가짜 사이트로', '파밍', 'Pharming'],
      ['문자 메시지로 속임', '스미싱', 'Smishing'],
      ['QR 코드로 속임', '큐싱', 'Qshing'],
      ['패치 전 취약점 공격', '제로데이 공격', 'Zero-Day Attack'],
      ['관리자 권한 획득 + 흔적 숨김', '루트킷', 'Rootkit'],
      ['인증을 우회하는 비밀 통로', '백도어', 'Backdoor'],
      ['남의 PC로 암호화폐 채굴', '크립토재킹', 'Cryptojacking'],
      ['공격자를 유인하는 가짜 시스템', '허니팟', 'Honeypot'],
      ['내부 정보 유출 방지', '데이터 유출 방지', 'DLP'],
      ['여러 보안 장비 로그를 통합 분석', '보안 정보 이벤트 관리', 'SIEM'],
      ['허가된 단말만 네트워크 접속', '네트워크 접근 제어', 'NAC'],
      ['한 번 로그인으로 여러 서비스', '통합 인증', 'SSO'],
      ['비밀번호 없이 권한만 위임', '-', 'OAuth'],
    ],
  },
  tip: '영문 약어는 철자까지 정확히. 문제에 "영문 약어로"가 있으면 약어로 쓴다',
}

const networkTerms: Concept = {
  title: '네트워크 단답 키워드 모음',
  level: 2,
  summary: '프로토콜 · 네트워크 형태 이름을 설명과 짝지어 외운다',
  table: {
    head: ['이런 설명이 나오면', '이름'],
    rows: [
      ['IP 주소 → MAC 주소', 'ARP'],
      ['MAC 주소 → IP 주소', 'RARP'],
      ['오류 · 제어 메시지 전달 (ping)', 'ICMP'],
      ['멀티캐스트 그룹 가입 · 탈퇴 관리', 'IGMP'],
      ['네트워크 장비를 원격으로 감시 · 관리', 'SNMP'],
      ['IP 주소를 자동으로 할당', 'DHCP'],
      ['도메인 이름 ↔ IP 주소', 'DNS'],
      ['원격 사용자 인증 · 권한 · 계정 관리 서버 프로토콜', 'RADIUS'],
      ['물리적 위치와 상관없이 논리적으로 LAN을 나눔', 'VLAN'],
      ['기지국 없이 단말끼리 임시로 구성하는 네트워크', '애드혹 네트워크 (Ad-hoc)'],
      ['블루투스로 연결된 소규모 네트워크 (마스터 1 + 슬레이브 최대 7)', '피코넷 (Piconet)'],
      ['노드끼리 그물처럼 직접 연결, 대규모 디바이스용', '메시 네트워크 (Mesh)'],
      ['거리 벡터 라우팅, 최대 홉 15', 'RIP'],
      ['링크 상태 라우팅, 대규모 네트워크', 'OSPF'],
      ['서로 다른 AS(자율 시스템) 사이 라우팅', 'BGP'],
      ['사설 IP ↔ 공인 IP 변환', 'NAT'],
      ['네트워크 계층 보안 (AH · ESP)', 'IPsec'],
      ['전송 계층 보안, HTTPS의 기반', 'SSL / TLS'],
    ],
  },
  tip: 'A(Address) R(Resolution) P(Protocol): 주소를 풀어 준다',
}

// 출제 우선순위 순서
export const practicalSubjects: Subject[] = [
  {
    id: 'programming',
    name: '프로그래밍 (C · Java · Python)',
    concepts: [howToTrace, loopControl, pointers, recursion, cTraps, cBitString, cStruct, javaInheritance, javaTraps, javaAbstract, pythonList, pythonMore, pythonTraps, w.operators, w.libraries],
  },
  { id: 'sql', name: 'SQL', concepts: [sqlSkeleton, selectOrder, sqlConditions, sqlJoin, sqlDDL, w.sqlBasics, w.dbObjects] },
  {
    id: 'security',
    name: '보안 공격 · 암호',
    concepts: [securityTerms, w.malwareAttacks, w.malwareTypes, w.networkAttacks, w.crypto, w.accessControl, w.securityModels, w.securitySolutions, w.devSecurity],
  },
  {
    id: 'db-theory',
    name: 'DB 이론',
    concepts: [w.normalization, w.keys, w.integrity, w.relationalTerms, w.relationalAlgebra, w.transaction, w.recovery, w.erd],
  },
  { id: 'test', name: '테스트', concepts: [w.testTechniques, w.testCoverage, w.testLevels, w.testOracle, w.testTypes, w.qualityStandards] },
  { id: 'design', name: '디자인 패턴 · 모듈 설계', concepts: [w.designPatterns, w.coupling, w.oop, w.architecture, w.ooAnalysis] },
  {
    id: 'os-network',
    name: 'OS · 네트워크 계산',
    concepts: [w.scheduling, w.pageReplacement, w.processState, w.memory, w.concurrency, w.diskScheduling, w.unix, w.subnetting, w.osi, networkTerms],
  },
  { id: 'uml', name: 'UML · 요구사항', concepts: [w.uml, w.requirements, w.lifecycle, w.agile, w.analysisTools] },
  { id: 'new-tech', name: '신기술 용어', concepts: [w.newTech, w.cloud] },
]
