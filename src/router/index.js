import { createRouter, createWebHistory } from "vue-router";
import EventListView from "@/views/EventList.vue";
import AboutView from "@/views/About.vue";
import EventLayout from "@/views/events/Layout.vue";
import EventDetailsView from "@/views/events/Details.vue";
import EventRegisterView from "@/views/events/Register.vue";
import EventEditView from "@/views/events/Edit.vue";
import NotFound from "@/components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "event-list",
      props: (router) => ({
        page: parseInt(router.query.page) || 1,
        limit: parseInt(router.query.limit) || 4,
      }),
      component: EventListView,
    },
    {
      path: "/events/:id",
      name: "event-layout",
      props: true,
      component: EventLayout,
      children: [
        {
          path: "",
          name: "event-details",
          component: EventDetailsView,
        },
        {
          path: "register",
          name: "event-register",
          component: EventRegisterView,
        },
        {
          path: "edit",
          name: "event-edit",
          component: EventEditView,
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

router.resolve({
  name: "not-found",
  params: { pathMatch: ["not", "found"] },
}).href;

export default router;
