<template>
  <div>
    <Lines :class="['wavy--lines', flip == true ? 'wavy--flip' : '']" />
  </div>
</template>

<script>
import Lines from '@/assets/img/svg/wavy-lines.svg?inline'

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
    stroke: $darkBlue;
    fill: transparent;
  }
  &--flip {
    transform: rotate(180deg);
  }
}
</style>
