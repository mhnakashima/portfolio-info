const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'info',
            filename: 'remoteEntry.js',
            exposes: {
                './InfoApp': './src/bootstrap',
            },
            shared: packageJson.dependencies,
        }),
        new MiniCssExtractPlugin(),
    ]
};

module.exports = merge(commonConfig, prodConfig);