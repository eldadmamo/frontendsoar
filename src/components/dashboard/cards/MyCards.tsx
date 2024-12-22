import { Button } from '../../../components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import CardItem from './CardItem';
import { cards } from '../../../data/mockData';

export default function MyCards() {
  const [activeCard, setActiveCard] = useState(0);

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setActiveCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">My Cards</h2>
        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
          See All
        </Button>
      </div>

      {/* Mobile Card Carousel */}
      <div className="relative md:hidden">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${activeCard * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div key={card.id} className="w-full flex-shrink-0 px-1">
                <CardItem 
                  card={card} 
                  variant={index % 2 === 0 ? 'dark' : 'light'} 
                />
              </div>
            ))}
          </div>
        </div>
        
        {cards.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2  h-5 p-0 rounded-full flex justify-center items-center bg-white text-black"
              onClick={prevCard}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2  h-5 p-0 rounded-full flex justify-center items-center bg-white text-black "
              onClick={nextCard}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}
      </div>

      {/* Desktop Card Grid */}
      <div className="hidden md:grid md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <CardItem 
            key={card.id} 
            card={card} 
            variant={index % 2 === 0 ? 'dark' : 'light'} 
          />
        ))}
      </div>
    </div>
  );
}