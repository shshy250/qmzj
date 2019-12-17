import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/module/base/index.vue'
import Login from '@/module/login/login.vue'
import Register from '@/module/login/register.vue'
import Forget from '@/module/login/forget.vue'
import SettledExamine from '@/module/simplePages/settledExamine.vue'
import ShopMsg from '@/module/shop/shopMsg.vue'
import Increment from '@/module/shop/increment.vue'
import IncrementDetail from '@/module/shop/incrementDetail.vue'
import BuyOutOption from '@/module/goods/buyOutOption.vue'
import BuyOutDetail from '@/module/goods/buyOutDetail.vue'
import CompensationRules from '@/module/goods/compensationRules.vue'
import CompensationDetail from '@/module/goods/compensationDetail.vue'
import GoodsAll from '@/module/goods/goodsAll.vue'
import GoodsDetail from '@/module/goods/goodsDetail.vue'
import LeaseRules from '@/module/goods/leaseRules.vue'
import LeaseDetail from '@/module/goods/leaseDetail.vue'
import ReturnAddress from '@/module/goods/returnAddress.vue'
import ReturnAddressDetail from '@/module/goods/returnAddressDetail.vue'
import SettleAgreement from '@/module/simplePages/settleAgreement.vue'
import NormalOrder from '@/module/order/normalOrder.vue'
import RenewalOrder from '@/module/order/renewalOrder.vue'
import BuyoutOrder from '@/module/order/buyoutOrder.vue'
import OrderDetail from '@/module/order/orderDetail.vue'
import CouponList from '@/module/coupon/couponList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: '/dist/',
  routes: [
    {
      path: '/settleAgreement',
      name: 'SettleAgreement',
      component: SettleAgreement
    },{
      path: '/settledExamine',
      name: 'SettledExamine',
      component: SettledExamine
    },{
	  path: '/login',
	  name: 'Login',
	  component: Login
	},{
	  path: '/forget',
	  name: 'Forget',
	  component: Forget
	},{
	  path: '/register',
	  name: 'Register',
	  component: Register
	},
	{
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
					path: '/buyOutDetail',
					name: 'BuyOutDetail',
					component: BuyOutDetail,
					meta: {
						headList:['首页','商品管理','买断总额配置','买断配置详情'],
						title: '买断配置详情'
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
					path: '/compensationDetail',
					name: 'CompensationDetail',
					component: CompensationDetail,
					meta: {
						headList:['首页','商品管理','赔偿规则模板','赔偿规则模板详情'],
						title: '赔偿规则模板详情'
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
					path: '/goodsDetail',
					name: 'GoodsDetail',
					component: GoodsDetail,
					meta: {
						headList:['首页','商品管理','商品详情'],
						title: '商品详情'
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
					path: '/leaseDetail',
					name: 'LeaseDetail',
					component: LeaseDetail,
					meta: {
						headList:['首页','商品管理','租赁规则模板','租赁规则模板详情'],
						title: '租赁规则模板详情'
					}
				},{
					path: '/returnAddress',
					name: 'ReturnAddress',
					component: ReturnAddress,
					meta: {
						headList:['首页','商品管理','归还地址'],
						title: '归还地址'
					}
				},{
					path: '/returnAddressDetail',
					name: 'ReturnAddressDetail',
					component: ReturnAddressDetail,
					meta: {
						headList:['首页','商品管理','归还地址','归还地址详情'],
						title: '归还地址详情'
					}
				},{
					path: '/couponList',
					name: 'CouponList',
					component: CouponList,
					meta: {
						headList:['首页','优惠券','优惠券列表'],
						title: '优惠券列表'
					}
				},{
					path: '/normalOrder',
					name: 'NormalOrder',
					component: NormalOrder,
					meta: {
						headList:['首页','订单管理','常规订单'],
						title: '常规订单'
					}
				},{
					path: '/renewalOrder',
					name: 'RenewalOrder',
					component: RenewalOrder,
					meta: {
						headList:['首页','订单管理','续租订单'],
						title: '续租订单'
					}
				},{
					path: '/buyoutOrder',
					name: 'BuyoutOrder',
					component: BuyoutOrder,
					meta: {
						headList:['首页','订单管理','买断订单'],
						title: '买断订单'
					}
				},{
					path: '/orderDetail',
					name: 'OrderDetail',
					component: OrderDetail,
					meta: {
						headList:['首页','订单管理','订单详情'],
						title: '订单详情'
					}
				}
			]
    }
  ]
})
