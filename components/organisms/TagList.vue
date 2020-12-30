<template>
  <ul class="tags">
    <li v-for="tag in tags" :key="tag">
      <Button :to="`/tag/${formattedTag(tag)}`" ghost small>{{ tag }}</Button>
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
      margin: 0 $defaultPadding/5 0 0;
    }
  }
}
</style>
