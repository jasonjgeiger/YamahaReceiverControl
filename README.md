# Web app
React web application to control

# API
Http server wrapping the yamaha-nodejs library to be used with web app

# Environment
- Run both web app and api using scripts in package.json
- An .env file will need to be created to define the api url

# Run on a Pi
## APP
pm2 start npm --name "yamaha-controls" run app

## API
pm2 start node api.js

# References
https://dev.to/bogdaaamn/run-your-nodejs-application-on-a-headless-raspberry-pi-4jnn