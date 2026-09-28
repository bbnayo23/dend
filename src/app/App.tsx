import { BrowserRouter } from 'react-router'
import { PageLayout } from '../components/layout/PageLayout'
import { AppRoutes } from './routes'

export function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <AppRoutes />
      </PageLayout>
    </BrowserRouter>
  )
}
