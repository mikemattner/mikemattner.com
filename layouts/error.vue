<template>
  <div class="error">
    <PageHero full>
      <div class="main-content">
        <h1 v-if="error.statusCode === 404" class="display-4">
          This Content Does Not Exist
        </h1>
        <h1 v-else class="display-4">An error occurred</h1>
        <p>
          Well, this is embarrassing. I am not entirely sure what went wrong,
          but head home if you like.
        </p>
        <Button to="/" primary ghost>Run Home</Button>
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
