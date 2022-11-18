import Vue from 'vue';
import VueRouter from 'vue-router';

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

export const routes = [{
  path: '/',
  name: 'Index',
  component: () => import('../views/Index.vue'),
}];

const router = new VueRouter({
  routes,
});

export default router;
