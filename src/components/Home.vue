<template>
  <div class="bg-color jumbotron mx-auto mt-5">
    <h1 class="text-center">The Inner Groove - Your Online Records Shop</h1>
    <div v-if="!isAuth" class="col-sm">
      <h3 class="text-center">
        <router-link tag="a" to="/login" class="nav-link-white text-primary">Login</router-link> if you have an account.
      </h3>
    </div>
    <div v-if="!isAuth" class="col-sm">
      <h3 class="text-center">
        <router-link tag="a" to="/register" class="nav-link-white text-primary">Register</router-link> if you don't have an account.
      </h3>
    </div>
    <div v-if="isAuth" class="col-sm">
      <h3 class="text-center">
        <router-link tag="a" to="/records/all" class="nav-link-white text-primary">Records</router-link> to see all the records.
      </h3>
    </div>
    <div v-if="isAuth" class="col-sm">
      <h3 class="text-center">
        <router-link tag="a" to="/orders/all" class="nav-link-white text-primary">Orders</router-link> to see all your orders.
      </h3>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["isAuth"])
  }
};
</script>

<style>
.bg-color {
  background-color: #e293de;
  color: black;
}
</style>