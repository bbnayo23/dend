import { EXAMS } from '../../data/subjects'
import { useBookmarks } from '../../features/bookmark/hooks/useBookmarks'
import { getQuestionsByIds } from '../../features/quiz/quiz.logic'
import { QuestionReview } from '../../features/result/components/QuestionReview'
import { getSubject } from '../../features/study/study.logic'

export function BookmarkPage() {
  const bookmarks = useBookmarks()
  const saved = getQuestionsByIds(bookmarks.ids)

  return (
    <>
      <h1>북마크</h1>
      {saved.length === 0 && <p className="muted">문제 풀이 중 ☆를 눌러 저장하세요.</p>}
      <div className="list">
        {saved.map((q) => (
          <QuestionReview
            key={q.id}
            question={q}
            label={`${EXAMS[q.exam].label} · ${getSubject(q.exam, q.subjectId)?.name ?? ''}`}
          >
            <button type="button" className="btn" onClick={() => bookmarks.toggle(q.id)}>북마크 해제</button>
          </QuestionReview>
        ))}
      </div>
    </>
  )
}
