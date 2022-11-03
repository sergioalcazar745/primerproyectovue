import { createApp } from 'vue'
import App from './App.vue';
import router from './Router';

const app = createApp(App)
app.config.globalProperties.$filters = {

    mayuscula(dato){
        return dato.toUpperCase();
    },

    devolverHTML(dato){
        return <span style="color: green">{dato}</span>
    }
}
app.use(router).mount('#app')
