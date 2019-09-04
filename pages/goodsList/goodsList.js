Page({
  data: {
    position: 'bottomright', // 气泡位置
    popoverShow: false, // 气泡显示
    showMask: true, // 气泡蒙层显示
    leaseTerm: '租期升序',
    price: '价格升序',
    goodsList: [
      {
        img:'/image/test01.png',
        title: 'ThinkPaid的测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字',
        price: '￥6.67/天起',
        condition: '一月起租'
      },{
        img:'/image/test01.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起',
        condition: '一月起租'
      },{
        img:'/image/test01.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起',
        condition: '一月起租'
      },{
        img:'/image/test01.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起',
        condition: '一月起租'
      },{
        img:'/image/test01.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起',
        condition: '一月起租'
      },{
        img:'/image/test01.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起',
        condition: '一月起租'
      },{
        img:'/image/test01.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起',
        condition: '一月起租'
      },{
        img:'/image/test01.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起',
        condition: '一月起租'
      },{
        img:'/image/test01.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起',
        condition: '一月起租'
      },{
        img:'/image/test01.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起',
        condition: '一月起租'
      }
    ]
  },
  onLoad(options) {
    my.setNavigationBar({
      reset: true,
      title: options.type,
    })
  },
  onMaskClick() {
    this.setData({
      popoverShow: false,
    });
  },
  onShowPopoverTap() {
    this.setData({
      popoverShow: !this.data.popoverShow,
    });
  },
  itemTap1() {
    this.setData({
      popoverShow: false
    })
  },
  itemTap2() {
    if(this.data.leaseTerm === "租期升序"){
        this.setData({
        leaseTerm: '租期降序',
        popoverShow: false
        })
    } else {
        this.setData({
          leaseTerm: '租期升序',
          popoverShow: false
        }) 
    }
  },
  itemTap3() {
    if(this.data.price === "价格升序"){
        this.setData({
        price: '价格降序',
        popoverShow: false
        })
    } else {
        this.setData({
          price: '价格升序',
          popoverShow: false
        }) 
    }
  }
});
