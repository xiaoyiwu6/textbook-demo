// pages/text_edit/text_edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentInputLength: null,
    wordInLength: true,
    text_id:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'current_id',
      success(res) {
        that.setData({
          text_id: res.data
        })
      }
    });
  },
  formSubmit(e) {
    // console.log('form发生了submit事件，携带数据为：', e.detail.value);
    var that = this;
    var text_id = that.data.text_id;
    var date = new Date();
    var value = {"title":e.detail.value.title, "content":e.detail.value.content, "id": text_id, "date": date.toLocaleString()};
    // save text
    var textbooks = wx.getStorageSync('textbooks');
    console.log(textbooks);
    textbooks.push(value);
    wx.setStorageSync('textbooks', textbooks);
    // save id
    wx.setStorageSync('current_id', text_id+1);
    wx.navigateBack({
      delta: 1
    })
    
  },
  wordLimit: function(e){
    var wordLength = e.detail.cursor
    if (wordLength<=200){
      this.setData({
        contentInputLength: wordLength
      })
    }
    else{
      this.setData({
        wordInLength: false
      })
    }
  },
  
})