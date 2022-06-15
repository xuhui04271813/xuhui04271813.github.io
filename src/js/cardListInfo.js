/** 
 * @name 卡牌名称
 * @attr 卡牌的五行属性
 * @cost 使用卡牌所需费用
 * @imgUrl  卡牌插画
 * @effect 卡牌效果
 * @attack 攻击力
 * @health 生命值
 * @category 卡牌类别
*/
const CardList = [
    {
        name: '白素贞',
        attr: 2,
        cost: 6,
        imgUrl: require('../assets/cardImg/baisuzhen.png'),
        effect: '进场时，己方修为加一。攻击力等于己方修为',
        attack: '？',
        health: '16',
        category: '妖仙',
    },
]

export { CardList }