// import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import AuthenticatePage from './components/AuthenticatePage.vue'
import SettingsPanel from './components/SettingsPanel.vue'
import FetchURL from './components/FetchURL.vue'
import { store } from './state/state.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: SettingsPanel },
        { path: '/authenticate', name: "authenticate", component: AuthenticatePage, props:true },
        { path: '/:catchAll(.*)', component: FetchURL },
    ]
});

export default router

const app = createApp(App);
app.use(router);
app.mount('#app')
app.provide('store', 
store);

