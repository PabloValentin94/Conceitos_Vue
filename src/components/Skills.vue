<template>
  <div>
    <!-- A diretiva "v-if" exibe o conteúdo se/enquanto a condição foi verdadeira. O elemento só passa a existir se atender a condição. -->
    <h2 v-if="isWorking">Empregado</h2>
    <!-- A diretiva "v-else" define a condição oposta ao "v-if". -->
    <h2 v-else>Desempregado</h2>
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
        isWorking: true,
        skills: ["PHP", "C#", "JS", "SQL"]
      }
    }
  }
</script>
