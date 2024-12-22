import { Card } from '../../ui/card';
import TransactionItem from './TransactionItem';
import { transactions } from '../../../data/mockData';
import { getTransactionIcon } from '../../../utils/icons';
import { Button } from '../../ui/button';

export default function RecentTransactions() {
  return (
    <>
    <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Recent Transaction</h2>
          
        </div>
    <Card className="p-6 w-full">
      <h2 className="text-xl font-semibold mb-6"></h2>
      <div className="space-y-6">
      {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-full ${
                transaction.type === 'deposit' ? 'bg-blue-100' : 'bg-yellow-100'
              }`}>
                {getTransactionIcon(transaction.icon)}
              </div>
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <span className={`font-semibold ${
              transaction.type === 'deposit' ? 'text-green-500' : 'text-red-500'
            }`}>
              {transaction.type === 'deposit' ? '+' : '-'}${Math.abs(transaction.amount).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </Card>
    </>
  );
}