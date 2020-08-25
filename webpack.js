const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-cheap-module-source-map',
    cache: true,
    entry: './main.jsx',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    devServer: {
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, './src'),
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.tsx$/,
                include: path.resolve(__dirname, './src'),
                use: ['ts-loader']
            },
            {
                test: /\.less$/,
                exclude: [path.resolve(__dirname, './src/styles')],
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    },
                    {
                        loader: 'less-loader',
                    },
                ],
            },
            {
                test: /\.less$/,
                include: [path.resolve(__dirname, './src/styles')],
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                            },
                        }
                    },
                ],
            },
            // {
            //     test: /\.css$/,
            //     include: path.resolve(__dirname, './src'),
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         {
            //             loader: 'css-loader',
            //         },
            //     ]
            // },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.ejs'),
            filename: "index.html",
            title: "Webpack App",
            cache: true,
            excludeChunks: ['']
        }),
        // new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({
            // MiniCssExtractPlugin 不支持多实例，antd 和 main 样式，均抽取为同一个文件
            // 最终生成 dist 挂载在 main entry 下
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].[contenthash].css'
        }),
        new ManifestPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NamedChunksPlugin((chunk) => {
            if (chunk.name) {
                return chunk.name;
            }
            const modulesIds = chunk.getModulesIdent();
            const hash = crypto.createHash('sha256');
            hash.update(modulesIds);
            return `chunk-${hash.digest('hex').substr(0, 8)}`;
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    reuseExistingChunk: true,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 1,
                    minChunks: 1, // 至少被引用多少次后进入 group
                    minSize: 0
                },
                // 增加一个按需加载的入口页，下边chunks字段的可选值有 all initial async这三个可选值，
                // initial 的意思为初始化入口页的时候就需要加载进来的数据。
                // 这个配置可以保证 antd lodash 等库使用了那些加载哪些。
                vendorAsync: {
                    test: /[\\/]node_modules[\\/]/,
                    reuseExistingChunk: true,
                    chunks: 'async',
                    name: 'vendorAsync',
                    priority: 1,
                    minChunks: 1, // 至少被引用多少次后进入 group
                    minSize: 0
                },
                common: {
                    test: /\/src\/common/,
                    chunks: 'all',
                    name: 'common', // 注意，无符合规则时，此文件可能不存在
                    priority: 20,
                    minChunks: 1,
                    minSize: 10,
                    reuseExistingChunk: true,
                },
            }
        }, runtimeChunk: true
    },
    context: path.resolve(__dirname, './src'),
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.tsx', '.js', '.jsx',],
        alias: {
            "common": path.resolve(__dirname, './src/common')
        },
    },
}
