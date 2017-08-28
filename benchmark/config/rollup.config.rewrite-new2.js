import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import importAlias from 'rollup-plugin-import-alias';

export default {
    entry: 'benchmark/temp/rewriting-new/rewriting-new_babel_out.js',
    dest: 'benchmark/bundles/rewriting-new.js',
    plugins: [
        nodeResolve({
            jsnext: true,
            main: true
        }),
        commonjs(),
        importAlias({
            Paths: {
                ["aexpr-source-transformation-propagation"]: 'benchmark/temp/rewriting-new/aexpr-source-transformation-propagation', // hardlink with current version
                Framework: './V1.0/Framework'
            },
            Extensions: ['js']
        })
    ],
    format: 'iife'
};
