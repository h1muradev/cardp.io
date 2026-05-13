@extends('layouts.dashboard', ['title' => 'Pratos'])
@section('content')
<div class="mx-auto max-w-6xl">
  <div class="mb-8 flex items-center justify-between"><div><h1 class="font-display mb-2 text-3xl font-bold">Pratos</h1><p class="text-[#64748B]">Gerencie o cardápio do restaurante.</p></div><x-button :href="route('dashboard.dishes.create')">+ Novo prato</x-button></div>
  <x-card class="mb-6"><div data-filter-list="dishes" class="grid gap-4 md:grid-cols-2"><input data-search class="field" placeholder="Buscar pratos..."><select data-category-filter class="field"><option value="all">Todas as categorias</option>@foreach($categories as $category)<option value="{{ $category['name'] }}">{{ $category['name'] }}</option>@endforeach</select></div></x-card>
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    @foreach($dishes as $dish)
      <x-card no-padding data-filter-card="dishes" data-name="{{ $dish['name'] }}" data-category="{{ $dish['category'] }}" class="overflow-hidden"><div class="relative"><img src="{{ $dish['image'] }}" alt="{{ $dish['name'] }}" class="h-48 w-full object-cover">@if($dish['featured'])<span class="absolute right-3 top-3 rounded-full bg-[#F59E0B] px-2 py-1 text-xs text-white">⭐ Destaque</span>@endif @unless($dish['active'])<div class="absolute inset-0 flex items-center justify-center bg-slate-900/60"><span class="rounded-full bg-white px-3 py-1 text-sm text-[#64748B]">Inativo</span></div>@endunless</div><div class="p-5"><h3 class="mb-1 font-medium">{{ $dish['name'] }}</h3><p class="mb-3 text-sm text-[#64748B]">{{ $dish['category'] }}</p><p class="font-display mb-4 text-xl font-bold text-[#DC2626]">R$ {{ number_format($dish['price'], 2, ',', '.') }}</p><x-button :href="route('dashboard.dishes.edit', $dish['id'])" variant="outline" size="sm" class="w-full">Editar</x-button></div></x-card>
    @endforeach
  </div>
</div>
@endsection
