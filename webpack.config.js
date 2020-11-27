const path = require(`path`);
const HTMLWebpackPlugin = require(`html-webpack-plugin`);
const {CleanWebpackPlugin} = require(`clean-webpack-plugin`);
const CopyWebpackPlugin = require(`copy-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
module.exports = {
    context: path.resolve(__dirname, `src`),
    mode: `development`,
    entry: {
        main: `/js/index.js`,
    },
    output: {
        filename: `js/[name].js`,
        path:path.resolve(__dirname, `dist`),
        publicPath: ''
    },
    devServer: {
        port: 4200,
        overlay: true,
        open: true
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: `./index.html`
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/img'),
                    to: path.resolve(__dirname, 'dist/img')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: `styles/[name].css`,
        }),

    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                }, `css-loader`]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [`file-loader`]
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: [`file-loader`]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                }, `css-loader`,
                `less-loader`
                ]
            },
        ],
    },
}
