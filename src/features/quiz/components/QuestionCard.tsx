import { Link } from 'react-router'
import type { Answer, Question } from '../../../types'
import { useBookmarks } from '../../bookmark/hooks/useBookmarks'
import { correctAnswer, isCorrect } from '../../result/result.logic'

type Props = {
  question: Question
  answer?: Answer
  onAnswer: (answer: Answer) => void
}

export function QuestionCard({ question: q, answer, onAnswer }: Props) {
  const bookmarks = useBookmarks()
  const answered = answer !== undefined
  const correct = isCorrect(q, answer)
  const saved = bookmarks.has(q.id)

  return (
    <article className="card question">
      <div className="question-meta">
        <span className="tag">{q.source}</span>
        <button
          type="button"
          className="bookmark"
          aria-label="북마크"
          aria-pressed={saved}
          onClick={() => bookmarks.toggle(q.id)}
        >
          {saved ? '★' : '☆'}
        </button>
      </div>

      <p className="question-text">{q.question}</p>
      {q.code && <pre className="code"><code>{q.code}</code></pre>}

      {q.type === 'choice' ? (
        <ul className="choices">
          {q.choices.map((c, i) => {
            const state = !answered ? '' : i === q.answer ? 'correct' : i === answer ? 'wrong' : ''
            return (
              <li key={i}>
                <button type="button" className={`choice ${state}`} disabled={answered} onClick={() => onAnswer(i)}>
                  {i + 1}. {c}
                </button>
              </li>
            )
          })}
        </ul>
      ) : (
        <form
          className="short-answer"
          onSubmit={(e) => {
            e.preventDefault()
            // 빈 값으로 제출하면 '모름'으로 처리하고 정답을 보여준다
            onAnswer(String(new FormData(e.currentTarget).get('answer') ?? '').trim())
          }}
        >
          <input name="answer" className="input" placeholder="답 입력 (비워두면 정답 보기)" autoComplete="off" disabled={answered} autoFocus />
          <button className="btn btn-primary" disabled={answered}>확인</button>
        </form>
      )}

      {answered && (
        <div className={`feedback ${correct ? 'ok' : 'ng'}`}>
          <strong>{correct ? '정답' : '오답'}</strong>
          {!correct && <p>정답: {correctAnswer(q)}</p>}
          <p className="muted">{q.explanation}</p>
          <Link to={`/${q.exam}/study/${q.subjectId}`} className="concept-link">관련 개념 보기 →</Link>
        </div>
      )}
    </article>
  )
}
