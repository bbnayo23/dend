import type { CSSProperties } from 'react'
import type { Answers, Question } from '../../../types'
import { formatAnswer, summarize } from '../result.logic'
import { QuestionReview } from './QuestionReview'

type Props = {
  questions: Question[]
  answers: Answers
  onRetry: () => void
}

export function ResultSummary({ questions, answers, onRetry }: Props) {
  const { total, correct, wrong } = summarize(questions, answers)
  const score = Math.round((correct / total) * 100)

  return (
    <>
      <section className="card result">
        <div className="score-ring" style={{ '--p': score } as CSSProperties}>
          <div className="score-inner">
            <span className="score">{score}</span>
            <span className="muted small">점</span>
          </div>
        </div>
        <p className="muted">{total}문제 중 {correct}문제 정답</p>
        <button type="button" className="btn btn-primary" onClick={onRetry}>다시 풀기</button>
      </section>
      {wrong.length > 0 && (
        <>
          <h2>틀린 문제 {wrong.length}</h2>
          <div className="list">
            {wrong.map((q) => (
              <QuestionReview key={q.id} question={q} mine={formatAnswer(q, answers[q.id])} />
            ))}
          </div>
        </>
      )}
    </>
  )
}
