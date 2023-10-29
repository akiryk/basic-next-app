This is a next app.

It uses Apollo Client to query a Heroku Graphql server:
https://varioso-668b109fd65d.herokuapp.com/

The Apollo Server repo is hosted on Heroku. [Dashboard is available behind a password](https://dashboard.heroku.com/apps/varioso).

It gets deployed [here on Vercel](https://basic-next-pt986nrak-akiryk.vercel.app/).

To deploy

- `git push`
- visit [dashboard](https://vercel.com/akiryk/basic-next-app)
- visit [live app](https://basic-next-app-alpha.vercel.app/)

## Auth

Use `@auth0/nextjs-auth0` for authentication. [See dashboard](https://manage.auth0.com/dashboard/us/dev-6yrl3be1h2xi7tlj/applications/JFa6Th02Y9QR064pUVOoYH5pwC66kJ7Y/settings).

For the AUTH BASE URL:

- prod: `https://basic-next-app-alpha.vercel.app/`
- dev: `http://localhost:3000/`

To create a secret, use `openssl rand -hex 32`` to generate a 32 bytes value.

## Github

Want to update your credentials? Create a [new token here](https://github.com/settings/tokens).
