@extends('layouts.dashboard', ['title' => 'Categorias'])
@section('content')
<div class="mx-auto max-w-6xl">
  <div class="mb-8 flex items-center justify-between"><div><h1 class="font-display mb-2 text-3xl font-bold">Categorias</h1><p class="text-[#64748B]">Organize os grupos do cardápio.</p></div><x-button :href="route('dashboard.categories.create')">+ Nova categoria</x-button></div>
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    @foreach($categories as $category)
      <x-card><div class="mb-4 flex items-start justify-between"><div class="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FEE2E2] text-2xl">📁</div><span class="rounded-full px-3 py-1 text-sm {{ $category['active'] ? 'bg-green-50 text-green-700' : 'bg-slate-100 text-[#64748B]' }}">{{ $category['active'] ? 'Ativa' : 'Inativa' }}</span></div><h3 class="font-display mb-2 text-xl font-bold">{{ $category['name'] }}</h3><p class="mb-4 text-[#64748B]">{{ $category['description'] }}</p><p class="mb-5 text-sm text-[#64748B]">{{ $category['items'] }} itens cadastrados</p><x-button :href="route('dashboard.categories.edit', $category['id'])" variant="outline" size="sm">Editar</x-button></x-card>
    @endforeach
  </div>
</div>
@endsection
