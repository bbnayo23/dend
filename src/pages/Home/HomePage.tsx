import { Link } from 'react-router'
import { EXAMS, EXAM_TYPES } from '../../data/subjects'

export function HomePage() {
  return (
    <>
      <section className="hero">
        <h1>정보처리기사</h1>
        <p className="muted">필기 · 실기 개념 정리와 문제 풀이</p>
      </section>
      <div className="grid">
        {EXAM_TYPES.map((exam) => (
          <Link key={exam} to={`/${exam}`} className="card card-link">
            <h2>{EXAMS[exam].label}</h2>
            <p className="muted small">{EXAMS[exam].description}</p>
          </Link>
        ))}
      </div>
    </>
  )
}
