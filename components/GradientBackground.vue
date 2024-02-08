<template>
  <div class="gradient-bg">
    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
    <div class="gradients-container">
      <div class="interactive"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  const interBubble = document.querySelector<HTMLDivElement>('.interactive')!;
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  function move() {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(() => {
      move();
    });
  }

  window.addEventListener('mousemove', (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
});
</script>

<style lang="scss" scoped>
.gradient-bg {
  --color-bg1: rgb(108, 0, 162);
  --color-bg2: rgb(0, 17, 82);
  --color1: 18, 113, 255;
  --color2: 221, 74, 255;
  --color3: 100, 220, 255;
  --color4: 200, 50, 50;
  --color5: 180, 180, 50;
  --color-interactive: var(--color-gradient);
  --circle-size: 80%;
  --blending: hard-light;

  //   width: 100vw;
  //   height: 100vh;
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: var(--background-color);

  //   svg {
  //     display: none;
  //   }

  .gradients-container {
    // filter: url(#goo) blur(40px);
    filter: blur(40px);
    // opacity: 0.1;
    width: 100%;
    height: 100%;
  }

  .interactive {
    position: absolute;
    background: radial-gradient(
        circle at center,
        hsla(var(--color-interactive), 0.8) 0,
        hsla(var(--color-interactive), 0) 50%
      )
      no-repeat;
    mix-blend-mode: var(--blending);

    width: 100%;
    height: 100%;
    top: -50%;
    left: -50%;

    opacity: 0.7;
  }
}
</style>
