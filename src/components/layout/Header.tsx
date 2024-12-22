import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import SearchBar from '../shared/SearchBar';
import NotificationBell from '../shared/NotificationBell';
import UserAvatar from '../shared/UserAvatar';
import SettingPage from '../shared/SettingPage';

interface HeaderProps {
  onMenuClick: () => void;
  title: string;
}

export default function Header({ onMenuClick, title }: HeaderProps) {
  return (
    <header className="border-b">
      {/* Main Row */}
      <div className="flex h-16 items-center px-4 gap-4 md:gap-6">
        {/* Left: Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Center: Title */}
        <h1 className="text-2xl font-bold flex-1 text-center md:text-left">{title}</h1>

        {/* Search Bar (Full-width and centered at tablet size) */}
        <div className="hidden md:flex flex-1 md:max-w-none lg:justify-end lg:flex-[initial] md:justify-center">
          <div className='w-full md:w-auto lg:w-auto lg:mr-4'>
          <SearchBar />
          </div>
        </div>

        {/* Right: Additional Icons (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-4">
          <SettingPage />
          <NotificationBell />
        </div>

        {/* User Avatar */}
        <UserAvatar />
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 py-2">
        <SearchBar />
      </div>
    </header>
  );
}
