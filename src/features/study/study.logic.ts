import { subjects } from '../../data/subjects'
import type { Concept, ExamType } from '../../types'
import { conceptText, matches } from '../search/search.logic'

export const getSubjects = (exam: ExamType) => subjects[exam]

export const getSubject = (exam: ExamType, id: string) => subjects[exam].find((s) => s.id === id)

export function filterConcepts(concepts: Concept[], query: string) {
  if (!query.trim()) return concepts
  return concepts.filter((c) => matches(conceptText(c), query))
}
