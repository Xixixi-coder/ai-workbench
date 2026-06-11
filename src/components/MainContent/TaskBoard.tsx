import { useState } from 'react'
import { Plus, Mic, Clock, CheckCircle2, AlertCircle, ChevronDown, Trophy, FileText } from 'lucide-react'

interface Task { id: string; title: string; priority: 'P0' | 'P1' | 'P2'; deadline: string; remaining?: string; progress?: number; type: 'task' | 'meeting' | 'form'; source?: string; overdue?: boolean; reward?: string }

const today: Task[] = [
  { id: '1', title: '完成支付接口压测报告', priority: 'P0', deadline: '今天 18:00', remaining: '3h', progress: 80, type: 'task', source: '技术群' },
  { id: '2', title: '参加AI风控模型评审会', priority: 'P1', deadline: '14:00–15:30', type: 'meeting', source: '日历' },
  { id: '3', title: '优化收银台推荐算法', priority: 'P1', deadline: '明天 12:00', progress: 45, type: 'task', source: '需求池' },
]
const forms: Task[] = [
  { id: '4', title: '上周工作总结', priority: 'P1', deadline: '逾期1天', type: 'form', overdue: true, source: '群消息' },
  { id: '5', title: '本月OKR自评', priority: 'P1', deadline: '截止明天', type: 'form', source: '邮件' },
  { id: '6', title: '团建活动报名表', priority: 'P2', deadline: '截止周五', type: 'form', source: '群消息' },
]
const done: Task[] = [
  { id: '7', title: '支付通道故障复盘报告', priority: 'P0', deadline: '昨天 16:30', type: 'task', reward: '+20积分' },
  { id: '8', title: '风控规则配置更新', priority: 'P1', deadline: '昨天 14:00', type: 'task' },
]

const pColor = { P0: 'bg-red-light text-red', P1: 'bg-amber-light text-amber', P2: 'bg-blue-light text-blue' }

export default function TaskBoard() {
  const [showDone, setShowDone] = useState(false)
  const [modal, setModal] = useState<string | null>(null)
  const [pv, setPv] = useState<Record<string, number>>({ '1': 80, '3': 45 })

  return (
    <div className="space-y-5">
      {/* Stats */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: '本周任务', value: '12/15' },
          { label: '连续打卡', value: '5天' },
          { label: '待填写', value: '3项' },
          { label: '本周积分', value: '+85' },
        ].map((s, i) => (
          <div key={i} className="rounded-xl border border-rule bg-card p-4">
            <div className="text-[11px] text-ink-muted mb-1">{s.label}</div>
            <div className="text-[24px] font-bold text-ink leading-none tabular-nums">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button className="flex items-center gap-1.5 px-3.5 py-2 bg-blue text-white text-[12px] font-semibold rounded-lg hover:opacity-90 transition-opacity">
          <Plus size={14} />创建任务
        </button>
        <button className="flex items-center gap-1.5 px-3.5 py-2 border border-rule text-ink-secondary text-[12px] font-medium rounded-lg hover:bg-ground transition-colors">
          <Mic size={14} />语音录入
        </button>
      </div>

      {/* Today */}
      <div className="rounded-xl border border-rule bg-card overflow-hidden">
        <div className="px-5 py-3 border-b border-rule flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red" />
          <span className="text-[13px] font-semibold text-ink">今日必做</span>
          <span className="text-[11px] text-ink-muted ml-auto">{today.length} 项</span>
        </div>
        <div className="divide-y divide-rule">
          {today.map((t) => (
            <div key={t.id} className="px-5 py-3.5 hover:bg-ground/50 transition-colors">
              <div className="flex items-start gap-3">
                <span className={`text-[11px] font-semibold px-1.5 py-0.5 rounded-md mt-0.5 ${pColor[t.priority]}`}>{t.priority}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-medium text-ink">{t.title}</div>
                  <div className="flex items-center gap-2 mt-1 text-[11px] text-ink-muted">
                    <Clock size={11} /><span>{t.deadline}</span>
                    {t.remaining && <span className="text-amber font-medium">{t.remaining}</span>}
                    {t.source && <span>· {t.source}</span>}
                  </div>
                  {t.progress !== undefined && (
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex-1 h-2 bg-ground rounded-full overflow-hidden">
                        <div className="h-full bg-blue rounded-full" style={{ width: `${pv[t.id] ?? t.progress}%` }} />
                      </div>
                      <span className="text-[11px] font-semibold text-ink-secondary tabular-nums">{pv[t.id] ?? t.progress}%</span>
                    </div>
                  )}
                  <div className="flex gap-2 mt-2">
                    {t.type === 'task' && <>
                      <button onClick={() => setModal(modal === t.id ? null : t.id)} className="text-[11px] font-medium text-blue hover:underline">更新进度</button>
                      <button className="text-[11px] font-medium text-green hover:underline">完成</button>
                    </>}
                    {t.type === 'meeting' && <button className="text-[11px] font-medium text-blue hover:underline">参加</button>}
                  </div>
                  {modal === t.id && (
                    <div className="mt-2 p-3 bg-ground rounded-lg border border-rule">
                      <input type="range" min={0} max={100} value={pv[t.id] ?? t.progress ?? 0}
                        onChange={(e) => setPv(p => ({ ...p, [t.id]: +e.target.value }))}
                        className="w-full h-1 accent-[#002FA7] cursor-pointer mb-2" />
                      <div className="flex gap-2">
                        <button onClick={() => setModal(null)} className="flex-1 py-1.5 bg-blue text-white text-[11px] font-semibold rounded-lg">提交</button>
                        <button onClick={() => setModal(null)} className="flex-1 py-1.5 border border-rule text-ink-secondary text-[11px] rounded-lg">取消</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Forms */}
      <div className="rounded-xl border border-rule bg-card overflow-hidden">
        <div className="px-5 py-3 border-b border-rule flex items-center gap-2">
          <FileText size={14} className="text-amber" />
          <span className="text-[13px] font-semibold text-ink">待填写</span>
          <span className="text-[11px] font-semibold px-1.5 py-0.5 rounded-full bg-red text-white ml-auto">{forms.length}</span>
        </div>
        <div className="divide-y divide-rule">
          {forms.map((f) => (
            <div key={f.id} className="px-5 py-3 flex items-center justify-between hover:bg-ground/50 transition-colors">
              <div className="flex items-center gap-2">
                {f.overdue && <AlertCircle size={14} className="text-red shrink-0" />}
                <div>
                  <div className="text-[13px] font-medium text-ink">{f.title}</div>
                  <div className="text-[11px] text-ink-muted">{f.deadline} · {f.source}</div>
                </div>
              </div>
              <button className={`text-[11px] font-semibold px-3 py-1.5 rounded-lg ${
                f.overdue ? 'bg-red text-white' : 'bg-blue text-white'
              }`}>{f.overdue ? '立即填写' : '填写'}</button>
            </div>
          ))}
        </div>
      </div>

      {/* Done */}
      <div className="rounded-xl border border-rule bg-card overflow-hidden">
        <button onClick={() => setShowDone(!showDone)} className="w-full px-5 py-3 flex items-center gap-2 hover:bg-ground/50 transition-colors">
          <CheckCircle2 size={14} className="text-green" />
          <span className="text-[13px] font-semibold text-ink">已完成</span>
          <span className="text-[11px] text-ink-muted ml-auto">{done.length} 项</span>
          <ChevronDown size={14} className={`text-ink-muted transition-transform ${showDone ? '' : '-rotate-90'}`} />
        </button>
        {showDone && <div className="divide-y divide-rule border-t border-rule">
          {done.map((t) => (
            <div key={t.id} className="px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-green" />
                <span className="text-[13px] text-ink-muted line-through">{t.title}</span>
              </div>
              <div className="flex items-center gap-2">
                {t.reward && <span className="text-[11px] font-medium text-amber flex items-center gap-1"><Trophy size={11} />{t.reward}</span>}
                <span className="text-[11px] text-ink-muted">{t.deadline}</span>
              </div>
            </div>
          ))}
        </div>}
      </div>
    </div>
  )
}
