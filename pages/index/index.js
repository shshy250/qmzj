Page({
    data: {
        swipers:[{
            image:"/image/swiper.png"
        },{
            image:"/image/swiper.png"
        },{
            image:"/image/swiper.png"
        },{
            image:"/image/swiper.png"
        },{
            image:"/image/swiper.png"
        }
        ],
        logos:[{
            image:"/image/apple.png",
            title:"苹果"
        },{
            image:"/image/computer.png",
            title:"电脑"
        },{
            image:"/image/printer.png",
            title:"打印机"
        },{
            image:"/image/phone.png",
            title:"手机"
        },{
            image:"/image/kuwan.png",
            title:"酷玩"
        },{
            image:"/image/projector.png",
            title:"投影仪"
        },{
            image:"/image/camera.png",
            title:"相机"
        },{
            image:"/image/film.png",
            title:"摄影"
        },{
            image:"/image/UAV.png",
            title:"无人机"
        },{
            image:"/image/more.png",
            title:"更多"
        }
        ],
        quicks:[{
            image:"/image/test01.png",
            price:"￥6.67/天起"
        },{
            image:"/image/test02.png",
            price:"￥6.67/天起"
        },{
            image:"/image/test01.png",
            price:"￥6.67/天起"
        },{
            image:"/image/test02.png",
            price:"￥6.67/天起"
        },{
            image:"/image/test01.png",
            price:"￥6.67/天起"
        },{
            image:"/image/test02.png",
            price:"￥6.67/天起"
        }
        ],
      currentIndex: 0,
      "firstList": [{
        img:'/image/test03.png',
        title: 'ThinkPaid的测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字',
        price: '￥6.67/天起'
      },{
        img:'/image/test03.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起'
      },{
        img:'/image/test03.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起'
      },{
        img:'/image/test03.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起'
      },{
        img:'/image/test03.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起'
      },{
        img:'/image/test03.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起'
      },{
        img:'/image/test03.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起'
      },{
        img:'/image/test03.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起'
      },{
        img:'/image/test03.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起'
      },{
        img:'/image/test03.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起'
      }]
    },
  //swiper切换时会调用
  pagechange: function (e) {
    if ("touch" === e.detail.source) {
      this.setData({
        currentIndex: e.detail.current
      })
    }
  },
  //用户点击tab时调用
  titleClick: function (e) {
      this.setData({
        //拿到当前索引并动态改变
        currentIndex: e.currentTarget.dataset.idx
      })
  },
  // 分类点击事件
  classClick(e) {
    let type = e.currentTarget.dataset.type
    if(type === '更多') {
      my.navigateTo({
        url: '/pages/category/category'
      })
    }else {
      my.navigateTo({
          url: '/pages/goodsList/goodsList?type='+ type
        })
    }
  },
  // 跳转商品详情
  toGoodsDetail(e) {
    my.navigateTo({
        url: '/pages/goodsDetail/goodsDetail'
      })
  },
  toStaps(){
    my.navigateTo({
        url: '/pages/logistics/logistics'
      })
  },
  toSearch() {
    my.navigateTo({
        url: '/pages/search/search'
      })
  }
})
