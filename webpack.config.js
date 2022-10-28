const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
    mode: "production",
    watch: true,
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './bin'),
        publicPath: "./public",
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './bin')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js)x?/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader', }
            },
            {
                test: /\.s.[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ],
    },
    
    resolve: {
        extensions: ['.jsx', '.js', '.sass'],
    },
    plugins: [
        new CopyPlugin(
            { patterns: [{ from: path.resolve(__dirname, "public"), to: path.resolve(__dirname, "bin") }] }
        )
    ]
}