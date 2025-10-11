<template>
  <main>
    <article class="about-layout">
      <div class="sidebar-area flow">
        <h1 class="page-header"><small>About the Author</small> Hey there, I&rsquo;m Mike!</h1>
        <p class="intro">
          I&rsquo;m a design engineer from Michigan, currently working at AccuLynx as a Sr. UI Engineer.
        </p>

        <ul class="sub-menu">
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/about/uses">Uses</NuxtLink></li>
          <li><NuxtLink to="/about/resume">Resume</NuxtLink></li>
        </ul>
        <hr />
      </div>
      <div class="profile-group">
        <PrimaryImage src="/images/pro-profile.jpg" alt="Portrait shot of Mike." has-overlay class="profile-image">
          <template v-slot:caption>Photographed while visiting Austin, Texas.</template>
        </PrimaryImage>
        <PrimaryImage src="/images/apple-picking.png" alt="Picking apples" has-overlay class="profile-image">
          <template v-slot:caption>Picking apples in the fall.</template>
        </PrimaryImage>
      </div>
      <div class="about-content flow">
        <h2>Quick Intro</h2>
        <p>
          I grew up in southwest Michigan — lots of fields, small-town vibes, and not much else. After high school, I
          moved to Florida for college, but eventually found my way back home. The lakes, the slower pace, and those
          unbeatable Michigan summers were too hard to resist.
        </p>
        <p>
          These days I live in a small lakeside town that’s got just the right mix of nature, good beer, and local food
          spots. It’s not big, but it’s got character — and that counts for a lot.
        </p>
        <h3>How I Got Here</h3>
        <p>
          My web journey started in 1998 with Geocities (because of course it did) and a few Star Wars gaming fan sites.
          That early tinkering turned into studying digital media, and eventually into an actual career.
        </p>
        <p>
          I landed my first gig in 2006, doing a little bit of everything — design, dev, video, animation, even print
          work. Over the years, I’ve shifted more toward front-end frameworks and component-based design systems, and
          these days I spend most of my time thinking about UI, design systems, and how to make the web feel a little
          nicer to use.
        </p>
        <h3>When I’m Not Working</h3>
        <p>
          I’m usually hanging out with my wife and our pets, reading, working on the house, or building something in the
          garage. In the summer, I’m outside as much as possible — near a lake, a river, or a grill (ideally all three).
        </p>
        <p>
          I’m also a bit of a Michigan football nut. Saturdays in the fall are non-negotiable. If there’s a game on, I’m
          watching — probably yelling at the TV, maybe celebrating with a beer.
        </p>
        <PullQuote>
          I've got one question&hellip;who's got it better than us? <em>Nobody!</em>
          <template v-slot:attribution>Jim Harbaugh</template>
        </PullQuote>
        <p>Blake, <a href="https://mgoblog.com/content/take-us-home">take us home</a>.</p>
        <h3>This Site</h3>
        <p>
          This is a <a href="https://nuxt.com">Nuxt</a> based website using
          <a href="https://content.nuxt.com/">Nuxt Content</a> to manage markdown content for the blog, hosted at
          <a href="https://netlify.com">Netlify</a>. I used some combination of
          <a href="https://www.figma.com/">Figma</a> and <a href="https://code.visualstudio.com/">VSCode</a> to design
          and develop the site, and <a href="https://affinity.serif.com/en-us/photo/">Affinity Photo 2</a> to cut up any
          assets. Type is set in <a href="https://github.com/mona-sans">Mona Sans</a>, a variable font, and code is set
          in <a href="https://www.jetbrains.com/lp/mono/">JetBrains Mono</a>, my choice of font in my code editor.
        </p>
        <h3>Other Iterations</h3>
        <p>
          I’ve had this domain since 2005, and it’s gone through more versions than I can count — from self-rolled HTML
          experiments to MoveableType, WordPress, and now Nuxt. Not all of them survived, but a few old ghosts live on
          in the Internet Archive. It’s been fun watching my own design style evolve (and occasionally cringe at past
          choices).
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

  .profile-group {
    @media (min-width: 501px) {
      grid-column: 1 / span 4;
    }

    @media (min-width: 768px) {
      grid-column: 1 / -1;
      align-self: self-start;
    }

    @media (min-width: 860px) {
      grid-column: 19 / -1;
      margin-bottom: var(--sizing-xxxl);
    }
  }

  .profile-image {
    aspect-ratio: 1 / 0.75;
    border-radius: var(--border-radius);
    overflow: hidden;
    margin-bottom: var(--sizing-xxxl);

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
    }
  }

  :deep(.base-panel) {
    margin-block-start: 2.5rem;

    &:last-child {
      margin-block-start: 0;
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
      border-radius: var(--border-radius);

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
