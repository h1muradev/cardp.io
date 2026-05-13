@extends('layouts.app', ['title' => 'Recuperar senha - cardp.io'])
@section('body')
<x-auth-shell title="Recuperar senha" subtitle="Informe seu e-mail para receber as instruções">
  <form method="POST" action="{{ route('demo.submit') }}" class="space-y-5">@csrf
    <input type="hidden" name="redirect_to" value="{{ route('login') }}">
    <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#FEE2E2] text-2xl">✉️</div>
    <x-form-field label="E-mail" name="email" type="email" placeholder="voce@restaurante.com" />
    <x-button type="submit" class="w-full">Enviar instruções</x-button>
  </form>
  <a href="{{ route('login') }}" class="mt-6 block text-center text-sm text-[#64748B] hover:text-[#DC2626]">← Voltar para login</a>
</x-auth-shell>
@endsection
