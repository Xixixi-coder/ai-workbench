import { Calendar, Coffee, QrCode, ExternalLink } from 'lucide-react'

export default function OrgActivityPage() {
  return (
    <div>
      <div className="mb-[24px]">
        <h1 className="text-[28px] font-bold text-gray-900 mb-[8px]">组织与团队建设</h1>
        <p className="text-[14px] text-gray-500">处理团队内部排班、家庭日组织及团建经费等相关事宜。</p>
      </div>
      <div>
        <div className="bg-white rounded-[16px] p-[24px] shadow-sm border border-gray-100">
          <div className="flex items-center gap-[8px] mb-[24px]">
            <div className="w-[4px] h-[16px] bg-emerald-500 rounded-full" />
            <h2 className="text-[18px] font-semibold text-gray-900 tracking-tight">组织事务大厅</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-[24px]">
            {/* 协作排班 */}
            <div className="flex-1 bg-[#F8F9FA] rounded-[12px] p-[20px] hover:shadow-md transition-shadow">
              <div className="flex items-center gap-[8px] mb-[16px]">
                <Calendar size={16} className="text-gray-400" />
                <h3 className="text-[16px] font-semibold text-gray-800">协作排班</h3>
              </div>
              <div className="flex flex-col gap-[12px]">
                <div className="flex justify-between items-center p-[12px] bg-white rounded-[8px] border border-gray-100">
                  <span className="text-[14px] text-gray-700 font-medium">周会组织排班</span>
                  <span className="text-[13px] font-medium bg-blue-50 text-blue-600 px-[10px] py-[4px] rounded-[6px] cursor-pointer">本周: 孙七</span>
                </div>
                <div className="flex justify-between items-center p-[12px] bg-white rounded-[8px] border border-gray-100">
                  <span className="text-[14px] text-gray-700 font-medium">周三家庭日排班</span>
                  <span className="text-[13px] font-medium bg-emerald-50 text-emerald-600 px-[10px] py-[4px] rounded-[6px] cursor-pointer">本周: 张三</span>
                </div>
              </div>
            </div>

            {/* 团建与福利 */}
            <div className="flex-1 bg-[#F8F9FA] rounded-[12px] p-[20px] hover:shadow-md transition-shadow">
              <div className="flex items-center gap-[8px] mb-[16px]">
                <Coffee size={16} className="text-gray-400" />
                <h3 className="text-[16px] font-semibold text-gray-800">团建与福利</h3>
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className="p-[12px] bg-white rounded-[8px] border border-gray-100 flex flex-col gap-[12px]">
                  <div className="flex justify-between items-center">
                    <span className="text-[14px] text-gray-700 font-medium">部门团建经费账本</span>
                    <a
                      href="https://joyspace.jd.com/sheets/4fa3isX6fEKrdZL8IbOF"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-gray-500 hover:text-blue-600 font-medium flex items-center gap-[4px]"
                    >
                      查看明细 <ExternalLink size={11} />
                    </a>
                  </div>
                  <button className="w-full flex justify-center items-center py-[8px] bg-gray-50 hover:bg-gray-100 text-gray-700 text-[13px] font-medium rounded-[6px] transition-colors gap-[6px]">
                    <QrCode size={13} />迟到扫码缴费
                  </button>
                </div>
                <div className="p-[12px] bg-white rounded-[8px] border border-gray-100 flex justify-between items-center">
                  <span className="text-[14px] text-gray-700 font-medium">近期团建意向调研</span>
                  <button className="text-[13px] bg-blue-600 text-white px-[12px] py-[6px] rounded-[6px] hover:bg-blue-700 transition-colors font-medium">
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
