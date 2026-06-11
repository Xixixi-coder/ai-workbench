import { useState } from 'react'
import Sidebar from './components/Sidebar'
import type { PageKey } from './components/Sidebar'
import OverviewPage from './components/pages/OverviewPage'
import AIInfoPage from './components/pages/AIInfoPage'
import OrgActivityPage from './components/pages/OrgActivityPage'

const pageLabels: Record<PageKey, string> = {
  overview: '工作台概览',
  aiInfo: 'AI资讯',
  orgActivity: '组织活动',
}

export default function App() {
  const [page, setPage] = useState<PageKey>('overview')

  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <div className="p-[24px]">
        <div className="text-[13px] text-gray-400 font-medium mb-[16px]">{pageLabels[page]}</div>
        <div className="flex gap-[24px] items-start">
          <Sidebar activePage={page} onNavigate={setPage} />
          <main className="flex-1 min-w-0">
            {page === 'overview' && <OverviewPage />}
            {page === 'aiInfo' && <AIInfoPage />}
            {page === 'orgActivity' && <OrgActivityPage />}
          </main>
        </div>
      </div>
    </div>
  )
}
