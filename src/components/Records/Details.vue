<template>
  <div>
    <hr class="hr-2 bg-dark" />
    <h3 class="text-center">Name of the Record: {{selectedRecord.name}}</h3>
    <hr class="hr-2 bg-dark" />
    <h3 class="text-center">Name of the Artist: {{selectedRecord.artist}}</h3>
    <hr class="hr-2 bg-dark" />
    <h3 class="text-center">Genre: {{selectedRecord.genre}}</h3>
    <hr class="hr-2 bg-dark" />
    <img :src="selectedRecord.imgUrl" class="text-center" style="width:488px; height:488;" />
    <hr class="hr-2 bg-dark" />
    <h3 class="text-center">Cost: ${{selectedRecord.cost}}</h3>
    <hr class="hr-2 bg-dark" />
    <h3 class="text-center">Actions:</h3>
    <button tag="button" @click="createOrder" type="button" class="btn btn-success col-4">Order</button>
    <button tag="button" @click="removeRecord" type="button" class="btn btn-danger col-4">Delete</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
const fb = require("../../firebaseConfig.js");

export default {
  methods: {
    createOrder: function() {
      fb.ordersCollection
        .add({
          recordName: this.selectedRecord.name,
          recordArtist: this.selectedRecord.artist,
          recordImgUrl: this.selectedRecord.imgUrl,
          recordGenre: this.selectedRecord.genre,
          userEmail: this.currentUser.email,
          cost: this.selectedRecord.cost,
          dateCreated: new Date().toLocaleString()
        })
        .then(this.$router.push("/orders/all"));
    },
    removeRecord: function() {
      this.$store.commit("removeRecord", this.$route.params.id);
      this.$router.push("/records/all");
    }
  },
  created: function() {
    this.$store.commit("selectRecord", this.$route.params.id);
    this.$store.dispatch("fetchUserProfile");
  },
  computed: {
    ...mapState(["selectedRecord"]),
    ...mapState(["currentUser"])
  }
};
</script>

<style>
h2 {
  color: blue;
}
</style>
