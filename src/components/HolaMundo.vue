<template>
    <div>
        <h1>Mi primer componente VUE!!!</h1>
        <h2>Su nombre es: {{nombre}}</h2>
    </div>
</template>

<script>
    export default{
        name: "HolaMundo",

        data() {
            return {
                nombre: "Alumno",
                numero: 14,
                miArray: []
            }
        }
    }
</script>

<style scoped>
    @import "./../assets/css/estilosvue.css";
    h1 {
        color: blue;
    }
</style>