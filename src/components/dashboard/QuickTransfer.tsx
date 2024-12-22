import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Send } from 'lucide-react';

const contacts = [
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
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=256&h=256&fit=crop&auto=format',
  },
];

export default function QuickTransfer() {
  return (
    <>
    <div className="p-6 flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Expense Statistics</h2>
    </div>
    
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Quick Transfer</h2>
      <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
        {contacts.map((contact) => (
          <div key={contact.id} className="flex flex-col items-center min-w-[100px]">
            <Avatar className="h-16 w-16 mb-2">
              <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback>{contact.name[0]}</AvatarFallback>
            </Avatar>
            <p className="font-medium text-sm text-center">{contact.name}</p>
            <p className="text-xs text-muted-foreground text-center">{contact.role}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <Input type="number" placeholder="Write Amount" className='text-black' />
        <Button className="gap-2">
          Send
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </Card>
    </>
  );
}