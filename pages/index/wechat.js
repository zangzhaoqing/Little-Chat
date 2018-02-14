Page({
  onMyEvent: function (e) {
    e.detail // 自定义组件触发事件时提供的detail对象

  },
  onLoad:function(){
    Component({
      properties: {},
      methods: {
        onTap: function () {
          var myEventDetail = {} // detail对象，提供给事件监听函数
          var myEventOption = {} // 触发事件的选项
          this.triggerEvent('myevent', myEventDetail, myEventOption)
        }
      }
    }),  wx.checkIsSupportSoterAuthentication({
      success(res) {
        console.log(res);
        // res.supportMode = [] 不具备任何被SOTER支持的生物识别方式
        // res.supportMode = ['fingerPrint'] 只支持指纹识别
        // res.supportMode = ['fingerPrint', 'facial'] 支持指纹识别和人脸识别
      }
    })
  },  
  bindViewTap:function(){
    wx.chooseInvoiceTitle({
      success(res) {
        console.log(res)
      }
    })
  },
  getPhoneNumber:function(){
    wx.getWeRunData({
      success(res) {
        console.log(res)
        const encryptedData = res.encryptedData
      },
      fail(res){
        console.log(res)
      }
    })
  },
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;text-align:center;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }],
    addTop:'addTop'
  },
  tap() {
    console.log('tap')
  },
  
  
});
