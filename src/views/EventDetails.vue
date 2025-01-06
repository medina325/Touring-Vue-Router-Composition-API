<script setup>
import { onMounted, ref } from "vue";
import EventService from "../services/EventService";

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
    <span>{{ event.time }} on {{ event.date }} @ {{ event.location }}</span>
    <span>{{ event.description }}</span>
  </div>
</template>

<style scoped>
.event-card {
  display: flex;
  flex-direction: column;
  line-height: 2rem;
}
</style>
