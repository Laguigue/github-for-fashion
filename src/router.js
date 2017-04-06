import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/pages/Home.vue';
import GarmentDetail from './components/pages/GarmentDetail.vue';
import Create from './components/pages/Create.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Home',
    },
    {
      path: '/garment/:id',
      component: GarmentDetail,
      name: 'Garment Detail',
    },
    {
      path: '/create',
      component: Create,
      name: 'create',
    },
    {
      /* This one must stay in last place as it handles all unknown routes */
      /* TO DO : Page not found template */
      path: '*',
      redirect: '/',
    },
  ],
});

export default router;