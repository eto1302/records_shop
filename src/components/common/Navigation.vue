<template>
  <div class="nav">
    <router-link tag="a" to="/" class="green">Home</router-link>
    <router-link v-if="isAuth" tag="a" to="/records/all" class>Records</router-link>
    <router-link v-if="isAuth" tag="a" to="/orders/all" class>Orders</router-link>
    <router-link v-if="isAuth" tag="a" to="/" class @click="onLogout">Log out</router-link>
  </div>
</template>

<script>
const fb = require("../../firebaseConfig.js");
import { mapState } from "vuex";


export default {
  methods: {
    logout() {
      fb.auth
        .signOut()
        .then(() => {
          this.$store.dispatch("clearData");
          this.$router.push("/login");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    ...mapState(["isAuth"])
  }
};
</script>

<style>
/*Add a black background color to the top navigation*/
.nav {
  background-color: #4b0082;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.nav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.nav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.nav a.green {
  background-color: #4caf50;
  color: white;
}
</style>