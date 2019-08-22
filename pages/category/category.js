Page({
  data: {
    selIndex: 0,
    categoryList:[
      {
        categoryName: '笔记本'
      },{
        categoryName: '台式机'
      },{
        categoryName: '复印/打印机'
      },{
        categoryName: '电脑配件'
      },{
        categoryName: '移动设备'
      },{
        categoryName: '数码娱乐'
      }
    ]
  },
  onLoad() {

  },
  /**
   * 分类点击事件
   */
  onMenuTab: function (e) {
    console.log(e);
        var id = e.currentTarget.dataset.id;
        var index = e.currentTarget.dataset.index;
        // this.getProdList(id);
        this.getProdList(this.data.categoryList[index].categoryId);
        this.setData({
        selIndex: index
    });
  },
  getProdList(categoryId) {
    //加载分类列表
    
  }

});
