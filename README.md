# active-expressions-benchmark [![build status badge]][Travis CI]
Performs benchmarking on all JavaScript implementations of [active expressions]. Results are pushed to the [results repository].

## Installation

### Clone this repository
```bash
git clone https://github.com/active-expressions/active-expressions-benchmark.git
cd active-expressions-benchmark
```

### Make implementation repositories available
#### Option 1: Clone implementation repositories
```bash
./cloneImplementations.sh
```

#### Option 2: Link implementations directory
If you have all implementation repositories checked out in the same parent directory, you can link it as the `implementations` folder.
```bash
ln -s path/to/real/folder/ ./implementations
```

#### Option 3: Link individual implementation repositories
If you have the implementations checked out in different parent directories, you can link each checkout individually into the `implementations` folder.
```bash
ln -s path/to/repo/ ./implementations/repo
```

### Install the package
```bash
npm install
```

## First Steps
```bash
# Build benchmarks
./bench build
# Run benchmarks
./bench run
# For more usage help
./bench --help
```

## General

Benchmark sources can be found in the [`src/`] directory. Each `*.js` file in the directory tree whose sub-path does not contain any item (filename or directory) beginning with `_`, `-` or containing `.` is interpreted as a benchmark.

## Important files

| File | Description |
| --- | --- |
| [`./bench`] | Script to interact with benchmarks (build, run, list, etc.). Actual implementation can be found in [`./bench.js`]. |
| [`./configs.js`] | Config options for all benchmarks. |

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