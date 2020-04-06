<template>
  <div class="jumbotron mx-auto bg-color">
    <fieldset>
      <h1>All Records</h1>
      <router-link tag="button" to="/records/create/" href='' type="button" class="btn btn-primary col-4">Create Record</router-link>
      <div class="mx-auto">
        <router-link v-for="record in records" :key="record.imgUrl" tag="a" :to="'/records/details/' + record.id">
          <img
            :src="record.imgUrl"
            style="width:450px;height:450px"
          />
        </router-link>               
      </div>
    </fieldset>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {  
  computed: {    
    ...mapState(["records"])
  }
};
</script>

<style>
h2 {
  color:blue;
}
</style>
