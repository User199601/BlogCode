/*
 * @file config-overrides.js   
 * @author Tang(303891863@qq.com) 
 * 基于customise-cra和react-app-rewired的配置文件
*/


const  {

    override,
    addLessLoader,
    fixBabelImports,
    addDecoratorsLegacy,

} = require('customize-cra')


const them = require('./them')
module.exports = override(
    addDecoratorsLegacy(),
    addLessLoader({
        javascriptEnabled:true,
        modifyVars:them,
    }),
    fixBabelImports('import', {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style:true,
    }),
)