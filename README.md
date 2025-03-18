# Stencil demo monorepo

## Installation

Install the NPM dependencies in all the workspaces:

```
npm i -ws
```

Launch the stencil app:

```
npm start
```

Build the libraries:

```
npm run build
```

## Useful commands

| Command           | Description                                                      |
| ----------------- | ---------------------------------------------------------------- |
| `npm start`       | Serve the Stencil web page in development mode (and live reload) |
| `npm run build`   | Build all the libraries                                          |
| `npm run angular` | Serve the Angular demo app                                       |
| `npm run vue`     | Serve the VueJs demo app                                         |
| `npm run nuxt`    | Serve the Nuxt demo app                                          |
| `npm run node`    | Serve the NodeJs demo app using SSR                              |
| `npm run html`    | Serve the HTML demo app                                          |
| `npm run docs`    | Serve the documentation website                                  |
| `npm run version` | Increment the packages versions                                  |

## Information

Lerna use Nx behind the scene. You can also use the nx commands.

```
npx lerna run build --scope=angular-app
=
npx nx build angular-app
```
