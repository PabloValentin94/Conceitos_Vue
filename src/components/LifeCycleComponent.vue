<template>
  <div>
    <!-- A diretiva "v-show" exibe o conteúdo se/enquanto a condição foi verdadeira. O elemento sempre existirá, mesmo que não seja exibido. -->
    <h3 v-show="stats !== 'Carregado.'">{{ stats }}</h3>
  </div>
</template>

<script>
  export default {
    name: "LifeCycleComponent",

    data() {
      return {
        stats: ""
      }
    },

    methods: {
      trackStats() {
        console.log("Um lifecycle hook foi executado.");
      }
    },

    created() { // Primeiro LifeCycle Hook executado pelo Vue nesse contexto.
      this.stats = "Carregando...";

      this.trackStats();
    },

    mounted() { // LifeCycle Hook executado após o "created()".
      setTimeout(() => {
        this.stats = "Carregado.";

        this.trackStats();
      }, 5000);
    }
  }
</script>
