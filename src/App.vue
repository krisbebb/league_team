<template>
  <div id="app">
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      nrlTeams: [],
      API_URL: 'http://localhost:4242/api/teams'
    }
  },
  mounted() {
     this.nrlTeams = this.getNRLTeams()
  },
  methods: {
    async getNRLTeams() {
      const json = await fetch(this.API_URL)
      const result = json.json()
      return result
    } 
  }

}
</script>

<style>

</style>
