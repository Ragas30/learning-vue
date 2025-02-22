import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../page/Dashboard.vue";
import NotFound from "../page/NotFound/NotFound.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/notfound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes, 
});

export default router;
