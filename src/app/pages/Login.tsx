import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Eye, EyeOff } from 'lucide-react';

export function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FEE2E2] via-white to-[#DBEAFE] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-[#DC2626] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="font-['Poppins'] font-bold text-2xl text-[#111827]">Cardáp.io</span>
          </Link>
          <h1 className="font-['Poppins'] font-bold text-3xl text-[#111827] mb-2">
            Bem-vindo de volta
          </h1>
          <p className="text-[#64748B]">
            Acesse sua conta para gerenciar seu cardápio
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-[#E2E8F0] p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="E-mail"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={errors.email}
            />

            <div>
              <Input
                label="Senha"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                error={errors.password}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-[#64748B] hover:text-[#111827]"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#DC2626] border-[#E2E8F0] rounded focus:ring-[#DC2626]"
                />
                <span className="ml-2 text-sm text-[#64748B]">Lembrar de mim</span>
              </label>
              <Link
                to="/recuperar-senha"
                className="text-sm text-[#DC2626] hover:text-[#B91C1C] font-medium"
              >
                Esqueceu a senha?
              </Link>
            </div>

            <Button type="submit" variant="primary" size="lg" fullWidth>
              Entrar
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-[#64748B]">
              Não tem uma conta?{' '}
              <Link to="/cadastro" className="text-[#DC2626] hover:text-[#B91C1C] font-medium">
                Criar conta
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-sm text-[#64748B] mt-6">
          Ao continuar, você concorda com nossos{' '}
          <a href="#" className="text-[#DC2626] hover:underline">
            Termos de Uso
          </a>{' '}
          e{' '}
          <a href="#" className="text-[#DC2626] hover:underline">
            Política de Privacidade
          </a>
        </p>
      </div>
    </div>
  );
}
