/**
 * @Author:      baizn
 * @DateTime:    2017-01-17 09:24:27
 * @Description: 测试主JS文件
 * @Last Modified By:   baizn
 * @Last Modified Time:    2017-01-17 09:24:27
 */
define(function(require) {
    require('jquery')
    var test = require('test')
    var Index = {
        init: function() {
            test.init()
            console.log('dom', $('body'))
        }
    }
    return Index
})