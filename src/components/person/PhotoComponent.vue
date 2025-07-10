<template>
  <!-- Fonte: https://www.flaticon.com/free-icons/user -->
  <img style="height: 150px; width: 150px;" :src="image" :alt="description"/>
</template>

<script>
  export default {
    name: "PhotoComponent",

    data() {
      return {
        image: "/img/Photo.png", // Ao iniciar um caminho com uma barra, o Vue irá procurar pelo arquivo a partir da pasta "public".
        description: "Photo"
      }
    }
  }
</script>
