const deps = require('../../package.json').dependencies;

module.exports = {
  rules: [
    // {
    //   test: /\.(js|jsx|tsx|ts)$/,
    //   loader: "ts-loader",
    //   exclude: /node_modules/,
    // },
    {
      test: /\.(js|jsx|tsx|ts)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
              '@babel/preset-typescript',
            ],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  regenerator: true,
                },
              ],
            ],
          },
        },
      ],
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
  ],
  devServer: (port = 3000) => ({
    open: true,
    port,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }),
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: deps.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: deps['react-dom'],
    },
  },
};
