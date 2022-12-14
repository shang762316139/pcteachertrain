import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    name: "PC",
    component: () => import("../views/PC.vue"),
    children: [
      {
        path: "/trainingActivity",
        name: "trainingActivity",
        component: () => import("../views/trainingActivity.vue"),
      },
      {
        path: "/college",
        name: "college",
        component: () => import("../views/college.vue"),
      },
      {
        path: "/activityItem",
        name: "activityItem",
        component: () => import("../views/activityItem.vue"),
      },
    ],
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
