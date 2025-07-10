<template>
  <div>
    <InfoComponent/>
    <SkillsComponent/>
  </div>
</template>

<script>
  import InfoComponent from "./person/InfoComponent.vue"
  import SkillsComponent from "./person/SkillsComponent.vue"

  export default {
    name: "PersonComponent",

    components: {
      InfoComponent,
      SkillsComponent
    }
  }
</script>
