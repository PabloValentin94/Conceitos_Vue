<template>
  <div>
    <h1>Hello, Vue!</h1>
    <h3>By {{ person }} ({{ work }})</h3>
  </div>
</template>

<script>
  export default {
    name: "FirstComponent",

    data() {
      return {
        person: "Pablo Valentin",
        work: "Developer"
      }
    }
  }
</script>
