@props(['variant' => 'primary', 'size' => 'md', 'href' => null, 'type' => 'button'])
@php($classes = 'btn btn-'.$variant.' btn-'.$size)
@if($href)
  <a href="{{ $href }}" {{ $attributes->merge(['class' => $classes]) }}>{{ $slot }}</a>
@else
  <button type="{{ $type }}" {{ $attributes->merge(['class' => $classes]) }}>{{ $slot }}</button>
@endif
