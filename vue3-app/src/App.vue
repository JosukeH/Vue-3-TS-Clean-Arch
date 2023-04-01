<script setup lang="ts">
import NavBar from './components/NavBar.vue';

</script>

<template>
  <div class="w-full">
    <nav-bar class="w-full" />
      <!-- <router-link class="link" to="/">Go to Home</router-link> -->
      <!-- <router-link class="link" to="/users">Go to Users</router-link> -->
  
    <router-view></router-view>

  </div>
</template>

<style scoped>
.link{
  margin-left: 6px;
}
.logo {
  height: 2em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
