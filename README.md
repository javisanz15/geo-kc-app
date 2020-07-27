# GeoKcApp

This is an Angular v10 project for the interview process for MySidewalk. It consists of a page that loads two GeoJSON from KC layout, separated by neighbourhoods or tracts, and displays statistics regarding commutes present in those areas. You can see the values for the commutes in the map by using the available dropdown, but you can also click in a single geographical area, and a popup will appear showing the full data regarding the area in further detail.

To run any kind of Angular or AngularJS projects, it is necessary to previously have installed in your terminal NodeJS and thus NPM before starting to clone the project. If that is not the case please download it from the following website [NodeJS Download](https://nodejs.org/es/download/).

## Development server

The first step would be installing the needed dependencies and packages for the app to run. Using the command line, go to the project folder. Then execute the following command:

`npm install`

This will install all the needed dependencies. It might take a few minutes if it is the first time. Once this process is finished, please check out that it has installed the Angular CLI by typing the following command:

`ng --version`

If that doesn't work, please add the Angular CLI globally. That might be necessary for some OS.

`npm install -g @angular/cli@latest`

Please retry the command explained before. If it is successful, you can start the app using the following command:

`npm run start`

This will start the execution of the app. When this process is done, the app will be reachable in the following address: http://localhost:4200

To run the tests you should simply use the following command: `npm run test`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
