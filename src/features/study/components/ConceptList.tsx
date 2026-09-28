import { useState } from 'react'
import type { Concept } from '../../../types'
import { filterConcepts } from '../study.logic'

export function ConceptList({ concepts }: { concepts: Concept[] }) {
  const [query, setQuery] = useState('')
  const shown = filterConcepts(concepts, query)

  return (
    <>
      <input
        type="search"
        className="input"
        placeholder="개념 검색"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {shown.length === 0 && <p className="muted">검색 결과가 없습니다.</p>}
      <div className="list">
        {shown.map((c) => <ConceptCard key={c.title} concept={c} />)}
      </div>
    </>
  )
}

function ConceptCard({ concept: c }: { concept: Concept }) {
  return (
    <details className="card">
      <summary>
        <span className="concept-title">
          <strong>{c.title}</strong>
          {c.level && <span className="stars" aria-label={`출제 빈도 ${c.level}단계`}>{'★'.repeat(c.level)}</span>}
        </span>
        <span className="muted small">{c.summary}</span>
      </summary>
      <div className="concept-body">
        {c.points && (
          <ul className="points">
            {c.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        )}
        {c.code && <pre className="code"><code>{c.code}</code></pre>}
        {c.table && (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>{c.table.head.map((h) => <th key={h}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {c.table.rows.map((row, i) => (
                  <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {c.tip && <p className="tip">{c.tip}</p>}
      </div>
    </details>
  )
}
