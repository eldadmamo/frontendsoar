import { Link, useLocation } from 'react-router-dom';
import {
  User,
  ClipboardCheck,
  ArrowRightLeft,
  PieChart,
  CreditCard,
  Wallet,
  Settings,
  Wrench,
  Home,
  Shield,
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function Sidebar({ isVisible, onClose }: SidebarProps) {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: ArrowRightLeft, label: 'Transactions', path: '/transactions' },
    { icon: User, label: 'Account', path: '/Account' },
    { icon: PieChart, label: 'Investments', path: '/investments' },
    { icon: CreditCard, label: 'Credit Cards', path: '/cards' },
    { icon: Wallet, label: 'Loans', path: '/loans' },
    { icon: Wrench, label: 'Services', path: '/services' },
    { icon: Shield, label: 'My Privileges', path: '/privileges' },
    { icon: Settings, label: 'Setting', path: '/settings' },
  ];

  return (
    <div>
      {/* Mobile Sidebar */}
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-40 w-64 bg-white border-r shadow-lg transition-transform duration-300 md:hidden',
          isVisible ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="mb-8 px-4">
          <h1 className="text-xl font-bold text-gray-800 flex items-center">
            <ClipboardCheck className="mr-2 h-6 w-6 text-primary" />
            Soar Task
          </h1>
        </div>
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center px-4 py-3 text-lg rounded-lg transition-colors duration-200 bg-white',
                location.pathname === item.path
                  ? 'text-primary-foreground shadow-md border-l-4 border-primary font-bold'
                  : ''
              )}
              onClick={onClose} // Close sidebar on navigation
            >
              <item.icon
                className={cn(
                  'mr-3 h-6 w-6',
                  location.pathname === item.path ? 'text-primary-foreground' : 'text-gray-400'
                )}
              />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 bg-white border-r shadow-lg">
        <div className="mb-8 px-4">
          <h1 className="text-xl font-bold text-gray-800 flex items-center">
            <ClipboardCheck className="mr-2 h-6 w-6 text-primary" />
            Soar Task
          </h1>
        </div>
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center px-4 py-3 text-lg rounded-lg transition-colors duration-200 bg-white',
                location.pathname === item.path
                  ? 'text-primary-foreground shadow-md border-l-4 border-primary font-bold'
                  : ''
              )}
            >
              <item.icon
                className={cn(
                  'mr-3 h-6 w-6',
                  location.pathname === item.path ? 'text-primary-foreground' : 'text-gray-400'
                )}
              />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
