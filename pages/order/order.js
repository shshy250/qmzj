Page({
  data: {
      tabs: [
      { 
        title: '全部',
        list:[]
      },
      { 
        title: '待付款' ,
        list:[]
      },
      { 
        title: '待发货' ,
        list:[]
      },
      { 
        title: '待收货' ,
        list:[]
      },
      { 
        title: '使用中' ,
        list:[]
      },
      { 
        title: '已完成' ,
        list:[]
      },
      { 
        title: '已逾期' ,
        list:[]
      },
      { 
        title: '退换货' ,
        list:[]
      }
    ],
    activeTab: 0
  },
  onLoad() {

  },
  handleTabClick({ index }) {
    this.setData({
      activeTab: index,
    });
  },
  handleTabChange({ index }) {
    this.setData({
      activeTab: index,
    });
  },
  toOrderDetail() {
    my.navigateTo({
      url: '/pages/orderDetail/orderDetail'
    });
  }
});
