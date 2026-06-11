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
  { name: 'joygen', icon: Wand2, color: 'emerald', url: 'https://joygen.jd.com' },
  { name: 'zero', icon: Zap, color: 'purple' },
  { name: 'joycode', icon: Laptop, color: 'indigo' },
  { name: 'joyclaw', icon: Bot, color: 'orange' },
]

const colorMap: Record<string, { bg: string; text: string; hover: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', hover: 'group-hover:text-blue-600' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', hover: 'group-hover:text-emerald-600' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', hover: 'group-hover:text-purple-600' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', hover: 'group-hover:text-indigo-600' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', hover: 'group-hover:text-orange-600' },
}

function QuarterGoals() {
  return (
    <div>
      <div className="flex justify-between items-end mb-[20px] px-[8px]">
        <div className="flex flex-col gap-[4px]">
          <h2 className="text-[20px] font-bold text-gray-900 tracking-tight">季度核心目标</h2>
          <div className="text-[13px] text-gray-500">监控关键业务指标与系统状态</div>
        </div>
        <a
          href="https://joyspace.jd.com/sheets/hzlz9t5uEmXdzLKSUyHn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] text-blue-600 hover:text-blue-700 flex items-center gap-[4px] font-medium"
        >
          查看战略图景 <ArrowRight size={12} />
        </a>
      </div>
      <div className="flex gap-[16px]">
        <a href="#" className="block flex-1 bg-white border border-gray-100 rounded-[16px] p-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
          <div className="text-[13px] text-gray-500 mb-[12px] font-medium">活跃用户增长</div>
          <div className="flex items-baseline gap-[12px]">
            <div className="text-[36px] font-bold text-gray-900 tracking-tight tabular-nums">12,540</div>
            <div className="text-[13px] font-medium text-emerald-500 bg-emerald-50 px-[8px] py-[2px] rounded-full">+10.2%</div>
          </div>
          <div className="mt-[16px] h-[30px] flex items-end gap-[4px]">
            {[30, 50, 40, 70, 60, 90].map((h, i) => (
              <div key={i} className={`w-full rounded-t-[4px] ${i === 5 ? 'bg-blue-500' : 'bg-blue-100'}`} style={{ height: `${h}%` }} />
            ))}
          </div>
        </a>
        <a href="#" className="block flex-1 bg-white border border-gray-100 rounded-[16px] p-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
          <div className="text-[13px] text-gray-500 mb-[12px] font-medium">季度营收转化</div>
          <div className="flex items-baseline gap-[12px]">
            <div className="text-[36px] font-bold text-gray-900 tracking-tight tabular-nums">$248k</div>
            <div className="text-[13px] font-medium text-emerald-500 bg-emerald-50 px-[8px] py-[2px] rounded-full">+24.8%</div>
          </div>
          <div className="mt-[16px] h-[30px] flex items-end gap-[4px]">
            {[40, 30, 60, 80, 70, 100].map((h, i) => (
              <div key={i} className={`w-full rounded-t-[4px] ${i === 5 ? 'bg-emerald-500' : 'bg-emerald-100'}`} style={{ height: `${h}%` }} />
            ))}
          </div>
        </a>
        <a href="#" className="block flex-1 bg-white border border-gray-100 rounded-[16px] p-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
          <div className="text-[13px] text-gray-500 mb-[12px] font-medium">系统稳定性</div>
          <div className="flex items-baseline gap-[12px]">
            <div className="text-[36px] font-bold text-gray-900 tracking-tight tabular-nums">99.9%</div>
            <div className="text-[13px] font-medium text-gray-500 bg-gray-100 px-[8px] py-[2px] rounded-full">达标</div>
          </div>
          <div className="mt-[16px] flex items-center gap-[8px]">
            <CheckCircle size={16} className="text-emerald-500" />
            <span className="text-[13px] text-gray-600">所有系统运行正常</span>
          </div>
        </a>
      </div>
    </div>
  )
}

function TodoList() {
  return (
    <div className="bg-white rounded-[24px] p-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-50 h-full flex flex-col">
      <div className="flex justify-between items-center mb-[24px]">
        <div className="flex flex-col gap-[4px]">
          <h2 className="text-[20px] font-bold text-gray-900 tracking-tight">待办与关注</h2>
          <span className="text-[13px] text-gray-400">需要您处理的事项与赛事活动</span>
        </div>
        <button className="text-[14px] text-gray-500 hover:text-gray-800 flex items-center gap-[6px]">
          <RefreshCw size={12} /> 刷新
        </button>
      </div>
      <div className="flex flex-col gap-[12px]">
        {todos.map(todo => (
          <div key={todo.id} className="flex items-center justify-between p-[16px] border-b border-gray-50 last:border-0 hover:bg-gray-50/50 rounded-[12px] transition-colors group">
            <div className="flex items-center gap-[16px]">
              <span className={`px-[10px] py-[4px] rounded-[6px] text-[12px] font-medium ${
                todo.type === '待办' ? 'bg-orange-100 text-orange-600' : 'bg-emerald-100 text-emerald-600'
              }`}>
                {todo.type}
              </span>
              <span className="text-[15px] font-medium text-gray-800">{todo.title}</span>
            </div>
            <div className="flex items-center gap-[24px]">
              <span className="text-[13px] text-gray-400 font-medium">{todo.date}</span>
              <button className="text-[14px] font-medium text-gray-400 group-hover:text-blue-600 transition-colors">
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
    <div className="bg-white rounded-[24px] p-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-50 shrink-0">
      <div className="text-[13px] font-semibold text-gray-400 uppercase tracking-wider mb-[16px]">团队协作动态</div>
      <div className="flex items-center gap-[16px]">
        <div className="flex -space-x-3">
          {[
            { name: '张', bg: 'bg-blue-100', text: 'text-blue-600' },
            { name: '李', bg: 'bg-emerald-100', text: 'text-emerald-600' },
            { name: '王', bg: 'bg-purple-100', text: 'text-purple-600' },
            { name: '+5', bg: 'bg-gray-100', text: 'text-gray-600' },
          ].map((a, i) => (
            <div
              key={i}
              className={`w-[36px] h-[36px] rounded-full ${a.bg} border-2 border-white flex items-center justify-center text-[12px] ${a.text} font-bold shadow-sm`}
              style={{ zIndex: 4 - i }}
            >
              {a.name}
            </div>
          ))}
        </div>
        <div className="text-[13px] text-gray-500">
          本周有 <span className="font-semibold text-gray-800">24+</span> 项活动
        </div>
      </div>
    </div>
  )
}

function AIToolsCard() {
  return (
    <div className="bg-white rounded-[24px] p-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-50 flex-1 flex flex-col min-h-0">
      <div className="mb-[24px]">
        <h2 className="text-[20px] font-bold text-gray-900 tracking-tight">内部AI工具合集</h2>
        <p className="text-[13px] text-gray-400 mt-[4px]">提效与智能研发基础设施</p>
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
              className="flex items-center gap-[12px] p-[16px] bg-[#F8F9FA] rounded-[12px] border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-md transition-all group cursor-pointer"
            >
              <div className={`w-[40px] h-[40px] ${c.bg} rounded-[8px] flex items-center justify-center`}>
                <Icon size={16} className={c.text} />
              </div>
              <div className="flex-1">
                <div className={`text-[15px] font-semibold text-gray-900 ${c.hover} transition-colors`}>{tool.name}</div>
              </div>
              <ArrowRight size={14} className={`text-gray-300 ${c.hover} transition-colors`} />
            </Tag>
          )
        })}
      </div>
    </div>
  )
}

export default function OverviewPage() {
  return (
    <div className="flex flex-col gap-[24px]">
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
