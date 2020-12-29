module.exports = function (api) {
    api && api.cache(true)
    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    modules: false,
                    targets: {
                        browsers: ['ie >=9', 'last 2 version', '> 5%', 'not dead']
                    }
                }
            ]
        ],
        plugins: [
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-transform-modules-commonjs',
            '@babel/plugin-proposal-object-rest-spread',
            ['@babel/plugin-proposal-class-properties', { loose: true }]
        ]
    }
}
