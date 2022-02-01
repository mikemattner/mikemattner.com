<template>
  <ul class="tags">
    <li v-for="tag in tags" :key="tag">
      <Button :to="`/writing/tag/${formattedTag(tag)}`" secondary-dark small>{{
        tag
      }}</Button>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formattedTag(tag) {
      return tag.toLowerCase().trim()
    },
  },
}
</script>

<style lang="scss">
ul {
  &.tags {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    li {
      margin: 0 math.div($defaultPadding, 5) 0 0;
      &::before {
        display: none;
      }
    }
  }
}
</style>
