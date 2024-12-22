import MyCards from '../components/dashboard/cards/MyCards';
import RecentTransactions from '../components/dashboard/transactions/RecentTransactions';
import WeeklyActivity from '../components/dashboard/charts/WeeklyActivity';
import ExpenseStatistics from '../components/dashboard/ExpenseStatistics';
import QuickTransfer from '../components/dashboard/transfer/QuickTransfer';
import BalanceHistory from '../components/dashboard/BalanceHistory';

export default function Dashboard() {
  return (
    <div className="space-y-1">
      {/* Recent Transactions */}
      
      <div className="grid gap-6 md:grid-cols-3">
        {/* Make MyCards span 2 columns */}
        <div className="md:col-span-2">
          <MyCards />
        </div>
        <div>
          <RecentTransactions />
        </div>
      </div>

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2">
        <WeeklyActivity />
        </div>
        <div>
        <ExpenseStatistics />
        </div>
      </div>

      
      <div className="grid gap-6 md:grid-cols-3">
      <div >
      <QuickTransfer />
        </div>
        <div className="md:col-span-2">
        <BalanceHistory />
        </div>
      </div>
    </div>
  );
}