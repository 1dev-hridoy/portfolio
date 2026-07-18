<script lang="ts">
  let {
    name = "",
    thumbnail = "",
    description = "",
    tags = [] as string[],
    liveUrl = "",
    githubUrl = "",
  } = $props();

  let imgErrored = $state(false);
</script>

<div class="group border border-[#e0e0e0] rounded-lg overflow-hidden transition-all duration-200 hover:border-black/20 hover:shadow-sm">
  {#if thumbnail && thumbnail !== "#" && !imgErrored}
    <div class="w-full aspect-video overflow-hidden bg-[#f5f5f5]">
      <img
        src={thumbnail}
        alt={name}
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        onerror={() => imgErrored = true}
      />
    </div>
  {:else}
    <div class="w-full aspect-video bg-[#f0f0f0] flex items-center justify-center">
      <span class="opacity-30 text-sm">{name?.charAt(0) || "?"}</span>
    </div>
  {/if}
  <div class="p-4">
    <h3 class="font-medium name">{name}</h3>
    <p class="mt-1.5 text-sm opacity-60 leading-relaxed">{description}</p>
    {#if tags.length > 0}
      <div class="mt-3 flex flex-wrap gap-1.5">
        {#each tags as tag}
          <span class="text-[11px] px-2 py-0.5 rounded-full" style="background-color: #EDEDED;">{tag}</span>
        {/each}
      </div>
    {/if}
    <div class="mt-3 flex gap-3">
      {#if liveUrl && liveUrl !== "#"}
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" class="text-sm link">Live</a>
      {/if}
      {#if githubUrl && githubUrl !== "#"}
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" class="text-sm link">GitHub</a>
      {/if}
    </div>
  </div>
</div>
