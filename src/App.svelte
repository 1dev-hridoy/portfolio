<script lang="ts">
import { onMount } from "svelte";
import Devider from "./components/Devider.svelte";
import Stack from "./components/Stack.svelte";
import WorkItem from "./components/WorkItem.svelte";
import BlurFade from "./components/BlurFade.svelte";
import NumberTicker from "./components/NumberTicker.svelte";
import Skeleton from "./components/Skeleton.svelte";
import ContributionGraph from "./components/ContributionGraph.svelte";
import NotFound from "./pages/NotFound.svelte";
import ServerError from "./pages/ServerError.svelte";
import { slotText } from "slot-text/svelte";
import "slot-text/style.css";
import coverImage from "./assets/hridoyXQC.jpg";
import CertificateCard from "./components/CertificateCard.svelte";
import CertificateLightbox from "./components/CertificateLightbox.svelte";
import AmbientBackground from "./components/AmbientBackground.svelte";
import { certificates, type Certificate } from "./lib/certificates";

let activeCertificate = $state<Certificate | null>(null);

let page = $state("home");
let loading = $state(true);

function goHome() {
  page = "home";
  loading = true;
  history.pushState({}, "", "/");
  setTimeout(() => { loading = false; }, 600);
}

function dhakaTime(): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Dhaka",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());
}

let time = $state(dhakaTime());
let copied = $state(false);

function copyEmail() {
  const email = "hridoy@scriptysphere.org";
  navigator.clipboard.writeText(email);
  copied = true;
  setTimeout(() => { copied = false; }, 2000);
}

const works = [
  {
    year: 2026,
    items: [
      { description: "Wass", href: "https://wass.website/", category: "Assistant" },
      { description: "BuyMeACha", href: "https://buymeacha.com/", category: "Platform" },
      { description: "TukroAI", href: "https://www.tukroai.online/", category: "AI" },
      { description: "Clave-App", href: "https://clave-app.onrender.com/", category: "Open Source" },
      { description: "PixelForge", href: "https://www.pixelforge.giize.com", category: "Boilerplate" },
      { description: "AI Girlfriend CLI Chat", href: "https://github.com/1dev-hridoy/cli-gf", category: "CLI" },
      { description: "TextBehind", href: "#", category: "Tool" },
      { description: "TextCraft AI - WP Plugin", href: "https://github.com/1dev-hridoy/TextCraft-AI", category: "Plugin" },
      { description: "NexaSim-v2", href: "https://github.com/1dev-hridoy/NexaSim-v2", category: "Bot" },
    ],
  },
];

onMount(() => {
  const path = location.pathname.slice(1);
  if (path && path !== "") {
    page = "404";
    return;
  }

  window.onerror = () => { page = "500"; };
  window.addEventListener("unhandledrejection", () => { page = "500"; });

  setTimeout(() => { loading = false; }, 600);
  setInterval(() => { time = dhakaTime(); }, 1000);
});
</script>

{#if page === "404"}
  <main class="mx-auto w-[90%] max-w-[560px] mb-10">
    <NotFound onHome={goHome} />
  </main>
{:else if page === "500"}
  <main class="mx-auto w-[90%] max-w-[560px] mb-10">
    <ServerError onHome={goHome} />
  </main>
{:else}
  <AmbientBackground />
  <main class="mx-auto w-[90%] max-w-[560px] mb-10 page-reveal">
    {#if loading}
      <div class="mt-[50px] lg:mt-[100px]">
        <Skeleton width="200px" height="32px" borderRadius="4px" />
        <div class="mt-2"><Skeleton width="140px" height="16px" borderRadius="4px" /></div>
        <div class="mt-6"><Skeleton width="100%" height="14px" count={3} /></div>
        <div class="mt-6"><Skeleton width="100%" height="14px" count={4} /></div>
        <div class="mt-6"><Skeleton width="100%" height="14px" count={2} /></div>
      </div>
    {:else}
      <BlurFade>
        <div class="cover-mat relative w-full rounded-lg overflow-hidden mt-[50px] lg:mt-[100px] mb-6">
          <img
            src={coverImage}
            alt="Cover"
            class="relative w-full h-[170px] object-cover"
          />
        </div>
      </BlurFade>
      <BlurFade>
        <h1 class="font-medium name">Mohammed Hridoy</h1>
        <p class="mt-1 opacity-60">Full-Stack Developer & AI Architect</p>
      </BlurFade>
      <BlurFade>
        <p class="opacity-50">Updated <NumberTicker value={18}/> Jul <NumberTicker value={2026} /></p>
      </BlurFade>

      <BlurFade>
        <p class="mt-6">Full-stack dev from Dhaka, Bangladesh. I build bots, break code, and vibe with JavaScript. Currently expanding my skills in Python and exploring new technologies.</p>

        <p class="mt-6">I've built projects like <a href="https://github.com/1dev-hridoy/NexaSim-v2"><span class="link">NexaSim</span></a>, <a href="https://github.com/1dev-hridoy/Messenger-NexaloSIM-Bot"><span class="link">NexaloSIM Bot</span></a>, and <a href="https://github.com/1dev-hridoy/Nexalo"><span class="link">Nexalo Telegram Bot</span></a>. I'm passionate about creating useful and enjoyable software, building automation tools, and exploring AI. I also run <a href="https://nexalosim.com"><span class="link">NexaloSIM</span></a>, a community organization.</p>
      </BlurFade>

      <BlurFade>
        <Devider />
        <h1 class="section-heading mt-6">Tech Stack</h1>
        <p class="mt-4">I always try to pick the right tools for the job. These are the languages and technologies I use most often.</p>
        <p class="mt-4 whitespace-nowrap overflow-x-auto"><span class="opacity-50">Languages : </span> <Stack value="JavaScript"/>, <Stack value="PHP"/>, <Stack value="Python"/>, <Stack value="HTML"/>, <Stack value="CSS"/></p>
        <p class="mt-4 whitespace-nowrap overflow-x-auto"><span class="opacity-50">Backend : </span> <Stack value="Node.js" />, <Stack value="ExpressJS" /></p>
        <p class="mt-4 whitespace-nowrap overflow-x-auto"><span class="opacity-50">Frontend : </span> <Stack value="jQuery" />, <Stack value="Bootstrap" />, <Stack value="Tailwind" /></p>
        <p class="mt-4 whitespace-nowrap overflow-x-auto"><span class="opacity-50">Database : </span> <Stack value="MySQL" />, <Stack value="MongoDB" />, <Stack value="Firebase" /></p>
        <p class="mt-4 whitespace-nowrap overflow-x-auto"><span class="opacity-50">Tools : </span> <Stack value="VS Code" />, <Stack value="Notion" /></p>
      </BlurFade>

      <BlurFade>
        <Devider />
        <h1 class="section-heading mt-6">Projects</h1>
        {#each works as w}
          <WorkItem year={w.year} items={w.items} />
        {/each}
      </BlurFade>

      <BlurFade>
        <Devider accent />
        <h1 class="section-heading mt-6">Certificates</h1>
        <p class="mt-4">A few things I've earned along the way &mdash; hackathons, community programs, and volunteer work.</p>
        <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {#each certificates as certificate}
            <CertificateCard {certificate} onOpen={(c) => (activeCertificate = c)} />
          {/each}
        </div>
      </BlurFade>

      <BlurFade>
        <Devider />
        <h1 class="section-heading mt-6">GitHub</h1>
        <p class="mt-4 opacity-50 text-sm">Contribution activity</p>
        <div class="mt-3">
          <ContributionGraph username="1dev-hridoy" />
        </div>
      </BlurFade>

      <BlurFade>
        <Devider />
        <h1 class="section-heading mt-6">Connect</h1>
        <p class="mt-4">Feel free to reach out! I'm always open to collaborating on interesting projects or just having a chat.</p>
        <p class="mt-4">Find me on <a href="https://github.com/1dev-hridoy"><span class="link">GitHub</span></a>, <a href="https://www.facebook.com/hridoy.py"><span class="link">Facebook</span></a>, <a href="https://www.instagram.com/hridoy.py"><span class="link">Instagram</span></a>, <a href="https://www.youtube.com/@hridoy-code"><span class="link">YouTube</span></a>, or send me an <button onclick={copyEmail}><span class="link" use:slotText={{text: copied ? "Copied" : "Email"}}>email</span></button>.</p>
        <p class="mt-4">You can also support my work on <a href="https://www.buymeacha.com/hridoy"><span class="link">Buy Me a Cha</span></a>.</p>
      </BlurFade>

      <BlurFade>
        <div class="signoff mt-6">
          <p>{time} <span class="opacity-50">in Dhaka, Bangladesh</span></p>
        </div>
      </BlurFade>

      <CertificateLightbox certificate={activeCertificate} onClose={() => (activeCertificate = null)} />
    {/if}
  </main>
{/if}

<style>
  /*
   * The cover sits in a thin gradient mat cut from bg1 (sky blue -> warm
   * earth), so the photo reads as mounted rather than pasted on the page.
   */
  .cover-mat {
    padding: 3px;
    background-image: linear-gradient(135deg, #b0d4eb 0%, #d8e3e9 45%, #a59e8d 100%);
    background-size: 200% 200%;
    animation: mat-shift 18s ease-in-out infinite alternate;
    box-shadow: 0 1px 2px rgb(0 0 0 / 0.04), 0 8px 24px -12px rgb(70 90 110 / 0.35);
  }

  .cover-mat img {
    border-radius: 6px;
  }

  @keyframes mat-shift {
    from {
      background-position: 0% 50%;
    }
    to {
      background-position: 100% 50%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .cover-mat {
      animation: none;
    }
  }

  /*
   * Closing band: bg2's deep green/blue end fades up from the bottom edge,
   * giving the page a grounded finish instead of just stopping.
   */
  .signoff {
    position: relative;
    padding-top: 1.5rem;
  }

  .signoff::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-image: linear-gradient(90deg, #b8cee1 0%, #d6d9f7 50%, #e7cceb 100%);
  }
</style>