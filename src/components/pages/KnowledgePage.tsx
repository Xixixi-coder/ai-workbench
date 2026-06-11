import { Eye, BookOpen, ExternalLink, FolderOpen } from 'lucide-react'
import PageShell from '../shared/PageShell'

const JOYSPACE_TEAM_URL = 'https://joyspace.jd.com/teams/CL3hiuRUe9EOVQMXu9WCs/9XiLd7doHAaCSck0Lftc'

export default function KnowledgePage() {
  return (
    <PageShell title="知识库">
      <div className="space-y-8">
        {/* Internal best practices — linked to real JoySpace team page */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Eye size={16} className="text-blue" />
              <h2 className="text-[15px] font-semibold text-ink">内部最佳实践</h2>
            </div>
            <a
              href={JOYSPACE_TEAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] text-blue font-medium hover:underline"
            >
              <ExternalLink size={11} />
              JoySpace 查看全部
            </a>
          </div>
          <div className="rounded-xl border border-rule bg-card p-6">
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <FolderOpen size={32} className="text-ink-muted mb-3" />
              <div className="text-[13px] text-ink-secondary mb-1">最佳实践文档存储在 JoySpace 团队空间</div>
              <div className="text-[12px] text-ink-muted mb-4">当前为文件夹类型，暂不支持自动内容同步</div>
              <a
                href={JOYSPACE_TEAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue text-white text-[12px] font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                前往 JoySpace 查看
              </a>
            </div>
          </div>
        </section>

        {/* Tutorials — placeholder, needs content source */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={16} className="text-blue" />
            <h2 className="text-[15px] font-semibold text-ink">教程文档</h2>
          </div>
          <div className="rounded-xl border border-dashed border-rule bg-card p-6">
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <BookOpen size={32} className="text-ink-muted mb-3" />
              <div className="text-[13px] text-ink-secondary mb-1">教程与创新 Skill 文档待整理</div>
              <div className="text-[11px] text-ink-muted">后续计划从 JoySpace 团队空间自动聚合相关文档</div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  )
}
