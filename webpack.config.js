const path = require('path');
const webpack = require('webpack');
const htmlwebpackPlugin = require('html-webpack-plugin');

module.exports={
module: 'develpment',
entry: './main_in.js',
output: {
    path: path.join(__dirname,'dist'),
    filename: 'bundle.js'
},
module:{
    rules:[
        {
            test: /\.css$/,
            use:['style-loader','css-loader']
        }
    ]
},
plugins:[
    new htmlwebpackPlugin({
        template: './index.html'
    })
]
};