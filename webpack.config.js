const path = require('path');

module.exports = {
    // Entry point of the application
    entry: './src/index.js',
    // Output configuration
    output: {
        // Output directory and filename for the bundled files
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    // Module rules for processing files
    module: {
        rules: [
            {
                // Transpile JavaScript and JSX files
                test: /\.jsx?$/, 
                // Exclude node_modules from transpilation
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        // Use Babel presets for transforming modern JavaScript and React
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
    // Resolve file extensions for import statements
    resolve: {
        extensions: ['.js', '.jsx']
    },
    // Development server configuration
    devServer: {
        // Specify the content base directory
        contentBase: path.join(__dirname, 'dist'),
        // Enable gzip compression for assets
        compress: true,
        // Port for the server
        port: 9000,
    },
};