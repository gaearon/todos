const path = require('path');

module.exports = {
  entry: {
    main: ['babel-polyfill', './src/index'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/',
  },
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
};
