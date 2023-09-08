<template>
  <main>
    <article class="about-layout">
      <div class="sidebar-area flow">
        <h1>About</h1>
        <p class="intro">A summary of my life, career, and this here website.</p>
      </div>
      <ProfileImage image="/images/mike-profile-three.jpg" class="profile-image" />
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
          had a self-hosted WordPress installation. Prior to the setting up WordPress in 2008, I was using a
          <a href="https://movabletype.org/">MoveableType</a> implementation.
        </p>
        <p>
          For professional development reasons in 2019, I made the
          <abbr title="JavaScript something, something or other.">JAMstack</abbr> switch to learn the approach and
          that’s where it stands today. This site is available publicly on my GitHub, and you’re welcome to fork it and
          use it as a basis to build your own.
        </p>
        <h3>Other Iterations</h3>
        <p>
          Unfortunately, I really only archived the most recent version of my Nuxt-based site. That was built with Nuxt
          2. The rest of these are internet archive representations. And to be quite honest, they didn't capture
          everything back to 2005 and styles weren't saved with the pages until about 2010.
        </p>
        <ul>
          <li><a href="https://v1.mikemattner.com/" target="_blank">2021-2022</a></li>
          <li>
            <a href="https://web.archive.org/web/20210622133707/https://mikemattner.com/" target="_blank">2021</a>
          </li>
          <li>
            <a href="https://web.archive.org/web/20200510231840/https://mikemattner.com/" target="_blank">2020</a>
          </li>
          <li>
            <a href="https://web.archive.org/web/20171118135502/http://mikemattner.com/" target="_blank">2017-2019</a>
          </li>
          <li>
            <a href="https://web.archive.org/web/20160401174705/http://www.mikemattner.com/" target="_blank">2016</a>
          </li>
          <li>
            <a href="https://web.archive.org/web/20130514053042/http://www.mikemattner.com/" target="_blank"
              >2013-2015</a
            >
          </li>
          <li>
            <a href="https://web.archive.org/web/20100412072243/http://www.mikemattner.com/" target="_blank"
              >2010-2012</a
            >
          </li>
        </ul>
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
    font-size: var(--size-step-2);
    line-height: 1.5;
  }

  .profile-image {
    aspect-ratio: 1;

    @media (min-width: 501px) {
      grid-column: 1 / span 4;
      aspect-ratio: 1 / 1.125;
    }

    @media (min-width: 768px) {
      grid-column: 1 / -1;
      aspect-ratio: 1 / 1.125;
      align-self: self-start;
    }

    @media (min-width: 961px) {
      grid-column: 1 / -1;
      aspect-ratio: 1.35 / 1;
    }
  }
}
</style>
