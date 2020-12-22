<template>
  <footer class="footer layout">
    <!-- <WaveRight /> -->
    <div class="darker main-content margin-start-outdent">
      <p class="email--link">hello @ mikemattner.com</p>
      <p>
        This personal site is
        <a href="https://github.com/mikemattner/mikemattner.com">open sourced</a
        >. Fork it, modify it for yourself, or just browse the code. Made in
        Michigan and built with Nuxt.
        <fa-icon icon="heart" size="sm"></fa-icon>
      </p>
      <p>&copy; {{ theYear }} Mike Mattner.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      theDate: new Date(),
    }
  },
  computed: {
    theYear() {
      return this.theDate.getFullYear()
    },
  },
}
</script>

<style lang="scss">
.footer {
  .darker {
    padding: 1rem 0 1rem;
    // height: 3rem;
    box-sizing: border-box;
    font-size: 0.675rem;
    background-color: $bodyBackground;
    color: rgba(255, 255, 255, 0.25);
    @media (max-width: 768px) {
      // display: flex;
      // justify-content: center;
      // align-items: center;
      // flex-direction: column;
    }
    p {
      // margin: 0;
    }
    .email--link {
      font-size: 1rem;
      letter-spacing: 0.075rem;
      color: $white;
      font-family: $serif-font;
      @media (max-width: $tablet) {
        font-size: 1rem;
      }
    }

    svg {
      fill: $primary;
      color: $primary;
    }
  }
}
</style>
