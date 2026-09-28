import { Link } from 'react-router'
import { EXAMS } from '../../data/subjects'
import { getQuestions } from '../../features/quiz/quiz.logic'
import { getSubjects } from '../../features/study/study.logic'
import type { ExamType } from '../../types'

export function ExamPage({ exam }: { exam: ExamType }) {
  return (
    <>
      <div className="page-head">
        <h1>{EXAMS[exam].label}</h1>
        <Link to={`/${exam}/quiz`} className="btn btn-primary">전체 문제 풀기</Link>
      </div>
      <ul className="list">
        {getSubjects(exam).map((s, i) => (
          <li key={s.id} className="card row">
            <div className="row-main">
              <span className="badge">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h2>{s.name}</h2>
                <p className="muted small">개념 {s.concepts.length} · 문제 {getQuestions(exam, s.id).length}</p>
              </div>
            </div>
            <div className="actions">
              <Link to={`/${exam}/study/${s.id}`} className="btn">개념</Link>
              <Link to={`/${exam}/quiz/${s.id}`} className="btn btn-primary">문제</Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
