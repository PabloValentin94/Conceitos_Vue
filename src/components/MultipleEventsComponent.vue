<template>
  <div>
    <button type="button" @click="firstEvent(firstResult), secondEvent(secondResult), thirdEvent(thirdResult), allEventsCompleted()">Acionar múltiplos eventos</button>
    <p>{{ eventsResult }}</p>
  </div>
</template>

<script>
  export default {
    name: "MultipleEventsComponent",

    data() {
      return {
        eventsResult: "Nenhum evento acionado.",
        firstResult: "Primeiro evento acionado.",
        secondResult: "Segundo evento acionado.",
        thirdResult: "Terceiro evento acionado."
      }
    },

    methods: {
      firstEvent(text) {
        setTimeout(() => {
          this.eventsResult = text;
        }, 1000);
      },

      secondEvent(text) {
        setTimeout(() => {
          this.eventsResult = text;
        }, 2000);
      },

      thirdEvent(text) {
        setTimeout(() => {
          this.eventsResult = text;
        }, 3000);
      },

      allEventsCompleted() {
        setTimeout(() => {
          this.eventsResult = "Todos os eventos já foram acionados."
        }, 4000);
      }
    }
  }
</script>
