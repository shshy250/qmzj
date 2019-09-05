Page({
  data: {
    transportCode: 123456789,
    activeIndex: 1,
    items: [{
      title: '货物已由本人签收，感谢您选择京东物流！',
      description: '这是步骤1',
      icon: '../../image/step2.png',
      activeIcon: '../../image/step1.png'
    }, {
      title: '货物已由本人签收，感谢您选择京东物流！',
      description: '这是步骤2',
      icon: '../../image/step2.png',
      activeIcon: '../../image/step1.png'
    }, {
      title: '货物已由本人签收，感谢您选择京东物流！',
      description: '这是步骤3',
      icon: '../../image/step2.png',
      activeIcon: '../../image/step1.png'
    }]
  },
  onLoad() {

  },
  doCopy() {
    my.setClipboard({
      text: this.data.transportCode,
    });
  }
});
