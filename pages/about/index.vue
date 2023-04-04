<template>
  <main>
    <article class="about-layout">
      <div class="about-content flow">
        <h1>About Me</h1>
        <p>
          I started my career in web design and development in 2006 and have been honing my craft little-by-little since
          then.
        </p>
        <p>
          Born and raised in Michigan, attended college and lived in Florida, and made my way back to Michigan to enjoy
          the wonderful lakes and summer experience, I've lived here ever since.
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
          2.
        </p>
        <ul>
          <li><a href="https://v1.mikemattner.com/">V1 Nuxt</a></li>
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
  max-width: var(--max-width);
  margin-inline: auto;
  margin-block-start: 2rem;
  margin-block-end: 2rem;

  @media (min-width: 1053px) {
    grid-template-columns: repeat(28, 1fr);
    margin-block-start: 6rem;
    margin-block-end: 6rem;
  }
  @media (max-width: 1052px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, auto);
    padding: 2rem;
    gap: var(--sizing-xxl) var(--sizing-xxl);
  }

  @media (max-width: 715px) {
    padding: 1rem;
  }

  @media (min-width: 500px) {
    display: grid;
  }

  .about-content {
    @media (min-width: 1053px) {
      grid-column: 2 / span 12;
    }
    @media (max-width: 1052px) {
      grid-column: 1 / span 4;
    }
  }
}
</style>
