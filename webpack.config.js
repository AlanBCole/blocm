const path = require('path');

module.exports= {
     watch: true,
            context: path.resolve(__dirname, 'src'),
            entry: {
                main: './js/main.js'
            },
            output: {
                path: path.resolve(__dirname, 'dist'),
                filename: './js/[name].js'
            },
            watch: true,
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['babel-preset-env']
                            }
                        }
                    }
                ]
            },
};