/**
 * @Author:      baizn
 * @DateTime:    2017-01-17 09:24:27
 * @Description: 通用工具方法
 * @Last Modified By:   baizn
 * @Last Modified Time:    2017-01-17 09:24:27
 */

define(function(require) {
  var constans = require('constants')
  var common = {
    /**
     * 按照比例缩放页面
     */
    zoom: function(){
      var x=window.innerWidth/constans.PAGE_WIDTH
      var y=window.innerHeight/constans.PAGE_HEIGHT

      $('body').css('webkitTransform','scale(' + x + ',' + y + ')')   /* for Chrome || Safari */
      $('body').css('msTransform','scale(' + x + ',' + y + ')')       /* for Firefox */
      $('body').css('mozTransform','scale(' + x + ',' + y + ')')      /* for IE */
      $('body').css('oTransform','scale(' + x + ',' + y + ')')        /* for Opera */  
    }
  }

  /**
   * 当缩放页面后，进行相应的缩放
   */
  window.addEventListener('resize', function(){
      common.zoom()
  })

  common.zoom()

  return common
})
