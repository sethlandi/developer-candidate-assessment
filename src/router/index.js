import Vue from 'vue';
import VueRouter from 'vue-router';
import Exercises from '@/views/Exercises';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: { name: 'Exercises' },
  },
  {
    path: '/exercises',
    name: 'Exercises',
    component: Exercises,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
