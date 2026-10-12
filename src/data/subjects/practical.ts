import type { Concept, Subject } from '../../types'
import * as w from './written'

// 실기는 필기와 범위가 같다. 실기 전용(코드 · SQL 작성) 개념만 여기서 쓰고, 나머지는 필기 개념을 재사용한다.

/* ───────── 프로그래밍 (C · Java · Python) ───────── */

const howToTrace: Concept = {
  title: '코드 문제 푸는 순서',
  level: 3,
  summary: '눈으로 읽지 말고, 변수 값을 표에 적으며 따라간다',
  analogy: '요리 레시피를 따라 할 때 재료 양을 하나씩 메모하듯, 코드도 한 줄 실행할 때마다 변수 값을 표에 적어요. 머릿속으로만 계산하면 꼭 한 군데서 틀려요.',
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
  analogy: "계단 오르기 놀이예요. continue는 '이 계단은 건너뛰고 다음 계단으로!', break는 '놀이 끝, 계단에서 내려와!'예요.",
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
  analogy: "변수는 사물함, 값은 사물함 속 물건, 주소는 사물함 번호예요. 포인터는 '사물함 번호를 적은 쪽지'이고, *p는 쪽지에 적힌 사물함을 열어 물건을 꺼내는 거예요. p + 1은 바로 옆 사물함 번호예요.",
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
  analogy: '러시아 인형(마트료시카)을 여는 것과 같아요. 인형을 열면 더 작은 인형이 나오고, 가장 작은 인형(종료 조건)이 나오면 멈춰요. 그다음 거꾸로 하나씩 닫으면서 답을 합쳐요.',
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
  analogy: "a++는 '먼저 쓰고 나중에 하나 올리기', ++a는 '먼저 올리고 쓰기'예요. switch에서 break가 없으면 미끄럼틀처럼 아래 case까지 쭉 미끄러져 내려가요.",
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
  analogy: "비트는 전등 스위치 여러 개예요. &는 두 스위치가 모두 켜져야 불이 켜지고, |는 하나만 켜져도 켜지고, ^는 서로 다를 때만 켜져요. 문자열 끝의 \\0은 '여기서 끝'이라는 마침표예요.",
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
  analogy: '학생 카드 한 장에 이름·국어·영어 점수를 함께 적는 거예요. 카드를 손에 들고 있으면 점(.)으로 바로 보고, 카드가 있는 위치(포인터)만 알면 화살표(->)로 찾아가서 봐요.',
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
  analogy: '리모컨(선언 타입)과 TV(실제 객체)예요. 버튼을 누르면 실제 TV가 움직이듯 메소드는 new 뒤의 진짜 객체를 따라가요. 하지만 리모컨에 붙은 이름표(필드)는 리모컨 종류를 따라가요.',
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
  analogy: "오버로딩은 같은 이름의 요리를 재료만 바꿔 여러 개 만드는 것, 오버라이딩은 엄마 레시피를 내 방식으로 고쳐 쓰는 거예요. ==는 '같은 집 주소야?', equals는 '안에 든 내용이 같아?'를 묻는 거예요.",
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
  analogy: "추상 클래스는 '동물은 소리를 낸다'처럼 할 일만 정해 두고 방법은 비워 둔 숙제지예요. 자식이 빈칸을 채워야 해요. static 변수는 교실 칠판처럼 반 전체가 하나를 같이 보는 거라 한 명이 고치면 모두에게 바뀌어 보여요.",
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
  analogy: "기차 칸 떼어 내기예요. a[1:4]는 1번 칸부터 4번 칸 '앞'까지 떼어 내요. 4번 칸은 안 가져와요. append는 상자를 통째로 한 칸에 싣고, extend는 상자를 풀어서 물건을 한 칸씩 실어요.",
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
  analogy: "range(1, 5)는 1층에서 5층 '앞'까지, 즉 4층까지만 가는 엘리베이터예요. //는 몫, %는 나머지예요. 사탕 7개를 2명이 나누면 한 명당 3개(몫)이고 1개가 남아요(나머지).",
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
  analogy: "딕셔너리는 이름표가 붙은 서랍장이에요. d.get('a', 0)은 'a 서랍을 열되, 없으면 0이라고 해 줘'라는 뜻이에요. 컴프리헨션은 '0부터 4까지 중 짝수만 두 배로'를 한 줄 주문서로 쓰는 거예요.",
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
  analogy: "DB에 보내는 문장 틀이에요. GRANT는 친구에게 게임기를 빌려주는 것(TO 친구), REVOKE는 돌려받는 것(FROM 친구)이에요. UPDATE는 SET으로 '이렇게 바꿔', INSERT는 VALUES로 '이 값을 넣어'라고 말해요.",
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
  analogy: "CREATE TABLE은 새 공책 첫 장에 규칙을 적는 거예요. '학년은 1~4만(CHECK)', '이름은 꼭 쓰기(NOT NULL)'처럼요. UNION은 두 반 명단을 합치며 겹치는 이름을 한 번만 적는 것, INTERSECT는 두 반에 모두 있는 이름만 적는 거예요.",
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
  analogy: '도서관에서 책 고르기예요. 먼저 서가로 가서(FROM), 원하는 책만 뽑고(WHERE), 분야별로 묶고(GROUP BY), 3권 이상인 묶음만 남기고(HAVING), 제목만 적고(SELECT), 가나다순으로 정리해요(ORDER BY). 쓰는 순서와 하는 순서가 달라요.',
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
  analogy: "%는 몇 글자든 괜찮은 조커 카드, _는 딱 한 글자짜리 조커 카드예요. 그래서 LIKE '김%'는 '김으로 시작하는 이름 다 나와!'예요. COUNT(*)는 빈자리까지 센 반 인원, COUNT(점수)는 점수를 낸 사람만 센 거예요.",
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
  analogy: "조인은 학생 명단과 동아리 명단을 학번으로 이어 붙이는 거예요. INNER는 양쪽 명단에 다 있는 사람만, LEFT OUTER는 왼쪽 명단은 전부 남기고 동아리가 없으면 빈칸으로 둬요. 하위 질의는 '이것부터 알아 와!' 하는 심부름 속 심부름이에요.",
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
  analogy: '단어 카드 게임이에요. 앞면(설명)을 보고 뒷면(이름)을 바로 말할 수 있을 때까지 반복해요. 영어 약어는 철자 하나만 틀려도 오답이니 소리 내어 읽으며 외워요.',
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
  analogy: "ARP는 '이 전화번호(IP) 주인의 집 주소(MAC)가 어디야?'라고 동네에 외쳐 묻는 것, DHCP는 전학 온 학생에게 자리 번호를 자동으로 정해 주는 담임 선생님, DNS는 이름을 전화번호로 바꿔 주는 전화번호부예요.",
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

/* ───────── 모듈 설계 (결합도 · 응집도) ───────── */

const couplingTypes: Concept = {
  title: '결합도 6단계: 설명 보고 이름 쓰기',
  level: 3,
  summary: '모듈끼리 무엇을 주고받는지 보면 결합도가 보인다. 필요한 값만 주고받을수록 좋다',
  analogy: "짝꿍에게 연필을 빌려주는 방법 6가지예요. 연필 한 자루만 건네면(자료) 가장 깔끔하고, 필통을 통째로 건네면(스탬프) 조금 번거롭고, '이걸로 1번이면 그림, 2번이면 글씨 써'라고 방법까지 시키면(제어) 짝꿍이 내 말에 묶여요. 반 전체가 공용 공책 하나에 쓰고 지우면(공통) 누가 망쳤는지 모르고, 짝꿍 가방을 허락 없이 열어 필통 속을 바꾸면(내용) 최악이에요.",
  table: {
    head: ['결합도 (나쁨 → 좋음)', '이런 설명이 나오면', '쉬운 비유'],
    rows: [
      ['내용 (Content)', '다른 모듈의 내부 변수 · 기능을 직접 참조하거나 고침', '친구 가방을 몰래 열어 필통 속을 바꿈'],
      ['공통 (Common)', '전역 변수(공통 데이터 영역)를 여러 모듈이 함께 쓰고 고침', '반 전체가 공용 공책 하나에 쓰고 지움'],
      ['외부 (External)', '어떤 모듈이 선언한 데이터를 외부의 다른 모듈이 참조 (외부 파일 · 장치 형식 공유)', '다른 반 게시판 공지를 보고 따라 움직임'],
      ['제어 (Control)', '처리 방법을 지시하는 제어 신호(플래그)를 넘김 → 권리 전도 현상', "'1이면 더하고 2면 빼'라고 방법까지 시킴"],
      ['스탬프 (Stamp)', '배열 · 구조체 · 객체 같은 자료 구조를 통째로 넘기고 일부만 씀', '연필 하나 필요한데 필통을 통째로 건넴'],
      ['자료 (Data)', '꼭 필요한 값(매개변수)만 주고받음', '필요한 연필 한 자루만 건넴'],
    ],
  },
  code: `int total = 0;                          // 전역 변수

void add(int a, int b)                  // 자료: 값 두 개만 받음
    { printf("%d", a + b); }

void printKor(Student s)                // 스탬프: 구조체를 통째로 받고
    { printf("%d", s.kor); }            //         kor 하나만 씀

void calc(int a, int b, int mode) {     // 제어: mode가 처리 방법을 정함
    if (mode == 1) printf("%d", a + b);
    else           printf("%d", a - b);
}

void save(int s) { total += s; }        // 공통: 전역 변수 total을
void show() { printf("%d", total); }    //       여러 함수가 함께 고치고 읽음`,
  points: [
    '키워드로 찾기: "내부를 직접" → 내용, "전역 변수" → 공통, "외부에서 선언한 데이터" → 외부, "제어 신호 · 플래그" → 제어, "자료 구조 · 배열 · 구조체" → 스탬프, "값만" → 자료',
    '영문으로 쓰라고 하면 Content, Common, External, Control, Stamp, Data',
    '결합도는 낮을수록(약할수록) 좋은 설계 → 가장 좋은 것은 자료 결합도',
  ],
  tip: '강 → 약: 내공외제스자 (내용 · 공통 · 외부 · 제어 · 스탬프 · 자료)',
}

const cohesionTypes: Concept = {
  title: '응집도 7단계: 설명 보고 이름 쓰기',
  level: 3,
  summary: '한 모듈 안의 일들이 얼마나 한 목적으로 뭉쳐 있나. 뭉칠수록 좋다',
  analogy: "필통 정리로 생각해요. 연필깎이는 '연필 깎기' 한 가지만 해요(기능적, 최고). 빵 공장은 반죽 → 굽기 → 포장처럼 앞 단계 결과가 다음 단계 재료예요(순차적). 성적표 한 장으로 평균도 내고 등수도 매기면 같은 재료로 다른 일을 하는 거예요(교환적). 아무 물건이나 넣은 잡동사니 서랍은 최악이에요(우연적).",
  table: {
    head: ['응집도 (좋음 → 나쁨)', '이런 설명이 나오면', '쉬운 비유'],
    rows: [
      ['기능적 (Functional)', '모든 요소가 하나의 기능만 수행', '연필깎이: 연필 깎기만 함'],
      ['순차적 (Sequential)', '한 활동의 출력 데이터가 다음 활동의 입력 데이터', '빵 공장: 반죽 → 굽기 → 포장'],
      ['교환적 · 통신적 (Communicational)', '같은 입력 · 출력 데이터를 사용하는 서로 다른 기능', '성적표 한 장으로 평균 · 등수 · 그래프'],
      ['절차적 (Procedural)', '정해진 순서대로 실행되지만 데이터는 주고받지 않음', '아침 루틴: 세수 → 옷 입기 → 가방 챙기기'],
      ['시간적 (Temporal)', '같은 시간대에 함께 실행되는 기능 (초기화, 종료 처리)', '하교 종 치면: 창문 닫기, 불 끄기'],
      ['논리적 (Logical)', '비슷한 성격의 처리를 한 모듈에 모아 두고 골라서 실행', '청소 도구함: 빗자루 · 걸레 · 청소기'],
      ['우연적 (Coincidental)', '서로 관련 없는 요소들이 우연히 모임', '잡동사니 서랍'],
    ],
  },
  code: `순차적:  읽기() → 그 결과로 계산() → 그 결과로 출력()   (앞 출력 = 뒤 입력)
교환적:  성적표 하나로 → 평균 구하기 / 등수 매기기 / 그래프 그리기
절차적:  세수() → 옷 입기() → 가방 챙기기()   (순서만 있고 데이터는 따로)
시간적:  프로그램 시작할 때 → 변수 초기화(), 파일 열기(), 화면 지우기()
논리적:  출력(type) → type 1이면 화면, 2면 프린터, 3이면 파일`,
  points: [
    '순차 vs 교환: 데이터가 "이어서" 흐르면 순차, "같은 데이터를 함께" 쓰면 교환',
    '절차 vs 순차: 둘 다 순서가 있지만, 데이터를 넘겨주면 순차, 안 넘기면 절차',
    '응집도는 높을수록(강할수록) 좋은 설계 → 가장 좋은 것은 기능적 응집도',
  ],
  tip: '강 → 약: 기순교절시논우 (기능 · 순차 · 교환 · 절차 · 시간 · 논리 · 우연)',
}

/* ───────── 테스트 (블랙박스 · 커버리지 순서도) ───────── */

const blackBoxCases: Concept = {
  title: '블랙박스 테스트 기법과 테스트 값 고르기',
  level: 3,
  summary: '코드는 안 보고, 명세(입력 → 출력 규칙)만 보고 테스트 값을 고른다',
  analogy: "놀이기구 안내판에 '키 120cm 이상 탑승'이라고 적혀 있어요. 놀이기구 속 기계는 몰라도 돼요. 아주 작은 아이, 아주 큰 어른처럼 구간마다 한 명씩 태워 보는 것이 동등 분할, 119cm · 120cm처럼 딱 경계에 선 사람을 태워 보는 것이 경계값 분석이에요. 실수는 늘 경계에서 나거든요.",
  table: {
    head: ['기법', '이런 설명이 나오면'],
    rows: [
      ['동등(동치) 분할', '입력을 유효 · 무효 구간으로 나누고 구간마다 대표값으로 테스트'],
      ['경계값 분석', '구간의 경계와 그 바로 안팎 값으로 테스트 (오류는 경계에서 많이 난다)'],
      ['원인-결과 그래프', '입력(원인)과 출력(결과)의 관계를 그래프로 분석해 효용성 높은 케이스 선정'],
      ['오류 예측', '경험과 감각으로 오류가 날 만한 곳을 골라 테스트 (보충적 기법)'],
      ['비교 검사', '여러 버전의 프로그램에 같은 입력을 넣고 결과를 비교'],
      ['결정 테이블 · 상태 전이 · 페어와이즈', '조건 조합 표 / 상태 변화 따라가기 / 두 요소씩 모든 조합'],
    ],
  },
  code: `규칙: 점수 0~100, 60 이상 합격, 60 미만 불합격, 범위 밖은 오류

동등 분할 (구간마다 대표값 하나)
  구간:  무효(<0) | 불합격(0~59) | 합격(60~100) | 무효(>100)
  값  :    -10   |      30      |      80      |    150

경계값 분석 (경계와 바로 옆 값)
  값  :  -1, 0   |    59, 60    |   100, 101`,
  points: [
    '블랙박스 = 명세 기반: 동등 분할, 경계값 분석, 원인-결과 그래프, 오류 예측, 비교 검사, 결정 테이블, 상태 전이',
    '화이트박스 = 구조 기반: 기초 경로, 조건 · 루프 · 데이터 흐름 검사, 커버리지(구문 · 분기 · 조건)',
    '테스트 값 목록을 주고 기법을 물으면: 구간 대표값이면 동등 분할, 경계 근처 값이면 경계값 분석',
  ],
  tip: '"경계"가 보이면 경계값, "유효 · 무효 구간"이 보이면 동등 분할',
}

const coverageFlowGraph: Concept = {
  title: '순서도로 커버리지 경로 쓰기',
  level: 3,
  summary: '마름모(결정)에서 나가는 화살표를 전부 한 번씩 지나가는 경로를 노드 번호로 쓴다',
  analogy: "미로 지도를 들고 탐험하는 거예요. 구문 커버리지는 '모든 방에 한 번씩 들어가 보기', 분기 커버리지는 '갈림길이 나오면 왼쪽 길도, 오른쪽 길도 한 번씩 꼭 가 보기'예요. 갈림길 길을 빠짐없이 다 가 보면 방도 자연스럽게 다 들르게 돼요.",
  code: `   +-----> [1]           [n] = 처리,  <n> = 결정(마름모)
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
           [7]`,
  table: {
    head: ['커버리지', '이 그림에서 할 일', '답 예시'],
    rows: [
      ['구문 (문장)', '모든 노드를 한 번 이상 지나가기', '1234567'],
      ['분기 (결정)', '<2>의 T · F, <6>의 T · F 화살표를 모두 지나가기', '1234561, 124567'],
      ['순환 복잡도', 'V(G) = 간선 − 노드 + 2 = 결정 수 + 1', '8 − 7 + 2 = 3'],
    ],
  },
  points: [
    '1. 마름모(결정 노드)를 찾고, 나가는 화살표에 T · F를 표시한다',
    '2. 구문: 모든 노드에 체크가 될 때까지 경로를 만든다',
    '3. 분기: 결정 노드마다 T 화살표 · F 화살표 둘 다 체크될 때까지 경로를 만든다',
    '4. 경로는 시작 노드부터 노드 번호를 이어 쓴다. 되돌아가는 화살표(6 → 1)를 타면 1에서 끝낸다',
    '분기 커버리지를 만족하면 구문 커버리지도 자동으로 만족한다',
  ],
  tip: '분기 = 갈림길마다 양쪽 다. 답 경로 조합은 여러 개가 정답일 수 있다',
}

const stubDriver: Concept = {
  title: '스텁 · 드라이버와 통합 테스트 방식',
  level: 3,
  summary: '없는 하위 모듈 대신 스텁, 없는 상위 모듈 대신 드라이버',
  analogy: "연극 연습을 하는데 배우 몇 명이 아직 안 왔어요. 내가 불러야 할 배우가 없으면 대본만 읽어 주는 대역을 세워요(스텁 = 불려 오는 쪽 대역). 나를 무대로 불러 줄 배우가 없으면 큐 사인만 주는 대역을 세워요(드라이버 = 부르는 쪽 대역).",
  code: `          [Main]        ← 상향식: 아직 없으면 드라이버가 대신 호출
          /    \\
       [A]      [B]
                /  \\
            [B1]    [B2]  ← 하향식: 아직 없으면 스텁이 대신 응답

// 스텁: 정해진 값만 돌려주는 가짜 하위 모듈
int getDiscount(int price) { return 10; }        // 실제 계산 대신 고정값

// 드라이버: 시험할 모듈을 불러 주고 결과를 확인하는 가짜 상위 모듈
int main() { printf("%d", calcTotal(1000)); }    // calcTotal만 시험`,
  table: {
    head: ['통합 방식', '진행 순서', '필요한 가짜 모듈'],
    rows: [
      ['하향식 (Top-Down)', '상위 → 하위 (깊이 · 너비 우선)', '스텁 (Stub)'],
      ['상향식 (Bottom-Up)', '하위 → 상위, 하위 모듈을 클러스터로 묶음', '드라이버 (Driver)'],
      ['빅뱅', '모든 모듈을 한꺼번에 통합', '없음 (오류 위치 찾기 어려움)'],
      ['샌드위치 (혼합식)', '상위는 하향식 + 하위는 상향식', '스텁 + 드라이버'],
    ],
  },
  points: [
    '테스트 레벨 순서: 단위 → 통합 → 시스템 → 인수',
    'V-모델 짝꿍: 요구사항 분석 ↔ 인수 테스트, 분석 ↔ 시스템 테스트, 설계 ↔ 통합 테스트, 구현 ↔ 단위 테스트',
    '인수 테스트 종류: 사용자, 운영상, 계약, 규정, 알파(개발자 장소), 베타(사용자 장소)',
    '테스트 하네스: 스텁, 드라이버, 테스트 슈트, 테스트 케이스, 테스트 스크립트, 목 오브젝트처럼 테스트를 돕는 도구 묶음',
  ],
  tip: '하향식은 아래(下)가 비니까 스텁, 상향식은 위(上)가 비니까 드라이버',
}

/* ───────── DB 이론 (이상 현상 · 함수적 종속 · 반정규화) ───────── */

const anomaly: Concept = {
  title: '이상 현상 (삽입 · 삭제 · 갱신)',
  level: 3,
  summary: '한 표에 여러 정보가 중복되어 섞여 있을 때 생기는 세 가지 사고',
  analogy: "반 친구 이름과 방과후 수업을 한 장의 명단에 섞어 적었어요. 방과후를 아직 안 고른 전학생은 명단에 이름조차 못 올리고(삽입 이상), 방과후를 취소한 친구 줄을 지우면 그 친구가 우리 반이었다는 기록까지 사라지고(삭제 이상), 이름을 고칠 때 여러 줄 중 하나만 고치면 이름이 두 개가 돼요(갱신 이상).",
  code: `[수강]  기본키: (학번, 과목)
학번 | 이름   | 과목 | 성적
100  | 김철수 | DB   | A
100  | 김철수 | OS   | B
200  | 이영희 | DB   | B`,
  table: {
    head: ['이상 현상', '이 표에서 생기는 일'],
    rows: [
      ['삽입 이상', '수강 신청을 안 한 새 학생 300은 과목(기본키 일부)이 비어 있어 넣을 수 없다 → 원치 않는 값까지 넣어야 삽입 가능'],
      ['삭제 이상', '이영희가 DB를 취소해 그 행을 지우면 학생 이영희의 정보까지 함께 사라진다 → 연쇄 삭제'],
      ['갱신 이상', '김철수 이름을 바꿀 때 두 행 중 하나만 고치면 같은 학생의 이름이 서로 달라진다 → 불일치'],
    ],
  },
  points: [
    '원인: 서로 다른 주제(학생, 수강)가 한 표에 섞여 데이터가 중복되기 때문',
    '해결: 정규화로 표를 주제별로 나눈다 → [학생](학번, 이름), [수강](학번, 과목, 성적)',
  ],
  tip: '삽입 = 못 넣음, 삭제 = 같이 지워짐, 갱신 = 일부만 바뀌어 불일치',
}

const funcDependency: Concept = {
  title: '함수적 종속과 정규화 따라 하기',
  level: 3,
  summary: 'X를 알면 Y가 딱 하나로 정해질 때 "Y는 X에 함수적으로 종속된다(X → Y)"',
  analogy: '사물함 번호를 알면 주인이 딱 한 명으로 정해지죠? 이것이 함수적 종속이에요(사물함 번호 → 주인). 그런데 "번호표 두 장이 다 있어야 정해지는 것"을 한 장만으로 정해 버리면(부분 종속), 또 "A를 알면 B, B를 알면 C"처럼 징검다리로 정해지면(이행 종속) 표를 나눠 줘야 해요.',
  table: {
    head: ['종속', '뜻', '예 (키: 학번 + 과목코드)', '제거하는 정규형'],
    rows: [
      ['완전 함수 종속', '기본키 전체가 있어야 정해짐', '(학번, 과목코드) → 성적', '정상 (그대로 둠)'],
      ['부분 함수 종속', '기본키의 일부만으로 정해짐', '학번 → 이름', '2NF'],
      ['이행 함수 종속', 'A → B, B → C 이면 A → C', '학번 → 학과 → 학과장', '3NF'],
      ['결정자가 후보키 아님', '키가 아닌 속성이 다른 속성을 결정', '담당교수 → 과목', 'BCNF'],
      ['다치 종속', '하나의 값에 여러 값 묶음이 대응 (A ↠ B)', '교수 ↠ 취미', '4NF'],
    ],
  },
  code: `[원래 표] 학번 | 이름 | 학과 | 학과장 | 과목코드 | 성적     키: (학번, 과목코드)

① 2NF: 부분 종속 제거 (학번만으로 정해지는 이름 · 학과 · 학과장을 떼어 냄)
   [학생]  학번 | 이름 | 학과 | 학과장
   [수강]  학번 | 과목코드 | 성적

② 3NF: 이행 종속 제거 (학번 → 학과 → 학과장)
   [학생]  학번 | 이름 | 학과
   [학과]  학과 | 학과장
   [수강]  학번 | 과목코드 | 성적`,
  points: [
    'X → Y 에서 X는 결정자, Y는 종속자',
    '1NF: 모든 속성이 원자값(한 칸에 값 하나) / 2NF: 부분 종속 제거 / 3NF: 이행 종속 제거',
    '기본키가 속성 하나뿐이면 부분 종속이 생길 수 없다 → 1NF면 바로 2NF',
  ],
  tip: '부분은 2NF, 이행은 3NF, 결정자는 BCNF (도부이결다조)',
}

const denormalization: Concept = {
  title: '반정규화 (역정규화)',
  level: 2,
  summary: '조회 성능을 위해 정규화된 표를 일부러 합치거나, 나누거나, 중복을 추가하는 것',
  analogy: '정리 원칙대로라면 교과서는 책장, 필통은 서랍에 둬야 해요. 하지만 매일 아침 둘 다 꺼내야 한다면 가방에 같이 넣어 두는 게 빠르죠. 이것이 반정규화예요. 대신 교과서가 책장과 가방에 두 권 있으면 한쪽에만 필기해서 내용이 달라질 수 있어요(일관성 저하).',
  table: {
    head: ['기법', '방법'],
    rows: [
      ['테이블 병합', '1:1 관계, 1:M 관계, 슈퍼타입 · 서브타입 테이블을 하나로 합침'],
      ['테이블 분할', '수평 분할(행 기준, 예: 연도별) · 수직 분할(열 기준, 자주 쓰는 컬럼만 따로)'],
      ['중복 테이블 추가', '집계 테이블, 진행 테이블, 특정 부분만 담은 테이블을 따로 만듦'],
      ['컬럼 중복 (중복 속성 추가)', '조인을 줄이려고 다른 테이블의 컬럼을 복사, 계산값(합계 등) 컬럼 추가'],
      ['관계 중복', '여러 번 거쳐야 하는 관계에 바로 가는 관계를 추가'],
    ],
  },
  points: [
    '장점: 조인이 줄어 조회가 빨라진다 / 단점: 데이터 일관성 · 무결성이 깨질 위험, 저장 공간 증가',
    '먼저 인덱스, 뷰, 클러스터링, 파티션 같은 다른 방법을 검토하고, 그래도 안 되면 반정규화',
  ],
  tip: '정규화 = 쪼개서 중복 제거(무결성↑), 반정규화 = 합치고 중복 허용(성능↑)',
}

/* ───────── 인터페이스 (EAI · 전송 데이터 · 구현) ───────── */

const eaiTypes: Concept = {
  title: 'EAI 구축 유형 4가지',
  level: 3,
  summary: '기업 안의 여러 시스템을 어떤 모양으로 연결하나: 직접 · 허브 · 버스 · 혼합',
  analogy: "학교 반끼리 연락하는 방법이에요. 반마다 서로 직접 전화선을 잇는 것(Point-to-Point), 모든 연락을 방송실 한 곳을 거쳐 보내는 것(Hub & Spoke), 복도에 긴 게시판(버스)을 두고 각 반이 붙이고 읽는 것(Message Bus), 학년 안에서는 방송실 · 학년끼리는 게시판으로 섞어 쓰는 것(Hybrid)이에요.",
  code: `Point-to-Point        Hub & Spoke           Message Bus
  A ----- B             A     B             A    B    C
  | \\   / |              \\   /              |    |    |
  |   X   |              [Hub]            ==+====+====+== Bus
  | /   \\ |              /   \\              |    |
  C ----- D             C     D             D    E`,
  table: {
    head: ['유형', '연결 방식', '특징'],
    rows: [
      ['Point-to-Point', '애플리케이션끼리 1:1로 직접 연결', '가장 기본. 변경 · 재사용이 어렵고 연결 수가 많아짐'],
      ['Hub & Spoke', '가운데 허브가 모든 데이터 전송을 처리 (단일 접점)', '확장 · 유지보수 쉬움. 허브가 고장 나면 전체 장애'],
      ['Message Bus (ESB 방식)', '애플리케이션 사이에 미들웨어(버스)를 둠', '확장성이 뛰어나고 대용량 처리 가능'],
      ['Hybrid', '그룹 안은 Hub & Spoke, 그룹 사이는 Message Bus', '필요에 맞게 섞어 데이터 병목을 줄임'],
    ],
  },
  points: [
    'EAI (Enterprise Application Integration): 기업 내부 애플리케이션들을 통합하는 솔루션',
    'ESB (Enterprise Service Bus): 서비스(SOA) 중심으로, 표준 기반 버스를 통해 느슨하게 통합',
    'EAI는 애플리케이션 통합(허브 중심), ESB는 서비스 통합(버스 중심)',
  ],
  tip: '점 → 허브 → 버스 → 섞기 (Point-to-Point, Hub & Spoke, Message Bus, Hybrid)',
}

const transferData: Concept = {
  title: '인터페이스 전송 데이터 (JSON · XML · YAML · CSV)',
  level: 3,
  summary: '시스템끼리 주고받는 데이터의 모양. 공통부 + 개별부 + 종료부로 싸서 보낸다',
  analogy: "택배 상자예요. 상자 겉의 송장(보내는 곳 · 받는 곳 · 날짜)이 공통부, 안에 든 물건이 개별부, 마지막에 붙이는 테이프가 종료부예요. 물건을 싸는 방법도 여러 가지예요. JSON은 물건마다 이름표를 붙이고, XML은 작은 상자를 열고 닫는 태그로 감싸고, CSV는 쉼표로 줄줄이 적어요.",
  code: `JSON  { "id": 1, "name": "홍길동", "dept": "컴공" }

XML   <student><id>1</id><name>홍길동</name><dept>컴공</dept></student>

YAML  id: 1
      name: 홍길동
      dept: 컴공

CSV   id,name,dept
      1,홍길동,컴공`,
  table: {
    head: ['형식', '이런 설명이 나오면'],
    rows: [
      ['JSON', '속성 - 값 쌍(attribute-value pair)으로 된 사람이 읽기 쉬운 개방형 데이터 형식, AJAX에서 많이 사용'],
      ['XML', '사용자가 태그를 직접 정의하는 마크업 언어, HTML의 한계를 보완'],
      ['YAML', '들여쓰기로 구조를 표현하는 사람이 읽기 쉬운 데이터 직렬화 형식'],
      ['CSV', '값을 쉼표로 구분한 텍스트 형식'],
      ['AJAX', '페이지 전체를 새로 고치지 않고 필요한 부분만 비동기로 주고받는 기술 (형식이 아니라 방식)'],
    ],
  },
  points: [
    '전송 데이터 구조: 공통부(헤더: 송수신 시스템 · 일시 등 공통 정보) + 개별부(바디: 실제 업무 데이터) + 종료부(트레일러: 끝 표시)',
    '인터페이스 명세서에 적는 것: 송신 · 수신 시스템, 데이터 항목, 전송 주기, 방식(실시간 / 배치)',
  ],
  tip: 'JSON = 속성 - 값 쌍, XML = 태그, AJAX = 비동기',
}

const interfaceTools: Concept = {
  title: '인터페이스 구현 방법 · 보안 · 검증 도구',
  level: 3,
  summary: '직접 주고받거나 중간 테이블을 두고, 영역별로 보안을 걸고, 도구로 검증한다',
  analogy: "두 학교가 편지를 주고받는 방법이에요. 우체부가 바로 배달하는 방법(데이터 통신)과, 중간에 공용 우체통을 두고 한쪽은 넣고 한쪽은 꺼내 가는 방법(인터페이스 엔티티)이 있어요. 편지가 제대로 갔는지는 검사관(검증 도구)이 확인하고, 배달 중 상황은 CCTV(감시 도구)로 지켜봐요.",
  table: {
    head: ['검증 도구', '이런 설명이 나오면'],
    rows: [
      ['xUnit', 'Java(JUnit), C++(CppUnit), .Net(NUnit) 등 다양한 언어를 지원하는 단위 테스트 프레임워크'],
      ['STAF', '서비스 호출 · 컴포넌트 재사용 등 다양한 환경을 지원. 분산 환경의 각 테스트 대상에 데몬을 두고 테스트'],
      ['FitNesse', '웹 기반으로 테스트 케이스 설계 · 실행 · 결과 확인을 지원하는 프레임워크'],
      ['NTAF', 'NHN이 FitNesse의 협업 기능 + STAF의 재사용 · 확장성을 통합해 만든 자동화 프레임워크'],
      ['Selenium', '다양한 브라우저와 언어를 지원하는 웹 애플리케이션 테스트 프레임워크'],
      ['watir', 'Ruby 언어를 사용하는 웹 애플리케이션 테스트 프레임워크'],
    ],
  },
  points: [
    '구현 방법 ① 데이터 통신: JSON · XML 등을 AJAX, 소켓 등으로 직접 송수신 (실시간)',
    '구현 방법 ② 인터페이스 엔티티(테이블): 송신 쪽이 중간 테이블에 쓰고 수신 쪽이 읽어 감',
    '보안: 네트워크 영역(IPsec, SSL/TLS, S-HTTP) · 애플리케이션 영역(시큐어 코딩) · DB 영역(암호화, 접근 권한)',
    '감시 도구: APM(애플리케이션 성능 관리) — 스카우터(Scouter), 제니퍼(Jennifer)',
  ],
  tip: '검증 도구 6개: xUnit, STAF, FitNesse, NTAF, Selenium, watir',
}

/* ───────── 정보보안 기본 · VPN ───────── */

const securityBasics: Concept = {
  title: '정보보안 기본: 3요소 · AAA · 인증 유형',
  level: 3,
  summary: '기밀성 · 무결성 · 가용성을 지키고, 인증 → 인가 → 기록 순서로 사용자를 관리한다',
  analogy: "일기장을 지키는 세 가지 약속이에요. 아무나 못 읽게 자물쇠를 채우고(기밀성), 아무나 몰래 고치지 못하게 하고(무결성), 내가 보고 싶을 때는 언제든 꺼내 볼 수 있게 해요(가용성). 놀이공원에 비유하면 입구에서 '너 맞니?' 확인하고(인증), '이 놀이기구 탈 수 있어'를 정하고(인가), 몇 번 탔는지 기록해요(계정 관리).",
  table: {
    head: ['3요소', '뜻', '깨뜨리는 공격', '지키는 기술'],
    rows: [
      ['기밀성 (Confidentiality)', '인가된 사람만 볼 수 있음', '스니핑, 도청', '암호화, 접근 통제'],
      ['무결성 (Integrity)', '인가된 사람만 고칠 수 있음', '변조, 위조', '해시, 전자 서명'],
      ['가용성 (Availability)', '필요할 때 언제든 쓸 수 있음', 'DoS, DDoS', '백업, 이중화'],
    ],
  },
  points: [
    'AAA: 인증(Authentication, 너 누구야?) → 인가(Authorization, 무엇을 할 수 있어?) → 계정 관리(Accounting, 무엇을 했어? 기록)',
    '인증 유형: 지식 기반(비밀번호, PIN) · 소유 기반(OTP, 스마트카드) · 생체 기반(지문, 홍채) · 행위 기반(서명, 음성) · 위치 기반',
    '다중 인증(MFA): 서로 다른 유형을 2개 이상 조합 (비밀번호 + OTP)',
    '부인 방지: 보내 놓고 안 보냈다고 잡아뗄 수 없게 함 (전자 서명)',
    '위험 분석 요소: 자산, 위협, 취약점',
  ],
  tip: "3요소 '기무가', AAA '인증 · 인가 · 계정 관리'",
}

const vpn: Concept = {
  title: 'VPN과 터널링 프로토콜',
  level: 3,
  summary: '인터넷(공중망) 위에 암호화된 터널을 만들어 전용선처럼 쓰는 가상 사설망',
  analogy: '사람이 북적이는 큰길(인터넷) 가운데에 나만 다니는 비밀 터널을 뚫는 거예요. 터널로 보내는 편지는 겉봉투로 한 번 더 감싸고(캡슐화) 자물쇠를 채워서(암호화), 누가 중간에 봐도 내용을 알 수 없어요. 회사 밖에서도 회사 안에 있는 것처럼 일할 수 있어요.',
  code: `[재택 PC] ==== VPN 터널 (암호화) ==== [회사 VPN 장비] ── 사내망
            ↑ 실제로는 인터넷(공중망)을 지나가지만
              터널 안의 패킷은 암호화되어 남이 읽을 수 없다

IPsec 전송 모드: [원래 IP 헤더][ESP][데이터 🔒]
IPsec 터널 모드: [새 IP 헤더][ESP][원래 IP 헤더 + 데이터 🔒]`,
  table: {
    head: ['계층', '프로토콜', '특징'],
    rows: [
      ['2계층 (데이터 링크)', 'PPTP, L2F, L2TP', 'L2TP = PPTP + L2F. 자체 암호화가 없어 IPsec과 함께 사용'],
      ['3계층 (네트워크)', 'IPsec', 'AH(인증 · 무결성, 암호화 X), ESP(암호화 + 인증), IKE(키 교환)'],
      ['4계층 이상', 'SSL / TLS VPN', '웹 브라우저만 있으면 접속, 별도 프로그램 설치 불필요'],
    ],
  },
  points: [
    'IPsec 전송 모드: 데이터(페이로드)만 보호 → 호스트끼리 통신',
    'IPsec 터널 모드: 원래 IP 헤더까지 통째로 감싸고 새 헤더를 붙임 → 게이트웨이(본사 ↔ 지사) 사이',
    '터널링: 한 프로토콜의 패킷을 다른 프로토콜 패킷 안에 넣어(캡슐화) 보내는 기술',
  ],
  tip: 'AH = 인증만(Authentication Header), ESP = 암호화까지(Encapsulating Security Payload)',
}

/* ───────── 네트워크: 라우팅 프로토콜 ───────── */

const routing: Concept = {
  title: '라우팅 프로토콜 (RIP · OSPF · BGP)',
  level: 3,
  summary: '목적지까지 가장 좋은 길을 정하는 규칙. 내부(IGP)는 RIP · OSPF, 외부(EGP)는 BGP',
  analogy: "길 찾기 방법 세 가지예요. RIP은 이웃에게 '거기까지 몇 정거장이야?'라고 물어서 정거장 수(홉)만 세는 방법이에요. 15정거장이 넘으면 못 간다고 해요. OSPF는 동네 전체 지도를 받아 내비게이션처럼 가장 빠른 길(다익스트라)을 직접 계산해요. BGP는 나라와 나라(AS) 사이의 길을 안내해요.",
  table: {
    head: ['구분', 'RIP', 'OSPF', 'BGP'],
    rows: [
      ['범위', '내부 (IGP)', '내부 (IGP)', '외부 (EGP, AS 사이)'],
      ['알고리즘', '거리 벡터 (벨만-포드)', '링크 상태 (다익스트라)', '경로 벡터'],
      ['길 고르는 기준', '홉 수 (최대 15)', '대역폭 기반 비용(Cost)', '정책 · 경로 속성'],
      ['정보 교환', '30초마다 라우팅 테이블 전체', '변화가 있을 때만 (LSA)', '변화가 있을 때만'],
      ['규모', '소규모', '대규모, 영역(Area)으로 나눔', '인터넷 전체'],
    ],
  },
  code: `   [A] ── R1 ── R2 ── R3 ── [B]

RIP : 지나는 라우터 수(홉)만 셈 → 느린 길이라도 홉이 적으면 선택
OSPF: 링크마다 비용(대역폭)을 더해 가장 싼 길 선택`,
  points: [
    'AS (자율 시스템): 하나의 기관이 관리하는 네트워크 묶음 (예: 한 통신사)',
    '정적 라우팅: 관리자가 직접 경로 입력 / 동적 라우팅: 프로토콜이 자동으로 경로 계산',
    'RIP의 문제: 무한 카운트(Count to Infinity) → 스플릿 호라이즌 등으로 완화',
    '그 밖의 IGP: IGRP, EIGRP(시스코)',
  ],
  tip: 'RIP = 홉 15 · 거리 벡터, OSPF = 다익스트라 · 링크 상태, BGP = AS 사이',
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
    concepts: [securityBasics, vpn, securityTerms, w.malwareAttacks, w.malwareTypes, w.networkAttacks, w.crypto, w.accessControl, w.securityModels, w.securitySolutions, w.devSecurity],
  },
  {
    id: 'db-theory',
    name: 'DB 이론',
    concepts: [w.normalization, anomaly, funcDependency, denormalization, w.keys, w.integrity, w.relationalTerms, w.relationalAlgebra, w.transaction, w.recovery, w.erd],
  },
  {
    id: 'test',
    name: '테스트',
    concepts: [w.testTechniques, blackBoxCases, w.testCoverage, coverageFlowGraph, w.testLevels, stubDriver, w.testOracle, w.testTypes, w.qualityStandards],
  },
  {
    id: 'design',
    name: '디자인 패턴 · 모듈 설계',
    concepts: [w.designPatterns, w.coupling, couplingTypes, cohesionTypes, w.oop, w.architecture, w.ooAnalysis],
  },
  {
    id: 'interface',
    name: '인터페이스 · 통합 구현',
    concepts: [eaiTypes, transferData, interfaceTools, w.interfaceDesign, w.integration, w.interfaceImpl],
  },
  {
    id: 'os-network',
    name: 'OS · 네트워크 계산',
    concepts: [w.scheduling, w.pageReplacement, w.processState, w.memory, w.concurrency, w.diskScheduling, w.unix, w.subnetting, w.osi, routing, networkTerms],
  },
  { id: 'uml', name: 'UML · 요구사항', concepts: [w.uml, w.requirements, w.lifecycle, w.agile, w.analysisTools] },
  { id: 'new-tech', name: '신기술 용어', concepts: [w.newTech, w.cloud] },
]
