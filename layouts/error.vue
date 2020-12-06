<template>
  <div class="error">
    <PageHero full decorator>
      <template v-slot:default>
        <div class="columns">
          <div class="column is-two-thirds">
            <h1 v-if="error.statusCode === 404">Page not found</h1>
            <h1 v-else>An error occurred</h1>
            <p>Well, this is embarassing. Something is amiss.</p>
          </div>
        </div>
      </template>
    </PageHero>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
