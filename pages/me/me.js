Page({
  data: {},
  onLoad() {
    my.getLocation({ // 后期用
      type: 1,
      success(res) {
        console.log(res)
      }
    });
  },
  toOrder() {
    my.navigateTo({
      url: '/pages/order/order'
    });
  }
});
