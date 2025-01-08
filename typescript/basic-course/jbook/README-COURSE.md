# jbook

## Description

A CLI to launch an interactive development environment for writing and documenting code.

### Challenges

* Code will be provided to Preview as a string. We have to execute it safely
* Code might have advanced JS syntax in it (like JSX) that your browser can't execute.
* The Code might have import statements for other JS files or CSS. We have to deal with those import statements before executing the code.

### Transpilling/Bundling Remote or Locally?

#### Remote

* We can cache downloaded NPM modules to bundle code faster
* Will work better for users with slow devices or limited internet connections

#### Local

* Removes an extra request to the api server - faster code exectution
* We don't have to maintain an api server
* Less complexity - no moving code back and forth

### Problem / Solution

1) Webpack doesn't work in browser.

Solution: ES Build (transpiles and bundles code) [website](https://esbuild.github.io)
