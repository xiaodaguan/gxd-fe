import Vue from "vue";
import {
  Button,
  Layout,
  Menu,
  Icon,
  Divider,
  Input,
  List,
  Avatar,
  Row,
  Col,
  Card,
  Calendar,
  Collapse,
  Carousel
} from "ant-design-vue";
import App from "./App";
import router from "./router";
import VueCookies from "vue-cookies";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Divider);
Vue.use(Icon);
Vue.use(List);
Vue.use(Avatar);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Calendar);
Vue.use(Collapse);
Vue.use(Carousel);
Vue.use(VueCookies);
Vue.use(Input);

new Vue({
  render: h => h(App),
  router
}).$mount("#app");