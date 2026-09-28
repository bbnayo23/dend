import type { ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router'

export function PageLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">D:END</Link>
        <nav className="nav">
          <NavLink to="/" end>홈</NavLink>
          <NavLink to="/written">필기</NavLink>
          <NavLink to="/practical">실기</NavLink>
          <NavLink to="/info">정보</NavLink>
          <NavLink to="/bookmark">북마크</NavLink>
        </nav>
      </header>
      {/* key: 경로가 바뀔 때마다 다시 마운트해서 진입 애니메이션 재생 */}
      <main key={pathname} className="main">{children}</main>
    </>
  )
}
