<script setup>

import TimeLine from "../components/TimeLine.vue"
</script>
<template>
  <div class="about">
    <TimeLine />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
