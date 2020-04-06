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
    <router-link
      tag="button"
      :to="'/orders/create/' + this.$route.params.id"
      href
      type="button"
      class="btn btn-primary col-4"
    >Order</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created: function() {
    this.$store.commit("selectRecord", this.$route.params.id);
    this.$store.dispatch("fetchUserProfile");
  },
  computed: {
    ...mapState(["selectedRecord"])
  }
};
</script>

<style>
h2 {
  color: blue;
}
</style>
