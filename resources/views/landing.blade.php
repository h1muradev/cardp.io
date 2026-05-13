@extends('layouts.app', ['title' => 'cardp.io - Cardápio digital'])
@section('body')
@include('partials.navbar')
<main>
  {{-- LandingPage.tsx convertida para Blade estático com loops @foreach. --}}
  <section class="bg-gradient-to-br from-[#FEE2E2] via-white to-[#DBEAFE] py-20 lg:py-32">
    <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      <h1 class="font-display mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight text-[#111827] lg:text-6xl">Crie e gerencie o cardápio digital do seu restaurante com autonomia</h1>
      <p class="mx-auto mb-8 max-w-3xl text-lg text-[#64748B] lg:text-xl">Atualize pratos, categorias, identidade visual e publique seu menu por link e QR Code sem depender de programador.</p>
      <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <x-button :href="route('register')" size="lg">Criar conta grátis</x-button>
        <x-button href="#demonstracao" variant="outline" size="lg">Ver demonstração</x-button>
      </div>
      <p class="mt-6 text-sm text-[#64748B]">Sem cartão de crédito • Comece em menos de 2 minutos</p>
    </div>
  </section>
  <section class="bg-white py-16">
    <div class="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
      @foreach ([['1.500+', 'Restaurantes ativos'], ['50K+', 'Cardápios visualizados'], ['98%', 'Satisfação'], ['24/7', 'Disponibilidade']] as [$value, $label])
        <div class="text-center"><p class="font-display mb-2 text-4xl font-bold text-[#DC2626]">{{ $value }}</p><p class="text-[#64748B]">{{ $label }}</p></div>
      @endforeach
    </div>
  </section>
  <section id="como-funciona" class="bg-[#F8FAFC] py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-16 text-center"><h2 class="font-display mb-4 text-3xl font-bold lg:text-4xl">Como funciona</h2><p class="text-lg text-[#64748B]">Crie seu cardápio digital em 3 passos simples</p></div>
      <div class="grid gap-8 md:grid-cols-3">
        @foreach ([['Cadastre seu restaurante', 'Crie sua conta em menos de 2 minutos e configure as informações básicas do seu estabelecimento.'], ['Adicione seus pratos', 'Organize por categorias, adicione fotos, descrições e preços. Tudo de forma simples e intuitiva.'], ['Publique e compartilhe', 'Gere seu QR Code e link público. Seus clientes já podem acessar o cardápio digital.']] as $index => [$title, $text])
          <x-card><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#FEE2E2]"><span class="font-display text-xl font-bold text-[#DC2626]">{{ $index + 1 }}</span></div><h3 class="font-display mb-3 text-xl font-bold">{{ $title }}</h3><p class="text-[#64748B]">{{ $text }}</p></x-card>
        @endforeach
      </div>
    </div>
  </section>
  <section id="recursos" class="bg-white py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-16 text-center"><h2 class="font-display mb-4 text-3xl font-bold lg:text-4xl">Todos os recursos que você precisa</h2><p class="text-lg text-[#64748B]">Ferramenta completa para gerenciar seu cardápio digital</p></div>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        @foreach ([['📱', 'Cardápio responsivo', 'Visual perfeito em celular, tablet e desktop.'], ['▦', 'QR Code automático', 'Compartilhe seu menu em mesas, balcão e redes sociais.'], ['🎨', 'Personalização visual', 'Cores, fontes e identidade do seu restaurante.'], ['👁️', 'Preview em tempo real', 'Veja como clientes enxergam o cardápio.'], ['⭐', 'Pratos em destaque', 'Valorize itens estratégicos do menu.'], ['✅', 'Gestão simples', 'Controle categorias, status, preços e descrições.']] as [$icon, $title, $text])
          <x-card><div class="mb-4 text-3xl">{{ $icon }}</div><h3 class="font-display mb-3 text-xl font-bold">{{ $title }}</h3><p class="text-[#64748B]">{{ $text }}</p></x-card>
        @endforeach
      </div>
    </div>
  </section>
  <section id="demonstracao" class="bg-[#F8FAFC] py-20">
    <div class="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div><h2 class="font-display mb-4 text-3xl font-bold lg:text-4xl">Veja a base funcionando</h2><p class="mb-6 text-lg text-[#64748B]">Acesse o dashboard estático convertido para Laravel ou abra o cardápio público de demonstração.</p><div class="flex flex-wrap gap-3"><x-button :href="route('dashboard.index')">Abrir dashboard</x-button><x-button :href="route('public.menu', 'demo')" variant="outline">Ver cardápio público</x-button></div></div>
      <x-card class="p-0 overflow-hidden"><img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=600&fit=crop" alt="Restaurante" class="h-80 w-full object-cover"></x-card>
    </div>
  </section>
</main>
@include('partials.footer')
@endsection
