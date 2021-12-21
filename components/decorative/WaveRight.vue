<template>
  <div>
    <SmallWave :class="['wave-it', flip == true ? 'wave-it--flip' : '']" />
  </div>
</template>

<script>
import SmallWave from '@/assets/img/svg/small-wave.svg'

export default {
  name: 'WaveRight',
  components: {
    SmallWave,
  },
  props: {
    flip: Boolean,
  },
}
</script>

<style scoped lang="scss">
.wave-it {
  fill: $darkShadeBackground;
  margin-bottom: -1rem;
  @media (min-width: $tablet) {
    margin-bottom: -2rem;
  }
  &--flip {
    margin-bottom: 0;
    margin-top: -1rem;
    transform: scaleX(-1) scaleY(-1);
    @media (min-width: $tablet) {
      margin-bottom: 0;
      margin-top: -2rem;
    }
  }
}
</style>
