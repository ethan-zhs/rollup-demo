import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import path from 'path'

export default {
    input: 'src/index.js',
    external: ['jquery'], // 不打包external
    output: [
        { file: 'dist/bundle.esm.js', format: 'esm' },
        { file: 'dist/bundle.cjs.js', format: 'cjs' },
        {
            file: 'dist/bundle.umd.js',
            format: 'umd',
            name: 'test',
            globals: {
                jquery: '$' // 告诉rollup全局变量$就是jquery, 配合external使用
            }
        }
    ],
    plugins: [
        getBabelOutputPlugin({
            configFile: path.resolve(__dirname, '../babel.config.js'),
            allowAllFormats: true
        }),
        postcss(), // postcss打包css
        json(), // 允许引入json文件
        typescript(), // 允许使用typescript
        resolve(), // 允许加载第三方npm包
        commonjs(), // 第三方包很多是commonjs模块规范，把第三方npm包转成ES6模式
        livereload(), // 启动热更新
        serve({
            // 启动web服务
            open: true,
            port: 8888,
            contentBase: ''
        })
    ]
}
