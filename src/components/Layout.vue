<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Hero from "../components/Hero.vue"
import cta from "../components/cta.vue"


</script>

<template>
    <Header />
    <main>
        <Hero />
        <slot></slot>
    </main>
    <cta />
    <Footer />
</template>

