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

  li {
    position: relative;
    padding: 0 0 var(--sizing-xxxl);
    padding-left: 2em;
    border-left: 1px solid var(--border-color);

    &:before {
      width: 1em;
      height: 1em;
      display: block;
      top: 0;
      position: absolute;
      left: -0.53em;
      content: '';
      // border: 2px solid var(--border-color);
      background: var(--color-primary);
      transition: var(--transition-cubic);
      border-radius: 50%;
      // box-shadow: 0 0 0 0 hsla(var(--color-primary-hsl), 0.2), 0 0 0 0 var(--color-primary);
    }

    // &:hover {
    //   &:before {
    //     box-shadow: 0 0 30px 0 hsla(var(--color-primary-hsl), 0.2), 0 0 10px 0 var(--color-primary);
    //   }
    // }
  }
}
</style>
