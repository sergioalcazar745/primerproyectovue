<template>
    <div>
        <h1>Directivas VUE</h1>
        <ul>
            <li v-for="serie in series" :key="serie">
                {{serie}}
            </li>
        </ul>
        <label>Introduce un número</label>
        <input type="text" v-model="numero"/>
        <hr/>
        <h3 v-if="numero > 0" style="color: red">POSITIVO</h3>
        <h3 v-else-if="numero == 0" style="color: red">NEUTRAL</h3>
        <h3 v-else style="color: red">NEGATIVO</h3>
        <label>Nombre</label>
        <input type="text" v-model="nombre"/><br/>
        <label>Edad:</label>
        <input type="text" v-model="edad"/>
        <h1>{{$data}}</h1>
    </div>
</template>

<script>
export default {
    name: "DirectivasComponent",
    data() {
        return {
            numero: 0,
            nombre: "",
            edad: 0,
            series: ["futurama", "suits", "The walking dead", "Juego de tronos", "House"]
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>