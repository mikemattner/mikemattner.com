<template>
  <ul class="work-list">
    <li v-for="(item, index) in work" :key="index">
      <WorkCard :info="item" :right="index % 2 === 0" :left="index % 2 != 0" />
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    work: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.work-list {
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

  li {
    padding: 0;
    margin: 0;
    margin-bottom: $defaultPadding;

    @media (min-width: $tablet) {
      margin-bottom: $defaultPadding * 1.5;
    }

    &:before {
      display: none;
    }
  }
}
</style>
