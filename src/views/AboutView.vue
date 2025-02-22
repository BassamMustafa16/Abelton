<script setup>
import { ref, computed, } from "vue";
import TopNav from "../components/TopNav.vue";
import MoreNav from "../components/MoreNav.vue";
import BotNav from "../components/BotNav.vue";
import FooterSec from "../components/FooterSec.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Declear variables

// Declear children variables
const showMore = ref(false);
const showVideo = ref(false);
const isMobile = ref(false);
const BotNavContent = ['About', 'Jobs', 'Apprenticeships']
// Animation functions
const moveArrowRight = (event) => {
  event.srcElement.firstElementChild.style.marginLeft = "10px";
};

const moveArrowLeft = (event) => {
  event.srcElement.firstElementChild.style.marginLeft = "0px";
};

const imgSrc = computed(() =>
  isMobile.value
    ? new URL("@/assets/images/photo-8 (1).jpg", import.meta.url).href
    : new URL("@/assets/images/photo-8.jpg", import.meta.url).href
);


</script>

<template>
  <TopNav
    @showMore="(msg) => (showMore = msg)"
    @isMobile="(msg) => (isMobile = msg)"
    :activeMore = "true"
  />
  <MoreNav v-if="showMore" :isMobile="isMobile" />
  <BotNav :content="BotNavContent"/>

  <header>
    <div>
      <img src="../assets/images/header (1).jpg" alt="header-img" />
      <p>Ableton</p>
    </div>
  </header>

  <main>
    <section :class="[isMobile ? 'col-10' : 'col-6', 'section-1']">
      <p class="bold-p">
        We make <a href="#">Live</a>, <a href="#">Push</a>,
        <a href="#">Note</a>, <a href="#">Move</a> and <a href="#">Link</a> —
        unique software and hardware for music creation and performance. With
        these products, our community of users creates amazing things.
      </p>
      <p class="regular-p">
        Ableton was founded in 1999 and released the first version of Live in
        2001. Our products are used by a community of dedicated musicians, sound
        designers, and artists from across the world.
      </p>
    </section>
    <section class="section-2">
      <div class="image-wrapper image-wrapper-left col-5">
        <img
          src="../assets/images/photo-1 (1).jpg"
          alt="Music Production"
          class="image image-left"
        />
      </div>
      <div class="background col-7">
        <div class="image-wrapper image-wrapper-right col-4">
          <img
            src="../assets/images/photo-2 (2).jpg"
            alt="Modern Office"
            class="image image-right"
          />
        </div>
      </div>
    </section>
    <section :class="[isMobile ? 'col-10' : 'col-6', 'section-3']">
      <p class="bold-p">
        Making music isn’t easy. It takes time, effort, and learning. But when
        you’re in the flow, it’s incredibly rewarding.
      </p>
      <p class="regular-p">
        We feel the same way about making Ableton products. The driving force
        behind Ableton is our passion for what we make, and the people we make
        it for.
      </p>
    </section>
    <section class="section-4">
      <figure v-if="!showVideo">
        <div :class="[isMobile ? 'col-10' : 'col-6', 'image-wrapper']">
          <img src="../assets/images/poster-juanpe (5).jpg" alt="" />
          <div class="icon-wrapper" @click="showVideo = !showVideo">
            <i><font-awesome-icon :icon="['fas', 'play']" /></i>
          </div>
        </div>
      </figure>

      <iframe
        v-else
        :class="[isMobile ? 'col-10' : 'col-6']"
        src="https://www.youtube.com/embed/9SbnhgjeyXA?autoplay=1"
        allowfullscreen
        allow="autoplay"
      ></iframe>
    </section>
    <section :class="[isMobile ? 'col-10' : 'col-6', 'section-5']">
      <p class="bold-p">
        We are more than 350 people from 30 different countries divided between
        our headquarters in Berlin and our offices in Los Angeles and Tokyo.
      </p>
      <p class="regular-p">
        Most of us are active musicians, producers, and DJs, and many of us use
        Live and Push every day. We come from a wide range of cultural and
        professional backgrounds. Some of us have PhDs, some are self-taught,
        and most of us are somewhere in between. What connects us is the shared
        belief that each of us has the skills and knowledge to contribute to
        something big: helping to shape the future of music culture.
      </p>
    </section>
    <section class="section-6">
      <div class="background col-7">
        <div class="left-top-wrapper col-4">
          <img
            src="../assets/images/photo-3.jpg"
            alt="left top"
            class="left-top-img"
          />
        </div>
        <div class="left-bot-wrapper col-4">
          <img
            src="../assets/images/photo-4.jpg"
            alt="left bot"
            class="left-bot-img"
          />
        </div>
      </div>
      <div class="right-wrapper col-5">
        <img src="../assets/images/photo-5.jpg" alt="right" class="right-img" />
      </div>
    </section>
    <section :class="[isMobile ? 'col-10' : 'col-6', 'section-7']">
      <p class="bold-p">
        We believe it takes focus to create truly outstanding instruments. We
        only work on a few products and we strive to make them great.
      </p>
      <p class="regular-p">
        Rather than having a one-size-fits-all process, we try to give our
        people what they need to work their magic and grow. We’ve learned that
        achieving the best results comes from building teams that are richly
        diverse, and thus able to explore problems from a wider set of
        perspectives. We don’t always agree with each other, but opinion and
        debate are valued and openly encouraged.
      </p>
    </section>
    <section class="section-8">
      <div class="image-wrapper col-10">
        <img
          src="../assets/images/poster-meet-the-makers.jpg"
          alt="poster-meet-the-makers"
        />
      </div>
    </section>
    <section :class="[isMobile ? 'col-10' : 'col-6', 'section-9']">
      <p class="bold-p">
        We’re passionate about what we do, but we’re equally passionate about
        improving who we are.
      </p>
      <p class="regular-p">
        We work hard to foster an environment where people can grow both
        personally and professionally, and we strive to create a wealth of
        opportunities to learn from and with each other.
      </p>
      <p class="regular-p">
        Alongside an internal training program, employees are actively supported
        in acquiring new knowledge and skills, and coached on applying these in
        their daily work. In addition, staff-organized development and music
        salons are a chance to discuss new technologies, production techniques
        and best practices.
      </p>
    </section>
    <section class="section-10">
      <div class="background col-8">
        <div class="left-img-wrapper col-4">
          <img src="../assets/images/photo-6-a.jpg" alt="" />
        </div>
        <div class="right-img-wrapper col-5">
          <img src="../assets/images/photo-7.jpg" alt="" />
        </div>
      </div>
    </section>
    <section :class="[isMobile ? 'col-10' : 'col-6', 'section-11']">
      <p class="bold-p">
        We want our employees to love it here. Since we’re looking for
        exceptional talent from around the world, we will do everything we can
        to make your transition as easy as possible.
      </p>
      <p class="regular-p">
        If you're joining us in Berlin, we'll help with relocation and
        paperwork. We’ll even provide you with free German or English lessons.
        Plus, working in Germany means you can expect comprehensive health
        insurance for you and your family, as well as generous maternity and
        paternity leave. Office hours are flexible, but it’s not all work; we
        have several company and team outings throughout the year as well as a
        variety of fun, informal small-group activities.
      </p>
    </section>
    <section class="section-12">
      <div class="background col-10">
        <div :class="['image-wrapper', isMobile ? 'col-10' : 'col-5']">
          <img :src="imgSrc" alt="" />
        </div>
        <div :class="['p-container', isMobile ? 'col-10' : 'col-5']">
          <p
            :class="[
              { ['col-8']: isMobile },
              { ['bold-p']: true },
              { ['col-3']: !isMobile },
            ]"
          >
            We’re really proud of the work we’ve done so far. But there’s so
            much more to come. If you’d like to be a part of it, please join us.
          </p>
          <a
            :class="[
              { ['col-8']: isMobile },
              { ['bold-p']: true },
              { ['col-3']: !isMobile },
            ]"
            href="#home"
            @mouseover="moveArrowRight($event)"
            @mouseout="moveArrowLeft($event)"
            >See latest jobs
            <i><font-awesome-icon icon="fa-solid fa-greater-than" /></i
          ></a>
        </div>
      </div>
    </section>
  </main>
  <FooterSec />
</template>

<style scoped>
header {
  margin: auto;
  position: relative;
}
header img {
  width: 100%;
  position: relative;
}
header p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10em;
  color: #f66133;
  font-weight: 500;
  user-select: none;
}

/*Section 1, 3, 5*/
.section-1,
.section-3,
.section-5,
.section-7,
.section-9,
.section-11 {
  margin: 100px auto;
}

.bold-p {
  font-size: 1.7em;
  font-weight: 500;
  line-height: 1.5;
  margin: 15px 0px;
}

.regular-p {
  font-size: 1.2em;
  line-height: 1.5;
  margin: 15px 0px;
}

.section-1 a {
  text-decoration: none;
}

.section-1 a:visited{
  color: #0000ff;
}

/*Section 2*/
.section-2{
  position: relative;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.section-2 .image-wrapper-left{
  position: absolute;
  top: 8.333vw;
  right: 50vw;
  
}

.section-2 .image-wrapper-right{
  line-height: 0;
  
}

.section-2 .background{
  background-color: #ffffa0;
  display: flex;
  flex-direction: column;  
  align-items: flex-end;
  justify-content: center;
  padding: 0vw 8.3333vw;
  height: 58.33333vw;
  
}
.section-2 img{
  width: 100%;
}

.section-4 {
  margin: auto;
  vertical-align: middle;
  line-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-4 .image-wrapper {
  position: relative;
  margin: auto;
  display: block;
}
.section-4 .icon-wrapper {
  width: 10vw;
  position: absolute;
  border-radius: 50%;
  aspect-ratio: 1;
  background-color: #0000ff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.section-4 i {
  position: absolute;
  font-size: 8.333vw;
  color: white;
  text-align: center;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
}

.section-4 img {
  width: 100%;
}
.section-4 iframe {
  aspect-ratio: 16/9;
  z-index: 1;
}

.section-6 {
  position: relative;
}

.section-6 img {
  width: 100%;
}

.section-6 .background {
  background-color: #b6ffc0;
  padding: 8.33% 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 8.3333vw;
}

.left-top-wrapper,
.left-bot-wrapper {
  line-height: 0;
  aspect-ratio: 4/3;
}

.left-top-wrapper {
  margin-bottom: 15%;
}
.section-6 .right-wrapper {
  position: absolute;
  top: 50%;
  left: 50vw;
  transform: translateY(-50%);
}

.section-8 {
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-8 img {
  width: 100%;
}

.section-10 .background {
  background-color: #d5b3ff;

  aspect-ratio: 8/7;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: center;
}
.section-10 img {
  width: 100%;
}

.section-10 .left-img-wrapper,
.section-10 .right-img-wrapper {
  line-height: 0;
  position: absolute;
}

.section-10 .left-img-wrapper {
  left: 8.333vw;
}

.section-10 .right-img-wrapper {
  right: 0;
}

.section-12 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section-12 .background {
  background-color: #b1c5ff;
  aspect-ratio: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.section-12 .image-wrapper {
  display: inline-block;
  line-height: 0;
}
.section-12 .p-container {
  display: inline-block;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-12 img {
  width: 100%;
}

.section-12 a {
  text-decoration: none;
  display: inline-block;
}

.section-12 a:visited{
  color: #0000ff;
}
  
.section-12 i {
  font-size: 0.7em;
  vertical-align: middle;
}

@media only screen and (max-width: 1023px) {
  .section-12 .background {
    flex-direction: column;
  }

  .section-12 .p-container {
    padding: 8.333vw 0;
  }

  .section-12 .p-container a {
    margin-top: 3vw;
  }
}

@media only screen and (max-width: 760px) {
  header p {
    font-size: 5em;
  }
  .bold-p{
    line-height: 1.3;
    font-size: 1.4em;
    font-weight: 500;
  }
}
</style>
