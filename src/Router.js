import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/Home.vue';
import CineComponent from './components/Cine.vue';
import MusicaComponent from './components/Musica.vue';
import CicloVidaComponent from './components/CicloVida.vue';
import DirectivasComponent from './components/Directivas.vue';
import PropiedadConmutadaComponent from './components/PropiedadConmutada.vue';
import MetodosFilterComponent from './components/MetodosFilter.vue';

const misRutas = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/cine", component: CineComponent
    },
    {
        path: "/musica", component: MusicaComponent
    },
    {
        path: "/hooks", component: CicloVidaComponent
    },
    {
        path: "/directivas", component: DirectivasComponent
    },
    {
        path: "/conmutada", component: PropiedadConmutadaComponent
    },
    {
        path: "/metodos", component: MetodosFilterComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: misRutas
});

export default router