import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { ArrowLeft, Mail, CheckCircle } from 'lucide-react';

export function RecuperarSenha() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('E-mail é obrigatório');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('E-mail inválido');
      return;
    }

    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FEE2E2] via-white to-[#DBEAFE] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-xl shadow-lg border border-[#E2E8F0] p-8 text-center">
            <div className="w-16 h-16 bg-[#D1FAE5] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-[#16A34A]" />
            </div>
            <h2 className="font-['Poppins'] font-bold text-2xl text-[#111827] mb-3">
              E-mail enviado com sucesso!
            </h2>
            <p className="text-[#64748B] mb-6">
              Enviamos um link de recuperação para <strong>{email}</strong>. Verifique sua caixa de entrada e spam.
            </p>
            <Link to="/login">
              <Button variant="primary" fullWidth>
                Voltar para o login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
            Recuperar senha
          </h1>
          <p className="text-[#64748B]">
            Digite seu e-mail para receber um link de recuperação
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-[#E2E8F0] p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="w-12 h-12 bg-[#FEE2E2] rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-[#DC2626]" />
            </div>

            <Input
              label="E-mail"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error}
            />

            <Button type="submit" variant="primary" size="lg" fullWidth>
              Enviar link de recuperação
            </Button>
          </form>

          <div className="mt-6">
            <Link
              to="/login"
              className="flex items-center justify-center text-sm text-[#64748B] hover:text-[#DC2626] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Voltar para o login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
