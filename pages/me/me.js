Page({
  data: {
    status: '运输中',
    photoUrl: '',
    modalServiceOpened: false, // 显示客服
  },
  onLoad() {
    my.getLocation({ // 后期用
      type: 1,
      success(res) {
        console.log(res)
      }
    });
  },
  toOrder(e) {
    let status = e.target.dataset.status;
    my.navigateTo({
      url: '/pages/orderList/orderList?status='+status
    });
  },
  toAddress() {
    my.navigateTo({
      url: '/pages/addressList/addressList'
    });
  },
  toCoupon() {
    my.navigateTo({
      url: '/pages/couponList/couponList'
    });
  },
  showService() {
    this.setData({
      modalServiceOpened: !this.data.modalServiceOpened
    });
  },
  toHelp() {
    my.navigateTo({
      url: '/pages/helpme/helpme'
    });
  },
  toFeedback() {
    my.navigateTo({
      url: '/pages/feedback/feedback'
    });
  },
  toBuyOut() {
    console.log('go')
    my.navigateTo({
      url: '/pages/buyOut/buyOut'
    });
  },
  toSettled() {
    my.navigateTo({
      url: '/pages/settled/settled'
    });
  },
  toBill() {
    my.navigateTo({
      url: '/pages/bill/bill'
    });
  }
});
