/**
 * @Author:      baizn
 * @DateTime:    2017-01-17 09:24:27
 * @Description: seajs配置文件
 * @Last Modified By:   baizn
 * @Last Modified Time:    2017-01-17 09:24:27
 */

seajs.config({
    paths: {
        //modules: 'sea-modules',
        app: '../scripts'
    },
    alias: {
        test: 'app/test.js',
        handlebars: 'handlebars.js',
        //第三方库文件
        jquery: 'jquery.min.js',
        d3: 'd3.v3.min.js',
        echarts: 'echarts.js'
    }
})