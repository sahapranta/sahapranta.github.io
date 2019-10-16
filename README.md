# Pranta Saha

A Personal Portfolio.

## Getting started

-   Run `npm install` to install all of the dependencies.

Run any task by typing `npm run task` (where "task" is the name of the task in the `"scripts"` object). The most useful task for rapid development is `watch`. It will start a new server, open up a browser and watch for any SCSS or JS changes in the `src` directory; once it compiles those changes, the browser will automatically inject the changed file(s)!

### Task List

| Tasks        | Why?                                                                                                           |
| ------------ | -------------------------------------------------------------------------------------------------------------- |
| claen        | will clean all css, js & images from dist                                                                      |
| autoprefixer | autoprefixer postcss -u autoprefixer -r dist/css/\*                                                            |
| scss         | node-sass --output-style compressed -o dist/css src/scss                                                       |
| lint         | eslint src/js \| \| true                                                                                       |
| lint-scss    | stylelint src/scss/\*.scss --syntax scss \|\| true                                                             |
| uglify       | mkdirp dist/js -p && uglifyjs src/js/\*.js -m -c -o dist/js/main.min.js                                        |
| imagemin     | imagemin src/images/\* -o dist/images                                                                          |
| serve        | browser-sync start --server --files \"dist/css/_.css, dist/js/_.js, \*_/_.html, \!node\*modules/\*\*/\_.html\" |
| build:css    | run-s lint-scss scss autoprefixer                                                                              |
| build:js     | run-s lint uglify                                                                                              |
| build:images | run-s imagemin                                                                                                 |
| build        | run-s build:\_                                                                                                 |
| watch:css    | onchange \src/scss\ -- run-s build:css                                                                         |
| watch:js     | onchange \src/js\ -- run-s build:js                                                                            |
| watch:images | onchange \src/images\ -- run-s build:images                                                                    |
| watch        | run-p serve watch:\_                                                                                           |
| postinstall  | run-s build watc                                                                                               |
