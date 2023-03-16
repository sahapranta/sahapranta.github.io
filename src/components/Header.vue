<script setup>
import { ref, computed } from "vue";
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const isOpen = ref('false')
const openMenu = () => {
    isOpen.value = !isOpen.value;
};

let menus = ['home', 'about', 'blog', 'contact'];
const currentRoute = computed(() => router.currentRoute.value)
const routes = computed(() => menus.filter(menu => menu !== currentRoute.value.name));

</script>

<template>
    <header class="site-header">
        <div class="container">
            <div class="site-header-inner">
                <div class="brand header-brand">
                    <h1 class="m-0">
                        <RouterLink to="/">
                            <img class="header-logo-image asset-light" src="/public/images/logo-light.svg" alt="Logo" />
                            <img class="header-logo-image asset-dark" src="/public/images/logo-dark.svg" alt="Logo" />
                        </RouterLink>
                    </h1>
                </div>
                <div class="header-menu">
                    <RouterLink class="capitalize" v-for="menu in routes" :to="{ name: menu }">{{ menu }}</RouterLink>
                </div>
                <a href="#" class="menu" @click.prevent="openMenu">
                    <img src="/public/images/menu.png" alt="menu" width="50">
                </a>
            </div>
        </div>
    </header>
    <div id="myNav" class="overlay" :style="`width:${isOpen ? '0' : '100'}%;`">
        <a href="#" @click.prevent="openMenu" class="closebtn">&times;</a>
        <div class="overlay-content">
            <RouterLink class="capitalize" v-for="menu in routes" :to="{ name: menu }">{{ menu }}</RouterLink>
        </div>
    </div>
</template>
<style>
.header-menu {
    display: flex;
}

.header-menu a {
    text-decoration: none;
    padding: 4px 10px;
    border-radius: 8px;
    background: linear-gradient(to left, #FFBC48 0, #d8fff4 100%);
    color: #1162A9 !important;
    margin: 0 5px;
    /* box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px; */
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}

.header-menu a:hover {
    text-decoration: none;
    color: beige !important;
    background: linear-gradient(to right, #2FEAFC 0, #535FD7 100%);
}

.w-100 {
    width: 100%;
}

.w-0 {
    width: 0%;
}

.menu {
    visibility: hidden;
    display: none;
}

@media only screen and (max-width: 768px) {
    .header-menu {
        visibility: hidden;
        display: none;
    }

    .menu {
        display: block;
        visibility: visible;
    }
}

.capitalize {
    text-transform: capitalize;
}
</style>