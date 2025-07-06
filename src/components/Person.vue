<template>
  <div>
    <h1>{{ firstName }}  {{ lastName }}.</h1>
    <Skills/>
  </div>
</template>

<script>
  import Skills from "./Skills.vue"

  export default {
    name: "Person",

    components: {
      Skills
    },

    data() {
      return {
        firstName: "Pablo",
        lastName: "Valentin"
      }
    }
  }
</script>
