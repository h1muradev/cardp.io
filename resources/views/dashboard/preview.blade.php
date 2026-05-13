@extends('layouts.dashboard', ['title' => 'Preview'])
@section('content')
<div class="mx-auto max-w-6xl"><div class="mb-8 flex items-center justify-between"><div><h1 class="font-display mb-2 text-3xl font-bold">Preview</h1><p class="text-[#64748B]">Visualização do cardápio público dentro do painel.</p></div><x-button :href="route('public.menu', 'demo')" variant="outline" target="_blank">Abrir público</x-button></div><div class="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm"><div class="max-h-[760px] overflow-y-auto">@include('public.menu-content', ['restaurant' => $restaurant, 'categories' => $categories, 'isPreview' => true])</div></div></div>
@endsection
