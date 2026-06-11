import { useRef, useState, useCallback, useEffect } from 'react'
import {
  ArrowRight, Code, Wand2, Zap, Laptop, Bot,
  RefreshCw, CheckCircle
} from 'lucide-react'

const todos = [
  { id: 1, title: '填写各项比赛讯息', status: '待处理', date: '2026-06-15', type: '待办' as const },
  { id: 2, title: '集团组织：代码创新大赛', status: '报名中', date: '2026-06-20', type: '比赛' as const },
  { id: 3, title: '集团组织：技术分享演讲比赛', status: '未开始', date: '2026-07-01', type: '比赛' as const },
]

const aiTools = [
  { name: 'Likecode', icon: Code, color: 'blue' },
  { name: 'joygen', icon: Wand2, color: 'green', url: 'https://joygen.jd.com' },
  { name: 'zero', icon: Zap, color: 'purple' },
  { name: 'joycode', icon: Laptop, color: 'indigo' },
  { name: 'joyclaw', icon: Bot, color: 'orange' },
]

const colorMap: Record<string, { bg: string; text: string }> = {
  blue:   { bg: 'bg-blue-50', text: 'text-blue-500' },
  green:  { bg: 'bg-emerald-50', text: 'text-emerald-500' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-500' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-500' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-500' },
}

function ConnectionLines({ hoveredCard, containerRef }: { hoveredCard: string | null; containerRef: React.RefObject<HTMLDivElement | null> }) {
  const [paths, setPaths] = useState<string[]>([])

  const computePaths = useCallback(() => {
    if (!hoveredCard || !containerRef.current) { setPaths([]); return }
    const container = containerRef.current
    const cRect = container.getBoundingClientRect()
    const source = container.querySelector(`[data-card="${hoveredCard}"]`)
    if (!source) { setPaths([]); return }

    const targets = container.querySelectorAll('[data-card]')
    const sRect = source.getBoundingClientRect()
    const sx = sRect.left + sRect.width / 2 - cRect.left
    const sy = sRect.top + sRect.height / 2 - cRect.top

    const newPaths: string[] = []
    targets.forEach(t => {
      const id = t.getAttribute('data-card')
      if (id === hoveredCard) return
      const tRect = t.getBoundingClientRect()
      const tx = tRect.left + tRect.width / 2 - cRect.left
      const ty = tRect.top + tRect.height / 2 - cRect.top
      const cpx1 = sx + (tx - sx) * 0.4
      const cpy1 = sy + (ty - sy) * 0.1
      const cpx2 = sx + (tx - sx) * 0.6
      const cpy2 = sy + (ty - sy) * 0.9
      newPaths.push(`M ${sx} ${sy} C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${tx} ${ty}`)
    })
    setPaths(newPaths)
  }, [hoveredCard, containerRef])

  useEffect(() => { computePaths() }, [computePaths])

  if (!paths.length) return null

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {paths.map((d, i) => (
        <path
          key={`${hoveredCard}-${i}`}
          d={d}
          fill="none"
          stroke="url(#line-grad)"
          strokeWidth="2"
          strokeDasharray="6 4"
          className="animate-draw-line"
        />
      ))}
      <style>{`
        @keyframes drawLine {
          from { stroke-dashoffset: 1000; opacity: 0; }
          to { stroke-dashoffset: 0; opacity: 1; }
        }
        .animate-draw-line {
          stroke-dashoffset: 1000;
          animation: drawLine 0.5s ease-out forwards;
        }
      `}</style>
    </svg>
  )
}

const cardClass = 'bg-white rounded-[16px] p-[24px] shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-[#e5e7eb] transition-all duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]'

function QuarterGoals({ onHover }: { onHover: (id: string | null) => void }) {
  return (
    <div>
      <div className="flex justify-between items-end mb-[16px]">
        <div>
          <h2 className="text-[20px] font-bold text-[#111827]">季度核心目标</h2>
          <div className="text-[13px] text-[#6b7280] mt-[2px]">监控关键业务指标与系统状态</div>
        </div>
        <a
          href="https://joyspace.jd.com/sheets/hzlz9t5uEmXdzLKSUyHn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] text-[#6366f1] hover:text-[#4f46e5] flex items-center gap-[4px] font-medium"
        >
          查看战略图景 <ArrowRight size={12} />
        </a>
      </div>
      <div className="flex gap-[16px]">
        <div
          data-card="metric-1"
          onMouseEnter={() => onHover('metric-1')}
          onMouseLeave={() => onHover(null)}
          className={`${cardClass} flex-1 cursor-pointer`}
        >
          <div className="text-[13px] text-[#6b7280] mb-[8px] font-medium">活跃用户增长</div>
          <div className="flex items-baseline gap-[10px]">
            <div className="text-[36px] font-extrabold text-[#111827] tabular-nums tracking-tight">12,540</div>
            <div className="text-[12px] font-semibold text-white bg-[#10b981] px-[8px] py-[2px] rounded-full">+10.2%</div>
          </div>
          <div className="mt-[14px] h-[28px] flex items-end gap-[3px]">
            {[30, 50, 40, 70, 55, 65, 90].map((h, i) => (
              <div key={i} className="w-full rounded-t-[3px]" style={{ height: `${h}%`, background: i === 6 ? '#6366f1' : `linear-gradient(180deg, rgba(99,102,241,${0.15 + i * 0.05}), rgba(6,182,212,${0.1 + i * 0.04}))` }} />
            ))}
          </div>
        </div>
        <div
          data-card="metric-2"
          onMouseEnter={() => onHover('metric-2')}
          onMouseLeave={() => onHover(null)}
          className={`${cardClass} flex-1 cursor-pointer`}
        >
          <div className="text-[13px] text-[#6b7280] mb-[8px] font-medium">季度营收转化</div>
          <div className="flex items-baseline gap-[10px]">
            <div className="text-[36px] font-extrabold text-[#111827] tabular-nums tracking-tight">$248k</div>
            <div className="text-[12px] font-semibold text-white bg-[#10b981] px-[8px] py-[2px] rounded-full">+24.8%</div>
          </div>
          <div className="mt-[14px] h-[28px] flex items-end gap-[3px]">
            {[40, 30, 60, 80, 50, 70, 100].map((h, i) => (
              <div key={i} className="w-full rounded-t-[3px]" style={{ height: `${h}%`, background: i === 6 ? '#10b981' : `linear-gradient(180deg, rgba(16,185,129,${0.15 + i * 0.05}), rgba(6,182,212,${0.1 + i * 0.04}))` }} />
            ))}
          </div>
        </div>
        <div
          data-card="metric-3"
          onMouseEnter={() => onHover('metric-3')}
          onMouseLeave={() => onHover(null)}
          className={`${cardClass} flex-1 cursor-pointer`}
        >
          <div className="text-[13px] text-[#6b7280] mb-[8px] font-medium">系统稳定性</div>
          <div className="flex items-baseline gap-[10px]">
            <div className="text-[36px] font-extrabold text-[#111827] tabular-nums tracking-tight">99.9%</div>
            <div className="text-[12px] font-semibold text-[#6b7280] bg-[#f3f4f6] px-[8px] py-[2px] rounded-full">达标</div>
          </div>
          <div className="mt-[14px] flex items-center gap-[8px]">
            <CheckCircle size={16} className="text-[#10b981]" />
            <span className="text-[13px] text-[#6b7280]">所有系统运行正常</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function TodoList({ onHover }: { onHover: (id: string | null) => void }) {
  return (
    <div
      data-card="todo"
      onMouseEnter={() => onHover('todo')}
      onMouseLeave={() => onHover(null)}
      className={`${cardClass} h-full flex flex-col`}
    >
      <div className="flex justify-between items-center mb-[20px]">
        <div>
          <h2 className="text-[18px] font-bold text-[#111827]">待办与关注</h2>
          <span className="text-[13px] text-[#9ca3af]">需要您处理的事项与赛事活动</span>
        </div>
        <button className="w-[32px] h-[32px] flex items-center justify-center rounded-[8px] text-[#9ca3af] hover:bg-[#f9fafb] hover:text-[#374151] transition-colors">
          <RefreshCw size={14} />
        </button>
      </div>
      <div className="flex flex-col">
        {todos.map(todo => (
          <div key={todo.id} className="flex items-center justify-between py-[14px] border-b border-[#f3f4f6] last:border-0 group">
            <div className="flex items-center gap-[12px]">
              <span className={`w-[8px] h-[8px] rounded-full shrink-0 ${
                todo.type === '待办' ? 'bg-[#f59e0b]' : 'bg-[#10b981]'
              }`} />
              <span className="text-[14px] font-medium text-[#111827]">{todo.title}</span>
            </div>
            <div className="flex items-center gap-[20px]">
              <span className="text-[13px] text-[#9ca3af]">{todo.date}</span>
              <button className="text-[13px] font-medium text-[#6366f1] hover:text-[#4f46e5] transition-colors opacity-0 group-hover:opacity-100">
                {todo.type === '待办' ? '处理' : '查看'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TeamCollab({ onHover }: { onHover: (id: string | null) => void }) {
  return (
    <div
      data-card="team"
      onMouseEnter={() => onHover('team')}
      onMouseLeave={() => onHover(null)}
      className={`${cardClass} shrink-0`}
    >
      <div className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-[0.05em] mb-[14px]">团队协作动态</div>
      <div className="flex items-center gap-[14px]">
        <div className="flex -space-x-3">
          {[
            { name: '张', bg: 'bg-indigo-100', text: 'text-indigo-600' },
            { name: '李', bg: 'bg-emerald-100', text: 'text-emerald-600' },
            { name: '王', bg: 'bg-purple-100', text: 'text-purple-600' },
            { name: '+5', bg: 'bg-gray-100', text: 'text-gray-500' },
          ].map((a, i) => (
            <div
              key={i}
              className={`w-[34px] h-[34px] rounded-full ${a.bg} border-2 border-white flex items-center justify-center text-[11px] ${a.text} font-bold`}
              style={{ zIndex: 4 - i }}
            >
              {a.name}
            </div>
          ))}
        </div>
        <div className="text-[13px] text-[#6b7280]">
          本周有 <span className="font-bold text-[#111827]">24+</span> 项活动
        </div>
      </div>
    </div>
  )
}

function AIToolsCard({ onHover }: { onHover: (id: string | null) => void }) {
  return (
    <div
      data-card="tools"
      onMouseEnter={() => onHover('tools')}
      onMouseLeave={() => onHover(null)}
      className={`${cardClass} flex-1 flex flex-col min-h-0`}
    >
      <div className="mb-[16px]">
        <h2 className="text-[18px] font-bold text-[#111827]">内部AI工具合集</h2>
        <p className="text-[13px] text-[#9ca3af] mt-[2px]">提效与智能研发基础设施</p>
      </div>
      <div className="flex flex-col gap-[8px] flex-1 overflow-y-auto">
        {aiTools.map((tool) => {
          const c = colorMap[tool.color]
          const Icon = tool.icon
          const Tag = tool.url ? 'a' : 'div'
          const linkProps = tool.url ? { href: tool.url, target: '_blank' as const, rel: 'noopener noreferrer' } : {}
          return (
            <Tag
              key={tool.name}
              {...linkProps}
              className="flex items-center gap-[12px] p-[12px] rounded-[10px] hover:bg-[#f9fafb] transition-all duration-200 group cursor-pointer hover:shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
            >
              <div className={`w-[36px] h-[36px] ${c.bg} rounded-[8px] flex items-center justify-center`}>
                <Icon size={16} className={c.text} />
              </div>
              <div className="flex-1 text-[14px] font-medium text-[#374151] group-hover:text-[#111827]">{tool.name}</div>
              <ArrowRight size={14} className="text-[#d1d5db] group-hover:text-[#6366f1] group-hover:translate-x-0.5 transition-all duration-200" />
            </Tag>
          )
        })}
      </div>
    </div>
  )
}

export default function OverviewPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <div ref={containerRef} className="relative flex flex-col gap-[20px]">
      <ConnectionLines hoveredCard={hoveredCard} containerRef={containerRef} />
      <QuarterGoals onHover={setHoveredCard} />
      <div className="flex gap-[20px] min-h-[380px]">
        <div className="flex-[2] flex flex-col">
          <TodoList onHover={setHoveredCard} />
        </div>
        <div className="flex-[1] flex flex-col gap-[16px] w-[300px] max-w-[300px]">
          <TeamCollab onHover={setHoveredCard} />
          <AIToolsCard onHover={setHoveredCard} />
        </div>
      </div>
    </div>
  )
}
