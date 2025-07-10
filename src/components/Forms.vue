<template>
  <div>
    <h1>Formulário:</h1>
    <form @submit="submitForm($event)">
      <input type="text" v-model="name" autocomplete="off">
      <input type="text" v-model="email" autocomplete="off">
      <SubmitInput/>
    </form>
  </div>
</template>

<script>
  // import TextInput from "./forms/TextInput.vue"
  import SubmitInput from "./forms/SubmitInput.vue"

  export default {
    name: "Forms",

    components: {
      // TextInput,
      SubmitInput
    },

    data() {
      return {
        name: "",
        email: ""
      }
    },

    methods: {
      submitForm(e) {
        e.preventDefault(); // Impedindo a recarga do navegador, pois isso vai contra a proposta do Vue.

        const nome = this.name;
        const email = this.email;

        console.log("Formulário enviado.");

        console.log(`Nome: ${nome}`);
        console.log(`E-mail: ${email}`);
      }
    }
  }
</script>
