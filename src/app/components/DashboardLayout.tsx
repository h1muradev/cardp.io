import { ReactNode, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  FolderTree,
  UtensilsCrossed,
  Palette,
  Store,
  QrCode,
  Eye,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { Button } from './Button';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { label: 'Categorias', icon: FolderTree, path: '/dashboard/categorias' },
    { label: 'Pratos', icon: UtensilsCrossed, path: '/dashboard/pratos' },
    { label: 'Personalizar', icon: Palette, path: '/dashboard/personalizar' },
    { label: 'Dados do restaurante', icon: Store, path: '/dashboard/dados' },
    { label: 'QR Code', icon: QrCode, path: '/dashboard/qrcode' },
    { label: 'Preview', icon: Eye, path: '/dashboard/preview' }
  ];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="bg-white border-b border-[#E2E8F0] sticky top-0 z-40">
        <div className="flex items-center justify-between h-16 px-4 lg:px-8">
          <div className="flex items-center space-x-4">
            <button
              className="lg:hidden text-[#111827]"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#DC2626] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="font-['Poppins'] font-bold text-xl text-[#111827]">Cardáp.io</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="/cardapio/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#64748B] hover:text-[#DC2626] transition-colors"
            >
              Ver cardápio público
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-[#64748B] hover:text-[#DC2626] transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-medium">Sair</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        <aside className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-[#E2E8F0] transform transition-transform duration-200 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } mt-16 lg:mt-0`}>
          <nav className="p-4 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#FEE2E2] text-[#DC2626]'
                      : 'text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#111827]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-[#0F172A] bg-opacity-50 z-20 lg:hidden mt-16"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <main className="flex-1 p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
