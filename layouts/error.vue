<template>
  <div class="error">
    <PageHero full>
      <div class="main-content">
        <h1 v-if="error.statusCode === 404" class="display-3">
          {{ error.statusCode }}
        </h1>
        <h1 v-else class="display-3">An error occurred</h1>
        <p v-if="error.message">{{ error.message }}.</p>
        <p v-else>Well, this is embarrassing. Something is amiss.</p>
      </div>
    </PageHero>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
