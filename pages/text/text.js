// pages/text/text.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textbooks:[],
    text_content_route:"../text_content/text_content"
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      textbooks: wx.getStorageSync('textbooks')
    })
    console.log(that.data.textbooks);
  },
  onShow: function(options) {
    var that = this;
    that.setData({
      textbooks: wx.getStorageSync('textbooks')
    })
    console.log(that.data.textbooks);
  },
  

  add_text: function(){
    wx.navigateTo({
      url: '../text_edit/text_edit',
      success(res){
        console.log("Navigate to edit successfully.")
      },
      fail(res){
        console.log("Fail to navigate to edit.")
      }
    })
  }
})