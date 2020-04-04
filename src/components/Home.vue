<template>
  <div class="bg-color jumbotron mx-auto mt-5 ">
    <h1 class="text-center">The Inner Groove - Your Online Records Shop</h1>
    <div class="col-sm">
      <h3 class="text-center">
        <router-link tag="a" to="/login" class="nav-link-white text-primary">Login</router-link> if you have an account.
      </h3>
    </div>
    <div class="col-sm">
      <h3 class="text-center">
        <router-link tag="a" to="/register" class="nav-link-white text-primary">Register</router-link> if you don't have an account.
      </h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bg-color {
  background-color: #e293de;
  color: black;
}
</style>