@extends('layouts.app', ['title' => 'Entrar - cardp.io'])
@section('body')
<x-auth-shell title="Entrar" subtitle="Acesse o painel do seu restaurante">
  <form method="POST" action="{{ route('demo.submit') }}" class="space-y-5">@csrf
    <input type="hidden" name="redirect_to" value="{{ route('dashboard.index') }}">
    <x-form-field label="E-mail" name="email" type="email" placeholder="demo@cardap.io" />
    <div class="relative"><x-form-field label="Senha" name="password" type="password" placeholder="••••••••" /><button type="button" data-password-toggle="#password" class="absolute right-3 top-[34px]">👁️</button></div>
    <div class="flex items-center justify-between text-sm"><label class="flex gap-2 text-[#64748B]"><input type="checkbox"> Lembrar-me</label><a href="{{ route('password.request') }}" class="text-[#DC2626]">Esqueci minha senha</a></div>
    <x-button type="submit" class="w-full">Entrar</x-button>
  </form>
  <p class="mt-6 text-center text-sm text-[#64748B]">Ainda não tem conta? <a class="font-medium text-[#DC2626]" href="{{ route('register') }}">Criar conta</a></p>
</x-auth-shell>
@endsection
