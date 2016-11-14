const path = require('path'),
    paths = {
        out: path.join(__dirname, '..', 'public'),
        js: path.join(__dirname, '..', 'src', 'index.js'),
        html: path.join(__dirname, 'index.html')
    };

module.exports = {
    devtool: 'source-map',
    entry: {
        javascript: paths.js,
        html: paths.html
    },
    output: {
        filename: 'bundle.js',
        path: paths.out
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            }
        ]
    },
    devServer: {
        hot: true,
        inline: true,
        historyApiFallback: true
    }
};
