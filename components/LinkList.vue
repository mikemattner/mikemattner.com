<template>
  <section class="link-list__section">
    <ul class="link-list separator">
      <li v-for="link in links" :key="link.title">
        <LinkListItem :link="link" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { Link } from 'types/links';

const props = defineProps({
  links: { type: Array as PropType<Link[]>, required: true },
});
</script>

<style lang="scss" scoped>
.link-list__section {
  position: relative;
}
.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: var(--sizing-lg);

  @media (min-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 766px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 499px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.year-header {
  margin: var(--sizing-xxxl) 0 var(--sizing-lg);

  // @media (min-width: 716px) {
  //   position: sticky;
  //   top: 0;
  //   background-color: var(--color-dark-t);
  //   backdrop-filter: blur(10px);
  // }
}
</style>
