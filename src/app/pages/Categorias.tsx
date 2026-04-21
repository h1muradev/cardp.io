import { useState } from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { Input } from '../components/Input';
import { Switch } from '../components/Switch';
import { Link } from 'react-router-dom';
import { Plus, Edit2, Trash2, GripVertical, UtensilsCrossed } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  dishCount: number;
  active: boolean;
  order: number;
}

export function Categorias() {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: 'Entradas', dishCount: 6, active: true, order: 1 },
    { id: 2, name: 'Massas', dishCount: 8, active: true, order: 2 },
    { id: 3, name: 'Carnes', dishCount: 10, active: true, order: 3 },
    { id: 4, name: 'Peixes', dishCount: 7, active: true, order: 4 },
    { id: 5, name: 'Sobremesas', dishCount: 8, active: true, order: 5 },
    { id: 6, name: 'Bebidas', dishCount: 3, active: false, order: 6 }
  ]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<Category | null>(null);

  const handleToggleActive = (id: number) => {
    setCategories(categories.map(cat =>
      cat.id === id ? { ...cat, active: !cat.active } : cat
    ));
  };

  const handleDeleteClick = (category: Category) => {
    setCategoryToDelete(category);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (categoryToDelete) {
      setCategories(categories.filter(cat => cat.id !== categoryToDelete.id));
      setShowDeleteModal(false);
      setCategoryToDelete(null);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-['Poppins'] font-bold text-3xl text-[#111827] mb-2">
              Categorias
            </h1>
            <p className="text-[#64748B]">
              Organize seus pratos em categorias
            </p>
          </div>
          <Link to="/dashboard/categorias/nova">
            <Button variant="primary">
              <Plus className="w-5 h-5 mr-2" />
              Nova categoria
            </Button>
          </Link>
        </div>

        <Card noPadding>
          <div className="divide-y divide-[#E2E8F0]">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex items-center justify-between p-6 hover:bg-[#F8FAFC] transition-colors"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <button className="text-[#64748B] hover:text-[#111827] cursor-grab active:cursor-grabbing">
                    <GripVertical className="w-5 h-5" />
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <h3 className="font-medium text-[#111827]">{category.name}</h3>
                      {!category.active && (
                        <span className="text-xs bg-[#F8FAFC] text-[#64748B] px-2 py-1 rounded-full">
                          Inativo
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-[#64748B]">
                      <UtensilsCrossed className="w-4 h-4" />
                      <span>{category.dishCount} pratos</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Switch
                    checked={category.active}
                    onChange={() => handleToggleActive(category.id)}
                  />
                  <Link to={`/dashboard/categorias/${category.id}/editar`}>
                    <Button variant="ghost" size="sm">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteClick(category)}
                  >
                    <Trash2 className="w-4 h-4 text-[#DC2626]" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {categories.length === 0 && (
          <Card>
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[#F8FAFC] rounded-full flex items-center justify-center mx-auto mb-4">
                <UtensilsCrossed className="w-8 h-8 text-[#64748B]" />
              </div>
              <h3 className="font-medium text-[#111827] mb-2">Nenhuma categoria cadastrada</h3>
              <p className="text-[#64748B] mb-6">Crie sua primeira categoria para organizar os pratos</p>
              <Link to="/dashboard/categorias/nova">
                <Button variant="primary">
                  <Plus className="w-5 h-5 mr-2" />
                  Criar primeira categoria
                </Button>
              </Link>
            </div>
          </Card>
        )}
      </div>

      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Excluir categoria"
        footer={
          <>
            <Button variant="ghost" onClick={() => setShowDeleteModal(false)}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={confirmDelete}>
              Excluir categoria
            </Button>
          </>
        }
      >
        <p className="text-[#64748B]">
          Tem certeza que deseja excluir a categoria <strong>{categoryToDelete?.name}</strong>?
          {categoryToDelete && categoryToDelete.dishCount > 0 && (
            <span className="block mt-2 text-[#DC2626]">
              Esta categoria possui {categoryToDelete.dishCount} pratos que serão desvinculados.
            </span>
          )}
        </p>
      </Modal>
    </DashboardLayout>
  );
}
