// pages/logs/zj.js
var common = require('../common.js');
Page({
  /**
   * 页面的初始数据
   */  
  data: {
    name:'WeChat',
    message: 'Hello MINA!',
    msg: "'hello wrold' from js",
    array: [1, 2, 3, 4, 5, 1, 2, 3, 4],
    text: 'init data',
    num: 0,
    array: [{ text: 'init data' }],
    object: {
      text: 'init data'
    }
  },
  changeName: function (e) {
    // sent data change to view
    this.setData({
      name: 'MINA'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var appInstance = getApp()
    console.log(appInstance)
  },
  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '/index/zj'
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
       
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  viewTap: function () {
    console.log(Page.prototype.route)
  },
  changeText: function () {
    // this.data.text = 'changed data'  // bad, it can not work
    this.setData({
      text: 'changed data'
    })
  },
  changeNum: function () {
    this.data.num = 1
    this.setData({
      num: this.data.num
    })
  },
  changeItemInArray: function () {
    // you can use this way to modify a danamic data path
    this.setData({
      'array[0].text': 'changed data'
    })
  },
  changeItemInObject: function () {
    this.setData({
      'object.text': 'changed data'
    });
  },
  addNewField: function () {
    this.setData({
      'newField.text': 'new data'
    })
  },
  helloMINA: function () {
    common.sayHello('MINA')
  },
  goodbyeMINA: function () {
    common.sayGoodbye('MINA')
  }
})