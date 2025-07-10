<template>
  <div>
    <h2>Habilidades:</h2>
    <h3>Back-End:</h3>
    <ul>
      <!-- A diretiva "v-for" é utilizada para iterar os elementos de um array. -->
      <li v-for="(skill, index) in skills.backend" v-bind:key="index">{{ skill }}</li>
    </ul>
    <h3>Banco de Dados:</h3>
    <ul>
      <!-- A diretiva "v-for" é utilizada para iterar os elementos de um array. -->
      <li v-for="skill in skills.database" :key="skill.id">{{ skill.description }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "SkillsComponent",

    data() {
      return {
        skills: {
          backend: ["PHP", "C#"],
          database: [
            {id: 1, description: "MySQL"},
            {id: 2, description: "MongoDB"}
          ]
        }
      }
    }
  }
</script>
