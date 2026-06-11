import { LayoutDashboard, Sparkles, Users } from 'lucide-react'

export type PageKey = 'overview' | 'aiInfo' | 'orgActivity'

const navGroups: {
  label: string
  items: { key: PageKey; icon: typeof LayoutDashboard; label: string }[]
}[] = [
  {
    label: '核心看板',
    items: [
      { key: 'overview', icon: LayoutDashboard, label: '数据概览' },
    ],
  },
  {
    label: '资讯与协作',
    items: [
      { key: 'aiInfo', icon: Sparkles, label: '前沿视界' },
      { key: 'orgActivity', icon: Users, label: '组织事务' },
    ],
  },
]

export default function Sidebar({ activePage, onNavigate }: { activePage: PageKey; onNavigate: (p: PageKey) => void }) {
  return (
    <aside className="w-[260px] bg-white min-h-screen p-[24px] flex flex-col border-r border-gray-100 shadow-[2px_0_8px_rgba(0,0,0,0.02)] z-10">
      <div className="mb-[40px] flex items-center gap-[12px] px-[8px]">
        <div className="w-[32px] h-[32px] bg-gray-900 rounded-[8px] flex items-center justify-center shadow-sm">
          <LayoutDashboard size={14} className="text-white" />
        </div>
        <span className="font-bold text-[18px] text-gray-900 tracking-tight">应用产品部工作台</span>
      </div>
      <div className="flex flex-col gap-[8px]">
        {navGroups.map((group, gi) => (
          <div key={gi}>
            <div className={`text-[12px] font-semibold text-gray-400 uppercase tracking-wider px-[8px] mb-[4px] ${gi > 0 ? 'mt-[16px]' : ''}`}>
              {group.label}
            </div>
            {group.items.map((item) => {
              const active = activePage === item.key
              const Icon = item.icon
              return (
                <button
                  key={item.key}
                  onClick={() => onNavigate(item.key)}
                  className={`w-full flex items-center gap-[12px] text-left px-[16px] py-[12px] rounded-[10px] text-[14px] font-medium transition-all duration-200 ${
                    active
                      ? 'bg-gray-900 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon size={16} className={active ? 'text-white' : 'text-gray-400'} />
                  {item.label}
                </button>
              )
            })}
          </div>
        ))}
      </div>
    </aside>
  )
}
