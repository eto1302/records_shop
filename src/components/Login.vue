<template>
  <div class="jumbotron mx-auto bg-color">
    <div v-if="success">Registration Successful</div>
    <form class="mx-auto mt-5" v-else @submit.prevent="submitHandler">
      <fieldset >
        <h1>Login Form</h1>

        <p class="field field-icon">
          <label for="username"></label>
          <input
            type="text"
            name="username"
            id="username"
            class="error"
            placeholder="Mark Ulrich"
            v-model="username"
            @blur="$v.username.$touch"
          />
        </p>

        <template v-if="$v.username.$error">
          <p v-if="!$v.username.required" class="error">Username is required!</p>
          <p v-else-if="!$v.username.username" class="error">Username is invalid!</p>
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
          <p
            v-else-if="!$v.password.minLength || !$v.password.maxLenght"
            class="error"
          >Password should be between 3 and 16 symbols!</p>
          <p v-else-if="!$v.password.alphanumeric" class="error">Password should match [0-9A-Za-z]!</p>
        </template>        

        <p>
          <button>Login</button>
        </p>

        <p class="text-center">
          Don't have an account?
          <router-link tag="a" to="/register" class="nav-link-white text-primary">Register</router-link>
        </p>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
import { helpers } from "vuelidate/lib/validators";
const alphanumeric = helpers.regex("alphanumeric", /^[a-zA-Z0-9]*$/);

export default {
  mixins: [validationMixin],
  data() {
    return {
      username: "",
      password: ""
    };
  },
  validations: {
    username: {
      required,
      alphanumeric      
    },
    password: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(16),
      alphanumeric
    },
    methods: {
      submitHandler() {
        this.$v.$touch();
        if (this.$v.$error) {
          return;
        }
        console.log("Form was validated successfully!");
        this.success = true;
      }
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