@props(['title', 'subtitle'])
<div class="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#FEE2E2] via-white to-[#DBEAFE] p-4">
  <div class="w-full max-w-md">
    <div class="mb-8 text-center"><x-logo size="lg" class="mb-6" /><h1 class="font-display mb-2 text-3xl font-bold">{{ $title }}</h1><p class="text-[#64748B]">{{ $subtitle }}</p></div>
    <div class="rounded-xl border border-[#E2E8F0] bg-white p-8 shadow-lg">{{ $slot }}</div>
  </div>
</div>
