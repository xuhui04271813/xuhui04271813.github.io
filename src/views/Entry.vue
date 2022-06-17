<template>
  <div class="entry">
    <router-link to="/" class="button"><el-button type="primary">返回卡牌列表</el-button></router-link>
    <div class="entry-page">
      <div class="collapseBox">
        <el-collapse v-model="activeNamesLeft" class="collapseBoxLeft">
          <el-collapse-item v-for="(item, index) in leftEntryList" :key="index" :title="item.title" :name="index+1">
            <div>{{ item.content }}</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'entryPage',
  data() {
    return {
      activeNamesLeft: [],
      leftEntryList: [
        {
          title: '胜利手段',
          content: '当你将对手的生命值清空时、对手需要抽牌但是牌库数量不足以满足抽牌需求时、特殊卡牌或门派的获胜条件达成时即可获得胜利。',
        },
        {
          title: '卡牌构造',
          content: '左上方为卡牌使用所需费用，正上方为卡牌名称，中间位置的左侧为卡牌攻击力，中间的中间为卡牌品质以及所属系列，右侧为卡牌生命值，正下方为卡牌效果。',
        },
        {
          title: '废牌堆',
          content: '为对战时被丢弃的手牌、被消灭的生灵、被破坏的装备等等手段使卡牌失效时会进入的区域。位置为对站席左侧。',
        },
        {
          title: '修炼及修炼炉',
          content: '对战席右侧有个八卦即为修炼炉，通过将己方手牌移至该处（该手牌即会进入该区域，只能通过特定的卡牌效果取回）可使己方修为和法力均+1；每回合一次（五庄观门派在7修及之后可以无修炼次数上线，但从第二张修炼卡开始不加法力）。',
        },
        {
          title: '门派',
          content: '在构筑牌组时选择。各个门派的效果各不相同，请谨慎选择。门派的主动效果可以在对战时点击门派图标使用。',
        },
        {
          title: '修为及法力',
          content: '修为的增加可以通过修炼或者少数卡牌的效果来实现，一些卡牌的效果会使修为减少。一般每个己方回合开始时己方法力（少数卡牌会增加减少法力值）会回满为己方修为。',
        },
        {
          title: '卡牌类别和品质',
          content: '类别在卡牌最下方标签中显示。只有生灵牌会有攻击力生命值。装备牌分为主角装备和生灵装备。法术牌分为普通法术、连锁法术和触发法术。品质分为天、地、凡，通过颜色区分在卡牌效果的上方图标中'
        },
        {
          title: '生灵牌',
          content: '可以通过放置在场上来进行进攻、生效、抵挡对峙生灵攻击。己方回合结束并且不是生灵进场的回合时，己方生灵会自动进行一轮攻击；若生灵所在场地格对面有敌方生灵则进攻生灵，没有则攻击敌方主角。敌方主角所扣血量为生灵攻击次数x生灵攻击力。',
        },
        {
          title: '装备牌',
          content: '主角装备只能装备给主角，同一时间最多存在四个。生灵装备选择装备在已经进场的生灵卡上，一个生灵最多装备两张生灵装备。',
        },
        {
          title: '法术牌',
          content: '法术牌分为普通法术、连锁法术和触发法术。普通法术只能在己方回合使用；连锁法术可在双方回合使用；触发法术不能主动使用，只能在触发条件达成，并且所需费用足够时自动使用（多个触发法术同时生效时，会通过手牌从左到右的顺序依次触发直至法力不够或者全部生效完毕停止）。',
        },
        {
          title: '进场离场和死亡效果',
          content: '卡牌效果中带有相应关键字时便具有相应效果。进场：生灵或者装备（不管来源）进入到场地时立马触发的效果；离场：生灵或者装备被从场上回手，从场上消灭，从场上移除游戏时都会触发的效果；死亡：只有在生灵被杀死才会触发的效果；',
        },
        {
          title: '主动效果',
          content: '生灵牌或者装备牌需要消耗法力（哪怕消耗法力为0）才能生效的效果；其他生灵装备卡的效果会在条件达成时自动生效；',
        },
        {
          title: '速攻',
          content: '生灵牌进场的己方回合在回合结束时就可以进行一轮攻击。',
        },
      ]
    }
  },
}
</script>

<style scoped>
.entry{
  padding: 20px;
}
.entry-page{
  width: 1200px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px 0px;
}
.collapseBoxLeft{
  width: 380px;
}
.button{
  margin: 0px auto;
}
</style>
