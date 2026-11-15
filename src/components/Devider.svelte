<script lang="ts">
  let { accent = false }: { accent?: boolean } = $props();
</script>

<div class="divider w-full h-[1px] mt-8" class:accent></div>

<style>
  .divider {
    background-color: #e0e0e0;
  }

  /*
   * A hairline tinted with bg2's lavender -> blue range, used to mark the
   * start of a major section without adding visual weight.
   */
  .divider.accent {
    height: 2px;
    background-image: linear-gradient(90deg, #e7cceb 0%, #d6d9f7 50%, #b8cee1 100%);
    background-size: 200% 100%;
    animation: accent-slide 14s ease-in-out infinite alternate;
  }

  @keyframes accent-slide {
    from {
      background-position: 0% 50%;
    }
    to {
      background-position: 100% 50%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .divider.accent {
      animation: none;
    }
  }
</style>