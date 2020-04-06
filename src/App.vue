<template>
  <div id="app">
    <app-navigation></app-navigation>
    <router-view ></router-view>
  </div>
</template>

<script>
import AppNavigation from "./components/common/Navigation.vue";
export default {
  name: 'App',
  data: function() {
    return {
      isAuth: localStorage.getItem('token') !== null
    }
  },
  components: {
    AppNavigation
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato&display=swap");
body {
  font-family: "Lato", sans-serif;
}
#app {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>