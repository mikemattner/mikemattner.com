<template>
  <main>
    <article class="about-layout">
      <div class="sidebar-area flow">
        <h1>About</h1>
        <p class="intro">A summary of my life, career, and this here website.</p>
      </div>
      <ProfileImage image="/images/mike-profile-about.webp" class="profile-image" />
      <div class="about-content flow">
        <h2 class="bar-right">Just The Highlights</h2>
        <p>
          I was born and raised in southwest Michigan in a largely idyllic lakeside community. I attended college and
          lived in Florida for a few years before I made my way back to Michigan to enjoy the wonderful lakes and summer
          experience. I've lived here ever since.
        </p>
        <p>
          I started my career in web design and development in 2006 and have been honing my craft little-by-little since
          then. However, I really got my start in tinkering on the web in 1998. What a time to be on the internet!
        </p>
        <p>
          Outside of work I enjoy spending time with my wife and pets, reading, keeping up with politics, woodworking,
          home improvement projects, getting out on the lakes and rivers in the summer, and sipping a fine craft beer.
        </p>
        <h3>This Site</h3>
        <p>
          I’ve had <strong>something</strong> at this domain since 2005, running through various iterations of content
          management systems with my content focused on a personal portfolio or blog. Prior to the switch to Vue/Nuxt I
          had a self-hosted WordPress installation. Prior to setting up WordPress in 2008, I was using a
          <a href="https://movabletype.org/">MoveableType</a> implementation.
        </p>
        <p>
          For professional development reasons in 2019, I made the
          <abbr title="JavaScript something, something or other.">JAMStack</abbr> switch to learn the approach and
          that’s where it stands today. This site is available publicly on my GitHub, and you’re welcome to fork it and
          use it as a basis to build your own.
        </p>
        <h3>Other Iterations</h3>
        <p>
          Unfortunately, I really only archived the most recent version of my Nuxt-based site. That was built with Nuxt
          2. The rest of these are internet archive representations. And to be quite honest, they didn't capture
          everything back to 2005 and styles weren't saved with the pages until about 2010.
        </p>
        <ul class="former-site-iterations">
          <li>
            <a href="https://v1.mikemattner.com/" class="iteration-link" target="_blank"
              ><span class="small-text">Image Coming Soon</span><span>2021-2022</span></a
            >
          </li>
          <li>
            <a
              href="https://web.archive.org/web/20210622133707/https://mikemattner.com/"
              class="iteration-link"
              target="_blank"
              ><span class="small-text">Image Coming Soon</span><span>2021</span></a
            >
          </li>
          <li>
            <a
              href="https://web.archive.org/web/20200510231840/https://mikemattner.com/"
              class="iteration-link"
              target="_blank"
              ><span class="small-text">Image Coming Soon</span><span>2020</span></a
            >
          </li>
          <li>
            <a
              href="https://web.archive.org/web/20171118135502/http://mikemattner.com/"
              class="iteration-link"
              target="_blank"
              ><span class="small-text">Image Coming Soon</span><span>2017-2019</span></a
            >
          </li>
          <li>
            <a
              href="https://web.archive.org/web/20160401174705/http://www.mikemattner.com/"
              class="iteration-link"
              target="_blank"
              ><span class="small-text">Image Coming Soon</span><span>2016</span></a
            >
          </li>
          <li>
            <a
              href="https://web.archive.org/web/20130514053042/http://www.mikemattner.com/"
              class="iteration-link"
              target="_blank"
              ><span class="small-text">Image Coming Soon</span><span>2013-2015</span></a
            >
          </li>
          <li>
            <a
              href="https://web.archive.org/web/20100412072243/http://www.mikemattner.com/"
              class="iteration-link"
              target="_blank"
              >2010-2012</a
            >
          </li>
        </ul>
      </div>
      <div class="timeline-content flow">
        <h2 class="h3-heading">A Brief Timeline</h2>
        <ol class="timeline small-text">
          <li class="flow">
            <h3 class="small-heading">1985</h3>
            <p>Born in a small town in Michigan.</p>
          </li>
          <li class="flow">
            <h3 class="small-heading">1995</h3>
            <p>
              My dad brings home our first computer, an old 386 loaded with all kinds of software and games. I
              discovered
              <a href="https://en.wikipedia.org/wiki/QBasic">QBasic</a> was on this computer&mdash;also loaded with a
              bunch of games. I spent the entire summer playing games and learning just what the hell was going on with
              this thing. Around this time I started playing around with Geocities. Oh yeah.
            </p>
          </li>
          <li class="flow">
            <h3 class="small-heading">1998</h3>
            <p>
              By this time I started a fan/guild/add-ons website for
              <a href="https://en.wikipedia.org/wiki/Star_Wars_Jedi_Knight:_Dark_Forces_II?useskin=vector"
                >Star Wars Jedi Knight: Dark Forces II</a
              >
              that I called Yoda's Add-ons. My love for the web was cemented here.
            </p>
          </li>
          <li class="flow">
            <h3 class="small-heading">2003</h3>
            <p>I graduated from High School and headed to Florida to study digital media.</p>
          </li>
          <li class="flow">
            <h3 class="small-heading">2004</h3>
            <p>
              After four hurricanes and many sleepless nights, I graduated from college in an accelerated program with a
              degree in digital media in hand. That was a whirlwind.
            </p>
          </li>
          <li class="flow">
            <h3 class="small-heading">2006</h3>
            <p>
              I land my first professional full-time role for a local company that focused on Corvettes. Right before
              the economic crisis of 2008. Goodie.
            </p>
          </li>
          <li class="flow">
            <h3 class="small-heading">2013</h3>
            <p>
              I left that Corvette company after a wonderful 6 years, and joined an advertising agency in town. The work
              there was focused on selling appliances and sales education for those appliances.
            </p>
          </li>
          <li class="flow">
            <h3 class="small-heading">2021</h3>
            <p>Land my current job during a global pandemic. What a weird time, but what a great move.</p>
          </li>
        </ol>
      </div>
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
    @media (min-width: 961px) {
      grid-column: 1 / span 18;
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
      padding-bottom: var(--sizing-xxxl);
    }
  }

  .intro {
    letter-spacing: 0.01em;
    font-weight: 300;
    font-size: var(--size-step-1);
    line-height: 1.3;
  }

  .profile-image {
    aspect-ratio: 2 / 1;

    @media (min-width: 501px) {
      grid-column: 1 / span 4;
      aspect-ratio: 2 / 1;
    }

    @media (min-width: 768px) {
      grid-column: 1 / -1;
      aspect-ratio: 2 / 1;
      align-self: self-start;
    }

    @media (min-width: 961px) {
      grid-column: 1 / -1;
      aspect-ratio: 2 / 1;
      margin-bottom: var(--sizing-xxxl);
    }
  }

  .former-site-iterations {
    margin: var(--sizing-xxl) 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: var(--sizing-md);
    grid-template-columns: repeat(2, 1fr);

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }

    .iteration-link {
      font-family: var(--code-font-family);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: var(--sizing-sm);
      margin: 0;
      padding: var(--sizing-sm);
      text-decoration: none;
      border: 1px solid var(--border-color);
      aspect-ratio: 1;

      &:hover {
        background-color: var(--block-quote-bg);
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
    @media (min-width: 961px) {
      grid-column: 21 / -1;
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
        border-radius: 10px 2px 10px 2px;
        content: '';
        border: 1px solid var(--border-color);
        background: var(--background-color);
      }
    }
  }
}
</style>
