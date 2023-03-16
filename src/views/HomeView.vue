<script setup>
import { computed, onMounted } from 'vue';
import { useProjectStore } from '../stores/projects'

import TimeLine from "../components/TimeLine.vue"
const store = useProjectStore()

onMounted(() => store.loadData())

const imgSrc = (src) => `/public/images/${src}`;

const last = computed(() => store.last);
const lastImageSrc = computed(() => imgSrc(store.last.img));
const stacklist = [
  "LARAVEL",
  "PHP",
  "NODE.JS",
  "REACTJS",
  "VUEJS",
  "EXPRESSJS",
  "MONGODB",
  "MYSQL",
];
</script>
<template>
  <div class="stacklist">
    <ul>
      <li v-for="stack in stacklist">{{ stack }}</li>
    </ul>
  </div>
  <div class="features-inner section-inner has-bottom-divider">
    <div class="features-header text-center">
      <div class="container-sm">
        <h2 class="section-title mt-0"> Latest Project </h2>
        <p class="section-paragraph"> The Project is made using {{ last.tech }}. </p> <a
          class="button button-shadow button-sm" target="_blank" :href="last.url">See Live</a> & <a
          class="button button-shadow button-sm" target="_blank" :href="last.source">Source Code</a>
        <div class="features-image">
          <img class="features-illustration asset-dark" src="/public/images/features-illustration-dark.svg"
            alt="Feature illustration" /> <img class="features-box asset-dark" src="/public/images/features-box-dark.svg"
            alt="Feature box" />
          <img class="features-illustration asset-dark" src="/public/images/features-illustration-top-dark.svg"
            alt="Feature illustration top" /> <img class="features-illustration asset-light"
            src="/public/images/features-illustration-light.svg" alt="Feature illustration" />
          <img class="features-box asset-light" src="/public/images/browser.svg" alt="Feature box" />
          <div class="project-holder"> <img class="features-box project-img" :src="lastImageSrc" alt="Feature box" />
          </div> <img class="features-illustration asset-light" src="/public/images/features-illustration-top-light.svg"
            alt="Feature illustration top" />
        </div>
      </div>
    </div>
    <div class="features-wrap">
      <h2 class="section-title mt-0">More...</h2>
      <div class="feature" v-for="project in store.filteredProject">
        <div class="feature-inner">
          <div class="feature-icon">
            <router-link :to="{ name: 'project', params: { slug: project.name } }">
              <img class="" :src="'images/' + project.img" alt="Feature 01" height="100" /> </router-link>
          </div>
          <div class="feature-content">
            <router-link :to="{ name: 'project', params: { slug: project.name } }">
              <h3 class="feature-title mt-0"> {{ project.name }} <small>[{{ project.tech }}]</small> </h3>
            </router-link>
            <p class="max-line text-sm mb-0"> {{ project.description }} </p>
          </div>
        </div>
      </div> <span v-if="store.notice">{{ store.notice }}</span>
      <div style="display: flex; justify-content:flex-end;"> <a class="button ripple"
          v-on:click="store.loadMore">Load...</a>
      </div>
    </div>
  </div>
  <TimeLine />
</template>
