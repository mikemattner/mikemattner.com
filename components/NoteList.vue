<template>
  <section class="note-list__section">
    <div class="filters-section">
      <PostFilters
        :years="yearsInPosts"
        :year-filter="yearFilter"
        :tags="tagsInPosts"
        :tag-filter="tagFilter"
        :posts="notes"
        :sorted-posts="sortedNotes"
        @update:tag-filter="tagFilter = $event"
        @update:year-filter="yearFilter = $event"
      />
    </div>
    <div class="note-group">
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
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Note, SortedNoteItem, SortedNotes } from '../types/notes';
import { convertDate } from '../utils/formatDate';

const props = defineProps({
  notes: { type: Array as PropType<Note[]>, required: true },
});

const yearFilter = ref<Array<string>>([]);
const yearsInPosts = computed<string[]>(() => {
  const years = props.notes.map((item) => convertDate(item.date));
  return [...new Set(years)];
});

const tagFilter = ref<Array<string>>([]);
const tagsInPosts = computed<string[]>(() => {
  const topics = props.notes
    .map((item) => item.tag)
    .flat()
    .sort((a, b) => a.localeCompare(b));
  return [...new Set(topics)];
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

  const noteList = Object.values(sortedArray).sort().reverse();

  if (yearFilter.value.length) {
    const filteredPosts = noteList.filter((item) => yearFilter.value.includes(item.year));

    if (tagFilter.value.length) {
      filteredPosts.forEach((item) => {
        item.notes = item.notes.filter((note) => note.tag.some((tag) => tagFilter.value.includes(tag)));
      });
    }

    return filteredPosts;
  }

  if (tagFilter.value.length) {
    const filteredPosts = noteList
      .map((item) => {
        return {
          year: item.year,
          notes: item.notes.filter((note) => note.tag.some((tag) => tagFilter.value.includes(tag))),
        };
      })
      .filter((item) => item.notes.length > 0);

    return filteredPosts;
  }

  return noteList;
});
</script>

<style lang="scss" scoped>
.note-list__section {
  position: relative;
  @media (min-width: 980px) {
    display: grid;
    grid-template-columns: repeat(28, 1fr);

    .note-group {
      grid-column: 1 / 20;
    }
    .filters-section {
      grid-column: 24 / -1;
      grid-row: 1;
    }
  }
}
.note-list {
  list-style: none;
  padding: 0;
  margin: 0;

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
    margin: var(--sizing-xxxl) 0 var(--sizing-xxl);
  }
}

.year-group__header {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: var(--sizing-xl);
  margin: var(--sizing-xxxl) 0 var(--sizing-xxl);

  // @media (min-width: 768px) {
  //   margin: 0;
  //   flex-direction: column;
  //   gap: var(--sizing-sm);
  // }
}

.year-header {
  line-height: 1;
  font-size: var(--size-step-0);
}

.year-header__article-count {
  font-size: var(--size-step--1);
}
</style>
