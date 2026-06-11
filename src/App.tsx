import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import type { PageKey } from './components/Sidebar'
import DashboardPage from './components/pages/DashboardPage'
import TasksPage from './components/pages/TasksPage'
import OrgActivitiesPage from './components/pages/OrgActivitiesPage'
import NewsFeedPage from './components/pages/NewsFeedPage'
import KnowledgePage from './components/pages/KnowledgePage'

const pages: Record<PageKey, (onNavigate: (p: PageKey) => void) => React.ReactNode> = {
  dashboard: (onNavigate) => <DashboardPage onNavigate={onNavigate} />,
  tasks: () => <TasksPage />,
  org: () => <OrgActivitiesPage />,
  news: () => <NewsFeedPage />,
  knowledge: () => <KnowledgePage />,
}

export default function App() {
  const [page, setPage] = useState<PageKey>('dashboard')

  return (
    <div className="h-screen flex flex-col bg-ground">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activePage={page} onNavigate={setPage} />
        <main className="flex-1 overflow-y-auto">
          {pages[page](setPage)}
        </main>
      </div>
    </div>
  )
}
