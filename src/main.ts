import { createApp } from 'vue';
import './style.css';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import Skills from '@/components/Skills.vue';
import AllSpells from '@/components/AllSpells.vue';
import MySpells from '@/components/MySpells.vue';
import App from './App.vue';

const pinia = createPinia();

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/dnd-helper', component: MySpells },
    { path: '/dnd-helper/all-spells', component: AllSpells },
    { path: '/dnd-helper/skills', component: Skills },
  ],
});
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');
