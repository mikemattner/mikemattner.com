<template>
  <NuxtLayout>
    <main class="error-page">
      <div class="error-layout">
        <h1>Content not found!</h1>
        <p>Well, this is embarrassing. I am not entirely sure what went wrong, but head home if you like.</p>
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Error',
});
</script>

<style>
.error-page {
  max-width: var(--max-width);
  margin-inline: auto;
  width: 100%;
}
</style>
