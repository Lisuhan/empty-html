const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
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
                    use: ["css-loader", "postcss-loader"],
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
                test: /\.(png|jpg|gif)$/, // 图片加载器，同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
                use:
                    "url-loader?limit=8192&name=./images/[hash:5].[name].[ext]", // 将小于8192byte的图片转成base64码
            },
            {
                test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
                use: "file-loader?name=./fonts/[hash:5].[name].[ext]",
            },

            {
                test: /\.html$/,
                loader: "html-withimg-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
        }),
        new webpack.HotModuleReplacementPlugin(), //热加载插件
        new ExtractTextPlugin({
            filename: "index.css",
            disable: false,
            allChunks: true,
        }),
        new CleanWebpackPlugin("dist/*.*", {
            root: __dirname,
            verbose: true,
            dry: false,
        }),
    ],
}

module.exports = config
