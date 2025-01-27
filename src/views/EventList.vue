<script setup>
import { ref, onMounted } from "vue";
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";
import { computed } from "vue";
import { watchEffect } from "vue";

const props = defineProps({
  page: {
    type: Number,
    required: false,
  },
  limit: {
    type: Number,
    required: false,
  },
});

const events = ref(null);
const totalEventsCount = ref(0);
const page = computed(() => props.page);
const limit = computed(() => props.limit);
const isFirstPage = computed(() => props.page === 1);
const isLastPage = computed(
  () => Math.ceil(page.value * limit.value) >= totalEventsCount.value
);

onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(page.value, limit.value)
      .then((response) => {
        totalEventsCount.value = parseInt(response.headers["x-total-count"]);
        events.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
  <div class="pagination-container">
    <div class="pagination-buttons">
      <RouterLink
        class="link"
        :style="{ visibility: isFirstPage ? 'hidden' : 'visible' }"
        rel="prev"
        :to="{ name: 'event-list', query: { page: page - 1, limit } }"
      >
        <button class="pagination-btn">&lt</button>
      </RouterLink>

      <RouterLink
        v-for="n in Math.ceil(totalEventsCount / limit)"
        :key="n"
        class="link"
        rel="next"
        :to="{ name: 'event-list', query: { page: n, limit } }"
      >
        <button
          :class="{ 'pagination-btn-current-page': n === page }"
          class="pagination-btn"
        >
          {{ n }}
        </button>
      </RouterLink>

      <RouterLink
        class="link"
        :style="{ visibility: isLastPage ? 'hidden' : 'visible' }"
        rel="next"
        :to="{ name: 'event-list', query: { page: page + 1, limit } }"
      >
        <button class="pagination-btn">&gt</button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination-container {
  display: flex;
  justify-content: center;
}

.pagination-buttons {
  display: flex;
  justify-content: space-between;
  width: 250px;
}

.pagination-btn {
  cursor: pointer;
  color: inherit;
  background: none;
  border: none;
  border-radius: 15px;
  font-size: 18px;
  transition: all 0.2s ease;
}

.pagination-btn:hover {
  transform: scale(1.05);
}

.pagination-btn:active {
  transform: scale(0.95);
}

.pagination-btn-current-page {
  color: hsl(0, 0%, 100%);
  background-color: #42b983;
}
</style>
