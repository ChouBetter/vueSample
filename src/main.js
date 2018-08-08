import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

axios.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      console.log("axios:" + error.response.status);
      switch (error.response.status) {
        case 401:
          break;
      }
    }
    return Promise.reject(error.response.data);
  }
);

Vue.prototype.$http = axios;
