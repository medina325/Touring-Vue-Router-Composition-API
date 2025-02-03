<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <p>
    Edit the event at {{ event.time }} on {{ event.date }} @
    {{ event.location }}
  </p>
</template>
