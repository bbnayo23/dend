import { Navigate, Route, Routes } from 'react-router'
import { EXAM_TYPES } from '../data/subjects'
import { BookmarkPage } from '../pages/Bookmark/BookmarkPage'
import { ExamPage } from '../pages/Exam/ExamPage'
import { HomePage } from '../pages/Home/HomePage'
import { QuizPage } from '../pages/Quiz/QuizPage'
import { StudyPage } from '../pages/Study/StudyPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bookmark" element={<BookmarkPage />} />
      {EXAM_TYPES.map((exam) => (
        <Route key={exam} path={exam}>
          <Route index element={<ExamPage exam={exam} />} />
          <Route path="study/:subjectId" element={<StudyPage exam={exam} />} />
          <Route path="quiz/:subjectId?" element={<QuizPage exam={exam} />} />
        </Route>
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
