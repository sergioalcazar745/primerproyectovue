<template>
    <h1>Metodos filters</h1>
    <ul>
        <li v-for="num in numeros" :key="num"><div v-html="$filters.devolverHTML(num)"></div></li>
    </ul>
    <ul>
        <li v-for="name in nombres" :key="name">{{$filters.mayuscula(name)}}</li>
    </ul>
</template>

<script>
export default {
    name: "MetodosFilterComponent",
    data() {
        return {
            nombres: ["Sergio", "Marcos", "Lucía", "María"],
            numeros: [4, 5, 6, 32, 25, 87, 41, 30]
        }
    },
}
</script>

<style scoped>

</style>