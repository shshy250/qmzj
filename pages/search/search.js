Page({
  data: {
    value: '',
    historyList: ['联想','thinkpad','iphone','bulabulabula'],
    hotList: ['联想','thinkpad','iphone','bulabulabula']
  },
  onLoad() {

  },
  handleInput(val) {
    this.setData({
      value: val
    });
  },
  handleClear() {
    this.setData({
      value: ''
    });
  },
  handleCancel() {
    my.navigateBack({
      
    });
  },
  handleSubmit(val) {
    let that = this
    this.setData({
      historyList: this.data.historyList.push(val)
    });
    my.setStorage({
      key: 'historySearch', // 缓存数据的key
      data: that.data.historyList, // 要缓存的数据
      success: (res) => {
        console.log('缓存成功',res)
      },
    });
  },
  handleBlur() {
    
  },
});
