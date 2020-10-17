const path = require('path');

module.export = {
    entry: {
        main: './src/index.js'
    },
    watch: true,
    devServer: {
        contentBase: './dist',
        overlay: true
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    }
};