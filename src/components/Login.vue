<template>
  <div class="jumbotron mx-auto bg-color">
    <form class="mx-auto mt-5" @submit.prevent="submitHandler">
      <fieldset>
        <h1>Login Form</h1>

        <p class="field field-icon">
          <label for="email"></label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="marg@gmial.com"
            v-model="email"
            @blur="$v.email.$touch"
          />
        </p>

        <template v-if="$v.email.$error">
          <p v-if="!$v.email.required" class="error">Email is required!</p>
          <p v-else-if="!$v.email.email" class="error">Email is invalid!</p>
        </template>

        <p class="field field-icon">
          <label for="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            v-model="password"
            @blur="$v.password.$touch"
          />
        </p>

        <template v-if="$v.password.$error">
          <p v-if="!$v.password.required" class="error">Password is required!</p>
        </template>

        <p>
          <button>Create Account</button>
        </p>

        <p class="text-center">
          Have an account?
          <router-link tag="a" to="/login" class="nav-link-white text-primary">Login</router-link>
        </p>
      </fieldset>
    </form>
  </div>
</template>

<script>
const fb = require("../firebaseConfig.js");
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },

  methods: {
    submitHandler() {
      console.log(this.email, this.password)
      fb.auth
        .signInWithEmailAndPassword(
          this.email,
          this.password
        )
        .then(temp => {
          let user = temp.user;
          this.$store.commit("setCurrentUser", user);
          this.$store.dispatch("fetchUserProfile");
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
form {
  margin-top: 20px;
  width: 40%;
}
fieldset {
  border-radius: 10px;
  padding: 20px;
}
input {
  flex: 0 1 100%;
  border: 1px solid;
  padding: 5px;
  border-left: 3px solid #42a948;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
select {
  border-color: black;
}
button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0.8em 1.2em;
  width: 100%;
}
i {
  border: 1px solid;
  border-right: none;
  padding: 10px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: #e9ecef;
}
a {
  color: #007bff;
}
.container {
  font-family: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.tel {
  padding-right: 20px;
}
.building {
  flex: 1 1 100%;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
form .field {
  display: flex;
}
/* if error */
p.error {
  text-align: left;
  background-color: #f34e5c;
  padding: 8px;
  border-radius: 3px;
}
input.error {
  border-left-color: #a8413f;
}
</style>