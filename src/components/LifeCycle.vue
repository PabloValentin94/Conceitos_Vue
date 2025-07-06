<template>
  <div>
    <!-- A diretiva "v-show" exibe o conteúdo se/enquanto a condição foi verdadeira. O elemento sempre existirá, mesmo que não seja exibido. -->
    <h3 v-show="stats !== 'Carregado.'">{{ stats }}</h3>
  </div>
</template>

<script>
  export default {
    name: "LifeCycle",

    data() {
      return {
        stats: ""
      }
    },

    created() { // Primeiro LifeCycle Hook executado pelo Vue nesse contexto.
      this.stats = "Carregando...";
    },

    mounted() { // LifeCycle Hook executado após o "created()".
      setTimeout(() => {
        this.stats = "Carregado.";
      }, 5000);
    }
  }
</script>
