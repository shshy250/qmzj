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
require('../../node_modules/mini-antui/es/am-icon/index');
require('../../node_modules/mini-antui/es/stepper/index');
require('../../node_modules/mini-antui/es/popover/index');
require('../../node_modules/mini-antui/es/popover/popover-item/index');
require('../../node_modules/mini-antui/es/list/index');
require('../../node_modules/mini-antui/es/list/list-item/index');
require('../../node_modules/mini-antui/es/badge/index');
require('../../node_modules/mini-antui/es/tabs/index');
require('../../node_modules/mini-antui/es/tabs/tab-content/index');
require('../../node_modules/mini-antui/es/popup/index');
require('../../node_modules/mini-antui/es/calendar/index');
require('../../node_modules/mini-antui/es/search-bar/index');
require('../../node_modules/mini-antui/es/steps/index');
require('../../pages/index/index');
require('../../pages/cart/cart');
require('../../pages/category/category');
require('../../pages/me/me');
require('../../pages/goodsList/goodsList');
require('../../pages/goodsDetail/goodsDetail');
require('../../pages/evaluate/evaluate');
require('../../pages/order/order');
require('../../pages/search/search');
require('../../pages/store/store');
require('../../pages/logistics/logistics');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}