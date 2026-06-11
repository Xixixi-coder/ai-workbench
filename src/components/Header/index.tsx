import { Search, Bell, HelpCircle } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [focused, setFocused] = useState(false)

  return (
    <header className="h-14 bg-card border-b border-rule flex items-center px-5 shrink-0 z-50">
      <div className="flex items-center gap-2.5 mr-8">
        <div className="w-7 h-7 rounded-lg bg-blue flex items-center justify-center">
          <span className="text-white text-[10px] font-bold tracking-tight">SP</span>
        </div>
        <span className="text-[14px] font-semibold text-ink">支付基础产品部</span>
      </div>

      <div className="flex-1 max-w-sm">
        <div className={`flex items-center h-8 rounded-lg border px-2.5 gap-2 transition-all ${
          focused ? 'border-blue ring-2 ring-blue/10 bg-card' : 'border-rule bg-ground'
        }`}>
          <Search size={14} className="text-ink-muted shrink-0" />
          <input
            type="text"
            placeholder="搜索..."
            className="flex-1 bg-transparent outline-none text-[13px] text-ink placeholder:text-ink-muted"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <kbd className="text-[10px] text-ink-muted border border-rule rounded px-1 py-px bg-card">⌘K</kbd>
        </div>
      </div>

      <div className="flex items-center gap-1 ml-auto">
        <button className="w-8 h-8 rounded-lg hover:bg-ground flex items-center justify-center">
          <HelpCircle size={16} className="text-ink-muted" />
        </button>
        <button className="relative w-8 h-8 rounded-lg hover:bg-ground flex items-center justify-center">
          <Bell size={16} className="text-ink-muted" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red rounded-full border-2 border-card" />
        </button>
        <div className="w-px h-5 bg-rule mx-2" />
        <div className="flex items-center gap-2 hover:bg-ground rounded-lg px-2 py-1 cursor-pointer">
          <div className="w-7 h-7 rounded-full bg-blue flex items-center justify-center">
            <span className="text-white text-[10px] font-semibold">张</span>
          </div>
          <span className="text-[13px] font-medium text-ink">张三</span>
        </div>
      </div>
    </header>
  )
}
