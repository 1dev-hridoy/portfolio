<script lang="ts">
  import type { Certificate } from "../lib/certificates";

  let { certificate, onOpen }: { certificate: Certificate; onOpen: (c: Certificate) => void } = $props();
</script>

<button
  type="button"
  onclick={() => onOpen(certificate)}
  class="group flex flex-col text-left rounded-lg overflow-hidden border border-[#e0e0e0] bg-white/50 transition-all duration-200 hover:border-black/25 hover:shadow-[0_2px_10px_-4px_rgba(0,0,0,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]/40"
>
  <div class="w-full aspect-[4/3] overflow-hidden bg-[#f0f0f0] border-b border-[#e0e0e0]">
    <img
      src={certificate.src}
      alt={certificate.alt}
      loading="lazy"
      decoding="async"
      class="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
    />
  </div>
  <div class="p-3.5">
    <p class="name font-medium leading-snug">{certificate.title}</p>
    <p class="mt-1 text-sm opacity-60 leading-snug">{certificate.issuer}</p>
    <div class="mt-2.5 flex items-center justify-between gap-2">
      <span class="text-[11px] px-2 py-0.5 rounded-full bg-[#EDEDED] opacity-70">{certificate.year}</span>
      <span class="text-xs opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-60 group-hover:translate-x-0">
        View &rarr;
      </span>
    </div>
  </div>
</button>