<template>
  <footer class="footer layout">
    <div class="darker main-content margin-start-outdent">
      <p>
        @mikemattner on
        <a href="https://www.linkedin.com/in/mikeamattner/">LinkedIn</a>,
        <a href="https://mastodon.online/@mikemattner" rel="me">Mastodon</a>,
        <a href="https://codepen.io/mikemattner/#">Codepen</a>, &amp;
        <a href="https://github.com/mikemattner">GitHub</a>.
      </p>
      <p>
        This personal site is
        <a href="https://github.com/mikemattner/mikemattner.com">open sourced</a
        >. Fork it, modify it for yourself, or just browse the code. Made in
        Michigan and built with Nuxt. Content &copy; {{ theYear }} Mike Mattner.
        <a
          href="https://mikemattner.com/feed"
          title="RSS Feed"
          class="footer-feed"
          ><fa-icon icon="rss" size="sm"></fa-icon
        ></a>
        <a
          href="https://github.com/mikemattner/mikemattner.com"
          title="View GitHub Project"
          ><fa-icon icon="heart" size="sm"></fa-icon
        ></a>
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
      &.fa-heart {
        fill: $primary;
        color: $primary;
        margin-left: math.div($defaultPadding, 4);
        transition: $transition;
        &:hover {
          fill: $white;
          color: $white;
        }
      }
      &.fa-rss {
        fill: $primary;
        color: $primary;
        margin-left: math.div($defaultPadding, 4);
        transition: $transition;
        &:hover {
          fill: $white;
          color: $white;
        }
      }
    }
  }
}
</style>
