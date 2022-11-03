<template>
    <h1>Propiedad Conmutada</h1>
    <ul>
        <li v-for="game in juegosRojos" :key="game" v-html="game"></li>
    </ul>
</template>

<script>
export default {
    name: "PropiedadConmutadaComponent",

    computed: {

        juegosRojos(){
            var datos = this.juegos;

            for (var i = 0; i < datos.length; i++) {
                var juego = datos[i];
                juego = "<span style='color:red'>" + juego + "</span>";
                datos[i] = juego;
            }

            return datos;
        }

    },

    data() {
        return {
            juegos: ["FIFA", "Call of duty", "GTA", "Rocket League"]
        }
    },
}
</script>

<style scoped>

</style>