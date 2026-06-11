import { Calendar, Coffee, QrCode, ExternalLink } from 'lucide-react'

export default function OrgActivityPage() {
  return (
    <div>
      <div className="mb-[24px]">
        <h1 className="text-[30px] font-semibold text-[#1A1A1A] mb-[8px] tracking-[-0.03em]">组织与团队建设</h1>
        <p className="text-[14px] text-[#A3A3A0]">处理团队内部排班、家庭日组织及团建经费等相关事宜。</p>
      </div>
      <div>
        <div className="bg-white rounded-[24px] p-[32px] border border-[#E2E2DD]">
          <div className="flex items-center gap-[8px] mb-[24px]">
            <div className="w-[4px] h-[16px] bg-[#C5E63A] rounded-full" />
            <h2 className="text-[18px] font-medium text-[#1A1A1A] tracking-[-0.02em]">组织事务大厅</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-[24px]">
            {/* 协作排班 */}
            <div className="flex-1 bg-[#F5F5F0] rounded-[20px] p-[20px]">
              <div className="flex items-center gap-[8px] mb-[16px]">
                <Calendar size={16} className="text-[#A3A3A0]" />
                <h3 className="text-[16px] font-medium text-[#1A1A1A] tracking-[-0.01em]">协作排班</h3>
              </div>
              <div className="flex flex-col gap-[12px]">
                <div className="flex justify-between items-center p-[12px] bg-white rounded-[12px] border border-[#E2E2DD]">
                  <span className="text-[14px] text-[#1A1A1A] font-medium">周会组织排班</span>
                  <span className="text-[13px] font-medium bg-[#EDF5E8] text-[#4A7C59] px-[10px] py-[4px] rounded-full cursor-pointer">本周: 孙七</span>
                </div>
                <div className="flex justify-between items-center p-[12px] bg-white rounded-[12px] border border-[#E2E2DD]">
                  <span className="text-[14px] text-[#1A1A1A] font-medium">周三家庭日排班</span>
                  <span className="text-[13px] font-medium bg-[#F4FADC] text-[#6B8F3A] px-[10px] py-[4px] rounded-full cursor-pointer">本周: 张三</span>
                </div>
              </div>
            </div>

            {/* 团建与福利 */}
            <div className="flex-1 bg-[#F5F5F0] rounded-[20px] p-[20px]">
              <div className="flex items-center gap-[8px] mb-[16px]">
                <Coffee size={16} className="text-[#A3A3A0]" />
                <h3 className="text-[16px] font-medium text-[#1A1A1A] tracking-[-0.01em]">团建与福利</h3>
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className="p-[12px] bg-white rounded-[12px] border border-[#E2E2DD] flex flex-col gap-[12px]">
                  <div className="flex justify-between items-center">
                    <span className="text-[14px] text-[#1A1A1A] font-medium">部门团建经费账本</span>
                    <a
                      href="https://joyspace.jd.com/sheets/4fa3isX6fEKrdZL8IbOF"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-[#A3A3A0] hover:text-[#4A7C59] font-medium flex items-center gap-[4px] transition-colors"
                    >
                      查看明细 <ExternalLink size={11} />
                    </a>
                  </div>
                  <button className="w-full flex justify-center items-center py-[8px] bg-[#F5F5F0] hover:bg-[#EDEDE9] text-[#6B6B6B] text-[13px] font-medium rounded-full transition-colors gap-[6px]">
                    <QrCode size={13} />迟到扫码缴费
                  </button>
                </div>
                <div className="p-[12px] bg-white rounded-[12px] border border-[#E2E2DD] flex justify-between items-center">
                  <span className="text-[14px] text-[#1A1A1A] font-medium">近期团建意向调研</span>
                  <button className="text-[13px] bg-[#1A1A1A] text-white px-[14px] py-[6px] rounded-full hover:bg-[#333333] transition-colors font-medium">
                    去投票
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
