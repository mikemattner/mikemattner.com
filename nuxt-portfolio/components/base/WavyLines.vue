<template>
  <div>
    <Lines class="wavy--lines" />
  </div>
</template>

<script>
import Lines from '@/assets/img/wavy-lines.svg'

export default {
  name: 'WavyLines',
  components: {
    Lines
  }
}
</script>

<style scoped lang="scss">
.wavy {
  &--lines {
    stroke: $darkBlue-8;
    fill: transparent;
  }
}
</style>
