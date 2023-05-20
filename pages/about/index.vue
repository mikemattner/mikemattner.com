<template>
  <main>
    <article class="about-layout">
      <BaseImage src="/images/mike-profile-two.jpg" class="profile-image" />
      <div class="about-content flow">
        <h1>About Me</h1>
        <p>
          I started my career in web design and development in 2006 and have been honing my craft little-by-little since
          then.
        </p>
        <p>
          Born and raised in Michigan, I attended college and lived in Florida, and made my way back to Michigan to
          enjoy the wonderful lakes and summer experience. I've lived here ever since.
        </p>
        <p>
          Outside of work I enjoy spending time with my wife and pets, reading, keeping up with politics, woodworking,
          home improvement projects, and sipping a fine craft beer.
        </p>
        <h2>This Site</h2>
        <p>
          I’ve had *something* at this domain since 2005, running through various iterations of content management
          systems with my content focused on a personal portfolio or blog. Prior to the switch to Vue/Nuxt I had a
          self-hosted WordPress installation.
        </p>
        <p>
          For professional development reasons in 2019, I made the **JAMstack** switch to learn the approach and that’s
          where it stands today. This site is available publicly on my GitHub, and you’re welcome to fork it and use it
          as a basis to build your own.
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
      grid-column: 1 / span 13;
    }
  }

  .profile-image {
    z-index: 1;
    overflow: hidden;
    border-radius: 10px;
    aspect-ratio: 1;

    @media (min-width: 501px) {
      grid-column: 1 / span 4;
      grid-row: 1 / span 2;
      aspect-ratio: 1 / 1.125;
    }

    @media (min-width: 768px) {
      grid-column: 1 / -1;
      aspect-ratio: 1 / 1.125;
      align-self: self-start;
    }

    @media (min-width: 961px) {
      grid-column: 16 / -1;
    }

    :deep(img) {
      mix-blend-mode: multiply;
      z-index: 2;
      position: relative;
      opacity: 0.8;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      -o-object-fit: cover;
      object-fit: cover;
      -o-object-position: center;
      object-position: center;
      font-family: 'object-fit: cover; object-position: center';
      width: 100%;
      height: 100%;
    }

    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      background: var(--gradient-1);
      mix-blend-mode: normal;
      opacity: 0.8;
      z-index: 3;
    }

    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      background-color: var(--image-background);
      mix-blend-mode: screen;
      opacity: 0.8;
      z-index: 1;
    }
  }
}
</style>
