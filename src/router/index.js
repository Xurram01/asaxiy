import { createRouter, createWebHistory } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import ShoppingCart from '../components/ShoppingCart.vue';
import Favorites from '../components/Favorites.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Navbar },
    { path: '/cart', component: ShoppingCart },
    { path: '/favorites', component: Favorites },
  ],
});

export default router;
