<template>
  <div>
    <form @submit.prevent="createAirbnb">
      <input type="text" v-model="text" />
      <button type="submit">Create</button>
    </form>

    <div v-for="airbnb in airbnbs" :key="airbnb.text" >
    {{ airbnb.text }}
      </div>
  </div>
</template>

<script>

export default {
  name: "App",
    data: () => ({
      text: '',
      airbnbs: {},
    }),
  methods: {
    Getdata() {
      fetch('http://localhost:1337/airbnb').then((res) => res.json()).then((airbnbs) => (this.airbnbs = airbnbs));
    },
    createAirbnb() {
      fetch('http://localhost:1337/airbnb', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: this.text })
      }).then((res) => res.json()).then((airbnbs) => (this.airbnbs = airbnbs)).then(() => {
        this.text = "";
        this.Getdata();
      })
    }
  },
  mounted() {
    this.Getdata();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
