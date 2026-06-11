import { useState } from 'react'
import { Star, BookOpen } from 'lucide-react'

const NEWSLETTER_BASE = 'https://luolan0214.github.io/follow-builders-newsletter/'

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
    <div>
      <div className="mb-[24px]">
        <h1 className="text-[28px] font-bold text-[#111827] mb-[4px]">AI 资讯</h1>
        <p className="text-[14px] text-[#6b7280]">行业动态、开源趋势与内部实践</p>
      </div>
      <div className="bg-white rounded-[16px] p-[24px] shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-[#e5e7eb]">
        <div className="flex justify-between items-center mb-[24px]">
          <div className="flex items-center gap-[8px]">
            <div className="w-[4px] h-[16px] bg-[#6366f1] rounded-full" />
            <h2 className="text-[18px] font-bold text-[#111827]">前沿视界</h2>
          </div>
          <div className="flex bg-[#f3f4f6] p-[3px] rounded-[8px]">
            {([['news', '行业动态'], ['skills', '开源趋势'], ['practice', '内部沉淀']] as [Tab, string][]).map(([key, label]) => (
              <button
                key={key}
                className={`px-[14px] py-[6px] text-[13px] font-medium rounded-[6px] transition-colors ${
                  activeTab === key ? 'bg-white text-[#111827] shadow-sm' : 'text-[#6b7280] hover:text-[#374151]'
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
            <div className="flex flex-col gap-[14px]">
              <div className="p-[20px] bg-[#f9fafb] rounded-[12px]">
                <h3 className="text-[16px] font-semibold text-[#111827] mb-[6px]">金融支付 × AI</h3>
                <p className="text-[14px] text-[#6b7280] leading-relaxed">支付行业与大模型结合的落地案例与技术实践。</p>
              </div>
              <div className="p-[20px] bg-[#f9fafb] rounded-[12px]">
                <div className="flex items-center justify-between mb-[6px]">
                  <h3 className="text-[16px] font-semibold text-[#111827]">AI 前沿通讯</h3>
                  <a
                    href={NEWSLETTER_BASE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] bg-white border border-[#e5e7eb] px-[12px] py-[4px] rounded-[6px] text-[#6b7280] hover:text-[#6366f1] hover:border-[#6366f1] font-medium transition-colors"
                  >
                    阅读原刊 ↗
                  </a>
                </div>
                <p className="text-[14px] text-[#6b7280]">精选 Newsletter，追踪顶级团队最新突破。</p>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="flex flex-col gap-[10px]">
              <div className="text-[13px] text-[#9ca3af] font-medium mb-[4px]">GitHub 高赞项目</div>
              {ghSkills.map(skill => (
                <a
                  key={skill.name}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-[16px] bg-[#f9fafb] rounded-[12px] hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200 border border-transparent hover:border-[#e5e7eb] group block"
                >
                  <div className="flex justify-between items-center mb-[6px]">
                    <span className="text-[15px] font-semibold text-[#111827] group-hover:text-[#6366f1] transition-colors">{skill.name}</span>
                    <span className="text-[12px] font-medium text-[#f59e0b] bg-[#fef3c7] px-[8px] py-[2px] rounded-full flex items-center gap-[3px]">
                      <Star size={10} className="fill-[#f59e0b]" />{skill.stars}
                    </span>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <div className="text-[13px] text-[#6b7280] flex-1">{skill.desc}</div>
                    <span className="text-[11px] text-[#9ca3af] bg-[#f3f4f6] px-[8px] py-[2px] rounded-[4px]">{skill.lang}</span>
                  </div>
                </a>
              ))}
            </div>
          )}

          {activeTab === 'practice' && (
            <div className="flex flex-col gap-[16px]">
              <div className="p-[32px] bg-[#f9fafb] rounded-[12px] border border-dashed border-[#d1d5db] text-center">
                <div className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center shadow-sm mx-auto mb-[16px]">
                  <BookOpen size={20} className="text-[#9ca3af]" />
                </div>
                <h3 className="text-[16px] font-semibold text-[#111827] mb-[6px]">内部最佳实践</h3>
                <p className="text-[14px] text-[#6b7280] mb-[20px] max-w-[400px] mx-auto">部门创新分享、架构演进与教程文档。</p>
                <a
                  href={JOYSPACE_TEAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-[20px] py-[8px] bg-[#6366f1] text-white rounded-[8px] text-[14px] font-medium hover:bg-[#4f46e5] transition-colors"
                >
                  前往 JoySpace 查阅
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
