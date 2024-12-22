export interface Card {
    id: number;
    balance: number;
    cardHolder: string;
    cardNumber: string;
    validThru: string;
  }
  
  export interface Transaction {
    id: string;
    type: 'deposit' | 'withdrawal';
    description: string;
    date: string;
    amount: number;
    icon: string;
  }
  
  export interface Contact {
    id: number;
    name: string;
    role: string;
    avatar: string;
  }
  
  export interface WeeklyActivityData {
    name: string;
    deposit: number;
    withdraw: number;
  }
  
  export interface ExpenseData {
    name: string;
    value: number;
  }