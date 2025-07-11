<template>
  <!-- Fonte: https://www.flaticon.com/free-icons/person -->
  <!-- Fonte: https://www.flaticon.com/free-icons/female -->
  <img style="height: 150px; width: 150px;" @change-image="toggleImage" :src="image" :alt="description"/>
  <ToggleImageComponent @change-image="toggleImage"/>
</template>

<script>
  import ToggleImageComponent from "../ToggleImageComponent.vue"

  export default {
    name: "PhotoComponent",

    components: {
      ToggleImageComponent
    },

    data() {
      return {
        image: "/img/avatar/Male.png", // Ao iniciar um caminho com uma barra, o Vue irá procurar pelo arquivo a partir da pasta "public".
        description: "Photo"
      }
    },

    methods: {
      toggleImage() {
        this.image = "/img/avatar/Female.png";
      }
    }
  }
</script>
