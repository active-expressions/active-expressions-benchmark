# active-expressions-benchmark [![build status badge]][Travis CI]
Performs benchmarking on all JavaScript implementations of [active expressions]. Results are pushed to the [results repository].

## General
Benchmark sources can be found in the [`src/`] directory. Each subdirectory (not beginning with `_` or `.`) represesents one benchmarking category. Every implementation can then have one `.js` script actually implementing the benchmark. Scripts named `baseline.js` measure reference values.

## Important files

| File | Description |
| --- | --- |
| [`./build.js`] | Build the benchmarks located in the folder [`src/`] (Current working directory needs to be [`./`]). Bundled files are placed in the [`build/`] folder. |
| [`./build/run.js`] | Run the (bundled) benchmarks located in the [`build/`] folder (Current working directory needs to be [`build/`]). Running the file without any arguments prints command line options into the console. |
| [`./src/configs.js`] | Config options for all benchmarks. These are currently bundled into the built benchmark. |

<!--
### For Travis CI

Travis needs a generated [access token](https://github.com/settings/tokens/new) set as environment variable `GH_TOKEN`.

After a successful benchmark run, the results are automatically pushed to the dedicated [results repository].

#### Subtree usage

This benchmark suite includes the new rewriting strategy as subtree in order to test it simultaneously with an older version.
Therefore, we include the following subtrees:

- benchmark/temp/rewriting-new/aexpr-transform-new links to https://github.com/active-expressions/babel-plugin-aexpr-source-transformation.git on branch master
- benchmark/temp/rewriting-new/aexpr-source-transformation-propagation links to https://github.com/active-expressions/aexpr-source-transformation-propagation.git on branch master

We automatically pull the newest versions of these repositories during a travis build.
-->


<!-- References -->
[build status badge]: https://travis-ci.org/active-expressions/active-expressions-benchmark.svg?branch=master
[Travis CI]: https://travis-ci.org/active-expressions/active-expressions-benchmark

[active expressions]: https://github.com/active-expressions/
[results repository]: https://github.com/active-expressions/active-expressions-benchmark-results

[`./build.js`]: ./build.js
[`./build/run.js`]: ./build/run.js
[`./src/configs.js`]: ./src/configs.js
[`src/`]: ./src/
[`build/`]: ./build/