# Them Bones

This is a simple CLI Tool for generating REST APIs with Node-JS with Express-JS.

## Disclaimer: Them Bones is still on Early Development and the majority of things you will read here anre NOT yet implemented.

## Things included here:

- Mails with Node-Mailer
- Tests with Jest and Super-Test
- Build to production with WebPack already configured
- .env file pre-configured to change between various environments
- MongoDB database pre-configuration with Mongoose
- Auth and Error Handling midlewares
- Validation with Validate.js

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

- `--mail *or --m*`: With this option your project will include Node-Mailer on your application.
- `--handlebars *or --hbs*`: If you want some kind of server-side-rendering on your API, HandleBars views will be setted up and some examples will be generated.
- ` --withDev *or --dev*`: With this option a webpack dev configuration will also be setted up.

## About Environments

Them Bones has already a configuration for your .env files, to make it work navigate to `src/config/env/` and add your .env files there.

Please take in mind that you need your .env to be named like this to make it work:

The name should be composed of an NODE*ENV correct value followed by .env \_NODE_ENV*.env, for example `production.env` or `development.env`

You will find a example-env file inside `src/config/env/` with all the parameters you need to set, you can eassily change the name of that file to something like `production.env` and change the values for the once you need on the .env file.

# Licence

This Library was created by Facundo Carbonel (@F2BEAR) for Stratus on 2021 and is under and an MIT License.
