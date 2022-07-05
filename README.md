# Tennis API proxy

A very simple express.js server proxying API calls for use in a Tennis Live Score app.

## Setup

Expects an .env file with the following definitions:

- TENNIS_APP_API_KEY
- TENNIS_APP_HOST
- SERVER_PORT

Run npm install and node index.js to fire up the server.
Each external API call is cached for 15 minutes.

## Not meant for production

Mostly a playing around project, nothing too serious.