# cardp.io

**cardp.io** é uma base de cardápio digital para restaurantes. O projeto nasceu como uma interface criada no Figma Maker com IA e refinada em React; esta versão converte a experiência para uma estrutura **PHP/Laravel + Blade + Vite**, mais próxima de um backend tradicional e pronta para evoluir com autenticação, banco de dados e regras de negócio reais.

## Objetivo da conversão

A conversão remove React, React Router, hooks e componentes TSX, substituindo-os por:

- rotas Laravel em `routes/web.php`;
- controller PHP em `app/Http/Controllers/PageController.php`;
- views Blade em `resources/views`;
- componentes Blade reutilizáveis em `resources/views/components`;
- CSS/JavaScript modernos compilados pelo Vite em `resources/css/app.css` e `resources/js/app.js`.

A prioridade desta primeira base é preservar o visual, organizar o código de forma didática e deixar telas inicialmente estáticas prontas para receber persistência em banco de dados.

## Análise rápida do React original

### Partes convertidas para Blade

- `LandingPage.tsx` virou `resources/views/landing.blade.php`.
- Telas de auth (`Login`, `Cadastro`, `RecuperarSenha`, `RedefinirSenha`) viraram views em `resources/views/auth`.
- `DashboardLayout.tsx` virou `resources/views/layouts/dashboard.blade.php` + `resources/views/partials/dashboard-sidebar.blade.php`.
- Páginas do painel (`Dashboard`, `Categorias`, `Pratos`, `Personalizar`, `DadosRestaurante`, `QRCodePage`, `Preview`) viraram views em `resources/views/dashboard`.
- `CardapioPublico.tsx` virou `resources/views/public/menu.blade.php` e `resources/views/public/menu-content.blade.php`.
- Componentes React simples (`Button`, `Card`, `Input`, `Navbar`) viraram componentes/partials Blade.

### Partes que precisam de JavaScript

O React usava `useState` para interações simples. Agora elas ficam em JavaScript puro em `resources/js/app.js`:

- abrir/fechar menu mobile;
- mostrar/ocultar senha;
- alternar abas de categorias no cardápio público;
- filtrar visualmente pratos em listas estáticas.

### Partes que viraram componentes reutilizáveis

- `x-logo`: logo do cardp.io;
- `x-button`: botões com variações de cor e tamanho;
- `x-card`: cards padrão;
- `x-form-field`: campos de formulário;
- `x-auth-shell`: estrutura compartilhada das telas de autenticação;
- partials de navegação pública, rodapé e sidebar do dashboard.

### Dependências React substituídas

- `react`, `react-dom`, `react-router-dom` foram removidos.
- `lucide-react` foi substituído por emojis/símbolos simples para manter a base sem React.
- `qrcode.react` foi substituído por uma URL de geração de QR Code estática, que pode ser trocada no futuro por uma lib PHP.
- `@vitejs/plugin-react` foi removido.

## Tecnologias usadas

- PHP 8.2+
- Laravel 12
- Blade
- Vite
- Tailwind CSS 4
- JavaScript puro
- SQLite por padrão para desenvolvimento local

## Requisitos

- PHP 8.2 ou superior
- Composer
- Node.js 20+ ou superior
- npm
- Extensões PHP comuns do Laravel habilitadas

## Instalação

```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
```

Se usar SQLite, crie o arquivo de banco:

```bash
mkdir -p database
touch database/database.sqlite
```

Depois, rode migrations caso existam ou quando você adicioná-las:

```bash
php artisan migrate
```

## Rodando o projeto

Em dois terminais:

```bash
npm run dev
```

```bash
php artisan serve
```

Acesse normalmente em:

```text
http://127.0.0.1:8000
```

Para gerar assets de produção:

```bash
npm run build
```

## Estrutura de pastas

```text
app/Http/Controllers/PageController.php    Controller principal com dados estáticos e rotas de tela
routes/web.php                            Rotas públicas, auth demonstrativo, dashboard e cardápio público
resources/views/layouts                   Layouts base do app e dashboard
resources/views/partials                  Navbar, footer e sidebar
resources/views/components                Componentes Blade reutilizáveis
resources/views/auth                      Telas de login, cadastro e senhas
resources/views/dashboard                 Telas administrativas
resources/views/public                    Cardápio público e conteúdo compartilhado com preview
resources/css/app.css                     Tailwind, fontes, tokens visuais e classes de componentes
resources/js/app.js                       Interações pequenas em JavaScript puro
public/                                   Entrada pública e assets compilados pelo Vite
```

## Principais rotas

| Rota | Nome | Descrição |
| --- | --- | --- |
| `/` | `home` | Landing page pública |
| `/login` | `login` | Login demonstrativo |
| `/cadastro` | `register` | Cadastro demonstrativo |
| `/recuperar-senha` | `password.request` | Recuperação de senha demonstrativa |
| `/redefinir-senha` | `password.reset` | Redefinição de senha demonstrativa |
| `/dashboard` | `dashboard.index` | Visão geral administrativa |
| `/dashboard/categorias` | `dashboard.categories` | Lista de categorias |
| `/dashboard/pratos` | `dashboard.dishes` | Lista de pratos |
| `/dashboard/personalizar` | `dashboard.customize` | Personalização visual |
| `/dashboard/dados` | `dashboard.restaurant-data` | Dados do restaurante |
| `/dashboard/qrcode` | `dashboard.qrcode` | QR Code do cardápio |
| `/dashboard/preview` | `dashboard.preview` | Preview do cardápio público |
| `/cardapio/{slug?}` | `public.menu` | Cardápio público acessado por clientes |

## Views Blade

- `layouts/app.blade.php`: HTML base com `@vite`.
- `layouts/dashboard.blade.php`: estrutura do painel administrativo.
- `landing.blade.php`: página comercial do produto.
- `auth/*.blade.php`: telas de autenticação ainda demonstrativas.
- `dashboard/*.blade.php`: páginas administrativas estáticas.
- `public/menu.blade.php`: wrapper do cardápio público.
- `public/menu-content.blade.php`: conteúdo reutilizado no público e no preview.

## Componentes e partials

- `components/logo.blade.php`: logo reutilizável.
- `components/button.blade.php`: botão com variantes `primary`, `secondary`, `outline` e `ghost`.
- `components/card.blade.php`: container visual padronizado.
- `components/form-field.blade.php`: campo de formulário comum.
- `components/auth-shell.blade.php`: layout comum das páginas de auth.
- `partials/navbar.blade.php`: navegação pública.
- `partials/footer.blade.php`: rodapé.
- `partials/dashboard-sidebar.blade.php`: menu lateral do painel.

## Observações sobre a adaptação

- Os arrays mockados do React foram centralizados no `PageController` para simular dados vindos do backend.
- `map()` foi substituído por `@foreach`.
- condicionais JSX foram substituídas por `@if`, `@unless`, `@selected` e `@checked`.
- props de componentes React viraram atributos/variáveis Blade.
- estados locais simples viraram JavaScript puro ou renderização server-side.
- os formulários fazem POST para uma rota demonstrativa (`/demo-submit`) até que autenticação e persistência reais sejam implementadas.

## Próximos passos sugeridos

1. Instalar Laravel Breeze ou implementar autenticação própria.
2. Criar models e migrations para restaurantes, categorias e pratos.
3. Persistir dados em banco e substituir arrays estáticos do `PageController`.
4. Implementar upload de imagens.
5. Gerar QR Codes pelo backend com uma biblioteca PHP.
6. Adicionar testes HTTP para rotas principais.
7. Criar autorização para isolar dados por restaurante/usuário.
8. Melhorar SEO do cardápio público.

## Como contribuir ou continuar o desenvolvimento

- Mantenha telas em Blade sem React/Inertia.
- Prefira componentes Blade para trechos reutilizáveis.
- Centralize regras de backend em controllers, services, requests e models.
- Documente novas rotas e comandos neste README.
- Rode `npm run build` antes de publicar alterações de assets.
