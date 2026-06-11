export default function PageShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="max-w-[960px] mx-auto px-8 py-6">
      <h1 className="text-[20px] font-bold text-ink mb-6">{title}</h1>
      {children}
    </div>
  )
}
