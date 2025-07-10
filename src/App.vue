<template>
  <div>
    <TestComponent/>
    <LifeCycleComponent/>
    <HeaderComponent/>
    <PersonComponent/>
    <LifeCycleComponent/>
    <FormsComponent/>
  </div>
</template>

<script>
  import TestComponent from "./components/TestComponent.vue"
  import LifeCycleComponent from "./components/LifeCycleComponent.vue"
  import HeaderComponent from "./components/HeaderComponent.vue"
  import PersonComponent from "./components/PersonComponent.vue"
  import FormsComponent from "./components/FormsComponent.vue"

  export default {
    name: "App",

    components: {
      TestComponent,
      LifeCycleComponent,
      HeaderComponent,
      PersonComponent,
      FormsComponent
    }
  }
</script>

<!-- CSS Global -->
<style>
  h1, h2, h3, p, ul li {
    color: #FFFFFF;
  }

  body {
    background-color: #202020;
  }

  a {
    color: #FFFF00;
  }
</style>
