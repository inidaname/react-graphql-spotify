# Music Search app on React Typescript and Graphql

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## List of some of the dependecies used on the application and reasons

- typescript V4.1.2: to provide type safe of code base
- Graphql v16.0.1: providing API calls
- Apollo/* v3.4.17: providing state management for graphql data remote and locally
- React-Helmet-Async v1.0.3: to provide help with access the DOM heading dynamically
- graphql-codegen v2.2.2: to help with generating graphql types for typescript
- React testing library: to provide testing enviroment for code test.
- Wait-for-expect: Wait for expectation to be true, for integration and end to end testing

## Articles and guides that help

- [Apollo Graphql's: Fetch data with the useQuery hook](https://www.apollographql.com/docs/react/data/queries/)
- [A Guide to Unit Testing React Apollo Components](https://www.dolthub.com/blog/2021-02-05-guide-to-react-unit-testing/)

## Directory Structure

```markdown
src
 ┣ components
 ┃ ┣ button
 ┃ ┃ ┣ Button.module.css
 ┃ ┃ ┣ Button.module.css.d.ts
 ┃ ┃ ┣ Button.test.tsx
 ┃ ┃ ┗ Button.tsx
 ┃ ┣ footer
 ┃ ┃ ┣ Footer.module.css
 ┃ ┃ ┣ Footer.module.css.d.ts
 ┃ ┃ ┗ Footer.tsx
 ┃ ┣ header
 ┃ ┃ ┣ Header.module.css
 ┃ ┃ ┣ Header.module.css.d.ts
 ┃ ┃ ┗ Header.tsx
 ┃ ┣ result
 ┃ ┃ ┣ Result.module.css
 ┃ ┃ ┣ Result.module.css.d.ts
 ┃ ┃ ┣ Result.test.tsx
 ┃ ┃ ┗ Result.tsx
 ┃ ┣ search
 ┃ ┃ ┣ Search.module.css
 ┃ ┃ ┣ Search.module.css.d.ts
 ┃ ┃ ┣ Search.test.tsx
 ┃ ┃ ┗ Search.tsx
 ┃ ┗ index.ts
 ┣ context
 ┃ ┗ index.ts
 ┣ generated
 ┃ ┗ graphql.tsx
 ┣ graphql
 ┃ ┣ index.ts
 ┃ ┗ query.ts
 ┣ styles
 ┃ ┣ App.module.css
 ┃ ┗ App.module.css.d.ts
 ┣ tests
 ┃ ┣ mock
 ┃ ┃ ┗ result.ts
 ┃ ┗ App.test.tsx
 ┣ types
 ┃ ┣ context.d.ts
 ┃ ┣ index.d.ts
 ┃ ┗ props.d.ts
 ┣ App.tsx
 ┣ index.css
 ┣ index.tsx
 ┣ react-app-env.d.ts
 ┣ reportWebVitals.ts
 ┗ setupTests.ts
```

## Other decision for the project

A github action has been added to help run test on every PR created to merge for `main branch`. This is to help automate test.

## How to run the project

Git clone the project to your local directory `git clone https://github.com:inidaname/react-graphql-spotify.git`

Change Directory to the project directory `cd react-graphql-spotify` then run `yarn` or `npm install`, (`yarn` is preffered as this project was built using yarn command line)

Then you can run `yarn start` to start the project on your local server, you can navigate on your broswer to `http://localhost:3000`
In the project directory, you can run:


### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
