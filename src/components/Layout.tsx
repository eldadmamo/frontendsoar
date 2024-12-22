import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, Settings } from 'lucide-react';

const Layout: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-indigo-600">FinDash</h1>
        </div>
        <nav className="mt-8">
          <Link
            to="/"
            className={`flex items-center px-6 py-3 ${
              location.pathname === '/' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600'
            }`}
          >
            <LayoutDashboard className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          <Link
            to="/settings"
            className={`flex items-center px-6 py-3 ${
              location.pathname === '/settings' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600'
            }`}
          >
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-slate-500">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;