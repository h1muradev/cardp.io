import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { DashboardLayout } from '../components/DashboardLayout';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Textarea } from '../components/Textarea';
import { Switch } from '../components/Switch';
import { ArrowLeft, Save } from 'lucide-react';

export function NovaCategoria() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    active: true
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name) {
      newErrors.name = 'Nome da categoria é obrigatório';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    navigate('/dashboard/categorias');
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <Link
          to="/dashboard/categorias"
          className="inline-flex items-center text-[#64748B] hover:text-[#DC2626] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Voltar para categorias
        </Link>

        <div className="mb-8">
          <h1 className="font-['Poppins'] font-bold text-3xl text-[#111827] mb-2">
            Nova categoria
          </h1>
          <p className="text-[#64748B]">
            Crie uma nova categoria para organizar seus pratos
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="mb-6">
            <h2 className="font-['Poppins'] font-bold text-xl text-[#111827] mb-6">
              Informações da categoria
            </h2>
            <div className="space-y-5">
              <Input
                label="Nome da categoria"
                placeholder="Ex: Entradas, Massas, Carnes..."
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                error={errors.name}
              />

              <Textarea
                label="Descrição (opcional)"
                placeholder="Adicione uma descrição para esta categoria"
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />

              <div className="pt-4 border-t border-[#E2E8F0]">
                <Switch
                  label="Categoria ativa"
                  checked={formData.active}
                  onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                />
                <p className="text-sm text-[#64748B] mt-2 ml-14">
                  Categorias inativas não aparecem no cardápio público
                </p>
              </div>
            </div>
          </Card>

          <div className="flex items-center justify-end space-x-3">
            <Link to="/dashboard/categorias">
              <Button variant="ghost">Cancelar</Button>
            </Link>
            <Button type="submit" variant="primary">
              <Save className="w-5 h-5 mr-2" />
              Criar categoria
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
