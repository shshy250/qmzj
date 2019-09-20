Page({
  data: {
    status: '运输中',
    photoUrl: ''
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
  openCamera() {
    // my.chooseImage({
		// 		sourceType: ['camera', 'album'],
		// 		count: 1,
		// 		success: (res) => {
		// 			console.log(res)
    //       this.setData({
    //         photoUrl:res.apFilePaths[0]
    //       });
		// 		},
		// 		fail: () => {
		// 			my.showToast({
		// 				content: 'fail', // 文字内容
		// 			});
		// 		}
		// 	})
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
  }
});
