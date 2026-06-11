import { useState } from 'react'
import Sidebar from './components/Sidebar'
import type { PageKey } from './components/Sidebar'
import OverviewPage from './components/pages/OverviewPage'
import AIInfoPage from './components/pages/AIInfoPage'
import OrgActivityPage from './components/pages/OrgActivityPage'

export default function App() {
  const [page, setPage] = useState<PageKey>('overview')

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
     <Sidebar activePage={page} onNavigate={setPage} />
        <main className="flex-1 min-w-0 p-[24px]">
          {page === 'overview' && <OverviewPage />}
          {page === 'aiInfo' && <AIInfoPage />}
          {page === 'orgActivity' && <OrgActivityPage />}
        </main>
      </div>
    </div>
  )
}
