const cssLoaderConfig = require('@zeit/next-css/css-loader-config');
const path = require('path');

module.exports = (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
        webpack: (config, options) => {
            if (!options.defaultLoaders) {
                throw new Error(
                    'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade',
                );
            }

            const { dev, isServer } = options;
            const { cssModules, cssLoaderOptions, postcssLoaderOptions, lessLoaderOptions = {} } = nextConfig;

            options.defaultLoaders.less = cssLoaderConfig(config, {
                extensions: ['less'],
                cssModules,
                cssLoaderOptions,
                postcssLoaderOptions,
                dev,
                isServer,
                loaders: [
                    {
                        loader: 'less-loader',
                        options: lessLoaderOptions,
                    },
                ],
            });

            config.module.rules.push({
                test: /\.less$/,
                exclude: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'assets')],
                use: options.defaultLoaders.less,
            });

            // disable antd css module
            config.module.rules.push({
                test: /\.less$/,
                include: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'assets')],
                use: cssLoaderConfig(config, {
                    extensions: ['less'],
                    cssModules: false,
                    cssLoaderOptions: {},
                    dev,
                    isServer,
                    loaders: [
                        {
                            loader: 'less-loader',
                            options: lessLoaderOptions,
                        },
                    ],
                }),
            });

            if (isServer) {
                const antStyles = /antd\/.*?\/style.*?/;
                const origExternals = [...config.externals];
                config.externals = [
                    (context, request, callback) => {
                        if (request.match(antStyles)) return callback();
                        if (typeof origExternals[0] === 'function') {
                            origExternals[0](context, request, callback);
                        } else {
                            callback();
                        }
                    },
                    ...(typeof origExternals[0] === 'function' ? [] : origExternals),
                ];

                config.module.rules.unshift({
                    test: antStyles,
                    use: 'null-loader',
                });
            }

            if (typeof nextConfig.webpack === 'function') {
                return nextConfig.webpack(config, options);
            }

            return config;
        },
    });
};
