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
  padding: 2rem 0;
}
</style>
