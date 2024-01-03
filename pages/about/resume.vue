<template>
  <main>
    <article class="about-layout">
      <div class="sidebar-area flow">
        <h1>Resume</h1>
        <p class="intro">
          I'm a UI Engineer with roughly {{ experienceLength }} years of experience building and designing for the web.
        </p>
        <ul class="sub-menu">
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/about/uses">Uses</NuxtLink></li>
          <li><NuxtLink to="/about/resume">Resume</NuxtLink></li>
        </ul>
        <hr />
      </div>
      <div class="about-content">
        <h2 class="h4-heading section-header">Skill Set</h2>
        <div class="section-content columns flow">
          <h3 class="small-heading">UX &amp; UI Design</h3>
          <p>
            I&rsquo;ve been working with Adobe Creative Suite (and some former Macromedia products) since 2003, focusing
            specifically on Photoshop and InDesign. I switched to Figma in 2018, designing several landing pages and a
            handful of apps for various organizations.
          </p>

          <h3 class="small-heading">Front End Development</h3>
          <p>
            I&rsquo;ve spent the last {{ experienceLength }} years working as a front end developer focusing on HMTL,
            CSS, Sass, and JavaScript. I&rsquo;ve been working with Vue/Nuxt since 2018 and have followed a Git workflow
            of multiple varieties since 2016.
          </p>
        </div>
      </div>
      <div class="about-content">
        <h2 class="h4-heading section-header">Experience</h2>
        <div class="section-content flow">
          <h3 class="small-heading">Senior UI Engineer <small>AccuLynx, 2021 &mdash; Present</small></h3>
          <p>
            I focus primarily on building out the UI for the features my team is responsible for, working in conjunction
            with the team's designer to create the best UX possible. When not working on features I spend time
            refactoring old code, squashing bugs, and occasionally working on the internal custom component library with
            the other UI engineers in the organization.
          </p>

          <h3 class="small-heading">Senior UX/UI Developer <small>Aisle Rocket, 2019 &mdash; 2021</small></h3>
          <p>
            In my work on the technology team I focused primarily on experience development across multiple brands,
            working in concert with the design team to identify consistent, component-based builds. I developed landing
            pages for product and service launches, and designed and guided the user experience for internal facing
            tools using Figma.
          </p>

          <h3 class="small-heading">Associate Creative Director <small>Aisle Rocket, 2016 &mdash; 2019</small></h3>
          <p>
            Creative direction and strategy leading a small team of digital designers and hybrid designer/developers.
            Worked with teams cross agency and across locations. Managed the workloads of team members with the
            assistance of digital project manager. Continued to work on development projects as well as digital design
            for all clients.
          </p>

          <h3 class="small-heading">Senior Digital Designer <small>Aisle Rocket, 2013 &mdash; 2016</small></h3>
          <p>
            Art direction for digital and interactive sales training materials for Whirlpool and Maytag brands; work on
            all interactive projects for studio clients including web development, email marketing, and interactive
            point of purchase materials. Directed and launched a digital sales training solution for Whirlpool and
            Maytag brands using the Adobe Digital Publishing Suite in the transition away from printed assets.
          </p>

          <h3 class="small-heading">Graphic/Web Technician <small>Corvette Central, 2006 &mdash; 2013</small></h3>
          <p>
            Maintained, developed, and optimized the company&rsquo;s web sites with a focus on usability and search
            engine optimization; assisted in the development of catalogs and other marketing materials; art directed,
            delivered, and tracked all email marketing initiatives. Delivered 2-3 million emails a year with a
            consistent 24% open rate; increased traffic by 33% by focusing on creating keyword rich content, introducing
            rigorous coding standards, and implementing focused Google Adwords campaigns.
          </p>
        </div>
      </div>
      <div class="about-content">
        <h2 class="h4-heading section-header">Education</h2>
        <div class="section-content columns flow">
          <h3 class="small-heading">A.S. Digital Media <small>Full Sail University, 2003 &mdash; 2004</small></h3>
          <p>
            Rigorous schedule that focused on: graphic design, game design, interface design, digital publishing, web
            design and development, video capture and editing, motion graphics, 3D modeling/skinning, and project
            management. Worked on major monthly projects throughout the course of the program in team and solo
            environments.
          </p>
        </div>
      </div>
      <div class="about-content">
        <h2 class="h4-heading section-header">Summary</h2>
        <div class="section-content columns flow">
          <h3 class="small-heading">Technology</h3>
          <ul>
            <li>HTML/CSS/Scss</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Vue/Nuxt</li>
          </ul>

          <h3 class="small-heading">Skills</h3>
          <ul>
            <li>Front end development</li>
            <li>WordPress development</li>
            <li>Git</li>
            <li>UX/UI Design</li>
          </ul>
        </div>
      </div>
    </article>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Resume',
});

const date = ref<Date>(new Date());
const experienceLength = computed<string>(() => {
  return String(Number(date.value.getFullYear().toString()) - 2006);
});
</script>

<style lang="scss" scoped>
.about-layout {
  margin-block-start: 2rem;
  margin-block-end: 2rem;
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: var(--sizing-xxl) var(--sizing-xxl);
  max-width: var(--max-width);
  margin-inline: auto;

  @media (min-width: 501px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(28, 1fr);
    gap: var(--sizing-xxl) 0;
    margin-block-start: 6rem;
    margin-block-end: 6rem;
  }

  .about-content {
    @media (min-width: 501px) {
      grid-column: 1 / span 4;
    }
    @media (min-width: 768px) {
      grid-column: 1 / -1;
    }
    @media (min-width: 961px) {
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: subgrid;
      align-items: baseline;
    }
  }

  .section-header {
    @media (min-width: 961px) {
      grid-column: 1 / span 6;
    }

    @media (max-width: 960px) {
      margin: var(--sizing-xxl) 0 var(--sizing-lg);
    }
  }

  .section-content {
    p {
      max-width: 65ch;
    }

    @media (min-width: 961px) {
      grid-column: 8 / -1;
    }
  }

  .sidebar-area {
    @media (min-width: 501px) {
      grid-column: 1 / span 4;
    }
    @media (min-width: 768px) {
      grid-column: 1 / -1;
    }
    @media (min-width: 961px) {
      grid-column: 1 / span 28;
    }

    h1 {
      margin-block-start: 0;
    }

    hr {
      margin-block-start: 3rem;
    }
  }

  .intro {
    letter-spacing: 0.01em;
    font-weight: 300;
    font-size: var(--size-step-1);
    line-height: 1.4;
    max-width: 65ch;
    text-wrap: pretty;
  }
}
</style>
