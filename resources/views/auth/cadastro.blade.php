@extends('layouts.app', ['title' => 'Criar conta - cardp.io'])
@section('body')
<x-auth-shell title="Crie sua conta" subtitle="Comece a gerenciar seu cardápio digital agora">
  <form method="POST" action="{{ route('demo.submit') }}" class="space-y-5">@csrf
    <input type="hidden" name="redirect_to" value="{{ route('dashboard.index') }}">
    <x-form-field label="Nome do restaurante" name="restaurantName" placeholder="Restaurante Don Giovanni" />
    <x-form-field label="E-mail" name="email" type="email" placeholder="voce@restaurante.com" />
    <div class="relative"><x-form-field label="Senha" name="password" type="password" helper="Use 8+ caracteres, letras e números." /><button type="button" data-password-toggle="#password" class="absolute right-3 top-[34px]">👁️</button></div>
    <div class="relative"><x-form-field label="Confirmar senha" name="confirmPassword" type="password" /><button type="button" data-password-toggle="#confirmPassword" class="absolute right-3 top-[34px]">👁️</button></div>
    <x-button type="submit" class="w-full">Criar conta grátis</x-button>
  </form>
  <p class="mt-6 text-center text-sm text-[#64748B]">Já tem conta? <a class="font-medium text-[#DC2626]" href="{{ route('login') }}">Entrar</a></p>
</x-auth-shell>
@endsection
