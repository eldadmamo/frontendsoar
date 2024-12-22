import { Card as CardType } from '../../../types/dashboard';
import chips from '../../../assets/Chip_Card.png'
interface CardItemProps {
  card: CardType;
  variant?: 'dark' | 'light';
}

export default function CardItem({ card, variant = 'dark' }: CardItemProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={`relative p-8 rounded-3xl overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-br from-[#5B5A6F] to-[#000000]  text-white'
          : 'bg-[#ffffff] border border-gray-100'
      }`}
    >
      <div className="absolute right-4 top-4 w-12 h-8">
      <img
          src={chips} // Replace with the actual image path
          alt="Card Brand"
          className={`w-full h-full object-contain ${
            isDark ?  'filter brightness-100' : 'filter brightness-0'
          }`}
        />
      </div>
      <div className="mb-6">
        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>Balance</p>
        <p className="text-3xl font-bold mt-1">${card.balance.toLocaleString()}</p>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            CARD HOLDER
          </p>
          <p className={`font-medium mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {card.cardHolder}
          </p>
        </div>
        <div>
          <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            VALID THRU
          </p>
          <p className={`font-medium mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {card.validThru}
          </p>
        </div>
      </div>

      

      <div className="flex items-center justify-between">
        {/* Card number */}
        <p className="font-mono text-lg ">{card.cardNumber}</p>

        {/* Card brand circles */}
        <div className="relative w-12 h-8">
          <div className="absolute right-0 w-8 h-8 bg-gray-400/50 rounded-full" />
          <div className="absolute right-4 w-8 h-8 bg-gray-400/50 rounded-full" />
        </div>
      </div>
    </div>
  );
}