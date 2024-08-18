import './style.css';
import 'reflect-metadata';

import { createApp } from 'vue';

import App from './App.vue';
import containerPlugin from './plugins/containerPlugin';

const app = createApp(App);
app.use(containerPlugin);
app.mount("#app");
