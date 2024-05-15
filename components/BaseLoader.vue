<template>
  <div class="base-loader"></div>
</template>

<style scoped>
.base-loader {
  width: 100px;
  height: 40px;
  --g: radial-gradient(
      farthest-side,
      transparent calc(95% - 3px),
      var(--font-color) calc(100% - 3px) 98%,
      transparent 101%
    )
    no-repeat;
  background: var(--g), var(--g), var(--g);
  background-size: 30px 30px;
  animation: l9 1s infinite alternate;
}
@keyframes l9 {
  0% {
    background-position: 0 50%, 50% 50%, 100% 50%;
  }
  20% {
    background-position: 0 0, 50% 50%, 100% 50%;
  }
  40% {
    background-position: 0 100%, 50% 0, 100% 50%;
  }
  60% {
    background-position: 0 50%, 50% 100%, 100% 0;
  }
  80% {
    background-position: 0 50%, 50% 50%, 100% 100%;
  }
  100% {
    background-position: 0 50%, 50% 50%, 100% 50%;
  }
}
</style>
