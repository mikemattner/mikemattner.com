<template>
    <header :class="['hero', (full == true) ? 'hero--full' : '']">
      <div class="hero-copy">
            <h1 :class="[(decorator == true) ? 'header--decorator' : '']">
              <small v-if="lead">{{lead}}</small>
              {{header}}
            </h1>
            <p v-if="subhead">{{subhead}}</p>
        </div>
    </header>
</template>

<script>
export default {
  props: {
    lead: String,
    header: String,
    subhead: String,
    full: Boolean,
    decorator: Boolean,
  },
};
</script>

<style lang="scss">
.hero {
    font-size: 1.25rem;
    min-height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;


    &--full {
        min-height: 100vh;
    }
}
</style>
