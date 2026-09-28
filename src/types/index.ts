export type ExamType = 'written' | 'practical' // 필기 | 실기

export type Concept = {
  title: string
  level?: 1 | 2 | 3 // 출제 빈도 ★
  summary: string // 접힌 상태에서 보이는 한 줄 쉬운 정의
  points?: string[]
  code?: string // 코드 · 계산 · 그림 예시
  table?: { head: string[]; rows: string[][] } // 비교표 · 변수 추적표
  tip?: string // 암기 팁 · 핵심 한 줄
}

export type Subject = {
  id: string
  name: string
  concepts: Concept[]
}

type QuestionBase = {
  id: string
  exam: ExamType
  subjectId: string
  source: string // 예: '2024년 1회'
  question: string
  code?: string
  explanation: string
}

// 객관식: answer는 choices의 인덱스(0부터)
export type ChoiceQuestion = QuestionBase & { type: 'choice'; choices: string[]; answer: number }
// 주관식: answer는 인정되는 정답 목록 (첫 번째가 대표 정답)
export type ShortQuestion = QuestionBase & { type: 'short'; answer: string[] }

export type Question = ChoiceQuestion | ShortQuestion

export type Answer = number | string
export type Answers = Record<string, Answer>
