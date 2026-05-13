<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>{{ $title ?? 'cardp.io' }}</title>
  @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
  {{-- Layout base compartilhado por páginas públicas, auth e dashboard. --}}
  @yield('body')
</body>
</html>
