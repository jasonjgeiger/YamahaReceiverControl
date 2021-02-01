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
`pm2 serve build 3001`

## API
`pm2 start node api.js`

# Pi setup

## WPA SUPPLICANT
`
country=us
update_config=1
ctrl_interface=/var/run/wpa_supplicant

network={
 scan_ssid=1
 ssid="MyNetworkSSID"
 psk="Pa55w0rd1234"
}
`

## Running on a Pi w/ bootup
Make sure the App and API are running in PM2
`pm2 save`
`pm2 resurrect`
`pm2 startup`

# References
https://dev.to/bogdaaamn/run-your-nodejs-application-on-a-headless-raspberry-pi-4jnn
https://desertbot.io/blog/nodejs-git-and-pm2-headless-raspberry-pi-install
https://linuxize.com/post/how-to-install-node-js-on-raspberry-pi/
