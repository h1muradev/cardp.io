import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { DashboardLayout } from '../components/DashboardLayout';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Textarea } from '../components/Textarea';
import { Select } from '../components/Select';
import { Switch } from '../components/Switch';
import { ArrowLeft, Save, Upload, CheckCircle, AlertCircle } from 'lucide-react';

export function NovoPrato() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    active: true,
    featured: false,
    order: '',
    internalNotes: '',
    image: null as File | null
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [imagePreview, setImagePreview] = useState<string>('');

  const categories = [
    { value: '', label: 'Selecione uma categoria' },
    { value: 'entradas', label: 'Entradas' },
    { value: 'massas', label: 'Massas' },
    { value: 'carnes', label: 'Carnes' },
    { value: 'peixes', label: 'Peixes' },
    { value: 'sobremesas', label: 'Sobremesas' }
  ];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrors((prev) => ({ ...prev, image: 'Selecione um arquivo de imagem válido.' }));
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, image: 'A imagem deve ter no máximo 5MB.' }));
      return;
    }

    setErrors((prev) => ({ ...prev, image: '' }));
    setFormData({ ...formData, image: file });
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name) newErrors.name = 'Nome do prato é obrigatório';
    if (!formData.category) newErrors.category = 'Categoria é obrigatória';
    if (!formData.price) {
      newErrors.price = 'Preço é obrigatório';
    } else {
      const normalizedPrice = Number(formData.price.replace(',', '.'));
      if (Number.isNaN(normalizedPrice) || normalizedPrice <= 0) {
        newErrors.price = 'Preço deve ser um número maior que zero';
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    navigate('/dashboard/pratos');
  };

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <Link
          to="/dashboard/pratos"
          className="inline-flex items-center text-[#64748B] hover:text-[#DC2626] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Voltar para pratos
        </Link>

        <div className="mb-8">
          <h1 className="font-['Poppins'] font-bold text-3xl text-[#111827] mb-2">
            Novo prato
          </h1>
          <p className="text-[#64748B]">
            Adicione um novo prato ao seu cardápio
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <form onSubmit={handleSubmit}>
              <Card className="mb-6">
                <h2 className="font-['Poppins'] font-bold text-xl text-[#111827] mb-6">
                  Informações básicas
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-2">
                      Imagem do prato
                    </label>
                    <div className="flex items-center space-x-4">
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-32 h-32 object-cover rounded-lg border-2 border-[#E2E8F0]"
                        />
                      ) : (
                        <div className="w-32 h-32 bg-[#F8FAFC] border-2 border-dashed border-[#E2E8F0] rounded-lg flex items-center justify-center">
                          <Upload className="w-8 h-8 text-[#64748B]" />
                        </div>
                      )}
                      <div className="flex-1">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                          id="dish-image"
                        />
                        <label htmlFor="dish-image" className="cursor-pointer inline-block">
                          <span className="inline-flex items-center justify-center rounded-lg transition-all duration-200 font-medium px-3 py-1.5 text-sm border-2 border-[#E2E8F0] text-[#111827] hover:bg-[#F8FAFC] active:bg-[#E2E8F0]">
                            Escolher imagem
                          </span>
                        </label>
                        <p className="text-sm text-[#64748B] mt-2">
                          PNG, JPG ou WEBP até 5MB
                        </p>
                        {errors.image && (
                          <p className="text-sm text-[#DC2626] mt-2">{errors.image}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <Input
                    label="Nome do prato"
                    placeholder="Ex: Filé Mignon ao Molho Madeira"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    error={errors.name}
                  />

                  <div className="grid md:grid-cols-2 gap-5">
                    <Select
                      label="Categoria"
                      options={categories}
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      error={errors.category}
                    />

                    <Input
                      label="Preço"
                      type="text"
                      placeholder="R$ 0,00"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      error={errors.price}
                    />
                  </div>

                  <Textarea
                    label="Descrição"
                    placeholder="Descreva os ingredientes e modo de preparo..."
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    helperText="Máximo 500 caracteres"
                  />
                </div>
              </Card>

              <Card className="mb-6">
                <h2 className="font-['Poppins'] font-bold text-xl text-[#111827] mb-6">
                  Configurações
                </h2>
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-5 border-b border-[#E2E8F0]">
                    <div>
                      <p className="font-medium text-[#111827]">Status do prato</p>
                      <p className="text-sm text-[#64748B] mt-1">
                        Pratos inativos não aparecem no cardápio
                      </p>
                    </div>
                    <Switch
                      checked={formData.active}
                      onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between pb-5 border-b border-[#E2E8F0]">
                    <div>
                      <p className="font-medium text-[#111827]">Prato em destaque</p>
                      <p className="text-sm text-[#64748B] mt-1">
                        Aparece com badge especial no cardápio
                      </p>
                    </div>
                    <Switch
                      checked={formData.featured}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    />
                  </div>

                  <Input
                    label="Ordem de exibição"
                    type="number"
                    placeholder="1"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: e.target.value })}
                    helperText="Pratos com menor número aparecem primeiro"
                  />

                  <Textarea
                    label="Observações internas"
                    placeholder="Notas que não aparecem no cardápio público..."
                    rows={3}
                    value={formData.internalNotes}
                    onChange={(e) => setFormData({ ...formData, internalNotes: e.target.value })}
                  />
                </div>
              </Card>

              <div className="flex items-center justify-end space-x-3">
                <Link to="/dashboard/pratos">
                  <Button variant="ghost">Cancelar</Button>
                </Link>
                <Button type="submit" variant="primary">
                  <Save className="w-5 h-5 mr-2" />
                  Salvar prato
                </Button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <Card>
              <h3 className="font-medium text-[#111827] mb-4">Orientações</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <p className="text-[#64748B]">Use imagens de alta qualidade e bem iluminadas</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <p className="text-[#64748B]">Descrições claras aumentam o interesse</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <p className="text-[#64748B]">Marque pratos especiais como destaque</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <p className="text-[#64748B]">Mantenha preços sempre atualizados</p>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="font-medium text-[#111827] mb-4">Checklist</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className={`w-4 h-4 rounded-full border-2 ${formData.image ? 'bg-[#16A34A] border-[#16A34A]' : 'border-[#E2E8F0]'}`} />
                  <span className={formData.image ? 'text-[#111827]' : 'text-[#64748B]'}>Imagem adicionada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-4 h-4 rounded-full border-2 ${formData.name ? 'bg-[#16A34A] border-[#16A34A]' : 'border-[#E2E8F0]'}`} />
                  <span className={formData.name ? 'text-[#111827]' : 'text-[#64748B]'}>Nome preenchido</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-4 h-4 rounded-full border-2 ${formData.category ? 'bg-[#16A34A] border-[#16A34A]' : 'border-[#E2E8F0]'}`} />
                  <span className={formData.category ? 'text-[#111827]' : 'text-[#64748B]'}>Categoria selecionada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-4 h-4 rounded-full border-2 ${formData.price ? 'bg-[#16A34A] border-[#16A34A]' : 'border-[#E2E8F0]'}`} />
                  <span className={formData.price ? 'text-[#111827]' : 'text-[#64748B]'}>Preço definido</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-4 h-4 rounded-full border-2 ${formData.description ? 'bg-[#16A34A] border-[#16A34A]' : 'border-[#E2E8F0]'}`} />
                  <span className={formData.description ? 'text-[#111827]' : 'text-[#64748B]'}>Descrição adicionada</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
