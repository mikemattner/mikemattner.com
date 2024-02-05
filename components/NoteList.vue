<template>
  <section class="note-list__section">
    <ul class="note-list">
      <li v-for="note in notes" :key="note.title" class="note-list__list-item">
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

  li {
    position: relative;
    padding: 0 0 var(--sizing-xxxl) 2em;
    border-left: 2px solid var(--border-color);

    &:last-child {
      padding-bottom: 0;

      .note-list-item {
        padding-bottom: 0;
      }
    }

    &:before {
      width: 1em;
      height: 1em;
      display: block;
      top: 0;
      position: absolute;
      left: -0.53em;
      content: '';
      border: 2px solid var(--border-color);
      background: var(--background-color);
      border-radius: 50%;
      z-index: 2;
    }

    &:after {
      width: 1.5em;
      height: 2px;
      display: block;
      top: 0.45em;
      position: absolute;
      left: 0;
      content: '';
      background: var(--border-color);
      border-radius: 0;
      z-index: 1;
    }
  }
}
</style>
