import { useState } from 'react'
import Sidebar from './components/Sidebar'
import type { PageKey } from './components/Sidebar'
import OverviewPage from './components/pages/OverviewPage'
import AIInfoPage from './components/pages/AIInfoPage'
import OrgActivityPage from './components/pages/OrgActivityPage'

export default function App() {
  const [page, setPage] = useState<PageKey>('overview')

  return (
    <div className="w-full min-h-screen bg-[#f0f2f5]">
      <div className="mx-auto flex">
        <Sidebar activePage={page} onNavigate={setPage} />
        <main className="flex-1 bg-gray-50/50 min-h-screen overflow-y-auto">
          {page === 'overview' && <OverviewPage />}
          {page === 'aiInfo' && <AIInfoPage />}
          {page === 'orgActivity' && <OrgActivityPage />}
        </main>
      </div>
    </div>
  )
}
