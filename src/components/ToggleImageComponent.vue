<template>
  <button @click="$emit('changeImage')">Alterar imagem</button>
</template>

<script>

  export default {
    name: "ToggleImageComponent",

    emits: ["changeImage"]
  }
</script>
