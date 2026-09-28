import { Link, Navigate, useParams } from 'react-router'
import { EXAMS } from '../../data/subjects'
import { QuizRunner } from '../../features/quiz/components/QuizRunner'
import { getQuestions } from '../../features/quiz/quiz.logic'
import { getSubject } from '../../features/study/study.logic'
import type { ExamType } from '../../types'

export function QuizPage({ exam }: { exam: ExamType }) {
  const { subjectId } = useParams()
  const subject = subjectId ? getSubject(exam, subjectId) : undefined
  if (subjectId && !subject) return <Navigate to={`/${exam}`} replace />

  const questions = getQuestions(exam, subjectId)

  return (
    <>
      <Link to={`/${exam}`} className="back">← {EXAMS[exam].label}</Link>
      <h1>{subject?.name ?? `${EXAMS[exam].label} 전체`}</h1>
      {questions.length === 0 ? (
        <p className="muted">아직 등록된 문제가 없습니다.</p>
      ) : (
        <QuizRunner key={subjectId ?? 'all'} questions={questions} />
      )}
    </>
  )
}
