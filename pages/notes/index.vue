<template>
  <main>
    <div class="writing-layout">
      <div class="writing-layout__content">
        <div class="sidebar-area flow">
          <h1><small>Random / Short</small> Notes</h1>
          <hr />
        </div>
        <div class="content-area flow">
          <NoteList :notes="notes" list-all />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { Note } from '../../types/notes';

useHead({
  title: 'Notes',
});

const { data } = await useAsyncData('notes-list', () => queryContent<Note>('/notes').sort({ date: -1 }).find());

const notes = computed<Note[]>(() => {
  return data?.value?.filter((post) => !post.draft) as Note[];
});
</script>

<style lang="scss" scoped>
.writing-layout {
  max-width: var(--max-width);
  margin-inline: auto;

  &__content {
    margin-block-start: 2rem;
    margin-block-end: 2rem;

    @media (min-width: 1053px) {
      grid-template-columns: repeat(28, 1fr);
    }
    @media (max-width: 1052px) {
      grid-template-columns: repeat(4, 1fr);
      gap: var(--sizing-xxl) var(--sizing-xxl);
    }

    @media (min-width: 768px) {
      margin-block-start: 6rem;
      margin-block-end: 6rem;
    }

    @media (min-width: 500px) {
      display: grid;
    }

    hr {
      margin-block-start: 3rem;
      margin-block-end: 3rem;
    }

    p {
      max-width: 65ch;
    }
  }

  .content-area {
    margin: 0;

    @media (min-width: 1053px) {
      grid-column: 1 / span 28;
    }
    @media (max-width: 1052px) {
      grid-column: 1 / span 4;
    }
  }

  .sidebar-area {
    font-size: var(--size-step-1);

    @media (min-width: 1053px) {
      grid-column: 1 / span 28;
    }
    @media (max-width: 1052px) {
      grid-column: 1 / span 4;
    }
  }

  .intro {
    letter-spacing: 0.01em;
    font-weight: 300;
    font-size: var(--size-step-1);
    line-height: 1.4;
    max-width: 65ch;
    text-wrap: pretty;
  }

  .button-group {
    --flow-space: 2.5em;
    display: flex;
    align-items: center;
    gap: var(--sizing-md);
  }
}
</style>
