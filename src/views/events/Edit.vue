<script setup>
import { onMounted, ref } from "vue";
import EventService from "@/services/EventService";

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <span>Edit the event at {{ event.time }} on {{ event.date }} @ {{ event.location }}</span>
</template>
