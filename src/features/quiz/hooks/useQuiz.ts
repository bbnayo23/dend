import { useState } from 'react'
import type { Answer, Answers, Question } from '../../../types'
import { shuffle } from '../quiz.logic'

export function useQuiz(source: Question[]) {
  const [questions, setQuestions] = useState(() => shuffle(source))
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const current = questions[index] as Question | undefined // 끝까지 풀면 undefined

  return {
    questions,
    index,
    current,
    answers,
    answer: (value: Answer) => {
      if (current) setAnswers((prev) => ({ ...prev, [current.id]: value }))
    },
    next: () => setIndex((i) => i + 1),
    restart: () => {
      setQuestions(shuffle(source))
      setIndex(0)
      setAnswers({})
    },
  }
}
