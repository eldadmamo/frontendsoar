import { Transaction } from '../../../types/dashboard';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

interface TransactionItemProps {
  transaction: Transaction;
}

export default function TransactionItem({ transaction }: TransactionItemProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {transaction.amount > 0 ? (
          <ArrowUpCircle className="h-10 w-10 text-green-500" />
        ) : (
          <ArrowDownCircle className="h-10 w-10 text-red-500" />
        )}
        <div>
          <p className="font-medium">{transaction.description}</p>
          <p className="text-sm text-muted-foreground">{transaction.date}</p>
        </div>
      </div>
      <p className={`font-medium ${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
        {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
      </p>
    </div>
  );
}