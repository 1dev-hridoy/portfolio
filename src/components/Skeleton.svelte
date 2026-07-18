<script lang="ts">
  export let width = "100%";
  export let height = "1em";
  export let borderRadius = "4px";
  export let count = 1;
</script>

{#each Array(count) as _}
  <div
    class="skeleton"
    style="width: {width}; height: {height}; border-radius: {borderRadius};"
  ></div>
{/each}
