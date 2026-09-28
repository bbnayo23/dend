import { subjects } from '../../data/subjects'
import type { Concept, ExamType } from '../../types'

export const getSubjects = (exam: ExamType) => subjects[exam]

export const getSubject = (exam: ExamType, id: string) => subjects[exam].find((s) => s.id === id)

export function filterConcepts(concepts: Concept[], query: string) {
  const q = query.trim().toLowerCase()
  if (!q) return concepts
  return concepts.filter((c) => conceptText(c).toLowerCase().includes(q))
}

// 검색 대상: 카드에 보이는 모든 글자
const conceptText = (c: Concept) =>
  [c.title, c.summary, ...(c.points ?? []), c.code ?? '', c.tip ?? '', ...(c.table?.head ?? []), ...(c.table?.rows.flat() ?? [])].join('\n')
