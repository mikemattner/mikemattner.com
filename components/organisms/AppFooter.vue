<template>
  <footer class="footer layout">
    <div class="darker main-content margin-start-outdent">
      <p>
        @mikemattner on
        <a href="https://www.linkedin.com/in/mikeamattner/">LinkedIn</a>,
        <a href="https://twitter.com/mikemattner">Twitter</a>,
        <a href="https://codepen.io/mikemattner/#">Codepen</a>, &amp;
        <a href="https://github.com/mikemattner">GitHub</a>.
      </p>
      <p>
        This personal site is
        <a href="https://github.com/mikemattner/mikemattner.com">open sourced</a
        >. Fork it, modify it for yourself, or just browse the code. Made in
        Michigan and built with Nuxt. &copy; {{ theYear }} Mike Mattner.
        <a href="https://mikemattner.com/feed" class="footer-feed">RSS</a>
        <fa-icon icon="heart" size="sm"></fa-icon>
      </p>
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
    box-sizing: border-box;
    font-size: 0.675rem;
    background-color: $bodyBackground;
    color: $middleGray;
    svg {
      fill: $primary;
      color: $primary;
      margin-left: math.div($defaultPadding, 4);
    }
  }
}
</style>
