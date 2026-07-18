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
  const email = "hridoy@hridoyxqc.space";
  navigator.clipboard.writeText(email);
  copied = true;
  setTimeout(() => { copied = false; }, 2000);
}

const projects = [
  {
    year: 2026,
    items: [
      {
        description: "Messenger bot for fun & SimSim talk",
        href: "https://github.com/1dev-hridoy/NexaSim-v2",
        category: "Messenger Bot",
      },
      {
        description: "Feature-rich Facebook Messenger bot",
        href: "https://github.com/1dev-hridoy/Messenger-NexaloSIM-Bot",
        category: "Messenger Bot",
      },
      {
        description: "Powerful Node.js Telegram bot",
        href: "https://github.com/1dev-hridoy/Nexalo",
        category: "Telegram Bot",
      },
      {
        description: "Facebook Messenger bot with media tools",
        href: "https://github.com/1dev-hridoy/Kenji-Cloud",
        category: "Messenger Bot",
      }
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
        <div class="w-full rounded-lg overflow-hidden mt-[50px] lg:mt-[100px] mb-6">
          <img
            src="https://i.pinimg.com/1200x/f1/a8/dd/f1a8dd69a469a0acb281d761aca2a70c.jpg"
            alt="Cover"
            class="w-full h-[170px] object-cover"
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
        {#each projects as w}
          <WorkItem year={w.year} items={w.items} />
        {/each}
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
        <Devider />
        <p class="mt-6">{time} <span class="opacity-50">in Dhaka, Bangladesh</span></p>
      </BlurFade>
    {/if}
  </main>
{/if}