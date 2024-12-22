import React from "react";
import { Mastercard, Visa, Paypal } from 'react-payment-logos/dist/flat';

const CreditCardComponent = () => {
  return (
    <div className="w-full max-w-sm bg-gradient-to-b from-gray-800 to-gray-900 text-white rounded-lg p-6 shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Balance</h2>
      </div>
      <h1 className="text-3xl font-bold mt-2">$5,756</h1>
      <div className="mt-6">
        <div className="text-sm font-medium">CARD HOLDER</div>
        <div className="text-lg font-semibold">Eddy Cusuma</div>
      </div>
      <div className="mt-4">
        <div className="text-sm font-medium">VALID THRU</div>
        <div className="text-lg font-semibold">12/22</div>
      </div>
      <div className="mt-6 text-xl font-semibold tracking-widest">
        3778 **** **** 1234
      </div>
      <div className="mt-4 flex justify-end">
        <Mastercard className="w-10 h-10" />
      </div>
    </div>
  );
};

export default CreditCardComponent;
