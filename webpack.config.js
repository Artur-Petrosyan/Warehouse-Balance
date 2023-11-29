const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: 'index.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean : true,
    },
    module: {
        rules: [
            {
                test : /\.(png|jpg|gif|svg)$/,
                use : [
                    {
                        loader : "url-loader",
                        options : {
                            name : "[name].[ext]",
                            output : 'images/' ,
                            limit : 8192,
                            fallback : "file-loader"
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [

        new HTMLWebpackPlugin({
            filename: "index.html",
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),

        new CleanWebpackPlugin()
    ],

}