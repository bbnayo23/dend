import { Link, useNavigate } from 'react-router'
import { EXAMS, EXAM_TYPES } from '../../data/subjects'

export function HomePage() {
  const navigate = useNavigate()

  return (
    <>
      <section className="hero">
        <h1>정보처리기사</h1>
        <p className="muted">필기 · 실기 개념 정리와 문제 풀이</p>
      </section>
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault()
          const q = String(new FormData(e.currentTarget).get('q') ?? '').trim()
          navigate(q ? `/search?q=${encodeURIComponent(q)}` : '/search')
        }}
      >
        <input type="search" name="q" className="input" placeholder="개념 · 문제 검색 (예: 반정규화, VPN)" />
      </form>
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
