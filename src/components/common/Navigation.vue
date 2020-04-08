<template>
  <div class="nav">
    <router-link tag="a" to="/" class="green">Home</router-link>
    <router-link v-if="isAuth" tag="a" to="/records/all">Records</router-link>
    <router-link v-if="isAuth" tag="a" to="/orders/all">Orders</router-link>
    <a v-if="isAuth" @click="logout" href=''>Log out</a>
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
          this.$router.push("/");
        })
        .catch(err => {
          alert(err.message);
        });
    }
  },
  computed: {
    ...mapState(["isAuth"])
  }
};
</script>

<style>
.nav {
  background-color: #4b0082;
  overflow: hidden;
}

.nav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.nav a:hover {
  background-color: #ddd;
  color: black;
}
.nav a.green {
  background-color: #4caf50;
  color: white;
}
</style>