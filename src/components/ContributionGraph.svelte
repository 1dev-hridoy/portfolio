<script lang="ts">
  import Skeleton from "./Skeleton.svelte";
  let { username = "1dev-hridoy" } = $props();

  let loaded = $state(false);
  let errored = $state(false);

  let src = $derived(`https://ghchart.rshah.org/${username}`);

  function onLoad() { loaded = true; }
  function onError() { loaded = true; errored = true; }
</script>

<div class="w-full overflow-x-auto">
  {#if !loaded}
    <Skeleton width="100%" height="128px" borderRadius="8px" />
  {/if}
  {#if errored}
    <p class="opacity-50 text-sm">Could not load contribution graph.</p>
  {/if}
  <img
    {src}
    alt="GitHub contribution graph for {username}"
    class="w-full max-h-32 object-contain {loaded && !errored ? 'block' : 'hidden'}"
    onload={onLoad}
    onerror={onError}
  />
</div>
