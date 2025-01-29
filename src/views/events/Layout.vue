<script setup>
import { onMounted, ref } from "vue";
import EventService from "@/services/EventService";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const event = ref({});

onMounted(async () => {
  try {
    const response = await EventService.getEvent(props.id);
    event.value = response.data;
    console.log(event.value);
  } catch (err) {
    console.log(err);
  }
});
</script>

<template>
  <div class="event-card">
    <h1>{{ event.title }}</h1>
    <div>
      <router-link :to="{ name: 'event-details', params: { id: props.id } }">Details</router-link>
      |
      <router-link :to="{ name: 'event-register', params: { id: props.id } }">Register</router-link>
      |
      <router-link :to="{ name: 'event-edit', params: { id: props.id } }">Edit</router-link>
    </div>
    <router-view :event="event"></router-view>
  </div>
</template>

<style scoped>
.event-card {
  display: flex;
  flex-direction: column;
  line-height: 2rem;
}
a {
  font-weight: bold;
  color: #2c3e50;
}
a.router-link-exact-active {
  color: #42b983;
}
</style>
