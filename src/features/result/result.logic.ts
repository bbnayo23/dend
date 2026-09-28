import type { Answer, Answers, Question } from '../../types'

// 주관식 채점: 공백 · 대소문자 무시
const normalize = (s: string) => s.replace(/\s+/g, '').toLowerCase()

export function isCorrect(q: Question, a: Answer | undefined) {
  if (a === undefined) return false
  if (q.type === 'choice') return a === q.answer
  return q.answer.some((ans) => normalize(ans) === normalize(String(a)))
}

export function formatAnswer(q: Question, a: Answer | undefined) {
  if (a === undefined || a === '') return '(미입력)'
  return q.type === 'choice' && typeof a === 'number' ? `${a + 1}번 ${q.choices[a]}` : String(a)
}

export const correctAnswer = (q: Question) => formatAnswer(q, q.type === 'choice' ? q.answer : q.answer[0])

export function summarize(questions: Question[], answers: Answers) {
  const wrong = questions.filter((q) => !isCorrect(q, answers[q.id]))
  return { total: questions.length, correct: questions.length - wrong.length, wrong }
}
