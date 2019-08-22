Page({
  data: {
    stepperNum: 1, // 后期得改 加入到数组里
    allMoney: "0.00", // 总金额
    selectNum: 0, // 购物车总选中数量
    goodsList: [
      {
        company: "盛氏集团有限公司",
        title: "苹果（ios10）布拉布拉布拉w文字文字文字...",
        dec: "i5系列各种狠有了它代码没有一点bug5杀超神不是梦各种牛逼各种狠..."
      },{
        company: "盛氏集团有限公司",
        title: "苹果（ios10）布拉布拉布拉w文字文字文字...",
        dec: "i5系列各种狠有了它代码没有一点bug5杀超神不是梦各种牛逼各种狠..."
      },{
        company: "盛氏集团有限公司",
        title: "苹果（ios10）布拉布拉布拉w文字文字文字...",
        dec: "i5系列各种狠有了它代码没有一点bug5杀超神不是梦各种牛逼各种狠..."
      },{
        company: "盛氏集团有限公司",
        title: "苹果（ios10）布拉布拉布拉w文字文字文字...",
        dec: "i5系列各种狠有了它代码没有一点bug5杀超神不是梦各种牛逼各种狠..."
      },{
        company: "盛氏集团有限公司",
        title: "苹果（ios10）布拉布拉布拉w文字文字文字...",
        dec: "i5系列各种狠有了它代码没有一点bug5杀超神不是梦各种牛逼各种狠..."
      },{
        company: "盛氏集团有限公司",
        title: "苹果（ios10）布拉布拉布拉w文字文字文字...",
        dec: "i5系列各种狠有了它代码没有一点bug5杀超神不是梦各种牛逼各种狠..."
      }
    ]
  },
  onLoad() {

  },
  stepperSubtract() {
    this.setData({
      stepperNum:this.data.stepperNum-1
    })
  },
  stepperAdd() {
    this.setData({
      stepperNum:this.data.stepperNum+1
    })
  }
});
