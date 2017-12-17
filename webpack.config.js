const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin") // 通过 npm 安装
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

const config = {
    entry: __dirname + "/src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle-[hash].js",
    },
    devtool: "eval-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "dist/"), //本地服务器所加载的页面所在的目录
        publicPath: "/",
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /(\.js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                        },
                        {
                            loader: "postcss-loader",
                        },
                    ],
                }),
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "postcss-loader", "sass-loader"],
                }),
            },
            {
                test: /\.(png|jpg|gif|ttf|eot|svg|woff(2)?)(\?[^('|")]*)?$/,
                loader: "file-loader",
                options: {
                    name: "images/[name].[ext]",
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
        }),
        new webpack.HotModuleReplacementPlugin(), //热加载插件
        new ExtractTextPlugin("style.css"),
        new CleanWebpackPlugin("dist/*.*", {
            root: __dirname,
            verbose: true,
            dry: false,
        }),
    ],
}

module.exports = config
