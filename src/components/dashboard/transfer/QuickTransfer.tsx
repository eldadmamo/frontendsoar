import { useState } from 'react';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { ChevronRight } from 'lucide-react'; // Arrow icon
import { contacts } from '../../../data/mockData';
import { FaTelegramPlane } from 'react-icons/fa';

export default function QuickTransfer() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3; 
  const endIndex = startIndex + visibleCount;

  const handleSlideRight = () => {
    if (endIndex >= contacts.length) {
      setStartIndex(0);
    } else {
      setStartIndex((prev) => prev + 1);
    }
  };

  return (
    <>
    <div className="p-3 flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Quick Transfer</h2>
        </div>
        
    
    <Card className="p-4 md:p-6">
      <h2 className="text-xl font-semibold mb-6"></h2>
      <div className="h-[200px]"> 
      <div className="flex items-center gap-4 mb-6">
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {contacts.slice(startIndex, endIndex).map((contact) => (
            <div key={contact.id} className="flex flex-col items-center min-w-[80px]">
              <Avatar className="h-12 w-12 md:h-16 md:w-16 mb-2">
                <AvatarImage src={contact.avatar} alt={contact.name} />
                <AvatarFallback>{contact.name[0]}</AvatarFallback>
              </Avatar>
              <p className="font-medium text-sm text-center truncate w-full">
                {contact.name}
              </p>
              <p className="text-xs text-muted-foreground text-center truncate w-full">
                {contact.role}
              </p>
            </div>
          ))}
        </div>
        <Button
          onClick={handleSlideRight}
          className="w-10 h-10 p-0 rounded-full flex justify-center items-center bg-white text-black "
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
      <div className="flex items-center gap-4 mt-6">
  <label className="text-gray-400 flex-shrink-0 text-sm md:text-base" style={{ fontSize: "15px" }}>
    Write Amount
  </label>
  <div className="relative flex-1 flex items-center w-full">
    <Input className="pr-20 h-12 text-lg w-full" />
    <Button className="absolute bg-black rounded-full top-1/2 right-0 -translate-y-1/2 gap-2 h-12 px-6 text-lg flex items-center">
      <span className="text-white">Send</span>
      <FaTelegramPlane className="h-6 w-6 text-white" />
    </Button>
  </div>
</div>


      </div>
    </Card>
    </>
  );
}
