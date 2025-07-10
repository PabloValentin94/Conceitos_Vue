<template>
  <ul>
    <li><a href="#">Portfólio</a></li>
    <li><a href="#">Habilidades</a></li>
    <li><a href="#">Contato</a></li>
  </ul>
</template>

<script>
  export default {
    name: "HeaderComponent"
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
