const { defineConfig } = require('@vue/cli-service');

const {
  VUE_APP_BASE_API,
  VUE_APP_IP: ip,
  VUE_APP_PORT: port,
} = process.env;

module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  publicPath: './',
  assetsDir: 'static',
  pages: {
    index: {
      entry: 'src/main.js',
      title: '安华金和数据安全协同平台',
    },
  },
  devServer: {
    proxy: {
      [VUE_APP_BASE_API]: {
        target: `http://${ip}:${port}`,
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: 'text-loader',
            },
          ],
        },
      ],
    },
  },
});
