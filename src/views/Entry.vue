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

        <el-collapse v-model="activeNamesMid" class="collapseBoxMid">
          <el-collapse-item v-for="(item, index) in leftEntryMid" :key="index" :title="item.title" :name="index+1">
            <div>{{ item.content }}</div>
          </el-collapse-item>
        </el-collapse>

        <el-collapse v-model="activeNamesRight" class="collapseBoxRight">
          <el-collapse-item v-for="(item, index) in rightEntryMid" :key="index" :title="item.title" :name="index+1">
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
      activeNamesMid: [],
      activeNamesRight: [],
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
          title: '游戏中除外',
          content: '该局游戏中被从游戏中除外的卡无法通过任何手段取回。被除外的卡无法触发死亡效果，但会触发离场效果。',
        },
        {
          title: '拥有者和使用者',
          content: '拥有者：该卡牌最初存在于谁的牌库中，该卡牌即被谁所拥有。使用者：该卡牌当前被谁所使用。该卡牌即被谁所使用。',
        }
      ],
      leftEntryMid: [
        {
          title: '借力',
          content: '拥有此词条的生灵只有在上一张打出的卡为生灵卡时才能效果生效。',
        },
        {
          title: '借法',
          content: '拥有此词条的生灵只有在上一张打出的卡为法术或者装备卡时才能效果生效。',
        },
        {
          title: '延迟',
          content: '拥有此效果的生灵只能在进场回合之后的回合发动效果。',
        },
        {
          title: '沉睡',
          content: '被沉睡的生灵无法进行攻击也无法释放主动技能，不属于主动技能的技能都可以使用。',
        },
        {
          title: '反弹',
          content: '当生灵攻击带有反弹效果的生灵时，该生灵会受到他造成伤害的同等非攻击伤害。',
        },
        {
          title: '群攻',
          content: '拥有此效果的生灵在发动一轮攻击时不仅会对对峙生灵或敌方主角发动一次攻击，还会攻击敌方场上所有生灵。',
        },
        {
          title: '封印',
          content: '被封印的生灵不会受到任何负面效果（如沉睡，美女蛇等的加伤）的影响，但自身也不能享受任何正面效果（加攻，还击，反弹等）。被封印时进场效果可以正常使用，但是离场和死亡效果无法生效。',
        },
        {
          title: '穿透',
          content: '拥有此效果的生灵会直接攻击敌方主角（无论有没有对峙生灵）。',
        },
        {
          title: '透骨',
          content: '拥有此效果的生灵在每对敌方生灵造成一次伤害时，都会对敌方主角造成该生灵减去被攻击生灵的攻击力的非攻击伤害（最少为零）。',
        },
        {
          title: '攻击次数',
          content: '拥有多次攻击次数的生灵会在每轮的攻击时进行相应次数的攻击。',
        },
        {
          title: '回手',
          content: '被回手（会触发离场效果）的非衍生牌会回到它的拥有者（无论当前使用者是谁）的手牌中，衍生牌被从场上回手时会直接从游戏中除外。',
        },
        {
          title: '衍生',
          content: '带有衍生标识的卡表示该卡没有拥有者。在场上的衍生卡被回手时会被从游戏中除外，联锁区中的衍生卡被回手时会回到使用者的手牌中。',
        },
        {
          title: '速攻',
          content: '拥有此效果的生灵在进场的当前回合即可发动攻击。',
        },
        {
          title: '还击',
          content: '拥有此效果的生灵在被生灵攻击时，会向攻击他的生灵发动一轮攻击。',
        },
      ],
      rightEntryMid: [
        {
          title: '牺牲',
          content: '拥有此效果的生灵在发动效果时会消灭自己。',
        },
        {
          title: '激怒',
          content: '拥有此效果的生灵在己方主角受到非攻击伤害时才会触发效果',
        },
        {
          title: '吸血',
          content: '拥有此效果的生灵在攻击时，自身会回复造成伤害的血量。',
        },
        {
          title: '变化',
          content: '拥有此效果的生灵效果生效时会变为衍生的选中生灵，碧波潭门派变化的生灵不触发原先生灵的死亡效果，也不触发变化之后生灵的进场效果。',
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
.collapseBox{
  display: flex;
  justify-content: space-between;
}
.collapseBoxLeft{
  width: 380px;
}
.collapseBoxMid{
  width: 380px;
  margin-left: 30px;
}
.collapseBoxRight{
  width: 380px;
  margin-left: 30px;
}
.button{
  margin: 0px auto;
}
</style>
