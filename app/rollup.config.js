import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";

const pkg = require("./package.json");

export default {
  input: "index.js",
  output: {
    file: "./bundle.js",
    format: "iife",
    sourcemap: "inline",
  },
  plugins: [
    svelte({
      // why do i get errors, when this is true?
      emitCss: false,
    }),
    resolve(),
  ],
};
