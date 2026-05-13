@extends('layouts.app', ['title' => ($title ?? 'Dashboard').' - cardp.io'])
@section('body')
<div class="min-h-screen bg-[#F8FAFC]">
  {{-- Layout do dashboard substitui DashboardLayout.tsx. --}}
  <header class="sticky top-0 z-40 border-b border-[#E2E8F0] bg-white">
    <div class="flex h-16 items-center justify-between px-4 lg:px-8">
      <div class="flex items-center gap-4"><button class="text-2xl lg:hidden" data-toggle="#dashboard-sidebar">☰</button><x-logo :href="route('dashboard.index')" /></div>
      <div class="flex items-center gap-4"><a href="{{ route('public.menu', 'demo') }}" target="_blank" class="text-sm text-[#64748B] hover:text-[#DC2626]">Ver cardápio público</a><a href="{{ route('login') }}" class="text-sm font-medium text-[#64748B] hover:text-[#DC2626]">Sair</a></div>
    </div>
  </header>
  <div class="flex">
    @include('partials.dashboard-sidebar')
    <main class="flex-1 p-4 lg:p-8">@if(session('status'))<div class="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-700">{{ session('status') }}</div>@endif @yield('content')</main>
  </div>
</div>
@endsection
