<template>
  <main>
    <article class="about-layout">
      <div class="sidebar-area flow">
        <h1><small>About</small> Hi, I&rsquo;m Mike!</h1>
        <p class="intro">
          I&rsquo;m a designer and developer from Michigan, currently working at AccuLynx as a Sr. UI Engineer. Here's a
          non exhaustive summary of my life, career, and this website.
        </p>

        <ul class="sub-menu">
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/about/uses">Uses</NuxtLink></li>
          <li><NuxtLink to="/about/resume">Resume</NuxtLink></li>
        </ul>
        <hr />
      </div>
      <PrimaryImage src="/images/pro-profile.jpg" alt="Portrait shot of Mike." has-overlay class="profile-image">
        <template v-slot:caption>Photographed while visiting Austin, Texas.</template>
      </PrimaryImage>
      <div class="about-content flow">
        <h2>Just The Highlights</h2>
        <p>
          I was born and raised in southwest Michigan &mdash; a largely rural place with extremely small town vibes. I
          left shortly after graduating from high school to attend college in Florida, but I was ultimately drawn back
          to Michigan by the allure of the lakes and the wonderful summer experience. I&rsquo;ve been here ever since. I
          am currently residing in a beautiful lakeside community that offers plenty of access to the water and other
          outdoor spaces.
        </p>
        <p>
          My journey in web design and development began in 1998, and since then, I have been steadily refining my skill
          set. Professionally, I got my first gig in 2006. At that time I was largely working on LAMP stack projects
          while juggling all of the design work. That first gig was more of a digital media specialist role &mdash; with
          about seventy percent of the work being focused on web design and development &mdash; that had me producing
          whatever video, animation work, or print assets were required.
        </p>
        <p>
          I began to expand my development skill set in 2016, focusing more on front end frameworks and component driven
          design systems, and less on content management systems.
        </p>
        <p>
          In my personal time, I enjoy being with my family, reading, staying updated on politics, dabbling in
          woodworking, working on home projects, and spending time outdoors near lakes and rivers in the summer. I also
          appreciate a good quality beer.
        </p>
        <h3>This Site</h3>
        <p>
          <strong>mikemattner.com</strong> is a <a href="https://nuxt.com">Nuxt</a> based website using
          <a href="https://content.nuxt.com/">Nuxt Content</a> to manage markdown content for the blog, hosted at
          <a href="https://netlify.com">Netlify</a>. I used some combination of
          <a href="https://www.figma.com/">Figma</a> and <a href="https://code.visualstudio.com/">VSCode</a> to design
          and develop the site, and <a href="https://affinity.serif.com/en-us/photo/">Affinity Photo 2</a> to cut up any
          assets. Type is set in <a href="https://github.com/mona-sans">Mona Sans</a>, a variable font, and code is set
          in <a href="https://www.jetbrains.com/lp/mono/">JetBrains Mono</a>, my choice of font in my code editor.
        </p>
        <h3>Other Iterations</h3>
        <p>
          I&rsquo;ve had <strong>something</strong> at this domain since 2005, evolving through various iterations of
          content management systems, initially focusing on being a personal portfolio or blog. Before transitioning to
          Vue/Nuxt, I had a self-hosted WordPress installation. In the stone age of 2007, I was using a
          <a href="https://movabletype.org/">MoveableType</a> implementation, but the initial version was some
          self-rolled monstrosity with a questionable design (if I could ever dig it up, I would, I swear).
        </p>
        <p>
          Unfortunately, I really only archived the most recent version of my Nuxt-based site. That was built with Nuxt
          2. The rest of these are internet archive representations. You can see some of the evolution of my design
          style even if it is incomplete.
        </p>
        <p>
          Sadly, they didn't capture everything going back to 2005. Styles weren't saved with the pages until about
          2010. Additionally, my versioning of the Nuxt iterations is a little wonky.
        </p>
        <BasePanel>
          <template #header> Nuxt / Vue </template>
          <ul class="former-site-iterations">
            <li>
              <a href="https://v1.mikemattner.com/" class="iteration-link" target="_blank"
                ><span class="small-text">Nuxt 2</span><span class="year">2021-2022</span></a
              >
            </li>
            <li>
              <a
                href="https://web.archive.org/web/20210622133707/https://mikemattner.com/"
                class="iteration-link"
                target="_blank"
                ><span class="small-text">Nuxt 2</span><span class="year">2021</span></a
              >
            </li>
            <li>
              <a
                href="https://web.archive.org/web/20200510231840/https://mikemattner.com/"
                class="iteration-link"
                target="_blank"
                ><span class="small-text">Vue</span><span class="year">2020</span></a
              >
            </li>
          </ul>
        </BasePanel>
        <BasePanel>
          <template #header> WordPress </template>
          <ul class="former-site-iterations">
            <li>
              <a
                href="https://web.archive.org/web/20171118135502/http://mikemattner.com/"
                class="iteration-link"
                target="_blank"
                ><span class="small-text">WordPress</span><span class="year">2017-2019</span></a
              >
            </li>
            <li>
              <a
                href="https://web.archive.org/web/20160401174705/http://www.mikemattner.com/"
                class="iteration-link"
                target="_blank"
                ><span class="small-text">WordPress</span><span class="year">2016</span></a
              >
            </li>
            <li>
              <a
                href="https://web.archive.org/web/20130514053042/http://www.mikemattner.com/"
                class="iteration-link"
                target="_blank"
                ><span class="small-text">WordPress</span><span class="year">2013-2015</span></a
              >
            </li>
            <li>
              <a
                href="https://web.archive.org/web/20100412072243/http://www.mikemattner.com/"
                class="iteration-link"
                target="_blank"
                ><span class="small-text">WordPress</span><span class="year">2010-2012</span></a
              >
            </li>
          </ul>
        </BasePanel>
      </div>
      <!-- <div class="timeline-content flow">
        <h2 class="h4-heading">A Timeline of My Life</h2>
        <ol class="timeline small-text">
          <li class="flow">
            <h3 class="small-heading">1985</h3>
            <p>Born in a small town in Michigan.</p>
          </li>
          <li class="flow">
            <h3 class="small-heading">1996</h3>
            <p>
              My dad brings home our first computer, an old computer loaded with all kinds of software and games. I
              discovered that
              <a href="https://en.wikipedia.org/wiki/QBasic">QBasic</a> was on this computer&mdash;also loaded with a
              bunch of games. I spent the entire summer playing games and learning just what in the hell was going on
              with this thing. Around this time I started playing around with Geocities. Oh yeah.
            </p>
          </li>
          <li class="flow">
            <h3 class="small-heading">1999</h3>
            <p>
              By this time I started a fan/guild/add-ons website for
              <a href="https://en.wikipedia.org/wiki/Star_Wars_Jedi_Knight:_Dark_Forces_II?useskin=vector"
                >Star Wars Jedi Knight: Dark Forces II</a
              >
              that I called
              <a href="https://web.archive.org/web/19990202084434/http://www.jediknight.net/yoda/">Yoda's Add-ons</a>.
              My love for the web was cemented here.
            </p>
          </li>
          <li class="flow">
            <h3 class="small-heading">2006</h3>
            <p>
              I land my first professional full-time role for a local company that focused on Corvette parts and
              accessories. While there I used just about every skill I learned in college, including video editing and
              motion graphics, graphic design, and my primary work of web development.
            </p>
          </li>
          <li class="flow">
            <h3 class="small-heading">2013</h3>
            <p>
              I join an advertising agency in town. The work there was initially focused on creating sales education
              material for selling appliances.
            </p>
          </li>
          <li class="flow">
            <h3 class="small-heading">2016</h3>
            <p>
              I get a promotion to lead a team of hybrid designers/developers to work on that sales education material
              and several studio related web projects&mdash;mostly WordPress marketing sites.
            </p>
          </li>
          <li class="flow">
            <h3 class="small-heading">2019</h3>
            <p>
              I switch gears to full time development and get absorbed into the larger agency's development team as the
              two branches of the agency fully integrate together. My work shifts to working on the client's marketing
              websites.
            </p>
          </li>
          <li class="flow">
            <h3 class="small-heading">2020</h3>
            <p>
              A global pandemic hits and life gets a little weird. I start on a team focused on creating Adobe
              Experience Manager components for the primary client's marketing sites.
            </p>
          </li>
          <li class="flow">
            <h3 class="small-heading">2021</h3>
            <p>I start my current role focused on software development as a UI engineer.</p>
          </li>
        </ol>
      </div> -->
    </article>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'About',
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
    @media (min-width: 860px) {
      grid-column: 1 / span 17;
      grid-row: 2;
    }
  }

  .sidebar-area {
    @media (min-width: 501px) {
      grid-column: 1 / span 4;
    }
    @media (min-width: 768px) {
      grid-column: 1 / -1;
    }
    @media (min-width: 860px) {
      grid-column: 1 / span 28;
      padding-bottom: var(--sizing-xxxl);
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

  .profile-image {
    aspect-ratio: 1 / 0.75;
    border-radius: 7px;
    overflow: hidden;

    @media (min-width: 501px) {
      grid-column: 1 / span 4;
    }

    @media (min-width: 768px) {
      grid-column: 1 / -1;
      align-self: self-start;
    }

    @media (min-width: 860px) {
      grid-column: 19 / -1;
      aspect-ratio: 1 / 1.5;
      margin-bottom: var(--sizing-xxxl);
    }
  }

  .former-site-iterations {
    margin: 0;
    padding: 0 var(--sizing-md) var(--sizing-xl);
    list-style: none;
    display: grid;
    gap: var(--sizing-lg);
    grid-template-columns: repeat(2, 1fr);

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }

    .iteration-link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: var(--sizing-sm);
      margin: 0;
      padding: var(--sizing-sm);
      text-decoration: none;
      border: 2px solid var(--border-color);
      aspect-ratio: 1;
      // box-shadow: 5px 5px 0 0 var(--border-color);
      font-variation-settings: 'wdth' 100, 'wght' 800;
      line-height: 1;
      border-radius: 7px;

      .year {
        font-family: var(--code-font-family);
        font-weight: 400;
      }

      &:hover {
        background-color: var(--block-quote-bg);
        // box-shadow: 0 0 0 0 var(--border-color);
      }
    }
  }

  .timeline-content {
    @media (min-width: 501px) {
      grid-column: 1 / span 4;
    }
    @media (min-width: 768px) {
      grid-column: 1 / -1;
    }
    @media (min-width: 860px) {
      grid-column: 21 / -1;
      grid-row: 3;
    }
  }

  .timeline {
    list-style: none;
    margin-top: var(--sizing-xxl);

    li {
      position: relative;
      padding: 0.5em 0 2em;
      padding-left: 2em;
      border-left: 1px solid var(--border-color);

      &:before {
        width: 1em;
        height: 1em;
        display: block;
        top: 0.7em;
        position: absolute;
        left: -0.53em;
        content: '';
        border: 2px solid var(--border-color);
        background: var(--background-color);
        transition: var(--transition-cubic);
        // box-shadow: 2px 2px 0 0 var(--border-color);
        border-radius: 50%;
      }

      &:hover {
        &:before {
          border-color: var(--color-primary);
          // box-shadow: 0 0 0 0 var(--color-primary);
        }
      }
    }
  }
}
</style>
