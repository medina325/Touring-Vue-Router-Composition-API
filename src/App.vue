<script setup>
import { inject } from "vue";
import { RouterLink, RouterView } from "vue-router";

const GStore = inject("GStore");
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <div id="flash-message" v-if="GStore.flashMessage">
          {{ GStore.flashMessage }}
        </div>
        <nav>
          <RouterLink :to="{ name: 'event-list' }">Events</RouterLink> |
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
a.router-link-exact-active {
  color: #42b983;
}
.link {
  text-decoration: none;
  color: inherit;
}
h2 {
  font-size: 20px;
}
@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}
#flash-message {
  animation-name: yellowfade;
  animation-duration: 3.2s;
}
</style>
