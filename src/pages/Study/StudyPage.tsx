import { Link, Navigate, useParams } from 'react-router'
import { EXAMS } from '../../data/subjects'
import { ConceptList } from '../../features/study/components/ConceptList'
import { getSubject } from '../../features/study/study.logic'
import type { ExamType } from '../../types'

export function StudyPage({ exam }: { exam: ExamType }) {
  const { subjectId = '' } = useParams()
  const subject = getSubject(exam, subjectId)
  if (!subject) return <Navigate to={`/${exam}`} replace />

  return (
    <>
      <Link to={`/${exam}`} className="back">← {EXAMS[exam].label}</Link>
      <div className="page-head">
        <h1>{subject.name}</h1>
        <Link to={`/${exam}/quiz/${subject.id}`} className="btn btn-primary">문제 풀기</Link>
      </div>
      <ConceptList key={subject.id} concepts={subject.concepts} />
    </>
  )
}
