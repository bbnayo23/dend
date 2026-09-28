import type { Question } from '../../../types'
import { ResultSummary } from '../../result/components/ResultSummary'
import { useQuiz } from '../hooks/useQuiz'
import { QuestionCard } from './QuestionCard'

export function QuizRunner({ questions }: { questions: Question[] }) {
  const quiz = useQuiz(questions)
  const { current } = quiz

  if (!current) {
    return <ResultSummary questions={quiz.questions} answers={quiz.answers} onRetry={quiz.restart} />
  }

  const total = quiz.questions.length
  const answered = quiz.answers[current.id] !== undefined

  return (
    <>
      <div className="progress-row">
        <progress value={quiz.index} max={total} />
        <span className="muted small">{quiz.index + 1} / {total}</span>
      </div>
      <QuestionCard key={current.id} question={current} answer={quiz.answers[current.id]} onAnswer={quiz.answer} />
      {answered && (
        <button type="button" className="btn btn-primary btn-block" onClick={quiz.next}>
          {quiz.index === total - 1 ? '결과 보기' : '다음 문제'}
        </button>
      )}
    </>
  )
}
