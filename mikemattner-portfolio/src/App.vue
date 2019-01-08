<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/app.scss';
#nav {
  padding: 30px;
  a {
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
      font-weight: bold;
    }
  }
}
</style>
