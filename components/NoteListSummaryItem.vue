<template>
  <div class="note-list-item">
    <div class="note-list-item__header">
      <NuxtLink :to="note._path" class="small-text">{{ note.title }}</NuxtLink>
      <time class="eyebrow">
        {{ date }}
      </time>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Note } from '../types/notes';
import { formatDate } from '../utils/formatDate';

const props = defineProps({
  note: { type: Object as PropType<Note>, required: true },
});

const date = computed<string>(() => formatDate(props.note.date));
</script>

<style lang="scss" scoped>
.note-list-item {
  height: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  transition: var(--transition);
  position: relative;
  padding: 0;

  &__header {
    font-size: var(--size-step--1);
    font-family: var(--sans-font-family);
    display: grid;
    align-items: center;
    gap: var(--sizing-lg);
    grid-template-columns: 3fr 1fr;
    color: var(--blog-card-date-color);
    z-index: 2;
    font-weight: 800;

    @media screen and (max-width: 400px) {
      grid-template-columns: 1fr;
      gap: var(--sizing-md);
    }
  }

  time {
    display: flex;
    align-items: center;
    gap: var(--sizing-lg);
    font-weight: 300;
    justify-content: flex-end;

    @media screen and (max-width: 400px) {
      justify-self: flex-start;
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;
      flex-shrink: 0;
    }
  }
}
</style>
