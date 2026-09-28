import type { Question } from '../../../types'

export const samplePractical: Question[] = [
  {
    id: 'sample-p01', exam: 'practical', subjectId: 'programming', source: '예시', type: 'short',
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int *p = arr;
    printf("%d", *(p + 2) + arr[4]);
    return 0;
}`,
    answer: ['8'],
    explanation: '*(p + 2)는 arr[2] = 3, arr[4] = 5 이므로 3 + 5 = 8.',
  },
  {
    id: 'sample-p02', exam: 'practical', subjectId: 'programming', source: '예시', type: 'short',
    question: '다음 C 프로그램의 출력 결과를 쓰시오.',
    code: `#include <stdio.h>
int main() {
    int sum = 0;
    for (int i = 1; i <= 10; i++) {
        if (i % 3 == 0) continue;
        sum += i;
    }
    printf("%d", sum);
    return 0;
}`,
    answer: ['37'],
    explanation: '1~10의 합 55에서 3의 배수(3 + 6 + 9 = 18)를 뺀 37.',
  },
  {
    id: 'sample-p03', exam: 'practical', subjectId: 'programming', source: '예시', type: 'short',
    question: '다음 Java 프로그램의 출력 결과를 쓰시오.',
    code: `class Parent {
    void show() { System.out.print("P"); }
}
class Child extends Parent {
    void show() { System.out.print("C"); }
}
public class Main {
    public static void main(String[] args) {
        Parent obj = new Child();
        obj.show();
    }
}`,
    answer: ['C'],
    explanation: '참조 타입이 Parent여도 실제 객체가 Child이므로 오버라이딩된 Child의 show()가 실행된다.',
  },
  {
    id: 'sample-p04', exam: 'practical', subjectId: 'programming', source: '예시', type: 'short',
    question: '다음 Python 코드의 출력 결과를 쓰시오.',
    code: `a = [1, 2, 3, 4, 5, 6]
print(a[1:5:2])`,
    answer: ['[2, 4]'],
    explanation: '인덱스 1부터 5 전까지 2칸씩: a[1] = 2, a[3] = 4.',
  },
  {
    id: 'sample-p05', exam: 'practical', subjectId: 'sql', source: '예시', type: 'short',
    question: 'SELECT 결과에서 중복된 행을 제거하기 위해 SELECT 뒤에 쓰는 키워드를 쓰시오.',
    answer: ['DISTINCT'],
    explanation: 'SELECT DISTINCT 열 FROM 테이블;',
  },
  {
    id: 'sample-p06', exam: 'practical', subjectId: 'db-theory', source: '예시', type: 'short',
    question: '릴레이션에서 튜플(행)의 수를 무엇이라 하는지 쓰시오.',
    answer: ['카디널리티', 'Cardinality', '기수'],
    explanation: '속성(열)의 수는 차수(Degree)라고 한다.',
  },
  {
    id: 'sample-p07', exam: 'practical', subjectId: 'sql', source: '예시', type: 'short',
    question: 'GROUP BY로 그룹화한 결과에 조건을 지정할 때 사용하는 절을 쓰시오.',
    answer: ['HAVING'],
    explanation: 'WHERE는 그룹화 전 행에, HAVING은 그룹화 후 그룹에 조건을 건다.',
  },
  {
    id: 'sample-p08', exam: 'practical', subjectId: 'test', source: '예시', type: 'short',
    question: '하향식 통합 테스트에서 아직 개발되지 않은 하위 모듈을 대신하는 임시 모듈을 쓰시오.',
    answer: ['스텁', 'Stub'],
    explanation: '상향식 통합 테스트에서는 상위 모듈을 대신하는 드라이버(Driver)를 사용한다.',
  },
  {
    id: 'sample-p09', exam: 'practical', subjectId: 'design', source: '예시', type: 'short',
    question: '한 객체의 상태가 바뀌면 의존하는 객체들에게 자동으로 통지되는 일대다 의존 관계의 디자인 패턴을 쓰시오.',
    answer: ['Observer', '옵저버', '옵서버'],
    explanation: 'Observer 패턴은 행위 패턴에 속한다.',
  },
  {
    id: 'sample-p10', exam: 'practical', subjectId: 'security', source: '예시', type: 'short',
    question: '웹 페이지에 악성 스크립트를 삽입해 사용자의 정보를 탈취하는 공격 기법을 쓰시오.',
    answer: ['XSS', 'Cross Site Scripting', 'Cross-Site Scripting', '크로스 사이트 스크립팅'],
    explanation: '입력값 검증과 출력 시 이스케이프 처리로 방어한다.',
  },
  {
    id: 'sample-p11', exam: 'practical', subjectId: 'security', source: '예시', type: 'short',
    question: '사용자의 역할에 따라 접근 권한을 부여하는 접근 통제 방식을 영문 약어로 쓰시오.',
    answer: ['RBAC', 'Role Based Access Control', 'Role-Based Access Control'],
    explanation: 'DAC는 신분 기반, MAC는 보안 등급 기반 접근 통제이다.',
  },
  {
    id: 'sample-p12', exam: 'practical', subjectId: 'os-network', source: '예시', type: 'short',
    question: 'IP 주소를 MAC 주소로 변환하는 프로토콜을 쓰시오.',
    answer: ['ARP'],
    explanation: '반대로 MAC 주소를 IP 주소로 변환하는 것은 RARP이다.',
  },
]
