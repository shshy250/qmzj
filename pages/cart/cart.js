Page({
  data: {
    stepperNum: 1
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
