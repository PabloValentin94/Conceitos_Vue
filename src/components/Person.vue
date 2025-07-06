<template>
  <div>
    <Photo/>
    <Info/>
    <Skills/>
  </div>
</template>

<script>
  import Photo from "./person/Photo.vue"
  import Info from "./person/Info.vue"
  import Skills from "./person/Skills.vue"

  export default {
    name: "Person",

    components: {
      Photo,
      Info,
      Skills
    }
  }
</script>
