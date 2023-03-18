<template>
  <main>
    <article>
      <ContentRenderer :value="data">
        <h1>{{ data.title }}</h1>
        <ContentRendererMarkdown class="flow" :value="data" />
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
    </article>
  </main>
</template>

<script setup lang="ts">
const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>
