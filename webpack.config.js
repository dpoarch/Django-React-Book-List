var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    context: __dirname,
    entry: './assets/js/index', 
    
    output: {
        path: path.resolve('./assets/bundles/'), 
        filename: '[name]-[hash].js', 
    },
    
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}), 
        new webpack.ProvidePlugin({ 
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery' 
        })
    ],
    
    module: {
        loaders: [
            {
                test: /\.jsx?$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader', 
                query: {
                    presets: ['react'] 
                }
            },
            {
                test: /\.css$/,
                use: 'style-loader!css-loader'
            },
            {
                test: /\.png$/,
                use: 'url-loader?limit=100000'
            },
            {
                test: /\.jpg$/,
                use: 'file-loader'
            },
            {
                test: /\.png$/,
                use: 'url-loader?limit=100000'
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.tff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            },
        ]
    },
    
    resolve: {
        modules: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    }   
};
