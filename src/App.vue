<template>
  <div id="app">
    <div class="cardBox">
      <cardItem v-for="(item, index) in currPageCardList" :key="index" :card-info="item"/>
    </div>
    <el-pagination background layout="prev, pager, next, sizes" :total="CardList.length" class="page-class" :page-sizes="pageSizeList"
      @size-change="pageSizeChange" @current-change="pageIndexChange"
    ></el-pagination>
  </div>
</template>

<script>
import cardItem from './components/cardItem.vue';
import { CardList } from "./js/cardListInfo";

export default {
  name: 'App',
  mounted() {
    this.getCurrPageCardList()
  },
  data() {
    return {
      CardList,
      pageIndex: 1,
      pageSize: 20,
      currPageCardList: [],
      pageSizeList: [20, 40, 60, 80, 100]
    }
  },
  components: {
    cardItem
  },
  methods: {
    getCurrPageCardList (){
      this.currPageCardList = []
      const start = (this.pageIndex - 1) * this.pageSize;
      const end = this.pageIndex * this.pageSize;
      this.currPageCardList = this.CardList.slice(start, end);
    },
    pageSizeChange(pageSize){
      this.pageSize = pageSize
      this.getCurrPageCardList ()
    },
    pageIndexChange(pageIndex){
      this.pageIndex = pageIndex
      this.getCurrPageCardList ()
    }
  },
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
    padding-bottom: 40px;
  }
  .cardBox{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .page-class{
    margin: 20 auto;
  }
</style>
