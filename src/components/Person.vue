<template>
  <div>
    <Info/>
    <Skills/>
  </div>
</template>

<script>
  import Info from "./person/Info.vue"
  import Skills from "./person/Skills.vue"

  export default {
    name: "Person",

    components: {
      Info,
      Skills
    }
  }
</script>
