import {
  Target, Trophy,
  ChevronRight, Radio, ExternalLink, Inbox
} from 'lucide-react'
import PageShell from '../shared/PageShell'
import type { PageKey } from '../Sidebar'

function EmptyState({ icon: Icon, title, desc }: { icon: typeof Radio; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <Icon size={28} className="text-ink-muted mb-3" />
      <div className="text-[13px] text-ink-secondary mb-1">{title}</div>
      <div className="text-[11px] text-ink-muted">{desc}</div>
    </div>
  )
}

export default function DashboardPage({ onNavigate }: { onNavigate: (p: PageKey) => void }) {
  return (
    <PageShell title="工作台">
      <div className="space-y-6">
        {/* Metrics — awaiting push from monitoring platform */}
        <section className="rounded-xl border border-rule bg-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Radio size={16} className="text-blue" />
              <span className="text-[15px] font-semibold text-ink">核心指标</span>
            </div>
            <span className="flex items-center gap-1 text-[11px] text-ink-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-ink-muted shrink-0" />
              监控平台 · 待接入
            </span>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {['支付成功率', '系统可用率', '平均响应时间', '异常订单数'].map((label) => (
              <div key={label} className="rounded-xl border border-dashed border-rule p-4 text-center">
                <div className="text-[11px] text-ink-muted mb-2">{label}</div>
                <div className="text-[24px] font-bold text-ink-muted tabular-nums">—</div>
                <div className="text-[11px] text-ink-muted mt-2">等待推送</div>
              </div>
            ))}
          </div>
          <div className="text-[11px] text-ink-muted mt-3">接入内部监控工具后，数据将自动推送更新至此处</div>
        </section>

        {/* Quarter Goals — linked to real JoySpace sheet */}
        <section className="rounded-xl border border-rule bg-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Target size={16} className="text-blue" />
              <span className="text-[15px] font-semibold text-ink">季度目标</span>
            </div>
            <a
              href="https://joyspace.jd.com/sheets/hzlz9t5uEmXdzLKSUyHn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] text-blue font-medium hover:underline"
            >
              <ExternalLink size={11} />
              JoySpace 查看完整表格
            </a>
          </div>
          <div className="rounded-xl bg-ground p-4">
            <div className="text-[13px] font-medium text-ink mb-1">2025年核心项目集-应用产品（胡子雄）</div>
            <div className="text-[12px] text-ink-secondary">
              目标数据存储在 JoySpace 表格中，点击右上角链接查看完整内容。
              表格类型暂不支持自动同步，后续计划接入 API 自动读取。
            </div>
          </div>
        </section>

        {/* Today's Tasks — awaiting source integration */}
        <section className="rounded-xl border border-rule bg-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red" />
              <span className="text-[15px] font-semibold text-ink">今日待办</span>
            </div>
            <button onClick={() => onNavigate('tasks')} className="flex items-center gap-1 text-[12px] text-blue font-medium hover:underline">
              查看看板<ChevronRight size={14} />
            </button>
          </div>
          <EmptyState
            icon={Inbox}
            title="暂无待办事项"
            desc="接入群消息、日历、邮件等数据源后，待办将自动聚合到这里"
          />
        </section>

        {/* Competitions — awaiting group chat sync */}
        <section className="rounded-xl border border-rule bg-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Trophy size={16} className="text-amber" />
            <span className="text-[15px] font-semibold text-ink">比赛活动</span>
          </div>
          <EmptyState
            icon={Trophy}
            title="等待比赛信息同步"
            desc="接入集团内部比赛信息源或群消息后，赛事动态将自动展示在此"
          />
        </section>
      </div>
    </PageShell>
  )
}
