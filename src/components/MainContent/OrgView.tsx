import { useState } from 'react'
import { Calendar, PartyPopper, Wallet, MessageSquare, ThumbsUp, QrCode, Star, Users, ExternalLink } from 'lucide-react'

const proposals = [
  { title: '海边露营', author: '李四', budget: 300, votes: 12, rank: 1 },
  { title: '漂流+烧烤', author: '王五', budget: 250, votes: 8, rank: 2 },
  { title: '别墅轰趴', author: '赵六', budget: 400, votes: 5, rank: 3 },
]

export default function OrgView() {
  const [voted, setVoted] = useState<number[]>([])

  return (
    <div className="space-y-5">
      {/* Week schedule */}
      <div className="rounded-xl border border-rule bg-card overflow-hidden">
        <div className="px-5 py-3 border-b border-rule flex items-center gap-2">
          <Calendar size={14} className="text-blue" />
          <span className="text-[13px] font-semibold text-ink">周会排班</span>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-5 gap-2 mb-4">
            {['周一 王五', '周二 赵六', '周三 孙七', '周四 周八', '周五 张三'].map((s, i) => {
              const [day, person] = s.split(' ')
              const isToday = i === 2, past = i < 2
              return (
                <div key={i} className={`text-center py-3.5 rounded-xl border transition-colors ${
                  isToday ? 'bg-blue text-white border-blue' :
                  past ? 'bg-green-light text-green border-green/20' :
                  'bg-ground text-ink-secondary border-rule'
                }`}>
                  <div className="text-[11px]">{day}</div>
                  <div className="text-[13px] font-bold mt-0.5">{person}</div>
                  {past && <div className="text-[10px] mt-0.5 opacity-70">已完成</div>}
                  {isToday && <div className="text-[10px] mt-0.5 text-white/70">今天</div>}
                </div>
              )
            })}
          </div>
          <div className="bg-blue-light rounded-xl p-3">
            <span className="text-[11px] text-blue font-medium">主持人职责: </span>
            <span className="text-[11px] text-ink-secondary">提前收集议题 · 控制时间 · 输出纪要</span>
          </div>
        </div>
      </div>

      {/* Family day */}
      <div className="rounded-xl border border-rule bg-card overflow-hidden">
        <div className="px-5 py-3 border-b border-rule flex items-center gap-2">
          <PartyPopper size={14} className="text-red" />
          <span className="text-[13px] font-semibold text-ink">周三家庭日</span>
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-red-light text-red ml-auto">7月17日 18:00</span>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-[15px] font-bold text-ink">夏日烧烤派对</div>
              <div className="text-[11px] text-ink-muted mt-0.5 flex items-center gap-1"><Users size={11} />5人报名 · 负责人: 张三</div>
            </div>
            <button className="px-4 py-2 bg-red text-white text-[11px] font-semibold rounded-lg hover:opacity-90 transition-opacity">加入</button>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[{ r: '采购', m: '李四、王五' }, { r: '场地', m: '赵六', n: '已预定天台' }, { r: '游戏', m: '孙七', n: '3个游戏' }].map((g, i) => (
              <div key={i} className="rounded-xl bg-ground p-3 text-center">
                <div className="text-[11px] text-ink-muted">{g.r}</div>
                <div className="text-[12px] font-semibold text-ink mt-0.5">{g.m}</div>
                {g.n && <div className="text-[11px] text-ink-muted mt-0.5">{g.n}</div>}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[{ m: '6月', n: '密室逃脱', r: 4.8 }, { m: '5月', n: '羽毛球赛', r: 4.6 }, { m: '4月', n: '剧本杀', r: 4.5 }].map((a, i) => (
              <div key={i} className="rounded-xl border border-rule p-2.5 text-center">
                <div className="text-[11px] text-ink-muted">{a.m}</div>
                <div className="text-[12px] font-medium text-ink">{a.n}</div>
                <div className="flex items-center justify-center gap-0.5 mt-0.5">
                  <Star size={10} className="text-amber fill-amber" />
                  <span className="text-[11px] font-bold text-amber">{a.r}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {/* Fund */}
        <div className="rounded-xl border border-rule bg-card overflow-hidden">
          <div className="px-5 py-3 border-b border-rule flex items-center gap-2">
            <Wallet size={14} className="text-amber" />
            <span className="text-[13px] font-semibold text-ink">团建费</span>
          </div>
          <div className="p-5">
            <div className="text-[12px] text-ink-secondary mb-3">应用产品部会议&团建费明细</div>
            <div className="flex flex-col items-center py-4">
              <Wallet size={24} className="text-ink-muted mb-2" />
              <div className="text-[12px] text-ink-muted mb-3">数据存储在 JoySpace 表格中</div>
              <a
                href="https://joyspace.jd.com/sheets/4fa3isX6fEKrdZL8IbOF"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[11px] text-blue font-medium hover:underline"
              >
                <ExternalLink size={11} />查看明细表
              </a>
            </div>
            <button className="w-full py-2 border border-amber text-amber text-[11px] font-semibold rounded-lg hover:bg-amber-light transition-colors flex items-center justify-center gap-1.5">
              <QrCode size={13} />扫码缴费
            </button>
          </div>
        </div>

        {/* Voting */}
        <div className="rounded-xl border border-rule bg-card overflow-hidden">
          <div className="px-5 py-3 border-b border-rule flex items-center gap-2">
            <MessageSquare size={14} className="text-blue" />
            <span className="text-[13px] font-semibold text-ink">意见征集</span>
          </div>
          <div className="p-5">
            <div className="text-[13px] font-semibold text-ink mb-0.5">Q3团建活动方案</div>
            <div className="text-[11px] text-ink-muted mb-3">剩余5天 · 18人参与</div>
            <div className="space-y-2">
              {proposals.map((p) => {
                const v = voted.includes(p.rank)
                return (
                  <div key={p.rank} className="rounded-xl border border-rule p-3 hover:border-rule-hover transition-colors">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[12px] font-medium text-ink">#{p.rank} {p.title}</span>
                      <span className="text-[11px] text-ink-muted">¥{p.budget}/人</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-ink-muted">{p.author}</span>
                      <button
                        onClick={() => setVoted(vs => v ? vs.filter(x => x !== p.rank) : [...vs, p.rank])}
                        className={`flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg font-medium transition-colors ${
                          v ? 'bg-blue text-white' : 'border border-rule text-blue hover:bg-blue-light'
                        }`}
                      >
                        <ThumbsUp size={11} />{v ? p.votes + 1 : p.votes}票
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
