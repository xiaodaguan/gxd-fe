import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import Router from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  // console.log("push", location);
  return routerPush.call(this, location).catch(error => error);
};

router.beforeEach((to, from, next) => {
  // console.log("beforeeach", to);
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
