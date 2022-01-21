<template>
  <section class="project-list two-col">
    <ProjectCard
      v-for="(item, index) in projects"
      :key="`project-${index}`"
      :info="item"
    />
  </section>
</template>
<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.project-list {
  list-style: none;
  margin: 2rem 0;
  padding: 0;

  grid-column: main-content / span 6;
  @media (min-width: $tablet) {
    grid-column: margin-start / span 7;
  }
  @media (min-width: $desktop) {
    grid-column: margin-start / span 8;
  }
}
</style>
