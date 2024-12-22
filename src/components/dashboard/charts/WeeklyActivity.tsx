import { Card } from '../../ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { weeklyActivityData } from '../../../data/mockData';

export default function WeeklyActivity() {
  return (
    <>
    <div className="p-3 flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Weekly Activity</h2>
    </div>
    <Card className="p-4 rounded-lg shadow-md">
    <div className="h-[400px]"> 
  <div className="flex justify-end items-center space-x-4">
  <div className="flex items-center space-x-2">
    <span className="w-4 h-4 bg-[#4F46E5] rounded-full"></span>
    <h4 className="font-light">Deposit</h4>
  </div>
    <div className="flex items-center space-x-2">
    <span className="w-4 h-4 bg-[#1F2937] rounded-full"></span>
    <h4 className="font-light">Withdraw</h4>
    </div>
  </div>
  <h2 className="text-xl font-semibold mb-6"></h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyActivityData} barSize={15}>
            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
            <XAxis dataKey="name" axisLine={false}/>
            <YAxis axisLine={false} domain={[0,500]} ticks={[0, 100, 200, 300, 400, 500]}/>
            <Legend content={() => null} />
            <Bar dataKey="withdraw" fill="#1F2937"  radius={[10,10,10,10]} />
            <Bar dataKey="deposit" fill="#4F46E5"  radius={[10, 10, 10, 10]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      </div>
    </Card>
    </>
  );
}
