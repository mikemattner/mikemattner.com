<template>
  <footer class="footer">
    <Wavy class="wavy" />
    <div class="darker">
      <p>&copy; {{ theYear }} Mike Mattner. Made in Michigan.</p>
    </div>
  </footer>
</template>

<script>
import Wavy from '@/assets/img/wavy.svg'

export default {
  name: 'AppHeader',
  components: {
    Wavy
  },
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
  .wavy {
    fill: $darkBlue-3;
    margin-bottom: -1rem;
    @media (min-width: $tablet) {
      margin-bottom: -2rem;
    }
    &--flip {
      fill: $darkBlue-3;
      margin-top: -1rem;
      transform: rotate(180deg);
      @media (min-width: $tablet) {
        margin-top: -2rem;
      }
    }
    &--lines {
      stroke: $darkBlue-8;
      fill: transparent;
    }
  }
  .darker {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5%;
    height: 3rem;
    box-sizing: border-box;
    font-size: 0.675rem;
    background-color: $darkBlue-3;
    color: rgba(255, 255, 255, 0.25);
  }
}
</style>
