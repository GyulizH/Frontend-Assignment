## de Bijenkorf Frontend Dev assignment

This project allows de Bijenkorf to asses potential frontend candidates with real, working code.

It is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) to give you the initial setup.

If you are not familiar with Create React App you can find an up to date guide [here](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md).

## Folder Structure

The initial project structure looks like this:

```
frontend-dev-assignment/
  .storybook/
  api/
  node_modules/
  package.json
  public/
    favicon.ico
    index.html
    logo192.png
    logo512.png
    manifest.json
    robots.txt
  src/
    App.js
    App.test.js
    index.css
    index.js
    serviceWorker.js
  README.md
You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.

## Install
To install project dependencies execute the following command:

```sh
yarn
```

## Run application
To run the application use the following command:
```sh
yarn start
```
This command will run two scripts concurrently:
1. `react-scripts start`
2. `canned -p 5000 ./api/\"`

The User Interface should be running on http://localhost:3000/

A dummy API endpoint should be available on the same port.

e.g.
```sh
curl -s http://localhost:3000/search
```

## Run tests
To run tests use the following command:
```sh
yarn test
```

## Run storybook
To run storybook use the following command:
```sh
yarn storybook
```

## Exercises
You will find 4 exercises and associated instructions in the separate named folders in the root of this project. This assignment is [timeboxed](https://en.wikipedia.org/wiki/Timeboxing) to **8 hours** max.

## Notes
If you have any remarks or observations while working on this assignment you are encouraged submit these along with the assignment.

## Submitting your code
When you complete the assignment either push your local working copy to a remote repository or email us a .zip file with your solution. **Please do not fork this repository**.
