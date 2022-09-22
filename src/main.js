import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/tailwind.css";
import "./assets/css/index.css";

import * as dotenv from "dotenv";
dotenv.config();

const app = createApp(App);

// app.component('test', test)
app.use(router).use(store);
app.mount("#app");
