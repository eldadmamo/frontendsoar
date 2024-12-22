import { Card } from '../ui/card';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,

} from 'recharts';

const data = [
  { name: 'Jul', balance: 100 },
  { name: 'Aug', balance: 500 },
  { name: 'Sep', balance: 400 },
  { name: 'Oct', balance: 800 },
  { name: 'Nov', balance: 200 },
  { name: 'Dec', balance: 600 },
  { name: 'Jan', balance: 400 },
];

export default function BalanceHistory() {
  return (
    <>
    <div className="p-3 flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Balance History</h2>
    </div>  
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6"></h2>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4F46E5" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#ffffff" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" axisLine={false} />
            <YAxis axisLine={false} domain={[0,800]} ticks={[0, 200, 400, 600,800]}/>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#4F46E5"
              strokeWidth={4}
              fill="url(#colorBalance)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
    </>
  );
}
