import type { Question } from '../../../types'

// 2018년 이후 반복 출제된 주제를 바탕으로 새로 쓴 변형 문제 (기출 원문 아님)
const SRC = '빈출 변형'

export const frequentPractical: Question[] = [
  /* ───────── 프로그래밍: C ───────── */
  {
    id: 'fp-c01', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
struct Student {
    char name[10];
    int score;
};
int main() {
    struct Student s[3] = {{"Kim", 80}, {"Lee", 95}, {"Park", 70}};
    struct Student *p = s;
    int total = 0;
    for (int i = 0; i < 3; i++) {
        total += (p + i)->score;
    }
    printf("%d %d", total, (p + 1)->score);
    return 0;
}`,
    answer: ['245 95'],
    explanation: '(p + i)->score는 s[i].score. 80 + 95 + 70 = 245, (p + 1)은 s[1]이므로 95.',
  },
  {
    id: 'fp-c02', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int count() {
    static int n = 0;
    n++;
    return n;
}
int main() {
    count();
    count();
    printf("%d", count());
    return 0;
}`,
    answer: ['3'],
    explanation: 'static 변수는 처음 한 번만 초기화되고 함수가 끝나도 값이 유지된다. 세 번째 호출에서 3.',
  },
  {
    id: 'fp-c03', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int main() {
    int a[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    int sum = 0;
    for (int i = 0; i < 3; i++) {
        sum += a[i][i];
    }
    printf("%d", sum);
    return 0;
}`,
    answer: ['15'],
    explanation: 'a[0][0] + a[1][1] + a[2][2] = 1 + 5 + 9 = 15 (대각선 합).',
  },
  {
    id: 'fp-c04', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int main() {
    int a = 5, b = 3;
    printf("%d %d %d %d", a & b, a | b, a ^ b, a << 2);
    return 0;
}`,
    answer: ['1 7 6 20'],
    explanation: '5 = 101, 3 = 011. & → 001(1), | → 111(7), ^ → 110(6), 5 << 2 = 5 × 4 = 20.',
  },
  {
    id: 'fp-c05', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int f(int n) {
    if (n <= 1) return n;
    return f(n - 1) + f(n - 2);
}
int main() {
    printf("%d", f(6));
    return 0;
}`,
    answer: ['8'],
    explanation: '피보나치 수열: f(0)=0, f(1)=1, f(2)=1, f(3)=2, f(4)=3, f(5)=5, f(6)=8.',
  },
  {
    id: 'fp-c06', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
#include <string.h>
int main() {
    char str[] = "KOREA";
    char *p = str;
    printf("%d ", (int)strlen(str));
    printf("%c", *(p + 3));
    printf("%s", p + 2);
    return 0;
}`,
    answer: ['5 EREA'],
    explanation: "strlen은 '\\0'을 뺀 5. *(p + 3)은 문자 'E', p + 2부터 %s로 출력하면 \"REA\". → 5 EREA",
  },
  {
    id: 'fp-c07', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int main() {
    int a = 5, b, c;
    b = a++;
    c = ++a;
    printf("%d %d %d", a, b, c);
    return 0;
}`,
    answer: ['7 5 7'],
    explanation: 'b = a++ → b = 5, a = 6. c = ++a → a = 7, c = 7.',
  },
  {
    id: 'fp-c08', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int main() {
    int n = 1234, r = 0;
    while (n > 0) {
        r = r * 10 + n % 10;
        n /= 10;
    }
    printf("%d", r);
    return 0;
}`,
    answer: ['4321'],
    explanation: 'n % 10으로 끝자리를 꺼내 r 뒤에 붙이고, n /= 10으로 끝자리를 지운다 → 숫자 뒤집기.',
  },

  /* ───────── 프로그래밍: Java ───────── */
  {
    id: 'fp-j01', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `class Counter {
    static int total = 0;
    int id;
    Counter() {
        total++;
        id = total;
    }
}
public class Main {
    public static void main(String[] args) {
        Counter a = new Counter();
        Counter b = new Counter();
        Counter c = new Counter();
        System.out.print(a.id + " " + Counter.total);
    }
}`,
    answer: ['1 3'],
    explanation: 'static 변수 total은 모든 객체가 공유한다. a가 만들어질 때 id = 1, 객체 3개 생성 후 total = 3.',
  },
  {
    id: 'fp-j02', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `public class Main {
    public static void main(String[] args) {
        String a = "java";
        String b = "java";
        String c = new String("java");
        System.out.print((a == b) + " " + (a == c) + " " + a.equals(c));
    }
}`,
    answer: ['true false true'],
    explanation: '같은 문자열 리터럴은 같은 객체를 공유(a == b는 true). new로 만든 c는 다른 객체(==는 false), equals는 내용 비교(true).',
  },
  {
    id: 'fp-j03', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `public class Main {
    public static void main(String[] args) {
        int[] arr = new int[3];
        try {
            arr[3] = 10;
            System.out.print("A");
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.print("B");
        } finally {
            System.out.print("C");
        }
        System.out.print("D");
    }
}`,
    answer: ['BCD'],
    explanation: 'arr[3]은 범위 밖 → 예외가 나서 "A"는 건너뛰고 catch의 "B", finally의 "C"는 항상 실행, 이후 "D".',
  },
  {
    id: 'fp-j04', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `class Parent {
    void print() { System.out.print("P"); }
}
class Child extends Parent {
    void print() {
        super.print();
        System.out.print("C");
    }
    void print(int n) {
        for (int i = 0; i < n; i++) System.out.print(i);
    }
}
public class Main {
    public static void main(String[] args) {
        Child c = new Child();
        c.print();
        c.print(3);
    }
}`,
    answer: ['PC012'],
    explanation: 'print()는 오버라이딩된 메소드로 super.print()("P") 후 "C". print(3)은 오버로딩된 메소드로 0, 1, 2 출력.',
  },
  {
    id: 'fp-j05', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `abstract class Shape {
    abstract int area();
}
class Rect extends Shape {
    int w, h;
    Rect(int w, int h) { this.w = w; this.h = h; }
    int area() { return w * h; }
}
class Square extends Rect {
    Square(int s) { super(s, s); }
}
public class Main {
    public static void main(String[] args) {
        Shape[] arr = { new Rect(2, 3), new Square(4) };
        int sum = 0;
        for (Shape s : arr) sum += s.area();
        System.out.print(sum);
    }
}`,
    answer: ['22'],
    explanation: 'Rect(2, 3)의 넓이 6, Square(4)는 super(4, 4)로 Rect가 되어 16. 6 + 16 = 22.',
  },

  /* ───────── 프로그래밍: Python ───────── */
  {
    id: 'fp-y01', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: '다음 Python 코드의 출력 결과를 쓰시오. (줄바꿈은 공백으로 구분)',
    code: `a = [x * x for x in range(1, 6) if x % 2 == 1]
print(a)
print(sum(a))`,
    answer: ['[1, 9, 25] 35'],
    explanation: 'range(1, 6)은 1~5, 그중 홀수 1, 3, 5의 제곱 → [1, 9, 25], 합은 35.',
  },
  {
    id: 'fp-y02', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: '다음 Python 코드의 출력 결과를 쓰시오.',
    code: `s = "banana"
d = {}
for ch in s:
    d[ch] = d.get(ch, 0) + 1
print(d['a'], d['n'], len(d))`,
    answer: ['3 2 3'],
    explanation: "글자 수 세기: b 1, a 3, n 2. 키는 b, a, n 3개.",
  },
  {
    id: 'fp-y03', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: '다음 Python 코드의 출력 결과를 쓰시오.',
    code: `class Calc:
    def __init__(self, n):
        self.n = n
    def add(self, x):
        self.n += x
        return self

c = Calc(10)
c.add(5).add(3)
print(c.n)`,
    answer: ['18'],
    explanation: 'add가 self를 돌려주므로 연달아 호출할 수 있다. 10 + 5 + 3 = 18.',
  },
  {
    id: 'fp-y04', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: '다음 Python 코드의 출력 결과를 쓰시오.',
    code: `s = "Information"
print(s[2:6].upper() + s[-3:])`,
    answer: ['FORMion'],
    explanation: 's[2:6]은 인덱스 2~5인 "form" → upper()로 "FORM". s[-3:]은 뒤에서 세 글자 "ion".',
  },
  {
    id: 'fp-y05', exam: 'practical', subjectId: 'programming', source: SRC, type: 'short',
    question: '다음 Python 코드의 출력 결과를 쓰시오.',
    code: `nums = [3, 8, 1, 6, 5]
r = list(map(lambda x: x * 10, filter(lambda x: x > 4, nums)))
print(r)`,
    answer: ['[80, 60, 50]'],
    explanation: 'filter로 4보다 큰 8, 6, 5만 남기고, map으로 각각 10을 곱한다.',
  },

  /* ───────── SQL ───────── */
  {
    id: 'fp-s01', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: '다음 SQL을 실행했을 때 결과로 출력되는 행의 수를 쓰시오.',
    code: `[학생]
학번 | 이름   | 학과   | 학년
1    | 김철수 | 컴퓨터 | 2
2    | 이영희 | 전자   | 3
3    | 박민수 | 컴퓨터 | 3
4    | 최지우 | 컴퓨터 | 1
5    | 정하늘 | 전자   | 2

SELECT 학과, COUNT(*) FROM 학생
WHERE 학년 >= 2
GROUP BY 학과
HAVING COUNT(*) >= 2;`,
    answer: ['2'],
    explanation: 'WHERE로 학년 2 이상(1, 2, 3, 5번)만 남긴 뒤 학과별로 묶으면 컴퓨터 2명, 전자 2명 → 둘 다 HAVING 통과 → 2행.',
  },
  {
    id: 'fp-s02', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: "이름이 '이'로 시작하는 학생을 조회하려고 한다. 빈칸 ①에 들어갈 키워드를 쓰시오.",
    code: `SELECT * FROM 학생 WHERE 이름 ( ① ) '이%';`,
    answer: ['LIKE'],
    explanation: "LIKE와 함께 %는 글자 수 상관없음, _는 한 글자를 뜻한다.",
  },
  {
    id: 'fp-s03', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: "[학생] 테이블에 학번 6, 이름 '한가람', 학과 '전자', 학년 1인 튜플을 삽입하는 SQL을 쓰시오. (열 순서: 학번, 이름, 학과, 학년)",
    answer: [
      "INSERT INTO 학생 VALUES (6, '한가람', '전자', 1);",
      "INSERT INTO 학생 VALUES (6, '한가람', '전자', 1)",
      "INSERT INTO 학생(학번, 이름, 학과, 학년) VALUES (6, '한가람', '전자', 1);",
      "INSERT INTO 학생(학번, 이름, 학과, 학년) VALUES (6, '한가람', '전자', 1)",
    ],
    explanation: '모든 열에 값을 넣을 때는 열 이름을 생략할 수 있다. INSERT INTO 테이블 VALUES (값, ...);',
  },
  {
    id: 'fp-s04', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: '[학생] 테이블에서 학번이 4인 학생의 학년을 2로 변경하는 SQL을 쓰시오.',
    answer: ['UPDATE 학생 SET 학년 = 2 WHERE 학번 = 4;', 'UPDATE 학생 SET 학년 = 2 WHERE 학번 = 4'],
    explanation: 'UPDATE 테이블 SET 열 = 값 WHERE 조건; — WHERE를 빠뜨리면 모든 행이 바뀐다.',
  },
  {
    id: 'fp-s05', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: "[학생] 테이블에서 학과가 '전자'인 학생을 모두 삭제하는 SQL을 쓰시오.",
    answer: ["DELETE FROM 학생 WHERE 학과 = '전자';", "DELETE FROM 학생 WHERE 학과 = '전자'"],
    explanation: 'DELETE FROM 테이블 WHERE 조건; — 테이블 자체를 지우는 것은 DROP TABLE이다.',
  },
  {
    id: 'fp-s06', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: '사용자 user1에게 부여했던 [학생] 테이블의 UPDATE 권한을 회수하려고 한다. 빈칸 ①에 들어갈 키워드를 쓰시오.',
    code: `( ① ) UPDATE ON 학생 FROM user1;`,
    answer: ['REVOKE'],
    explanation: '권한 부여는 GRANT ... TO, 회수는 REVOKE ... FROM.',
  },
  {
    id: 'fp-s07', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: '[학생] 테이블에 주소 열을 추가하려고 한다. 빈칸 ①에 들어갈 키워드를 쓰시오.',
    code: `( ① ) TABLE 학생 ADD 주소 VARCHAR(50);`,
    answer: ['ALTER'],
    explanation: '테이블 구조 변경은 DDL의 ALTER TABLE이다.',
  },
  {
    id: 'fp-s08', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: '다음 SQL의 실행 결과 행의 수를 쓰시오.',
    code: `[학생]          [수강]
학번 | 이름     학번 | 과목
1    | 김철수   1    | DB
2    | 이영희   1    | 네트워크
3    | 박민수   3    | 보안

SELECT 학생.이름, 수강.과목
FROM 학생 LEFT OUTER JOIN 수강 ON 학생.학번 = 수강.학번;`,
    answer: ['4'],
    explanation: 'LEFT OUTER JOIN은 왼쪽(학생)을 모두 남긴다. 김철수 2행 + 이영희 1행(과목 NULL) + 박민수 1행 = 4행.',
  },
  {
    id: 'fp-s09', exam: 'practical', subjectId: 'sql', source: SRC, type: 'short',
    question: '점수가 높은 순서(내림차순)로 정렬하려고 한다. 빈칸 ①에 들어갈 키워드를 쓰시오.',
    code: `SELECT 이름, 점수 FROM 성적 ORDER BY 점수 ( ① );`,
    answer: ['DESC'],
    explanation: 'ORDER BY의 기본값은 ASC(오름차순)이다.',
  },

  /* ───────── 보안 공격 · 암호 ───────── */
  {
    id: 'fp-e01', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '출발지 IP를 공격 대상의 IP로 위조한 ICMP Echo 요청을 네트워크 전체에 브로드캐스트해, 대량의 응답이 공격 대상에게 몰리게 하는 공격을 쓰시오.',
    answer: ['Smurfing', '스머핑', 'Smurf', 'Smurf Attack', '스머프 공격'],
    explanation: 'ICMP 브로드캐스트를 이용한 서비스 거부(DoS) 공격이다.',
  },
  {
    id: 'fp-e02', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: 'TCP 3-way handshake에서 SYN 패킷만 대량으로 보내고 응답(ACK)은 보내지 않아 서버의 연결 자원을 고갈시키는 공격을 쓰시오.',
    answer: ['SYN Flooding', 'SYN Flood', 'SYN 플러딩'],
    explanation: '서버는 반쯤 열린 연결을 계속 붙잡고 있다가 자원이 바닥난다.',
  },
  {
    id: 'fp-e03', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '공격 대상이 자주 방문하는 웹사이트를 미리 감염시켜 두고, 대상이 접속하면 악성코드에 감염되게 하는 공격을 쓰시오.',
    answer: ['워터링 홀', 'Watering Hole', '워터링 홀 공격'],
    explanation: '물웅덩이에 모이는 먹잇감을 기다리는 사자에 빗댄 이름이다.',
  },
  {
    id: 'fp-e04', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '특정 조직을 목표로 정하고 오랜 기간 은밀하고 지속적으로 공격하는 지능형 공격을 영문 약어로 쓰시오.',
    answer: ['APT', 'Advanced Persistent Threat'],
    explanation: 'APT = Advanced Persistent Threat (지능형 지속 위협).',
  },
  {
    id: 'fp-e05', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '패킷의 출발지 IP와 목적지 IP를 공격 대상의 IP로 똑같이 위조해, 대상이 자기 자신에게 계속 응답하게 만드는 공격을 쓰시오.',
    answer: ['LAND Attack', 'LAND', 'Land 공격', '랜드 어택', '랜드 공격'],
    explanation: 'LAND = Local Area Network Denial.',
  },
  {
    id: 'fp-e06', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '미국 NIST가 DES를 대체하기 위해 선정한 대칭키 블록 암호로, 128비트 블록과 128/192/256비트 키를 사용하는 알고리즘을 쓰시오.',
    answer: ['AES', 'Advanced Encryption Standard'],
    explanation: 'DES는 56비트 키로 안전성이 낮아 AES로 대체되었다.',
  },
  {
    id: 'fp-e07', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '큰 수의 소인수분해가 어렵다는 점을 이용한 대표적인 공개키 암호 알고리즘을 쓰시오.',
    answer: ['RSA'],
    explanation: 'RSA는 개발자 Rivest, Shamir, Adleman의 앞 글자이다.',
  },
  {
    id: 'fp-e08', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '인증을 마친 사용자의 세션 정보를 가로채 그 사용자인 것처럼 접근하는 공격을 쓰시오.',
    answer: ['세션 하이재킹', 'Session Hijacking'],
    explanation: '비밀번호를 몰라도 이미 인증된 세션을 빼앗는다.',
  },
  {
    id: 'fp-e09', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '네트워크 계층에서 IP 패킷 단위로 암호화와 인증을 제공하는 보안 프로토콜을 쓰시오.',
    answer: ['IPsec', 'IP Security'],
    explanation: 'SSL/TLS는 전송 계층, S-HTTP는 웹(응용) 보안 프로토콜이다.',
  },
  {
    id: 'fp-e10', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '원격 접속 시 통신을 암호화하는 SSH의 기본 포트 번호를 쓰시오.',
    answer: ['22'],
    explanation: '참고로 Telnet은 23, HTTP는 80, HTTPS는 443이다.',
  },
  {
    id: 'fp-e11', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '사용자의 파일을 암호화해 열 수 없게 만든 뒤, 복호화 대가로 금전을 요구하는 악성코드를 쓰시오.',
    answer: ['랜섬웨어', 'Ransomware'],
    explanation: 'Ransom(몸값) + Software.',
  },
  {
    id: 'fp-e12', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '방화벽, IDS 등 여러 보안 장비의 로그를 한곳에 모아 연관 분석하는 통합 보안 관제 솔루션을 영문 약어로 쓰시오.',
    answer: ['SIEM', 'Security Information and Event Management'],
    explanation: 'SIEM = Security Information and Event Management.',
  },
  {
    id: 'fp-e13', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '복귀 주소와 변수 사이에 특정 값(canary)을 저장해 두고, 그 값이 바뀌면 버퍼 오버플로로 판단해 실행을 중단하는 기법을 쓰시오.',
    answer: ['스택 가드', 'Stack Guard', 'StackGuard'],
    explanation: '복귀 주소를 별도 스택에 복사해 두고 비교하는 기법은 스택 쉴드이다.',
  },
  {
    id: 'fp-e14', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '사용자가 비밀번호를 제공하지 않고도 다른 웹사이트나 앱에 자신의 정보 접근 권한을 위임할 수 있게 하는 개방형 표준 프로토콜을 쓰시오.',
    answer: ['OAuth'],
    explanation: '"구글 계정으로 로그인"처럼 권한만 위임하는 방식이다.',
  },
  {
    id: 'fp-e15', exam: 'practical', subjectId: 'security', source: SRC, type: 'short',
    question: '유명 사이트와 비슷한 도메인을 미리 등록해 두고, 사용자가 주소를 잘못 입력하면 가짜 사이트로 접속되게 하는 공격을 쓰시오.',
    answer: ['타이포스쿼팅', 'Typosquatting', 'URL 하이재킹', 'URL Hijacking'],
    explanation: 'Typo(오타) + Squatting(무단 점유).',
  },

  /* ───────── DB 이론 ───────── */
  {
    id: 'fp-d01', exam: 'practical', subjectId: 'db-theory', source: SRC, type: 'short',
    question: '다음 릴레이션의 카디널리티와 디그리를 순서대로 쓰시오. (예: 1, 2)',
    code: `[제품]
제품번호 | 제품명 | 가격  | 재고
P1       | 마우스 | 15000 | 30
P2       | 키보드 | 32000 | 12
P3       | 모니터 | 210000| 5
P4       | 스피커 | 45000 | 20
P5       | 웹캠   | 60000 | 8`,
    answer: ['5, 4'],
    explanation: '카디널리티 = 튜플(행) 수 5, 디그리 = 속성(열) 수 4.',
  },
  {
    id: 'fp-d02', exam: 'practical', subjectId: 'db-theory', source: SRC, type: 'short',
    question: 'A → B, B → C 형태의 이행적 함수 종속을 제거하는 정규형을 쓰시오.',
    answer: ['제3정규형', '3NF', '제 3정규형', '3정규형'],
    explanation: '2NF는 부분 함수 종속, 3NF는 이행 함수 종속 제거. (도부이결다조)',
  },
  {
    id: 'fp-d03', exam: 'practical', subjectId: 'db-theory', source: SRC, type: 'short',
    question: '기본키의 일부에만 종속되는 속성(부분 함수 종속)을 제거하는 정규형을 쓰시오.',
    answer: ['제2정규형', '2NF', '제 2정규형', '2정규형'],
    explanation: '복합키(학번, 과목)에서 학번만으로 정해지는 속성을 분리하는 단계이다.',
  },
  {
    id: 'fp-d04', exam: 'practical', subjectId: 'db-theory', source: SRC, type: 'short',
    question: '외래키 값은 참조하는 릴레이션의 기본키 값과 같거나 NULL이어야 한다는 무결성 제약 조건을 쓰시오.',
    answer: ['참조 무결성', 'Referential Integrity'],
    explanation: '기본키가 NULL · 중복 불가라는 규칙은 개체 무결성이다.',
  },
  {
    id: 'fp-d05', exam: 'practical', subjectId: 'db-theory', source: SRC, type: 'short',
    question: '트랜잭션의 연산은 모두 반영되거나 전혀 반영되지 않아야 한다(All or Nothing)는 특성을 쓰시오.',
    answer: ['원자성', 'Atomicity'],
    explanation: 'ACID: 원자성(Atomicity), 일관성(Consistency), 독립성(Isolation), 영속성(Durability).',
  },
  {
    id: 'fp-d06', exam: 'practical', subjectId: 'db-theory', source: SRC, type: 'short',
    question: '관계대수에서 릴레이션의 특정 속성(열)만 추출하는 연산의 기호를 쓰시오.',
    answer: ['π', '파이', 'Project', '프로젝트'],
    explanation: 'σ(Select)는 조건에 맞는 행, π(Project)는 열을 고른다.',
  },
  {
    id: 'fp-d07', exam: 'practical', subjectId: 'db-theory', source: SRC, type: 'short',
    question: '중복된 데이터 중 일부만 수정되어 데이터가 서로 불일치하게 되는 이상 현상을 쓰시오.',
    answer: ['갱신 이상', 'Update Anomaly', '수정 이상'],
    explanation: '이상 현상에는 삽입 이상, 삭제 이상, 갱신 이상이 있다.',
  },
  {
    id: 'fp-d08', exam: 'practical', subjectId: 'db-theory', source: SRC, type: 'short',
    question: '릴레이션의 튜플을 유일하게 식별할 수 있으면서(유일성) 꼭 필요한 속성만으로 구성된(최소성) 키를 쓰시오.',
    answer: ['후보키', 'Candidate Key'],
    explanation: '유일성만 만족하면 슈퍼키, 후보키 중 대표로 고른 것이 기본키이다.',
  },
  {
    id: 'fp-d09', exam: 'practical', subjectId: 'db-theory', source: SRC, type: 'short',
    question: '트랜잭션 수행 중 변경 내용을 즉시 DB에 반영하므로, 장애 시 REDO와 UNDO가 모두 필요한 회복 기법을 쓰시오.',
    answer: ['즉시 갱신', 'Immediate Update', '즉시 갱신 기법'],
    explanation: '커밋될 때까지 반영을 미루는 연기 갱신은 REDO만 필요하다.',
  },

  /* ───────── 테스트 ───────── */
  {
    id: 'fp-t01', exam: 'practical', subjectId: 'test', source: SRC, type: 'short',
    question: '입력 조건의 경계에서 오류가 많이 난다는 점을 이용해, 경계값과 그 바로 안팎의 값을 테스트 케이스로 고르는 블랙박스 테스트 기법을 쓰시오.',
    answer: ['경계값 분석', 'Boundary Value Analysis', '경계값 분석 기법', '경계 값 분석'],
    explanation: '유효 범위가 1~100이면 0, 1, 100, 101 등을 테스트한다.',
  },
  {
    id: 'fp-t02', exam: 'practical', subjectId: 'test', source: SRC, type: 'short',
    question: '입력 데이터를 유효한 구간과 무효한 구간으로 나누고, 각 구간의 대표값으로 테스트하는 블랙박스 기법을 쓰시오.',
    answer: ['동등 분할', '동치 분할', 'Equivalence Partitioning', '동등 분할 기법', '동치 분할 검사', '동등 분할 테스트'],
    explanation: '예: 점수 0~59는 불합격, 60~100은 합격 구간으로 나눠 대표값만 테스트.',
  },
  {
    id: 'fp-t03', exam: 'practical', subjectId: 'test', source: SRC, type: 'short',
    question: '상향식 통합 테스트에서 아직 없는 상위 모듈 대신 하위 모듈을 호출하고 결과를 받는 테스트용 모듈을 쓰시오.',
    answer: ['드라이버', 'Driver', '테스트 드라이버', 'Test Driver'],
    explanation: '하향식은 하위 모듈을 대신하는 스텁(Stub)을 사용한다.',
  },
  {
    id: 'fp-t04', exam: 'practical', subjectId: 'test', source: SRC, type: 'short',
    question: '오류를 수정하거나 기능을 추가한 뒤, 기존 기능에 새로운 오류가 생기지 않았는지 반복해서 확인하는 테스트를 쓰시오.',
    answer: ['회귀 테스트', 'Regression Test', 'Regression Testing'],
    explanation: '수정이 다른 부분에 영향을 주지 않았는지 확인한다.',
  },
  {
    id: 'fp-t05', exam: 'practical', subjectId: 'test', source: SRC, type: 'short',
    question: '개발자의 장소에서 사용자가 개발자 앞에서 수행하며, 개발자가 문제를 기록하는 인수 테스트를 쓰시오.',
    answer: ['알파 테스트', 'Alpha Test', 'Alpha Testing'],
    explanation: '사용자의 환경에서 개발자 없이 하는 것은 베타 테스트이다.',
  },
  {
    id: 'fp-t06', exam: 'practical', subjectId: 'test', source: SRC, type: 'short',
    question: '동일한 테스트 케이스로 반복 테스트하면 더 이상 새로운 결함을 발견하지 못한다는 테스트 원리를 쓰시오.',
    answer: ['살충제 패러독스', 'Pesticide Paradox'],
    explanation: '같은 살충제를 계속 쓰면 벌레가 내성이 생기는 것에 빗댄 원리이다.',
  },
  {
    id: 'fp-t07', exam: 'practical', subjectId: 'test', source: SRC, type: 'short',
    question: '프로그램의 모든 결정(분기)에 대해 참과 거짓이 각각 최소 한 번 이상 실행되도록 하는 테스트 커버리지를 쓰시오.',
    answer: ['결정 커버리지', '분기 커버리지', 'Decision Coverage', 'Branch Coverage'],
    explanation: '구문 커버리지는 모든 문장을 한 번 이상 실행, 조건 커버리지는 개별 조건식의 참 · 거짓을 확인한다.',
  },
  {
    id: 'fp-t08', exam: 'practical', subjectId: 'test', source: SRC, type: 'short',
    question: '특정한 몇 개의 입력값에 대해서만 기대 결과를 제공하는 테스트 오라클을 쓰시오.',
    answer: ['샘플링 오라클', 'Sampling Oracle'],
    explanation: '테스트 오라클: 참, 샘플링, 추정(휴리스틱), 일관성 검사.',
  },

  /* ───────── 디자인 패턴 · 모듈 설계 ───────── */
  {
    id: 'fp-g01', exam: 'practical', subjectId: 'design', source: SRC, type: 'short',
    question: '클래스의 인스턴스를 오직 하나만 생성하고, 어디서든 그 인스턴스에 접근할 수 있게 하는 생성 패턴을 쓰시오.',
    answer: ['Singleton', '싱글톤', '싱글턴'],
    explanation: 'DB 연결, 설정 객체처럼 하나만 있어야 하는 객체에 사용한다.',
  },
  {
    id: 'fp-g02', exam: 'practical', subjectId: 'design', source: SRC, type: 'short',
    question: '호환되지 않는 인터페이스를 가진 클래스를, 클라이언트가 원하는 인터페이스로 변환해 함께 동작하게 하는 구조 패턴을 쓰시오.',
    answer: ['Adapter', '어댑터'],
    explanation: '110V 기기를 220V 콘센트에 꽂게 해 주는 변환 플러그와 같다.',
  },
  {
    id: 'fp-g03', exam: 'practical', subjectId: 'design', source: SRC, type: 'short',
    question: '기능의 계층과 구현의 계층을 분리해 각각 독립적으로 확장할 수 있게 하는 구조 패턴을 쓰시오.',
    answer: ['Bridge', '브리지', '브릿지'],
    explanation: '추상(기능)과 구현 사이에 다리를 놓는다는 의미이다.',
  },
  {
    id: 'fp-g04', exam: 'practical', subjectId: 'design', source: SRC, type: 'short',
    question: '기존 객체를 수정하지 않고 감싸는 방식으로 새로운 기능을 동적으로 덧붙이는 구조 패턴을 쓰시오.',
    answer: ['Decorator', '데코레이터'],
    explanation: '커피에 우유, 시럽을 차례로 추가하듯 기능을 겹겹이 덧붙인다.',
  },
  {
    id: 'fp-g05', exam: 'practical', subjectId: 'design', source: SRC, type: 'short',
    question: '실제 객체에 대한 접근을 제어하기 위해 대리 객체를 두는 구조 패턴을 쓰시오.',
    answer: ['Proxy', '프록시'],
    explanation: '대리인이 요청을 받아 필요할 때만 실제 객체에 넘긴다 (지연 로딩, 접근 제어).',
  },
  {
    id: 'fp-g06', exam: 'practical', subjectId: 'design', source: SRC, type: 'short',
    question: '한 객체의 상태가 바뀌면 그 객체에 의존하는 다른 객체들에게 자동으로 알림이 가는 일대다 의존 관계의 행위 패턴을 쓰시오.',
    answer: ['Observer', '옵서버', '옵저버'],
    explanation: '유튜브 구독과 같다. 채널(주체)이 새 영상을 올리면 구독자(관찰자)에게 알림이 간다.',
  },
  {
    id: 'fp-g07', exam: 'practical', subjectId: 'design', source: SRC, type: 'short',
    question: '구체적인 클래스를 지정하지 않고, 서로 관련된 객체들의 묶음을 생성하는 인터페이스를 제공하는 생성 패턴을 쓰시오.',
    answer: ['Abstract Factory', '추상 팩토리', '앱스트랙트 팩토리'],
    explanation: '예: 윈도우용 / 맥용 버튼 · 창 · 메뉴를 한 세트로 만들어 주는 공장.',
  },
  {
    id: 'fp-g08', exam: 'practical', subjectId: 'design', source: SRC, type: 'short',
    question: '다른 모듈 내부의 논리 흐름을 제어하기 위해 제어 신호(플래그)를 넘겨주는 결합도를 쓰시오.',
    answer: ['제어 결합도', 'Control Coupling'],
    explanation: '결합도(강 → 약): 내용 → 공통 → 외부 → 제어 → 스탬프 → 자료. (내공외제스자)',
  },
  {
    id: 'fp-g09', exam: 'practical', subjectId: 'design', source: SRC, type: 'short',
    question: '다음 모듈 구조도에서 모듈 E의 팬인(Fan-In)과 팬아웃(Fan-Out)을 순서대로 쓰시오. (예: 1, 2)',
    code: `      A
    / | \\
   B  C  D
    \\ | /
      E
     / \\
    F   G`,
    answer: ['3, 2'],
    explanation: '팬인 = E를 호출하는 모듈 수(B, C, D) 3, 팬아웃 = E가 호출하는 모듈 수(F, G) 2.',
  },

  /* ───────── OS · 네트워크 계산 ───────── */
  {
    id: 'fp-o01', exam: 'practical', subjectId: 'os-network', source: SRC, type: 'short',
    question: 'HRN 스케줄링에서 우선순위가 높은 작업부터 순서대로 쓰시오. (예: A, B, C, D)',
    code: `작업 | 대기 시간 | 서비스 시간
A    |    10     |      5
B    |     8     |      2
C    |    20     |      8
D    |     6     |      4`,
    answer: ['B, C, A, D', 'BCAD', 'B-C-A-D', 'B → C → A → D'],
    explanation: '(대기 + 서비스) / 서비스: A 3, B 5, C 3.5, D 2.5 → 값이 큰 순서 B, C, A, D.',
  },
  {
    id: 'fp-o02', exam: 'practical', subjectId: 'os-network', source: SRC, type: 'short',
    question: '페이지 프레임이 3개일 때 참조열 7, 0, 1, 2, 0, 3, 0, 4 를 LRU로 처리하면 페이지 부재는 몇 번 발생하는지 쓰시오.',
    answer: ['6', '6번', '6회'],
    explanation: '7F 0F 1F 2F(7 교체) 0H 3F(1 교체) 0H 4F(2 교체) → 부재 6번. 가장 오랫동안 안 쓴 페이지를 교체한다.',
  },
  {
    id: 'fp-o03', exam: 'practical', subjectId: 'os-network', source: SRC, type: 'short',
    question: 'SRT 스케줄링을 적용했을 때 평균 대기 시간을 쓰시오.',
    code: `프로세스 | 도착 시간 | 실행 시간
P1       |     0     |     8
P2       |     1     |     4
P3       |     2     |     9
P4       |     3     |     5`,
    answer: ['6.5'],
    explanation: '0─1 P1 │ 1─5 P2 │ 5─10 P4 │ 10─17 P1 │ 17─26 P3. 대기 시간 P1 9, P2 0, P3 15, P4 2 → 26 / 4 = 6.5.',
  },
  {
    id: 'fp-o04', exam: 'practical', subjectId: 'os-network', source: SRC, type: 'short',
    question: 'a.txt 파일에 소유자는 읽기 · 쓰기 · 실행, 그룹은 읽기 · 실행, 기타 사용자는 실행 권한만 부여하는 명령문을 8진수를 사용해 쓰시오.',
    answer: ['chmod 751 a.txt'],
    explanation: 'rwx = 4+2+1 = 7, r-x = 4+1 = 5, --x = 1 → 751.',
  },
  {
    id: 'fp-o05', exam: 'practical', subjectId: 'os-network', source: SRC, type: 'short',
    question: '192.168.10.0/27 네트워크에서 서브넷 하나당 사용할 수 있는 호스트 수를 쓰시오.',
    answer: ['30', '30개'],
    explanation: '호스트 비트 32 − 27 = 5개 → 2⁵ = 32, 네트워크 · 브로드캐스트 주소를 빼면 30.',
  },
  {
    id: 'fp-o06', exam: 'practical', subjectId: 'os-network', source: SRC, type: 'short',
    question: '/27 프리픽스를 서브넷 마스크(10진수 표기)로 쓰시오.',
    answer: ['255.255.255.224'],
    explanation: '마지막 옥텟에서 앞 3비트가 1 → 11100000 = 128 + 64 + 32 = 224.',
  },
  {
    id: 'fp-o07', exam: 'practical', subjectId: 'os-network', source: SRC, type: 'short',
    question: '링크 상태(Link State) 알고리즘을 사용하는 대표적인 내부 라우팅 프로토콜을 쓰시오.',
    answer: ['OSPF', 'Open Shortest Path First'],
    explanation: 'RIP은 거리 벡터 방식(최대 홉 15), BGP는 외부(AS 간) 라우팅 프로토콜이다.',
  },
  {
    id: 'fp-o08', exam: 'practical', subjectId: 'os-network', source: SRC, type: 'short',
    question: '페이지 부재가 너무 자주 일어나 프로세스 실행보다 페이지 교체에 더 많은 시간을 쓰는 현상을 쓰시오.',
    answer: ['스래싱', 'Thrashing'],
    explanation: '워킹 셋을 유지하거나 다중 프로그래밍 정도를 줄여 해결한다.',
  },

  /* ───────── UML · 요구사항 ───────── */
  {
    id: 'fp-u01', exam: 'practical', subjectId: 'uml', source: SRC, type: 'short',
    question: '전체 객체가 사라지면 부분 객체도 함께 사라지는 강한 전체-부분 관계로, 채워진 마름모로 표현하는 UML 관계를 쓰시오.',
    answer: ['포함', '합성', 'Composition', '포함 관계', '합성 관계', '컴포지션'],
    explanation: '부분이 따로 존재할 수 있으면 집합(Aggregation, 빈 마름모) 관계이다.',
  },
  {
    id: 'fp-u02', exam: 'practical', subjectId: 'uml', source: SRC, type: 'short',
    question: '상위 개념과 하위 개념 사이의 "~는 ~이다(is-a)" 관계로, 상속을 나타내는 UML 관계를 쓰시오.',
    answer: ['일반화', 'Generalization', '일반화 관계'],
    explanation: '예: 동물(상위) — 고양이(하위). 빈 삼각형 화살표로 표현한다.',
  },
  {
    id: 'fp-u03', exam: 'practical', subjectId: 'uml', source: SRC, type: 'short',
    question: '유스케이스 다이어그램에서 특정 조건을 만족할 때만 실행되는 확장 관계의 스테레오타입을 영문으로 쓰시오.',
    answer: ['extend', '<<extend>>', '«extend»'],
    explanation: '반드시 함께 실행되는 관계는 include(포함)이다.',
  },
  {
    id: 'fp-u04', exam: 'practical', subjectId: 'uml', source: SRC, type: 'short',
    question: '성능, 보안, 가용성처럼 시스템이 "얼마나 잘" 동작해야 하는지에 대한 요구사항을 쓰시오.',
    answer: ['비기능 요구사항', '비기능적 요구사항', 'Non-Functional Requirement', '비기능'],
    explanation: '시스템이 "무엇을" 하는지는 기능 요구사항이다.',
  },
  {
    id: 'fp-u05', exam: 'practical', subjectId: 'uml', source: SRC, type: 'short',
    question: '객체 사이에 주고받는 메시지를 시간 순서에 따라 표현하는 UML 행위 다이어그램을 쓰시오.',
    answer: ['시퀀스 다이어그램', '순차 다이어그램', 'Sequence Diagram'],
    explanation: '구성: 액터, 객체, 생명선, 실행(활성) 상자, 메시지.',
  },
  {
    id: 'fp-u06', exam: 'practical', subjectId: 'uml', source: SRC, type: 'short',
    question: '요구사항 개발 프로세스의 빈칸 ①에 들어갈 단계를 쓰시오.',
    code: `도출 → ( ① ) → 명세 → 확인(검증)`,
    answer: ['분석', 'Analysis', '요구사항 분석'],
    explanation: '도출로 모은 요구사항을 분석해 정리한 뒤 명세서로 작성하고 확인한다.',
  },

  /* ───────── 신기술 용어 ───────── */
  {
    id: 'fp-n01', exam: 'practical', subjectId: 'new-tech', source: SRC, type: 'short',
    question: '현실의 사물이나 시스템을 가상 공간에 똑같이 구현해, 시뮬레이션으로 결과를 미리 예측하는 기술을 쓰시오.',
    answer: ['디지털 트윈', 'Digital Twin'],
    explanation: '공장, 도시, 항공기 엔진 등의 가상 쌍둥이를 만들어 분석한다.',
  },
  {
    id: 'fp-n02', exam: 'practical', subjectId: 'new-tech', source: SRC, type: 'short',
    question: '웹에서 제공하는 여러 정보와 서비스(API)를 조합해 새로운 서비스를 만드는 기술을 쓰시오.',
    answer: ['매시업', 'Mashup'],
    explanation: '예: 지도 API + 부동산 매물 정보 = 지도 위 매물 서비스.',
  },
  {
    id: 'fp-n03', exam: 'practical', subjectId: 'new-tech', source: SRC, type: 'short',
    question: '개발자가 서버를 직접 관리하지 않고, 요청이 있을 때만 클라우드가 자원을 할당해 코드를 실행하는 컴퓨팅 방식을 쓰시오.',
    answer: ['서버리스', 'Serverless', '서버리스 컴퓨팅', 'Serverless Computing'],
    explanation: '서버가 없는 것이 아니라, 서버 관리를 클라우드 제공자가 대신한다.',
  },
  {
    id: 'fp-n04', exam: 'practical', subjectId: 'new-tech', source: SRC, type: 'short',
    question: '같은 데이터를 두 개 이상의 디스크에 똑같이 복제해 저장하는(미러링) RAID 레벨을 쓰시오.',
    answer: ['RAID 1', 'RAID-1', '1'],
    explanation: 'RAID 0 스트라이핑, RAID 1 미러링, RAID 5 분산 패리티.',
  },
  {
    id: 'fp-n05', exam: 'practical', subjectId: 'new-tech', source: SRC, type: 'short',
    question: '대용량 데이터를 여러 대의 서버에 나눠 저장하고 병렬로 처리하는 오픈 소스 분산 컴퓨팅 플랫폼을 쓰시오.',
    answer: ['하둡', 'Hadoop'],
    explanation: 'HDFS(분산 파일 시스템)와 맵리듀스(분산 처리)가 핵심이다.',
  },
  {
    id: 'fp-n06', exam: 'practical', subjectId: 'new-tech', source: SRC, type: 'short',
    question: '네트워크 장비의 제어 기능과 데이터 전달 기능을 분리해, 소프트웨어로 네트워크를 제어 · 관리하는 기술을 영문 약어로 쓰시오.',
    answer: ['SDN', 'Software Defined Networking', 'Software Defined Network'],
    explanation: 'SDN = Software Defined Networking (소프트웨어 정의 네트워킹).',
  },
]
