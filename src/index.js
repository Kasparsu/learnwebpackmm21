import './style.scss';

import { createApp } from 'vue';

import * as VueRouter from 'vue-router';

import App from './App.vue';
import ToDoList from './pages/ToDoList.vue';
import Modals from './pages/Modals.vue';
import Clicker from './pages/Clicker.vue';
import Chuck from './pages/Chuck.vue';
import RickAndMorty from './pages/RickAndMorty.vue';

const routes = [
    { path: '/', component: RickAndMorty, name: 'Rick and Morty' },
    { path: '/modal', component: Modals, name: 'Modal' },
    { path: '/todolist', component: ToDoList, name: 'To-Do List' },
    { path: '/clicker', component: Clicker, name: 'Clicker' },
    { path: '/chuck', component: Chuck, name: 'Chuck' },
    { path: '/rickandmorty', component: RickAndMorty, name: 'RickAndMorty' },
]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})


let app = createApp(App);
app.use(router);

app.mount('#app');