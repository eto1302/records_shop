<template>
  <div>
    <hr class="hr-2 bg-dark" />
    <h3 class="text-center">Name of the Record: {{selectedOrder.recordName}}</h3>
    <h3 class="text-center">Name of the Artist: {{selectedOrder.recordArtist}}</h3>    
    <h3 class="text-center">Genre: {{selectedOrder.recordGenre}}</h3>
    <hr class="hr-2 bg-dark" />
    <h3 class="text-center">Email of the User: {{selectedOrder.userEmail}}</h3>
    <h3 class="text-center">Date Created: {{selectedOrder.dateCreated}}</h3>

    <img :src="selectedOrder.recordImgUrl" class="text-center" style="width:488px; height:488;" />
    <hr class="hr-2 bg-dark" />
    <h3 class="text-center">Cost: ${{selectedOrder.cost}}</h3>
    <hr class="hr-2 bg-dark" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default { 
  created: function() {
    this.$store.commit("selectOrder", this.$route.params.id);
    this.$store.dispatch("fetchUserProfile");
  },
  computed: {
    ...mapState(["selectedOrder"]),
    ...mapState(["currentUser"])
  }
};
</script>

<style>
h2 {
  color: blue;
}
</style>
