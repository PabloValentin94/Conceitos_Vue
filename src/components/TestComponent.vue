<template>
  <div>
    <h1>Hello, Vue!</h1>
    <!--
      Apesar de todos os componentes abaixo serem baseados em um mesmo arquivo, eles são independentes entre si. Analise a
      troca do valor do parâmetro de cada um na interface de usuário (Navegador) para entender melhor.
    -->
    <ReusableComponent/>
    <ReusableComponent/>
    <ReusableComponent/>
    <ReusableComponent/>
  </div>
</template>

<script>
  import ReusableComponent from "./ReusableComponent.vue";

  export default {
    name: "TestComponent",

    components: {
      ReusableComponent
    }
  }
</script>
