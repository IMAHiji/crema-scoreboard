var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports ={
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    module: {
        loaders: [
            //JSX
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'react-hot!babel'
            },
            //Styles(foundation)
            {
                test:/\.scss$/,
                exclude:/node_modules/,
                loader:ExtractTextPlugin.extract('style', 'css!postcss!sass?outputStyle=expanded')
            },
            {
                test:/\.css$/,
                loader:ExtractTextPlugin.extract('style', 'css!postcss')
            },
            // fonts and svg
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            {
                // images
                test: /\.(ico|jpe?g|png|gif)$/,
                loader: "file"
            }

        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx','css','scss']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot:true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("/bundle.css")
    ],
    postcss: function(webpack) {
        return [
            autoprefixer({browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']})
        ]
    },
    sassLoader:{
        includePaths: [path.resolve(__dirname, "node_modules")]
    }
};
