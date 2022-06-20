<template>
  <div id="app">
    <div class="searchBox">
      <el-input v-model="searchQuery.kewWord" placeholder="请输入卡牌名称关键字" @change="searchCardList" class="select-class"></el-input>

      <el-select v-model="searchQuery.attr" placeholder="请选择卡牌五行属性" @change="searchCardList" class="select-class" clearable>
        <el-option v-for="item in CardAttr" :key="item.value" :label="item.name" :value="item.value"></el-option>
      </el-select>

      <el-select v-model="searchQuery.cost" placeholder="请选择卡牌费用" @change="searchCardList" class="select-class" clearable>
        <el-option v-for="item in CardCost" :key="item.value" :label="item.name" :value="item.value"></el-option>
      </el-select>

      <el-select v-model="searchQuery.quality" placeholder="请选择卡牌品质" @change="searchCardList" class="select-class" clearable>
        <el-option v-for="item in CardQuality" :key="item.value" :label="item.name" :value="item.value"></el-option>
      </el-select>

      <el-button @click="goEntryPage()" type="primary">查看所有词条解释</el-button>
    </div>

    <div class="cardBox">
      <cardItem v-for="(item, index) in currPageCardList" :key="index" :card-info="item"/>
    </div>

    <el-pagination background layout="prev, pager, next, sizes, jumper" :total="searchedCardList.length" class="page-class" :page-sizes="pageSizeList"
      @size-change="pageSizeChange" @current-change="pageIndexChange"
    ></el-pagination>
  </div>
</template>

<script>
import cardItem from '../components/cardItem.vue';
import { CardList } from "../js/cardListInfo";
import { CardAttr, CardCost, CardQuality } from "../js/cardAttr";

export default {
  name: 'App',
  mounted() {
    this.searchedCardList = [...CardList]
    this.getCurrPageCardList()
  },
  data() {
    return {
      CardList,
      CardAttr,
      CardCost,
      CardQuality,
      activeLeftNames: [],
      activeRightNames: [],
      pageIndex: 1,
      pageSize: 20,
      currPageCardList: [],
      searchedCardList: [],
      pageSizeList: [20, 40, 60, 80, 100],
      searchQuery: {
        kewWord: '',
        attr: '',
        cost: '',
        quality: ''
      }
    }
  },
  components: {
    cardItem
  },
  methods: {
    // 获取当前页码的数据
    getCurrPageCardList(){
      this.currPageCardList = []
      const start = (this.pageIndex - 1) * this.pageSize;
      const end = this.pageIndex * this.pageSize;
      this.currPageCardList = this.searchedCardList.slice(start, end);
    },
    // 页面容量改变时
    pageSizeChange(pageSize){
      this.pageIndex = 1
      this.pageSize = pageSize
      this.getCurrPageCardList()
    },
    // 切换页码
    pageIndexChange(pageIndex){
      this.pageIndex = pageIndex
      this.getCurrPageCardList()
    },
    // 搜索功能
    searchCardList(){
      this.pageIndex = 1
      this.searchedCardList = [...CardList]
      if(this.searchQuery.kewWord){ // 当输入关键字时
        let arr = []
        this.searchedCardList.forEach(element => {
          if(element.name.search(this.searchQuery.kewWord) != -1){
            arr.push(element)
          }
        });
        this.searchedCardList = [...arr]
      }
      if(this.searchQuery.attr){ // 当选择五行属性时
        let arr = []
        this.searchedCardList.forEach(element => {
          if(element.attr == this.searchQuery.attr){
            arr.push(element)
          }
        });
        this.searchedCardList = [...arr]
      }
      if(this.searchQuery.cost){ // 当选择卡牌费用时
        let arr = []
        this.searchedCardList.forEach(element => {
          if(element.cost == this.searchQuery.cost){
            arr.push(element)
          }
        });
        this.searchedCardList = [...arr]
      }
      if(this.searchQuery.quality){ // 当选择卡牌品质时
        let arr = []
        this.searchedCardList.forEach(element => {
          if(element.quality == this.searchQuery.quality){
            arr.push(element)
          }
        });
        this.searchedCardList = [...arr]
      }
      this.getCurrPageCardList()
    },
    goEntryPage(){
      this.$router.push('entry')
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
  .searchBox{
    height: 60px;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  .select-class{
    width: 200px !important;
  }
  .collapse-left{
    width: 270px;
  }
  .collapse-right{
    width: 270px;
  }
</style>
