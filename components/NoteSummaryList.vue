<template>
  <section class="note-list__section">
    <div class="note-group">
      <h3 class="note-header small-heading">Notes</h3>
      <ul class="note-list">
        <li v-for="note in notes" :key="note.title" class="article-list__item">
          <NoteListSummaryItem :note="note" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Note } from '../types/notes';

const props = defineProps({
  notes: { type: Array as PropType<Note[]>, required: true },
});
</script>

<style lang="scss" scoped>
.note-list__section {
  position: relative;
}
.note-header {
  margin: var(--sizing-xxl) 0 0 0;
}
.note-list {
  list-style: none;
  padding: 0;
  margin: var(--sizing-lg) 0;
  border-top: 1px solid var(--border-color);

  li {
    position: relative;
    padding: var(--sizing-xl) 0;
    border-bottom: 1px solid var(--border-color);
  }
}
</style>
