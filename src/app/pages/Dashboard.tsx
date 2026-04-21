import { DashboardLayout } from '../components/DashboardLayout';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  XCircle,
  FolderTree,
  UtensilsCrossed,
  Eye,
  EyeOff,
  QrCode,
  ExternalLink,
  Clock,
  AlertCircle
} from 'lucide-react';

export function Dashboard() {
  const stats = [
    {
      label: 'Categorias',
      value: '8',
      icon: FolderTree,
      color: 'text-[#2563EB]',
      bgColor: 'bg-[#DBEAFE]'
    },
    {
      label: 'Pratos totais',
      value: '42',
      icon: UtensilsCrossed,
      color: 'text-[#DC2626]',
      bgColor: 'bg-[#FEE2E2]'
    },
    {
      label: 'Pratos ativos',
      value: '38',
      icon: Eye,
      color: 'text-[#16A34A]',
      bgColor: 'bg-[#D1FAE5]'
    },
    {
      label: 'Pratos inativos',
      value: '4',
      icon: EyeOff,
      color: 'text-[#64748B]',
      bgColor: 'bg-[#E2E8F0]'
    }
  ];

  const recentDishes = [
    { name: 'Filé Mignon ao Molho Madeira', category: 'Carnes', updatedAt: '2 horas atrás' },
    { name: 'Risoto de Cogumelos', category: 'Massas', updatedAt: '5 horas atrás' },
    { name: 'Tiramisu', category: 'Sobremesas', updatedAt: '1 dia atrás' },
    { name: 'Carpaccio de Salmão', category: 'Entradas', updatedAt: '2 dias atrás' }
  ];

  const categories = [
    { name: 'Entradas', dishes: 6, active: true },
    { name: 'Massas', dishes: 8, active: true },
    { name: 'Carnes', dishes: 10, active: true },
    { name: 'Peixes', dishes: 7, active: true },
    { name: 'Sobremesas', dishes: 8, active: true },
    { name: 'Bebidas', dishes: 3, active: false }
  ];

  const checklist = [
    { label: 'Adicionar logo do restaurante', done: true },
    { label: 'Configurar cores da marca', done: true },
    { label: 'Adicionar pelo menos 10 pratos', done: true },
    { label: 'Criar banner personalizado', done: false },
    { label: 'Testar no preview mobile', done: false }
  ];

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="font-['Poppins'] font-bold text-3xl text-[#111827] mb-2">
            Dashboard
          </h1>
          <p className="text-[#64748B]">
            Bem-vindo ao seu painel de controle
          </p>
        </div>

        <div className="mb-6">
          <Card className="!bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Cardápio publicado</span>
                </div>
                <p className="text-white/90 text-sm mb-4">
                  Seu cardápio está ativo e acessível para os clientes
                </p>
                <div className="flex items-center space-x-3">
                  <a
                    href="/cardapio/demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm font-medium hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Ver cardápio público</span>
                  </a>
                  <Link to="/dashboard/qrcode" className="inline-flex items-center space-x-2 text-sm font-medium hover:underline">
                    <QrCode className="w-4 h-4" />
                    <span>Baixar QR Code</span>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#64748B] mb-1">{stat.label}</p>
                    <p className="font-['Poppins'] font-bold text-3xl text-[#111827]">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-['Poppins'] font-bold text-xl text-[#111827]">
                Últimos pratos editados
              </h2>
              <Link to="/dashboard/pratos">
                <Button variant="ghost" size="sm">Ver todos</Button>
              </Link>
            </div>
            <div className="space-y-4">
              {recentDishes.map((dish) => (
                <div key={dish.name} className="flex items-start justify-between pb-4 border-b border-[#E2E8F0] last:border-0 last:pb-0">
                  <div className="flex-1">
                    <p className="font-medium text-[#111827]">{dish.name}</p>
                    <p className="text-sm text-[#64748B]">{dish.category}</p>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-[#64748B]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{dish.updatedAt}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="font-['Poppins'] font-bold text-xl text-[#111827] mb-6">
              Checklist de publicação
            </h2>
            <div className="space-y-3">
              {checklist.map((item) => (
                <label key={item.label} className="flex items-center space-x-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                    item.done
                      ? 'bg-[#16A34A] border-[#16A34A]'
                      : 'border-[#E2E8F0] group-hover:border-[#DC2626]'
                  }`}>
                    {item.done && <CheckCircle className="w-4 h-4 text-white" />}
                  </div>
                  <span className={`text-sm ${item.done ? 'text-[#64748B] line-through' : 'text-[#111827]'}`}>
                    {item.label}
                  </span>
                </label>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#64748B]">Progresso</span>
                <span className="font-medium text-[#111827]">3/5 completos</span>
              </div>
              <div className="mt-2 h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                <div className="h-full bg-[#16A34A] rounded-full" style={{ width: '60%' }} />
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-['Poppins'] font-bold text-xl text-[#111827]">
                Categorias e status
              </h2>
              <Link to="/dashboard/categorias">
                <Button variant="ghost" size="sm">Gerenciar</Button>
              </Link>
            </div>
            <div className="space-y-3">
              {categories.map((category) => (
                <div key={category.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FolderTree className="w-5 h-5 text-[#64748B]" />
                    <div>
                      <p className="font-medium text-[#111827]">{category.name}</p>
                      <p className="text-xs text-[#64748B]">{category.dishes} pratos</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {category.active ? (
                      <span className="flex items-center space-x-1 text-xs text-[#16A34A] bg-[#D1FAE5] px-2 py-1 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                        <span>Ativo</span>
                      </span>
                    ) : (
                      <span className="flex items-center space-x-1 text-xs text-[#64748B] bg-[#F8FAFC] px-2 py-1 rounded-full">
                        <XCircle className="w-3 h-3" />
                        <span>Inativo</span>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="font-['Poppins'] font-bold text-xl text-[#111827] mb-6">
              Identidade visual
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-[#64748B] mb-2">Logo do restaurante</p>
                <div className="w-20 h-20 bg-[#F8FAFC] border-2 border-dashed border-[#E2E8F0] rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🍽️</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-[#64748B] mb-2">Cores</p>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-[#DC2626] rounded-lg border border-[#E2E8F0]" />
                    <span className="text-sm text-[#111827]">Primária</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-[#0F172A] rounded-lg border border-[#E2E8F0]" />
                    <span className="text-sm text-[#111827]">Secundária</span>
                  </div>
                </div>
              </div>
              <Link to="/dashboard/personalizar">
                <Button variant="outline" size="sm" fullWidth>
                  Editar identidade visual
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
