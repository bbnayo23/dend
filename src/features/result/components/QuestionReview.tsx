import type { ReactNode } from 'react'
import type { Question } from '../../../types'
import { correctAnswer } from '../result.logic'

type Props = {
  question: Question
  label?: string
  mine?: string // 내가 쓴 답 (결과 화면에서만)
  children?: ReactNode
}

// 문제 요약만 보여주고, 펼치면 정답 · 해설 확인
export function QuestionReview({ question: q, label, mine, children }: Props) {
  return (
    <details className="card">
      <summary>
        {label && <span className="tag">{label}</span>}
        <span>{q.question}</span>
      </summary>
      <div className="question">
        {q.code && <pre className="code"><code>{q.code}</code></pre>}
        {q.type === 'choice' && (
          <ol className="points">
            {q.choices.map((c, i) => <li key={i}>{c}</li>)}
          </ol>
        )}
        {mine !== undefined && <p><strong>내 답</strong> {mine}</p>}
        <p><strong>정답</strong> {correctAnswer(q)}</p>
        <p className="muted">{q.explanation}</p>
        {children}
      </div>
    </details>
  )
}
