<template>
  <div>
    <h3>{{ status }}</h3>
  </div>
</template>

<script>
  export default {
    name: "LifeCycle",

    data() {
      return {
        status: ""
      }
    },

    created() { // Primeiro LifeCycle Hook executado pelo Vue nesse contexto.
      this.status = "Carregando...";
    },

    mounted() { // LifeCycle Hook executado após o "created()".
      setTimeout(() => {
        this.status = "Carregado.";
      }, 3000);
    }
  }
</script>
