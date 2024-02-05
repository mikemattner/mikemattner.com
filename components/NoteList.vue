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
    border-left: 1px solid var(--border-color);

    &:last-child {
      padding-bottom: 0;
    }

    &:before {
      width: 2rem;
      height: 2rem;
      display: block;
      top: 0;
      position: absolute;
      left: -1.03rem;
      content: '';
      border: 1px solid var(--border-color);
      background: var(--background-color);
      border-radius: 50%;
      z-index: 2;
      transition: var(--transition);
    }

    // &:after {
    //   content: '';
    //   width: 0.675em;
    //   height: 1px;
    //   display: block;
    //   top: 1rem;
    //   position: absolute;
    //   left: 1rem;
    //   background: var(--border-color);
    //   border-radius: 0;
    //   z-index: 1;
    // }

    &:hover {
      &:before {
        border-color: var(--color-primary);
        // box-shadow: 0 0 0 0 var(--color-primary);
      }
      // &:after {
      //   background: var(--color-primary);
      // }
    }
  }
}
</style>
