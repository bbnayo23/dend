import { questions } from '../../data/questions'
import { EXAM_TYPES, subjects } from '../../data/subjects'
import type { Concept, ExamType, Question, Subject } from '../../types'

// 띄어쓰기 · 대소문자 무시: '함수적종속'으로 '함수적 종속'을, 'eai'로 'EAI'를 찾는다
const squash = (s: string) => s.replace(/\s+/g, '').toLowerCase()

// 검색어를 공백으로 나눈 단어가 모두 들어 있으면 일치 ('스텁 드라이버')
export function matches(text: string, query: string) {
  const words = query.split(/\s+/).map(squash).filter(Boolean)
  const target = squash(text)
  return words.every((w) => target.includes(w))
}

// 검색 대상: 카드에 보이는 모든 글자
export const conceptText = (c: Concept) =>
  [c.title, c.summary, c.analogy ?? '', ...(c.points ?? []), c.code ?? '', c.tip ?? '', ...(c.table?.head ?? []), ...(c.table?.rows.flat() ?? [])].join('\n')

const questionText = (q: Question) =>
  [q.question, q.code ?? '', q.explanation, ...(q.type === 'choice' ? q.choices : q.answer)].join('\n')

export type Place = { exam: ExamType; subject: Subject }
export type ConceptHit = { concept: Concept; places: Place[] }

// 실기 과목은 필기 개념을 재사용하므로, 같은 개념은 한 번만 보여주고 위치를 모두 붙인다
export function searchConcepts(query: string, exam?: ExamType): ConceptHit[] {
  if (!query.trim()) return []
  const hits = new Map<Concept, Place[]>()
  for (const e of exam ? [exam] : EXAM_TYPES) {
    for (const subject of subjects[e]) {
      for (const c of subject.concepts) {
        if (!matches(conceptText(c), query)) continue
        hits.set(c, [...(hits.get(c) ?? []), { exam: e, subject }])
      }
    }
  }
  // 제목에 검색어가 들어간 개념을 먼저 보여준다
  const titleFirst = (c: Concept) => (matches(c.title, query) ? 0 : 1)
  return [...hits]
    .map(([concept, places]) => ({ concept, places }))
    .sort((a, b) => titleFirst(a.concept) - titleFirst(b.concept))
}

export function searchQuestions(query: string, exam?: ExamType): Question[] {
  if (!query.trim()) return []
  return questions.filter((q) => (!exam || q.exam === exam) && matches(questionText(q), query))
}
