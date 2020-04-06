<template>
  <div class="jumbotron mx-auto bg-color">
    <form class="mx-auto mt-5" @submit.prevent="submitHandler">
      <fieldset>
        <h1>Records Creation Form</h1>

        <p class="field field-icon">
          <label for="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            class="error"
            placeholder="Record Name"
            v-model="name"
            @blur="$v.name.$touch"
          />
        </p>

        <template v-if="$v.name.$error">
          <p v-if="!$v.name.required" class="error">Name is required!</p>
          <p v-else-if="!$v.name.name" class="error">Name is invalid!</p>
        </template>

        <p class="field field-icon">
          <label for="artist"></label>
          <input
            type="text"
            name="artist"
            id="artist"
            placeholder="Record Artist"
            v-model="artist"
            @blur="$v.artist.$touch"
          />
        </p>

        <template v-if="$v.artist.$error">
          <p v-if="!$v.artist.required" class="error">Artist is required!</p>
          <p v-else-if="!$v.artist.artist" class="error">Artist is invalid!</p>
        </template>

        <p class="field field-icon">
          <label for="genre"></label>
          <input
            type="text"
            name="genre"
            id="genre"
            placeholder="Record Genre"
            v-model="genre"
            @blur="$v.genre.$touch"
          />
        </p>

        <template v-if="$v.genre.$error">
          <p v-if="!$v.genre.required" class="error">Genre is required!</p>
          <p v-else-if="!$v.genre.genre" class="error">Genre is invalid!</p>
        </template>

        <p class="field field-icon">
          <label for="imgUrl"></label>
          <input
            type="text"
            name="imgUrl"
            id="imgUrl"            
            placeholder="Image Url"
            v-model="imgUrl"
            @blur="$v.imgUrl.$touch"
          />
        </p>

        <template v-if="$v.imgUrl.$error">
          <p v-if="!$v.imgUrl.required" class="error">Image URL is required!</p>
          <p v-else-if="!$v.imgUrl.imgUrl" class="error">Image URL is invalid!</p>
        </template>

        <p class="field field-icon">
          <label for="cost"></label>
          <input
            type="number"
            name="cost"
            id="cost"
            placeholder="Record Cost"
            v-model="cost"
            @blur="$v.cost.$touch"
          />
        </p>

        <template v-if="$v.cost.$error">
          <p v-if="!$v.cost.required" class="error">Cost is required!</p>
          <p v-else-if="!$v.cost.cost" class="error">Cost is invalid!</p>
        </template>

        <p>
          <button>Create Record</button>
        </p>
      </fieldset>
    </form>
  </div>
</template>

<script>
const fb = require("../../firebaseConfig.js");
import { validationMixin } from "vuelidate";
import { required, maxLength, decimal} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      name: "",
      artist: "",
      genre: "",
      imgUrl: "",
      cost: ""
    };
  },
  validations: {
    name: {
      required,
      maxLength: maxLength(50)
    },
    artist: {
      required,
      maxLength: maxLength(50)
    },
    genre: {
      required,
      maxLength: maxLength(30)
    },
    imgUrl: {
      required
    },
    cost: {
      required,
      decimal
    }
  },

  methods: {
    submitHandler() {
      fb.recordsCollection
        .add({
          name: this.name,
          artist: this.artist,
          genre: this.genre,
          imgUrl: this.imgUrl,
          cost: this.cost
        })
        .then(this.$router.push("/"));
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
