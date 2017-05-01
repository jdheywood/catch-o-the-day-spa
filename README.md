# Catch of the Day SPA

A simple angular SPA for recording of a fisherman's daily catches.

Based on this sample project: https://github.com/sitepoint-editors/angular-todo-app


## Install dependencies
Install dependencies using `npm install` command (locally, a node_modules directory will be created)

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

The build artifacts are included in the accompanying Express application that acts as the page host and api for the spa, simplifying the deployment of the full stack to heroku.
See the repository: https://github.com/jdheywood/catch-o-the-day for the express api

## Demo

A running demonstration of the SPA, hosted page and API application can be found here: https://catch-o-the-day.herokuapp.com

## Running unit tests

Run `npm test` to execute the unit tests via Karma. At the present time the AppComponent test fails, some time is needed to remedy this.

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via Protractor. 

This does nothing more than check the text of the h1 element of the app, but it demonstrates a running acceptance test and passes.

## Release History

v1.0.0 released 1st May 2017