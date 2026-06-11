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
  { name: 'Likecode', icon: Code, color: 'sage' },
  { name: 'joygen', icon: Wand2, color: 'lime', url: 'https://joygen.jd.com' },
  { name: 'zero', icon: Zap, color: 'lavender' },
  { name: 'joycode', icon: Laptop, color: 'sage' },
  { name: 'joyclaw', icon: Bot, color: 'gold' },
]

const colorMap: Record<string, { bg: string; text: string; hover: string }> = {
  sage:     { bg: 'bg-[#EDF5E8]', text: 'text-[#4A7C59]', hover: 'group-hover:text-[#4A7C59]' },
  lime:     { bg: 'bg-[#F4FADC]', text: 'text-[#6B8F3A]', hover: 'group-hover:text-[#6B8F3A]' },
  lavender: { bg: 'bg-[#F3F1F8]', text: 'text-[#7C6CA8]', hover: 'group-hover:text-[#7C6CA8]' },
  gold:     { bg: 'bg-[#FDF8E8]', text: 'text-[#D4A016]', hover: 'group-hover:text-[#D4A016]' },
}

function QuarterGoals() {
  return (
    <div>
      <div className="flex justify-between items-end mb-[20px] px-[8px]">
        <div className="flex flex-col gap-[4px]">
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] tracking-[-0.03em]">季度核心目标</h2>
          <div className="text-[13px] text-[#A3A3A0]">监控关键业务指标与系统状态</div>
        </div>
        <a
          href="https://joyspace.jd.com/sheets/hzlz9t5uEmXdzLKSUyHn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] text-[#4A7C59] hover:text-[#3A6347] flex items-center gap-[4px] font-medium"
        >
          查看战略图景 <ArrowRight size={12} />
        </a>
      </div>
      <div className="flex gap-[16px]">
        <a href="#" className="block flex-1 bg-white border border-[#E2E2DD] rounded-[24px] p-[28px] transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 cursor-pointer">
          <div className="text-[13px] text-[#A3A3A0] mb-[12px] font-medium">活跃用户增长</div>
          <div className="flex items-baseline gap-[12px]">
            <div className="text-[40px] font-semibold text-[#1A1A1A] tracking-[-0.04em] tabular-nums">12,540</div>
            <div className="text-[13px] font-medium text-[#6B8F3A] bg-[#F4FADC] px-[8px] py-[2px] rounded-full">+10.2%</div>
          </div>
          <div className="mt-[16px] h-[30px] flex items-end gap-[4px]">
            {[30, 50, 40, 70, 60, 90].map((h, i) => (
              <div key={i} className={`w-full rounded-t-[4px] ${i === 5 ? 'bg-[#C5E63A]' : 'bg-[#F4FADC]'}`} style={{ height: `${h}%` }} />
            ))}
          </div>
        </a>
        <a href="#" className="block flex-1 bg-white border border-[#E2E2DD] rounded-[24px] p-[28px] transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 cursor-pointer">
          <div className="text-[13px] text-[#A3A3A0] mb-[12px] font-medium">季度营收转化</div>
          <div className="flex items-baseline gap-[12px]">
            <div className="text-[40px] font-semibold text-[#1A1A1A] tracking-[-0.04em] tabular-nums">$248k</div>
            <div className="text-[13px] font-medium text-[#6B8F3A] bg-[#F4FADC] px-[8px] py-[2px] rounded-full">+24.8%</div>
          </div>
          <div className="mt-[16px] h-[30px] flex items-end gap-[4px]">
            {[40, 30, 60, 80, 70, 100].map((h, i) => (
              <div key={i} className={`w-full rounded-t-[4px] ${i === 5 ? 'bg-[#4A7C59]' : 'bg-[#EDF5E8]'}`} style={{ height: `${h}%` }} />
            ))}
          </div>
        </a>
        <a href="#" className="block flex-1 bg-white border border-[#E2E2DD] rounded-[24px] p-[28px] transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 cursor-pointer">
          <div className="text-[13px] text-[#A3A3A0] mb-[12px] font-medium">系统稳定性</div>
          <div className="flex items-baseline gap-[12px]">
            <div className="text-[40px] font-semibold text-[#1A1A1A] tracking-[-0.04em] tabular-nums">99.9%</div>
            <div className="text-[13px] font-medium text-[#6B6B6B] bg-[#F5F5F0] px-[8px] py-[2px] rounded-full">达标</div>
          </div>
          <div className="mt-[16px] flex items-center gap-[8px]">
            <CheckCircle size={16} className="text-[#4A7C59]" />
            <span className="text-[13px] text-[#6B6B6B]">所有系统运行正常</span>
          </div>
        </a>
      </div>
    </div>
  )
}

function TodoList() {
  return (
    <div className="bg-white rounded-[28px] p-[36px] border border-[#E2E2DD] h-full flex flex-col">
      <div className="flex justify-between items-center mb-[24px]">
        <div className="flex flex-col gap-[4px]">
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] tracking-[-0.03em]">待办与关注</h2>
          <span className="text-[13px] text-[#A3A3A0]">需要您处理的事项与赛事活动</span>
        </div>
        <button className="text-[13px] text-[#A3A3A0] hover:text-[#1A1A1A] flex items-center gap-[6px] transition-colors">
          <RefreshCw size={12} /> 刷新
        </button>
      </div>
      <div className="flex flex-col gap-[12px]">
        {todos.map(todo => (
          <div key={todo.id} className="flex items-center justify-between p-[16px] border-b border-[#F5F5F0] last:border-0 hover:bg-[#F5F5F0]/60 rounded-[12px] transition-colors group">
            <div className="flex items-center gap-[16px]">
              <span className={`px-[10px] py-[4px] rounded-full text-[12px] font-medium ${
                todo.type === '待办' ? 'bg-[#FDF8E8] text-[#D4A016]' : 'bg-[#F4FADC] text-[#6B8F3A]'
              }`}>
                {todo.type}
              </span>
              <span className="text-[15px] font-medium text-[#1A1A1A]">{todo.title}</span>
            </div>
            <div className="flex items-center gap-[24px]">
              <span className="text-[13px] text-[#A3A3A0] font-medium">{todo.date}</span>
              <button className="text-[14px] font-medium text-[#A3A3A0] group-hover:text-[#4A7C59] transition-colors">
                {todo.type === '待办' ? '处理' : '查看'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TeamCollab() {
  return (
    <div className="bg-white rounded-[28px] p-[24px] border border-[#E2E2DD] shrink-0">
      <div className="text-[13px] font-medium text-[#A3A3A0] uppercase tracking-[0.06em] mb-[16px]">团队协作动态</div>
      <div className="flex items-center gap-[16px]">
        <div className="flex -space-x-3">
          {[
            { name: '张', bg: 'bg-[#EDF5E8]', text: 'text-[#4A7C59]' },
            { name: '李', bg: 'bg-[#F4FADC]', text: 'text-[#6B8F3A]' },
            { name: '王', bg: 'bg-[#F3F1F8]', text: 'text-[#7C6CA8]' },
            { name: '+5', bg: 'bg-[#F5F5F0]', text: 'text-[#6B6B6B]' },
          ].map((a, i) => (
            <div
              key={i}
              className={`w-[36px] h-[36px] rounded-full ${a.bg} border-2 border-white flex items-center justify-center text-[12px] ${a.text} font-bold`}
              style={{ zIndex: 4 - i }}
            >
              {a.name}
            </div>
          ))}
        </div>
        <div className="text-[13px] text-[#6B6B6B]">
          本周有 <span className="font-semibold text-[#1A1A1A]">24+</span> 项活动
        </div>
      </div>
    </div>
  )
}

function AIToolsCard() {
  return (
    <div className="bg-white rounded-[28px] p-[24px] border border-[#E2E2DD] flex-1 flex flex-col min-h-0">
      <div className="mb-[24px]">
        <h2 className="text-[22px] font-semibold text-[#1A1A1A] tracking-[-0.03em]">内部AI工具合集</h2>
        <p className="text-[13px] text-[#A3A3A0] mt-[4px]">提效与智能研发基础设施</p>
      </div>
      <div className="flex flex-col gap-[12px] flex-1 overflow-y-auto pr-[8px]">
        {aiTools.map((tool) => {
          const c = colorMap[tool.color]
          const Icon = tool.icon
          const Tag = tool.url ? 'a' : 'div'
          const linkProps = tool.url ? { href: tool.url, target: '_blank' as const, rel: 'noopener noreferrer' } : {}
          return (
            <Tag
              key={tool.name}
              {...linkProps}
              className="flex items-center gap-[12px] p-[16px] bg-[#F5F5F0] rounded-[16px] border border-transparent hover:border-[#E2E2DD] hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all group cursor-pointer"
            >
              <div className={`w-[40px] h-[40px] ${c.bg} rounded-[12px] flex items-center justify-center`}>
                <Icon size={16} className={c.text} />
              </div>
              <div className="flex-1">
                <div className={`text-[15px] font-medium text-[#1A1A1A] ${c.hover} transition-colors`}>{tool.name}</div>
              </div>
              <ArrowRight size={14} className={`text-[#D5D5CF] ${c.hover} transition-colors`} />
            </Tag>
          )
        })}
      </div>
    </div>
  )
}

export default function OverviewPage() {
  return (
    <div className="flex flex-col gap-[28px]">
      <QuarterGoals />
      <div className="flex gap-[24px] min-h-[400px]">
        <div className="flex-[2] flex flex-col">
          <TodoList />
        </div>
        <div className="flex-[1] flex flex-col gap-[20px]">
          <TeamCollab />
          <AIToolsCard />
        </div>
      </div>
    </div>
  )
}
