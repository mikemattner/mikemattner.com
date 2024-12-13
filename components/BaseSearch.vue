<template>
  <div class="base-search">
    <BaseInput
      id="search"
      ref="searchInput"
      name="search"
      clearable
      @clear="closeOrClearSearch"
      @input="search"
      v-model="searchTerm"
    >
      Search
    </BaseInput>
    <div class="search-results">
      <!-- <ContentList
        v-if="searchTerm"
        :path="`/blog/${searchTerm}`"
        fields="title, thumbnail, date"
        :query="{
          draft: false,
          sort: [
            {
              date: -1,
            },
          ],
        }"
      >
        <template #default="{ list }">
          <ul class="result-list">
            <li v-for="result in list" :key="result._path" @click="selectOption">
              <NuxtLink class="article-link" :to="result._path">{{ result.title }}</NuxtLink>
            </li>
          </ul>
        </template>
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList> -->
      <p v-if="!data">No results</p>
      <ul v-if="data" class="result-list">
        <li v-for="result in data" :key="result._path" @click="selectOption">
          <NuxtLink class="article-link" :to="result._path">
            {{ result.title }}
            <span class="description">{{ result.description }}</span>
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

const searchTerm = ref<string>();

// TODO: figure out how to get better search results
// const results = await searchContent(searchTerm);
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

const { data, refresh } = await useAsyncData('blog-search', () =>
  queryContent()
    .where({
      $or: [
        { title: { $icontains: searchTerm.value } },
        { description: { $icontains: searchTerm.value } },
        { url: { $icontains: searchTerm.value } },
        { body: { $icontains: searchTerm.value } },
        { tag: { $icontains: searchTerm.value } },
      ],
    })
    .limit(10)
    .find()
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
  width: 50vw;
  min-width: 550px;
  height: 400px;

  .search-results {
    font-size: var(--size-step-0);
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
      font-size: var(--size-step--1);
      font-weight: var(--font-weight);
    }

    &:hover {
      background-color: var(--color-primary);
      color: var(--color-light);
    }
  }
}
</style>
