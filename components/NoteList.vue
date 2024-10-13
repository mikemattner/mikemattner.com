<template>
  <section class="note-list__section">
    <!-- <ul class="note-list">
      <li v-for="note in notes" :key="note.title" class="note-list__list-item">
        <NoteListItem :note="note" />
      </li>
    </ul> -->
    <div v-for="(item, index) in sortedNotes" :key="index" class="year-group">
      <header class="year-group__header">
        <h3 class="year-header">{{ item.year }}</h3>
        <div class="year-header__article-count">{{ item.notes.length }} Items</div>
      </header>
      <ul class="note-list">
        <li v-for="note in item.notes" :key="note.title" class="article-list__item">
          <NoteListItem :note="note" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Note, SortedNoteItem, SortedNotes } from '../types/notes';
import { convertDate } from '../utils/formatDate';

const props = defineProps({
  notes: { type: Array as PropType<Note[]>, required: true },
});

const sortedNotes = computed<SortedNoteItem[]>(() => {
  const sortedArray: SortedNotes = {};

  props.notes.forEach((item) => {
    const year = convertDate(item.date);
    if (!sortedArray[year]) {
      sortedArray[year] = { year, notes: [] };
    }
    sortedArray[year].notes.push(item);
  });

  return Object.values(sortedArray).sort().reverse();
});
</script>

<style lang="scss" scoped>
.note-list__section {
  position: relative;
}
.note-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  li {
    position: relative;
    padding: 0 0 var(--sizing-xxxl) 0;

    &:last-child {
      padding-bottom: 0;
    }
  }
}

.year-group {
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(28, 1fr);
    gap: var(--sizing-xxl) 0;
    margin: var(--sizing-xxxl) 0 var(--sizing-xxl);

    .note-list {
      grid-column: 9 / -1;
    }
  }
}

.year-group__header {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: var(--sizing-xl);
  margin: var(--sizing-xxxl) 0 var(--sizing-xxl);

  @media (min-width: 768px) {
    grid-column: 1 / span 6;
    margin: 0;
    flex-direction: column;
    gap: var(--sizing-sm);
  }
}

.year-header {
  line-height: 1;
  font-size: var(--size-step-0);
}

.year-header__article-count {
  font-size: var(--size-step--1);
}
</style>
