<template>
  <div class="article-navigation">
    <div v-if="prev" class="prev-article">
      <h2 class="h4-heading">Previous article</h2>
      <NuxtLink :to="prev._path" :title="prev.title" class="prev-button" variant="link" size="md" color="primary">
        {{ prev.title }}
      </NuxtLink>
    </div>
    <div v-if="next" class="next-article">
      <h2 class="h4-heading">Next article</h2>
      <NuxtLink :to="next._path" :title="next.title" class="next-button" variant="link" size="md" color="primary">
        {{ next.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { path } = useRoute();

const [prev, next] = await queryContent('/writing')
  .only(['_path', 'title'])
  .sort({ date: 1 })
  .findSurround({ _path: path });
</script>

<style lang="scss" scoped>
.article-navigation {
  align-items: center;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid var(--border-color);
}

.prev-article {
  grid-column: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: self-start;
  height: 100%;
  padding: var(--sizing-xxl) var(--sizing-md);
}
.next-article {
  grid-column: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  height: 100%;
  padding: var(--sizing-xxl) var(--sizing-md);
  border-left: 1px solid var(--border-color);
}
</style>
