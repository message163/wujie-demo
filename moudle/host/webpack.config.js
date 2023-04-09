const { Configuration  } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
/**
 * @type {Configuration} //配置智能提示
 */
const config = {
    mode: 'none',
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    devServer:{
        port: 9002, //host
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ModuleFederationPlugin({
            name: 'host',
            remotes: {
                remote: 'remote@http://localhost:9001/remoteEntry.js'
            }
        })
    ]
}
module.exports = config