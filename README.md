# active-expressions-benchmark [![build status badge]][Travis CI]
Performs benchmarking on all JavaScript implementations of [active expressions]. Results are pushed to the [results repository].

## Installation

```bash
# Clone the repository
git clone https://github.com/active-expressions/active-expressions-benchmark.git
# Change into cloned directory
cd active-expressions-benchmark
# Initialize submodules
git submodule update --init --recursive
# Install node dependencies
npm install
# Build benchmarks
./bench build
# Run benchmarks
./bench run
# For more usage help
./bench --help
```

### Using git submodules

```bash
# Fetch & merge submodule changes from remote (detaches head if there are changes)
git submodule update --remote --merge

# After each pull of the main project, submodules may need to be updated
git submodule update --init --recursive
# The updating after each pull is easily forgotten, hence:
# Recommended: Use `--recurse-submodules` flag for commands that support it
git config submodule.recurse true
# Pushing in the main project will try to push all submodules
git config push.recurseSubmodules on-demand

# By default submodules are in a detached HEAD state
# Either manually checkout a branch in the submodule folder
git checkout master
# Or from the main project, do so for every submodule
git submodule foreach 'git checkout $(git config -f $toplevel/.gitmodules submodule.$name.branch || echo master)'

# Include submodule info in `git status`
git config status.submodulesummary true
# Include submodule info in `git diff`
git config diff.submodule log
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