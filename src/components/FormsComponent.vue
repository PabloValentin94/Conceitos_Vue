<template>
  <div>
    <h1>Formulário:</h1>
    <form @submit="submitForm($event)">
      <input type="text" v-model="name" autocomplete="off">
      <input type="text" v-model="email" autocomplete="off">
      <SubmitInputComponent/>
    </form>
  </div>
</template>

<script>
  // import TextInputComponent from "./forms/TextInputComponent.vue"
  import SubmitInputComponent from "./forms/SubmitInputComponent.vue"

  export default {
    name: "FormsComponent",

    components: {
      // TextInputComponent,
      SubmitInputComponent
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
