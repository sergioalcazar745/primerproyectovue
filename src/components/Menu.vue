<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/cine">Cine</router-link></li>
      <li><router-link to="/musica">Musica</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MenuComponent",

  data() {
    return {};
  },
};
</script>

<style>
</style>