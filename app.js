//app.js
App({
  onLaunch: function () {

    //wx.setStorageSync('textbooks', [{title:"sb杨", content:"你就是傻嗨", id:"0", date:"2019/5/22 下午7:37:49"}]);
    wx.getStorage({
      key: 'current_id',
      success(res){
        console.log("Current text_id:");
        console.log(res.data);
      },
      fail: function (res) {
        wx.setStorage({
          key: 'current_id',
          data: 1,
          success: function(res) {
            console.log("Current text_id: ");
            console.log(1);
          },
        })
      }
    });
  },
  globalData: {
  }
})