<template>
  <div class="note-list-item">
    <div class="note-list-item__body">
      <ContentRenderer :value="note">
        <ContentRendererMarkdown class="flow" :value="note" />
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
    </div>
    <div class="note-list-item__footer">
      <div class="note-list-item__tags">
        <BaseButton
          v-for="tag in note.tag"
          :key="tag"
          :to="`/blog/tag/${tag}`"
          size="xs"
          color="secondary"
          variant="solid"
        >
          {{ tag }}
        </BaseButton>
      </div>
      &bull;
      <time>
        <NuxtLink :to="note._path">{{ date }}</NuxtLink>
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

  &__footer {
    font-size: var(--size-step--2);
    font-family: var(--sans-font-family);
    display: flex;
    align-items: center;
    gap: var(--sizing-lg);
    color: var(--blog-card-date-color);
    margin-top: var(--sizing-xl);
    z-index: 2;
  }

  time {
    display: flex;
    align-items: center;
    gap: var(--sizing-lg);

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

    .button {
      font-size: var(--size-step--2);
      font-family: var(--code-font-family);
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
