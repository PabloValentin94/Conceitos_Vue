<template>
  <div>
    <Photo/>
    <h1>{{ firstName }}  {{ lastName }}.</h1>
    <!-- A diretiva "v-if" exibe o conteúdo se/enquanto a condição foi verdadeira. O elemento só passa a existir se atender a condição. -->
    <h2 v-if="isWorking">Empregado.</h2>
    <!-- A diretiva "v-else" define a condição oposta ao "v-if". -->
    <h2 v-else>Desempregado.</h2>
    <h2>GitHub: <a target="_blank" v-bind:href="githubLink">clique aqui</a>.</h2>
    <button @click="toggleEmailAddressVisibility">{{ emailVisibilityOption }} e-mail</button>
    <h2 v-show="showEmailAddress">E-mail: pablo.valentin@fatec.sp.gov.br</h2>
  </div>
</template>

<script>
  import Photo from "./Photo.vue"

  export default {
    name: "Info",

    components: {
      Photo
    },

    data() {
      return {
        firstName: "Pablo",
        lastName: "Valentin",
        isWorking: true,
        githubLink: "https://github.com/PabloValentin94",
        showEmailAddress: false,
        emailVisibilityOption: "Mostrar"
      }
    },

    methods: {
      toggleEmailAddressVisibility() {
        this.showEmailAddress = !this.showEmailAddress;

        if (this.emailVisibilityOption === "Mostrar") {
          this.emailVisibilityOption = "Ocultar";
        } else {
          this.emailVisibilityOption = "Desocultar";
        }
      }
    }
  }
</script>
