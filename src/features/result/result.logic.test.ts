import assert from 'node:assert/strict'
import type { Question } from '../../types'
import { correctAnswer, isCorrect, summarize } from './result.logic.ts'

const base = { exam: 'written', subjectId: 'x', source: '', question: '', explanation: '' } as const
const choice: Question = { ...base, id: 'c', type: 'choice', choices: ['a', 'b'], answer: 1 }
const short: Question = { ...base, id: 's', type: 'short', answer: ['XSS', 'Cross Site Scripting'] }

assert.equal(isCorrect(choice, 1), true)
assert.equal(isCorrect(choice, 0), false)
assert.equal(isCorrect(choice, undefined), false)
assert.equal(isCorrect(short, 'xss'), true)
assert.equal(isCorrect(short, ' cross site  scripting '), true)
assert.equal(isCorrect(short, 'CSRF'), false)
assert.equal(isCorrect(short, ''), false)
assert.equal(correctAnswer(choice), '2번 b')

const r = summarize([choice, short], { c: 1 })
assert.equal(r.total, 2)
assert.equal(r.correct, 1)
assert.deepEqual(r.wrong.map((q) => q.id), ['s'])

console.log('result.logic ok')
