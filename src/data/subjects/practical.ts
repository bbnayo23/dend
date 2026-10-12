import type { Concept, Section, Subject } from '../../types'
import * as w from './written'

// 실기는 필기와 범위가 같다. 실기 전용(코드 · SQL 작성) 개념만 여기서 쓰고, 나머지는 필기 개념을 재사용한다.

/* ───────── 프로그래밍 (C · Java · Python) ───────── */

/* 1. 시작하기 · 언어 비교 */

const howToTrace: Concept = {
  title: '코드 문제 푸는 순서',
  level: 3,
  summary: '눈으로만 읽지 말고, 변수 값을 표에 적으며 한 줄씩 따라간다',
  analogy: '요리 레시피를 따라 할 때 재료를 넣을 때마다 메모하듯, 코드도 한 줄 실행할 때마다 변수 값을 표에 적어요. 머릿속으로만 계산하면 꼭 한 군데서 틀려요.',
  points: [
    '1. 언어 확인: printf면 C, System.out이면 Java, print면 Python → 같은 식도 언어마다 결과가 다를 수 있다',
    '2. 시작점 찾기: C · Java는 main부터, Python은 맨 위부터 (함수 · 클래스는 불릴 때까지 건너뛴다)',
    '3. 변수 추적표 그리기: 변수 이름을 가로로 쓰고, 값이 바뀔 때마다 아래 줄에 새 값을 적는다',
    '4. 함정에 동그라미: a++, 정수 나눗셈, break 없는 switch, 오버라이딩, 끝을 포함하지 않는 range',
    '5. 출력 칸 따로 두기: 출력할 때마다 그대로 옮겨 적는다 (공백 · 줄바꿈 · 쉼표까지)',
    '6. 검산: 반복 횟수와 마지막 변수 값이 말이 되는지 다시 본다',
  ],
  code: `int x = 1;
for (int i = 1; i <= 3; i++)
    x = x * 2 + i;
printf("%d", x);`,
  table: {
    head: ['단계', 'i', 'x', '출력'],
    rows: [
      ['시작', '-', '1', ''],
      ['1회차', '1', '1 × 2 + 1 = 3', ''],
      ['2회차', '2', '3 × 2 + 2 = 8', ''],
      ['3회차', '3', '8 × 2 + 3 = 19', ''],
      ['i = 4 → 종료', '4', '19', '19'],
    ],
  },
  tip: '머릿속으로 계산하지 말고 반드시 표에 적기',
}

const langCompare: Concept = {
  title: 'C · Java · Python 한눈에 비교',
  level: 3,
  summary: 'C는 손으로 직접, Java는 클래스 상자 안에, Python은 짧고 쉽게',
  analogy: "세 언어는 같은 요리를 하는 세 요리사예요. C 요리사는 불 세기와 그릇 위치(메모리 주소)까지 손수 정하고 설거지(free)도 직접 해요. Java 요리사는 모든 재료를 정해진 도시락통(클래스)에 담아야 하고, 설거지는 로봇(가비지 컬렉터)이 해 줘요. Python 요리사는 '볶음밥 하나!'처럼 짧게 말해도 알아듣는 요리사예요.",
  table: {
    head: ['구분', 'C', 'Java', 'Python'],
    rows: [
      ['성격', '절차적 (순서대로 명령)', '객체지향 (모든 코드가 클래스 안)', '스크립트 (짧고 쉬운 문법)'],
      ['실행 방식', '컴파일 → 기계어로 바로 실행', '컴파일 → 바이트코드 → JVM이 실행', '인터프리터가 한 줄씩 실행'],
      ['변수 선언', 'int a = 1; (타입 필수)', 'int a = 1; (타입 필수)', 'a = 1 (타입 안 씀)'],
      ['문장 끝', '; 필수', '; 필수', '줄바꿈이 끝 (; 없음)'],
      ['블록 표시', '{ }', '{ }', ': 과 들여쓰기'],
      ['출력', 'printf("%d", a);', 'System.out.println(a);', 'print(a)'],
      ['참 · 거짓', '0이면 거짓, 나머지는 참 (1 · 0으로 출력)', 'true / false', 'True / False (첫 글자 대문자)'],
      ['논리 연산', '&& || !', '&& || !', 'and or not'],
      ['조건 분기', 'if / else if / switch', 'if / else if / switch', 'if / elif / else'],
      ['증감 연산자', 'a++ ++a 있음', 'a++ ++a 있음', '없음 → a += 1'],
      ['7 / 2', '3 (정수끼리면 몫)', '3 (정수끼리면 몫)', '3.5 (몫은 7 // 2)'],
      ['문자열', "char 배열, 끝에 '\\0'", 'String 객체', "str ('a' · \"a\" 둘 다 가능)"],
      ['배열', 'int a[5]; 크기 고정', 'int[] a = new int[5]; a.length', '리스트 [1, 2] 크기 자유, len(a)'],
      ['포인터', '있음 (* · &)', '없음 (참조만)', '없음'],
      ['메모리 정리', 'free()로 직접', '가비지 컬렉터가 자동', '가비지 컬렉터가 자동'],
      ['클래스', '없음 (struct만)', '있음 (this)', '있음 (self)'],
      ['주석', '// · /* */', '// · /* */', '#'],
    ],
  },
  tip: 'C만 포인터가 있고, Python만 타입 · 세미콜론 · 중괄호 · ++가 없다',
}

const langSameCode: Concept = {
  title: '같은 문제를 세 언어로 쓰기',
  level: 2,
  summary: '1부터 10까지 짝수의 합을 C · Java · Python으로 나란히 비교한다',
  analogy: "'사과 주세요'를 한국어 · 영어 · 일본어로 말하는 것과 같아요. 뜻(알고리즘)은 똑같고 말투(문법)만 달라요. 그래서 한 언어로 풀 줄 알면 다른 언어는 말투만 바꿔 읽으면 돼요.",
  code: `// ── C ──
#include <stdio.h>
int main() {
    int sum = 0;
    for (int i = 1; i <= 10; i++) {
        if (i % 2 == 0) sum += i;
    }
    printf("%d\\n", sum);          // 30
    return 0;
}

// ── Java ──
public class Main {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 1; i <= 10; i++) {
            if (i % 2 == 0) sum += i;
        }
        System.out.println(sum);   // 30
    }
}

# ── Python ──
total = 0
for i in range(1, 11):    # 11은 포함 X → 1 ~ 10
    if i % 2 == 0:
        total += i
print(total)              # 30`,
  points: [
    '시작점: C는 main 함수, Java는 클래스 안의 main 메소드, Python은 맨 위 줄부터',
    'for (i = 1; i <= 10; i++) 와 for i in range(1, 11) 은 같은 반복 (range는 끝 숫자 직전까지)',
    'Python은 { } 대신 콜론(:)과 들여쓰기로 블록을 나눈다',
    'Python의 sum은 내장 함수 이름이라 변수 이름으로 total을 썼다',
  ],
  tip: '알고리즘은 같고 문법만 다르다 → 언어 차이 포인트만 따로 외우기',
}

const langDiffResult: Concept = {
  title: '같은 식, 언어별로 다른 결과',
  level: 3,
  summary: '나눗셈 · 나머지 · 참거짓 · 문자열 더하기는 언어마다 결과가 다르다',
  analogy: "같은 손짓이라도 나라마다 뜻이 다르듯, 7 / 2도 C · Java에서는 '몫만 줘'(3), Python에서는 '정확히 나눠 줘'(3.5)라는 뜻이에요. 문제를 보면 언어부터 확인해야 하는 이유예요.",
  table: {
    head: ['식', 'C', 'Java', 'Python'],
    rows: [
      ['7 / 2', '3', '3', '3.5'],
      ['7 // 2', '(없음)', '(없음)', '3'],
      ['7.0 / 2', '3.5', '3.5', '3.5'],
      ['-7 / 2', '-3 (0 쪽으로 버림)', '-3', '-3.5 (-7 // 2 는 -4)'],
      ['-7 % 2', '-1', '-1', '1'],
      ['2 ** 3', '(없음)', '(없음)', '8'],
      ['10 > 5 출력', '1', 'true', 'True'],
      ['if (0) / if 0:', '거짓', '컴파일 오류 (boolean만 가능)', '거짓 (빈 문자열 · 빈 리스트도 거짓)'],
      ["'A' + 1", '66 (%c면 B)', '66 (char → int)', '오류 (문자열 + 숫자)'],
      ['"1" + 2 + 3', '(불가)', '"123"', '오류'],
      ['1 + 2 + "3"', '(불가)', '"33"', '오류'],
      ['"ab" * 3', '(불가)', '(불가)', '"ababab"'],
      ['a++', '가능', '가능', '문법 오류 (a += 1)'],
      ['int 최댓값을 넘으면', '오버플로 (보통 음수로 넘어감)', '음수로 넘어감', '한계 없음'],
    ],
  },
  tip: 'Python만 / 가 실수 나눗셈, Python만 음수 나머지가 양수',
}

const printFormats: Concept = {
  title: '출력 함수 비교 (printf · println · print)',
  level: 3,
  summary: '출력 형식이 답의 일부다. 서식 지정자 · 줄바꿈 · 공백을 정확히 지킨다',
  analogy: "printf의 %d, %c 같은 기호는 '여기에 들어갈 손님 자리'예요. %d 자리에는 숫자 손님, %c 자리에는 글자 손님, %s 자리에는 문장 손님이 앉아요. 숫자 5를 %5d 자리에 앉히면 5칸짜리 긴 의자의 오른쪽 끝에 앉아요.",
  code: `// ── C: printf 서식 지정자 ──
printf("%d", 65);        // 65      정수
printf("%c", 65);        // A       문자 (아스키 65)
printf("%s", "Hi");      // Hi      문자열
printf("%f", 3.5);       // 3.500000 (기본 소수점 6자리)
printf("%.2f", 3.14159); // 3.14    소수점 2자리 (반올림)
printf("%5d|", 42);      // "   42|" 5칸, 오른쪽 정렬
printf("%-5d|", 42);     // "42   |" 5칸, 왼쪽 정렬
printf("%05d", 42);      // 00042   빈칸을 0으로
printf("%o %x", 10, 255);// 12 ff   8진수, 16진수

// ── Java ──
System.out.print("A");          // 줄바꿈 없음
System.out.println("B");        // 출력 후 줄바꿈 → AB
System.out.printf("%d%n", 7);   // C처럼 서식 사용 (%n은 줄바꿈)
System.out.println("1" + 2 + 3);// 123 (문자열을 만나면 이어 붙이기)
System.out.println(1 + 2 + "3");// 33  (왼쪽부터: 1 + 2 = 3 먼저)

# ── Python ──
print(1, 2, 3)            # 1 2 3  (쉼표는 공백으로 출력)
print(1, 2, sep="-")      # 1-2    (sep: 사이에 넣을 글자)
print("A", end="")        # 줄바꿈 대신 "" → 다음 출력이 바로 붙음
print(f"{3.14159:.2f}")   # 3.14   (f-문자열)
print("%d개" % 5)         # 5개`,
  points: [
    'C printf와 Java print는 자동 줄바꿈이 없다 → \\n이 있는지 꼭 확인',
    'Java println과 Python print는 끝에 줄바꿈이 자동으로 붙는다',
    'Java 문자열 + 는 왼쪽부터 계산: 숫자끼리는 더하고, 문자열을 만난 뒤부터는 이어 붙인다',
  ],
  tip: '답을 쓸 때 공백 · 줄바꿈 · 소수점 자릿수까지 출력 그대로',
}

/* 2. 계산 유형별 풀이 */

const calcDivMod: Concept = {
  title: '몫과 나머지 (/ · %)',
  level: 3,
  summary: '정수 ÷ 정수는 몫만 남고, %는 나머지. 나머지로 짝수 · 배수 · 끝자리를 알아낸다',
  analogy: '사탕 17개를 5명에게 똑같이 나눠 주면 한 명당 3개(몫 17 / 5)씩 받고 2개가 남아요(나머지 17 % 5). 나머지가 0이면 딱 나누어떨어진 거라 5의 배수예요.',
  points: [
    '정수끼리 / 는 몫만 남는다 (소수점 버림): 17 / 5 = 3 (C · Java)',
    '하나라도 실수면 실수 나눗셈: 17.0 / 5 = 3.4, (double)17 / 5 = 3.4',
    '괄호 안이 먼저: (double)(17 / 5) = 3.0 → 이미 몫 3이 된 뒤에 실수로 바꾼다',
    '% 의 쓰임새: n % 2 == 0 이면 짝수, n % 3 == 0 이면 3의 배수, n % 10 은 끝자리 숫자',
    '작은 수 % 큰 수 = 작은 수 그대로: 3 % 5 = 3',
    '음수: C · Java는 나머지 부호가 앞 수를 따르고(-7 % 3 = -1), Python은 뒤 수를 따른다(-7 % 3 = 2)',
  ],
  code: `검산 공식: 나눠지는 수 = 나누는 수 × 몫 + 나머지
17 = 5 × 3 + 2      → 17 / 5 = 3, 17 % 5 = 2

int a = 17, b = 5;
printf("%d %d ", a / b, a % b);    // 3 2
printf("%.1f ", (double)a / b);    // 3.4
printf("%.1f", (double)(a / b));   // 3.0`,
  table: {
    head: ['식', 'C · Java', 'Python', '이유'],
    rows: [
      ['-7 ÷ 2 의 몫', '-7 / 2 = -3', '-7 // 2 = -4', 'C · Java는 0 쪽으로 버림, Python은 더 작은 쪽으로 내림'],
      ['-7 ÷ 2 의 나머지', '-7 % 2 = -1', '-7 % 2 = 1', 'C: 2 × (-3) + (-1) = -7, Python: 2 × (-4) + 1 = -7'],
      ['7 ÷ -2 의 나머지', '7 % -2 = 1', '7 % -2 = -1', '검산 공식에 넣으면 둘 다 맞는다'],
    ],
  },
  tip: '헷갈리면 "나눠지는 수 = 나누는 수 × 몫 + 나머지"에 넣어 검산',
}

const calcIncrement: Concept = {
  title: '증감 연산자 (a++ · ++a)',
  level: 3,
  summary: '++가 뒤에 붙으면 먼저 쓰고 올리고, 앞에 붙으면 먼저 올리고 쓴다',
  analogy: '번호표 기계예요. a++는 지금 번호표를 손님에게 주고 나서 기계 숫자를 하나 올려요. ++a는 기계 숫자를 먼저 올리고 그 번호표를 줘요. 어느 쪽이든 기계 숫자(a)는 결국 1 올라가요. 다른 건 손님이 받은 번호(식의 값)뿐이에요.',
  points: [
    'a++; 나 ++a; 처럼 혼자 한 줄에 있으면 결과가 똑같다',
    '다른 식 안에 있을 때만 차이가 난다: b = a++ → b는 옛날 값, b = ++a → b는 새 값',
    '풀이법: 식을 두 줄로 쪼갠다 → b = a++ 는 ① b = a ② a = a + 1 / b = ++a 는 ① a = a + 1 ② b = a',
    '조건식 안의 i++: 비교는 옛날 값으로 하고, 비교가 끝나면 (거짓이어도) 바로 1 올린다',
    'Python에는 ++가 없다 → a += 1',
  ],
  code: `int a = 5, b, c;
b = a++;     // ① b = 5   ② a = 6
c = ++a;     // ① a = 7   ② c = 7
printf("%d %d %d\\n", a, b, c);   // 7 5 7

int i = 0, x = 0;
while (i++ < 3)   // 옛날 값으로 비교한 뒤 바로 +1
    x += i;       // 여기서 i는 이미 올라간 값
printf("%d %d", x, i);           // 6 4`,
  table: {
    head: ['비교할 때 i', '비교 결과', '비교 후 i', 'x'],
    rows: [
      ['0', '0 < 3 참', '1', '0 + 1 = 1'],
      ['1', '1 < 3 참', '2', '1 + 2 = 3'],
      ['2', '2 < 3 참', '3', '3 + 3 = 6'],
      ['3', '3 < 3 거짓 → 종료', '4', '6'],
    ],
  },
  tip: '조건이 거짓인 마지막 비교에서도 i++는 실행된다 → 마지막 i는 4',
}

const calcAccumulate: Concept = {
  title: '누적: 합계 · 곱 · 개수 세기',
  level: 3,
  summary: '시작값(합 0, 곱 1, 개수 0)을 먼저 확인하고, 회차마다 바뀌는 값을 표에 적는다',
  analogy: '저금통이에요. 합계는 빈 저금통(0)에 동전을 하나씩 넣는 것, 곱은 1에서 시작해 2배, 3배로 불리는 것, 개수 세기는 조건에 맞을 때마다 바를 정(正) 자를 한 획씩 긋는 거예요. 곱을 0에서 시작하면 무엇을 곱해도 0이라 저금통이 영원히 비어 있어요.',
  points: [
    '합계: sum = 0 → sum += i / 곱(팩토리얼): fact = 1 → fact *= i / 개수: cnt = 0 → 조건이 참일 때 cnt++',
    '반복 횟수: for (i = a; i <= b; i++) 는 b - a + 1번, i < b 이면 b - a번',
    '간격이 있으면 직접 나열: for (i = 1; i <= 10; i += 3) → 1, 4, 7, 10 (4번)',
    '1부터 n까지의 합 = n × (n + 1) / 2 → 1~10은 55, 1~100은 5050',
    '반복이 끝난 뒤 i 값 = 조건을 처음 어긴 값 (i <= 5 이면 끝난 뒤 i는 6)',
  ],
  code: `int i, sum = 0, fact = 1, cnt = 0;
for (i = 1; i <= 5; i++) {
    sum += i;               // 합계
    fact *= i;              // 곱 (5! = 120)
    if (i % 2 == 1) cnt++;  // 홀수 개수
}
printf("%d %d %d %d", sum, fact, cnt, i);`,
  table: {
    head: ['i', 'sum', 'fact', 'cnt'],
    rows: [
      ['시작', '0', '1', '0'],
      ['1', '1', '1', '1'],
      ['2', '3', '2', '1'],
      ['3', '6', '6', '2'],
      ['4', '10', '24', '2'],
      ['5', '15', '120', '3'],
      ['6 → 종료', '15', '120', '3'],
    ],
  },
  tip: '출력 15 120 3 6 — 끝난 뒤 i는 6',
}

const loopControl: Concept = {
  title: '반복문과 continue / break',
  level: 3,
  summary: 'continue는 이번 회차만 건너뛰고, break는 반복문을 아예 빠져나간다',
  analogy: "계단 오르기 놀이예요. continue는 '이 계단은 밟지 말고 다음 계단으로!', break는 '놀이 끝, 계단에서 내려와!'예요.",
  points: [
    'continue: 아래 줄을 건너뛰고 for의 증감식(i++)으로 간다',
    'break: 가장 가까운 반복문 하나만 빠져나간다 (2중 반복이면 안쪽만)',
    '조건을 검사하는 순서가 중요하다: 아래 코드는 continue 검사가 break보다 먼저',
  ],
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

const calcNested: Concept = {
  title: '2중 반복문 (반복 안의 반복)',
  level: 2,
  summary: '바깥이 한 번 돌 때 안쪽은 처음부터 끝까지 다 돈다',
  analogy: '시계의 시침과 분침이에요. 시침(바깥 반복)이 한 칸 움직이려면 분침(안쪽 반복)이 한 바퀴를 다 돌아야 해요. 그래서 전체 횟수는 바깥 횟수 × 안쪽 횟수예요.',
  points: [
    '안쪽 끝이 고정이면: 실행 횟수 = 바깥 횟수 × 안쪽 횟수 (3 × 4 = 12번)',
    '안쪽 끝이 바깥 변수 i에 묶이면 (j <= i): 회차마다 횟수가 달라짐 → 1 + 2 + 3 + …',
    '별찍기 문제는 바깥 = 줄 번호, 안쪽 = 그 줄에 찍는 개수',
    '안쪽에서 break하면 안쪽만 멈추고 바깥은 다음 회차로 간다',
  ],
  code: `int i, j, cnt = 0;
for (i = 1; i <= 3; i++) {
    for (j = 1; j <= i; j++) {
        printf("*");
        cnt++;
    }
    printf("\\n");
}
printf("%d", cnt);

/* 출력
*
**
***
6        */`,
  table: {
    head: ['i (줄)', 'j가 도는 값', '찍힌 별', 'cnt'],
    rows: [
      ['1', '1', '*', '1'],
      ['2', '1, 2', '**', '3'],
      ['3', '1, 2, 3', '***', '6'],
    ],
  },
  tip: 'j <= i 처럼 안쪽 끝이 i에 묶이면 1 + 2 + 3 = 6번',
}

const calcDigits: Concept = {
  title: '자릿수 분해 (% 10 · / 10)',
  level: 3,
  summary: 'n % 10은 맨 끝 숫자, n / 10은 맨 끝 숫자를 떼어 낸 수',
  analogy: "숫자 기차에서 맨 뒤 칸을 떼어 내는 놀이예요. % 10은 '맨 뒤 칸에 누가 탔어?' 하고 보는 것이고, / 10은 '맨 뒤 칸을 떼어 버려!'예요. 기차가 0이 될 때까지 반복하면 모든 칸을 하나씩 볼 수 있어요.",
  points: [
    '1234 % 10 = 4 (끝자리) / 1234 / 10 = 123 (끝자리 삭제)',
    '자릿수 합: sum += n % 10; n /= 10;',
    '숫자 뒤집기: r = r * 10 + n % 10; → r을 한 칸 왼쪽으로 밀고 끝 숫자를 붙인다',
    '자릿수 개수: n이 0이 될 때까지 나눈 횟수',
    '회문(앞뒤가 같은 수) 판별: 뒤집은 수 == 원래 수 (원래 수는 미리 따로 저장)',
    'Python은 n // 10 을 써야 정수 (n / 10 은 123.4 같은 실수)',
  ],
  code: `int n = 1234, sum = 0, r = 0;
while (n > 0) {
    sum += n % 10;          // 끝 숫자 더하기
    r = r * 10 + n % 10;    // 끝 숫자를 r 뒤에 붙이기
    n /= 10;                // 끝 숫자 떼기
}
printf("%d %d", sum, r);`,
  table: {
    head: ['n', 'n % 10', 'sum', 'r', 'n / 10'],
    rows: [
      ['1234', '4', '4', '4', '123'],
      ['123', '3', '7', '43', '12'],
      ['12', '2', '9', '432', '1'],
      ['1', '1', '10', '4321', '0 → 종료'],
    ],
  },
  tip: '출력 10 4321 — % 10은 보기, / 10은 떼기',
}

const calcBase: Concept = {
  title: '진법 변환 (2진수 · 8진수 · 16진수)',
  level: 3,
  summary: '10진수 → 2진수는 2로 계속 나누고 나머지를 거꾸로 읽는다',
  analogy: '2진수 자리는 오른쪽부터 1원, 2원, 4원, 8원, 16원…처럼 두 배씩 커지는 동전이에요. 동전마다 1개를 내거나(1) 안 내거나(0) 둘 중 하나예요. 13원을 8원 + 4원 + 1원으로 내면 8원(1) 4원(1) 2원(0) 1원(1) → 1101이 돼요.',
  points: [
    '10진수 → 2진수: 2로 나눈 나머지를 아래에서 위로(거꾸로) 읽기',
    '2진수 → 10진수: 1이 있는 자리의 값(… 8 4 2 1)을 더하기',
    '2진수 → 8진수: 오른쪽부터 3자리씩 끊기 / 2진수 → 16진수: 4자리씩 끊기',
    '16진수 글자: 10 = A, 11 = B, 12 = C, 13 = D, 14 = E, 15 = F',
    '코드에서는 나머지를 배열에 저장한 뒤 거꾸로(i--) 출력하는 모양으로 나온다',
    "Python: bin(13) = '0b1101', int('1101', 2) = 13, hex(255) = '0xff', oct(8) = '0o10'",
  ],
  code: `13을 2진수로                 2진수 1101을 10진수로
13 ÷ 2 = 6 … 1   ↑           자리값  8  4  2  1
 6 ÷ 2 = 3 … 0   │ 아래에서     비트  1  1  0  1
 3 ÷ 2 = 1 … 1   │ 위로 읽기   → 8 + 4 + 1 = 13
 1 ÷ 2 = 0 … 1   │
→ 1101

int n = 13, bin[8], i = 0;
while (n > 0) {
    bin[i++] = n % 2;   // 나머지를 1, 0, 1, 1 순서로 저장
    n /= 2;
}
for (i = i - 1; i >= 0; i--)   // 저장한 순서의 거꾸로 출력
    printf("%d", bin[i]);       // 1101`,
  table: {
    head: ['10진수', '2진수', '8진수', '16진수'],
    rows: [
      ['10', '1010', '12', 'A'],
      ['13', '1101', '15', 'D'],
      ['15', '1111', '17', 'F'],
      ['16', '1 0000', '20', '10'],
      ['255', '1111 1111', '377', 'FF'],
    ],
  },
  tip: '자리값 1 2 4 8 16 32 64 128을 외워 두면 빠르다',
}

const calcBit: Concept = {
  title: '비트 연산 (& | ^ ~ << >>)',
  level: 3,
  summary: '두 수를 2진수로 바꿔 세로로 맞춰 쓰고, 한 자리씩 계산한다',
  analogy: '비트는 전등 스위치 여러 개예요. &는 두 스위치가 모두 켜져야 불이 켜지고, |는 하나만 켜져도 켜지고, ^는 서로 다를 때만 켜져요. ~는 모든 스위치를 반대로 뒤집는 거예요. <<는 스위치를 왼쪽으로 한 칸씩 밀어서 값을 두 배로 만들어요.',
  points: [
    '1단계: 두 수를 2진수로 바꾸고 자릿수를 맞춰 세로로 쓴다',
    '& (AND): 둘 다 1이면 1 / | (OR): 하나라도 1이면 1 / ^ (XOR): 서로 다르면 1',
    '~a = -(a + 1) → ~5 = -6, ~12 = -13 (비트를 모두 뒤집으면 음수가 된다)',
    'a << n = a × 2ⁿ / a >> n = a ÷ 2ⁿ 의 몫',
    '우선순위: 산술 > 시프트 > 비교 > & > ^ > | → 1 << 2 + 1 은 1 << 3 = 8',
    '논리 연산과 구별: 6 && 3 = 1 (둘 다 참), 6 & 3 = 2 (비트 계산)',
  ],
  code: `int a = 12, b = 10;   // 12 = 1100, 10 = 1010

    1100         1100         1100
  & 1010       | 1010       ^ 1010
  ------       ------       ------
    1000 = 8     1110 = 14    0110 = 6

a << 2    // 1100 → 110000 = 48  (12 × 4)
a >> 2    // 1100 → 11     = 3   (12 ÷ 4)
~a        // -13                 (-(12 + 1))`,
  table: {
    head: ['A', 'B', 'A & B', 'A | B', 'A ^ B'],
    rows: [
      ['0', '0', '0', '0', '0'],
      ['0', '1', '0', '1', '1'],
      ['1', '0', '0', '1', '1'],
      ['1', '1', '1', '1', '0'],
    ],
  },
  tip: '^는 "다르면 1" — 같은 수로 ^를 두 번 하면 원래대로 (a ^ b ^ b = a)',
}

const calcAscii: Concept = {
  title: '문자와 아스키 코드',
  level: 2,
  summary: "문자는 사실 숫자다. 'A' = 65, 'a' = 97, '0' = 48만 외우면 나머지는 더해서 구한다",
  analogy: "컴퓨터는 글자를 모르고 숫자만 알아요. 그래서 글자마다 번호표를 붙여 두었어요. 'A'는 65번, 'B'는 66번…처럼 알파벳 순서대로 번호가 1씩 커져요. 소문자 반은 대문자 반보다 번호가 딱 32씩 뒤에 있어요.",
  points: [
    "'A' = 65 ~ 'Z' = 90 / 'a' = 97 ~ 'z' = 122 / '0' = 48 ~ '9' = 57 / 공백 = 32",
    '대문자 → 소문자: + 32 / 소문자 → 대문자: - 32',
    "문자 숫자 → 진짜 숫자: '7' - '0' = 7",
    "알파벳 순서 번호: ch - 'A' (A는 0, C는 2)",
    'C: %c는 글자로, %d는 번호로 출력 / Java: char + int 는 int → (char)를 붙여야 글자',
    "Python: ord('A') = 65 (글자 → 번호), chr(65) = 'A' (번호 → 글자)",
  ],
  code: `char c = 'A';
printf("%c %d ", c + 2, c + 2);  // C 67
printf("%c ", 'b' - 32);         // B
printf("%d", '7' - '0');         // 7

// Java
char ch = 'A';
System.out.print(ch + 1);          // 66 (int로 계산됨)
System.out.print((char)(ch + 1));  // B

# Python
print(ord('a'), chr(ord('a') + 1)) # 97 b`,
  tip: "'A' 65 · 'a' 97 · '0' 48 — 대소문자 차이는 32",
}

const calcPrime: Concept = {
  title: '약수 · 소수 · 최대공약수',
  level: 2,
  summary: '나머지가 0이면 약수. 약수가 1과 자기 자신뿐이면 소수',
  analogy: '쿠키 12개를 남김없이 똑같이 나눠 줄 수 있는 사람 수가 약수예요 (1, 2, 3, 4, 6, 12명). 소수는 7개처럼 1명이나 7명에게만 나눠 줄 수 있는 고집쟁이 숫자예요. 최대공약수는 두 봉지의 쿠키를 둘 다 남김없이 나눌 수 있는 가장 많은 사람 수예요.',
  points: [
    '약수 판별: n % i == 0',
    '소수 판별: 2부터 n - 1까지 나누어떨어지는 수가 하나도 없으면 소수 (1은 소수가 아니다)',
    '20 이하 소수: 2 3 5 7 11 13 17 19 → 8개, 합 77',
    '완전수: 자기 자신을 뺀 약수의 합 = 자기 자신 (6 = 1 + 2 + 3, 28)',
    '최대공약수(유클리드 호제법): a를 b로 나눈 나머지로 (a, b) → (b, 나머지)를 반복, 나머지가 0이 되면 그때 a가 답',
    '최소공배수 = a × b ÷ 최대공약수',
  ],
  code: `// 소수 판별
int isPrime(int n) {
    if (n < 2) return 0;
    for (int i = 2; i < n; i++)
        if (n % i == 0) return 0;   // 하나라도 나누어떨어지면 소수 아님
    return 1;
}

// 최대공약수 (유클리드 호제법)
int gcd(int a, int b) {
    while (b != 0) {
        int t = a % b;
        a = b;
        b = t;
    }
    return a;
}
gcd(48, 18)`,
  table: {
    head: ['a', 'b', 'a % b'],
    rows: [
      ['48', '18', '12'],
      ['18', '12', '6'],
      ['12', '6', '0'],
      ['6', '0', '종료 → 답 6'],
    ],
  },
  tip: '최대공약수 6, 최소공배수 48 × 18 ÷ 6 = 144',
}

const calcArray: Concept = {
  title: '배열: 최댓값 · 교환 · 정렬',
  level: 3,
  summary: '배열 문제는 회차마다 칸 그림을 새로 그려서 값이 어떻게 바뀌는지 본다',
  analogy: "줄 서 있는 친구들이에요. 최댓값 찾기는 첫 친구를 '지금까지 제일 큰 친구'로 정해 두고 한 명씩 키를 비교하는 것, 교환(swap)은 두 친구가 자리를 바꿀 때 한 명이 잠깐 빈 의자(temp)에 앉아 있는 것, 버블 정렬은 옆 친구와 키를 비교해 큰 친구를 뒤로 보내는 걸 반복하는 거예요.",
  points: [
    '최댓값: max = a[0]에서 시작 → 더 크면 바꾸기 (> 인지 >= 인지 확인)',
    '교환은 3줄: t = a; a = b; b = t;',
    '배열 뒤집기: 앞 i번과 뒤 (n - 1 - i)번을 n / 2번 교환 (가운데는 그대로)',
    '버블 정렬: 옆끼리 비교 → 한 바퀴 돌 때마다 가장 큰 값이 맨 뒤로 간다',
    '선택 정렬: 가장 작은 값을 찾아 맨 앞과 교환 → 한 바퀴마다 앞자리가 확정',
    '버블 정렬의 교환 횟수 = 앞뒤 순서가 뒤바뀐 쌍의 개수',
  ],
  code: `int a[] = {5, 3, 8, 1};
int i, j, t;
for (i = 0; i < 3; i++)            // 바퀴 수
    for (j = 0; j < 3 - i; j++)    // 이미 뒤로 간 값은 빼고 비교
        if (a[j] > a[j + 1]) {     // 앞이 더 크면 교환
            t = a[j]; a[j] = a[j + 1]; a[j + 1] = t;
        }`,
  table: {
    head: ['바퀴', '비교 · 교환', '결과', '자리 확정'],
    rows: [
      ['1 (i=0)', '5↔3 교환, 5·8 그대로, 8↔1 교환', '3 5 1 8', '8'],
      ['2 (i=1)', '3·5 그대로, 5↔1 교환', '3 1 5 8', '5 8'],
      ['3 (i=2)', '3↔1 교환', '1 3 5 8', '전부'],
    ],
  },
  tip: '교환 4번 = 뒤바뀐 쌍 (5,3) (5,1) (3,1) (8,1)의 개수',
}

const recursion: Concept = {
  title: '재귀 함수 (3가지 모양)',
  level: 3,
  summary: '자기 자신을 다시 부르는 함수. 내려가며 적고, 바닥에서 값을 얻은 뒤 올라오며 계산',
  analogy: '러시아 인형(마트료시카)을 여는 것과 같아요. 인형을 열면 더 작은 인형이 나오고, 가장 작은 인형(종료 조건)이 나오면 멈춰요. 그다음 거꾸로 하나씩 닫으면서 답을 합쳐요.',
  points: [
    '먼저 종료 조건(if … return)을 찾아 동그라미 친다',
    '모양 ① 값 돌려주기: return n + f(n - 1) → 바닥 값부터 거꾸로 계산하며 올라온다',
    '모양 ② 출력 위치: 출력이 재귀 호출 앞이면 내려가며 출력(3 2 1), 뒤면 올라오며 출력(1 2 3)',
    '모양 ③ 두 번 부르기(피보나치): f(n - 1) + f(n - 2) → 작은 n부터 표를 채우면 빠르다',
  ],
  code: `// 모양 ① 값 돌려주기
int f(int n) {
    if (n <= 1) return 1;          // 종료 조건
    return n + f(n - 1);
}
f(4) = 4 + f(3)
           f(3) = 3 + f(2)
                      f(2) = 2 + f(1)
                                 f(1) = 1   ← 바닥
올라오며: f(2) = 3 → f(3) = 6 → f(4) = 10

// 모양 ② 출력 위치
void g(int n) {
    if (n == 0) return;
    printf("%d", n);   // 내려가며 출력: 3 2 1
    g(n - 1);
    printf("%d", n);   // 올라오며 출력: 1 2 3
}
g(3) → 321123

// 모양 ③ 두 번 부르기
int fib(int n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}`,
  table: {
    head: ['n', '0', '1', '2', '3', '4', '5', '6'],
    rows: [
      ['fib(n)', '0', '1', '1', '2', '3', '5', '8'],
      ['계산', '종료', '종료', '1+0', '1+1', '2+1', '3+2', '5+3'],
    ],
  },
  tip: 'f(4) = 10, g(3) = 321123, fib(6) = 8 — 피보나치는 표를 왼쪽부터 채우기',
}

const calcCallBy: Concept = {
  title: '값 전달 vs 주소(참조) 전달',
  level: 3,
  summary: '복사본을 주면 원본은 그대로, 주소를 주면 원본이 바뀐다',
  analogy: '숙제 공책을 친구에게 빌려줄 때 복사본을 주면 친구가 낙서해도 내 공책은 멀쩡해요(값 전달). 하지만 내 공책 자체를 주면(주소 · 참조 전달) 친구가 한 낙서가 내 공책에 그대로 남아요.',
  points: [
    'C: swap(a, b)는 복사본만 바뀐다 → swap(&a, &b)로 주소를 넘기고 *x로 바꿔야 원본이 바뀐다',
    'C: 배열 이름은 주소라서 함수 안에서 바꾸면 원본 배열이 바뀐다',
    'Java: int · double 같은 기본형은 값 복사, 배열 · 객체는 참조가 전달되어 원본이 바뀐다',
    'Java: int[] b = a; 는 같은 배열을 함께 가리킨다 → b[0]을 바꾸면 a[0]도 바뀐다',
    'Python: 리스트를 넘겨 append 하면 원본이 바뀌고, 숫자 · 문자열은 바뀌지 않는다',
  ],
  code: `void swap1(int x, int y)   { int t = x;  x = y;   y = t; }
void swap2(int *x, int *y) { int t = *x; *x = *y; *y = t; }

int a = 1, b = 2;
swap1(a, b);   printf("%d%d ", a, b);   // 12 (복사본만 바뀜)
swap2(&a, &b); printf("%d%d", a, b);    // 21 (원본이 바뀜)

// Java
static void change(int n, int[] arr) { n = 100; arr[0] = 100; }

int n = 1;
int[] arr = {1, 2};
change(n, arr);
System.out.print(n + " " + arr[0]);     // 1 100`,
  tip: '함수가 받은 것이 값인지 주소인지 먼저 확인 — &, *, 배열, 객체면 원본이 바뀐다',
}

/* 3. C 언어 */

const pointers: Concept = {
  title: 'C 포인터와 배열',
  level: 3,
  summary: '*p는 가리키는 칸의 값, p + 1은 바로 다음 칸의 주소',
  analogy: "변수는 사물함, 값은 사물함 속 물건, 주소는 사물함 번호예요. 포인터는 '사물함 번호를 적은 쪽지'이고, *p는 쪽지에 적힌 사물함을 열어 물건을 꺼내는 거예요. p + 1은 바로 옆 사물함 번호예요.",
  points: [
    '&a: a의 주소 (사물함 번호) / *p: p가 가리키는 값 (사물함 속 물건)',
    '배열 이름 a는 첫 칸 a[0]의 주소 → a[i] 와 *(a + i) 는 같은 뜻',
    '*(p + 2): 주소를 먼저 2칸 옮기고 값을 꺼낸다 / *p + 2: 값을 먼저 꺼내고 2를 더한다',
    'p++: 쪽지에 적힌 번호를 다음 칸으로 고쳐 쓴다 (값은 그대로)',
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

const cString: Concept = {
  title: 'C 문자열 · 2차원 배열',
  level: 2,
  summary: "문자열은 글자 배열이고 끝에 '\\0'이 숨어 있다. 2차원 배열은 [행][열], 0부터 센다",
  analogy: "문자열은 글자를 한 칸에 하나씩 넣은 사물함 줄이고, 마지막 칸의 \\0은 '여기서 끝'이라는 마침표예요. 2차원 배열은 아파트예요. m[1][2]는 1층 2호(0층부터 센다)에 사는 값이에요.",
  points: [
    "char s[] = \"HELLO\"; 는 6칸 (H E L L O \\0), strlen(s)는 \\0을 빼서 5",
    '%c는 글자 한 개, %s는 그 위치부터 \\0 직전까지 전부 출력',
    's + 2 는 2번 칸의 주소 → printf("%s", s + 2) 는 LLO',
    '2차원 배열 m[2][3]: 2행 3열, m[i][j] 와 *(*(m + i) + j) 는 같은 뜻',
    '대각선: m[i][i] / 반대 대각선: m[i][n - 1 - i]',
  ],
  code: `char s[] = "HELLO";       // H0 E1 L2 L3 O4 \\0
strlen(s)          // 5  ('\\0' 제외)
printf("%c", s[1]) // E   (%c는 한 글자)
printf("%s", s + 2)// LLO (%s는 그 위치부터 끝까지)

int m[2][3] = {{1, 2, 3}, {4, 5, 6}};
m[1][2]            // 6  (1행 2열, 0부터 센다)
*(*(m + 1) + 0)    // 4  (= m[1][0])`,
  tip: '글자 위에 0부터 번호를 적어 두고 풀기',
}

const cStruct: Concept = {
  title: 'C 구조체',
  level: 2,
  summary: '여러 값을 하나로 묶은 내 맞춤 자료형. 변수는 점(.), 포인터는 화살표(->)',
  analogy: '학생 카드 한 장에 이름 · 국어 · 영어 점수를 함께 적는 거예요. 카드를 손에 들고 있으면 점(.)으로 바로 보고, 카드가 있는 위치(포인터)만 알면 화살표(->)로 찾아가서 봐요.',
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

const cTraps: Concept = {
  title: 'C언어 함정 체크리스트',
  level: 3,
  summary: '결과를 바꾸는 C 문법 포인트 모음',
  analogy: 'switch에서 break가 없으면 미끄럼틀처럼 아래 case까지 쭉 미끄러져 내려가요. static 변수는 교실 사물함처럼 함수(수업)가 끝나도 안에 넣어 둔 값이 그대로 남아 있어요.',
  points: [
    'a++: 쓰고 나서 증가 / ++a: 증가하고 나서 사용',
    '정수끼리 나눗셈은 소수점 버림: 7 / 2 = 3',
    "문자열 끝에는 '\\0'이 있고, strlen은 '\\0'을 빼고 센다",
    'switch에서 break가 없으면 아래 case까지 계속 실행 (fall-through)',
    'static 변수: 처음 한 번만 초기화되고, 함수가 끝나도 값이 남는다',
    '전역 변수와 같은 이름의 지역 변수가 있으면 함수 안에서는 지역 변수가 우선',
    '= 은 대입, == 은 비교: if (a = 0) 은 a에 0을 넣고 거짓',
  ],
  code: `int n = 2;
switch (n) {
    case 1: printf("A");
    case 2: printf("B");
    case 3: printf("C"); break;
    default: printf("D");
}
// 출력: BC  (case 2부터 break를 만날 때까지)

int count() {
    static int c = 0;   // 처음 한 번만 0
    return ++c;
}
// count(); count(); printf("%d", count());  → 3`,
}

/* 4. Java */

const javaInheritance: Concept = {
  title: 'Java 상속: 메소드 vs 필드',
  level: 3,
  summary: '메소드는 진짜 객체(new 뒤)를 따르고, 필드(변수)는 선언 타입(앞)을 따른다',
  analogy: '리모컨(선언 타입)과 TV(실제 객체)예요. 버튼을 누르면 실제 TV가 움직이듯 메소드는 new 뒤의 진짜 객체를 따라가요. 하지만 리모컨에 붙은 이름표(필드)는 리모컨 종류를 따라가요.',
  points: [
    'A obj = new B(); → 앞의 A가 선언 타입, new 뒤의 B가 실제 객체',
    '자식이 같은 메소드를 다시 만들었으면(오버라이딩) 자식 것이 실행 (동적 바인딩)',
    '필드 obj.x 는 오버라이딩되지 않는다 → 선언 타입 A의 x',
    '부모 메소드 안에서 부르는 다른 메소드도 자식이 오버라이딩했으면 자식 것이 실행',
  ],
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

const javaAbstract: Concept = {
  title: 'Java 추상 클래스 · 인터페이스 · static',
  level: 2,
  summary: '추상 메소드는 자식이 반드시 채우고, static 변수는 모든 객체가 하나를 나눠 쓴다',
  analogy: "추상 클래스는 '동물은 소리를 낸다'처럼 할 일만 정해 두고 방법은 비워 둔 숙제지예요. 자식이 빈칸을 채워야 해요. static 변수는 교실 칠판처럼 반 전체가 하나를 같이 보는 거라 한 명이 고치면 모두에게 바뀌어 보여요.",
  points: [
    'abstract 클래스: 몸체 없는 추상 메소드를 가질 수 있고, new로 직접 만들 수 없음 → extends로 상속',
    'interface: 메소드가 기본적으로 추상 (public abstract). implements로 구현, 여러 개 구현 가능',
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

const javaString: Concept = {
  title: 'Java 문자열 메소드',
  level: 2,
  summary: '글자 번호는 0부터, substring(a, b)는 b 직전까지 자른다',
  analogy: "문자열은 글자 구슬 꿰미예요. 구슬마다 0번, 1번… 번호가 있어요. charAt(3)은 3번 구슬 하나를 보는 것, substring(2, 5)는 2번부터 5번 '앞'까지 잘라 오는 것, indexOf(\"R\")는 R 구슬이 처음 나오는 번호를 찾는 거예요.",
  code: `String s = "PROGRAM";   // P0 R1 O2 G3 R4 A5 M6
s.length()            // 7
s.charAt(3)           // 'G'
s.substring(2, 5)     // "OGR"  (2부터 5 직전까지)
s.substring(4)        // "RAM"  (4부터 끝까지)
s.indexOf("R")        // 1      (처음 나오는 위치)
s.lastIndexOf("R")    // 4      (마지막 위치)
s.indexOf("Z")        // -1     (없으면 -1)
s.replace("R", "r")   // "PrOGrAM" (모두 바꿈)
s.equals("PROGRAM")   // true   (내용 비교)

StringBuilder sb = new StringBuilder("abc");
sb.append("d").reverse();   // sb는 "dcba" (원본이 바뀜)`,
  points: [
    '글자 위에 0부터 번호를 먼저 적어 두고 푼다',
    'substring(a, b)로 잘라 낸 글자 수 = b - a',
    'String은 바뀌지 않는다: s.toUpperCase(); 만 쓰고 저장하지 않으면 s는 그대로',
    'StringBuilder는 append · reverse · insert로 원본이 바뀐다',
    '== 는 같은 객체인지(주소), equals는 내용이 같은지 비교',
  ],
  tip: 'charAt은 글자 하나, substring은 끝 번호 직전까지',
}

const javaTraps: Concept = {
  title: 'Java 함정 체크리스트',
  level: 2,
  summary: '실기 Java 문제에 단골로 나오는 포인트',
  analogy: "오버로딩은 같은 이름의 요리를 재료만 바꿔 여러 개 만드는 것, 오버라이딩은 엄마 레시피를 내 방식으로 고쳐 쓰는 거예요. ==는 '같은 집 주소야?', equals는 '안에 든 내용이 같아?'를 묻는 거예요.",
  points: [
    '오버로딩: 이름 같고 매개변수가 다름 / 오버라이딩: 부모 메소드를 자식이 다시 만듦',
    '생성자는 부모 것이 먼저 실행된다 (자식 생성자 첫 줄에 super()가 숨어 있음)',
    'this(값): 같은 클래스의 다른 생성자를 먼저 부른다',
    'static 멤버는 모든 객체가 공유한다',
    '문자열 비교: == 는 주소, .equals() 는 내용',
    'try-catch-finally: finally는 예외가 나든 안 나든, return이 있어도 항상 실행',
    '배열 기본값: int는 0, boolean은 false, 객체는 null',
  ],
  code: `class A { A() { System.out.print("A"); } }
class B extends A { B() { System.out.print("B"); } }

new B();   // 출력: AB  (부모 생성자 먼저)`,
}

/* 5. Python */

const pythonList: Concept = {
  title: 'Python 슬라이싱과 리스트',
  level: 3,
  summary: '끝 번호는 포함하지 않는다. append는 통째로, extend는 풀어서 넣는다',
  analogy: "기차 칸 떼어 내기예요. a[1:4]는 1번 칸부터 4번 칸 '앞'까지 떼어 내요. 4번 칸은 안 가져와요. append는 상자를 통째로 한 칸에 싣고, extend는 상자를 풀어서 물건을 한 칸씩 실어요.",
  points: [
    'a[시작:끝:간격] → 끝은 포함 X, 생략하면 처음 · 끝까지',
    '음수 번호는 뒤에서부터: a[-1]은 맨 뒤, a[::-1]은 뒤집기',
    'pop()은 맨 뒤 삭제 · pop(i)는 i번 삭제 / remove(값)은 처음 나오는 그 값 삭제',
    'insert(i, 값): i번 자리에 끼워 넣기',
  ],
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
      ['a[1:4]', '번호 1부터 4 직전까지', '[2, 3, 4]'],
      ['a[::-2]', '끝에서부터 2칸씩 거꾸로', '[5, 3, 1]'],
      ['append([6, 7])', '리스트를 통째로 1개 요소로 추가', '길이 6'],
      ['extend([8, 9])', '요소를 하나씩 풀어서 추가', '길이 8'],
    ],
  },
  tip: 'append는 1개 추가, extend는 여러 개 추가',
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
"a-b".split("-")  # ['a', 'b']
"-".join(["a", "b"])  # 'a-b'

d = {}
for ch in "apple":
    d[ch] = d.get(ch, 0) + 1   # 없으면 0에서 시작
# {'a': 1, 'p': 2, 'l': 1, 'e': 1}

[x * 2 for x in range(5) if x % 2 == 0]   # [0, 4, 8]
#  └ 결과    └ 반복          └ 조건`,
  points: [
    'dict.get(키, 기본값): 키가 없으면 기본값을 돌려준다',
    'len(딕셔너리)는 키의 개수, 딕셔너리는 넣은 순서를 기억한다',
    '문자열 * 정수 = 반복: "ab" * 3 = "ababab"',
    '메소드가 self를 return 하면 c.add(1).add(2)처럼 연달아 호출할 수 있다',
  ],
  tip: '컴프리헨션은 "결과 for 변수 in 범위 if 조건" 순서로 읽기',
}

const pythonTraps: Concept = {
  title: 'Python 함정 체크리스트',
  level: 2,
  summary: '실기 Python 문제에 단골로 나오는 포인트',
  analogy: "range(1, 5)는 1층에서 5층 '앞', 즉 4층까지만 가는 엘리베이터예요. //는 몫, %는 나머지예요. 사탕 7개를 2명이 나누면 한 명당 3개(몫)이고 1개가 남아요(나머지).",
  points: [
    'range(시작, 끝, 간격): 끝은 포함하지 않음 → range(1, 5) = 1, 2, 3, 4 / range(10, 0, -3) = 10, 7, 4, 1',
    '/ 는 항상 실수(7 / 2 = 3.5), // 는 몫, % 는 나머지, ** 는 거듭제곱 (2 ** 3 = 8)',
    '리스트 메소드: append, extend, insert, remove(값으로 삭제), pop(위치로 삭제), sort, reverse',
    '세트 { }: 중복 제거, 순서 없음 → | 합집합, & 교집합, - 차집합',
    'lambda x: x * 2 → 이름 없는 한 줄 함수',
    'map(함수, 리스트): 모두에 적용 / filter(함수, 리스트): 참인 것만 남김',
    '클래스: __init__ 은 생성자, self 는 자기 자신 / global 변수명: 함수 안에서 바깥 변수를 바꿈',
  ],
  code: `print(list(map(lambda x: x * 2, [1, 2, 3])))    # [2, 4, 6]
print(list(filter(lambda x: x % 2, [1, 2, 3]))) # [1, 3]`,
}

const programmingSections: Section[] = [
  { title: '시작하기 · 언어 비교', concepts: [howToTrace, langCompare, langSameCode, langDiffResult, printFormats, w.libraries] },
  {
    title: '계산 유형별 풀이',
    concepts: [calcDivMod, calcIncrement, w.operators, calcAccumulate, loopControl, calcNested, calcDigits, calcBase, calcBit, calcAscii, calcPrime, calcArray, recursion, calcCallBy],
  },
  { title: 'C 언어', concepts: [pointers, cString, cStruct, cTraps] },
  { title: 'Java', concepts: [javaInheritance, javaAbstract, javaString, javaTraps] },
  { title: 'Python', concepts: [pythonList, pythonMore, pythonTraps] },
]

/* ───────── SQL ───────── */

// 개념 예제는 실기 SQL 문제(practicalCode.ts)와 같은 두 테이블을 쓴다
const SQL_STUDENT = `[학생]
학번 | 이름   | 학과 | 학년 | 점수
1    | 김철수 | 컴공 | 3    | 85
2    | 이영희 | 전자 | 2    | 92
3    | 박민수 | 컴공 | 2    | 78
4    | 최지은 | 경영 | 4    | 88
5    | 정우성 | 컴공 | 3    | NULL`

const SQL_TABLES = `${SQL_STUDENT}

[수강]
학번 | 과목
1    | DB
1    | OS
2    | DB
3    | NW
3    | DB`

/* 1. 처음 시작하기 */

const sqlIntro: Concept = {
  title: 'SQL 처음 보기: 테이블과 용어',
  level: 3,
  summary: 'DB의 데이터는 표(테이블)에 들어 있고, SQL은 그 표에게 부탁하는 말이다',
  analogy: "학교 출석부를 떠올려 보세요. 출석부 한 권이 테이블, 학생 한 명이 적힌 가로줄이 행(튜플), '이름' · '학년' 같은 세로 칸이 열(속성)이에요. 번호처럼 학생을 딱 한 명으로 정해 주는 칸이 기본키이고, 아직 안 적은 빈칸이 NULL이에요. SQL은 '2학년만 보여 줘'처럼 출석부에 하는 부탁이에요.",
  code: `[학생]                          ← 테이블 (열 5개, 행 5개)
학번 | 이름   | 학과 | 학년 | 점수    ← 열(속성) 이름
1    | 김철수 | 컴공 | 3    | 85      ← 행(튜플) 하나
2    | 이영희 | 전자 | 2    | 92
3    | 박민수 | 컴공 | 2    | 78
4    | 최지은 | 경영 | 4    | 88
5    | 정우성 | 컴공 | 3    | NULL    ← 점수를 모름 = NULL`,
  table: {
    head: ['쉬운 말', '시험 용어', '영어'],
    rows: [
      ['표', '테이블 · 릴레이션', 'Table · Relation'],
      ['가로줄 (한 사람)', '행 · 튜플 · 레코드', 'Row · Tuple · Record'],
      ['세로 칸 (항목)', '열 · 속성 · 필드', 'Column · Attribute · Field'],
      ['가로줄 수', '카디널리티', 'Cardinality'],
      ['세로 칸 수', '차수', 'Degree'],
      ['한 명을 딱 찾는 칸', '기본키', 'Primary Key'],
      ['다른 표의 기본키를 가리키는 칸', '외래키', 'Foreign Key'],
      ['비어 있는 값', '널', 'NULL'],
    ],
  },
  points: [
    'SELECT 같은 키워드는 대소문자를 가리지 않는다 (보통 대문자로 쓴다)',
    "문자 값은 작은따옴표로 감싼다: '컴공' / 숫자는 그대로: 3",
    '문장 끝은 세미콜론(;), 한 줄 주석은 -- 로 시작',
    'NULL은 0도 아니고 빈 문자열도 아닌 "모르는 값"이다',
    '아래 SQL 개념의 예제는 모두 위 [학생] 표와 [수강] 표(학번 · 과목)를 쓴다',
  ],
  tip: '행 = 튜플 = 가로, 열 = 속성 = 세로. 행 수는 카디널리티, 열 수는 차수',
}

const selectOrder: Concept = {
  title: 'SELECT 쓰는 순서 vs 실행 순서',
  level: 3,
  summary: '쓰는 순서와 실행되는 순서가 다르다. 실행은 FROM부터',
  analogy: '도서관에서 책 고르기예요. 먼저 서가로 가서(FROM), 원하는 책만 뽑고(WHERE), 분야별로 묶고(GROUP BY), 3권 이상인 묶음만 남기고(HAVING), 제목만 적고(SELECT), 가나다순으로 정리해요(ORDER BY). 쓰는 순서와 하는 순서가 달라요.',
  code: `SELECT 학과, COUNT(*) AS 인원     -- ⑤
FROM 학생                         -- ①
WHERE 학년 >= 2                   -- ②
GROUP BY 학과                     -- ③
HAVING COUNT(*) >= 2              -- ④
ORDER BY 인원 DESC;               -- ⑥`,
  table: {
    head: ['실행 순서', '절', '하는 일'],
    rows: [
      ['1', 'FROM', '어느 테이블에서 가져올지'],
      ['2', 'WHERE', '조건에 맞는 행만 남기기'],
      ['3', 'GROUP BY', '같은 값끼리 묶기'],
      ['4', 'HAVING', '묶은 그룹 중 조건에 맞는 그룹만 남기기'],
      ['5', 'SELECT', '보여 줄 열 고르기 · 계산하기'],
      ['6', 'ORDER BY', '정렬하기'],
    ],
  },
  points: [
    '쓰는 순서: SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY',
    'SELECT가 WHERE보다 늦게 실행되므로 WHERE에서는 SELECT의 별칭(인원)을 쓸 수 없다',
    'ORDER BY는 SELECT 뒤에 실행되므로 별칭으로 정렬할 수 있다 (ORDER BY 인원)',
    '집계 함수(COUNT 등)는 묶은 뒤에 계산되므로 WHERE에는 못 쓰고 HAVING에 쓴다',
  ],
  tip: '실행 순서 = 프웨그해셀오 (FROM · WHERE · GROUP BY · HAVING · SELECT · ORDER BY)',
}

/* 2. SELECT로 조회하기 */

const sqlSelectBasic: Concept = {
  title: 'SELECT 기본: 열 고르기 · 별칭 · DISTINCT',
  level: 3,
  summary: 'SELECT 뒤에는 보여 줄 열, FROM 뒤에는 가져올 테이블을 쓴다',
  analogy: "SELECT는 '어떤 칸을 보여 줘', FROM은 '어느 출석부에서'예요. *는 '모든 칸'이라는 뜻의 만능 카드, AS는 칸 제목에 붙이는 별명 스티커, DISTINCT는 똑같은 줄을 한 번만 보여 주는 중복 지우개예요.",
  code: `${SQL_STUDENT}

SELECT * FROM 학생;                            -- 모든 열, 5행
SELECT 이름, 점수 + 5 AS 보정점수 FROM 학생;    -- 계산 결과에 별칭
                                               -- 정우성의 보정점수는 NULL
SELECT DISTINCT 학과 FROM 학생;                -- 컴공 · 전자 · 경영 → 3행
SELECT DISTINCT 학과, 학년 FROM 학생;          -- (학과, 학년) 조합 → 4행`,
  table: {
    head: ['DISTINCT 학과, 학년', '같은 조합?'],
    rows: [
      ['컴공, 3', '김철수 · 정우성 → 하나로 합침'],
      ['전자, 2', '이영희'],
      ['컴공, 2', '박민수 (컴공이지만 학년이 달라 따로)'],
      ['경영, 4', '최지은'],
    ],
  },
  points: [
    'AS 별칭은 결과의 열 제목만 바꾼다 (AS는 생략 가능: 점수 + 5 보정점수)',
    '계산식에 NULL이 섞이면 결과도 NULL: NULL + 5 = NULL',
    'DISTINCT는 SELECT한 열 전체 조합이 같을 때만 하나로 합친다',
    'DISTINCT의 반대인 ALL은 중복을 그대로 보여 주는 기본값 (생략하면 ALL)',
  ],
  tip: 'DISTINCT 학과, 학년 → 두 칸이 모두 같아야 중복',
}

const sqlConditions: Concept = {
  title: 'WHERE 조건: 비교 · LIKE · BETWEEN · IN',
  level: 3,
  summary: 'WHERE 뒤 조건이 참인 행만 남는다',
  analogy: "WHERE는 체에 거르는 거예요. 조건에 맞는 행만 체 아래로 떨어져요. LIKE의 %는 몇 글자든 괜찮은 조커 카드, _는 딱 한 글자짜리 조커 카드예요. AND는 '둘 다 맞아야 통과', OR는 '하나만 맞아도 통과'예요.",
  table: {
    head: ['조건', '뜻', '[학생] 결과'],
    rows: [
      ['점수 >= 85', '85 이상', '김철수, 이영희, 최지은'],
      ["학과 <> '컴공'", '컴공이 아님 (!= 도 같은 뜻)', '이영희, 최지은'],
      ["이름 LIKE '김%'", '김으로 시작 (뒤는 0글자 이상)', '김철수'],
      ["이름 LIKE '%수'", '수로 끝남', '김철수, 박민수'],
      ["이름 LIKE '_영%'", '두 번째 글자가 영', '이영희'],
      ['점수 BETWEEN 80 AND 90', '80 이상 90 이하 (양 끝 포함)', '김철수, 최지은'],
      ["학과 IN ('전자', '경영')", '전자 또는 경영', '이영희, 최지은'],
      ['점수 IS NULL', '점수가 비어 있음', '정우성'],
    ],
  },
  points: [
    '우선순위: NOT → AND → OR (수학의 곱셈이 덧셈보다 먼저인 것처럼 AND가 먼저)',
    '반대 조건: NOT LIKE, NOT BETWEEN, NOT IN, IS NOT NULL',
    'BETWEEN a AND b 는 a <= 값 AND 값 <= b 와 같다',
    "IN ('전자', '경영') 은 학과 = '전자' OR 학과 = '경영' 과 같다",
    "LIKE '%수%' 는 '수'가 어디든 들어 있음 / LIKE '__' 는 딱 두 글자",
  ],
  code: `${SQL_STUDENT}

SELECT 이름 FROM 학생
WHERE 학과 = '컴공' OR 학과 = '전자' AND 학년 = 2;
-- AND 먼저: 학과 = '컴공' OR (학과 = '전자' AND 학년 = 2)
-- 결과: 김철수, 이영희, 박민수, 정우성 (4행)

SELECT 이름 FROM 학생
WHERE (학과 = '컴공' OR 학과 = '전자') AND 학년 = 2;
-- 괄호 먼저: 결과 이영희, 박민수 (2행)`,
  tip: '% = 0글자 이상, _ = 딱 한 글자 / AND가 OR보다 먼저',
}

const sqlNull: Concept = {
  title: 'NULL 완전 정복',
  level: 3,
  summary: 'NULL은 "모르는 값". 계산하면 NULL, 비교하면 탈락, 집계 함수는 건너뛴다',
  analogy: "NULL은 시험을 안 봐서 점수 칸이 비어 있는 친구예요. 0점이 아니라 '모름'이에요. 모르는 점수에 5점을 더해도 여전히 모르고(NULL), '85점보다 높아?'라고 물어도 '모름'이라 뽑히지 않아요. 반 평균은 시험 본 친구들끼리만 계산해요.",
  table: {
    head: ['식 (점수: 85, 92, 78, 88, NULL)', '결과', '이유'],
    rows: [
      ['NULL + 5', 'NULL', '계산에 NULL이 섞이면 결과도 NULL'],
      ['WHERE 점수 = NULL', '0행', '비교 결과가 참도 거짓도 아닌 UNKNOWN → 탈락'],
      ['WHERE 점수 IS NULL', '정우성', 'NULL 검사는 IS NULL로만'],
      ['COUNT(*)', '5', '행 자체를 세므로 NULL 행도 센다'],
      ['COUNT(점수)', '4', 'NULL은 세지 않는다'],
      ['SUM(점수)', '343', '85 + 92 + 78 + 88'],
      ['AVG(점수)', '85.75', '343 ÷ 4 (5로 나누지 않는다)'],
      ['MAX(점수) / MIN(점수)', '92 / 78', 'NULL은 건너뛴다'],
    ],
  },
  points: [
    'NULL을 0으로 바꿔 계산하려면 COALESCE(점수, 0) — Oracle은 NVL(점수, 0)',
    'AVG(COALESCE(점수, 0)) = 343 ÷ 5 = 68.6 (이번에는 5명으로 나눈다)',
    '집계 함수만 있는 SELECT는 조건에 맞는 행이 없어도 결과가 1행이다 (COUNT는 0, SUM · AVG는 NULL)',
    'NOT IN 함정: 괄호 안 목록에 NULL이 하나라도 있으면 NOT IN은 아무 행도 돌려주지 않는다',
    'ORDER BY에서 NULL의 위치는 DBMS마다 다르다 (Oracle은 오름차순에서 맨 뒤)',
  ],
  code: `SELECT COUNT(*), COUNT(점수), SUM(점수), AVG(점수) FROM 학생;
-- 5 | 4 | 343 | 85.75

SELECT AVG(COALESCE(점수, 0)) FROM 학생;
-- 68.6`,
  tip: 'AVG의 분모는 COUNT(열) — NULL 행은 평균 계산에서 빠진다',
}

const sqlOrderBy: Concept = {
  title: 'ORDER BY 정렬',
  level: 2,
  summary: '기본은 오름차순(ASC). 여러 열이면 앞 열이 같을 때만 다음 열로 정렬한다',
  analogy: "키 순서로 줄 세우기예요. ASC는 작은 사람부터(오름차순), DESC는 큰 사람부터(내림차순)예요. '학년 큰 순, 같은 학년이면 점수 낮은 순'처럼 두 번째 기준은 첫 번째 기준이 똑같은 친구들끼리만 써요.",
  code: `${SQL_STUDENT}

SELECT 이름, 학년, 점수 FROM 학생
WHERE 점수 IS NOT NULL
ORDER BY 학년 DESC, 점수 ASC;`,
  table: {
    head: ['순서', '이름', '학년', '점수', '이유'],
    rows: [
      ['1', '최지은', '4', '88', '학년이 가장 큼'],
      ['2', '김철수', '3', '85', '3학년 (정우성은 WHERE에서 빠짐)'],
      ['3', '박민수', '2', '78', '2학년끼리는 점수 오름차순'],
      ['4', '이영희', '2', '92', ''],
    ],
  },
  points: [
    'ASC(오름차순)는 기본값이라 생략할 수 있고, DESC(내림차순)는 꼭 써야 한다',
    'DESC는 바로 앞의 열 하나에만 붙는다: ORDER BY 학년 DESC, 점수 → 점수는 ASC',
    '열 이름 대신 별칭이나 SELECT 순서 번호도 쓸 수 있다: ORDER BY 3 DESC = 세 번째 열로 내림차순',
    '문자는 사전 순(가나다 · ABC), 날짜는 오래된 날짜가 작은 값',
    'ORDER BY는 SELECT 문의 맨 마지막에 쓰고, 맨 마지막에 실행된다',
  ],
  tip: 'DESC는 열마다 따로 붙인다',
}

const sqlAggregate: Concept = {
  title: 'GROUP BY · HAVING과 집계 함수',
  level: 3,
  summary: '같은 값끼리 묶어 그룹마다 결과 한 줄을 만든다. 그룹을 거를 때는 HAVING',
  analogy: "친구들을 학과별 바구니에 나눠 담는 게 GROUP BY예요. 바구니마다 '몇 명?(COUNT)', '평균 점수는?(AVG)'을 구해 바구니 하나당 한 줄로 적어요. 바구니에 담기 전에 사람을 고르는 건 WHERE, '2명 이상 든 바구니만'처럼 바구니를 고르는 건 HAVING이에요.",
  code: `${SQL_STUDENT}

SELECT 학과, COUNT(*) AS 인원, AVG(점수) AS 평균
FROM 학생
WHERE 학년 >= 3
GROUP BY 학과
HAVING COUNT(*) >= 2;`,
  table: {
    head: ['단계', '남은 데이터'],
    rows: [
      ['① FROM 학생', '5행'],
      ['② WHERE 학년 >= 3', '김철수(컴공, 85), 최지은(경영, 88), 정우성(컴공, NULL)'],
      ['③ GROUP BY 학과', '컴공 바구니 [85, NULL] / 경영 바구니 [88]'],
      ['④ HAVING COUNT(*) >= 2', '컴공 바구니만 남음 (2명)'],
      ['⑤ SELECT', '컴공 | 2 | 85 ← AVG는 NULL을 빼고 85 ÷ 1'],
    ],
  },
  points: [
    '집계 함수: COUNT(개수) · SUM(합계) · AVG(평균) · MAX(최댓값) · MIN(최솟값) — COUNT(*)를 빼면 모두 NULL을 건너뛴다',
    'GROUP BY를 쓰면 SELECT에는 묶은 열과 집계 함수만 쓸 수 있다 (SELECT 이름 … GROUP BY 학과 는 표준 SQL에서 오류)',
    'WHERE COUNT(*) >= 2 는 오류 → 집계 함수 조건은 HAVING에',
    '결과 행 수 = WHERE 뒤에 남은 서로 다른 그룹 값의 수 → HAVING으로 더 줄어든다',
    'GROUP BY 없이 집계 함수만 쓰면 결과는 항상 1행',
    'GROUP BY 학과, 학년 → (학과, 학년) 조합마다 한 그룹',
  ],
  tip: 'WHERE는 사람(행)을, HAVING은 바구니(그룹)를 고른다',
}

/* 3. 여러 테이블 · 결과 계산 */

const sqlJoin: Concept = {
  title: '조인 (JOIN) 종류와 결과',
  level: 3,
  summary: '두 테이블을 공통 열로 이어 붙인다. 짝이 없는 행을 남기느냐에 따라 종류가 나뉜다',
  analogy: '조인은 학생 명단과 수강 명단을 학번으로 이어 붙이는 거예요. INNER는 양쪽 명단에 다 있는 사람만, LEFT OUTER는 왼쪽 명단은 전부 남기고 짝이 없으면 빈칸(NULL)으로 둬요. CROSS JOIN은 모든 학생과 모든 수강 기록을 하나씩 다 짝지어 보는 거예요.',
  code: `[학생]              [수강]
학번 | 이름         학번 | 과목
1    | 김철수       1    | DB
2    | 이영희       1    | OS
3    | 박민수       3    | NW
4    | 최지은       9    | AI    ← 학생 표에 없는 학번

SELECT 학생.이름, 수강.과목
FROM 학생 INNER JOIN 수강 ON 학생.학번 = 수강.학번;
-- 김철수 DB / 김철수 OS / 박민수 NW → 3행`,
  table: {
    head: ['종류', '남기는 행', '결과 행 수'],
    rows: [
      ['INNER JOIN', '양쪽 모두 짝이 있는 행만', '3 (김철수 2, 박민수 1)'],
      ['LEFT OUTER JOIN', '왼쪽(학생)은 전부, 짝이 없으면 NULL', '3 + 2 (이영희, 최지은) = 5'],
      ['RIGHT OUTER JOIN', '오른쪽(수강)은 전부', '3 + 1 (학번 9의 AI) = 4'],
      ['FULL OUTER JOIN', '양쪽 모두 전부', '3 + 2 + 1 = 6'],
      ['CROSS JOIN', '모든 짝 (카티션 곱)', '4 × 4 = 16'],
    ],
  },
  points: [
    '행 수 세는 법: ① 짝이 맞는 행 수(INNER)를 먼저 센다 ② OUTER면 짝이 없는 쪽의 행을 더한다',
    '한 학생에게 수강 기록이 2개면 그 학생은 결과에 2번 나온다',
    'FROM 학생, 수강 WHERE 학생.학번 = 수강.학번 → INNER JOIN과 같은 결과 (동등 조인)',
    'FROM 학생, 수강 (조건 없음) → CROSS JOIN과 같은 결과',
    'Oracle 표기: WHERE 학생.학번 = 수강.학번(+) → (+)가 없는 쪽(학생)을 모두 남김 = LEFT OUTER JOIN',
    'NATURAL JOIN: 이름이 같은 열로 자동 조인하고, 그 열은 한 번만 나온다 / USING (학번): 조인할 같은 이름 열을 지정',
    'SELF JOIN: 같은 테이블을 별칭 두 개로 조인 (예: 사원과 그 사원의 관리자)',
    '별칭: FROM 학생 S JOIN 수강 C ON S.학번 = C.학번 (INNER는 생략 가능)',
  ],
  tip: 'CROSS는 곱하기, LEFT는 왼쪽 전부, INNER는 짝 있는 것만',
}

const sqlSubquery: Concept = {
  title: '하위 질의 (서브쿼리)',
  level: 3,
  summary: '괄호 안 SELECT를 먼저 풀어 값이나 목록으로 바꾼 뒤 바깥 SELECT를 푼다',
  analogy: "'반 평균보다 점수가 높은 친구 찾기'는 두 단계예요. 먼저 심부름꾼이 평균을 구해 오고(하위 질의), 그 숫자로 친구들을 골라요(바깥 질의). 괄호 안을 먼저 풀어서 숫자나 목록으로 바꿔 적어 두면 쉬워요.",
  code: `${SQL_TABLES}

-- ① 값 하나: 평균보다 높은 학생
SELECT 이름 FROM 학생
WHERE 점수 > (SELECT AVG(점수) FROM 학생);
-- 괄호 = 85.75 → 이영희(92), 최지은(88)

-- ② 목록: 수강 기록이 있는 학생
SELECT 이름 FROM 학생
WHERE 학번 IN (SELECT 학번 FROM 수강);
-- 괄호 = (1, 1, 2, 3, 3) → 김철수, 이영희, 박민수

-- ③ EXISTS: 괄호 결과가 한 행이라도 있으면 참
SELECT 이름 FROM 학생 S
WHERE NOT EXISTS (SELECT * FROM 수강 C WHERE C.학번 = S.학번);
-- 수강 기록이 없는 최지은, 정우성`,
  table: {
    head: ['조건 (괄호 = 78, 85)', '뜻', '같은 조건'],
    rows: [
      ['점수 IN (…)', '목록 중 하나와 같다', '78 또는 85'],
      ['점수 > ANY (…)', '하나보다라도 크면 참 = 최솟값보다 크다', '점수 > 78'],
      ['점수 > ALL (…)', '모두보다 커야 참 = 최댓값보다 크다', '점수 > 85'],
      ['점수 < ANY (…)', '최댓값보다 작다', '점수 < 85'],
      ['점수 < ALL (…)', '최솟값보다 작다', '점수 < 78'],
    ],
  },
  points: [
    '=, >, < 로 비교하는 하위 질의는 결과가 딱 1개여야 한다 (여러 개면 오류 → IN, ANY, ALL 사용)',
    'ANY는 SOME과 같다',
    '상관 하위 질의: 안쪽이 바깥 테이블(S.학번)을 쓰면 바깥 행마다 다시 실행된다 (EXISTS에서 자주 쓴다)',
    '하위 질의는 WHERE뿐 아니라 FROM(인라인 뷰)과 SELECT(스칼라 하위 질의)에도 쓸 수 있다',
  ],
  tip: '> ALL은 최댓값보다, > ANY는 최솟값보다 크다',
}

const sqlSet: Concept = {
  title: '집합 연산 (UNION · INTERSECT · EXCEPT)',
  level: 2,
  summary: '두 SELECT 결과를 위아래로 합치거나, 겹치는 것 · 빼고 남는 것을 구한다',
  analogy: 'A반과 B반 명단이에요. UNION은 두 명단을 합치며 겹치는 이름을 한 번만 적는 것, UNION ALL은 겹쳐도 그대로 다 적는 것, INTERSECT는 두 반에 모두 있는 이름만, EXCEPT는 A반 명단에서 B반에도 있는 이름을 지운 거예요.',
  code: `[A반] 이름: 김철수, 이영희, 박민수
[B반] 이름: 이영희, 박민수, 최지은

SELECT 이름 FROM A반
UNION
SELECT 이름 FROM B반;`,
  table: {
    head: ['연산', '결과', '행 수'],
    rows: [
      ['UNION', '김철수, 이영희, 박민수, 최지은 (중복 제거)', '4'],
      ['UNION ALL', '김철수, 이영희, 박민수, 이영희, 박민수, 최지은', '6'],
      ['INTERSECT', '이영희, 박민수', '2'],
      ['A EXCEPT B (Oracle: MINUS)', '김철수', '1'],
      ['B EXCEPT A', '최지은', '1'],
    ],
  },
  points: [
    '두 SELECT의 열 개수가 같고, 같은 위치 열의 자료형이 맞아야 한다',
    '결과의 열 이름은 첫 번째 SELECT를 따른다',
    'ORDER BY는 맨 마지막 SELECT 뒤에 한 번만 쓴다',
    'EXCEPT는 순서가 중요하다: A EXCEPT B 와 B EXCEPT A 는 결과가 다르다',
  ],
  tip: 'UNION만 쓰면 중복 제거, ALL을 붙여야 중복 포함',
}

const sqlRowCount: Concept = {
  title: 'SQL 결과 행 수 세기 (유형별)',
  level: 3,
  summary: '행 수 문제는 유형마다 세는 규칙이 정해져 있다',
  analogy: '과자 세기예요. WHERE는 부서진 과자를 골라내는 것, GROUP BY는 같은 맛끼리 한 봉지로 묶는 것(봉지 수 = 맛 종류 수), JOIN은 과자와 음료를 짝짓는 것(과자 하나에 음료가 2개면 세트도 2개)이에요.',
  table: {
    head: ['유형', '결과 행 수'],
    rows: [
      ['WHERE', '조건이 참인 행 수 (NULL 비교는 탈락)'],
      ['DISTINCT 열', '서로 다른 값(조합)의 수'],
      ['GROUP BY 열', 'WHERE 뒤 서로 다른 그룹 값의 수 → HAVING으로 더 줄어듦'],
      ['집계 함수만 (GROUP BY 없음)', '항상 1행'],
      ['INNER JOIN', '짝이 맞는 쌍의 수 (같은 키가 왼쪽 a개, 오른쪽 b개면 a × b)'],
      ['LEFT OUTER JOIN', 'INNER 행 수 + 짝 없는 왼쪽 행 수'],
      ['FULL OUTER JOIN', 'INNER 행 수 + 짝 없는 왼쪽 + 짝 없는 오른쪽'],
      ['CROSS JOIN', '왼쪽 행 수 × 오른쪽 행 수'],
      ['UNION ALL', '위 행 수 + 아래 행 수'],
      ['UNION', '합친 뒤 중복을 뺀 행 수'],
    ],
  },
  code: `${SQL_TABLES}

SELECT 학과 FROM 학생 GROUP BY 학과;          -- 3행 (컴공 · 전자 · 경영)
SELECT COUNT(*) FROM 학생 WHERE 학년 = 1;     -- 1행 (값은 0이지만 행은 1개)
SELECT * FROM 학생 CROSS JOIN 수강;           -- 5 × 5 = 25행
SELECT * FROM 학생 JOIN 수강
  ON 학생.학번 = 수강.학번;                    -- 1번 2 + 2번 1 + 3번 2 = 5행
SELECT * FROM 학생 LEFT JOIN 수강
  ON 학생.학번 = 수강.학번;                    -- 5 + 2 (4번, 5번) = 7행`,
  tip: 'JOIN은 짝의 수를 세고, OUTER는 짝 없는 행을 더한다',
}

/* 4. 데이터 바꾸기 (DML · TCL) */

const sqlDml: Concept = {
  title: 'INSERT · UPDATE · DELETE',
  level: 3,
  summary: '넣기는 INSERT INTO … VALUES, 고치기는 UPDATE … SET, 지우기는 DELETE FROM',
  analogy: "출석부에 새 친구 줄을 쓰는 게 INSERT, 이미 쓴 줄을 지우개로 고쳐 쓰는 게 UPDATE, 전학 간 친구 줄을 지우는 게 DELETE예요. UPDATE와 DELETE에서 WHERE를 빼먹으면 '모든 줄'을 고치거나 지우니 조심해야 해요.",
  code: `-- 넣기
INSERT INTO 학생 (학번, 이름, 학과) VALUES (6, '한가람', '전자');
INSERT INTO 학생 VALUES (7, '오세훈', '경영', 1, 90);  -- 모든 열에 순서대로 넣을 땐 열 이름 생략
INSERT INTO 우수학생 (학번, 이름)                      -- 다른 SELECT 결과를 한꺼번에
SELECT 학번, 이름 FROM 학생 WHERE 점수 >= 90;

-- 고치기
UPDATE 학생 SET 학년 = 학년 + 1, 점수 = 0 WHERE 학번 = 6;

-- 지우기
DELETE FROM 학생 WHERE 학과 = '전자';
DELETE FROM 학생;      -- WHERE가 없으면 모든 행 삭제 (테이블은 남음)`,
  table: {
    head: ['명령', '모양', '짝꿍 키워드'],
    rows: [
      ['INSERT', 'INSERT INTO 테이블 (열, …) VALUES (값, …)', 'INTO · VALUES'],
      ['UPDATE', 'UPDATE 테이블 SET 열 = 값 WHERE 조건', 'SET'],
      ['DELETE', 'DELETE FROM 테이블 WHERE 조건', 'FROM'],
      ['SELECT', 'SELECT 열 FROM 테이블 WHERE 조건', 'FROM'],
    ],
  },
  points: [
    'INSERT에서 열 이름을 생략하면 테이블의 모든 열에 정의된 순서대로 값을 넣어야 한다',
    '열을 골라 넣으면 나머지 열에는 DEFAULT 값(없으면 NULL)이 들어간다 → 한가람의 학년 · 점수는 NULL',
    'UPDATE의 SET에는 여러 열을 쉼표로 이어 쓴다: SET 학년 = 2, 점수 = 0',
    'DELETE는 행을 통째로 지운다. 칸 하나만 비우려면 UPDATE … SET 점수 = NULL',
  ],
  tip: 'INSERT는 INTO · VALUES, UPDATE는 SET, DELETE는 FROM — WHERE를 빠뜨리면 전체',
}

const sqlTcl: Concept = {
  title: 'COMMIT · ROLLBACK · SAVEPOINT',
  level: 2,
  summary: 'COMMIT은 확정 저장, ROLLBACK은 마지막 확정 시점으로 되돌리기, SAVEPOINT는 중간 저장점',
  analogy: "게임 세이브와 같아요. COMMIT은 '저장하기'라서 그 뒤에는 되돌릴 수 없어요. ROLLBACK은 '마지막 저장 지점으로 돌아가기', SAVEPOINT는 '중간 체크포인트'라서 ROLLBACK TO로 그 지점까지만 돌아갈 수 있어요.",
  code: `-- 김철수(학번 1)의 점수는 처음에 85
UPDATE 학생 SET 점수 = 90 WHERE 학번 = 1;
COMMIT;
UPDATE 학생 SET 점수 = 95 WHERE 학번 = 1;
SAVEPOINT A;
UPDATE 학생 SET 점수 = 100 WHERE 학번 = 1;
ROLLBACK TO A;
ROLLBACK;
SELECT 점수 FROM 학생 WHERE 학번 = 1;`,
  table: {
    head: ['실행', '점수', '설명'],
    rows: [
      ['UPDATE → 90', '90', '아직 확정 전'],
      ['COMMIT', '90', '90으로 확정 (되돌릴 수 없음)'],
      ['UPDATE → 95', '95', ''],
      ['SAVEPOINT A', '95', '이 지점을 A로 기억'],
      ['UPDATE → 100', '100', ''],
      ['ROLLBACK TO A', '95', 'A 지점으로 돌아감'],
      ['ROLLBACK', '90', '마지막 COMMIT 시점으로 돌아감'],
    ],
  },
  points: [
    '트랜잭션: 한꺼번에 처리되어야 하는 작업 묶음 → 모두 성공하거나 모두 취소 (원자성)',
    'COMMIT · ROLLBACK · SAVEPOINT를 TCL(트랜잭션 제어어)이라 하고, 시험에서는 DCL에 넣기도 한다',
    'ROLLBACK TO 저장점: 그 지점 이후의 작업만 취소하고 트랜잭션은 계속된다',
    'Oracle에서는 CREATE · ALTER · DROP 같은 DDL을 실행하면 자동으로 COMMIT된다',
  ],
  tip: '출력 90 — COMMIT한 것은 ROLLBACK으로 되돌릴 수 없다',
}

/* 5. 테이블 만들고 고치기 (DDL) */

const sqlCreate: Concept = {
  title: 'CREATE TABLE과 제약 조건',
  level: 3,
  summary: '표를 만들 때 칸마다 자료형과 규칙(제약 조건)을 함께 정한다',
  analogy: "새 출석부를 만들면서 첫 장에 규칙을 적는 거예요. '번호는 겹치면 안 되고 꼭 써야 해(PRIMARY KEY)', '이름은 꼭 써(NOT NULL)', '이메일은 겹치면 안 돼(UNIQUE)', '학년은 1~4만(CHECK)', '안 쓰면 1학년(DEFAULT)', '학과는 학과 명부에 있는 것만(FOREIGN KEY)'처럼요. 규칙을 어기는 데이터는 DB가 거절해요.",
  code: `CREATE TABLE 학생 (
    학번     INT          PRIMARY KEY,         -- 중복 X, NULL X
    이름     VARCHAR(20)  NOT NULL,            -- 빈칸 X
    이메일   VARCHAR(50)  UNIQUE,              -- 중복 X (NULL은 허용)
    학년     INT          DEFAULT 1            -- 안 넣으면 1
                          CHECK (학년 BETWEEN 1 AND 4),
    학과코드 INT,
    CONSTRAINT fk_학과 FOREIGN KEY (학과코드)
        REFERENCES 학과 (학과코드)             -- 학과 테이블에 있는 값만
);`,
  table: {
    head: ['제약 조건', '뜻', '중복', 'NULL'],
    rows: [
      ['PRIMARY KEY', '행을 하나로 구별하는 기본키 (테이블당 1개)', 'X', 'X'],
      ['UNIQUE', '값이 겹치면 안 됨', 'X', 'O'],
      ['NOT NULL', '반드시 값을 넣어야 함', 'O', 'X'],
      ['CHECK', '조건식을 만족하는 값만 허용', '-', '-'],
      ['DEFAULT', '값을 안 넣으면 들어갈 기본값', '-', '-'],
      ['FOREIGN KEY', '참조하는 테이블의 기본키에 있는 값만 허용', 'O', 'O'],
    ],
  },
  points: [
    '자주 쓰는 자료형: INT(정수), CHAR(n)(고정 길이 문자), VARCHAR(n)(가변 길이 문자), DATE(날짜)',
    "CHAR(10)에 'abc'를 넣으면 남은 7칸을 공백으로 채우고, VARCHAR(10)은 3칸만 쓴다",
    '여러 열을 묶은 기본키(복합키): PRIMARY KEY (학번, 과목)',
    'CONSTRAINT 이름 … 은 제약 조건에 이름을 붙인다 (나중에 그 이름으로 삭제 가능)',
    'DDL에는 CREATE TABLE 말고도 CREATE SCHEMA · DOMAIN · VIEW · INDEX가 있다',
  ],
  tip: 'PRIMARY KEY = UNIQUE + NOT NULL',
}

const sqlForeignKey: Concept = {
  title: '외래키와 참조 옵션 (CASCADE · SET NULL)',
  level: 2,
  summary: '부모 행이 지워지거나 바뀔 때 그 행을 참조하는 자식 행을 어떻게 할지 정한다',
  analogy: "학과(부모)와 학생(자식)의 관계예요. 학과가 없어지면 그 학과 학생은 어떻게 할까요? CASCADE는 '같이 정리해'(학생도 삭제), SET NULL은 '학과 칸을 빈칸으로 둬', RESTRICT는 '학생이 남아 있으면 학과를 못 없애'예요.",
  code: `[학과] (부모)          [학생] (자식)
학과코드 | 학과명      학번 | 이름   | 학과코드
10       | 컴공        1    | 김철수 | 10
20       | 전자        2    | 이영희 | 20
                       3    | 박민수 | 10

FOREIGN KEY (학과코드) REFERENCES 학과 (학과코드)
    ON DELETE CASCADE
    ON UPDATE CASCADE

DELETE FROM 학과 WHERE 학과코드 = 10;`,
  table: {
    head: ['ON DELETE 옵션', '학과 10을 지우면 [학생]은?'],
    rows: [
      ['CASCADE', '김철수 · 박민수 행도 함께 삭제 → 이영희만 남음'],
      ['SET NULL', '김철수 · 박민수의 학과코드가 NULL로 바뀜'],
      ['SET DEFAULT', '김철수 · 박민수의 학과코드가 기본값(DEFAULT)으로 바뀜'],
      ['RESTRICT / NO ACTION', '참조하는 학생이 있으므로 학과 삭제를 거부 (오류)'],
    ],
  },
  points: [
    '외래키 값은 부모 테이블의 기본키에 있는 값이거나 NULL이어야 한다 (참조 무결성)',
    '부모에 없는 학과코드 30으로 학생을 INSERT하면 거부된다',
    'ON UPDATE CASCADE: 부모의 기본키 값이 바뀌면 자식의 외래키 값도 같이 바뀐다',
    '옵션을 쓰지 않으면 보통 NO ACTION처럼 동작한다 (참조 중이면 거부)',
  ],
  tip: 'CASCADE = 연쇄. 부모를 따라 자식도 같이',
}

const sqlAlterDrop: Concept = {
  title: 'ALTER · DROP · TRUNCATE · INDEX',
  level: 3,
  summary: '구조를 고칠 땐 ALTER, 테이블을 통째로 지울 땐 DROP, 행만 모두 비울 땐 TRUNCATE',
  analogy: "ALTER는 출석부에 '전화번호' 칸을 새로 그리거나 지우는 것, DROP은 출석부를 통째로 버리는 것, TRUNCATE는 출석부는 두고 적힌 이름만 싹 지우는 것, DELETE는 지우개로 원하는 줄만 지우는 거예요. INDEX는 책 맨 뒤의 '찾아보기'처럼 빨리 찾게 해 주는 목록이에요.",
  code: `-- 열 추가 · 변경 · 삭제
ALTER TABLE 학생 ADD 전화번호 VARCHAR(20);
ALTER TABLE 학생 ALTER COLUMN 학년 SET DEFAULT 1;   -- 표준 SQL
ALTER TABLE 학생 MODIFY 이름 VARCHAR(30);           -- Oracle · MySQL
ALTER TABLE 학생 DROP COLUMN 전화번호;

-- 테이블 삭제
DROP TABLE 학생 CASCADE;    -- 학생을 참조하는 제약 조건 · 뷰까지 함께 삭제
DROP TABLE 학생 RESTRICT;   -- 참조하는 것이 있으면 삭제 거부

-- 인덱스
CREATE INDEX idx_이름 ON 학생 (이름);
CREATE UNIQUE INDEX idx_이메일 ON 학생 (이메일 DESC);
DROP INDEX idx_이름;`,
  table: {
    head: ['구분', 'DELETE', 'TRUNCATE', 'DROP'],
    rows: [
      ['분류', 'DML', 'DDL', 'DDL'],
      ['지우는 것', '조건에 맞는 행 (WHERE)', '모든 행', '테이블 자체'],
      ['테이블 구조', '남음', '남음', '사라짐'],
      ['ROLLBACK', '가능', '불가 (Oracle 기준)', '불가 (Oracle 기준)'],
    ],
  },
  points: [
    'DDL 명령: CREATE · ALTER · DROP · TRUNCATE',
    '인덱스 장점: 검색(SELECT)이 빨라진다 / 단점: 저장 공간이 들고, INSERT · UPDATE · DELETE 때 인덱스도 고쳐야 해서 느려진다',
    '기본키 열에는 보통 인덱스가 자동으로 만들어진다',
    '인덱스의 열 구성을 바꾸려면 DROP 후 다시 CREATE',
  ],
  tip: '행만 지우면 DELETE · TRUNCATE, 표까지 지우면 DROP',
}

const sqlView: Concept = {
  title: '뷰 (VIEW)',
  level: 2,
  summary: '데이터 없이 SELECT 문만 저장해 둔 가상 테이블',
  analogy: '뷰는 창문이에요. 방(기본 테이블) 안의 물건을 창문으로 보지만 창문 자체에는 물건이 없어요. 창문을 작게 만들면 보여 주고 싶은 것만 보이니까, 친구에게 점수 칸은 빼고 이름만 보여 줄 수 있어요(보안). 방이 없어지면 창문도 쓸모가 없어요.',
  code: `CREATE VIEW 컴공학생 AS
SELECT 학번, 이름 FROM 학생
WHERE 학과 = '컴공'
WITH CHECK OPTION;          -- 뷰 조건(컴공)에 안 맞는 INSERT · UPDATE는 거부

SELECT * FROM 컴공학생;     -- 테이블처럼 조회: 김철수, 박민수, 정우성
DROP VIEW 컴공학생;         -- 뷰 삭제 (테이블 데이터는 그대로)`,
  points: [
    '뷰에는 데이터가 저장되지 않고 정의(SELECT 문)만 저장된다 → 조회할 때마다 기본 테이블에서 가져온다',
    '장점: 논리적 독립성 제공, 필요한 열만 보여 줘 보안에 유리, 복잡한 질의를 간단히 사용',
    '단점: 독립적인 인덱스를 가질 수 없다, 정의를 ALTER로 바꿀 수 없다, 삽입 · 삭제 · 갱신에 제약이 있다',
    '시험 기준: 뷰 정의를 바꾸려면 DROP 후 다시 CREATE (실제 DBMS는 CREATE OR REPLACE VIEW도 지원)',
    '뷰 위에 또 다른 뷰를 만들 수 있다',
    '기본 테이블이나 뷰를 DROP … CASCADE로 지우면 그것을 바탕으로 만든 뷰도 함께 삭제된다',
  ],
  tip: '뷰 = 저장된 SELECT. 데이터는 기본 테이블에만 있다',
}

/* 6. 권한 · 저장 객체 (DCL) */

const sqlGrant: Concept = {
  title: 'GRANT · REVOKE (권한)',
  level: 3,
  summary: '권한 주기는 GRANT … TO, 빼앗기는 REVOKE … FROM',
  analogy: "게임기를 친구에게 빌려주는 게 GRANT(TO 친구), 돌려받는 게 REVOKE(FROM 친구)예요. WITH GRANT OPTION은 '다른 친구에게 또 빌려줘도 돼'라는 허락이고, REVOKE … CASCADE는 그 친구가 또 빌려준 것까지 한꺼번에 돌려받는 거예요.",
  code: `-- 테이블 권한 주기
GRANT SELECT, UPDATE ON 학생 TO user1;
GRANT ALL ON 학생 TO user2 WITH GRANT OPTION;   -- user2는 남에게도 줄 수 있음
GRANT SELECT ON 학생 TO PUBLIC;                 -- 모든 사용자에게

-- 권한 빼앗기
REVOKE UPDATE ON 학생 FROM user1;
REVOKE GRANT OPTION FOR UPDATE ON 학생 FROM user2;  -- 남에게 줄 권리만 회수
REVOKE ALL ON 학생 FROM user2 CASCADE;             -- user2가 남에게 준 권한까지 회수

-- 역할(ROLE): 권한 묶음
CREATE ROLE 조교;
GRANT SELECT, INSERT ON 학생 TO 조교;
GRANT 조교 TO user3;`,
  table: {
    head: ['키워드', '뜻'],
    rows: [
      ['SELECT · INSERT · UPDATE · DELETE', '조회 · 삽입 · 수정 · 삭제 권한'],
      ['ALL', '위 권한 전부'],
      ['PUBLIC', '받는 사람 자리에 쓰면 모든 사용자'],
      ['WITH GRANT OPTION', '(GRANT) 받은 권한을 다른 사람에게 다시 줄 수 있음'],
      ['GRANT OPTION FOR', '(REVOKE) 다시 줄 수 있는 권리만 빼앗음'],
      ['CASCADE', '(REVOKE) 그 사용자가 남에게 준 권한까지 연쇄 회수'],
    ],
  },
  points: [
    '형식: GRANT 권한 ON 테이블 TO 사용자 / REVOKE 권한 ON 테이블 FROM 사용자',
    '사용자 등급 권한: DBA(모든 권한), RESOURCE(DB · 테이블 생성 가능), CONNECT(접속만 가능) → GRANT RESOURCE TO user1;',
    'GRANT · REVOKE는 DCL(데이터 제어어)',
  ],
  tip: 'GRANT … TO, REVOKE … FROM — 전치사가 빈칸으로 자주 나온다',
}

const sqlSections: Section[] = [
  { title: '처음 시작하기', concepts: [sqlIntro, w.sqlBasics, selectOrder] },
  { title: 'SELECT로 조회하기', concepts: [sqlSelectBasic, sqlConditions, sqlNull, sqlOrderBy, sqlAggregate] },
  { title: '여러 테이블 · 결과 계산', concepts: [sqlJoin, sqlSubquery, sqlSet, sqlRowCount] },
  { title: '데이터 바꾸기 (DML · TCL)', concepts: [sqlDml, sqlTcl] },
  { title: '테이블 만들고 고치기 (DDL)', concepts: [sqlCreate, sqlForeignKey, sqlAlterDrop, sqlView] },
  { title: '권한 · 저장 객체 (DCL)', concepts: [sqlGrant, w.dbObjects] },
]

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
      ['Watir', 'Ruby 언어를 사용하는 웹 애플리케이션 테스트 프레임워크'],
    ],
  },
  points: [
    '구현 방법 ① 데이터 통신: JSON · XML 등을 AJAX, 소켓 등으로 직접 송수신 (실시간)',
    '구현 방법 ② 인터페이스 엔티티(테이블): 송신 쪽이 중간 테이블에 쓰고 수신 쪽이 읽어 감',
    '보안: 네트워크 영역(IPsec, SSL/TLS, S-HTTP) · 애플리케이션 영역(시큐어 코딩) · DB 영역(암호화, 접근 권한)',
    '감시 도구: APM(애플리케이션 성능 관리) — 스카우터(Scouter), 제니퍼(Jennifer)',
  ],
  tip: '검증 도구 6개: xUnit, STAF, FitNesse, NTAF, Selenium, Watir',
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

/* ───────── 인증 기술 ───────── */

const authMethods: Concept = {
  title: '인증 기술: OTP · SSO · 커버로스 · OAuth · PKI',
  level: 3,
  summary: '"너 진짜 맞아?"를 확인하는 방법. 무엇으로 확인하는지(유형)와 어떤 기술로 확인하는지를 나눠 외운다',
  analogy: "놀이공원 입장 방법이에요. 비밀번호는 '암호를 말해 봐'(지식), OTP는 '매번 바뀌는 번호표를 보여 줘'(소유), 지문은 '손가락을 대 봐'(생체)예요. SSO는 입구에서 손목 띠를 한 번 받으면 모든 놀이기구를 타는 것, 커버로스는 매표소(KDC)에서 받은 티켓으로 놀이기구마다 들어가는 것, OAuth는 내 열쇠를 주는 대신 '이 친구는 들여보내 주세요'라는 쪽지(토큰)만 써 주는 거예요.",
  table: {
    head: ['인증 유형', '확인하는 것', '예'],
    rows: [
      ['지식 기반 (Type 1)', '알고 있는 것 (Something You Know)', '비밀번호, PIN, 본인 확인 질문'],
      ['소유 기반 (Type 2)', '가지고 있는 것 (Something You Have)', 'OTP 토큰, 스마트카드, 공동인증서'],
      ['생체 기반 (Type 3)', '자신의 몸 (Something You Are)', '지문, 홍채, 얼굴, 정맥'],
      ['행위 기반', '하는 방식 (Something You Do)', '서명, 음성, 걸음걸이, 키 입력 패턴'],
      ['위치 기반', '있는 곳 (Somewhere You Are)', 'GPS, 접속 IP 주소'],
    ],
  },
  points: [
    '다중 요소 인증(MFA): 서로 다른 유형을 2개 이상 조합 → 비밀번호 + OTP는 MFA, 비밀번호 + PIN은 둘 다 지식 기반이라 MFA가 아니다',
    'OTP(One-Time Password): 한 번만 쓰는 비밀번호. 시간 동기화(일정 시간마다 바뀜) · 이벤트 동기화(누를 때마다 바뀜) · 질의-응답 방식',
    'SSO(Single Sign-On): 한 번 로그인으로 여러 시스템을 추가 인증 없이 이용',
    '커버로스(Kerberos): MIT가 만든 티켓 기반 인증. KDC(인증 서버 AS + 티켓 발급 서버 TGS)가 티켓을 발급하고 대칭키를 쓴다. 서버 간 시간 동기화가 필요하다',
    'OAuth: 비밀번호를 넘기지 않고 접근 토큰(Access Token)으로 권한만 위임 (예: 다른 사이트에서 "구글 계정으로 로그인")',
    'RADIUS: 원격 접속 사용자의 인증 · 인가 · 계정 관리(AAA)를 중앙 서버에서 처리하는 프로토콜 (후속 프로토콜: Diameter)',
    'PKI(공개키 기반 구조): 인증 기관(CA)이 "이 공개키의 주인은 누구"라고 보증하는 디지털 인증서(X.509)를 발급 · 관리한다. 등록 기관(RA)은 신원 확인을 맡는다',
    '전자 서명: 보내는 사람이 자기 개인키로 서명 → 받는 사람이 보낸 사람의 공개키로 검증 → 인증 · 무결성 · 부인 방지',
    'FIDO: 비밀번호 없이 생체 인증 등으로 로그인하게 하는 국제 인증 표준',
  ],
  tip: 'MFA는 "서로 다른 유형" 2개 이상 — 비밀번호 + PIN은 MFA가 아니다',
}

/* ───────── 네트워크 상세 ───────── */

const osiLayers: Concept = {
  title: 'OSI 7계층 자세히 (기능 · 데이터 단위 · 장비)',
  level: 3,
  summary: '보낼 때는 7 → 1계층으로 내려가며 헤더를 붙이고, 받을 때는 1 → 7계층으로 올라가며 뗀다',
  analogy: '편지 보내기예요. 편지를 쓰고(응용), 상대가 읽을 수 있는 글자로 바꾸고 봉하고(표현: 변환 · 암호화 · 압축), 대화 순서를 정하고(세션), 몇 장째인지 번호를 매기고(전송), 받는 집 주소를 적고(네트워크), 바로 다음 우체국까지 옮기고(데이터 링크), 트럭이 실제로 달려요(물리). 받는 쪽은 거꾸로 봉투를 하나씩 벗겨요.',
  table: {
    head: ['계층', '이름', '하는 일', '데이터 단위', '프로토콜 · 장비'],
    rows: [
      ['7', '응용', '사용자가 쓰는 서비스 제공', '메시지', 'HTTP, FTP, SMTP, DNS, Telnet, SNMP'],
      ['6', '표현', '코드 변환, 암호화, 압축 (데이터 형식 맞추기)', '메시지', 'JPEG, MPEG, ASCII'],
      ['5', '세션', '대화(연결) 설정 · 유지 · 종료, 동기점 삽입', '메시지', 'NetBIOS, RPC'],
      ['4', '전송', '끝과 끝(End-to-End) 사이 신뢰성: 오류 · 흐름 제어, 포트 번호', '세그먼트', 'TCP, UDP'],
      ['3', '네트워크', '경로 선택(라우팅), 논리 주소(IP)', '패킷', 'IP, ICMP, IGMP, ARP, 라우터'],
      ['2', '데이터 링크', '인접한 두 장비 사이 전송, 물리 주소(MAC), 오류 · 흐름 제어', '프레임', 'HDLC, PPP, 이더넷, 스위치, 브리지'],
      ['1', '물리', '0과 1을 전기 · 빛 신호로 바꿔 전송', '비트', 'RS-232C, 허브, 리피터, 케이블'],
    ],
  },
  points: [
    "외우기: 아래부터 '물데네전세표응' / 데이터 단위는 아래부터 비트 → 프레임 → 패킷 → 세그먼트 → 메시지",
    '캡슐화: 내려가면서 계층마다 헤더를 붙인다 (데이터 링크는 끝에 트레일러도 붙임) / 역캡슐화: 올라가면서 뗀다',
    'TCP/IP 4계층: 응용(OSI 5 ~ 7) · 전송(4) · 인터넷(3) · 네트워크 액세스(1 ~ 2)',
    '오류 · 흐름 제어는 데이터 링크(인접 장비 사이)와 전송 계층(끝과 끝 사이) 두 곳에서 한다',
    '프로토콜의 3요소: 구문(데이터 형식), 의미(제어 정보), 타이밍(속도 · 순서)',
  ],
  tip: '라우터 = 3계층, 스위치 · 브리지 = 2계층, 허브 · 리피터 = 1계층',
}

const ipv4: Concept = {
  title: 'IPv4 주소 체계 (클래스 · 사설 IP)',
  level: 2,
  summary: '32비트를 8비트씩 4칸으로 나눠 10진수로 쓴다. 앞부분은 네트워크, 뒷부분은 호스트',
  analogy: "IP 주소는 '○○동 ○○번지' 같은 집 주소예요. 앞부분(네트워크)은 동네 이름, 뒷부분(호스트)은 그 동네의 집 번호예요. 클래스는 동네 크기예요. A 클래스는 집이 아주 많은 큰 동네, C 클래스는 집이 254채뿐인 작은 동네예요.",
  code: `192.168.10.25
11000000.10101000.00001010.00011001    ← 8비트(옥텟) × 4칸 = 32비트
└─────── 네트워크 ───────┘└ 호스트 ┘    ← C 클래스 기본 (/24)`,
  table: {
    head: ['클래스', '첫 숫자', '맨 앞 비트', '기본 서브넷 마스크', '용도'],
    rows: [
      ['A', '0 ~ 127', '0', '255.0.0.0 (/8)', '대규모 네트워크'],
      ['B', '128 ~ 191', '10', '255.255.0.0 (/16)', '중규모 네트워크'],
      ['C', '192 ~ 223', '110', '255.255.255.0 (/24)', '소규모 네트워크'],
      ['D', '224 ~ 239', '1110', '-', '멀티캐스트'],
      ['E', '240 ~ 255', '1111', '-', '실험용 (예약)'],
    ],
  },
  points: [
    '사설 IP (내부망 전용, 인터넷에서 직접 못 씀): 10.0.0.0/8, 172.16.0.0/12 (172.16 ~ 172.31), 192.168.0.0/16 → NAT로 공인 IP와 변환',
    '특수 주소: 127.0.0.1 루프백(자기 자신), 255.255.255.255 전체 브로드캐스트, 0.0.0.0 미지정 주소',
    'A 클래스 중 0과 127은 특수 용도라 실제 네트워크 번호는 1 ~ 126',
    '전달 방식: 유니캐스트(1 : 1), 멀티캐스트(1 : 그룹), 브로드캐스트(1 : 전체)',
    'IPv4 헤더 주요 필드: 버전, 헤더 길이, TTL(지날 수 있는 라우터 수, 0이 되면 버림), 프로토콜, 체크섬, 출발지 · 목적지 주소',
    '서브넷 마스크 계산은 서브네팅 카드 참고',
  ],
  tip: '첫 숫자로 클래스 구별: ~127 A, ~191 B, ~223 C, ~239 D',
}

const ipv6: Concept = {
  title: 'IPv6 주소와 IPv4 → IPv6 전환',
  level: 3,
  summary: '128비트를 16비트씩 8칸으로 나눠 16진수로 쓴다. 브로드캐스트 대신 애니캐스트가 있다',
  analogy: 'IPv4 주소(약 43억 개)는 세계 인구보다 적어서 모자라요. IPv6는 주소 길이를 4배(128비트)로 늘려서 지구의 모래알마다 주소를 줘도 남을 만큼 많아요. 전환 기술은 옛날 도로(IPv4)와 새 도로(IPv6)가 섞여 있는 동안에도 차가 다닐 수 있게 하는 방법이에요.',
  code: `2001:0db8:0000:0000:0000:ff00:0042:8329     ← 16비트(16진수 4자리) × 8칸

축약 ① 칸마다 앞쪽 0 생략   2001:db8:0:0:0:ff00:42:8329
축약 ② 연속된 0 칸을 :: 로  2001:db8::ff00:42:8329
       :: 는 주소 하나에 한 번만 쓸 수 있다 (두 번 쓰면 0 칸 수를 알 수 없음)`,
  table: {
    head: ['구분', 'IPv4', 'IPv6'],
    rows: [
      ['주소 길이', '32비트', '128비트'],
      ['표기', '10진수 4칸, 점(.)으로 구분', '16진수 8칸, 콜론(:)으로 구분'],
      ['주소 개수', '2³² (약 43억)', '2¹²⁸'],
      ['주소 유형', '유니캐스트 · 멀티캐스트 · 브로드캐스트', '유니캐스트 · 멀티캐스트 · 애니캐스트 (브로드캐스트 없음)'],
      ['헤더', '가변 길이 (20 ~ 60바이트), 체크섬 있음', '기본 헤더 40바이트 고정 + 확장 헤더, 체크섬 없음'],
      ['주소 설정', '수동 또는 DHCP', '자동 구성 가능 (SLAAC), DHCPv6'],
      ['보안', 'IPsec은 별도 적용', 'IPsec을 확장 헤더로 기본 지원'],
      ['실시간 처리', '서비스 타입 필드', '흐름 레이블(Flow Label)로 지원'],
    ],
  },
  points: [
    '애니캐스트: 같은 주소를 가진 여러 장비 중 가장 가까운 하나에게만 전달',
    '전환 기술 ① 듀얼 스택: 한 장비가 IPv4와 IPv6를 둘 다 사용',
    '전환 기술 ② 터널링: IPv6 패킷을 IPv4 패킷 안에 감싸(캡슐화) IPv4 망을 통과',
    '전환 기술 ③ 주소 · 헤더 변환: IPv4 ↔ IPv6 헤더를 서로 바꿔 준다 (NAT-PT 등)',
    '::1 은 IPv6 루프백 주소 (IPv4의 127.0.0.1)',
    '유니캐스트 주소는 보통 앞 64비트가 네트워크(프리픽스), 뒤 64비트가 인터페이스 ID',
  ],
  tip: '128비트 · 16진수 8칸 · :: 는 한 번만 · 브로드캐스트 없음',
}

const errorDetection: Concept = {
  title: '오류 검출 · 정정 (패리티 · CRC · 해밍 코드)',
  level: 2,
  summary: '오류가 났는지 알아내는 검출(패리티 · CRC · 체크섬)과, 어디가 틀렸는지 찾아 고치는 정정(해밍 코드)',
  analogy: "택배 상자에 '사과 10개'라고 적어 보내는 거예요. 받은 사람이 세어 봐서 개수가 다르면 문제가 생긴 걸 알 수 있어요(검출). 해밍 코드는 상자 여러 곳에 확인 쪽지를 붙여서 '몇 번째 사과가 바뀌었는지'까지 알아내고 바로 고치는 방법이에요(정정).",
  table: {
    head: ['방식', '하는 일', '특징'],
    rows: [
      ['패리티 검사', '1의 개수가 짝수(또는 홀수)가 되도록 비트 1개 추가', '1비트 오류 검출, 2비트가 동시에 틀리면 못 찾음, 정정 X'],
      ['CRC (순환 중복 검사)', '생성 다항식으로 나눈 나머지를 붙여 보냄', '연속해서 생기는 집단 오류 검출에 강함, 이더넷 등에서 사용'],
      ['체크섬', '데이터를 더한 값을 함께 보냄', 'IP · TCP · UDP 헤더 오류 검사'],
      ['해밍 코드', '여러 패리티 비트로 오류 위치를 계산', '1비트 오류를 찾아서 스스로 정정'],
    ],
  },
  points: [
    '전진 오류 수정(FEC): 받는 쪽이 스스로 고친다 → 재전송이 필요 없음 (해밍 코드, 상승 코드)',
    '후진 오류 수정(BEC): 오류를 알리고 다시 보내 달라고 한다 → 패리티 · CRC로 검출 + ARQ로 재전송',
    '해밍 코드의 패리티 비트 자리: 1, 2, 4, 8 … (2의 거듭제곱 번째 자리)',
    '패리티 비트 수 p: 2ᵖ ≥ 데이터 비트 수 + p + 1 을 만족하는 가장 작은 p → 데이터 4비트면 p = 3, 전체 7비트',
  ],
  code: `① 짝수 패리티: 데이터 1101001 → 1이 4개(짝수) → 패리티 0 → 1101001 0

② 해밍 코드 (짝수 패리티, 데이터 1011)
자리   1   2   3   4   5   6   7
       p1  p2  d   p4  d   d   d
값     ?   ?   1   ?   0   1   1

p1 = 1, 3, 5, 7번 자리 검사 → 1 + 0 + 1 = 2 (짝수) → p1 = 0
p2 = 2, 3, 6, 7번 자리 검사 → 1 + 1 + 1 = 3 (홀수) → p2 = 1
p4 = 4, 5, 6, 7번 자리 검사 → 0 + 1 + 1 = 2 (짝수) → p4 = 0
보내는 값: 0110011

③ 받은 값이 0110001 이면 (6번 자리 오류)
1, 3, 5, 7번: 0 + 1 + 0 + 1 = 2 → 0
2, 3, 6, 7번: 1 + 1 + 0 + 1 = 3 → 1
4, 5, 6, 7번: 0 + 0 + 0 + 1 = 1 → 1
p4 p2 p1 = 110 = 6 → 6번 비트를 뒤집어 0110011로 정정`,
  tip: '패리티 · CRC는 "틀렸다"만, 해밍 코드는 "몇 번째가 틀렸다"까지',
}

const arqFlow: Concept = {
  title: 'ARQ (재전송) · 흐름 제어 · 혼잡 제어',
  level: 2,
  summary: '오류가 나면 다시 보내는 방법(ARQ)과, 받는 쪽 · 네트워크가 넘치지 않게 보내는 양을 조절하는 방법',
  analogy: "받아쓰기 시간이에요. 정지-대기는 한 문장 부르고 '다 썼니?'를 확인한 뒤 다음 문장을 불러요. Go-Back-N은 여러 문장을 이어서 부르다가 3번이 틀렸다고 하면 3번부터 전부 다시 불러요. 선택적 재전송은 틀린 3번 문장만 다시 불러요. 슬라이딩 윈도우는 '확인 없이 한 번에 불러도 되는 문장 수'예요.",
  table: {
    head: ['ARQ 방식', '동작', '특징'],
    rows: [
      ['정지-대기 (Stop-and-Wait)', '한 프레임 보내고 ACK가 올 때까지 기다림', '단순하지만 기다리는 시간이 길어 비효율적'],
      ['Go-Back-N', '여러 프레임을 연속 전송, 오류 난 프레임부터 그 뒤를 모두 재전송', '잘 받은 프레임도 다시 보냄'],
      ['선택적 재전송 (Selective Repeat)', '오류 난 프레임만 재전송', '효율적, 받는 쪽에 순서를 맞출 버퍼 필요'],
      ['적응적 ARQ (Adaptive)', '회선 상태에 따라 프레임 길이를 바꿈', '효율이 가장 좋지만 제어가 복잡'],
    ],
  },
  code: `보낸 프레임: 0 1 2 3 4 5    → 2번에서 오류 (NAK 2)

Go-Back-N      : 2 3 4 5 를 다시 전송 (2번부터 전부)
선택적 재전송  : 2 만 다시 전송`,
  points: [
    'ACK: 잘 받았다는 응답 / NAK: 오류가 났다는 응답 / 타임아웃: 정해진 시간 안에 ACK가 없으면 재전송',
    '흐름 제어: 받는 쪽의 처리 속도에 맞춰 보내는 양을 조절 (송신자 ↔ 수신자 문제) → 정지-대기, 슬라이딩 윈도우',
    '슬라이딩 윈도우: ACK 없이 연속으로 보낼 수 있는 개수(윈도우 크기)만큼 보내고, ACK를 받으면 창을 앞으로 민다. TCP는 받는 쪽이 알려 준 윈도우 크기를 쓴다',
    '혼잡 제어: 네트워크 전체가 막히지 않게 조절 → 느린 시작(Slow Start: 윈도우를 1부터 2배씩 늘림), 혼잡 회피(임계값부터는 1씩 늘림)',
  ],
  tip: 'Go-Back-N = 틀린 곳부터 전부, Selective Repeat = 틀린 것만',
}

const hdlc: Concept = {
  title: 'HDLC (프레임 구조 · 종류 · 동작 모드)',
  level: 2,
  summary: '데이터 링크 계층의 비트 중심 프로토콜. 프레임 3종류(정보 · 감독 · 비번호)와 동작 모드 3가지',
  analogy: "HDLC 프레임은 기차예요. 맨 앞과 맨 뒤에 깃발(플래그 01111110)을 꽂아 기차의 시작과 끝을 알리고, 그 사이에 받는 곳(주소), 기관사 지시(제어), 짐(정보), 짐 확인표(FCS)를 싣고 달려요. 정보 프레임은 짐을 싣는 기차, 감독 프레임은 '잘 받았어 · 다시 보내'라는 신호 기차, 비번호 프레임은 '운행 시작 · 운행 끝' 같은 연결 관리 기차예요.",
  code: `┌────────┬──────┬──────┬────────┬─────┬────────┐
│ 플래그 │ 주소 │ 제어 │  정보  │ FCS │ 플래그 │
└────────┴──────┴──────┴────────┴─────┴────────┘
 01111110                         ↑ 오류 검사 (CRC)  01111110`,
  table: {
    head: ['구분', '이름', '하는 일'],
    rows: [
      ['프레임', '정보 프레임 (I 프레임)', '사용자 데이터를 전송 (확인 응답을 함께 실어 보내는 피기백킹 가능)'],
      ['프레임', '감독 프레임 (S 프레임)', '오류 제어 · 흐름 제어 (수신 준비, 재전송 요청 등)'],
      ['프레임', '비번호 프레임 (U 프레임)', '링크 설정 · 해제 등 링크 관리 (순서 번호 없음)'],
      ['동작 모드', '정규 응답 모드 (NRM)', '주국이 허락해야 종국이 전송 (반이중, 불균형 구성)'],
      ['동작 모드', '비동기 응답 모드 (ARM)', '종국이 허락 없이 전송 가능, 링크 관리는 주국이 맡음 (전이중)'],
      ['동작 모드', '비동기 균형 모드 (ABM)', '모든 국이 대등한 혼합국, 허락 없이 전송 (전이중, 가장 많이 씀)'],
    ],
  },
  points: [
    '주국: 명령을 보내는 쪽 / 종국: 응답하는 쪽 / 혼합국: 둘 다 할 수 있는 국',
    '비트 스터핑: 데이터 안에 1이 5개 연속되면 0을 하나 끼워 넣어 플래그(01111110)와 헷갈리지 않게 한다',
    '오류 제어는 FCS(CRC)로 검출하고 ARQ로 재전송한다',
  ],
  tip: '프레임은 정보 · 감독 · 비번호, 모드는 정규 응답 · 비동기 응답 · 비동기 균형',
}

const switching: Concept = {
  title: '교환 방식 (회선 교환 · 가상 회선 · 데이터그램)',
  level: 2,
  summary: '패킷 교환은 경로를 미리 정하는 가상 회선 방식과, 패킷마다 따로 가는 데이터그램 방식으로 나뉜다',
  analogy: '가상 회선은 수학여행 버스예요. 출발 전에 갈 길을 정해 두고 모든 학생(패킷)이 같은 길로 순서대로 도착해요. 데이터그램은 각자 택시를 타고 가는 거예요. 택시마다 빠른 길을 따로 골라서 도착 순서가 뒤바뀔 수 있어요. 회선 교환은 전화처럼 통화가 끝날 때까지 길 하나를 통째로 빌려 쓰는 거예요.',
  table: {
    head: ['방식', '동작', '특징'],
    rows: [
      ['회선 교환', '통신 전에 물리적 경로를 잡고 끝날 때까지 독점', '전송 지연이 일정, 회선 낭비 (전화망)'],
      ['메시지 교환', '메시지 전체를 저장했다가 다음 노드로 전달', '저장 후 전달 방식, 지연이 큼'],
      ['패킷 교환: 가상 회선', '전송 전에 논리적 경로(가상 회선)를 설정, 모든 패킷이 같은 경로', '연결형, 패킷이 보낸 순서대로 도착 (X.25)'],
      ['패킷 교환: 데이터그램', '연결 설정 없이 패킷마다 독립적으로 경로 선택', '비연결형, 도착 순서가 바뀔 수 있음, 장애에 유연 (IP)'],
    ],
  },
  points: [
    '패킷: 데이터를 일정 크기로 잘라 주소 등 헤더를 붙인 묶음',
    'ATM: 53바이트 고정 길이 셀(헤더 5바이트 + 데이터 48바이트)로 전송하는 비동기 전송 방식',
  ],
  tip: '가상 회선 = 길 먼저 정하고 순서대로, 데이터그램 = 각자 알아서',
}

const tcpConnection: Concept = {
  title: 'TCP 연결 설정 · 해제와 TCP vs UDP',
  level: 3,
  summary: '연결은 3-way handshake(SYN → SYN + ACK → ACK), 해제는 4-way handshake(FIN → ACK → FIN → ACK)',
  analogy: "전화 통화예요. '여보세요, 들려?'(SYN) → '응 들려, 너도 내 말 들려?'(SYN + ACK) → '응 들려!'(ACK)로 서로 확인한 뒤 대화를 시작해요. 끊을 때는 '나 할 말 다 했어'(FIN) → '알았어'(ACK) → 상대도 할 말을 마치고 '나도 다 했어'(FIN) → '알았어, 끊자'(ACK)로 네 번 주고받아요.",
  code: `[연결 설정: 3-way handshake]
클라이언트                               서버 (LISTEN)
   │ ── ① SYN (seq = x) ──────────────────→ │
   │ ←── ② SYN + ACK (seq = y, ack = x + 1) ─ │
   │ ── ③ ACK (ack = y + 1) ───────────────→ │
 ESTABLISHED                           ESTABLISHED

[연결 해제: 4-way handshake]
   │ ── ① FIN ─────────────────────────────→ │
   │ ←── ② ACK ───────────────────────────── │  (서버는 남은 데이터를 마저 보냄)
   │ ←── ③ FIN ───────────────────────────── │
   │ ── ④ ACK ─────────────────────────────→ │
 TIME_WAIT 후 종료                       CLOSED`,
  table: {
    head: ['구분', 'TCP', 'UDP'],
    rows: [
      ['연결', '연결형 (3-way handshake 후 전송)', '비연결형 (바로 전송)'],
      ['신뢰성', '순서 보장, 오류 · 흐름 · 혼잡 제어, 재전송', '보장하지 않음 (확인 응답 없음)'],
      ['헤더 크기', '20바이트 이상', '8바이트'],
      ['속도', '상대적으로 느림', '빠름'],
      ['전송 단위', '세그먼트', '데이터그램'],
      ['사용 예', 'HTTP, FTP, SMTP, SSH, Telnet', 'DNS 조회, DHCP, SNMP, TFTP, 실시간 방송'],
    ],
  },
  points: [
    'TCP 플래그: SYN(연결 요청), ACK(응답 확인), FIN(연결 종료), RST(연결 강제 초기화), PSH(바로 전달), URG(긴급 데이터)',
    'ACK 번호 = 다음에 받고 싶은 순서 번호 (받은 seq + 1)',
    'SYN Flooding 공격: SYN만 잔뜩 보내고 마지막 ACK를 보내지 않아, 서버를 반쯤 열린(Half-Open) 연결로 가득 채운다',
    'TIME_WAIT: 마지막 ACK를 보낸 쪽이 늦게 도착하는 패킷에 대비해 잠시 기다리는 상태',
    'TCP와 UDP는 모두 전송 계층(4계층) 프로토콜이고, 포트 번호로 프로그램을 구별한다',
  ],
  tip: '연결 3번(SYN · SYN + ACK · ACK), 해제 4번(FIN · ACK · FIN · ACK)',
}

const appProtocols: Concept = {
  title: '응용 계층 프로토콜과 포트 번호',
  level: 3,
  summary: '웹 · 메일 · 파일 · 원격 접속 · 관리 등 용도별 프로토콜과 기본 포트 번호',
  analogy: '포트 번호는 큰 건물(서버)의 방 번호예요. IP 주소로 건물을 찾아간 뒤, 80번 방은 웹, 25번 방은 메일 보내기, 53번 방은 전화번호부(DNS)처럼 방마다 하는 일이 정해져 있어요.',
  table: {
    head: ['프로토콜', '포트', '전송', '하는 일'],
    rows: [
      ['FTP', '20 (데이터) · 21 (제어)', 'TCP', '파일 전송'],
      ['SSH', '22', 'TCP', '암호화된 원격 접속'],
      ['Telnet', '23', 'TCP', '암호화 없는 원격 접속'],
      ['SMTP', '25', 'TCP', '메일 보내기'],
      ['DNS', '53', 'UDP · TCP', '도메인 이름 ↔ IP 주소'],
      ['DHCP', '67 (서버) · 68 (클라이언트)', 'UDP', 'IP 주소 자동 할당'],
      ['TFTP', '69', 'UDP', '인증 없는 간단한 파일 전송'],
      ['HTTP', '80', 'TCP', '웹 문서(하이퍼텍스트) 전송'],
      ['POP3', '110', 'TCP', '메일 받기 (PC로 가져옴)'],
      ['NTP', '123', 'UDP', '시간 동기화'],
      ['IMAP', '143', 'TCP', '메일 받기 (서버에 남겨 두고 동기화)'],
      ['SNMP', '161 · 162 (트랩)', 'UDP', '네트워크 장비 감시 · 관리'],
      ['HTTPS', '443', 'TCP', 'HTTP + SSL/TLS 암호화'],
    ],
  },
  points: [
    '메일: 보낼 때 SMTP, 받을 때 POP3 · IMAP / MIME: 메일에 이미지 · 파일 같은 멀티미디어를 담는 형식',
    'HTTP 메소드: GET(조회), POST(생성 · 전송), PUT(전체 수정), PATCH(일부 수정), DELETE(삭제)',
    'HTTP 상태 코드: 2xx 성공(200 OK), 3xx 다른 곳으로 이동, 4xx 클라이언트 오류(404 Not Found), 5xx 서버 오류(500)',
    'IoT용 가벼운 프로토콜: MQTT(발행 · 구독 방식, 브로커 사용, TCP 기반), CoAP(UDP 기반, 제약이 많은 기기용)',
    '잘 알려진 포트(Well-known Port): 0 ~ 1023',
  ],
  tip: 'FTP 20 · 21, SSH 22, Telnet 23, SMTP 25, DNS 53, HTTP 80, POP3 110, IMAP 143, HTTPS 443',
}

const uriStructure: Concept = {
  title: 'URI 구조 (URL · URN)',
  level: 2,
  summary: '인터넷 자원을 가리키는 주소 형식: scheme://authority/path?query#fragment',
  analogy: "URI는 편지 봉투에 쓰는 주소 형식이에요. '어떤 방법으로 보낼지(scheme: 택배? 등기?)', '어느 건물인지(host)', '몇 번 출입구인지(port)', '건물 안 몇 층 몇 호인지(path)', '받는 사람에게 남기는 부탁 쪽지(query)', '편지 안에서 펼쳐 볼 쪽(fragment)'을 순서대로 적어요.",
  code: `https://user:pw@www.example.com:8080/board/view?id=10&page=2#comment

scheme    https              어떤 방법(프로토콜)으로 접근할지
userinfo  user:pw            사용자 정보 (생략 가능, 보안상 잘 쓰지 않음)
host      www.example.com    서버의 도메인 이름 또는 IP 주소
port      8080               생략하면 기본 포트 (http 80, https 443)
path      /board/view        서버 안에서 자원의 위치
query     id=10&page=2       ? 뒤, 이름=값 쌍을 &로 연결
fragment  comment            # 뒤, 문서 안의 특정 위치 (서버로 보내지 않음)

authority = userinfo@host:port`,
  table: {
    head: ['구분', '뜻', '예'],
    rows: [
      ['URI', '자원을 식별하는 문자열 전체 (URL과 URN을 포함)', 'URL · URN 모두'],
      ['URL', '자원이 어디에 있는지(위치)로 식별', 'https://www.example.com/index.html'],
      ['URN', '위치와 상관없는 고유한 이름으로 식별', 'urn:isbn:0451450523'],
    ],
  },
  points: [
    '일반 형식 (RFC 3986): scheme:[//authority]path[?query][#fragment]',
    '구분 기호: scheme 뒤 ://, port 앞 :, query 앞 ?, query 안의 쌍 사이 &, fragment 앞 #',
    '한글 · 공백 같은 문자는 퍼센트 인코딩으로 바꾼다: 공백 → %20',
    'mailto:a@example.com 처럼 authority(//)가 없는 URI도 있다',
  ],
  tip: '순서: scheme → authority(userinfo@host:port) → path → ?query → #fragment',
}

const shortestPath: Concept = {
  title: '최단 경로 계산 (다익스트라 · OSPF)',
  level: 2,
  summary: '출발점에서 가장 가까운 곳부터 하나씩 확정하며, 그곳을 거쳐 가는 길이 더 짧으면 거리를 고친다',
  analogy: '학교에서 여러 친구 집까지 가는 가장 짧은 길을 찾는 거예요. 가장 가까운 친구 집부터 확정하고, 그 집을 거쳐 가면 다른 친구 집이 더 가까워지는지 확인해 지도에 적힌 거리를 고쳐 나가요. 모든 집이 확정되면 끝이에요.',
  code: `간선(비용): A-B 4, A-C 2, B-C 1, B-D 5, C-D 8, C-E 10, D-E 2
A에서 출발해 E까지 가장 짧은 경로는?`,
  table: {
    head: ['단계', '확정', 'B', 'C', 'D', 'E'],
    rows: [
      ['시작', 'A (0)', '4', '2', '∞', '∞'],
      ['1', 'C (2)', '2 + 1 = 3 ↓', '-', '2 + 8 = 10', '2 + 10 = 12'],
      ['2', 'B (3)', '-', '-', '3 + 5 = 8 ↓', '12'],
      ['3', 'D (8)', '-', '-', '-', '8 + 2 = 10 ↓'],
      ['4', 'E (10)', '-', '-', '-', '-'],
    ],
  },
  points: [
    '방법: ① 아직 확정 안 된 곳 중 거리가 가장 작은 곳을 확정 ② 그곳과 이어진 곳의 거리를 "확정 거리 + 간선 비용"과 비교해 더 작으면 고친다 ③ 반복',
    '경로는 거리를 고칠 때 어디를 거쳐 왔는지 적어 두고 거꾸로 따라간다 → A → C → B → D → E (비용 10)',
    'OSPF는 링크 비용으로 다익스트라를, RIP은 홉 수로 벨만-포드를 쓴다',
    '같은 그림을 RIP(홉 수)로 보면 A → C → E 가 2홉으로 가장 짧다 → 기준에 따라 답이 달라진다',
  ],
  tip: '가장 가까운 곳부터 확정, 거쳐 가는 길이 더 짧으면 고치기',
}

const osNetworkSections: Section[] = [
  { title: '운영체제 계산', concepts: [w.scheduling, w.pageReplacement, w.processState, w.memory, w.concurrency, w.diskScheduling, w.unix] },
  { title: '네트워크 기초 (OSI · TCP)', concepts: [w.osi, osiLayers, tcpConnection, errorDetection, arqFlow, hdlc, switching] },
  { title: 'IP 주소', concepts: [ipv4, ipv6, w.subnetting] },
  { title: '라우팅', concepts: [routing, shortestPath] },
  { title: '응용 프로토콜 · URI', concepts: [appProtocols, uriStructure, networkTerms] },
]

// 출제 우선순위 순서
export const practicalSubjects: Subject[] = [
  {
    id: 'programming',
    name: '프로그래밍 (C · Java · Python)',
    concepts: programmingSections.flatMap((s) => s.concepts),
    sections: programmingSections,
  },
  { id: 'sql', name: 'SQL', concepts: sqlSections.flatMap((s) => s.concepts), sections: sqlSections },
  {
    id: 'security',
    name: '보안 공격 · 암호',
    concepts: [securityBasics, authMethods, vpn, securityTerms, w.malwareAttacks, w.malwareTypes, w.networkAttacks, w.crypto, w.accessControl, w.securityModels, w.securitySolutions, w.devSecurity],
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
    concepts: osNetworkSections.flatMap((s) => s.concepts),
    sections: osNetworkSections,
  },
  { id: 'uml', name: 'UML · 요구사항', concepts: [w.uml, w.requirements, w.lifecycle, w.agile, w.analysisTools] },
  { id: 'new-tech', name: '신기술 용어', concepts: [w.newTech, w.cloud] },
]
