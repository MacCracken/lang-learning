# jbook

## Description

A CLI to launch an interactive development environment for writing and documenting code.

### Challenges

* Code will be provided to Preview as a string. We have to execute it safely
* Code might have advanced JS syntax in it (like JSX) that your browser can't execute.
* The Code might have import statements for other JS files or CSS. We have to deal with those import statements before executing the code.