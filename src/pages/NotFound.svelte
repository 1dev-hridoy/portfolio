<script lang="ts">
  import BlurFade from "../components/BlurFade.svelte";
  let { onHome }: { onHome?: () => void } = $props();
</script>

<BlurFade>
  <div class="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 class="text-6xl font-bold name">404</h1>
    <p class="mt-4 text-xl opacity-60">Page not found</p>
    <p class="mt-2 opacity-50">The page you're looking for doesn't exist or has been moved.</p>
    <button onclick={onHome} class="mt-8 inline-block px-6 py-2.5 bg-black text-white rounded-lg hover:opacity-80 transition-opacity cursor-pointer">Go back home</button>
  </div>
</BlurFade>
