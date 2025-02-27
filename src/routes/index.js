import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../page/Dashboard.vue";
import NotFound from "../page/NotFound/NotFound.vue";
import NilaiMahasiswa from "../page/NilaiMahasiswa.vue";
import HalamanLike from "../page/HalamanLike.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/notfound", component: NotFound },
  { path: "/nilai_mahasiswa", component: NilaiMahasiswa },
  { path: "/halaman_like", component: HalamanLike },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
