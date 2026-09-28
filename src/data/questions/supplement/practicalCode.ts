import type { Question } from '../../../types'

// 실기 코드 결과 · SQL 보강 문제 (기출 원문 아님). 답은 로직을 그대로 옮겨 실행해 확인했다.
const SRC = '빈출 변형'

const TABLES = `[학생]
학번 | 이름   | 학과 | 학년 | 점수
1    | 김철수 | 컴공 | 3    | 85
2    | 이영희 | 전자 | 2    | 92
3    | 박민수 | 컴공 | 2    | 78
4    | 최지은 | 경영 | 4    | 88
5    | 정우성 | 컴공 | 3    | NULL

[수강]
학번 | 과목
1    | DB
1    | OS
2    | DB
3    | NW
3    | DB`

const C = '다음 C 프로그램의 출력 결과를 쓰시오.'
const J = '다음 Java 프로그램의 출력 결과를 쓰시오.'
const P = '다음 Python 프로그램의 출력 결과를 쓰시오.'

export const supplementPracticalCode: Question[] = [
  /* ───────── 프로그래밍: C ───────── */
  {
    id: 'ap-c03', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: C,
    code: `#include <stdio.h>
void p(int n) {
    if (n == 0) return;
    printf("%d", n);
    p(n - 1);
    printf("%d", n);
}
int main() {
    p(3);
    return 0;
}`,
    answer: ['321123'],
    explanation: '내려가면서 3, 2, 1을 출력하고, 돌아오면서(재귀 호출 뒤의 printf) 1, 2, 3을 출력한다.',
  },
  {
    id: 'ap-c04', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: C,
    code: `#include <stdio.h>
int g(int n) {
    if (n < 10) return n;
    return g(n / 10) + n % 10;
}
int main() {
    printf("%d", g(g(98765)));
    return 0;
}`,
    answer: ['8'],
    explanation: 'g는 각 자리 숫자의 합. g(98765) = 9 + 8 + 7 + 6 + 5 = 35, g(35) = 3 + 5 = 8.',
  },
  {
    id: 'ap-c05', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: C,
    code: `#include <stdio.h>
int main() {
    char *s = "PROGRAM";
    char *p = s + 3;
    printf("%c%c", *p, *(s + 1));
    printf("%s", p + 2);
    return 0;
}`,
    answer: ['GRAM'],
    explanation: 'P0 R1 O2 G3 R4 A5 M6. *p = s[3] = G, *(s + 1) = R, p + 2 = s + 5부터 끝까지 "AM" → GRAM.',
  },
  {
    id: 'ap-c06', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: C,
    code: `#include <stdio.h>
int main() {
    int a[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    int *p = a[1];
    int sum = 0;
    for (int i = 0; i < 3; i++)
        sum += a[i][2 - i];
    printf("%d %d %d", sum, *(p + 2), *(*(a + 2) + 1));
    return 0;
}`,
    answer: ['15 6 8'],
    explanation: 'sum = a[0][2] + a[1][1] + a[2][0] = 3 + 5 + 7 = 15. p는 a[1]의 시작이므로 *(p + 2) = a[1][2] = 6. *(*(a + 2) + 1) = a[2][1] = 8.',
  },
  {
    id: 'ap-c07', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: C,
    code: `#include <stdio.h>
#include <string.h>
int main() {
    char s[] = "ABCDE";
    int n = strlen(s);
    for (int i = 0; i < n / 2; i++) {
        char t = s[i];
        s[i] = s[n - 1 - i];
        s[n - 1 - i] = t;
    }
    printf("%s %c", s, s[n / 2]);
    return 0;
}`,
    answer: ['EDCBA C'],
    explanation: 'n / 2 = 2번 교환(A↔E, B↔D)하여 EDCBA. 가운데 s[2]는 그대로 C.',
  },
  {
    id: 'ap-c08', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: C,
    code: `#include <stdio.h>
int main() {
    int a[] = {5, 2, 4, 1, 3};
    int i, j, t, cnt = 0;
    for (i = 0; i < 4; i++)
        for (j = 0; j < 4 - i; j++)
            if (a[j] > a[j + 1]) {
                t = a[j]; a[j] = a[j + 1]; a[j + 1] = t;
                cnt++;
            }
    for (i = 0; i < 5; i++) printf("%d", a[i]);
    printf(" %d", cnt);
    return 0;
}`,
    answer: ['12345 7'],
    explanation: '버블 정렬의 교환 횟수는 앞뒤 순서가 뒤바뀐 쌍의 수와 같다: (5,2)(5,4)(5,1)(5,3)(2,1)(4,1)(4,3) = 7.',
  },
  {
    id: 'ap-c09', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: C,
    code: `#include <stdio.h>
void swap1(int a, int b) { int t = a; a = b; b = t; }
void swap2(int *a, int *b) { int t = *a; *a = *b; *b = t; }
int main() {
    int x = 1, y = 2;
    swap1(x, y);
    printf("%d%d ", x, y);
    swap2(&x, &y);
    printf("%d%d", x, y);
    return 0;
}`,
    answer: ['12 21'],
    explanation: 'swap1은 값에 의한 호출이라 복사본만 바뀐다. swap2는 주소를 넘겨 원본이 바뀐다.',
  },
  {
    id: 'ap-c10', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: C,
    code: `#include <stdio.h>
int main() {
    int n = 13, b[8], i = 0;
    while (n > 0) {
        b[i++] = n % 2;
        n /= 2;
    }
    for (i = i - 1; i >= 0; i--) printf("%d", b[i]);
    return 0;
}`,
    answer: ['1101'],
    explanation: '나머지를 1, 0, 1, 1 순서로 저장한 뒤 거꾸로 출력하면 13의 2진수 1101.',
  },
  {
    id: 'ap-c11', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: C,
    code: `#include <stdio.h>
int main() {
    char *names[] = {"Kim", "Lee", "Park"};
    char **pp = names;
    printf("%s ", *(pp + 2));
    printf("%c ", **pp);
    printf("%c", *(*(pp + 1) + 2));
    return 0;
}`,
    answer: ['Park K e'],
    explanation: '*(pp + 2) = names[2] = "Park". **pp = names[0][0] = K. *(*(pp + 1) + 2) = names[1][2] = e.',
  },
  {
    id: 'ap-c12', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: C,
    code: `#include <stdio.h>
int main() {
    int cnt = 0, sum = 0;
    for (int i = 2; i <= 20; i++) {
        int isPrime = 1;
        for (int j = 2; j * j <= i; j++)
            if (i % j == 0) { isPrime = 0; break; }
        if (isPrime) { cnt++; sum += i; }
    }
    printf("%d %d", cnt, sum);
    return 0;
}`,
    answer: ['8 77'],
    explanation: '20 이하 소수: 2, 3, 5, 7, 11, 13, 17, 19 → 8개, 합 77.',
  },

  /* ───────── 프로그래밍: Java ───────── */
  {
    id: 'ap-j03', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: J,
    code: `public class Main {
    static int f(int n) {
        try {
            if (n == 0) throw new ArithmeticException();
            System.out.print("A");
            return 1;
        } catch (ArithmeticException e) {
            System.out.print("B");
            return 2;
        } finally {
            System.out.print("C");
        }
    }
    public static void main(String[] args) {
        int r = f(0) + f(1);
        System.out.print(r);
    }
}`,
    answer: ['BCAC3'],
    explanation: 'f(0): 예외 → B, finally C, 2 반환. f(1): A, finally C, 1 반환. return이 있어도 finally는 실행된다. 마지막에 2 + 1 = 3.',
  },
  {
    id: 'ap-j04', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: J,
    code: `public class Main {
    static int f(int n) {
        if (n <= 1) return n;
        return f(n - 1) + f(n - 2) * 2;
    }
    public static void main(String[] args) {
        System.out.print(f(5));
    }
}`,
    answer: ['11'],
    explanation: 'f(0)=0, f(1)=1, f(2)=1+0=1, f(3)=1+2=3, f(4)=3+2=5, f(5)=5+6=11. 작은 값부터 표로 채운다.',
  },
  {
    id: 'ap-j05', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: J,
    code: `class A {
    void show(int x)    { System.out.print("A" + x); }
    void show(double x) { System.out.print("D" + x); }
}
class B extends A {
    void show(int x)    { System.out.print("B" + x); }
}
public class Main {
    public static void main(String[] args) {
        A o = new B();
        o.show(3);
        o.show(2.5);
    }
}`,
    answer: ['B3D2.5'],
    explanation: 'show(int)는 B가 오버라이딩했으므로 B3. show(double)은 오버라이딩되지 않았으므로 A의 메소드가 실행되어 D2.5.',
  },
  {
    id: 'ap-j06', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: J,
    code: `class P {
    static int total = 0;
    int v;
    P() { this(10); total += 1; }
    P(int v) { this.v = v; total += v; }
}
public class Main {
    public static void main(String[] args) {
        P a = new P();
        P b = new P(5);
        System.out.print(a.v + b.v + " " + P.total);
    }
}`,
    answer: ['15 16'],
    explanation: 'new P(): this(10)으로 total 10, 이어서 +1 → 11. new P(5): +5 → 16. a.v + b.v는 문자열보다 먼저 계산되어 15.',
  },
  {
    id: 'ap-j07', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: J,
    code: `public class Main {
    public static void main(String[] args) {
        String s = "Information";
        System.out.print(s.substring(2, 5) + s.indexOf("o")
            + s.charAt(s.length() - 1) + s.toUpperCase().lastIndexOf('O'));
    }
}`,
    answer: ['for3n9'],
    explanation: 'I0 n1 f2 o3 r4 m5 a6 t7 i8 o9 n10. substring(2, 5) = "for", indexOf("o") = 3, charAt(10) = n, "INFORMATION"에서 마지막 O는 9.',
  },
  {
    id: 'ap-j08', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: J,
    code: `public class Main {
    static void change(int[] arr, int n) {
        arr[0] = 100;
        n = 100;
    }
    public static void main(String[] args) {
        int[] a = {1, 2, 3};
        int n = 1;
        change(a, n);
        int[] b = a;
        b[1] = 50;
        System.out.print(a[0] + " " + a[1] + " " + n);
    }
}`,
    answer: ['100 50 1'],
    explanation: '배열은 참조가 전달되어 원본이 바뀌고, int는 값이 복사되어 원본 n은 그대로 1. b = a는 같은 배열을 가리킨다.',
  },
  {
    id: 'ap-j09', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: J,
    code: `class Parent {
    int x = 10;
    int get() { return x; }
}
class Child extends Parent {
    int x = 20;
    int get() { return x + super.get(); }
}
public class Main {
    public static void main(String[] args) {
        Parent p = new Child();
        System.out.print(p.get() + " " + p.x);
    }
}`,
    answer: ['30 10'],
    explanation: 'p.get()은 Child의 get: Child의 x(20) + Parent의 get(Parent의 x 10) = 30. 필드 p.x는 선언 타입 Parent를 따라 10.',
  },
  {
    id: 'ap-j10', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: J,
    code: `abstract class Animal {
    abstract String sound();
    String twice() { return sound() + sound(); }
}
class Dog extends Animal {
    String sound() { return "W"; }
}
class Cat extends Animal {
    String sound() { return "M"; }
    String twice() { return "C" + super.twice(); }
}
public class Main {
    public static void main(String[] args) {
        Animal[] arr = { new Dog(), new Cat() };
        for (Animal a : arr) System.out.print(a.twice());
    }
}`,
    answer: ['WWCMM'],
    explanation: 'Dog: 부모의 twice가 Dog의 sound를 두 번 호출 → WW. Cat: "C" + 부모 twice(Cat의 sound 두 번) → CMM.',
  },
  {
    id: 'ap-j11', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: J,
    code: `public class Main {
    public static void main(String[] args) {
        int[][] m = {{1, 2, 3}, {4, 5}, {6}};
        int sum = 0;
        for (int i = 0; i < m.length; i++)
            for (int j = 0; j < m[i].length; j++)
                if ((i + j) % 2 == 0) sum += m[i][j];
        System.out.print(m[1].length + " " + sum);
    }
}`,
    answer: ['2 15'],
    explanation: '행마다 길이가 다른 배열. m[1].length = 2. (i + j)가 짝수인 칸: m[0][0]=1, m[0][2]=3, m[1][1]=5, m[2][0]=6 → 15.',
  },
  {
    id: 'ap-j12', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: J,
    code: `public class Main {
    public static void main(String[] args) {
        int n = 12345, r = 0;
        while (n > 0) {
            r = r * 10 + n % 10;
            n /= 10;
        }
        System.out.print(r % 2 == 0 ? r / 2 : r * 2);
    }
}`,
    answer: ['108642'],
    explanation: '숫자를 뒤집어 r = 54321. 홀수이므로 r * 2 = 108642.',
  },

  /* ───────── 프로그래밍: Python ───────── */
  {
    id: 'ap-y01', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: P,
    code: `s = "apple,banana,cherry"
a = s.split(",")
print(len(a), a[1][::-1], "-".join(x[0] for x in a))`,
    answer: ['3 ananab a-b-c'],
    explanation: 'split으로 3개 리스트. a[1][::-1]은 "banana"를 뒤집은 "ananab". 각 단어 첫 글자를 "-"로 이어 a-b-c.',
  },
  {
    id: 'ap-y02', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: P,
    code: `a = {1, 2, 3, 4}
b = {3, 4, 5}
print(len(a | b), sorted(a & b), sorted(a - b))`,
    answer: ['5 [3, 4] [1, 2]'],
    explanation: '| 합집합 {1,2,3,4,5} → 5개, & 교집합 [3, 4], - 차집합 [1, 2]. sorted는 리스트를 돌려준다.',
  },
  {
    id: 'ap-y03', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: P,
    code: `scores = {"kim": 80, "lee": 95, "park": 70}
scores["choi"] = 88
del scores["park"]
best = max(scores, key=scores.get)
print(len(scores), best, sum(scores.values()))`,
    answer: ['3 lee 263'],
    explanation: 'choi 추가, park 삭제 → kim 80, lee 95, choi 88. 값이 가장 큰 키는 lee, 합 263.',
  },
  {
    id: 'ap-y04', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: P,
    code: `def f(n):
    if n == 0:
        return ""
    return f(n // 2) + str(n % 2)

print(f(10), int(f(10), 2) + 1)`,
    answer: ['1010 11'],
    explanation: 'f는 2진수 문자열을 만든다. 10 → "1010". int("1010", 2) = 10, +1 = 11.',
  },
  {
    id: 'ap-y05', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: P,
    code: `class Account:
    rate = 2
    def __init__(self, money):
        self.money = money
    def add(self, x):
        self.money += x * Account.rate
        return self

a = Account(100)
b = Account(50)
a.add(10).add(5)
Account.rate = 3
b.add(10)
print(a.money, b.money)`,
    answer: ['130 80'],
    explanation: 'a: 100 + 10×2 + 5×2 = 130 (add가 self를 돌려줘 연달아 호출). rate를 3으로 바꾼 뒤 b: 50 + 10×3 = 80.',
  },
  {
    id: 'ap-y06', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: P,
    code: `m = [[i * j for j in range(1, 4)] for i in range(1, 4)]
print(m[2], sum(m[i][i] for i in range(3)))`,
    answer: ['[3, 6, 9] 14'],
    explanation: 'm = [[1,2,3],[2,4,6],[3,6,9]]. m[2] = [3, 6, 9], 대각선 1 + 4 + 9 = 14.',
  },
  {
    id: 'ap-y07', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: P,
    code: `s = "ENGINEER"
print(s.count("E"), s.find("N"), s[1:6:2], s.replace("E", "e", 2))`,
    answer: ['3 1 NIE eNGINeER'],
    explanation: 'E0 N1 G2 I3 N4 E5 E6 R7. E는 3개, 첫 N은 1. s[1:6:2]는 1, 3, 5번 → NIE. replace의 세 번째 인자 2는 앞에서부터 2개만 바꾼다.',
  },
  {
    id: 'ap-y08', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: P,
    code: `a = [5, 3, 8, 1]
a.insert(1, 9)
a.pop()
a.remove(8)
a.sort(reverse=True)
print(a, a.index(3))`,
    answer: ['[9, 5, 3] 2'],
    explanation: 'insert → [5,9,3,8,1], pop()은 맨 뒤 삭제 → [5,9,3,8], remove(8)은 값 삭제 → [5,9,3], 내림차순 [9,5,3], 3의 위치 2.',
  },
  {
    id: 'ap-y09', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: P,
    code: `names = ["A", "B", "C"]
nums = [3, 1, 2]
r = ""
for i, (n, k) in enumerate(zip(names, nums)):
    r += n * (k + i)
print(r, len(r))`,
    answer: ['AAABBCCCC 9'],
    explanation: 'i=0: A×3, i=1: B×(1+1), i=2: C×(2+2) → AAABBCCCC, 길이 9. 문자열 * 정수는 반복.',
  },
  {
    id: 'ap-y10', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: P,
    code: `total = 0
for i in range(10, 0, -3):
    if i % 2 == 0:
        continue
    total += i
print(total, list(range(10, 0, -3)))`,
    answer: ['8 [10, 7, 4, 1]'],
    explanation: 'range(10, 0, -3) = 10, 7, 4, 1 (끝 0은 포함 X). 짝수는 건너뛰고 7 + 1 = 8.',
  },
  {
    id: 'ap-y11', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: P,
    code: `data = [("kim", 3), ("lee", 1), ("park", 2)]
data.sort(key=lambda x: x[1])
print([d[0] for d in data][:2], sorted([len(d[0]) for d in data], reverse=True))`,
    answer: ["['lee', 'park'] [4, 3, 3]"],
    explanation: '두 번째 값 기준 정렬 → lee, park, kim. 앞 2개 이름. 이름 길이 3, 4, 3을 내림차순 → [4, 3, 3].',
  },
  {
    id: 'ap-y12', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: P,
    code: `d = {}
for c in "banana":
    d[c] = d.get(c, 0) + 1
print(len(d), d["a"], "".join(k + str(v) for k, v in d.items()))`,
    answer: ['3 3 b1a3n2'],
    explanation: '키는 처음 나온 순서(b, a, n)를 유지한다. b 1개, a 3개, n 2개 → b1a3n2.',
  },
  {
    id: 'ap-y13', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: P,
    code: `x = 10
def add(n):
    global x
    x += n
    return x

r = add(5) + add(3)
print(r, x)`,
    answer: ['33 18'],
    explanation: 'global로 바깥 x를 직접 바꾼다. add(5) = 15, add(3) = 18 → r = 33, x = 18.',
  },

  /* ───────── SQL (아래 두 테이블 기준) ───────── */
  {
    id: 'ap-s06', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: '다음 SQL의 실행 결과를 공백으로 구분해 쓰시오.',
    code: `${TABLES}

SELECT COUNT(*), COUNT(점수) FROM 학생;`,
    answer: ['5 4'],
    explanation: 'COUNT(*)는 NULL을 포함한 행 수 5, COUNT(점수)는 NULL을 제외해 4.',
  },
  {
    id: 'ap-s07', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: '다음 SQL의 결과 행 수를 쓰시오.',
    code: `${TABLES}

SELECT DISTINCT 학과 FROM 학생;`,
    answer: ['3', '3개', '3행'],
    explanation: 'DISTINCT로 중복을 제거하면 컴공, 전자, 경영 3행.',
  },
  {
    id: 'ap-s08', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: '다음 SQL의 결과 행 수를 쓰시오.',
    code: `${TABLES}

SELECT 이름 FROM 학생
WHERE 학번 NOT IN (SELECT 학번 FROM 수강);`,
    answer: ['2', '2개', '2행'],
    explanation: '하위 질의 결과는 학번 1, 2, 3. 여기에 없는 학번 4(최지은), 5(정우성) → 2행.',
  },
  {
    id: 'ap-s09', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: '다음 SQL을 실행했을 때 출력되는 평균 점수를 쓰시오.',
    code: `${TABLES}

SELECT 학과, AVG(점수) FROM 학생
GROUP BY 학과
HAVING COUNT(*) >= 2;`,
    answer: ['81.5'],
    explanation: '행이 2개 이상인 그룹은 컴공(3행)뿐. AVG는 NULL을 빼고 계산 → (85 + 78) / 2 = 81.5.',
  },
  {
    id: 'ap-s10', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: '다음 SQL의 실행 결과를 쓰시오.',
    code: `${TABLES}

SELECT MAX(점수) - MIN(점수) FROM 학생 WHERE 학년 >= 3;`,
    answer: ['3'],
    explanation: '학년 3 이상: 85, 88, NULL. 그룹 함수는 NULL을 무시 → 88 − 85 = 3.',
  },
  {
    id: 'ap-s11', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: '다음 SQL의 실행 결과(이름)를 출력 순서대로 쉼표로 구분해 쓰시오.',
    code: `${TABLES}

SELECT 이름 FROM 학생
WHERE 점수 > (SELECT AVG(점수) FROM 학생)
ORDER BY 학번;`,
    answer: ['이영희, 최지은', '이영희 최지은'],
    explanation: '평균은 NULL을 빼고 (85 + 92 + 78 + 88) / 4 = 85.75. 이보다 큰 92(이영희), 88(최지은).',
  },
  {
    id: 'ap-s12', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: '[학생] 테이블에서 점수가 입력되지 않은(NULL) 학생의 이름을 조회하는 SQL을 쓰시오.',
    answer: [
      'SELECT 이름 FROM 학생 WHERE 점수 IS NULL;',
      'SELECT 이름 FROM 학생 WHERE 점수 IS NULL',
    ],
    explanation: 'NULL 비교는 = NULL이 아니라 IS NULL을 쓴다.',
  },
  {
    id: 'ap-s13', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: '다음 SQL의 결과 행 수를 쓰시오.',
    code: `${TABLES}

SELECT 학생.이름, 수강.과목
FROM 학생 INNER JOIN 수강 ON 학생.학번 = 수강.학번
WHERE 학생.학과 = '컴공';`,
    answer: ['4', '4개', '4행'],
    explanation: '컴공 학생 중 수강 기록이 있는 학번 1(2과목), 3(2과목) → 4행. 학번 5는 수강 기록이 없어 INNER JOIN에서 빠진다.',
  },
  {
    id: 'ap-s14', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: '다음 SQL의 결과 행 수를 쓰시오.',
    code: `${TABLES}

SELECT *
FROM 학생 LEFT OUTER JOIN 수강 ON 학생.학번 = 수강.학번;`,
    answer: ['7', '7개', '7행'],
    explanation: '일치하는 행 5개(1번 2개, 2번 1개, 3번 2개) + 왼쪽 학생 중 일치 없는 4번, 5번이 NULL과 함께 2행 → 7행.',
  },
  {
    id: 'ap-s15', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: '다음 SQL을 실행했을 때 세 번째로 출력되는 이름을 쓰시오.',
    code: `${TABLES}

SELECT 이름 FROM 학생
WHERE 점수 IS NOT NULL
ORDER BY 학년 DESC, 점수 ASC;`,
    answer: ['박민수'],
    explanation: '학년 내림차순: 4(최지은) → 3(김철수) → 2학년끼리는 점수 오름차순 박민수(78), 이영희(92).',
  },
  {
    id: 'ap-s16', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: '다음 두 SQL을 순서대로 실행했을 때 두 번째 SQL의 결과를 쓰시오.',
    code: `${TABLES}

UPDATE 학생 SET 점수 = 점수 + 5 WHERE 학과 = '컴공';
SELECT SUM(점수) FROM 학생 WHERE 학과 = '컴공';`,
    answer: ['173'],
    explanation: '85 → 90, 78 → 83, NULL + 5는 여전히 NULL. SUM은 NULL을 무시 → 90 + 83 = 173.',
  },
]
