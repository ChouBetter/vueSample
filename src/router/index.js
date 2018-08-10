import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

var routes = [
  {
    path: "/",
    component: resolve => require(["@/components/HelloWorld.vue"], resolve)
  }
];

require
  .context("@/dynamics/", true, /\.vue$/i)
  .keys()
  .map(key => {
    const name = key.match(/\w+/)[0];
    routes.push({
      path: `/d_${name}`,
      name,
      component: () => import(`@/dynamics/${name}`)
    });
  });

require
  .context("@/sample/", true, /\.vue$/i)
  .keys()
  .map(key => {
    const name = key.match(/\w+/)[0];
    routes.push({
      path: `/s_${name}`,
      name,
      component: () => import(`@/sample/${name}`)
    });
  });

var router = new Router({ routes });

router.beforeEach(async (to, from, next) => {
  next();
});

export default router;
