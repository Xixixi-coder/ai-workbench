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
    <aside className="w-[240px] shrink-0 bg-white border-r border-[#e5e7eb] min-h-screen p-[20px]">
      <div className="mb-[32px] flex items-center gap-[10px]">
        <div className="w-[32px] h-[32px] bg-[#6366f1] rounded-[8px] flex items-center justify-center">
          <LayoutDashboard size={14} className="text-white" />
        </div>
        <span className="font-bold text-[15px] text-[#111827] leading-tight">应用产品部工作台</span>
      </div>
      <div className="flex flex-col gap-[4px]">
        {navGroups.map((group, gi) => (
          <div key={gi}>
            <div className={`text-[11px] font-semibold text-[#9ca3af] tracking-[0.05em] uppercase px-[12px] mb-[6px] ${gi > 0 ? 'mt-[20px]' : ''}`}>
              {group.label}
            </div>
            {group.items.map((item) => {
              const active = activePage === item.key
              const Icon = item.icon
              return (
                <button
                  key={item.key}
                  onClick={() => onNavigate(item.key)}
                  className={`w-full flex items-center gap-[10px] text-left px-[12px] py-[10px] rounded-[8px] text-[13px] font-medium transition-all duration-200 ${
                    active
                      ? 'bg-[#ede9fe] text-[#6366f1]'
                      : 'text-[#374151] hover:bg-[#f9fafb] hover:text-[#111827]'
                  }`}
                >
                  <Icon size={16} className={active ? 'text-[#6366f1]' : 'text-[#9ca3af]'} />
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
