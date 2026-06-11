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
    <aside className="w-[200px] shrink-0 bg-white rounded-[16px] p-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-gray-100/60">
      <div className="mb-[32px] flex items-center gap-[10px]">
        <div className="w-[32px] h-[32px] bg-gray-900 rounded-[8px] flex items-center justify-center shadow-sm">
          <LayoutDashboard size={14} className="text-white" />
        </div>
        <span className="font-bold text-[15px] text-gray-900 tracking-tight leading-tight">应用产品部工作台</span>
      </div>
      <div className="flex flex-col gap-[4px]">
        {navGroups.map((group, gi) => (
          <div key={gi}>
            <div className={`text-[11px] font-semibold text-gray-400 tracking-wider px-[8px] mb-[4px] ${gi > 0 ? 'mt-[16px]' : ''}`}>
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
                      ? 'bg-gray-900 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon size={15} className={active ? 'text-white' : 'text-gray-400'} />
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
