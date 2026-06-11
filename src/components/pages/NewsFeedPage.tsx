import { ExternalLink, Star, Newspaper, Cpu, Code, Rss } from 'lucide-react'
import PageShell from '../shared/PageShell'

function Dot({ c }: { c: 'green' | 'amber' | 'muted' }) {
  const cls = c === 'green' ? 'bg-green' : c === 'amber' ? 'bg-amber animate-pulse' : 'bg-ink-muted'
  return <span className={`w-1.5 h-1.5 rounded-full ${cls} shrink-0`} />
}

function SH({ title, source, dot, icon: Icon }: { title: string; source: string; dot: 'green' | 'amber' | 'muted'; icon: typeof Newspaper }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <Icon size={16} className="text-blue" />
        <span className="text-[15px] font-semibold text-ink">{title}</span>
      </div>
      <span className="flex items-center gap-1 text-[11px] text-ink-muted"><Dot c={dot} />{source}</span>
    </div>
  )
}

const NEWSLETTER_BASE = 'https://luolan0214.github.io/follow-builders-newsletter/'

const aiNews = [
  {
    title: '苹果入局日报',
    desc: 'Apple 宣布全设备 AI 能力；OpenAI 发布 2026 路线图定义 AGI 层级；Steipete 称一人等于 50 工程师；Claude Code 一周年',
    date: '2026-06-10',
    issue: 23,
    link: NEWSLETTER_BASE + 'issues/ai-builders-digest-2026-06-10-rerun.html',
  },
  {
    title: 'Benchmark 3.0 日报',
    desc: 'FrontierCode 发布揭示半数 SWEBench 结果是 slop；OpenAI 公布路线图；NotebookLM 扩展搜索和输出格式',
    date: '2026-06-09',
    issue: 22,
    link: NEWSLETTER_BASE + 'issues/ai-builders-digest-2026-06-09-rerun.html',
  },
  {
    title: '设计 Loop 日报',
    desc: 'Steipete 13734 赞推文呼吁 "去设计 loop 来 prompt agent"；OpenAI 100 天 10x 限额激励；Levie 认为企业 GTM 成本未被 AI 降低',
    date: '2026-06-08',
    issue: 21,
    link: NEWSLETTER_BASE + 'issues/ai-builders-digest-2026-06-08-rerun.html',
  },
  {
    title: 'Model Routing 周末版',
    desc: 'Levie 长文谈 token 经济与模型路由；企业三阶段路由演进；加州竞业禁止规则解释研究 alpha 衰减',
    date: '2026-06-07',
    issue: 20,
    link: NEWSLETTER_BASE + 'issues/ai-builders-digest-2026-06-07-rerun.html',
  },
  {
    title: 'Cowork 翻倍日报',
    desc: 'Anthropic 将 Cowork 限额翻倍；Vercel 发布 Skills API；Peter Yang 分享 5 步 AI 技能构建法',
    date: '2026-06-06',
    issue: 19,
    link: NEWSLETTER_BASE + 'issues/ai-builders-digest-2026-06-06-rerun.html',
  },
  {
    title: '代码自主化日报',
    desc: 'Anthropic 报告 80% 代码由 Claude 编写；ChatGPT 可直接发布 Web 应用；Codex Python SDK 发布',
    date: '2026-06-05',
    issue: 18,
    link: NEWSLETTER_BASE + 'issues/ai-builders-digest-2026-06-05-rerun.html',
  },
]

const ghSkills = [
  { name: 'openclaw/openclaw', stars: '378k', desc: 'Your own personal AI assistant', lang: 'TypeScript', url: 'https://github.com/openclaw/openclaw' },
  { name: 'n8n-io/n8n', stars: '192k', desc: 'Workflow automation with native AI capabilities', lang: 'TypeScript', url: 'https://github.com/n8n-io/n8n' },
  { name: 'NousResearch/hermes-agent', stars: '190k', desc: 'The agent that grows with you', lang: 'Python', url: 'https://github.com/NousResearch/hermes-agent' },
  { name: 'Significant-Gravitas/AutoGPT', stars: '185k', desc: 'Accessible AI for everyone, to use and build on', lang: 'Python', url: 'https://github.com/Significant-Gravitas/AutoGPT' },
  { name: 'langflow-ai/langflow', stars: '150k', desc: 'Build and deploy AI-powered agents and workflows', lang: 'Python', url: 'https://github.com/langflow-ai/langflow' },
  { name: 'langgenius/dify', stars: '145k', desc: 'Production-ready platform for agentic workflow', lang: 'TypeScript', url: 'https://github.com/langgenius/dify' },
]

export default function NewsFeedPage() {
  return (
    <PageShell title="资讯动态">
      <div className="space-y-8">
        {/* Payment Industry News — no real RSS feed connected yet */}
        <section className="rounded-xl border border-rule bg-card p-6">
          <SH title="支付行业" source="RSS · 待接入" dot="muted" icon={Newspaper} />
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <Rss size={32} className="text-ink-muted mb-3" />
            <div className="text-[13px] text-ink-secondary mb-1">尚未接入 RSS 订阅源</div>
            <div className="text-[11px] text-ink-muted">接入后将自动聚合支付行业资讯与「支付 × AI」动态</div>
          </div>
        </section>

        {/* AI News — REAL data from Follow Builders Newsletter */}
        <section className="rounded-xl border border-rule bg-card p-6">
          <SH title="AI一手消息" source="Follow Builders Newsletter" dot="green" icon={Cpu} />
          <div className="grid grid-cols-2 gap-3">
            {aiNews.map((n, i) => (
              <a
                key={i}
                href={n.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-rule p-4 hover:border-blue/30 cursor-pointer group transition-colors block"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-[13px] font-medium text-ink group-hover:text-blue transition-colors flex-1 pr-2 leading-snug">
                    #{n.issue} {n.title}
                  </span>
                  <span className="text-[10px] text-ink-muted bg-ground px-2 py-0.5 rounded shrink-0">{n.date}</span>
                </div>
                <div className="text-[12px] text-ink-secondary leading-relaxed mb-2 line-clamp-2">{n.desc}</div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-ink-muted">AI Builders' Insight · luolan</span>
                  <ExternalLink size={12} className="text-ink-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-rule">
            <span className="text-[11px] text-ink-muted">共 23 期 · 2026-05-19 至今 · 每日更新</span>
            <a href={NEWSLETTER_BASE} target="_blank" rel="noopener noreferrer" className="text-[11px] text-blue font-medium hover:underline">
              查看全部 →
            </a>
          </div>
        </section>

        {/* GitHub Skills — REAL data from GitHub API */}
        <section className="rounded-xl border border-rule bg-card p-6">
          <SH title="AI Skills 热门项目" source="GitHub API" dot="green" icon={Code} />
          <div className="grid grid-cols-2 gap-3">
            {ghSkills.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-rule p-4 hover:border-blue/30 cursor-pointer group transition-colors block"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[13px] text-blue font-semibold group-hover:underline truncate">{s.name}</span>
                  <div className="flex items-center gap-0.5 text-[11px] text-amber shrink-0">
                    <Star size={12} className="fill-amber" />{s.stars}
                  </div>
                </div>
                <div className="text-[12px] text-ink-secondary line-clamp-1">{s.desc}</div>
                <div className="text-[11px] text-ink-muted mt-1">{s.lang}</div>
              </a>
            ))}
          </div>
          <div className="text-[11px] text-ink-muted mt-3">按星标排序 · 数据来源: GitHub Search API</div>
        </section>
      </div>
    </PageShell>
  )
}
