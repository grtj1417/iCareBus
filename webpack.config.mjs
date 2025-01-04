import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';

export default {
    mode: 'development',
    entry: './src/main.jsx',
    output: {
        filename: 'main.js',
        path: path.resolve('./dist'),
        clean: true
    },
    target: 'web',
    devServer: {
        port: '4000',
        static: {
          directory: path.resolve('./public')
        },
        open: true,
        hot: true,
        liveReload: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'src/index.css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'images/*.jpg', to: 'images/[name][ext]' },
                { from: 'images/*.png', to: 'images/[name][ext]' },

            ],
        }),

    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'images',
                generator: {
                    filename: 'images/[name][ext]'
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
        ]
    },
    
};