<script lang="ts">
  import sky from "../assets/bg1.webp";
  import aurora from "../assets/bg2.webp";
</script>

<div class="ambient" aria-hidden="true">
  <img src={sky} alt="" class="ambient-sky" />
  <img src={aurora} alt="" class="ambient-aurora" />
  <div class="ambient-veil"></div>
</div>

<style>
  .ambient {
    position: fixed;
    inset: 0;
    z-index: -10;
    overflow: hidden;
    pointer-events: none;
  }

  .ambient-sky,
  .ambient-aurora {
    position: absolute;
    display: block;
    max-width: none;
    will-change: transform;
  }

  /*
   * bg1 is a sky-blue -> warm-earth gradient. Full-bleed and blurred so only
   * its colour field reads, giving the page a soft top-lit atmosphere.
   */
  .ambient-sky {
    inset: -6%;
    width: 112%;
    height: 112%;
    object-fit: cover;
    object-position: center 30%;
    opacity: 0.6;
    filter: blur(28px) saturate(1.05);
    animation: sky-drift 90s ease-in-out infinite alternate;
  }

  /*
   * bg2 runs lavender -> blue -> deep green. Dropped in as a huge soft orb
   * off the top-right corner so its cooler violet end bleeds into the page.
   */
  .ambient-aurora {
    top: -30%;
    right: -26%;
    width: min(88vw, 1000px);
    height: min(88vw, 1000px);
    border-radius: 50%;
    object-fit: cover;
    opacity: 0.55;
    filter: blur(50px) saturate(1.1);
    animation: aurora-drift 70s ease-in-out infinite alternate;
  }

  /* Fades the colour into the site's off-white so text keeps its contrast. */
  .ambient-veil {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgb(251 250 249 / 0.3) 0%,
      rgb(251 250 249 / 0.72) 20%,
      rgb(251 250 249 / 0.92) 42%,
      #fbfaf9 64%
    );
  }

  @keyframes sky-drift {
    from {
      transform: scale(1.02) translate3d(0, 0, 0);
    }
    to {
      transform: scale(1.08) translate3d(-1.5%, 1.2%, 0);
    }
  }

  @keyframes aurora-drift {
    from {
      transform: translate3d(0, 0, 0) scale(1);
    }
    to {
      transform: translate3d(-5%, 6%, 0) scale(1.14);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .ambient-sky,
    .ambient-aurora {
      animation: none;
    }
  }
</style>