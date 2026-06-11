import { Calendar, Coffee, QrCode, ExternalLink } from 'lucide-react'

export default function OrgActivityPage() {
  return (
    <div>
      <div className="mb-[24px]">
        <h1 className="text-[28px] font-bold text-[#111827] mb-[4px]">组织与团队建设</h1>
        <p className="text-[14px] text-[#6b7280]">处理团队内部排班、家庭日组织及团建经费等相关事宜。</p>
      </div>
      <div className="bg-white rounded-[16px] p-[24px] shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-[#e5e7eb]">
        <div className="flex items-center gap-[8px] mb-[24px]">
          <div className="w-[4px] h-[16px] bg-[#10b981] rounded-full" />
          <h2 className="text-[18px] font-bold text-[#111827]">组织事务大厅</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-[20px]">
          {/* 协作排班 */}
          <div className="flex-1 bg-[#f9fafb] rounded-[12px] p-[20px]">
            <div className="flex items-center gap-[8px] mb-[14px]">
              <Calendar size={16} className="text-[#9ca3af]" />
              <h3 className="text-[15px] font-semibold text-[#111827]">协作排班</h3>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex justify-between items-center p-[12px] bg-white rounded-[8px] border border-[#e5e7eb]">
                <span className="text-[14px] text-[#374151] font-medium">周会组织排班</span>
                <span className="text-[12px] font-medium bg-[#e0e7ff] text-[#6366f1] px-[10px] py-[3px] rounded-full cursor-pointer hover:bg-[#c7d2fe] transition-colors">本周: 孙七</span>
              </div>
              <div className="flex justify-between items-center p-[12px] bg-white rounded-[8px] border border-[#e5e7eb]">
                <span className="text-[14px] text-[#374151] font-medium">周三家庭日排班</span>
                <span className="text-[12px] font-medium bg-[#d1fae5] text-[#059669] px-[10px] py-[3px] rounded-full cursor-pointer hover:bg-[#a7f3d0] transition-colors">本周: 张三</span>
              </div>
            </div>
          </div>

          {/* 团建与福利 */}
          <div className="flex-1 bg-[#f9fafb] rounded-[12px] p-[20px]">
            <div className="flex items-center gap-[8px] mb-[14px]">
              <Coffee size={16} className="text-[#9ca3af]" />
              <h3 className="text-[15px] font-semibold text-[#111827]">团建与福利</h3>
            </div>
            <div className="flex flex-col gap-[12px]">
              <div className="p-[12px] bg-white rounded-[8px] border border-[#e5e7eb] flex flex-col gap-[10px]">
                <div className="flex justify-between items-center">
                  <span className="text-[14px] text-[#374151] font-medium">部门团建经费账本</span>
                  <a
                    href="https://joyspace.jd.com/sheets/4fa3isX6fEKrdZL8IbOF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] text-[#9ca3af] hover:text-[#6366f1] font-medium flex items-center gap-[3px] transition-colors"
                  >
                    查看明细 <ExternalLink size={10} />
                  </a>
                </div>
                <button className="w-full flex justify-center items-center py-[8px] bg-[#f3f4f6] hover:bg-[#e5e7eb] text-[#374151] text-[13px] font-medium rounded-[6px] transition-colors gap-[6px]">
                  <QrCode size={13} />迟到扫码缴费
                </button>
              </div>
              <div className="p-[12px] bg-white rounded-[8px] border border-[#e5e7eb] flex justify-between items-center">
                <span className="text-[14px] text-[#374151] font-medium">近期团建意向调研</span>
                <button className="text-[12px] bg-[#6366f1] text-white px-[12px] py-[5px] rounded-[6px] hover:bg-[#4f46e5] transition-colors font-medium">
                  去投票
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
