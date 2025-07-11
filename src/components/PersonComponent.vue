<template>
  <div>
    <InfoComponent :name="person" :email="email"/>
    <SkillsComponent/>
  </div>
</template>

<script>
  import InfoComponent from "./person/InfoComponent.vue"
  import SkillsComponent from "./person/SkillsComponent.vue"

  export default {
    name: "PersonComponent",

    data() {
      return {
        person: "Pablo Valentin",
        email: "pablo.valentin@fatec.sp.gov.br"
      }
    },

    components: {
      InfoComponent,
      SkillsComponent
    }
  }
</script>
