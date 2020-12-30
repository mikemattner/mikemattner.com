<template>
  <div class="error">
    <PageHero full decorator>
      <div class="main-content">
        <h1 class="display-3" v-if="error.statusCode === 404">
          Page not found
        </h1>
        <h1 class="display-3" v-else>An error occurred</h1>
        <p>Well, this is embarassing. Something is amiss.</p>
      </div>
    </PageHero>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
