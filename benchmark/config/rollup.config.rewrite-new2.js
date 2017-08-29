import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import includePaths from 'rollup-plugin-includepaths';

export default {
    entry: 'benchmark/temp/rewriting-new/rewriting-new_babel_out.js',
    dest: 'benchmark/bundles/rewriting-new.js',
    plugins: [
        includePaths({
            include: {
                ["aexpr-source-transformation-propagation"]: 'benchmark/temp/rewriting-new/aexpr-source-transformation-propagation/src/aexpr-source-transformation-propagation.js'
            }
        }),
        nodeResolve({
            jsnext: true,
            main: true
        }),
        commonjs()
    ],
    format: 'iife'
};
