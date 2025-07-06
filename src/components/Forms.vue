<template>
  <div>
    <h1>Formulário:</h1>
    <form>
      <TextInput/>
      <TextInput/>
      <TextInput/>
      <SubmitInput v-on:click="submitForm"/>
    </form>
  </div>
</template>

<script>
  import TextInput from "./forms/TextInput.vue"
  import SubmitInput from "./forms/SubmitInput.vue"

  export default {
    name: "Forms",

    components: {
      TextInput,
      SubmitInput
    },

    methods: {
      submitForm(e) {
        e.preventDefault();
      }
    }
  }
</script>
