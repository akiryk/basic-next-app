# Next App

## Description

This is a nextjs app build with the new app directory and the following technologies:

- Nextjs on Vercel
- MongoDB Atlas
- Apollo Graphql on Heroku
- Authentication with auth0

The next app is hosted on Vercel. It's called `Basic Next App`.

> See the [Basic Next App Deployment](https://basic-next-app-alpha.vercel.app/)

> See the [Basic Next App project on Vercel](https://vercel.com/akiryk/basic-next-app)

The MondoDB data is stored in a the Atlas Readylab group in a project called `Graphql Apollo Mongodb Nextjs`.

> See the [MongoDB Readylab Project](https://cloud.mongodb.com/v2#/org/618e814cce34474fc6146e17/projects)

The Apollo Server is hosted on Heroku in a project called `varioso`.

> See the [Server repo on github](https://github.com/akiryk/graphql-server-example)

> See the [Varioso Heroku Project](https://dashboard.heroku.com/apps/varioso)

> See the [Apollo Server Sandbox on Heroku](https://varioso-668b109fd65d.herokuapp.com/)

Use `@auth0/nextjs-auth0` for authentication.

> See the [Auth0 Dashboard](https://manage.auth0.com/dashboard/us/dev-6yrl3be1h2xi7tlj/applications/JFa6Th02Y9QR064pUVOoYH5pwC66kJ7Y/settings).

## Get Started

### In Dev

- `nvm use 16`
- `npm install`
- `npm run dev`
- visit localhost:3000

### To deploy

- `git push`
- visit [dashboard](https://vercel.com/akiryk/basic-next-app)
- visit [live app](https://basic-next-app-alpha.vercel.app/)

You need to add secrets from your `.env` file to the settings in your Vercel app. Do that at `settings/environment-variables`

## Auth

Use `@auth0/nextjs-auth0` for authentication. [See dashboard](https://manage.auth0.com/dashboard/us/dev-6yrl3be1h2xi7tlj/applications/JFa6Th02Y9QR064pUVOoYH5pwC66kJ7Y/settings).

For the AUTH BASE URL:

- prod: `https://basic-next-app-alpha.vercel.app/`
- dev: `http://localhost:3000/`

For [the auto0 settings page](https://manage.auth0.com/dashboard), you need to set the "Allowed Callback URLs". This will be localhost and your Vercel domain, e.g.

- `http://localhost:3000/api/auth/callback`
- `https://basic-next-app-alpha.vercel.app/api/auth/callback`

To create a secret, use `openssl rand -hex 32`` to generate a 32 bytes value.

## Github

Want to update your credentials? Create a [new token here](https://github.com/settings/tokens).
