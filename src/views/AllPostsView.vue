<script setup>
import { computed, ref, onMounted, onUnmounted, watch } from "vue";
import { RouterLink } from "vue-router";
import { useRoute } from "vue-router";
import TopNav from "../components/TopNav.vue";
import MoreNav from "../components/MoreNav.vue";
import BotNav from "../components/BotNav.vue";
import FooterSec from "../components/FooterSec.vue";
import posts from "../data/posts.json";

const showMore = ref(false);
const isMobile = ref(false);
const BotNavContent = [
  "All posts",
  "Artists",
  "News",
  "Downloads",
  "Tutorials",
  "Videos",
  "Loop",
  "One Thing",
  "Podcasts",
];
const noMorePosts = computed(
  () => loadedPosts.value.length === filteredPosts.value.length
);
const loadedPostsNumber = ref(8);
const route = useRoute();
const filterBy = ref(route.query.filter || "All posts");
const filteredPosts = computed(() => {
  return filterBy.value === "All posts"
    ? posts
    : posts.filter((post) => post.category === filterBy.value);
});
const loadedPosts = computed(() =>
  filteredPosts.value.slice(0, loadedPostsNumber.value)
);

const resolveImgSrc = (imgSrc) => {
  return new URL(`../assets/images/latest entries/${imgSrc}`, import.meta.url)
    .href;
};

const loadMorePosts = () => {
  const remaining = filteredPosts.value.length - loadedPostsNumber.value;
  loadedPostsNumber.value += Math.min(remaining, 4);
};
</script>

<template>
  <TopNav
    @showMore="(msg) => (showMore = msg)"
    @isMobile="(msg) => (isMobile = msg)"
    :activeMore="true"
  />
  <MoreNav v-if="showMore" :isMobile="isMobile" />
  <BotNav
    :content="BotNavContent"
    :btnAction="true"
    @action="(msg) => (filterBy = msg)"
    :filterBy="filterBy"
  />
  <main class="col-10">
    <h1>The latest from Ableton</h1>
    <div class="posts-container">
      <div class="post" v-for="post in loadedPosts" :key="post.id">
        <div class="img-wrapper">
          <a href="#"
            ><img :src="resolveImgSrc(post.imgSrc)" :alt="post.caption"
          /></a>
        </div>
        <button :class="[post.category, 'category']" @click="filterBy = post.category">{{ post.category }}</button>
        <h3>{{ post.caption }}</h3>
        <p>{{ post.subCaption }}</p>
        <p>
          Tags: <a v-for="tag in post.tags" href="#" class="tag">{{ tag }}</a>
        </p>
      </div>
    </div>
    <button
      v-if="!noMorePosts"
      class="load-more-btn"
      @click="loadMorePosts"
      aria-label="Load more blog posts"
    >
      {{ noMorePosts ? "No More Posts" : "Load More" }}
    </button>
  </main>
  <FooterSec />
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
}
.posts-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: minmax(250px, auto);
  gap: 2rem;
  margin: 50px auto;
}

.post {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: start;
  gap: 1rem;
}
img {
  width: 100%;
  height: auto;
}

.category {
  display: inline-block;
  width: fit-content;
  padding: 5px 10px;
  font-size: 0.8em;
  font-weight: 500;
  text-decoration: none;
  color: black;
  border: none;
  cursor: pointer;
}

.tag {
  text-decoration: none;
  color: #0000ff;
  padding: 0px 5px;
  font-weight: 500;
  font-size: 0.9em;
}

.tag:not(:last-child)::after {
  content: ",";
}

.tag:last-child::after {
  content: ".";
}

.load-more-btn {
  padding: 10px 20px;
  background-color: #0000ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 20px auto;
  font-size: 1.2em;
}

</style>
