if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        


function success() {
require('../../app');
require('../../node_modules/mini-antui/es/am-icon/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/stepper/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/modal/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/popover/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/popover/popover-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/list-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/badge/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/tabs/index?hash=b998354db5b64281090d8969355b2b3db41cda49');
require('../../node_modules/mini-antui/es/tabs/tab-content/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/popup/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/calendar/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/search-bar/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/steps/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/notice/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/picker-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=5f7ac69c6e1e0961cf7988f4a3ff29b1e04e0ec6');
require('../../pages/cart/cart?hash=1e3eede36f5cc0b9985a8433a5fd6b59105f8ed3');
require('../../pages/category/category?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/me/me?hash=225c9f2a79a192818049fe92a5cf81708ea77446');
require('../../pages/goodsList/goodsList?hash=19e097880d99b667bb1fa901eb0e15f9d3a5ddb1');
require('../../pages/goodsDetail/goodsDetail?hash=027b2e16619cd6bf899cd6b32ce4ac0a00998512');
require('../../pages/evaluate/evaluate?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/orderList/orderList?hash=1d800f769ac3605e27dea9ba505bf4f320e2fd4e');
require('../../pages/search/search?hash=c8bb201eecc8e16d00b6ee8469ccde5158d099ef');
require('../../pages/store/store?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/logistics/logistics?hash=064a1400ed166b5e02670dfb160456d8b5d027e9');
require('../../pages/orderDetail/orderDetail?hash=5f7ac69c6e1e0961cf7988f4a3ff29b1e04e0ec6');
require('../../pages/categoryList/categoryList?hash=1d800f769ac3605e27dea9ba505bf4f320e2fd4e');
require('../../pages/afterSale/afterSale?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/comment/comment?hash=5f7ac69c6e1e0961cf7988f4a3ff29b1e04e0ec6');
require('../../pages/order/order?hash=5f7ac69c6e1e0961cf7988f4a3ff29b1e04e0ec6');
require('../../pages/addressList/addressList?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/addressOption/addressOption?hash=31ffeb3aa27d20619b02bb228036202f513d9e73');
require('../../pages/couponList/couponList?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/helpme/helpme?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/feedback/feedback?hash=5f7ac69c6e1e0961cf7988f4a3ff29b1e04e0ec6');
require('../../pages/buyOut/buyOut?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/settled/settled?hash=5f7ac69c6e1e0961cf7988f4a3ff29b1e04e0ec6');
require('../../pages/bill/bill?hash=5f7ac69c6e1e0961cf7988f4a3ff29b1e04e0ec6');
require('../../pages/billDetail/billDetail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}