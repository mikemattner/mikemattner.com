<template>
  <main>
    <article class="about-me flow">
      <h1>About Me</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad ipsum nulla iure libero, temporibus fugit
        cum delectus porro odio ab, cumque fugiat natus ut consequatur mollitia error at eligendi.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad ipsum nulla iure libero, temporibus fugit
        cum delectus porro odio ab, cumque fugiat natus ut consequatur mollitia error at eligendi.
      </p>
      <blockquote>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad ipsum nulla iure libero, temporibus
          fugit cum delectus porro odio ab, cumque fugiat natus ut consequatur mollitia error at eligendi.
        </p>
      </blockquote>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad ipsum nulla iure libero, temporibus fugit
        cum delectus porro odio ab, cumque fugiat natus ut consequatur mollitia error at eligendi.
      </p>
      <h2>Some List</h2>
      <ul>
        <li>Item 1</li>
        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit</li>
        <li>Item 1</li>
        <li>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad ipsum nulla iure libero, temporibus
          fugit cum delectus porro odio ab, cumque fugiat natus ut consequatur mollitia error at eligendi.
        </li>
      </ul>
      <h2>Some H2 Headline</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad ipsum nulla iure libero, temporibus fugit
        cum delectus porro odio ab, cumque fugiat natus ut consequatur mollitia error at eligendi.
      </p>
      <h3>Some Other H3 Header</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad ipsum nulla iure libero, temporibus fugit
        cum delectus porro odio ab, cumque fugiat natus ut consequatur mollitia error at eligendi.
      </p>
      <ol>
        <li>Item 1</li>
        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit</li>
        <li>Item 1</li>
        <li>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad ipsum nulla iure libero, temporibus
          fugit cum delectus porro odio ab, cumque fugiat natus ut consequatur mollitia error at eligendi.
        </li>
      </ol>
    </article>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'About',
});
</script>

<style lang="scss" scoped>
.about-me {
  max-width: var(--max-width);
  margin-inline: auto;
}
</style>
