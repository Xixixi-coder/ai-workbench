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
    <aside className="w-[220px] shrink-0 bg-white rounded-[24px] p-[24px] shadow-[0_1px_3px_rgba(0,0,0,0.03)] border border-[#E2E2DD]">
      <div className="mb-[32px] flex items-center gap-[10px]">
        <div className="w-[32px] h-[32px] bg-[#1A1A1A] rounded-[12px] flex items-center justify-center">
          <LayoutDashboard size={14} className="text-white" />
        </div>
        <span className="font-semibold text-[15px] text-[#1A1A1A] tracking-[-0.02em] leading-tight">应用产品部工作台</span>
      </div>
      <div className="flex flex-col gap-[4px]">
        {navGroups.map((group, gi) => (
          <div key={gi}>
            <div className={`text-[11px] font-medium text-[#A3A3A0] tracking-[0.06em] uppercase px-[8px] mb-[4px] ${gi > 0 ? 'mt-[16px]' : ''}`}>
              {group.label}
            </div>
            {group.items.map((item) => {
              const active = activePage === item.key
              const Icon = item.icon
              return (
                <button
                  key={item.key}
                  onClick={() => onNavigate(item.key)}
                  className={`w-full flex items-center gap-[10px] text-left px-[14px] py-[10px] rounded-[10px] text-[13px] font-medium transition-all duration-200 ${
                    active
                      ? 'bg-[#1A1A1A] text-white'
                      : 'text-[#6B6B6B] hover:bg-[#F5F5F0] hover:text-[#1A1A1A]'
                  }`}
                >
                  <Icon size={15} className={active ? 'text-white' : 'text-[#A3A3A0]'} />
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
