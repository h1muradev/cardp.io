import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Button } from '../components/Button';
import { Check, Menu, Smartphone, QrCode, Palette, Eye, Star } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative bg-gradient-to-br from-[#FEE2E2] via-white to-[#DBEAFE] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-['Poppins'] font-bold text-4xl lg:text-6xl text-[#111827] mb-6 leading-tight">
              Crie e gerencie o cardápio digital do seu restaurante com autonomia
            </h1>
            <p className="text-lg lg:text-xl text-[#64748B] mb-8 max-w-3xl mx-auto">
              Atualize pratos, categorias, identidade visual e publique seu menu por link e QR Code sem depender de programador.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/cadastro">
                <Button variant="primary" size="lg">
                  Criar conta grátis
                </Button>
              </Link>
              <a href="#demonstracao">
                <Button variant="outline" size="lg">
                  Ver demonstração
                </Button>
              </a>
            </div>
            <p className="mt-6 text-sm text-[#64748B]">
              Sem cartão de crédito • Comece em menos de 2 minutos
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="font-['Poppins'] font-bold text-4xl text-[#DC2626] mb-2">1.500+</p>
              <p className="text-[#64748B]">Restaurantes ativos</p>
            </div>
            <div className="text-center">
              <p className="font-['Poppins'] font-bold text-4xl text-[#DC2626] mb-2">50K+</p>
              <p className="text-[#64748B]">Cardápios visualizados</p>
            </div>
            <div className="text-center">
              <p className="font-['Poppins'] font-bold text-4xl text-[#DC2626] mb-2">98%</p>
              <p className="text-[#64748B]">Satisfação</p>
            </div>
            <div className="text-center">
              <p className="font-['Poppins'] font-bold text-4xl text-[#DC2626] mb-2">24/7</p>
              <p className="text-[#64748B]">Disponibilidade</p>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Poppins'] font-bold text-3xl lg:text-4xl text-[#111827] mb-4">
              Como funciona
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Crie seu cardápio digital em 3 passos simples
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#E2E8F0]">
              <div className="w-12 h-12 bg-[#FEE2E2] rounded-lg flex items-center justify-center mb-4">
                <span className="font-['Poppins'] font-bold text-xl text-[#DC2626]">1</span>
              </div>
              <h3 className="font-['Poppins'] font-bold text-xl text-[#111827] mb-3">
                Cadastre seu restaurante
              </h3>
              <p className="text-[#64748B]">
                Crie sua conta em menos de 2 minutos e configure as informações básicas do seu estabelecimento.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#E2E8F0]">
              <div className="w-12 h-12 bg-[#FEE2E2] rounded-lg flex items-center justify-center mb-4">
                <span className="font-['Poppins'] font-bold text-xl text-[#DC2626]">2</span>
              </div>
              <h3 className="font-['Poppins'] font-bold text-xl text-[#111827] mb-3">
                Adicione seus pratos
              </h3>
              <p className="text-[#64748B]">
                Organize por categorias, adicione fotos, descrições e preços. Tudo de forma simples e intuitiva.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#E2E8F0]">
              <div className="w-12 h-12 bg-[#FEE2E2] rounded-lg flex items-center justify-center mb-4">
                <span className="font-['Poppins'] font-bold text-xl text-[#DC2626]">3</span>
              </div>
              <h3 className="font-['Poppins'] font-bold text-xl text-[#111827] mb-3">
                Publique e compartilhe
              </h3>
              <p className="text-[#64748B]">
                Gere seu QR Code e link público. Seus clientes já podem acessar o cardápio digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="recursos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Poppins'] font-bold text-3xl lg:text-4xl text-[#111827] mb-4">
              Todos os recursos que você precisa
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Ferramenta completa para gerenciar seu cardápio digital
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Menu,
                title: 'Gestão de Categorias',
                description: 'Organize seus pratos em categorias personalizadas e mude a ordem quando quiser.'
              },
              {
                icon: Smartphone,
                title: 'Design Responsivo',
                description: 'Cardápio otimizado para mobile, tablet e desktop. Perfeito em qualquer dispositivo.'
              },
              {
                icon: QrCode,
                title: 'QR Code Integrado',
                description: 'Gere QR Codes personalizados para facilitar o acesso dos seus clientes.'
              },
              {
                icon: Palette,
                title: 'Personalização Visual',
                description: 'Configure cores, logo e banner para refletir a identidade do seu restaurante.'
              },
              {
                icon: Eye,
                title: 'Preview em Tempo Real',
                description: 'Visualize como ficará seu cardápio antes de publicar para os clientes.'
              },
              {
                icon: Star,
                title: 'Destaque de Pratos',
                description: 'Marque pratos especiais e organize por ordem de exibição.'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex flex-col items-start">
                  <div className="w-12 h-12 bg-[#FEE2E2] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#DC2626]" />
                  </div>
                  <h3 className="font-['Poppins'] font-bold text-lg text-[#111827] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#64748B]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="demonstracao" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Poppins'] font-bold text-3xl lg:text-4xl text-[#111827] mb-4">
              Veja o Cardáp.io em ação
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Interface moderna e fácil de usar
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-4 border border-[#E2E8F0]">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=600&fit=crop"
              alt="Dashboard do Cardáp.io"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Poppins'] font-bold text-3xl lg:text-4xl text-[#111827] mb-4">
              O que dizem nossos clientes
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Carlos Silva',
                restaurant: 'Restaurante Don Giovanni',
                text: 'O Cardáp.io simplificou completamente a forma como gerenciamos nosso cardápio. Agora posso atualizar pratos em segundos!'
              },
              {
                name: 'Marina Santos',
                restaurant: 'Bistrô da Marina',
                text: 'Interface super intuitiva e o suporte é excelente. Meus clientes adoram acessar o cardápio pelo QR Code.'
              },
              {
                name: 'Roberto Oliveira',
                restaurant: 'Churrascaria Gaúcha',
                text: 'Melhor investimento que fizemos. Economizamos muito com impressão de cardápios e tudo fica sempre atualizado.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-[#64748B] mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-medium text-[#111827]">{testimonial.name}</p>
                  <p className="text-sm text-[#64748B]">{testimonial.restaurant}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#DC2626] to-[#B91C1C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Poppins'] font-bold text-3xl lg:text-4xl text-white mb-6">
            Pronto para modernizar seu restaurante?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Junte-se a mais de 1.500 restaurantes que já usam o Cardáp.io
          </p>
          <Link to="/cadastro">
            <Button
              variant="secondary"
              size="lg"
              className="!bg-white !text-[#DC2626] hover:!bg-gray-50"
            >
              Começar agora - É grátis
            </Button>
          </Link>
        </div>
      </section>

      <footer id="contato" className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#DC2626] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="font-['Poppins'] font-bold text-xl">Cardáp.io</span>
              </div>
              <p className="text-gray-400 text-sm">
                Cardápios digitais modernos para restaurantes que querem autonomia.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#recursos" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#demonstracao" className="hover:text-white transition-colors">Demonstração</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Cardáp.io. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
