import { Card } from '../ui/card';

export default function RecentTransactions() {
  const transactions = [
    {
      id: 1,
      type: 'deposit',
      description: 'Deposit from my Card',
      date: '28 January 2021',
      amount: -850,
    },
    {
      id: 2,
      type: 'deposit',
      description: 'Sent Paypal',
      date: '25 January 2021',
      amount: 2500,
    },
    {
      id: 3,
      type: 'withdrawal',
      description: 'Jemi Wilson',
      date: '21 January 2021',
      amount: 5400,
    },
  ];

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Recent Transaction</h2>
      <div className="space-y-6">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-muted-foreground">{transaction.date}</p>
              </div>
            </div>
            <p className={`font-medium ${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}