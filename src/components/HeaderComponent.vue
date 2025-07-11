<template>
  <ul>
    <li><a href="#">Portfólio</a></li>
    <li><a href="#">Habilidades</a></li>
    <li><a href="#">Contato</a></li>
    <li v-show="isAuthenticated"><a href="#">Perfil</a></li>
  </ul>
</template>

<script>
  export default {
    name: "HeaderComponent",

    props: ["isAuthenticated"] // Definindo as props como um array.
  }
</script>

<!-- CSS Scoped (Específico) -->
<style scoped>
  ul {
    list-style: none;
    display: flex;
  }

  ul li {
    margin-right: 20px;
  }

  ul li a {
    color: #FFFFFF;
    text-decoration: none;
    transition: 0.5s;
  }

  ul li a:hover {
    color: #FF0000;
  }
</style>
