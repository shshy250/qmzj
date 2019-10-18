import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/module/base/index.vue'
import Login from '@/module/login/login.vue'
import ShopMsg from '@/module/shop/shopMsg.vue'
import Increment from '@/module/shop/increment.vue'
import IncrementDetail from '@/module/shop/incrementDetail.vue'
import BuyOutOption from '@/module/goods/buyOutOption.vue'
import CompensationRules from '@/module/goods/compensationRules.vue'
import GoodsAll from '@/module/goods/goodsAll.vue'
import LeaseRules from '@/module/goods/leaseRules.vue'
import ReturnAddress from '@/module/goods/returnAddress.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/',
      name: 'Index',
			redirect: '/shopMsg',
      component: Index,
			meta: {
				headList:['首页'],
				title: '首页'
			},
			children: [
				{
					path: '/shopMsg',
					name: 'ShopMsg',
					component: ShopMsg,
					meta: {
						headList:['首页','店铺','店铺信息'],
						title: '店铺信息'
					}
				},{
					path: '/increment',
					name: 'Increment',
					component: Increment,
					meta: {
						headList:['首页','店铺','增值服务'],
						title: '增值服务'
					}
				},{
					path: '/increment/incrementDetail',
					name: 'IncrementDetail',
					component: IncrementDetail,
					meta: {
						headList:['首页','店铺','增值服务','增值服务详情'],
						title: '增值服务详情'
					}
				},{
					path: '/buyOutOption',
					name: 'BuyOutOption',
					component: BuyOutOption,
					meta: {
						headList:['首页','商品管理','买断总额配置'],
						title: '买断总额配置'
					}
				},{
					path: '/compensationRules',
					name: 'CompensationRules',
					component: CompensationRules,
					meta: {
						headList:['首页','商品管理','赔偿规则模板'],
						title: '赔偿规则模板'
					}
				},{
					path: '/goodsAll',
					name: 'GoodsAll',
					component: GoodsAll,
					meta: {
						headList:['首页','商品管理','所有商品'],
						title: '所有商品'
					}
				},{
					path: '/leaseRules',
					name: 'LeaseRules',
					component: LeaseRules,
					meta: {
						headList:['首页','商品管理','租赁规则模板'],
						title: '租赁规则模板'
					}
				},{
					path: '/returnAddress',
					name: 'ReturnAddress',
					component: ReturnAddress,
					meta: {
						headList:['首页','商品管理','归还地址'],
						title: '归还地址'
					}
				}
			]
    }
  ]
})
