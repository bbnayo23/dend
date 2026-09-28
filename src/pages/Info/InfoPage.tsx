import {
  QNET_URL,
  eligibility,
  examFacts,
  examOverview,
  practicalStrategy,
  writtenStrategy,
} from '../../data/examInfo'

export function InfoPage() {
  return (
    <>
      <div className="page-head">
        <h1>시험 정보</h1>
        <a href={QNET_URL} target="_blank" rel="noreferrer" className="btn btn-primary">Q-Net 일정 확인</a>
      </div>
      <p className="muted small">회차별 접수 · 시험 · 발표 일정은 해마다 바뀌므로 Q-Net 공고를 기준으로 확인하세요.</p>

      <div className="list">
        <section className="card concept-body">
          <h2>시험 구성</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>{examOverview.head.map((h) => <th key={h}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {examOverview.rows.map((row) => (
                  <tr key={row[0]}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
          <InfoList items={examFacts} />
        </section>

        <section className="card concept-body">
          <h2>응시 자격 (요약)</h2>
          <InfoList items={eligibility} />
        </section>

        <section className="card concept-body">
          <h2>필기 공부 전략</h2>
          <InfoList items={writtenStrategy} />
        </section>

        <section className="card concept-body">
          <h2>실기 공부 전략</h2>
          <InfoList items={practicalStrategy} />
        </section>
      </div>
    </>
  )
}

function InfoList({ items }: { items: string[] }) {
  return (
    <ul className="points">
      {items.map((t) => <li key={t}>{t}</li>)}
    </ul>
  )
}
