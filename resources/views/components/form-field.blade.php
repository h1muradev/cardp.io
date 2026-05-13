@props(['label', 'name', 'type' => 'text', 'value' => '', 'placeholder' => '', 'textarea' => false, 'helper' => null])
<div>
  <label for="{{ $name }}" class="label">{{ $label }}</label>
  @if($textarea)
    <textarea id="{{ $name }}" name="{{ $name }}" rows="{{ $attributes->get('rows', 4) }}" placeholder="{{ $placeholder }}" class="field">{{ old($name, $value) }}</textarea>
  @else
    <input id="{{ $name }}" name="{{ $name }}" type="{{ $type }}" value="{{ old($name, $value) }}" placeholder="{{ $placeholder }}" class="field">
  @endif
  @if($helper)<p class="mt-1.5 text-sm text-[#64748B]">{{ $helper }}</p>@endif
</div>
