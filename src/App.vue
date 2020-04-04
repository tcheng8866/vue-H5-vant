<template>
  <div id="app">
       <div id="nav">
      <router-link to="/">vuex</router-link> |
	  <router-link to="/axios">axios</router-link> |
	  <router-link to="/bmap">bmap</router-link> |
      <router-link to="/vantUi/basic">basic</router-link> |
      <router-link to="/vantUi/form">form</router-link> |
      <router-link to="/vantUi/other">other</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
