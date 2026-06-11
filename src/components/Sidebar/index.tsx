import { LayoutDashboard, ListChecks, Users, Newspaper, BookOpen } from 'lucide-react'

export type PageKey = 'dashboard' | 'tasks' | 'org' | 'news' | 'knowledge'

const navItems: { key: PageKey; icon: typeof LayoutDashboard; label: string; badge?: number }[] = [
  { key: 'dashboard', icon: LayoutDashboard, label: '工作台' },
  { key: 'tasks', icon: ListChecks, label: '任务看板', badge: 3 },
  { key: 'org', icon: Users, label: '组织活动' },
  { key: 'news', icon: Newspaper, label: '资讯动态' },
  { key: 'knowledge', icon: BookOpen, label: '知识库' },
]

export default function Sidebar({ activePage, onNavigate }: { activePage: PageKey; onNavigate: (p: PageKey) => void }) {
  return (
    <aside className="w-[220px] bg-card border-r border-rule shrink-0 flex flex-col">
      <nav className="flex-1 py-4 px-3 space-y-1">
        {navItems.map((item) => {
          const active = activePage === item.key
          const Icon = item.icon
          return (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-colors relative ${
                active
                  ? 'bg-blue-light text-blue'
                  : 'text-ink-secondary hover:bg-ground hover:text-ink'
              }`}
            >
              {active && <span className="absolute left-0 top-2 bottom-2 w-[3px] rounded-r-full bg-blue" />}
              <Icon size={18} strokeWidth={active ? 2 : 1.5} />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-red text-white min-w-[18px] text-center">
                  {item.badge}
                </span>
              )}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
