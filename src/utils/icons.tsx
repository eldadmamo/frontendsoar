import { CreditCard, DollarSign } from 'lucide-react';
import { FaPaypal } from 'react-icons/fa';
import Love from '../assets/iconfinder.png'

export const getTransactionIcon = (type: string) => {
  switch (type) {
    case 'card':
      return <CreditCard className="w-6 h-6" />;
    case 'paypal':
      // Using DollarSign as fallback since PaypalIcon isn't available in lucide-react
      return <FaPaypal className="w-6 h-6 text-blue-600" />;
    default:
      return <img src={Love} alt="Love icon" className="w-6 h-6" />
  }
};