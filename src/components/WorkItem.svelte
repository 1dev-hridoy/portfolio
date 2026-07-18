<script lang="ts">
  let { year = 0, items = [] as { description: string; href?: string; category: string }[] } = $props();
</script>

<div class="mt-5 flex justify-between gap-8">
  <div class="opacity-50">
    <p>{year}</p>
  </div>
  <div class="flex-1 flex flex-col gap-2">
    {#each items as item}
      <div class="group flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-2 sm:items-baseline">
        <a
          href={item.href ?? "#"}
          class="block flex-1 transition-all duration-200 ease-out group-hover:translate-x-[4px] group-hover:text-blue-600"
        >
          <p>{item.description}</p>
        </a>
        <a
          href={item.href ?? "#"}
          class="block opacity-50 transition-all duration-200 ease-out group-hover:text-[#2563eb]"
        >
          <p>{item.category}</p>
        </a>
      </div>
    {/each}
  </div>
</div>
