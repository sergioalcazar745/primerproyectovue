import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/Home.vue';
import CineComponent from './components/Cine.vue';
import MusicaComponent from './components/Musica.vue';

const misRutas = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/cine", component: CineComponent
    },
    {
        path: "/musica", component: MusicaComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: misRutas
});

export default router