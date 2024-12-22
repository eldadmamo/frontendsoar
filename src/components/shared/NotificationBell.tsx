import { Bell } from 'lucide-react';
import { Button } from '../ui/button';

export default function NotificationBell() {
  return (
    <>
    <div className="p-1 rounded-full" style={{ backgroundColor: "#F5F7FA" }}>
    <Button
      variant="ghost"
      size="icon"
      className="relative"
    >
      <Bell className="h-5 w-5" />
      <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
    </Button>
    </div>
    </>
    
  );
}