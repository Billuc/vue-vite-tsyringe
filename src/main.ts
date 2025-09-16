import "./style.css";
import { createApp } from "vue";

// Use one or the other
import "reflect-metadata";
// import "@abraham/reflection";

import App from "./App.vue";
import containerPlugin from "./plugins/containerPlugin";

const app = createApp(App);
app.use(containerPlugin);
app.mount("#app");
