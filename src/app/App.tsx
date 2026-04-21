import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { RecuperarSenha } from './pages/RecuperarSenha';
import { RedefinirSenha } from './pages/RedefinirSenha';
import { Dashboard } from './pages/Dashboard';
import { Categorias } from './pages/Categorias';
import { NovaCategoria } from './pages/NovaCategoria';
import { Pratos } from './pages/Pratos';
import { NovoPrato } from './pages/NovoPrato';
import { Personalizar } from './pages/Personalizar';
import { DadosRestaurante } from './pages/DadosRestaurante';
import { QRCodePage } from './pages/QRCodePage';
import { Preview } from './pages/Preview';
import { CardapioPublico } from './pages/CardapioPublico';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/redefinir-senha" element={<RedefinirSenha />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/categorias" element={<Categorias />} />
        <Route path="/dashboard/categorias/nova" element={<NovaCategoria />} />
        <Route path="/dashboard/categorias/:id/editar" element={<NovaCategoria />} />
        <Route path="/dashboard/pratos" element={<Pratos />} />
        <Route path="/dashboard/pratos/novo" element={<NovoPrato />} />
        <Route path="/dashboard/pratos/:id/editar" element={<NovoPrato />} />
        <Route path="/dashboard/personalizar" element={<Personalizar />} />
        <Route path="/dashboard/dados" element={<DadosRestaurante />} />
        <Route path="/dashboard/qrcode" element={<QRCodePage />} />
        <Route path="/dashboard/preview" element={<Preview />} />

        <Route path="/cardapio/:slug" element={<CardapioPublico />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}