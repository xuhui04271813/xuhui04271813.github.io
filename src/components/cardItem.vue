<template>
  <div :class="{'card-item':true, 'bg1': cardInfo.attr == 1,   'bg2': cardInfo.attr == 2,   'bg3': cardInfo.attr == 3,   'bg4': cardInfo.attr == 4, 
    'bg5': cardInfo.attr == 5}">
    <div class="header-box">
      <div class="cost">{{ cardInfo.cost }}</div>
      <div class="name">{{ cardInfo.name }}</div>
    </div>
    <div class="body-box">
      <img :src="cardInfo.imgUrl">
    </div>
    <div class="effect">{{ cardInfo.effect }}</div>
    <div class="number-box">
      <div class="number" v-if="cardInfo.attack">{{ cardInfo.attack }}</div>
      <div class="category">
        <span :class="{'quality-yell': cardInfo.quality == '天', 'quality-blue': cardInfo.quality == '地', 
          'quality-white': cardInfo.quality == '凡'}">{{ cardInfo.category }}
        </span>
      </div>
      <div class="number" v-if="cardInfo.health">{{ cardInfo.health }}</div>
    </div>
  </div>
</template>

<script>
import { CardAttr } from "../js/cardAttr";
export default {
  name: 'cardItem',
  data() {
    return {
      CardAttr,
    }
  },
  props: {
    cardInfo: {},
  }
}
</script>

<style scoped>
  .card-item {
    text-align: center;
    height: 300px;
    width: 200px;
    border-radius: 9px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    margin: 10px;
  }
  .bg1 { background-color: #E6A23C; }
  .bg2 { background-color: #67C23A; }
  .bg3 { background-color: #409EFF; }
  .bg4 { background-color: #F56C6C; }
  .bg5 { background-color: #909399; }
  .header-box {
    display: flex;
    align-items: center;
    height: 30px;
    padding: 5px 10px;
    border-bottom: 2px solid #606266;
  }
  .cost {
    width: 18px;
    height: 18px;
    border: 1px solid #606266;
    border-radius: 9px;
    margin-right: 10px;
  }
  .body-box{
    height: 180px;
    width: 200px;
  }
  img{
    height: 180px;
    width: 200px;
  }
  .effect{
    height: 56px;
    border-top: 2px solid #606266;
    padding: 5px 10px;
    font-size: 12px;
  }
  .number-box{
    display: flex;
    align-items: center;
    position: relative;
    top: -16px;
    padding: 0px 5px;
  }
  .number{
    text-align: center;
    line-height: 18px;
    width: 18px;
    height: 18px;
    border: 1px solid #606266;
    border-radius: 9px;
  }
  .category{
    margin: 0 auto;
    width: 160px;
    text-align: center;
    font-size: 12px;
    margin-top: 5px;
  }
  span{
    display: inline-block;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid;
    border-radius: 4px;
    box-sizing: border-box;
    white-space: nowrap;
  }
  .quality-yell{
    background-color: #fdf6ec;
    border-color: #faecd8;
    color: #e6a23c;
  }
  .quality-blue{
    background-color: #ecf5ff;
    color: #409eff;
    border-color: #d9ecff;
  }
  .quality-white{
    background-color: #f4f4f5;
    border-color: #e9e9eb;
    color: #909399;
  }
</style>
