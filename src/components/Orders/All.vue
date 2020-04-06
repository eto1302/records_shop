<template>
  <div class="jumbotron mx-auto bg-color">
    <h1 class="text-center">All Orders</h1>
    <hr class="eventures-bg-color hr-2 w-75" />
    <table class="table w-75 mx-auto table-hover border-top-0">
      <thead>
        <tr>
          <th scope="col">RecordName</th>
          <th scope="col">RecordArtist</th>
          <th scope="col">User Email</th>
          <th scope="col">Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.recordName">
          <th scope="row">{{order.recordName}}</th>
          <td>{{order.recordArtist}}</td>
          <td>{{order.userEmail}}</td>
          <td>${{order.cost}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["orders"])
  },
  method: {
    deleteOrder() {
      console.log("sfafasffaasffasafs");
    }
  }
};
</script>

<style>
h2 {
  color: blue;
}
</style>
