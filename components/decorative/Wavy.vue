<template>
  <div>
    <Wave :class="['wavy', flip == true ? 'wavy--flip' : '']" />
  </div>
</template>

<script>
import Wave from '@/assets/img/wavy.svg'

export default {
  name: 'Wavy',
  components: {
    Wave,
  },
  props: {
    flip: Boolean,
  },
}
</script>

<style scoped lang="scss">
.wavy {
  fill: $borderColor-light;
  margin-bottom: -1rem;
  @media (min-width: $tablet) {
    margin-bottom: -2rem;
  }
  &--flip {
    margin-bottom: 0;
    margin-top: -1rem;
    transform: rotate(180deg);
    // transform: scaleX(-1) scaleY(-1);
    @media (min-width: $tablet) {
      margin-bottom: 0;
      margin-top: -2rem;
    }
  }
}
</style>
