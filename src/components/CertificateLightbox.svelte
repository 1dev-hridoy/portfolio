<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import type { Certificate } from "../lib/certificates";

  let { certificate, onClose }: { certificate: Certificate | null; onClose: () => void } = $props();

  let dialogEl = $state<HTMLDivElement>();
  let previouslyFocused: HTMLElement | null = null;

  const FOCUSABLE =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function onKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      onClose();
      return;
    }

    // Keep Tab focus inside the dialog while it is open.
    if (e.key !== "Tab" || !dialogEl) return;
    const items = [...dialogEl.querySelectorAll<HTMLElement>(FOCUSABLE)];
    if (items.length === 0) return;

    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;

    if (e.shiftKey && (active === first || !dialogEl.contains(active))) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function onBackdrop(e: MouseEvent) {
    if (e.target === e.currentTarget) onClose();
  }

  $effect(() => {
    if (!certificate) return;

    previouslyFocused = document.activeElement as HTMLElement | null;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeydown);

    // Move focus into the dialog once it has mounted.
    requestAnimationFrame(() => dialogEl?.focus());

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeydown);
      previouslyFocused?.focus?.();
    };
  });
</script>

{#if certificate}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/60 backdrop-blur-sm"
    transition:fade={{ duration: 150 }}
    role="presentation"
    onclick={onBackdrop}
    onkeydown={onKeydown}
  >
    <div
      bind:this={dialogEl}
      class="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg bg-[#fbfaf9] shadow-2xl outline-none"
      transition:fly={{ y: 12, duration: 200 }}
      role="dialog"
      aria-modal="true"
      aria-label={certificate.title}
      tabindex="-1"
    >
      <div class="flex items-start justify-between gap-4 p-4 border-b border-[#e0e0e0]">
        <div class="min-w-0">
          <h2 class="name font-medium truncate">{certificate.title}</h2>
          <p class="mt-0.5 text-sm opacity-60 truncate">{certificate.issuer} &middot; {certificate.year}</p>
        </div>
        <button
          type="button"
          onclick={onClose}
          aria-label="Close"
          class="shrink-0 -mt-0.5 -mr-0.5 p-1.5 rounded-md opacity-50 transition-opacity duration-200 hover:opacity-100 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]/40"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
            <path d="M4 4l8 8M12 4l-8 8" />
          </svg>
        </button>
      </div>

      <div class="p-3 sm:p-4">
        <img
          src={certificate.src}
          alt={certificate.alt}
          class="w-full h-auto rounded-md border border-[#e0e0e0]"
        />
        {#if certificate.detail}
          <p class="mt-3 text-sm opacity-60 leading-relaxed">{certificate.detail}</p>
        {/if}
      </div>
    </div>
  </div>
{/if}