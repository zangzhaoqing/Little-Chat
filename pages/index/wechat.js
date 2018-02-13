Page({
  onLoad:function(){
    wx.checkIsSupportSoterAuthentication({
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
  }
  
})