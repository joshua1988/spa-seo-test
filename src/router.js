import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "@/views/MainView.vue";
import HomeView from "@/views/HomeView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: MainView },
    { path: "/home", component: HomeView }
  ]
});
