const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    entry:"./src/index.js",
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'src/public/index.html'
        })
    ],
    devServer:{
        historyApiFallback:true
    }
}