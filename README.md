# Just another discord bot

This is just another discord bot using the discord.js library.

# npm start

```sh
nodemon --exec babel-node src/index.js
```

Runs source files with Babel ES6+ interpreter and hot reload enabled.

# npm test

```sh
npx mocha test/ --require @babel/register
```
Runs unit tests using Mocha.

# npm run build

```sh
npx babel src --out-dir ./build --source-maps
```
Compiles ES6+ code for deployment

# npm run lint

```sh
npx eslint --fix src/
```

Runs linter

# npm run docs

```sh
npx esdoc
```

Builds documentation using ESDoc.

