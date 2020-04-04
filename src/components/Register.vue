<template>
  <div class="jumbotron mx-auto bg-color">
    <div v-if="success">Registration Successful</div>
    <form class="mx-auto mt-5" v-else @submit.prevent="submitHandler">
      <fieldset >
        <h1>Registration Form</h1>

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
          <label for="address"></label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Street name, Number, City, Country"
            v-model="address"
            @blur="$v.address.$touch"
          />
        </p>

        <template v-if="$v.address.$error">
          <p v-if="!$v.address.required" class="error">Address is required!</p>
          <p v-else-if="!$v.address.address" class="error">Address is invalid!</p>
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

        <p class="field field-icon">
          <label for="re-password"></label>
          <input
            type="password"
            name="re-password"
            id="re-password"
            placeholder="******"
            v-model="rePassword"
            @blur="$v.rePassword.$touch"
          />
        </p>

        <template v-if="$v.rePassword.$error">
          <p v-if="!$v.rePassword.sameAs" class="error">Repeat Password does not match password!</p>
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
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  sameAs,
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
      email: "",
      address: "",
      password: "",
      rePassword: ""
    };
  },
  validations: {
    username: {
      required,
      alphanumeric
    },
    email: {
      required,
      email
    },
    address: {
      required,
      alphanumeric
    },
    password: {
      required: true,
      minLength: minLength(3),
      maxLength: maxLength(16),
      alphanumeric
    },
    rePassword: {
      sameAs: sameAs("password")
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