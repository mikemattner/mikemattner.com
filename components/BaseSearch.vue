<template>
  <div class="base-search">
    <BaseInput id="search" ref="searchInput" name="search" icon="ri:search-line" clearable v-model="searchTerm" />
    <div class="search-results">
      <p v-if="!results.length">No results</p>
      <ul v-if="results" class="result-list">
        <li v-for="result in resultList" :key="result.url" @click="selectOption">
          <NuxtLink class="article-link" :to="result.url">
            {{ result.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModal } from '~/composables/useModal';
const { close } = useModal();

const searchInput = ref();

const searchTerm = ref<string>('');

// TODO: figure out how to get better search results
const miniSearchOptions = defineMiniSearchOptions({
  fields: ['title', 'description', 'body'],
});
const results = await searchContent(searchTerm, miniSearchOptions);
const resultList = computed<Array<SearchList>>(() => {
  return results.value?.map((result: SearchResults) => {
    return {
      title: result.title ? result.title : 'No title',
      url: result.id ? result.id : '/',
    };
  });
});

const selectOption = () => {
  close();
};

onMounted(() => {
  searchInput.value.focus();
});
</script>

<style lang="scss" scoped>
.base-search {
  display: grid;
  gap: var(--sizing-md);
  grid-template-rows: auto 1fr;
  font-family: var(--sans-font-family);

  @media (min-width: 716px) {
    height: 400px;
  }

  .search-results {
    font-size: var(--size-step--1);
    overflow-y: scroll;
    overflow-x: auto;
  }

  .search-footer {
    font-size: var(--size-step--1);
  }

  .result-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    width: 100%;

    li {
      margin: 0;
      padding: 0;
    }
  }

  .article-link {
    color: var(--color-text);
    text-decoration: none;
    padding: var(--sizing-md) var(--sizing-md);
    width: 100%;
    display: block;
    border-radius: var(--border-radius);
    font-weight: 800;

    .description {
      display: block;
      font-size: var(--size-step--2);
      font-weight: var(--font-weight);
    }

    &:hover {
      background-color: var(--color-primary);
      color: var(--color-light);
    }
  }
}
</style>
