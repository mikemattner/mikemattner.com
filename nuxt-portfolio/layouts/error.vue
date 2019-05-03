<template>
  <div class="error">
    <BaseHero full decorator>
      <template v-slot:default>
        <div class="columns">
          <div class="column is-two-thirds">
            <h1 v-if="error.statusCode === 404">Page not found</h1>
            <h1 v-else>An error occurred</h1>
            <p>Well, this is embarassing. Something is amiss.</p>
          </div>
        </div>
      </template>
    </BaseHero>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
