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
require('../../node_modules/mini-antui/es/am-icon/index?hash=c3b912afc17b2886b09b8ac248356b9854ce403e');
require('../../node_modules/mini-antui/es/stepper/index?hash=c3b912afc17b2886b09b8ac248356b9854ce403e');
require('../../node_modules/mini-antui/es/modal/index?hash=c3b912afc17b2886b09b8ac248356b9854ce403e');
require('../../node_modules/mini-antui/es/popover/index?hash=c3b912afc17b2886b09b8ac248356b9854ce403e');
require('../../node_modules/mini-antui/es/popover/popover-item/index?hash=c3b912afc17b2886b09b8ac248356b9854ce403e');
require('../../node_modules/mini-antui/es/list/index?hash=c3b912afc17b2886b09b8ac248356b9854ce403e');
require('../../node_modules/mini-antui/es/list/list-item/index?hash=c3b912afc17b2886b09b8ac248356b9854ce403e');
require('../../node_modules/mini-antui/es/badge/index?hash=c3b912afc17b2886b09b8ac248356b9854ce403e');
require('../../node_modules/mini-antui/es/tabs/index?hash=51ab488a442f14d5ab402dc4ecc10951a9e8922d');
require('../../node_modules/mini-antui/es/tabs/tab-content/index?hash=c3b912afc17b2886b09b8ac248356b9854ce403e');
require('../../node_modules/mini-antui/es/popup/index?hash=c3b912afc17b2886b09b8ac248356b9854ce403e');
require('../../node_modules/mini-antui/es/calendar/index?hash=c3b912afc17b2886b09b8ac248356b9854ce403e');
require('../../node_modules/mini-antui/es/search-bar/index?hash=c3b912afc17b2886b09b8ac248356b9854ce403e');
require('../../node_modules/mini-antui/es/steps/index?hash=c3b912afc17b2886b09b8ac248356b9854ce403e');
require('../../node_modules/mini-antui/es/notice/index?hash=c3b912afc17b2886b09b8ac248356b9854ce403e');
require('../../node_modules/mini-antui/es/picker-item/index?hash=c3b912afc17b2886b09b8ac248356b9854ce403e');
require('../../pages/index/index?hash=01bb904747dbc630b638414300c76457232b9b57');
require('../../pages/cart/cart?hash=ed058b0d1ec8f1f62c233064a67696868aba5e13');
require('../../pages/category/category?hash=679649f1e60318cc9f98cf43063c9cbcabb93f44');
require('../../pages/me/me?hash=d3e59cd1d6caa5b9989fa148e62d8cf4d5a94853');
require('../../pages/goodsList/goodsList?hash=97f5451baac323cd12f4772dd72baa009379cca8');
require('../../pages/goodsDetail/goodsDetail?hash=d08ca2b986df5a92d264f83a55ddd7d020dfa563');
require('../../pages/evaluate/evaluate?hash=679649f1e60318cc9f98cf43063c9cbcabb93f44');
require('../../pages/orderList/orderList?hash=9a9ac2a0f24deb9add5b882708dd3c0ee358d8fc');
require('../../pages/search/search?hash=414f8fc3128041528880f1a0dd34e14118d710ec');
require('../../pages/store/store?hash=679649f1e60318cc9f98cf43063c9cbcabb93f44');
require('../../pages/logistics/logistics?hash=c02727292fbeb9cd9585f1a711936e44c2212c05');
require('../../pages/orderDetail/orderDetail?hash=01bb904747dbc630b638414300c76457232b9b57');
require('../../pages/categoryList/categoryList?hash=9a9ac2a0f24deb9add5b882708dd3c0ee358d8fc');
require('../../pages/afterSale/afterSale?hash=679649f1e60318cc9f98cf43063c9cbcabb93f44');
require('../../pages/comment/comment?hash=01bb904747dbc630b638414300c76457232b9b57');
require('../../pages/order/order?hash=01bb904747dbc630b638414300c76457232b9b57');
require('../../pages/addressList/addressList?hash=679649f1e60318cc9f98cf43063c9cbcabb93f44');
require('../../pages/addressOption/addressOption?hash=91f24cd06ef2f1210f1b01bc64f07c292ed6787e');
require('../../pages/couponList/couponList?hash=679649f1e60318cc9f98cf43063c9cbcabb93f44');
require('../../pages/helpme/helpme?hash=679649f1e60318cc9f98cf43063c9cbcabb93f44');
require('../../pages/feedback/feedback?hash=01bb904747dbc630b638414300c76457232b9b57');
require('../../pages/buyOut/buyOut?hash=679649f1e60318cc9f98cf43063c9cbcabb93f44');
require('../../pages/settled/settled?hash=679649f1e60318cc9f98cf43063c9cbcabb93f44');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}