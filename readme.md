# problem
i want to import a package (library) and use its svelte-components in my main-package (app)

# how to

got to ./library and:
`npm install`

then go to ./app and:
`npm install`
an then
`npm run dev` or `npm run build`

afterwards open index.html from ./app in your browser

## error
occuring error (when i remove the stile in "library/src/button.svelte", the error vanishes):

```
rollup v2.35.1
bundles index.js → bundle.js...
(!) Unresolved dependencies
https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
regenerator-runtime/runtime (imported by index.js)
core-js/stable (imported by index.js)
[!] Error: Unexpected token (Note that you need plugins to import files that are not JavaScript)
../library/src/button.css (1:0)
1: .btn-class.svelte-1odcmro{width:100px;color:red;outline:0}
   ^
Error: Unexpected token (Note that you need plugins to import files that are not JavaScript)
    at error (/home/mick/Desktop/svelte-getcontext-test/app/node_modules/rollup/dist/shared/rollup.js:5265:30)
    at Module.error (/home/mick/Desktop/svelte-getcontext-test/app/node_modules/rollup/dist/shared/rollup.js:9842:16)
    at tryParse (/home/mick/Desktop/svelte-getcontext-test/app/node_modules/rollup/dist/shared/rollup.js:9723:23)
    at Module.setSource (/home/mick/Desktop/svelte-getcontext-test/app/node_modules/rollup/dist/shared/rollup.js:10149:19)
    at ModuleLoader.addModuleSource (/home/mick/Desktop/svelte-getcontext-test/app/node_modules/rollup/dist/shared/rollup.js:18319:20)
    at ModuleLoader.fetchModule (/home/mick/Desktop/svelte-getcontext-test/app/node_modules/rollup/dist/shared/rollup.js:18375:9)
    at async Promise.all (index 2)
    at ModuleLoader.fetchStaticDependencies (/home/mick/Desktop/svelte-getcontext-test/app/node_modules/rollup/dist/shared/rollup.js:18400:34)
    at async Promise.all (index 0)
    at ModuleLoader.fetchModule (/home/mick/Desktop/svelte-getcontext-test/app/node_modules/rollup/dist/shared/rollup.js:18377:9)
```
