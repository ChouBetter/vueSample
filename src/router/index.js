import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

var routes = [
  {
    path: "/",
    component: resolve => require(["@/components/HelloWorld.vue"], resolve)
  }
];

const dynamics = require.context("@/dynamics/", true, /\.vue$/i);
dynamics.keys().map(key => {
  const name = key.match(/\w+/)[0];
  routes.push({
    path: `/${name}`,
    name,
    component: () => import(`@/dynamics/${name}`)
  });
});

var router = new Router({ routes });

router.beforeEach(async (to, from, next) => {
  next();
});

export default router;
