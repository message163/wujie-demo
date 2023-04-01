const { Configuration } = require('webpack')
const path = require('path')
/**
 * @type {Configuration} //配置智能提示
 */
const config = {
   entry:"./src/index.ts",
   mode:"none",
   output:{
      filename:"index.js",
      path:path.resolve(__dirname,'lib'),
      library:"wujievue",
      libraryTarget:"umd",
      umdNamedDefine:true
   },
   externals:{
      vue:"vue",
      wujie:"wujie"
   },
   module:{
      rules:[
          {
            test:/\.ts$/,
            use:"swc-loader"
          }
      ]
   }
}


module.exports = config