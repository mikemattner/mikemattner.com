<template>
  <div class="base-search">
    <BaseInput
      id="search"
      ref="searchInput"
      name="search"
      placeholder="Search"
      clearable
      @clear="closeOrClearSearch"
      @input="search"
      v-model="searchTerm"
    />
    <div class="search-results">
      <ContentQuery
        :where="[
          {
            $or: [
              { title: { $icontains: searchTerm } },
              { description: { $icontains: searchTerm } },
              { url: { $icontains: searchTerm } },
              { body: { $icontains: searchTerm } },
              { tag: { $icontains: searchTerm } },
              { category: { $icontains: searchTerm } },
            ],
          },
        ]"
      >
        <template #default="{ data }">
          <ul class="result-list">
            <li v-for="result in data" :key="result._path" @click="selectOption">
              <NuxtLink class="article-link" :to="result._path">
                {{ result.title }}
                <span class="description" v-html="result.description" />
              </NuxtLink>
            </li>
          </ul>
        </template>
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentQuery>
      <!-- <p v-if="!data">No results</p>
      <ul v-if="data" class="result-list">
        <li v-for="result in data" :key="result._path" @click="selectOption">
          <NuxtLink class="article-link" :to="result._path">
            {{ result.title }}
            <span class="description" v-html="result.description" />
          </NuxtLink>
        </li>
      </ul> -->
      <!-- <p v-if="!data">No results</p>
      <ul v-if="data" class="result-list">
        <li v-for="result in data" :key="result._path" @click="selectOption">
          <NuxtLink class="article-link" :to="result._path">
            {{ result.title }}
            <span class="description" v-html="result.description" />
          </NuxtLink>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';
import { useModal } from '~/composables/useModal';
const { close } = useModal();

const searchInput = ref();

const searchTerm = ref<string>('');

const query = reactive<QueryBuilderParams>({
  path: '/blog',
  name: 'blog-search',
  where: [
    {
      $or: [
        { title: { $icontains: searchTerm.value } },
        { description: { $icontains: searchTerm.value } },
        { url: { $icontains: searchTerm.value } },
        { body: { $icontains: searchTerm.value } },
        { tag: { $icontains: searchTerm.value } },
        { category: { $icontains: searchTerm.value } },
      ],
    },
  ],
});

// TODO: figure out how to get better search results
// const miniSearchOptions = defineMiniSearchOptions({
//   fields: ['title', 'description', 'body'],
// });
// const results = await searchContent(searchTerm, miniSearchOptions);
// const resultList = computed<Array<SearchList>>(() => {
//   return results.value?.map((result: SearchResults) => {
//     return {
//       title: result.title ? result.title : 'No title',
//       url: result.id ? result.id : '/',
//     };
//   });
// });

const closeOrClearSearch = () => {
  if (searchTerm.value) {
    searchTerm.value = '';
    refresh();
  } else {
    close();
  }
};

const selectOption = () => {
  close();
};

const { data, refresh } = await useAsyncData(
  'blog-search',
  () =>
    queryContent()
      .where({
        $or: [
          { title: { $icontains: searchTerm.value } },
          { description: { $icontains: searchTerm.value } },
          { url: { $icontains: searchTerm.value } },
          { body: { $icontains: searchTerm.value } },
          { tag: { $icontains: searchTerm.value } },
          { category: { $icontains: searchTerm.value } },
        ],
      })
      .limit(10)
      .find(),
  {
    watch: [searchTerm],
    server: false,
  }
);

const search = () => {
  refresh();
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
  height: 400px;

  .search-results {
    font-size: var(--size-step--1);
    overflow-y: scroll;
    overflow-x: auto;
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
