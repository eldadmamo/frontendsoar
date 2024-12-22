import { Card } from '../ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { name: 'Sat', deposit: 200, withdraw: 400 },
  { name: 'Sun', deposit: 150, withdraw: 300 },
  { name: 'Mon', deposit: 250, withdraw: 300 },
  { name: 'Tue', deposit: 400, withdraw: 200 },
  { name: 'Wed', deposit: 300, withdraw: 400 },
  { name: 'Thu', deposit: 300, withdraw: 400 },
  { name: 'Fri', deposit: 400, withdraw: 300 },
];

export default function WeeklyActivity() {
  return (
    <>
    
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Weekly Activity</h2>
      <Bar dataKey="deposit" fill="#4F46E5" name="Deposit" />
      <Bar dataKey="withdraw" fill="#1F2937" name="Withdraw" />
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
    </>
  );
}