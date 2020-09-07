export default {
  "rewriting": {
    plugins: ["babel-plugin-aexpr-source-transformation"],
    presets: ["stage-0"],
  },
  "interpretation": {
    plugins: ["babel-plugin-locals"],
    presets: ["stage-0", ["es2015", { modules: false }]],
  },
  "proxies": {
    plugins: ["babel-plugin-aexpr-proxies"],
    presets: ["stage-0"],
  }
}