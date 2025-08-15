const path = require('path');

module.exports = {
    // Entry point of the application
    entry: './src/index.js',
    // Output configuration
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    // Module rules for processing files
    module: {
        rules: [
            {
                // Transpile JavaScript and JSX files
                test: /\.jsx?$/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                // Process CSS files
                test: /\.css$/, 
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    // Resolve file extensions
    resolve: {
        extensions: ['.js', '.jsx']
    },
    // Development server configuration
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
};