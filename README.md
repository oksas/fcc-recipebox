# Recipebox
A React application that allows you to create and store your own recipes on your device, leveraging modern browsers' [localStorage API]( https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

This project was built for the [assignment](https://www.freecodecamp.com/challenges/build-a-recipe-box) on [Free Code Camp](https://www.freecodecamp.com). Instead of building and hosting the entire project on [CodePen](https://codepen.io) as the assignment calls for, I took the opportunity to explore the React ecosystem a bit more and setup a development environment on my local machine and deploy to Heroku. One of my primary motivations for doing so, outside of getting a more 'authentic' React development experience, was so that I could unit test the project using Airbnb's awesome [Enzyme](https://github.com/airbnb/enzyme/) testing framework and finally get some experience with unit testing in general. Much, but not quite all, of the project was built from a test-first perspective (TDD). The project did not turn out to be quite what I hoped it to be due to a number of reasons, but ultimately it was a hugely beneficial learning experience.

## Check it out
Currently live at [https://rad-recipes.herokuapp.com/](https://rad-recipes.herokuapp.com/).

## Running the development server
`npm run dev` to start the Webpack dev server, and `npm run test:watch` to start the tests.

## Building and running the production server
`npm run build` to build and compile everything into `/dist/bundle.js`, and `node server` to start the production server.
