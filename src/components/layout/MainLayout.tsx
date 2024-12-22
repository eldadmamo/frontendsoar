import { ReactNode, useState } from 'react';
import Header from './Header';
import Sidebar from '../Sidebar';
import { useLocation } from 'react-router-dom';


interface MainLayoutProps {
  children: ReactNode;
}

const pageTitles: Record<string, string> = {
  '/': 'Dashboard',
  '/transactions': 'Transactions',
  '/Account':'Account',
  '/investments': 'Investments',
  '/cards': 'Credit Cards',
  '/loans': 'Loans',
  '/services': 'Services',
  '/privileges': 'My Privileges',
  '/settings': 'Settings',
};

export default function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const currentTitle = pageTitles[location.pathname] || 'Page Not Found';

  return (
<div className="flex min-h-screen bg-background">
<Sidebar />
<div className="flex-1">
  <Header onMenuClick={() => setIsSidebarOpen(true)} title={currentTitle}/>
  <main className="p-8" style={{ background: "#F9FAFB" }}>
  {children}
</main>

</div>
</div>
  );
}