<template>
  <div>
    <Test/>
    <LifeCycle/>
    <Person/>
    <LifeCycle/>
    <Forms/>
  </div>
</template>

<script>
  import Test from "./components/Test.vue"
  import LifeCycle from "./components/LifeCycle.vue"
  import Person from "./components/Person.vue"
  import Forms from "./components/Forms.vue"

  export default {
    name: "App",

    components: {
      Test,
      LifeCycle,
      Person,
      Forms
    }
  }
</script>
