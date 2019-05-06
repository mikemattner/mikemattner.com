<template>
  <footer class="footer">
    <Wavy />
    <div class="darker">
      <p>
        &copy; {{ theYear }} Mike Mattner. Made in Michigan.
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
    padding: 0 5%;
    height: 3rem;
    box-sizing: border-box;
    font-size: 0.675rem;
    background-color: $darkBlue-3;
    color: rgba(255, 255, 255, 0.25);

    svg {
      fill: $orange;
      color: $orange;
    }
  }
}
</style>
