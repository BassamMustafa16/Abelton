<script setup>
const props = defineProps({
  isMobile: Boolean,
});

</script>

<template>
  <nav class="more-nav">
    <h2>More on Abelton.com</h2>
    <div class="top-container">
      <RouterLink active-class="active" to="/allposts">Blog</RouterLink>
      <a href="#home">Abelton for the Classroom</a>
      <a href="#home">Abelton for Colleges and Universities</a>
      <a href="#home">Certified Training</a>
      <RouterLink active-class="active" to="/about">About Abelton</RouterLink>
      <a href="#home">jobs</a>
      <a href="#home">Apprenticeships</a>
    </div>
    <h2>More from Abelton</h2>
    <div class="bot-container">
      <div class="bot-sub-container">
        <a href="#home" class="col-2"
          ><b>Loop</b><br />
          Talks, Performances and Features from Ableton's Summit for Music
          Makers</a
        >
        <a href="#home" class="col-2"
          ><b>Learning Music</b><br />Learn the fundamentals of music making
          right in your browser.</a
        >
        <a href="#home" class="col-2"
          ><b>Learning Synths</b><br />Get started with synthesis using a
          web-based synth and accompanying lessons.</a
        >
        <a href="#home" class="col-2"
          ><b>Making Music</b><br />Some tips from 74 Creative Strategies for
          Electronic Producers.</a
        >
      </div>
    </div>
  </nav>
</template>

<style scoped>
.more-nav {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-bottom: solid 2px #f3f3f3;
}

.bot-container{
  overflow-x: auto;
}
.more-nav .top-container,
.more-nav .bot-sub-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.more-nav a {
  font-size: 0.9em;
}

.more-nav h2 {
  margin: 20px 0;
}

@media only screen and (max-width: 1023px) {
  .more-nav .top-container {
    flex-direction: column;
    width: 100%;
  }

  .bot-sub-container {
    min-width: 768px;
  }
  a {
    width: 100%;
  }
  a:hover {
    background-color: rgb(240, 240, 240);
  }
}

/* @media only screen and (max-width: 768px) {
  .more-nav .bot-container {
    overflow-x: scroll;
  }
} */
</style>
