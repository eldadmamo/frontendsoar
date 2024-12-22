import { Card } from '../ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Bill Expense', value: 15 },
  { name: 'Entertainment', value: 30 },
  { name: 'Investment', value: 20 },
  { name: 'Others', value: 35 },
];

const COLORS = ['#4F46E5', '#F59E0B', '#10B981', '#1F2937'];

export default function ExpenseStatistics() {
  
  const totalValue = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <>
    <div className=" p-3 flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Expense Statistics</h2>
    </div>
    
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6"></h2>
      <div className="h-[360px]"> 
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={0} 
              outerRadius={130} 
              paddingAngle={5}
              dataKey="value"
              label={({ name, value, cx, cy, midAngle, innerRadius, outerRadius }) => {
                const RADIAN = Math.PI / 180;
                const radius = innerRadius + (outerRadius - innerRadius) / 2;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <>
                  <text
                      x={x+ 1}
                      y={y - 5}  // Adjust the position of the value
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize={20}
                      fontWeight="bold"
                    >
                      {value}%
                    </text>
                    
                    <text
                      x={x - 2}
                      y={y + 12}  // Adjust the position of the name
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize={13}
                      fontWeight="bold"
                    >
                      {name}
                    </text>
                    
                  </>
                );
              }}
              labelLine={false} 
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend content={() => null} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
    </>
  );
}
