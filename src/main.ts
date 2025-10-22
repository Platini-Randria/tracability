// main.js
import { createApp } from "vue";
import App from "./App.vue";
import { createVuestic } from "vuestic-ui";
import './assets/font/roboto'
import './style.css'
import 'vuestic-ui/css';
import Router from "@/router/index";

createApp(App)
    .use(createVuestic())
    .use(Router)
    .mount("#app");