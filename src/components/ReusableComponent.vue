<template>
  <div>
    <button type="button" @click="replaceStats">Ativar</button>
    <p v-show="stats">Ativado!</p>
  </div>
</template>

<script>
  export default {
    name: "ReusableComponent",

    data() {
      return {
        stats: false
      }
    },

    methods: {
      replaceStats() {
        this.stats = true;
      }
    }
  }
</script>
