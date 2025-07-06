<template>
  <div>
    <h1>{{ firstName }}  {{ lastName }}.</h1>
    <!-- A diretiva "v-if" exibe o conteúdo se/enquanto a condição foi verdadeira. O elemento só passa a existir se atender a condição. -->
    <h2 v-if="isWorking">Empregado.</h2>
    <!-- A diretiva "v-else" define a condição oposta ao "v-if". -->
    <h2 v-else>Desempregado.</h2>
    <h2>GitHub: <a target="_blank" v-bind:href="githubLink">clique aqui</a>.</h2>
  </div>
</template>

<script>
  export default {
    name: "Info",

    data() {
      return {
        firstName: "Pablo",
        lastName: "Valentin",
        isWorking: true,
        githubLink: "https://github.com/PabloValentin94"
      }
    }
  }
</script>
