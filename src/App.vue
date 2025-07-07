<template>
  <div>
    <Test/>
    <LifeCycle/>
    <Header/>
    <Person/>
    <LifeCycle/>
    <Forms/>
  </div>
</template>

<script>
  import Test from "./components/Test.vue"
  import LifeCycle from "./components/LifeCycle.vue"
  import Header from "./components/Header.vue"
  import Person from "./components/Person.vue"
  import Forms from "./components/Forms.vue"

  export default {
    name: "App",

    components: {
      Test,
      LifeCycle,
      Header,
      Person,
      Forms
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
