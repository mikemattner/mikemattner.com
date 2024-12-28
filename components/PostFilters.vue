<template>
  <aside class="post-filters">
    <BaseButton v-if="showOpenFiltersButton" size="sm" @click="openFilterBody()">
      {{ openFiltersButtonText }}
      <BaseBadge type="light" v-if="hasFilters">{{ filterCount }}</BaseBadge>
      <Icon :name="openFiltersButtonIcon" />
    </BaseButton>
    <div :class="['filters-body', { 'is-active': openFilters }]" key="filterBody">
      <div v-if="showOpenFiltersButton" class="close-container">
        <h2 class="small-heading">Filter</h2>
        <button class="close-button" @click="openFilterBody()">
          <Icon name="ri:close-large-fill" />
        </button>
      </div>

      <BasePanel :open="showOpenFiltersButton" has-border>
        <template #header>
          {{ filtersPanelTitle }}
        </template>
        <div class="clear-filters">
          <TransitionGroup name="fade" class="filtered-items" tag="div">
            <BaseButton
              v-for="filter in filterList"
              variant="outline"
              color="secondary"
              size="xs"
              has-icon
              :key="filter"
              @click="handleFilterRemove(filter)"
            >
              {{ filter }}
              <Icon name="ri:close-fill" />
            </BaseButton>
            <p v-if="!hasFilters" class="no-filters-text" key="noFilterText">No Filters Selected</p>
          </TransitionGroup>
        </div>
        <template #footer>
          <BaseButton size="xs" :disabled="!hasFilters" class="clear-button" @click="clearAllFilters">
            {{ clearFilterText }}
            <Icon v-if="hasFilters" name="ri:delete-bin-2-line" />
          </BaseButton>
        </template>
      </BasePanel>
      <BasePanel icon-variant="plus">
        <template #header>
          <div class="filter-panel-headers">
            Filter by Tag
            <BaseBadge type="warning" v-if="hasTagFilters">{{ tagFilterCount }}</BaseBadge>
          </div>
        </template>
        <ul class="filter-list">
          <li v-for="tag in tags" :key="tag">
            <BaseCheckbox :id="`year-${tag}`" :name="`year-${tag}`" :value="tag" v-model="tagFilter">
              {{ tag }}
            </BaseCheckbox>
          </li>
        </ul>
      </BasePanel>
      <BasePanel icon-variant="plus">
        <template #header>
          <div class="filter-panel-headers">
            Filter by Year
            <BaseBadge type="warning" v-if="hasYearFilters">{{ yearFilterCount }}</BaseBadge>
          </div>
        </template>
        <ul class="filter-list">
          <li v-for="year in years" :key="year">
            <BaseCheckbox :id="`year-${year}`" :name="`year-${year}`" :value="year" v-model="yearFilter">
              {{ year }}
            </BaseCheckbox>
          </li>
        </ul>
      </BasePanel>
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { Post, SortedPostItem } from '../types/posts';
import type { Note, SortedNoteItem } from '../types/notes';
import { useMediaQuery } from '@vueuse/core';

const props = defineProps({
  posts: { type: Array as PropType<Post[] | Note[]>, required: true },
  sortedPosts: { type: Array as PropType<SortedPostItem[] | SortedNoteItem[]>, required: true },
  years: { type: Array<string>, required: true },
  yearFilter: { type: Array<string>, required: true },
  tags: { type: Array<string>, required: true },
  tagFilter: { type: Array<string>, required: true },
});

const emit = defineEmits(['update:yearFilter', 'update:tagFilter']);

const isMobile = useMediaQuery('(max-width: 979px)');

const showOpenFiltersButton = ref<boolean>(false);
const openFilters = ref<boolean>(false);
const openFilterBody = () => {
  openFilters.value = !openFilters.value;
};

nextTick(() => {
  if (isMobile.value) {
    openFilters.value = false;
    showOpenFiltersButton.value = true;
  }
});

onMounted(() => {
  watch(
    isMobile,
    (value) => {
      if (value) {
        openFilters.value = false;
        showOpenFiltersButton.value = true;
      } else {
        openFilters.value = true;
        showOpenFiltersButton.value = false;
      }
    },
    { immediate: true }
  );
});

const filterCount = computed<number>(() => {
  return yearFilter.value.length + tagFilter.value.length;
});

const filterList = computed<Array<string>>(() => {
  return [...yearFilter.value, ...tagFilter.value].sort((a, b) => a.localeCompare(b));
});

const handleFilterRemove = (filter: string) => {
  if (yearFilter.value.includes(filter)) {
    yearFilter.value.splice(yearFilter.value.indexOf(filter), 1);
    return;
  }
  if (tagFilter.value.includes(filter)) {
    tagFilter.value.splice(tagFilter.value.indexOf(filter), 1);
    return;
  }
};

const clearFilterText = computed<string>(() => {
  if (filterCount.value == 0) return 'No Filters';
  if (filterCount.value > 3) return 'Clear 3+ Filters';
  return filterCount.value > 1 ? `Clear ${filterCount.value} Filters` : 'Clear Filter';
});

const filtersPanelTitle = computed<string>(() => {
  if (filterCount.value == 0) return 'No Filters Selected';
  return 'Filters Selected';
});

const openFiltersButtonText = computed<string>(() => {
  const postType = props.sortedPosts[0].hasOwnProperty('notes') ? 'Notes' : 'Post';
  return `Filter ${postType}s`;
});

const openFiltersButtonIcon = computed<string>(() => {
  return 'ri:equalizer-line';
});

const yearFilter = computed<Array<string>>({
  get() {
    return props.yearFilter;
  },
  set(value) {
    emit('update:yearFilter', value);
  },
});

const yearFilterCount = computed<number>(() => {
  return yearFilter.value.length;
});

const hasYearFilters = computed<boolean>(() => {
  return yearFilter.value.length > 0;
});

watch(
  () => yearFilter.value,
  (newValue) => {
    if (newValue.length === props.years.length) {
      yearFilter.value = [];
      return;
    }
  },
  { deep: true }
);

const tagFilter = computed<Array<string>>({
  get() {
    return props.tagFilter;
  },
  set(value) {
    emit('update:tagFilter', value);
  },
});

const tagFilterCount = computed<number>(() => {
  return tagFilter.value.length;
});

const hasTagFilters = computed<boolean>(() => {
  return tagFilter.value.length > 0;
});

watch(
  () => tagFilter.value,
  (newValue) => {
    if (newValue.length === props.tags.length) {
      tagFilter.value = [];
      return;
    }
  },
  { deep: true }
);

const hasFilters = computed<boolean>(() => {
  return yearFilter.value.length > 0 || tagFilter.value.length > 0;
});

const clearAllFilters = () => {
  yearFilter.value = [];
  tagFilter.value = [];
};
</script>

<style lang="scss" scoped>
.post-filters {
  // TODO: Make this sticky, but respect the bottom of the
  //       viewport to avoid content running past the bottom
  //       of the screen.
  // @media (min-width: 980px) {
  //   position: sticky;
  //   top: 50px;
  // }
  .filters-body {
    margin-top: 0;
    transition: var(--transition-cubic-med);

    @media (min-width: 980px) {
      margin-top: var(--sizing-xl);
    }

    @media (max-width: 979px) {
      background-color: var(--background-color);
      padding: 0 var(--sizing-xl) var(--sizing-xl);
      margin-top: 0;
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 100000;
      transform: translate(100vw, 0);
      transition: all 0.25s 0s var(--transition-timing);
      opacity: 0;
      visibility: hidden;

      &.is-active {
        opacity: 1;
        visibility: visible;
        transform: translate(0, 0);
        transition: all 0.25s 0s var(--transition-timing);
      }
    }
  }

  ul.filter-list {
    list-style: none;
    padding: 0 var(--sizing-md) var(--sizing-md);
    margin: 0;
    font-size: var(--size-step--1);

    @media (max-width: 979px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--sizing-md);
    }

    li {
      padding: var(--sizing-sm) 0;
      margin: 0;

      @media (min-width: 980px) {
        margin: 0 0 var(--sizing-md);
      }
    }
  }
}

.filter-header {
  line-height: 1;
  font-size: var(--size-step--1);
  margin-top: var(--sizing-xxl);

  &:first-child {
    margin-top: 0;
  }
}

.clear-filters {
  padding: var(--sizing-md);
  font-size: var(--size-step--1);
}

.clear-button {
  @media (max-width: 979px) {
    order: -1;
  }
}

.filtered-items {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--sizing-md);
  padding: 0;
  position: relative;

  @media (max-width: 979px) {
    flex-direction: row;
    flex-wrap: wrap;
    overflow-x: auto;
  }
}

.filter-panel-headers {
  display: flex;
  align-items: center;
  gap: var(--sizing-md);
}

.no-filters-text {
  grid-column: 1 / -1;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
  @media (max-width: 979px) {
    transform: translateY(30px);
  }
}

.fade-leave-active {
  position: absolute;
}

.close-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--sizing-xl) 0;
}

.close-button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  margin-left: auto;
  color: var(--headline-font-color);
  transition: var(--transition);
  cursor: pointer;
  font-size: var(--size-step-1);
  line-height: 1;

  &:hover {
    color: var(--color-primary);
  }
}
</style>
