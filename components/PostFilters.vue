<template>
  <aside class="post-filters">
    <BaseButton v-if="isMobile" size="xs" @click="openFilterBody()">
      <template v-if="!openFilters">
        Filter Posts
        <span v-if="hasFilters">({{ filterCount }})</span>
        <Icon name="ri:filter-2-line" />
      </template>
      <template v-else>
        Close Post Filters
        <span v-if="hasFilters">({{ filterCount }})</span>
        <Icon name="ri:close-fill" />
      </template>
    </BaseButton>
    <div :class="['filters-body', { 'is-active': openFilters }]" key="filterBody">
      <TransitionGroup name="fade">
        <div class="clear-filters" key="clear-button">
          <BaseButton :variant="clearButtonVariant" size="xs" :disabled="!hasFilters" @click="clearAllFilters">
            {{ clearFilterText }}
            <Icon v-if="hasFilters" name="ri:close-fill" />
          </BaseButton>
        </div>
        <div key="filters">
          <h3 class="filter-header">Filter by Year</h3>
          <ul class="filter-list">
            <li v-for="year in years" :key="year">
              <BaseButton
                :variant="yearButtonVariant(year)"
                size="xs"
                :has-icon="isYearCurrentlyFiltered(year)"
                :disabled="!yearExistsInSortedPosts(year)"
                @click="handleYearFilter(year)"
              >
                {{ year }}
                <Icon v-if="isYearCurrentlyFiltered(year)" name="ri:close-fill" />
              </BaseButton>
            </li>
          </ul>
          <h3 class="filter-header">Filter by Tag</h3>
          <ul class="filter-list">
            <li v-for="tag in tags" :key="tag">
              <BaseButton
                :variant="tagButtonVariant(tag)"
                size="xs"
                :has-icon="isTagCurrentlyFiltered(tag)"
                :disabled="!tagExistsInSortedPosts(tag)"
                @click="handleTagFilter(tag)"
              >
                {{ tag }}
                <Icon v-if="isTagCurrentlyFiltered(tag)" name="ri:close-fill" />
              </BaseButton>
            </li>
          </ul>
        </div>
      </TransitionGroup>
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { Post, SortedPostItem } from '../types/posts';
import { useMediaQuery } from '@vueuse/core';

const isMobile = useMediaQuery('(max-width: 979px)');

watch(isMobile, () => {
  if (isMobile.value) {
    openFilters.value = false;
  } else {
    openFilters.value = true;
  }
});

const props = defineProps({
  posts: { type: Array as PropType<Post[]>, required: true },
  sortedPosts: { type: Array as PropType<SortedPostItem[]>, required: true },
  years: { type: Array<string>, required: true },
  yearFilter: { type: Array<string>, required: true },
  tags: { type: Array<string>, required: true },
  tagFilter: { type: Array<string>, required: true },
});

const emit = defineEmits(['update:yearFilter', 'update:tagFilter']);

const filterCount = computed<number>(() => {
  return yearFilter.value.length + tagFilter.value.length;
});

const clearFilterText = computed<string>(() => {
  if (filterCount.value == 0) return 'No Filters';
  if (filterCount.value > 5) return 'Clear 5+ Filters';
  return filterCount.value > 1 ? `Clear ${filterCount.value} Filters` : 'Clear Filter';
});

const clearButtonVariant = computed<'outline' | 'text'>(() => {
  return filterCount.value > 0 ? 'outline' : 'text';
});

const openFilters = ref<boolean>(true);
const openFilterBody = () => {
  openFilters.value = !openFilters.value;
};

const yearFilter = computed<Array<string>>({
  get() {
    return props.yearFilter;
  },
  set(value) {
    emit('update:yearFilter', value);
  },
});

const handleYearFilter = (year: string) => {
  if (yearFilter.value.includes(year)) {
    yearFilter.value.splice(yearFilter.value.indexOf(year), 1);
    return;
  }
  if (yearFilter.value.length === props.years.length) {
    yearFilter.value = [];
    return;
  }
  yearFilter.value.push(year);
};

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
    // tagFilter.value.forEach((filter) => {
    //   if (
    //     !sortedPosts.value.some((item) =>
    //       item.posts.some((post) => tagFilter.value.some((tag) => post.tag.includes(filter)))
    //     )
    //   ) {
    //     tagFilter.value.splice(tagFilter.value.indexOf(filter), 1);
    //   }
    // });
  },
  { deep: true }
);

const isYearCurrentlyFiltered = (year: string) => {
  return yearFilter.value.includes(year);
};

const yearButtonVariant = (year: string) => {
  return yearFilter.value.includes(year) ? 'solid' : 'outline';
};

const tagFilter = computed<Array<string>>({
  get() {
    return props.tagFilter;
  },
  set(value) {
    emit('update:tagFilter', value);
  },
});

const handleTagFilter = (tag: string) => {
  if (tagFilter.value.includes(tag)) {
    tagFilter.value.splice(tagFilter.value.indexOf(tag), 1);
    return;
  }
  if (tagFilter.value.length === props.tags.length) {
    tagFilter.value = [];
    return;
  }
  tagFilter.value.push(tag);
};

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
    // yearFilter.value.forEach((filter) => {
    //   if (!sortedPosts.value.filter((item) => item.year === filter)[0].posts.length) {
    //     yearFilter.value.splice(yearFilter.value.indexOf(filter), 1);
    //   }
    // });
  },
  { deep: true }
);

const isTagCurrentlyFiltered = (tag: string) => {
  return tagFilter.value.includes(tag);
};

const tagButtonVariant = (tag: string) => {
  return tagFilter.value.includes(tag) ? 'solid' : 'outline';
};

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
  .filters-body {
    // background-color: var(--filter-bg);
    // padding: 0 var(--sizing-xl);
    // box-shadow: var(--box-shadow-long);
    // border-radius: 7px;
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
      //   padding: var(--sizing-xl);
    }
  }

  ul.filter-list {
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: 979px) {
      display: flex;
      flex-wrap: wrap;
      gap: var(--sizing-md);
      margin: var(--sizing-lg) 0;
    }

    li {
      padding: 0;
      margin: 0;

      @media (min-width: 980px) {
        margin: var(--sizing-md) 0 0;
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
  margin-bottom: var(--sizing-xxl);
}

.fade-move, /* apply transition to moving elements */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>
