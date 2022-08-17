Page({
  /**
   * 页面的初始数据
   */
  data: {
    region:['安徽省','芜湖市','镜湖区'],
    now:{
      tmp:0,
      cond_txt:'未知',
      cond_code:'999',
      hum:0,
      pres:0,
      vis:0,
      wind_dir:0,
      wind_spd:0,
      wind_sc:0
    }
  },
  /**
   * 更新省市区信息
   */
  regionChange: function(e) {
    this.setData({region: e.detail.value});
    this.getWeather();//更新天气
  },
    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getWeather();//更新天气
  },
    /**
   * 获取实况天气数据
   */
  getWeather: function () {
    var that = this;//this不可以直接在wxAPI函数内部使用
    wx.request({
      url: 'https://free-api.heweather.com/s6/weather/now',  //后端程序
      data:{
        location:that.data.region[1],
        key:'58cde137c76f44f5bc7885fc1e711aa9'  //也可以换成其他的和风天气密钥key
      },
      success:function(res){
      //  console.log(res.data);
        that.setData({now:res.data.HeWeather6[0].now});
      }
    })
  },
})