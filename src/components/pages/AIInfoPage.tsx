import { useState } from 'react'
import { Star, BookOpen } from 'lucide-react'

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
    desc: 'Steipete 13734 赞推文呼吁 "去设计 loop 来 prompt agent"；OpenAI 100 天 10x 限额激励',
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
]

const ghSkills = [
  { name: 'openclaw/openclaw', stars: '378k', desc: 'Your own personal AI assistant', lang: 'TypeScript', url: 'https://github.com/openclaw/openclaw' },
  { name: 'n8n-io/n8n', stars: '192k', desc: 'Workflow automation with native AI capabilities', lang: 'TypeScript', url: 'https://github.com/n8n-io/n8n' },
  { name: 'NousResearch/hermes-agent', stars: '190k', desc: 'The agent that grows with you', lang: 'Python', url: 'https://github.com/NousResearch/hermes-agent' },
  { name: 'Significant-Gravitas/AutoGPT', stars: '185k', desc: 'Accessible AI for everyone, to use and build on', lang: 'Python', url: 'https://github.com/Significant-Gravitas/AutoGPT' },
  { name: 'langflow-ai/langflow', stars: '150k', desc: 'Build and deploy AI-powered agents and workflows', lang: 'Python', url: 'https://github.com/langflow-ai/langflow' },
]

const JOYSPACE_TEAM_URL = 'https://joyspace.jd.com/teams/CL3hiuRUe9EOVQMXu9WCs/9XiLd7doHAaCSck0Lftc'

type Tab = 'news' | 'skills' | 'practice'

export default function AIInfoPage() {
  const [activeTab, setActiveTab] = useState<Tab>('news')

  return (
    <div className="flex-1 p-[40px]">
      <div className="mb-[32px]">
        <h1 className="text-[28px] font-bold text-gray-900 mb-[8px]">AI 资讯聚合</h1>
        <p className="text-[14px] text-gray-500">追踪行业最新AI动态、Github高赞技能以及部门内部最佳实践。</p>
      </div>
      <div className="max-w-[1000px]">
        <div className="bg-white rounded-[16px] p-[24px] shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-[24px]">
            <div className="flex items-center gap-[8px]">
              <div className="w-[4px] h-[16px] bg-purple-500 rounded-full" />
              <h2 className="text-[18px] font-semibold text-gray-900 tracking-tight">前沿视界</h2>
            </div>
            <div className="flex bg-gray-100 p-[4px] rounded-[8px]">
              {([['news', '行业动态'], ['skills', '开源趋势'], ['practice', '内部沉淀']] as [Tab, string][]).map(([key, label]) => (
                <button
                  key={key}
                  className={`px-[16px] py-[6px] text-[13px] font-medium rounded-[6px] transition-colors ${
                    activeTab === key ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab(key)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[300px]">
            {activeTab === 'news' && (
              <div className="flex flex-col gap-[16px]">
                <div className="p-[20px] bg-[#F8F9FA] rounded-[12px] hover:shadow-sm transition-shadow">
                  <h3 className="text-[16px] font-semibold text-gray-800 mb-[8px]">金融支付 × AI 探索</h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed">汇集最新支付行业与大模型结合的落地案例，探索智能客服、风控、投研等场景的变革与技术实践。</p>
                  <div className="text-[12px] text-gray-400 mt-[8px]">RSS 订阅源待接入</div>
                </div>
                <div className="p-[20px] bg-[#F8F9FA] rounded-[12px] hover:shadow-sm transition-shadow">
                  <div className="flex items-center justify-between mb-[8px]">
                    <h3 className="text-[16px] font-semibold text-gray-800">AI 前沿通讯</h3>
                    <a
                      href={NEWSLETTER_BASE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] bg-white border border-gray-200 px-[12px] py-[4px] rounded-[6px] text-gray-600 hover:text-blue-600 font-medium transition-colors"
                    >
                      阅读原刊 ↗
                    </a>
                  </div>
                  <p className="text-[14px] text-gray-500 mb-[12px]">精选 Newsletter 内容，自动追踪硅谷与国内顶级团队的最新突破。</p>
                  <div className="grid grid-cols-2 gap-[8px]">
                    {aiNews.map((n) => (
                      <a
                        key={n.issue}
                        href={n.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-[12px] bg-white rounded-[8px] border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all group"
                      >
                        <div className="flex items-center justify-between mb-[4px]">
                          <span className="text-[13px] font-medium text-gray-800 group-hover:text-blue-600 transition-colors">#{n.issue} {n.title}</span>
                          <span className="text-[11px] text-gray-400">{n.date}</span>
                        </div>
                        <div className="text-[12px] text-gray-500 line-clamp-1">{n.desc}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="flex flex-col gap-[12px]">
                <div className="text-[13px] text-gray-500 font-medium mb-[4px]">GitHub 高赞 AI 项目精选</div>
                {ghSkills.map(skill => (
                  <a
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-[16px] bg-[#F8F9FA] rounded-[12px] hover:bg-white hover:shadow-md transition-all duration-200 border border-transparent hover:border-gray-100 group block"
                  >
                    <div className="flex justify-between items-center mb-[8px]">
                      <span className="text-[16px] font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{skill.name}</span>
                      <span className="text-[13px] font-medium text-amber-600 bg-amber-50 px-[8px] py-[2px] rounded-full flex items-center gap-[4px]">
                        <Star size={11} className="fill-amber-500" />{skill.stars}
                      </span>
                    </div>
                    <div className="flex items-center gap-[12px]">
                      <div className="text-[14px] text-gray-500 leading-relaxed flex-1">{skill.desc}</div>
                      <span className="text-[12px] text-gray-400 bg-gray-100 px-[8px] py-[2px] rounded">{skill.lang}</span>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {activeTab === 'practice' && (
              <div className="flex flex-col gap-[16px]">
                <div className="p-[24px] bg-[#F8F9FA] rounded-[12px] border border-dashed border-gray-300 text-center">
                  <div className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center shadow-sm mx-auto mb-[16px]">
                    <BookOpen size={20} className="text-gray-400" />
                  </div>
                  <h3 className="text-[16px] font-semibold text-gray-800 mb-[8px]">内部沉淀与最佳实践</h3>
                  <p className="text-[14px] text-gray-500 mb-[20px] max-w-[400px] mx-auto">汇集部门内创新分享、架构演进与教程文档，打造团队知识中枢。</p>
                  <a
                    href={JOYSPACE_TEAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-[20px] py-[8px] bg-white border border-gray-200 text-gray-700 rounded-[8px] text-[14px] font-medium hover:bg-gray-50 transition-colors shadow-sm"
                  >
                    前往 JoySpace 查阅
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
