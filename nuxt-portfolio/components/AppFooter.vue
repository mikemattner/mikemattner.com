<template>
    <footer class="footer">
      <p>&copy; {{theYear}} Mike Mattner. Made with love in Michigan.</p>
    </footer>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      theDate: new Date(),
    };
  },
  computed: {
    theYear: function() {
      return this.theDate.getFullYear();
    }
  }
};
</script>

<style lang="scss">
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
  height: 3rem;
  box-sizing: border-box;
  font-size: 0.675rem;
  background-color: rgba(0,0,0,0.25);
  color: rgba(255,255,255,0.25);
}
</style>
