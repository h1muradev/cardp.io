@extends('layouts.dashboard', ['title' => 'Dashboard'])
@section('content')
<div class="mx-auto max-w-6xl">
  <div class="mb-8"><h1 class="font-display mb-2 text-3xl font-bold">Dashboard</h1><p class="text-[#64748B]">Visão geral do cardápio digital.</p></div>
  <div class="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
    @foreach($stats as $stat)
      <x-card><div class="mb-4 flex items-center justify-between"><span class="text-3xl">{{ $stat['icon'] }}</span><span class="rounded-full bg-green-50 px-2 py-1 text-xs text-green-700">{{ $stat['trend'] }}</span></div><p class="font-display text-3xl font-bold">{{ $stat['value'] }}</p><p class="text-sm text-[#64748B]">{{ $stat['label'] }}</p></x-card>
    @endforeach
  </div>
  <div class="grid gap-6 lg:grid-cols-2">
    <x-card><h2 class="font-display mb-4 text-xl font-bold">Categorias principais</h2><div class="space-y-3">@foreach($categories as $category)<div class="flex items-center justify-between rounded-lg bg-[#F8FAFC] p-3"><div><p class="font-medium">{{ $category['name'] }}</p><p class="text-sm text-[#64748B]">{{ $category['items'] }} itens</p></div><span class="text-sm {{ $category['active'] ? 'text-green-700' : 'text-[#64748B]' }}">{{ $category['active'] ? 'Ativa' : 'Inativa' }}</span></div>@endforeach</div></x-card>
    <x-card><h2 class="font-display mb-4 text-xl font-bold">Pratos recentes</h2><div class="space-y-3">@foreach($dishes as $dish)<div class="flex items-center gap-3"><img src="{{ $dish['image'] }}" alt="{{ $dish['name'] }}" class="h-14 w-14 rounded-lg object-cover"><div class="flex-1"><p class="font-medium">{{ $dish['name'] }}</p><p class="text-sm text-[#64748B]">{{ $dish['category'] }}</p></div><strong class="text-[#DC2626]">R$ {{ number_format($dish['price'], 2, ',', '.') }}</strong></div>@endforeach</div></x-card>
  </div>
</div>
@endsection
