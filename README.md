# Them Bones

This is a simple CLI Tool for generating REST APIs with Node-JS with Express-JS.

## Disclaimer: Them Bones is still on Early Development and the majority of things you will read here anre NOT yet implemented.

## Things included here:

- Mails with Node-Mailer
- Tests with Jest and Super-Test
- Build to production with WebPack already configured
- CI/CD for GitLab by default
- .env file pre-configured to change between various environments
- MongoDB database pre-configuration with Mongoose
- Auth and Error Handling midlewares
- Validation with Validate.js
- Log mechanism configured with Winston and Morgan

# Documentation

## Installation

You can run the following commands on any terminal to start working with Them Bones:

With npm:

`npm install -g them-bones`

or you can simply use npx:

`npx them-bones *projectName* `

## Get Started

To use this library, go a terminal where Theme Bones is installed and run `them-bones *myNewProjext*`, and that's it! A new REST API template with the name of your API is now craeted on that directory.

### Options

- `--handlebars (alias --hbs)`: If you want server-side-rendering on your API, HandleBars views will be setted up with some examples.
- `--socketIo (alias --sio)`: This will set up a Socket-io server with Redis configured to use the Redis Channel's Pub/Sub mechanisms.
- `--withCli (alias --cli)`: When using --withCli option, a basic CLI configuration will be generated under `./bin/index.js`.
- `--graphQl (alias --gql)`: This will set up a basic configuration to generate a basic GraphQL API.
- `--gitHub (alias --ghub)`: Changes the default CI/CD configuration from GitLab to GitHub.
- `--sql`: This will change the default DataBase configuration from MongoDB to MySQL with Sequelize.

> You can change the default --sql configuration to use the SQL driver supported by Sequilize of your choice; for more information review the [Sequelize Docs](https://sequelize.org/master/manual/getting-started.html).

## About Environments

Them Bones has already a configuration for your .env files, to make it work navigate to `src/config/env/` and add your .env files there.

Please take in mind that you need your .env to be named like this to make it work:

The name should be composed of an NODE_ENV correct value followed by .env, for example `production.env` or `development.env`.

You will find a file called _example-env_ under `src/config/env/` with all the parameters you need to set, you can rename that file as explained before and change the values for the once you need!

# Licence

This Library was created by Facundo Carbonel (@F2BEAR) for Stratus on 2021 and is under and an MIT License.
