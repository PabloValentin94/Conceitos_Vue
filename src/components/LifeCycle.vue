<template>
  <div>
    <h1>I have {{ age }} years old.</h1>
  </div>
</template>

<script>
  export default {
    name: "LifeCycle",

    data() {
      return {
        age: 0
      }
    },

    created() { // Primeiro LifeCycle Hook executado pelo Vue.
      setTimeout(() => {
        this.age = 10;
      }, 1500);
    },

    mounted() { // LifeCycle Hook executado após o "created()".
      setTimeout(() => {
        this.age = 19;
      }, 3000);
    }
  }
</script>
