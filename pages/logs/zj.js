// pages/logs/zj.js
Page({
  /**
   * 页面的初始数据
   */  
  data: {
    msg:"Hello MINA"
    },
    
  clickMe: function (event) {
    this.setData({ msg: "Hello World" })
    console.log(event)
  },
  handleTap1:function(event){
   console.log(event);
   console.log('手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发')
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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
  
  changeNum: function () {
    
  },
  changeItemInArray: function () {
   
  },
  changeItemInObject: function () {
   
  },
  addNewField: function () {
    
  },
  helloMINA: function () {
   
  },
  goodbyeMINA: function () {
    
  }

})