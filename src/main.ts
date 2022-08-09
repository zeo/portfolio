import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue'
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
import './style.css';

const router = createRouter({
    history: createWebHistory(),

    routes: [
        { path: '/', component: Home },
        { path: '/projects', component: Projects },
    ],
});

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
