<template>
  <div class="animated-wave">
    <svg
      class="css-waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shape-rendering="auto"
    >
      <defs>
        <path
          id="wave-pattern"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        ></path>
      </defs>
      <g class="animated-waves">
        <use href="#wave-pattern" x="48" y="0"></use>
        <use href="#wave-pattern" x="48" y="3"></use>
        <use href="#wave-pattern" x="48" y="5"></use>
        <use href="#wave-pattern" x="48" y="7"></use>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'AnimatedWave',
  props: {
    flip: Boolean,
  },
}
</script>

<style scoped lang="scss">
.animated-wave {
  margin-bottom: -1px;
}

.css-waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -10px;
  min-height: 100px;
  max-height: 150px;
}

/* Here we declare the SVG node that we wish to animate. */

.animated-waves > use {
  animation: infinite-waves 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.animated-waves > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
  fill: rgba(8, 8, 10, 1);
}
.animated-waves > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
  fill: rgba(8, 8, 10, 0.7);
}
.animated-waves > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
  fill: rgba(8, 8, 10, 0.3);
}
.animated-waves > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
  fill: rgba(8, 8, 10, 0.7);
}
@keyframes infinite-waves {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
/* Mobile Optimization */
@media (max-width: 768px) {
  .css-waves {
    height: 70px;
    min-height: 70px;
  }
}
</style>
