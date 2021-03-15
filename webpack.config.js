const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const cssExtractPlugin = require('mini-css-extract-plugin');
const cssMinimizer = require('css-minimizer-webpack-plugin');
const uglifyJs = require('uglifyjs-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader");

const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
    entry: {
        main: path.resolve(__dirname, './source/main.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: !PRODUCTION ? 'bundle.js' : 'bundle.min.js'
    },
    resolve: {
        alias: {
          vue: 'vue/dist/vue.esm-bundler.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new cssExtractPlugin({
            filename: !PRODUCTION ? 'bundle.css' : 'bundle.min.css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['!bundle.js', '!bundle.css'],
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
        })
    ],
    optimization: {
        minimize: PRODUCTION,
        minimizer: [
            new cssMinimizer({
                parallel: false
            }),
            new uglifyJs()
        ]
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(scss|css)$/,
                use: [cssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(svg|png|jpg|jpeg|webp)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    },
    externals: {
        jquery: 'jQuery'
    },
    performance: {
        hints: false
    }
};
