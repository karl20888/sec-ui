/* eslint-disable global-require */
const {
  VUE_APP_BASE_API,
  VUE_APP_IP: ip,
  VUE_APP_PORT: port,
} = process.env;

module.exports = {
  runtimeCompiler: true,
  publicPath: './',
  devServer: {
    proxy: {
      [VUE_APP_BASE_API]: {
        target: `http://${ip}:${port}`,
        changeOrigin: true,
      },
    },
  },
};
