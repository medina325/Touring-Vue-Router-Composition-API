<script setup>
import { inject } from "vue";
import router from "../../router";

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});

const GStore = inject("GStore");

const register = () => {
  // Call to API
  GStore.flashMessage = `You are successfully registered for the event ${props.event.title}`;
  setTimeout(() => {
    GStore.flashMessage = "";
  }, 3000);
  router.push({
    name: "event-details",
    params: { id: props.event.id },
  });
};
</script>

<template>
  <p>
    Register the event at {{ event.time }} on {{ event.date }} @
    {{ event.location }}
  </p>
  <button @click="register">Register</button>
</template>
