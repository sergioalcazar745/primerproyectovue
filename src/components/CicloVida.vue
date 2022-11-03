<template>
    <div>
        <h1>Hooks VUE</h1>
        <h3>{{saludo}}</h3>
        <button @click="this.cambiarSaludo()">Cambiar saludo</button>
    </div>
</template>

<script>
    export default {
        name: "CicloVida",

        data(){
            return {
                saludo: true
            }
        },

        methods: {
            cambiarSaludo(){
                this.saludo = !this.saludo;
            }
        },

        mounted() {
            console.log("Component montado")
        },

        created() {
            console.log("Component creado")
        },

        updated() {
            console.log("Component actualizado")
        },

        unmounted() {
            console.log("Componente destruido")
        }
    }
</script>

<style scoped>

</style>