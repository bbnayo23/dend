import { Link, useSearchParams } from 'react-router'
import { EXAMS, EXAM_TYPES } from '../../data/subjects'
import { QuestionReview } from '../../features/result/components/QuestionReview'
import { searchConcepts, searchQuestions } from '../../features/search/search.logic'
import { ConceptCard } from '../../features/study/components/ConceptList'
import { getSubject } from '../../features/study/study.logic'
import type { ExamType } from '../../types'

const SUGGESTIONS = ['이상 현상', '함수적 종속', '반정규화', 'EAI', 'JSON', '스텁', 'VPN', 'OSPF']

export function SearchPage() {
  const [params, setParams] = useSearchParams()
  const query = params.get('q') ?? ''
  const exam = EXAM_TYPES.find((e) => e === params.get('exam'))

  // 검색어 · 시험 필터를 주소에 남겨서 뒤로 가기와 링크 공유가 되게 한다
  const update = (next: { q?: string; exam?: ExamType | null }) => {
    const p = new URLSearchParams(params)
    if (next.q !== undefined) (next.q ? p.set('q', next.q) : p.delete('q'))
    if (next.exam !== undefined) (next.exam ? p.set('exam', next.exam) : p.delete('exam'))
    setParams(p, { replace: true })
  }

  const concepts = searchConcepts(query, exam)
  const found = searchQuestions(query, exam)

  return (
    <>
      <h1>검색</h1>
      <input
        type="search"
        className="input"
        placeholder="개념 · 문제 검색 (예: 함수적 종속, EAI, 스텁)"
        value={query}
        onChange={(e) => update({ q: e.target.value })}
        autoFocus
      />
      <div className="filter">
        {[undefined, ...EXAM_TYPES].map((e) => (
          <button
            key={e ?? 'all'}
            type="button"
            className={`btn ${e === exam ? 'btn-primary' : ''}`}
            onClick={() => update({ exam: e ?? null })}
          >
            {e ? EXAMS[e].label : '전체'}
          </button>
        ))}
      </div>

      {!query.trim() ? (
        <div className="filter">
          {SUGGESTIONS.map((s) => (
            <button key={s} type="button" className="tag" onClick={() => update({ q: s })}>{s}</button>
          ))}
        </div>
      ) : (
        <>
          <h2 className="section-title">개념 {concepts.length}</h2>
          {concepts.length === 0 && <p className="muted small">일치하는 개념이 없습니다.</p>}
          <div className="list">
            {concepts.map(({ concept, places }, i) => (
              <ConceptCard
                key={`${i}-${concept.title}`}
                concept={concept}
                label={
                  <span className="filter">
                    {places.map(({ exam: e, subject }) => (
                      <Link key={`${e}-${subject.id}`} to={`/${e}/study/${subject.id}`} className="tag">
                        {EXAMS[e].label} · {subject.name}
                      </Link>
                    ))}
                  </span>
                }
              />
            ))}
          </div>

          <h2 className="section-title">문제 {found.length}</h2>
          {found.length === 0 && <p className="muted small">일치하는 문제가 없습니다.</p>}
          <div className="list">
            {found.map((q) => (
              <QuestionReview
                key={q.id}
                question={q}
                label={`${EXAMS[q.exam].label} · ${getSubject(q.exam, q.subjectId)?.name ?? ''} · ${q.source}`}
              />
            ))}
          </div>
        </>
      )}
    </>
  )
}
