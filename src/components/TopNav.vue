<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faL } from "@fortawesome/free-solid-svg-icons";

const windowWidth = ref(window.innerWidth);
const showMore = ref(false);
const showMenu = ref(false);
const isMobile = computed(() => windowWidth.value < 1024);
const props = defineProps({
  activeMore: Boolean,
});
const emit = defineEmits(["showMore", 'isMobile']);
emit("isMobile", isMobile.value);

const topNavBarLinks = ref([
  { text: "Live", href: "#Live" },
  { text: "Push", href: "#Push" },
  { text: "Move", href: "#Move" },
  { text: "Note", href: "#Note" },
  { text: "Link", href: "#Link" },
  { text: "Shop", href: "#Shop" },
  { text: "Packs", href: "#Packs" },
  { text: "Help", href: "#Help" },
]);

watch(showMenu, (newShowMenu) => {
  showMore.value = showMenu.value;
})

watch(showMore, (newShowMore) => {
  emit("showMore", newShowMore);
})

watch(isMobile, (newisMobile) => {
  emit("isMobile", newisMobile);
})

// Responsive design @ 1024 
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
}

onMounted(() => {
  window.addEventListener("resize",updateWindowWidth);
})

onUnmounted(() => {
  window.removeEventListener("resize", updateWindowWidth);
})

</script>

<template>
  <nav class="top-nav">
    <router-link to="/">
      <svg
        role="img"
        aria-label="Logo Ableton"
        class="main-nav__logo__image"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width="54"
        height="25"
        viewBox="0 0 45 21"
      >
        <path
          d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"
        ></path>
      </svg>
    </router-link>
    <a v-if="isMobile" @click.prevent="showMenu = !showMenu" href="#">Menu <font-awesome-icon :icon="['fas', 'caret-down']" /></a>

    <a v-if="showMenu || !isMobile" v-for="link in topNavBarLinks" :href="link.href">{{ link.text }}</a>
    <a v-if="!isMobile" :class="{active: activeMore}" href="#" id="more-btn" @click="showMore = !showMore"
      >More {{ showMore ? "-" : "+" }}</a
    >
    <a v-if="showMenu || !isMobile" href="#home">Log in or register</a>
    <a v-if="showMenu || !isMobile" href="#home" id="try-live">Try Live 12 for free</a>
  </nav>
</template>

<style scoped>
.top-nav {
  width: 100%;
  padding: 20px 10px;
  border-bottom: solid 2px #f3f3f3;
}

.top-nav a {
  font-size: 1.2em;
}
.top-nav a:nth-last-child(-n+2) {
  float: right;
}

.top-nav a:nth-last-child(1) {
  color: #0000FF;
}

@media only screen and (max-width: 1023px) {

  .top-nav a:nth-child(n+3):hover{
    background-color: rgb(240, 240, 240);
  }
  
  .top-nav a:nth-child(-n+2){
    display: inline-block;    
  }

  .top-nav a:nth-child(2){
    transform: translateY(-12.5%);
  }
  .top-nav a:nth-child(n+3){
    display: block;
  }
  .top-nav a:nth-last-child(-n+2){
    float: none;
  }
  .top-nav a:nth-last-child(1){
    color: black;
  }
}
</style>
