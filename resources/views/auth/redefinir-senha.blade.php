@extends('layouts.app', ['title' => 'Redefinir senha - cardp.io'])
@section('body')
<x-auth-shell title="Redefinir senha" subtitle="Crie uma nova senha segura">
  <form method="POST" action="{{ route('demo.submit') }}" class="space-y-5">@csrf
    <input type="hidden" name="redirect_to" value="{{ route('login') }}">
    <div class="relative"><x-form-field label="Nova senha" name="password" type="password" /><button type="button" data-password-toggle="#password" class="absolute right-3 top-[34px]">👁️</button></div>
    <div class="relative"><x-form-field label="Confirmar nova senha" name="confirmPassword" type="password" /><button type="button" data-password-toggle="#confirmPassword" class="absolute right-3 top-[34px]">👁️</button></div>
    <x-button type="submit" class="w-full">Salvar nova senha</x-button>
  </form>
</x-auth-shell>
@endsection
