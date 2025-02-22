<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import TopNav from "../components/TopNav.vue";
import MoreNav from "../components/MoreNav.vue";
import BotNav from "../components/BotNav.vue";
import FooterSec from "../components/FooterSec.vue";
import { moveContent, liveContent, videosSrcs } from "../data/data.json";
import posts from "../data/posts.json";

const showMore = ref(false);
const isMobile = ref(false);
const BotNavContent = ["About", "Jobs", "Apprenticeships"];
const showVideoModal = ref(false);
const videoSrc = ref("");
const screenAspectRatio = ref(window.innerWidth / window.innerHeight);
const latestContent = posts.slice(0, 3);

const resolvePostImgSrc = (imgSrc) => {
  return new URL(`../assets/images/latest entries/${imgSrc}`, import.meta.url)
    .href;
};

const resolveImgSrc = (imgSrc) => {
  return new URL(`../assets/images/home/${imgSrc}`, import.meta.url).href;
};

const updateAspectRatio = () => {
  screenAspectRatio.value = window.innerWidth / window.innerHeight;
};
const headerImgSrc = computed(() => {
  return screenAspectRatio.value > 2
    ? new URL("@/assets/images/home/move-13.jpg", import.meta.url).href
    : new URL("@/assets/images/home/move-13 (1).jpg", import.meta.url).href;
});

const showVideo = (id) => {
  showVideoModal.value = true;
  videoSrc.value = videosSrcs.find((video) => video.id === id).src;
};

const closeVideo = () => {
  showVideoModal.value = false;
  videoSrc.value = "";
};
onMounted(() => {
  window.addEventListener("resize", () => updateAspectRatio());
});

onUnmounted(() => {
  window.removeEventListener("resize", () => updateAspectRatio());
});
</script>

<template>
  <TopNav
    @showMore="(msg) => (showMore = msg)"
    @isMobile="(msg) => (isMobile = msg)"
  />
  <MoreNav v-if="showMore" :isMobile="isMobile" />
  <BotNav :content="BotNavContent" />
  <header>
    <div class="img-wrapper">
      <img :src="headerImgSrc" alt="move-13" />
    </div>
    <div class="text-wrapper">
      <h1>Ready to play</h1>
      <a href="#"
        >Get Move <font-awesome-icon icon="fa-solid fa-greater-than"
      /></a>
    </div>
  </header>
  
  <main>
    <section class="section-1">
      <div class="heading">
        <h2>The latest from Abelton</h2>
        <div class="links-wrapper">
          <RouterLink
            v-if="!isMobile"
            :to="{ path: '/allposts', query: { filter: 'All posts' } }"
            >All posts</RouterLink
          >
          <RouterLink
            v-if="!isMobile"
            :to="{ path: '/allposts', query: { filter: 'Artists' } }"
            >Artists</RouterLink
          >
          <RouterLink
            v-if="!isMobile"
            :to="{ path: '/allposts', query: { filter: 'News' } }"
            >News</RouterLink
          >
          <RouterLink
            v-if="!isMobile"
            :to="{ path: '/allposts', query: { filter: 'Downloads' } }"
            >Downloads</RouterLink
          >
          <RouterLink
            v-if="!isMobile"
            :to="{ path: '/allposts', query: { filter: 'Tutorials' } }"
            >Tutorials</RouterLink
          >
          <RouterLink
            v-if="!isMobile"
            :to="{ path: '/allposts', query: { filter: 'Videos' } }"
            >Videos</RouterLink
          >
          <RouterLink
            v-if="!isMobile"
            :to="{ path: '/allposts', query: { filter: 'Loops' } }"
            >Loops</RouterLink
          >

          <!-- For mobile view -->
          <RouterLink
            v-if="isMobile"
            :to="{ path: '/allposts', query: { filter: 'All posts' } }"
          >
            See all posts <font-awesome-icon icon="fa-solid fa-greater-than" />
          </RouterLink>
        </div>
      </div>
      <div class="fig-container">
        <figure v-for="item in latestContent" :key="item.id">
          <div class="img-wrapper">
            <img :src="resolvePostImgSrc(item.imgSrc)" loading="lazy" />
          </div>
          <RouterLink
            :to="{ path: '/allposts', query: { filter: item.category } }"
            :class="['category', item.category]"
            >{{ item.category }}</RouterLink
          >
          <p class="caption">
            {{ item.caption }}
          </p>
        </figure>
      </div>
    </section>

    <section class="section-2">
      <h2>Move in focus</h2>
      <div class="fig-container">
        <figure v-for="item in moveContent" :key="item.id">
          <div class="img-wrapper">
            <img :src="resolveImgSrc(item.imgSrc)" loading="lazy" />
          </div>
          <p class="caption">
            {{ item.caption }}
          </p>
        </figure>
      </div>
    </section>

    <section class="section-3">
      <h2>Find something new in Live 12</h2>
      <div class="fig-container">
        <figure
          v-for="item in liveContent"
          :key="item.id"
          @click.prevent="showVideo(item.id)"
        >
          <div class="img-wrapper">
            <img
              style="cursor: pointer"
              :src="resolveImgSrc(item.imgSrc)"
              loading="lazy"
            />
          </div>
          <p class="caption">
            {{ item.caption }}
          </p>
        </figure>
      </div>
    </section>

    <section class="section-4">
      <span>More: </span>
      <RouterLink :to="{ path: '/allposts', query: { filter: 'All posts' } }"
        >All posts</RouterLink
      >
      <RouterLink :to="{ path: '/allposts', query: { filter: 'Artists' } }"
        >Artists</RouterLink
      >
      <RouterLink :to="{ path: '/allposts', query: { filter: 'News' } }"
        >News</RouterLink
      >
      <RouterLink :to="{ path: '/allposts', query: { filter: 'Downloads' } }"
        >Downloads</RouterLink
      >
      <RouterLink :to="{ path: '/allposts', query: { filter: 'Tutorials' } }"
        >Tutorials</RouterLink
      >
      <RouterLink :to="{ path: '/allposts', query: { filter: 'Videos' } }"
        >Videos</RouterLink
      >
      <RouterLink :to="{ path: '/allposts', query: { filter: 'Loops' } }"
        >Loops</RouterLink
      >
      <RouterLink :to="{ path: '/allposts', query: { filter: 'One Thing' } }"
        >One Thing</RouterLink
      >
    </section>
  </main>

  <div
    id="videoModal"
    class="modal"
    v-if="showVideoModal"
    @click.self="closeVideo"
  >
    <div class="modal-content">
      <p class="close" @click="closeVideo">&times;</p>
      <iframe
        :src="videoSrc"
        title="Find something new in Live 12: Deena Abdelwahed on Roar"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowfullscreen
      ></iframe>
    </div>
  </div>
  <FooterSec />
</template>

<style scoped>
img {
  width: 100%;
}
header {
  position: relative;
}

header .img-wrapper {
  width: 100%;
}

header img {
  height: calc(100vh - 140px);
}

header .text-wrapper {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 8.333vw;
  top: 10%;
}

header h1 {
  padding: 20px 0px;
  color: white;
  font-size: 5em;
  user-select: none;
}

header a {
  text-decoration: none;
  color: white;
  font-size: 1.5em;
}

section,
header {
  margin-bottom: 70px;
}

section {
  padding: 0px 8.33333vw;
}

.section-1 .heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: baseline;
  width: 83.333vw;
}

.section-1 h2,
.section-2 h2,
.section-3 h2 {
  font-weight: 500;
  font-size: 2em;
  margin-bottom: 20px;
}

.section-1 .links-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.section-1 .heading a {
  text-decoration: none;
  font-size: 1.3em;
  color: #0000ff;
  padding: 0px 10px;
  font-weight: 500;
  white-space: nowrap;
}

.fig-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px 4.165vw;
}

.section-1 .fig-container .category {
  display: inline-block;
  padding: 5px 10px;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: 500;
}

.fig-container a {
  text-decoration: none;
  color: black;
}

.fig-container .caption {
  font-size: 1em;
  font-weight: 500;
  margin-top: 10px;
}

.section-4 {
  padding: 70px 8.333vw;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 1.2em;
}

.section-4 a {
  text-decoration: none;
  color: #0000ff;
  padding: 0px 10px;
  font-weight: 500;
}

.modal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal-content iframe {
  margin-top: 20px;
  width: 66.666vw;

  aspect-ratio: 1.78;
}
.modal-content .close {
  line-height: 0;
  position: absolute;
  display: block;

  top: 0px;
  right: 10px;
  font-size: 2em;
  color: white;
  cursor: pointer;
}

@media only screen and (max-width: 1300px) {
  .section-1 .links-wrapper {
    font-size: 0.8em;
  }

  .section-1 h2,
  .section-2 h2,
  .section-3 h2 {
    font-size: 1.5em;
  }
}

@media only screen and (max-width: 1025px) {
  header h1 {
    font-size: 3em;
  }
  header a {
    font-size: 1.2em;
  }

  header img {
    height: auto;
  }
}

@media only screen and (max-width: 767px) {
  .section-1 h2,
  .section-2 h2,
  .section-3 h2 {
    font-size: 1.3em;
  }
  .modal-content iframe {
    width: 100vw;
  }
}
</style>
