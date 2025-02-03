import { createRouter, createWebHistory } from "vue-router";
import ListView from "@/views/events/List.vue";
import AboutView from "@/views/About.vue";
import EventLayout from "@/views/events/Layout.vue";
import EventDetailsView from "@/views/events/Details.vue";
import EventRegisterView from "@/views/events/Register.vue";
import EventEditView from "@/views/events/Edit.vue";
import NotFoundView from "@/views/NotFound.vue";
import NetworkErrorView from "@/views/NetworkError.vue";

const routes = [
  {
    path: "/",
    name: "event-list",
    props: (router) => ({
      page: parseInt(router.query.page) || 1,
      limit: parseInt(router.query.limit) || 4,
    }),
    component: ListView,
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
    path: "/network-error",
    name: "network-error",
    component: NetworkErrorView,
  },
  {
    path: "/404/:resource",
    name: "not-found-resource",
    component: NotFoundView,
    props: true,
  },
  {
    path: "/:catchAll(.*)*",
    name: "not-found",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

router.resolve({
  name: "not-found",
  params: { catchAll: ["not", "found"] },
}).href;

export default router;
