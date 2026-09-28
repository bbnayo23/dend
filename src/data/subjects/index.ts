import type { ExamType, Subject } from '../../types'
import { practicalSubjects } from './practical'
import { writtenSubjects } from './written'

export const EXAM_TYPES: ExamType[] = ['written', 'practical']

export const EXAMS: Record<ExamType, { label: string; description: string }> = {
  written: { label: '필기', description: '5과목 객관식 100문항 · 과목별 40점 이상, 평균 60점 이상' },
  practical: { label: '실기', description: '필답형 20문항 · 100점 만점 중 60점 이상' },
}

export const subjects: Record<ExamType, Subject[]> = {
  written: writtenSubjects,
  practical: practicalSubjects,
}
