const withNextAntdLess = require('./next-antd-less.config');

module.exports = withNextAntdLess({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]',
    },
    lessLoaderOptions: {
        javascriptEnabled: true,
    },
});
