# Web app
React web application to control

# API
Http server wrapping the yamaha-nodejs library to be used with web app

# Environment
- Run both web app and api using scripts in package.json
- An .env file will need to be created to define the api url

# Run on a Pi

## INSTALL DEPENDENCIES
- GIT
- Node/NPM
- Serve (npm install -g serve)

## APP
pm2 serve build 3001

## API
pm2 start node api.js

# References
https://dev.to/bogdaaamn/run-your-nodejs-application-on-a-headless-raspberry-pi-4jnn