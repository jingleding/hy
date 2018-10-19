/**
 * @Author:      baizn
 * @DateTime:    2017-01-17 09:24:27
 * @Description: 测试主JS文件
 * @Last Modified By:   baizn
 * @Last Modified Time:    2017-01-17 09:24:27
 */
define(function(require) {
    require('handlebars')
    var Test = {
        init: function() {
            var tpl = require('../components/list.tpl')

            var myTemplate = Handlebars.compile(tpl)
            var listData = [
                {
                    key: '001',
                    value: 'Handlebars+seajs+D3项目结构模板'
                },
                {
                    key: '002',
                    value: '新项目开发时候，采用该目录结构'
                },
                {
                    key: '003',
                    value: '从gitlab上clone下来以后，修改项目名称，然后开发新项目'
                },
            ]
            $('.template').html(myTemplate(listData)); 
            console.log('test')
        }
    }
    return Test
})