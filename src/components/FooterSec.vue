<script setup>
import { ref, onMounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Define namesArr in the component's scope so Vue can track it
const namesArr = ref([]);

// Function to fetch countries
async function fetchCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    namesArr.value = countryNameArr(data).sort(); // Update ref correctly
  } catch (err) {
    console.error(err);
  }
}

// Extract country names
const countryNameArr = (data) => {
  return data.map((el) => el.name.common); // More concise
};

const moveArrowRight = (event) => {
  event.srcElement.firstElementChild.style.marginLeft = "10px";
};

const moveArrowLeft = (event) => {
  event.srcElement.firstElementChild.style.marginLeft = "0px";
};

// Fetch data when component is mounted
onMounted(fetchCountries);
</script>

<template>
  <footer>
    <div class="column column-1 col-2">
      <h1>Abelton</h1>
      <a
        href="#home"
        @mouseover="moveArrowRight($event)"
        @mouseout="moveArrowLeft($event)"
        class="text"
        >Register Live, Push or Move
        <i><font-awesome-icon icon="fa-solid fa-greater-than" /></i
      ></a>
      <a
        href="#home"
        class="text"
        @mouseover="moveArrowRight($event)"
        @mouseout="moveArrowLeft($event)"
        >About Ableton
        <i><font-awesome-icon icon="fa-solid fa-greater-than" /></i
      ></a>
      <a
        href="#home"
        class="text"
        @mouseover="moveArrowRight($event)"
        @mouseout="moveArrowLeft($event)"
        >Jobs <i><font-awesome-icon icon="fa-solid fa-greater-than" /></i
      ></a>
      <div class="icons-container">
        <a href="#home"
          ><i style="color: blue"
            ><font-awesome-icon :icon="['fab', 'facebook']" /></i
        ></a>
        <a href="#home"
          ><i><font-awesome-icon :icon="['fab', 'x-twitter']" /></i
        ></a>
        <a href="#home"
          ><i style="color: #ff0000"
            ><font-awesome-icon :icon="['fab', 'youtube']" /></i
        ></a>
        <a href="#home"
          ><i><font-awesome-icon :icon="['fab', 'instagram']" /></i
        ></a>
        <a href="#home"
          ><i><font-awesome-icon :icon="['fab', 'tiktok']" /></i
        ></a>
        <a href="#home"
          ><i style="color: #5865f2"
            ><font-awesome-icon :icon="['fab', 'discord']" /></i
        ></a>
      </div>

      <h3>Community</h3>
      <a
        href="#home"
        class="text"
        @mouseover="moveArrowRight($event)"
        @mouseout="moveArrowLeft($event)"
        >Find Ableton User Groups
        <i><font-awesome-icon icon="fa-solid fa-greater-than" /></i
      ></a>
      <a
        href="#home"
        class="text"
        @mouseover="moveArrowRight($event)"
        @mouseout="moveArrowLeft($event)"
        >Find Certified Training
        <i><font-awesome-icon icon="fa-solid fa-greater-than" /></i
      ></a>
      <a
        href="#home"
        class="text"
        @mouseover="moveArrowRight($event)"
        @mouseout="moveArrowLeft($event)"
        >Become a Certified Trainer
        <i><font-awesome-icon icon="fa-solid fa-greater-than" /></i
      ></a>
    </div>
    <div class="column column-2">
      <h3>Education</h3>
      <a
        href="#home"
        class="text"
        @mouseover="moveArrowRight($event)"
        @mouseout="moveArrowLeft($event)"
        >Offers for students and teachers
        <i><font-awesome-icon icon="fa-solid fa-greater-than" /></i
      ></a>
      <a
        href="#home"
        class="text"
        @mouseover="moveArrowRight($event)"
        @mouseout="moveArrowLeft($event)"
        >Abelton for the Classroom
        <i><font-awesome-icon icon="fa-solid fa-greater-than" /></i
      ></a>
      <a
        href="#home"
        class="text"
        @mouseover="moveArrowRight($event)"
        @mouseout="moveArrowLeft($event)"
        >Abelton for Colleges and Universties
        <i><font-awesome-icon icon="fa-solid fa-greater-than" /></i
      ></a>

      <h3>Language and Location</h3>
      <select class="language-dropdn dropdn">
        <option>English</option>
        <option>Arabic</option>
        <option>Deutsch</option>
        <option>French</option>
      </select>
      <select class="country-dropdn dropdn">
        <option v-if="namesArr" v-for="name in namesArr">{{ name }}</option>
      </select>
    </div>
    <div class="column column-3 col-4">
      <h3>Sign up to our newsletter</h3>
      <p>
        Enter your email address to stay up to date with the latest offers,
        tutorials, downloads, surveys and more.
      </p>
      <form @submit.prevent="">
        <input type="email" placeholder="Email Address" required />
        <button type="submit">Sign up</button>
      </form>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 30px;
  border-top: solid 1px rgb(218, 218, 218);
  margin-top: 100px;
  flex-wrap: wrap;
  margin-bottom: 50px;
}

footer a{
  white-space: nowrap;
}
footer .column-2 {
  width:25vw;
}

footer h3,
h1 {
  margin: 30px 0px 10px;
}

footer .text {
  text-decoration: none;
  color: #000000;
  display: block;
  font-size: 1em;
}

footer .icons-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
}

footer .icons-container i {
  color: #000000;
}

footer .icons-container i {
  font-size: 1.7em;
  margin: 5px;
}

footer form {
  margin-top: 30px;
}

footer input {
  margin: 0px;
  width: 75%;
  font-size: 1.1em;
  padding: 5px 10px;
  height: 2em;
}
footer button {
  margin: 0px;
  width: 25%;
  height: 2em;
  font-size: 1.1em;
  background-color: blue;
  color: white;
  border-color: #0000ff;
  cursor: pointer;
}
footer .dropdn {
  font-size: 1.1em;
  padding: 5px 10px;
}
footer .language-dropdn {
  width: 40%;
}

footer .country-dropdn {
  width: 60%;
}


@media only screen and (max-width: 1023px) {
  footer{
    flex-direction: column;
    align-content: flex-start;
    padding: 0px 8.333vw;
    
  }

  footer .column {
    width:58.333vw;
  }
}

@media only screen and (max-width: 640px) {
  footer .column{
    width: 83.333vw
  }  

  footer button{
    font-size: 1em;
    height: 2.2em;
  }
}
</style>
