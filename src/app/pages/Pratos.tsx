import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DashboardLayout } from '../components/DashboardLayout';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { Plus, Edit2, Eye, EyeOff, Search, Star } from 'lucide-react';

interface Dish {
  id: number;
  name: string;
  category: string;
  price: number;
  active: boolean;
  featured: boolean;
  image?: string;
}

export function Pratos() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const dishes: Dish[] = [
    { id: 1, name: 'Carpaccio de Salmão', category: 'Entradas', price: 42.90, active: true, featured: true, image: 'https://images.unsplash.com/photo-1580959375944-57be6d5dd97c?w=200&h=200&fit=crop' },
    { id: 2, name: 'Bruschetta Tradicional', category: 'Entradas', price: 28.90, active: true, featured: false, image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=200&h=200&fit=crop' },
    { id: 3, name: 'Risoto de Cogumelos', category: 'Massas', price: 65.90, active: true, featured: true, image: 'https://images.unsplash.com/photo-1476124369491-c6476ebb3141?w=200&h=200&fit=crop' },
    { id: 4, name: 'Espaguete à Carbonara', category: 'Massas', price: 58.90, active: true, featured: false, image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=200&h=200&fit=crop' },
    { id: 5, name: 'Filé Mignon ao Molho Madeira', category: 'Carnes', price: 89.90, active: true, featured: true, image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=200&h=200&fit=crop' },
    { id: 6, name: 'Picanha na Brasa', category: 'Carnes', price: 95.90, active: true, featured: true, image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=200&h=200&fit=crop' },
    { id: 7, name: 'Salmão Grelhado', category: 'Peixes', price: 78.90, active: true, featured: false, image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=200&h=200&fit=crop' },
    { id: 8, name: 'Tiramisu', category: 'Sobremesas', price: 32.90, active: true, featured: false, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=200&h=200&fit=crop' },
    { id: 9, name: 'Petit Gateau', category: 'Sobremesas', price: 35.90, active: false, featured: false, image: 'https://images.unsplash.com/photo-1578775887804-699de7086ff9?w=200&h=200&fit=crop' }
  ];

  const filteredDishes = dishes.filter(dish => {
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || dish.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { value: 'all', label: 'Todas as categorias' },
    { value: 'Entradas', label: 'Entradas' },
    { value: 'Massas', label: 'Massas' },
    { value: 'Carnes', label: 'Carnes' },
    { value: 'Peixes', label: 'Peixes' },
    { value: 'Sobremesas', label: 'Sobremesas' }
  ];

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-['Poppins'] font-bold text-3xl text-[#111827] mb-2">
              Pratos
            </h1>
            <p className="text-[#64748B]">
              Gerencie o cardápio do seu restaurante
            </p>
          </div>
          <Link to="/dashboard/pratos/novo">
            <Button variant="primary">
              <Plus className="w-5 h-5 mr-2" />
              Novo prato
            </Button>
          </Link>
        </div>

        <Card className="mb-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />
              <input
                type="text"
                placeholder="Buscar pratos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[#111827] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
              />
            </div>
            <Select
              options={categories}
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            />
          </div>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDishes.map((dish) => (
            <Card key={dish.id} noPadding className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                {dish.featured && (
                  <div className="absolute top-3 right-3 bg-[#F59E0B] text-white px-2 py-1 rounded-full flex items-center space-x-1 text-xs">
                    <Star className="w-3 h-3 fill-white" />
                    <span>Destaque</span>
                  </div>
                )}
                {!dish.active && (
                  <div className="absolute inset-0 bg-[#0F172A] bg-opacity-60 flex items-center justify-center">
                    <span className="bg-white text-[#64748B] px-3 py-1.5 rounded-full text-sm font-medium">
                      Inativo
                    </span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="mb-3">
                  <h3 className="font-medium text-[#111827] mb-1">{dish.name}</h3>
                  <p className="text-sm text-[#64748B]">{dish.category}</p>
                </div>
                <p className="font-['Poppins'] font-bold text-xl text-[#DC2626] mb-4">
                  R$ {dish.price.toFixed(2).replace('.', ',')}
                </p>
                <div className="flex items-center space-x-2">
                  <Link to={`/dashboard/pratos/${dish.id}/editar`} className="flex-1">
                    <Button variant="outline" size="sm" fullWidth>
                      <Edit2 className="w-4 h-4 mr-1" />
                      Editar
                    </Button>
                  </Link>
                  <Button variant="ghost" size="sm">
                    {dish.active ? (
                      <Eye className="w-4 h-4" />
                    ) : (
                      <EyeOff className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredDishes.length === 0 && (
          <Card>
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[#F8FAFC] rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-[#64748B]" />
              </div>
              <h3 className="font-medium text-[#111827] mb-2">Nenhum prato encontrado</h3>
              <p className="text-[#64748B]">Tente ajustar os filtros ou criar um novo prato</p>
            </div>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
