<template>
  <div class="note-list-item">
    <div class="note-list-item__header">
      <time>
        <Icon name="ri:calendar-fill" /> <NuxtLink :to="note._path">{{ date }}</NuxtLink>
      </time>
      <div class="note-list-item__tags">
        <Icon name="ri:chat-thread-fill" />
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
import { Note } from '../types/notes';
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
  border-bottom: 2px dotted var(--border-color);
  border-radius: 7px;
  position: relative;
  padding: 0 0 var(--sizing-xxxl) 0;
  max-width: 65ch;

  h3 {
    transition: var(--transition);
  }

  .note-list-item__body {
    padding: 0;
    z-index: 2;
  }
  .note-list-item__read-more {
    font-family: var(--code-font-family);
    font-size: var(--size-step--2);
    text-transform: uppercase;
    margin-top: auto;
    display: flex;
    align-items: center;
    gap: var(--sizing-sm);
    padding: 0 0 var(--sizing-lg);
    z-index: 2;

    svg {
      transition: transform 0.125s var(--cubic-bezier);
    }
  }

  p {
    max-width: 70ch;
  }

  &__header {
    font-size: var(--size-step--2);
    font-family: var(--code-font-family);
    display: flex;
    align-items: center;
    gap: var(--sizing-xxl);
    color: var(--blog-card-date-color);
    padding: 0 0 var(--sizing-xxl) 0;
    z-index: 2;
  }

  time {
    display: flex;
    align-items: center;
    gap: var(--sizing-sm);
    font-size: var(--size-step--2);

    svg {
      width: 1.25rem;
      height: 1.25rem;
      flex-shrink: 0;
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
      gap: var(--sizing-sm);

      &:before {
        content: '/';
        line-height: 1;
        opacity: 0.5;
      }

      &:first-child:before {
        display: none;
      }
    }
  }
}
</style>
