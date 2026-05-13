@props(['noPadding' => false])
<div {{ $attributes->merge(['class' => 'card'.($noPadding ? '' : ' p-6')]) }}>
  {{ $slot }}
</div>
