import type { Question } from '../../types'
import { frequentPractical } from './frequent/practical'
import { frequentWritten } from './frequent/written'
import { samplePractical } from './sample/practical'
import { sampleWritten } from './sample/written'

// 연도별 문제는 data/questions/2024/written.ts 처럼 추가하고 여기에 합친다.
export const questions: Question[] = [...sampleWritten, ...frequentWritten, ...samplePractical, ...frequentPractical]
