<script setup>
import { computed, onMounted } from 'vue';
import { useProjectStore } from '../stores/projects'
import { useRouter, } from 'vue-router'
const router = useRouter()

onMounted(() => store.loadData())
const store = useProjectStore()
const currentRoute = computed(() => router.currentRoute.value)
const project = computed(() => store.data.find(m => m.name === currentRoute.value.params.slug));
const goBack = () => router.push({ name: 'home' });

</script>
<template>
    <div class="features-inner section-inner has-bottom-divider">
        <div class="features-header text-center">
            <div class="container-sm">
                <h2 class="section-title mt-0"> {{ currentRoute.params.slug }} </h2>
                <p class="section-paragraph"> The Project is made using {{ project.tech }}. </p>
                <p>{{ project.description }}</p> <a class="button button-shadow button-sm" target="_blank"
                    :href="project.url">See Live</a> & <a class="button button-shadow button-sm" target="_blank"
                    :href="project.source">Source Code</a>
                <div class="features-image"> <img class="features-box project-img" :src="`/images/${project.img}`"
                        alt="Feature box" /> </div>
                <div style="display: flex; justify-content:center;">
                    <a class="button button-danger" @click.prevent="goBack">Go
                        Back</a>
                </div>
            </div>
        </div>
    </div>
</template>