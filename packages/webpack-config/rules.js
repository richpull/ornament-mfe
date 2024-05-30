module.exports = (dev) => [
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
            // dev && require.resolve('react-refresh/babel'),
          ].filter(Boolean),
        },
      },
    ],
  },
  {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
  },
];
