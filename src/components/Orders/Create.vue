<template>
  <div class="jumbotron mx-auto bg-color">
    <h1>Your order is being created!</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';
const fb = require("../../firebaseConfig.js");

export default {
  created: function() {
      console.log(this.currentUser);
      fb.ordersCollection
        .add({
        recordName: this.selectedRecord.name,
        recordArtist: this.selectedRecord.artist,
        userEmail: this.currentUser.email,
        cost: this.selectedRecord.cost
        })
        .then(
          this.$router.push("/orders/all")
        );
    },
    computed: {
        ...mapState(["selectedRecord"]),        
        ...mapState(["currentUser"])
    }  
};
</script>

<style>
</style>
