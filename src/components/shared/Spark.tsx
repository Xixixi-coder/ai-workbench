import { LineChart, Line, ResponsiveContainer } from 'recharts'

const defaultData = [{ v: 30 }, { v: 42 }, { v: 35 }, { v: 50 }, { v: 45 }, { v: 58 }, { v: 52 }, { v: 65 }, { v: 60 }, { v: 72 }]

export default function Spark({ color = '#002FA7', data }: { color?: string; data?: { v: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={32}>
      <LineChart data={data ?? defaultData}>
        <Line type="monotone" dataKey="v" stroke={color} strokeWidth={1.5} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}
