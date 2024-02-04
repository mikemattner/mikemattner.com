<template>
  <section class="note-list__section">
    <ul class="note-list">
      <li v-for="note in notes" :key="note.title" class="note-list__item">
        <NoteListItem :note="note" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { Note } from '../types/notes';

const props = defineProps({
  notes: { type: Array as PropType<Note[]>, required: true },
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
}
</style>
