<script lang="ts">
import Devider from "./components/Devider.svelte";
import Stack from "./components/Stack.svelte";
import WorkItem from "./components/WorkItem.svelte";
import BlurFade from "./components/BlurFade.svelte";
function bangladeshTime(): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Dhaka",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());
}

let time: string = bangladeshTime();
setInterval(() => (time = bangladeshTime()), 1000);
const works = [
  {
    year: "2026",
    items: [
      {
        description: "Bangladesh SaaS directory",
        href: "https://www.bdsaaszone.site/",
        category: "Platform",
      },
      {
        description: "Student management system",
        href: "https://www.studify.sbs/",
        category: "SaaS",
      },
      {
        description: "Open source monitoring tool",
        href: "https://github.com/dishan1223/mutt",
        category: "Open Source",
      },
      {
        description: "Developer portfolio site",
        href: "/",
        category: "Portfolio",
      }
    ],
  },
];
</script>

<main class="mx-auto w-[90%] max-w-[560px] mb-10 page-reveal">

  <BlurFade>
    <h1 class="mt-[50px] lg:mt-[100px] font-medium">Ishtiaq Dishan</h1>
  </BlurFade>
  <BlurFade>
    <p class="opacity-50">Updated 16 Jul 2026</p>
  </BlurFade>

  <BlurFade>
    <p class="mt-6">I'm a full-stack web developer from Sirajganj, Bangladesh, and a Class 12 student. I love building small, polished products that are simple, useful, and enjoyable to use.</p>

    <p class="mt-6">I've built products like <a href="https://www.studify.sbs/"><span class="link">Studify</span></a> and <a href="https://www.bdsaaszone.site/"><span class="link">BD SaaS Zone</span></a>, and I'm currently working on <a href="https://github.com/dishan1223/mutt"><span class="link">Mutt</span></a>, an open-source project. I'm always excited to build useful and enjoyable software while exploring new tools, technologies, and ideas. Beyond coding, I enjoy connecting with experienced developers, learning from their insights, and continuously improving my craft.</p>

    <p class="mt-6">Feel free to say hi on <a href="https://github.com/dishan1223"><span class="link">GitHub</span></a>, <a href="https://x.com/ishtiaqdishan"><span class="link">X</span></a>, <a href="https://www.facebook.com/ishtiaq.dishan"><span class="link">Facebook</span></a>, or <a href="mailto:dishanishtiaq45@gmail.com"><span class="link">email</span></a> if you'd like to connect.</p>
  </BlurFade>

  <BlurFade>
  <Devider />
    <h1 class="mt-6 opacity-50">Tech Stack</h1>
    <p class="mt-4">I always try to pick the right tools for the job. These are the languages and technologies I use most often and enjoy working with.</p>
    <p class="mt-4 whitespace-nowrap overflow-x-auto"><span class="opacity-50">Languages : </span> <Stack value="GO"/>, <Stack value="TypeScript"/>, <Stack value="JavaScript"/></p>
    <p class="mt-4 whitespace-nowrap overflow-x-auto"><span class="opacity-50">Backend : </span> <Stack value="GoFiber" />, <Stack value="NestJS" />, <Stack value="ExpressJS" /></p>
    <p class="mt-4 whitespace-nowrap overflow-x-auto"><span class="opacity-50">Frontend : </span> <Stack value="React" />, <Stack value="NextJS" />, <Stack value="Svelte" /></p>
    <p class="mt-4 whitespace-nowrap overflow-x-auto"><span class="opacity-50">Database : </span> <Stack value="MongoDB" />, <Stack value="NeonDB" />, <Stack value="SQLite" /></p>
    <p class="mt-4 whitespace-nowrap overflow-x-auto"><span class="opacity-50">Tools : </span> <Stack value="Git" /></p>
    <p class="mt-4 whitespace-nowrap overflow-x-auto"><span class="opacity-50">Design : </span> <Stack value="Figma" /></p>
    <p class="mt-4 whitespace-nowrap overflow-x-auto"><span class="opacity-50">Productivity : </span> <Stack value="Obsidian" /></p>
  </BlurFade>
  <BlurFade >
    <Devider />
    <h1 class="mt-6 opacity-50">Work</h1>
    {#each works as w}
      <WorkItem year={w.year} items={w.items} />
    {/each}

    <Devider />
    <p class="mt-6">{time} <span class="opacity-50">in Sirajganj, Bangladesh</span></p>
  </BlurFade>
</main>