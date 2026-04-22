import { useEffect, useState } from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Textarea } from '../components/Textarea';
import { Save, MapPin, Phone, Clock, CheckCircle } from 'lucide-react';

const RESTAURANT_STORAGE_KEY = 'cardapio:restaurant-data';

const defaultData = {
  name: 'Restaurante Don Giovanni',
  description: 'Cozinha italiana tradicional com toques contemporâneos',
  phone: '(11) 3456-7890',
  email: 'contato@dongiovanni.com.br',
  address: 'Rua dos Pinheiros, 123',
  neighborhood: 'Pinheiros',
  city: 'São Paulo',
  state: 'SP',
  zipCode: '05422-010',
  instagram: '@dongiovanni',
  facebook: 'dongiovanni',
  website: 'www.dongiovanni.com.br',
  openingHours: 'Ter-Dom: 12h-15h e 19h-23h'
};

export function DadosRestaurante() {
  const [formData, setFormData] = useState(defaultData);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(RESTAURANT_STORAGE_KEY);
    if (!raw) return;

    try {
      setFormData({ ...defaultData, ...(JSON.parse(raw) as typeof defaultData) });
    } catch {
      localStorage.removeItem(RESTAURANT_STORAGE_KEY);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(RESTAURANT_STORAGE_KEY, JSON.stringify(formData));
    setSaved(true);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="font-['Poppins'] font-bold text-3xl text-[#111827] mb-2">
            Dados do restaurante
          </h1>
          <p className="text-[#64748B]">
            Informações básicas que aparecem no cardápio público
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <h2 className="font-['Poppins'] font-bold text-xl text-[#111827] mb-6">
              Informações básicas
            </h2>
            <div className="space-y-5">
              <Input
                label="Nome do restaurante"
                placeholder="Ex: Restaurante Don Giovanni"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <Textarea
                label="Descrição"
                placeholder="Conte sobre o seu restaurante..."
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                helperText="Aparece no topo do cardápio público"
              />
            </div>
          </Card>

          <Card>
            <div className="flex items-center space-x-2 mb-6">
              <MapPin className="w-5 h-5 text-[#DC2626]" />
              <h2 className="font-['Poppins'] font-bold text-xl text-[#111827]">
                Endereço
              </h2>
            </div>
            <div className="space-y-5">
              <Input
                label="Endereço"
                placeholder="Rua, número"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />

              <div className="grid md:grid-cols-2 gap-5">
                <Input
                  label="Bairro"
                  placeholder="Ex: Pinheiros"
                  value={formData.neighborhood}
                  onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                />

                <Input
                  label="CEP"
                  placeholder="00000-000"
                  value={formData.zipCode}
                  onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                />
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                <div className="md:col-span-2">
                  <Input
                    label="Cidade"
                    placeholder="Ex: São Paulo"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>

                <Input
                  label="Estado"
                  placeholder="SP"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                />
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center space-x-2 mb-6">
              <Phone className="w-5 h-5 text-[#DC2626]" />
              <h2 className="font-['Poppins'] font-bold text-xl text-[#111827]">
                Contato
              </h2>
            </div>
            <div className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <Input
                  label="Telefone"
                  placeholder="(00) 0000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />

                <Input
                  label="E-mail"
                  type="email"
                  placeholder="contato@restaurante.com.br"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center space-x-2 mb-6">
              <Clock className="w-5 h-5 text-[#DC2626]" />
              <h2 className="font-['Poppins'] font-bold text-xl text-[#111827]">
                Horário de funcionamento
              </h2>
            </div>
            <Textarea
              label="Horários"
              placeholder="Ex: Ter-Dom: 12h-15h e 19h-23h"
              rows={3}
              value={formData.openingHours}
              onChange={(e) => setFormData({ ...formData, openingHours: e.target.value })}
            />
          </Card>

          <Card>
            <h2 className="font-['Poppins'] font-bold text-xl text-[#111827] mb-6">
              Redes sociais
            </h2>
            <div className="space-y-5">
              <Input
                label="Instagram"
                placeholder="@seurestaurante"
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
              />

              <Input
                label="Facebook"
                placeholder="seurestaurante"
                value={formData.facebook}
                onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
              />

              <Input
                label="Website"
                placeholder="www.seurestaurante.com.br"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              />
            </div>
          </Card>

          {saved && (
            <p className="text-sm text-[#16A34A] flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Dados salvos com sucesso.
            </p>
          )}

          <div className="flex items-center justify-end">
            <Button type="submit" variant="primary">
              <Save className="w-5 h-5 mr-2" />
              Salvar alterações
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
