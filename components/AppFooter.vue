<template>
  <footer class="footer">
    <!-- <WaveRight /> -->
    <div class="darker">
      <p class="email--link">hello @ mikemattner.com</p>
      <p>
        &copy; {{ theYear }} Mike Mattner. Made in Michigan. Built with Nuxt.
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
      theDate: new Date()
    }
  },
  computed: {
    theYear: function() {
      return this.theDate.getFullYear()
    }
  }
}
</script>

<style lang="scss">
.footer {
  .darker {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem 5% 1rem;
    // height: 3rem;
    box-sizing: border-box;
    font-size: 0.675rem;
    background-color: $darkBlue-3;
    color: rgba(255, 255, 255, 0.25);
    p {
      margin: 0;
    }
    .email--link {
      font-size: 1rem;
      letter-spacing: 0.075rem;
      color: $white;
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
