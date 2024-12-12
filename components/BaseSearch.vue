<template>
  <div>
    <BaseInput id="search" name="search" v-model="search"> Search </BaseInput>
    <pre v-if="results.length">{{ results }} </pre>
  </div>
</template>

<script setup lang="ts">
const search = ref('');

const results = await searchContent(search);
</script>

<style scoped></style>
