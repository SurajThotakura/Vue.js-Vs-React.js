<template>
  <div id="app">
    <cases-table :cases="cases"/>
  </div>
</template>

<script>
import CasesTable from './components/CasesTable.vue'
export default {
  name: 'app',
  components: {
    CasesTable,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');
*{
  margin: 0px;
  padding: 0px;
  -moz-appearance: none;
  -webkit-appearance: none;
  border-radius: 0;
  border: none;
  font-family: 'Nunito', sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4a4a4a;
  margin-top: 60px;
}
</style>
