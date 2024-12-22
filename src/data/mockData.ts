import { Card, Transaction, Contact, WeeklyActivityData, ExpenseData } from '../types/dashboard';

export const cards: Card[] = [
  {
    id: 1,
    balance: 5756,
    cardHolder: 'Eddy Cusuma',
    cardNumber: '3778 **** **** 1234',
    validThru: '12/22',
  },
  {
    id: 2,
    balance: 5756,
    cardHolder: 'Eddy Cusuma',
    cardNumber: '3778 **** **** 1234',
    validThru: '12/22',
  },
];

export const transactions: Transaction[] = [
  {
    id: '1',
    type: 'withdrawal' as const,
    description: 'Deposit from my Card',
    date: '28 January 2021',
    amount: 850,
    icon: 'card'
  },
  {
    id: '2',
    type: 'deposit' as const,
    description: 'Deposit Paypal',
    date: '25 January 2021',
    amount: 2500,
    icon: 'paypal'
  },
  {
    id: '3',
    type: 'deposit' as const,
    description: 'Jemi Wilson',
    date: '21 January 2021',
    amount: 5400,
    icon: 'transfer'
  }
];

export const contacts: Contact[] = [
  {
    id: 1,
    name: 'Livia Bator',
    role: 'CEO',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&h=256&fit=crop&auto=format',
  },
  {
    id: 2,
    name: 'Randy Press',
    role: 'Director',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=256&h=256&fit=crop&auto=format',
  },
  {
    id: 3,
    name: 'Workman',
    role: 'Designer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=256&h=256&fit=crop&auto=format',
  },
  {
    id: 4,
    name: 'Eric Garsia',
    role: 'Designer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d??w=256&h=256&fit=crop&auto=format',
  },
  {
    id: 5,
    name: 'Eden Love',
    role: 'Designer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d??w=256&h=256&fit=crop&auto=format',
  },
];

export const weeklyActivityData: WeeklyActivityData[] = [
  { name: 'Sat', deposit: 200, withdraw: 400 },
  { name: 'Sun', deposit: 150, withdraw: 300 },
  { name: 'Mon', deposit: 250, withdraw: 300 },
  { name: 'Tue', deposit: 400, withdraw: 200 },
  { name: 'Wed', deposit: 300, withdraw: 400 },
  { name: 'Thu', deposit: 300, withdraw: 400 },
  { name: 'Fri', deposit: 400, withdraw: 300 },
];

export const expenseData: ExpenseData[] = [
  { name: 'Entertainment', value: 30 },
  { name: 'Bill Expense', value: 15 },
  { name: 'Investment', value: 20 },
  { name: 'Others', value: 35 },
];

export const balanceHistoryData = [
  { name: 'Jul', balance: 300 },
  { name: 'Aug', balance: 400 },
  { name: 'Sep', balance: 600 },
  { name: 'Oct', balance: 400 },
  { name: 'Nov', balance: 200 },
  { name: 'Dec', balance: 500 },
  { name: 'Jan', balance: 400 },
];