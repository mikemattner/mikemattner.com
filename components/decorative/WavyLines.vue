<template>
  <div>
    <Lines :class="['wavy--lines', flip == true ? 'wavy--flip' : '']" />
  </div>
</template>

<script>
import Lines from '@/assets/img/svg/wavy-lines.svg'

export default {
  name: 'WavyLines',
  components: {
    Lines,
  },
  props: {
    flip: Boolean,
  },
}
</script>

<style scoped lang="scss">
.wavy {
  &--lines {
    stroke: rgba($tertiary, 0.5);
    fill: transparent;
  }
  &--flip {
    transform: rotate(180deg);
  }
}
</style>
