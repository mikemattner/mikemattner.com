<template>
  <div class="article-navigation">
    <BaseButton v-if="prev" :to="prev._path" variant="outline" size="sm" color="primary">{{ prev.title }}</BaseButton>
    <BaseButton v-if="next" :to="next._path" variant="outline" size="sm" color="primary">{{ next.title }}</BaseButton>
  </div>
</template>

<script setup lang="ts">
const { path } = useRoute();

const [prev, next] = await queryContent().only(['_path', 'title']).sort({ date: 1 }).findSurround({ _path: path });
</script>

<style lang="scss" scoped>
.article-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
