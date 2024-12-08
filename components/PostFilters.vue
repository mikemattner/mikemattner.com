<template>
  <aside class="post-filters">
    <BaseButton v-if="showOpenFiltersButton" size="sm" @click="openFilterBody()">
      {{ openFiltersButtonText }}
      <span v-if="hasFilters">{{ filterCountText }}</span>
      <Icon :name="openFiltersButtonIcon" />
    </BaseButton>
    <div :class="['filters-body', { 'is-active': openFilters }]" key="filterBody">
      <BasePanel has-border>
        <template #header>{{ filtersPanelTitle }}</template>
        <div class="clear-filters">
          <TransitionGroup name="fade" class="filtered-items" tag="div">
            <BaseButton
              v-for="filter in filterList"
              variant="outline"
              size="xs"
              has-icon
              :key="filter"
              @click="handleFilterRemove(filter)"
            >
              {{ filter }}
              <Icon name="ri:close-fill" />
            </BaseButton>
            <p v-if="!hasFilters" key="noFilterText">No Filters Selected</p>
          </TransitionGroup>
        </div>
        <template #footer>
          <BaseButton size="xs" :disabled="!hasFilters" class="clear-button" @click="clearAllFilters">
            {{ clearFilterText }}
            <Icon v-if="hasFilters" name="ri:close-fill" />
          </BaseButton>
        </template>
      </BasePanel>
      <BasePanel>
        <template #header>Filter by Tag</template>
        <ul class="filter-list">
          <li v-for="tag in tags" :key="tag">
            <BaseCheckbox :id="`year-${tag}`" :name="`year-${tag}`" :value="tag" v-model="tagFilter">
              {{ tag }}
            </BaseCheckbox>
          </li>
        </ul>
      </BasePanel>
      <BasePanel>
        <template #header>Filter by Year</template>
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

const filterCountText = computed<string>(() => {
  if (filterCount.value > 3) return '(3+)';
  return `(${filterCount.value})`;
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
  if (filterCount.value > 3) return '3+ Filters Selected';
  return filterCount.value > 1 ? `${filterCount.value} Filters Selected` : '1 Filter Selected';
});

const openFiltersButtonText = computed<string>(() => {
  let postType = 'Post';
  if (props.sortedPosts[0].hasOwnProperty('notes')) postType = 'Note';
  return openFilters.value ? `Close ${postType} Filters` : `Filter ${postType}s`;
});

const openFiltersButtonIcon = computed<string>(() => {
  return openFilters.value ? 'ri:close-fill' : 'ri:equalizer-line';
});

const yearFilter = computed<Array<string>>({
  get() {
    return props.yearFilter;
  },
  set(value) {
    emit('update:yearFilter', value);
  },
});

const yearExistsInSortedPosts = (year: string) => {
  // if (!tagFilter.value.length) return true;
  // return sortedPosts.value.some((item) => item.year === year);
  return true;
};

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

const tagExistsInSortedPosts = (tag: string) => {
  // if (!yearFilter.value.length) return true;
  // if (tagFilter.value.includes(tag)) return true;
  // return sortedPosts.value.some((item) => item.posts.some((post) => post.tag.includes(tag)));
  return true;
};

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
  @media (min-width: 980px) {
    position: sticky;
    top: 50px;
  }
  .filters-body {
    margin-top: 0;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition-cubic-med);
    max-height: 0;

    &.is-active {
      opacity: 1;
      visibility: visible;
      max-height: 150vh;
      margin-top: var(--sizing-xl);
    }

    @media (max-width: 979px) {
      background-color: var(--filter-bg);
      padding: 0 var(--sizing-xl);
      box-shadow: var(--box-shadow-long);
      border-radius: 7px;

      &.is-active {
        padding: var(--sizing-xl);
      }
    }
  }

  ul.filter-list {
    list-style: none;
    padding: 0 var(--sizing-md) var(--sizing-md);
    margin: 0;

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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--sizing-md);
  }
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
</style>
