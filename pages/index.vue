<template>
  <main>
    <div class="home-layout flow">
      <h1 class="maximal-heading home-hello">Hello</h1>
      <p class="lede content-area">
        I&rsquo;m Mike Mattner, a creative developer from Michigan with over 20 years of experience working with
        multidisciplinary teams in a variety of roles. I&rsquo;m currently working at AccuLynx as a Sr. UI Engineer.
      </p>
      <p class="content-area">
        <a href="https://www.linkedin.com/in/mikeamattner/">LinkedIn</a>,
        <a href="https://mastodon.online/@mikemattner" rel="me">Mastodon</a>,
        <a href="https://codepen.io/mikemattner/#">Codepen</a>, &amp;
        <a href="https://github.com/mikemattner">GitHub</a>.
      </p>
      <div class="content-area button-group">
        <BaseButton to="/about" variant="outline" color="primary">Learn More About Me</BaseButton>
      </div>
      <hr />
      <h2 class="content-area">Lorem Testum</h2>
      <p class="content-area">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad ipsum nulla iure libero, temporibus fugit
        cum delectus porro odio ab, cumque fugiat natus ut consequatur mollitia error at eligendi.
      </p>
      <div class="content-area button-group">
        <BaseButton to="/about" variant="solid" color="primary">About</BaseButton>
        <BaseButton to="/about" variant="outline" color="primary">About</BaseButton>
        <BaseButton to="/about" variant="text" color="primary" is-narrow>About</BaseButton>
        <BaseButton to="/about" variant="link" color="primary">About</BaseButton>
      </div>
      <div class="content-area button-group">
        <BaseButton to="/about" variant="solid" color="secondary">About</BaseButton>
        <BaseButton to="/about" variant="outline" color="secondary">About</BaseButton>
        <BaseButton to="/about" variant="text" color="secondary" is-narrow>About</BaseButton>
        <BaseButton to="/about" variant="link" color="secondary" is-narrow>About</BaseButton>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'UX/UI Designer & Developer in Michigan',
});
</script>

<style lang="scss" scoped>
.home-layout {
  max-width: 72.5rem;
  margin-inline: auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    'welcome welcome welcome welcome'
    'sidebar text text text';

  .home-hello {
    grid-area: welcome;
    text-transform: uppercase;
  }

  .content-area {
    grid-column: 2 / span 3;
  }

  .sidebar-area {
    grid-column: 1;
  }

  hr {
    grid-column: 1 / span 4;
  }

  .button-group {
    --flow-space: 2em;
    display: flex;
    align-items: center;
    gap: var(--sizing-md);
  }
}

.dark .home-hello {
  color: var(--color-primary);
}
</style>
