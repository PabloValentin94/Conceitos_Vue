<template>
  <div>
    <h2>Habilidades:</h2>
    <ul>
      <!-- A diretiva "v-for" é utilizada para iterar os elementos de um array. -->
      <li v-for="skill in skills">{{ skill }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Skills",

    data() {
      return {
        skills: ["PHP", "C#", "JS", "SQL"]
      }
    }
  }
</script>
