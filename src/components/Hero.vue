<script setup>
import { ref, computed } from 'vue';

const lightMode = ref(false);

const mode = computed(() => lightMode.value ? 'Light' : 'Dark');

const modeChange = () => {
    if (lightMode.value) {
        document.body.classList.add('lights-off');
    } else {
        document.body.classList.remove('lights-off');
    }
}

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
    <section class="hero">
        <div class="container">
            <div class="hero-inner">
                <div class="header-illustration">
                    <img class="header-illustration-image asset-light" src="/public/images/header-illustration-light.svg"
                        alt="Header illustration" />
                    <img class="header-illustration-image asset-dark" src="/public/images/header-illustration-dark.svg"
                        alt="Header illustration" />
                </div>
                <div class="hero-copy">
                    <img class="hero-media-image asset-top" src="/public/images/300x300px.jpg" alt="Hero media" />
                    <img class="hero-media-image asset-dark" src="/public/images/hero-media-light.svg" alt="Hero media"
                        width="50%" />
                    <img class="hero-media-image asset-light" src="/public/images/hero-media-dark.svg" alt="Hero media"
                        width="50%" />
                </div>
                <div class="hero-media">
                    <div class="hero-media-container">
                        <h1 class="hero-title mt-0">Pranta Saha</h1>
                        <p class="hero-paragraph">
                            An Enthusiastic Full Stack Web Developer. Traditionally simple person who always
                            love simplicity in everywhere.
                        </p>
                        <div class="hero-cta">
                            <a class="button button-primary"
                                href="https://github.com/sahapranta/sahapranta.github.io/raw/master/dist/PRANTA_SAHA.pdf"
                                :download="true">Download
                                CV</a>
                            <div class="lights-toggle">
                                <input v-model="lightMode" id="lights-toggle" type="checkbox" name="lights-toggle"
                                    class="switch" :checked="lightMode" @change="modeChange" />
                                <label for="lights-toggle" class="text-xs">Turn Me {{ mode }}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- <div class="stacklist">
        <ul>
            <li v-for="stack in stacklist">{{ stack }}</li>
        </ul>
    </div> -->
</template>