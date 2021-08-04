const path = require('path')
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const Dotenv = require('dotenv-webpack')

new webpack.EnvironmentPlugin({
  NODE_ENV: JSON.stringify('production')
})

module.exports = (env) => {
  console.log('Production: ', env.production)
  console.log('node-env:', process.env.NODE_ENV)
  return {
    mode: 'production',
    entry: './src/index.js',
    externalsPresets: { node: true },
    externals: [nodeExternals()],
    optimization: {
      nodeEnv: 'production',
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            mangle: true,
            format: { comments: false, quote_style: 3 }
          }
        })
      ]
    },
    output: {
      filename: 'api.min.build.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    plugins: [
      new Dotenv({
        path: './src/config/env/production.env'
      })
    ]
  }
}
