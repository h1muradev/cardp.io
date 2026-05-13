<nav class="sticky top-0 z-40 border-b border-[#E2E8F0] bg-white">
  {{-- Navbar pública: o menu mobile usa JS puro em vez de useState. --}}
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <x-logo />
      <div class="hidden items-center space-x-8 md:flex">
        @foreach ([['Início', route('home')], ['Como funciona', route('home').'#como-funciona'], ['Recursos', route('home').'#recursos'], ['Demonstração', route('home').'#demonstracao'], ['Contato', route('home').'#contato']] as [$label, $href])
          <a href="{{ $href }}" class="font-medium text-[#64748B] transition-colors hover:text-[#DC2626]">{{ $label }}</a>
        @endforeach
      </div>
      <div class="hidden items-center space-x-3 md:flex">
        <x-button :href="route('login')" variant="ghost">Entrar</x-button>
        <x-button :href="route('register')">Criar conta</x-button>
      </div>
      <button class="text-2xl md:hidden" data-toggle="#mobile-nav" aria-label="Abrir menu">☰</button>
    </div>
  </div>
  <div id="mobile-nav" class="hidden border-t border-[#E2E8F0] bg-white md:hidden">
    <div class="space-y-3 px-4 py-4">
      @foreach ([['Início', route('home')], ['Como funciona', route('home').'#como-funciona'], ['Recursos', route('home').'#recursos'], ['Demonstração', route('home').'#demonstracao'], ['Contato', route('home').'#contato']] as [$label, $href])
        <a href="{{ $href }}" class="block py-2 font-medium text-[#64748B] hover:text-[#DC2626]">{{ $label }}</a>
      @endforeach
      <x-button :href="route('login')" variant="ghost" class="w-full">Entrar</x-button>
      <x-button :href="route('register')" class="w-full">Criar conta</x-button>
    </div>
  </div>
</nav>
