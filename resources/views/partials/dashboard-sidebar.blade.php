<aside id="dashboard-sidebar" class="fixed inset-y-16 left-0 z-30 hidden w-64 border-r border-[#E2E8F0] bg-white lg:static lg:block lg:min-h-[calc(100vh-4rem)]">
  @php($items = [
    ['Dashboard', '📊', route('dashboard.index'), 'dashboard.index'],
    ['Categorias', '📁', route('dashboard.categories'), 'dashboard.categories'],
    ['Pratos', '🍽️', route('dashboard.dishes'), 'dashboard.dishes'],
    ['Personalizar', '🎨', route('dashboard.customize'), 'dashboard.customize'],
    ['Dados do restaurante', '🏪', route('dashboard.restaurant-data'), 'dashboard.restaurant-data'],
    ['QR Code', '▦', route('dashboard.qrcode'), 'dashboard.qrcode'],
    ['Preview', '👁️', route('dashboard.preview'), 'dashboard.preview'],
  ])
  <nav class="space-y-1 p-4">
    @foreach($items as [$label, $icon, $href, $route])
      <a href="{{ $href }}" class="flex items-center gap-3 rounded-lg px-4 py-3 font-medium transition-colors {{ request()->routeIs($route) ? 'bg-[#FEE2E2] text-[#DC2626]' : 'text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#111827]' }}"><span>{{ $icon }}</span>{{ $label }}</a>
    @endforeach
  </nav>
</aside>
