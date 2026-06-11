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
        <h1 className="text-[30px] font-semibold text-[#1A1A1A] mb-[8px] tracking-[-0.03em]">AI 资讯聚合</h1>
        <p className="text-[14px] text-[#A3A3A0]">追踪行业最新AI动态、Github高赞技能以及部门内部最佳实践。</p>
      </div>
      <div>
        <div className="bg-white rounded-[24px] p-[32px] border border-[#E2E2DD]">
          <div className="flex justify-between items-center mb-[24px]">
            <div className="flex items-center gap-[8px]">
              <div className="w-[4px] h-[16px] bg-[#C5E63A] rounded-full" />
              <h2 className="text-[18px] font-medium text-[#1A1A1A] tracking-[-0.02em]">前沿视界</h2>
            </div>
            <div className="flex bg-[#F5F5F0] p-[4px] rounded-full">
              {([['news', '行业动态'], ['skills', '开源趋势'], ['practice', '内部沉淀']] as [Tab, string][]).map(([key, label]) => (
                <button
                  key={key}
                  className={`px-[16px] py-[6px] text-[13px] font-medium rounded-full transition-colors ${
                    activeTab === key ? 'bg-white text-[#1A1A1A] shadow-[0_1px_3px_rgba(0,0,0,0.06)]' : 'text-[#A3A3A0] hover:text-[#6B6B6B]'
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
                <div className="p-[20px] bg-[#F5F5F0] rounded-[16px]">
                  <h3 className="text-[16px] font-medium text-[#1A1A1A] mb-[8px] tracking-[-0.01em]">金融支付 × AI 探索</h3>
                  <p className="text-[14px] text-[#6B6B6B] leading-relaxed">汇集最新支付行业与大模型结合的落地案例，探索智能客服、风控、投研等场景的变革与技术实践。</p>
                </div>
                <div className="p-[20px] bg-[#F5F5F0] rounded-[16px]">
                  <div className="flex items-center justify-between mb-[8px]">
                    <h3 className="text-[16px] font-medium text-[#1A1A1A] tracking-[-0.01em]">AI 前沿通讯</h3>
                    <a
                      href={NEWSLETTER_BASE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] bg-white border border-[#E2E2DD] px-[14px] py-[4px] rounded-full text-[#6B6B6B] hover:text-[#4A7C59] font-medium transition-colors"
                    >
                      阅读原刊 ↗
                    </a>
                  </div>
                  <p className="text-[14px] text-[#6B6B6B]">精选 Newsletter 内容，自动追踪硅谷与国内顶级团队的最新突破。</p>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="flex flex-col gap-[12px]">
                <div className="text-[13px] text-[#A3A3A0] font-medium mb-[4px]">GitHub 高赞 AI 项目精选</div>
                {ghSkills.map(skill => (
                  <a
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-[16px] bg-[#F5F5F0] rounded-[16px] hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 border border-transparent hover:border-[#E2E2DD] group block"
                  >
                    <div className="flex justify-between items-center mb-[8px]">
                      <span className="text-[16px] font-medium text-[#1A1A1A] group-hover:text-[#4A7C59] transition-colors">{skill.name}</span>
                      <span className="text-[13px] font-medium text-[#D4A016] bg-[#FDF8E8] px-[8px] py-[2px] rounded-full flex items-center gap-[4px]">
                        <Star size={11} className="fill-[#D4A016]" />{skill.stars}
                      </span>
                    </div>
                    <div className="flex items-center gap-[12px]">
                      <div className="text-[14px] text-[#6B6B6B] leading-relaxed flex-1">{skill.desc}</div>
                      <span className="text-[12px] text-[#A3A3A0] bg-[#EDEDE9] px-[8px] py-[2px] rounded-full">{skill.lang}</span>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {activeTab === 'practice' && (
              <div className="flex flex-col gap-[16px]">
                <div className="p-[24px] bg-[#F5F5F0] rounded-[20px] border border-dashed border-[#D5D5CF] text-center">
                  <div className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center mx-auto mb-[16px]">
                    <BookOpen size={20} className="text-[#A3A3A0]" />
                  </div>
                  <h3 className="text-[16px] font-medium text-[#1A1A1A] mb-[8px] tracking-[-0.01em]">内部沉淀与最佳实践</h3>
                  <p className="text-[14px] text-[#6B6B6B] mb-[20px] max-w-[400px] mx-auto">汇集部门内创新分享、架构演进与教程文档，打造团队知识中枢。</p>
                  <a
                    href={JOYSPACE_TEAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-[24px] py-[10px] bg-[#1A1A1A] text-white rounded-full text-[14px] font-medium hover:bg-[#333333] transition-colors"
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
