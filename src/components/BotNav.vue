<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  content: Array,
  btnAction: Boolean,
  filterBy: String,
});

const emit = defineEmits(["action"]);

// Scroll function
let lastScrollTop = window.scrollY;
const bottomNavTop = ref("0px");

const handleScroll = () => {
  const scrollTop = window.scrollY;
  bottomNavTop.value = scrollTop > lastScrollTop ? "-80px" : "0px";
  lastScrollTop = scrollTop;
};

const filterPosts = (e) => {
  emit("action", e.target.textContent);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template v-if="content">
  <nav class="bottom-nav" :style="{ top: bottomNavTop }">
    <div class="container">
      <button
        v-if="btnAction"
        v-for="item in content"
        @click="filterPosts($event)"
        :class="{ active: item === filterBy }"
      >
        {{ item }}
      </button>

      <RouterLink
        v-else
        v-for="item in content"
        :to="'/' + item"
        active-class="active"
        :key="item"
        >{{ item }}</RouterLink
      >
    </div>
  </nav>
</template>

<style scoped>
.bottom-nav {
  position: sticky;
  left: 0px;
  top: 0px;
  transition: ease 0.4s;
  z-index: 5;
  background-color: white;
  padding: 20px 10px;
  overflow-x: auto;
}

.container {
  display: flex;
  align-items: center;
  min-width: fit-content;
}
nav a, nav button{
  white-space: nowrap;
}

button {
  font-size: 1.05em;
}
</style>
