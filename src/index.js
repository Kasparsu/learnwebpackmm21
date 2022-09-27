import './style.scss';

import { createApp } from 'vue';

import * as VueRouter from 'vue-router';

import App from './App.vue';
import ToDoList from './ToDoList.vue';

const routes = [
    { path: '/', component: ToDoList }
]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})


let app = createApp(App);
app.use(router);

app.mount('#app');