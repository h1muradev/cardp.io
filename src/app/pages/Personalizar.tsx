import { useState } from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Upload, Save, CheckCircle } from 'lucide-react';

export function Personalizar() {
  const [formData, setFormData] = useState({
    logo: null as File | null,
    primaryColor: '#DC2626',
    secondaryColor: '#0F172A',
    banner: null as File | null
  });

  const [logoPreview, setLogoPreview] = useState<string>('');
  const [bannerPreview, setBannerPreview] = useState<string>('');

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, logo: file });
      const reader = new FileReader();
      reader.onloadend = () => setLogoPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, banner: file });
      const reader = new FileReader();
      reader.onloadend = () => setBannerPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="font-['Poppins'] font-bold text-3xl text-[#111827] mb-2">
            Personalizar cardápio
          </h1>
          <p className="text-[#64748B]">
            Configure a identidade visual do seu cardápio digital
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <form onSubmit={handleSubmit}>
              <Card className="mb-6">
                <h2 className="font-['Poppins'] font-bold text-xl text-[#111827] mb-6">
                  Logo do restaurante
                </h2>
                <div className="flex items-center space-x-6">
                  {logoPreview ? (
                    <img
                      src={logoPreview}
                      alt="Logo preview"
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
                      onChange={handleLogoChange}
                      className="hidden"
                      id="logo-upload"
                    />
                    <label htmlFor="logo-upload" className="cursor-pointer">
                      <span className="inline-flex items-center justify-center rounded-lg transition-all duration-200 font-medium px-3 py-1.5 text-sm border-2 border-[#E2E8F0] text-[#111827] hover:bg-[#F8FAFC] active:bg-[#E2E8F0] mb-2">
                        Escolher logo
                      </span>
                    </label>
                    <p className="text-sm text-[#64748B]">
                      PNG ou SVG até 2MB<br />
                      Recomendado: 512x512px
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="mb-6">
                <h2 className="font-['Poppins'] font-bold text-xl text-[#111827] mb-6">
                  Cores da marca
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-3">
                      Cor primária
                    </label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="color"
                        value={formData.primaryColor}
                        onChange={(e) => setFormData({ ...formData, primaryColor: e.target.value })}
                        className="w-16 h-16 rounded-lg border-2 border-[#E2E8F0] cursor-pointer"
                      />
                      <div>
                        <input
                          type="text"
                          value={formData.primaryColor}
                          onChange={(e) => setFormData({ ...formData, primaryColor: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
                        />
                        <p className="text-sm text-[#64748B] mt-1">
                          Usada em botões e destaques
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-3">
                      Cor secundária
                    </label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="color"
                        value={formData.secondaryColor}
                        onChange={(e) => setFormData({ ...formData, secondaryColor: e.target.value })}
                        className="w-16 h-16 rounded-lg border-2 border-[#E2E8F0] cursor-pointer"
                      />
                      <div>
                        <input
                          type="text"
                          value={formData.secondaryColor}
                          onChange={(e) => setFormData({ ...formData, secondaryColor: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
                        />
                        <p className="text-sm text-[#64748B] mt-1">
                          Usada em cabeçalhos e textos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="mb-6">
                <h2 className="font-['Poppins'] font-bold text-xl text-[#111827] mb-6">
                  Banner do cardápio
                </h2>
                <div>
                  {bannerPreview ? (
                    <img
                      src={bannerPreview}
                      alt="Banner preview"
                      className="w-full h-48 object-cover rounded-lg border-2 border-[#E2E8F0] mb-4"
                    />
                  ) : (
                    <div className="w-full h-48 bg-[#F8FAFC] border-2 border-dashed border-[#E2E8F0] rounded-lg flex flex-col items-center justify-center mb-4">
                      <Upload className="w-10 h-10 text-[#64748B] mb-2" />
                      <p className="text-sm text-[#64748B]">Banner opcional para o topo do cardápio</p>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleBannerChange}
                    className="hidden"
                    id="banner-upload"
                  />
                  <label htmlFor="banner-upload" className="cursor-pointer inline-block">
                    <span className="inline-flex items-center justify-center rounded-lg transition-all duration-200 font-medium px-3 py-1.5 text-sm border-2 border-[#E2E8F0] text-[#111827] hover:bg-[#F8FAFC] active:bg-[#E2E8F0]">
                      {bannerPreview ? 'Alterar banner' : 'Adicionar banner'}
                    </span>
                  </label>
                  <p className="text-sm text-[#64748B] mt-2">
                    JPG ou PNG até 5MB • Recomendado: 1920x400px
                  </p>
                </div>
              </Card>

              <div className="flex items-center justify-end">
                <Button type="submit" variant="primary">
                  <Save className="w-5 h-5 mr-2" />
                  Salvar alterações
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
                  <p className="text-[#64748B]">Use cores que representem sua marca</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <p className="text-[#64748B]">Logo em alta resolução garante boa visualização</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <p className="text-[#64748B]">Banner é opcional mas cria ótima primeira impressão</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <p className="text-[#64748B]">Teste no preview antes de publicar</p>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="font-medium text-[#111827] mb-4">Pré-visualização de cores</h3>
              <div className="space-y-4">
                <div
                  className="p-4 rounded-lg text-white"
                  style={{ backgroundColor: formData.primaryColor }}
                >
                  <p className="font-medium">Cor primária</p>
                  <p className="text-sm opacity-90">Botões e destaques</p>
                </div>
                <div
                  className="p-4 rounded-lg text-white"
                  style={{ backgroundColor: formData.secondaryColor }}
                >
                  <p className="font-medium">Cor secundária</p>
                  <p className="text-sm opacity-90">Cabeçalhos e textos</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
