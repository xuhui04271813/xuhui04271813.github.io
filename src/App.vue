<template>
  <div id="app">
    <div class="cardBox">
      <cardItem v-for="(item, index) in CardList" :key="index" :card-info="item"/>
    </div>
  </div>
</template>

<script>
import cardItem from './components/cardItem.vue';
import { CardList } from "./js/cardListInfo";

export default {
  name: 'App',
  data() {
    return {
      CardList,
    }
  },
  components: {
    cardItem
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .cardBox{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
