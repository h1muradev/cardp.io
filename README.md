# Cardáp.io (SaaS para cardápio digital)

Projeto front-end para restaurantes criarem, editarem e publicarem cardápios digitais sem depender de programador.

## Rodando localmente (Windows / VS Code)

1. Abra a pasta no VS Code.
2. No PowerShell, se necessário, permita scripts no usuário atual:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
```

3. Instale dependências:

```powershell
npm install
```

4. Execute o ambiente de desenvolvimento:

```powershell
npm run dev
```

5. Build de produção:

```powershell
npm run build
```

## Stack

- React 18
- Vite
- React Router
- Lucide Icons
- QRCode React

## Estrutura principal

- `src/app/pages/LandingPage.tsx`: página institucional
- `src/app/pages/Login.tsx`: autenticação
- `src/app/pages/Cadastro.tsx`: criação de conta
- `src/app/pages/RecuperarSenha.tsx`: recuperação de senha
- `src/app/pages/RedefinirSenha.tsx`: redefinição de senha
- `src/app/pages/Dashboard.tsx`: painel administrativo
- `src/app/pages/Categorias.tsx` e `NovaCategoria.tsx`: gestão de categorias
- `src/app/pages/Pratos.tsx` e `NovoPrato.tsx`: gestão de pratos
- `src/app/pages/Personalizar.tsx`: identidade visual
- `src/app/pages/DadosRestaurante.tsx`: dados do restaurante
- `src/app/pages/QRCodePage.tsx`: link público e QR Code
- `src/app/pages/Preview.tsx`: preview desktop/mobile
- `src/app/pages/CardapioPublico.tsx`: cardápio público
