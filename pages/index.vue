<template>
  <main>
    <div class="flow">
      <h1 class="maximal-heading home-hello">Hello</h1>
      <p class="lede">
        I&rsquo;m a creative developer from Michigan with over 20 years of experience working with multidisciplinary
        teams in a variety of roles. I&rsquo;m currently working at AccuLynx as a Sr. UI Engineer.
      </p>
      <p>
        <a href="https://www.linkedin.com/in/mikeamattner/">LinkedIn</a>,
        <a href="https://mastodon.online/@mikemattner" rel="me">Mastodon</a>,
        <a href="https://codepen.io/mikemattner/#">Codepen</a>, &amp;
        <a href="https://github.com/mikemattner">GitHub</a>.
      </p>
      <hr />
      <h2>Lorem Testum</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad ipsum nulla iure libero, temporibus fugit
        cum delectus porro odio ab, cumque fugiat natus ut consequatur mollitia error at eligendi.
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'UX/UI Designer & Developer in Michigan',
})
</script>

<style lang="scss" scoped>
.home-hello {
  text-transform: uppercase;
}
.dark .home-hello {
  color: var(--color-primary);
}
</style>
