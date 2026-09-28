import { questions } from '../../data/questions'
import type { ExamType } from '../../types'

export const getQuestions = (exam: ExamType, subjectId?: string) =>
  questions.filter((q) => q.exam === exam && (!subjectId || q.subjectId === subjectId))

export const getQuestionsByIds = (ids: string[]) => questions.filter((q) => ids.includes(q.id))

// Fisher-Yates
export function shuffle<T>(items: T[]) {
  const a = [...items]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
