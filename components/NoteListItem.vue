<template>
  <div class="note-list-item">
    <div class="note-list-item__header">
      <time>
        <NuxtLink :to="note._path">{{ date }}</NuxtLink>
      </time>
      <div class="note-list-item__tags">
        <ul class="tag-list">
          <li v-for="tag in note.tag" :key="tag">
            <NuxtLink :to="`/notes/tag/${tag}`">{{ tag }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="note-list-item__body">
      <ContentRenderer :value="note">
        <ContentRendererMarkdown class="flow" :value="note" />
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
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
  border-bottom: 1px solid var(--border-color);
  position: relative;
  padding: 0 0 var(--sizing-xxxl) 0;

  h3 {
    transition: var(--transition);
  }

  .note-list-item__body {
    padding: 0;
    z-index: 2;
  }

  p {
    max-width: 70ch;
  }

  &__header {
    font-size: var(--size-step--2);
    display: flex;
    align-items: center;
    gap: var(--sizing-lg);
    color: var(--blog-card-date-color);
    padding: 0 0 var(--sizing-xxl) 0;
    z-index: 2;
  }

  time {
    display: flex;
    align-items: center;
    gap: var(--sizing-lg);
    font-size: var(--size-step--2);

    svg {
      width: 1.25rem;
      height: 1.25rem;
      flex-shrink: 0;
    }

    &:after {
      content: '•';
      line-height: 1;
      opacity: 0.5;
    }
  }

  &__tags {
    display: flex;
    align-items: center;
    gap: var(--sizing-sm);

    svg {
      width: 1.25rem;
      height: 1.25rem;
      flex-shrink: 0;
    }
  }

  .tag-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    gap: var(--sizing-sm);
    font-size: var(--size-step--2);

    li {
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 1px;

      &:after {
        content: ',';
        line-height: 1;
        opacity: 0.5;
      }

      &:last-child:after {
        display: none;
      }
    }
  }
}
:deep(.footnotes) {
  font-size: var(--size-step--1);
  margin-top: var(--sizing-xxxl);
}
:deep(sup a) {
  display: inline-block;
  padding: 3px;
  background-color: var(--border-color);
  color: var(--headline-font-color);
  line-height: 1;
  text-decoration: none;
  margin-left: 3px;
  font-weight: 700;
  transition: var(--transition);
  border-radius: 2px;
  top: -2px;
  position: relative;

  &:hover {
    color: hsl(var(--color-white-hsl));
    background-color: var(--color-primary);
  }
}
</style>
