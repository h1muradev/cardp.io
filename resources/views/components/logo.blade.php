@props(['href' => route('home'), 'size' => 'md'])
@php($box = $size === 'lg' ? 'w-10 h-10 text-xl' : 'w-8 h-8 text-lg')
<a href="{{ $href }}" {{ $attributes->merge(['class' => 'inline-flex items-center space-x-2']) }}>
  {{-- Componente Blade reutilizável que substitui o bloco de logo repetido no React. --}}
  <span class="{{ $box }} flex items-center justify-center rounded-lg bg-[#DC2626] font-bold text-white">C</span>
  <span class="font-display font-bold {{ $size === 'lg' ? 'text-2xl' : 'text-xl' }} text-[#111827]">Cardáp.io</span>
</a>
