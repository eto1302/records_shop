<template>
  <div class="jumbotron mx-auto bg-color">
    <h1 class="text-center">All Orders</h1>
    <hr class="hr-2 w-75" />
    <table class="table w-75 mx-auto table-hover border-top-0">
      <thead>
        <tr>
          <th scope="col">RecordName</th>
          <th scope="col">RecordArtist</th>
          <th scope="col">Cost</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.recordName">
          <th scope="row">{{order.recordName}}</th>
          <td>{{order.recordArtist}}</td>
          <td>${{order.cost}}</td>
          <td>
            <router-link
              tag="button"
              :to="'/orders/details/' + order.id"
              href
              type="button"
              class="btn btn-success col-3"
            >Details</router-link>

            <button
              tag="button"
              @click="removeOrder(order.id)"
              type="button"
              class="btn btn-danger col-3"
            >Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    removeOrder: function(id) {
    this.$store.commit("removeOrder", id);
    this.$router.push("/orders/all");
    }
  },
  computed: {
    ...mapState(["orders"])
  }
};
</script>

<style>
h2 {
  color: blue;
}
</style>
