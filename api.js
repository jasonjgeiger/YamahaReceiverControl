const express = require('express')
const cors = require('cors')
const YamahaAPI = require("yamaha-nodejs")
//
const app = express()
const port = 3000
const yamaha = new YamahaAPI("192.168.187.110");
//
app.use(cors({credentials: true, origin: true}))

const zone = 'home'

app.get('/power/on', (request, response) => {
  yamaha.powerOn().then(function(){
    yamaha.isOn().done(function(basicInfo){
      response.send({status:basicInfo})
    })
  })
})

app.get('/power/off', (request, response) => {
  yamaha.powerOff().then(function(){
    yamaha.isOn().done(function(basicInfo){
      response.send({status:basicInfo})
    })
  })
})
app.get('/power/current', (request, response) => {
  yamaha.isOn().done(function(basicInfo){
    response.send({status:basicInfo})
  })
})

app.get('/info', (request, response)  => {
  yamaha.getBasicInfo().done(function(basicInfo){
      response.send({status:basicInfo})
  })
})
app.get('/volume/current', (request, response)  => {
  yamaha.getVolume().done(function(basicInfo){
      response.send(
        {
          volume:basicInfo,
          formatted:(basicInfo/10).toFixed(1)
        }
      )
  })
})

app.get('/volume/set/up', (request, response) => {
  yamaha.volumeUp(20)
})

app.get('/volume/set/down', (request, response) => {
  yamaha.volumeDown(20)
})

app.get('/input/list', (request, response)  => {
  yamaha.getAvailableInputs().done(function(results){
    let output = [];
    let inputs = [
      "HDMI1",
      "HDMI2",
      "HDMI3",
      "HDMI4",
      "HDMI5",
      "HDMI6",
      "AV1",
      "AV2",
      "AV3",
      "AV4",
      "AV5",
      "AV6",
      "AUX",
      "USB"
    ]
    inputs.map(((item,index) => {
      let name = results[index].replace(/\s+/g, '')
      output.push({'id':item,'name':name})
    }))
    response.send(output)
  })
})

app.get('/input/current', (request, response)  => {
  yamaha.getCurrentInput().done(function(results){
      response.send({
        current:results
      })
  })
})

app.get('/input/set/:id', (request, response) => {
  yamaha.setMainInputTo(request.params.id).then(function(){
    yamaha.getCurrentInput().done(function(results){
      response.send({
        current:results
      })
    })
  })
})

app.get('/remote/:direction', (request, response) => {
  yamaha.remoteCursor(request.params.direction).done(function(results){
    response.send(results)
  })
})

app.get('/menu/:type', (request, response) => {
  yamaha.remoteMenu(request.params.type);
})


app.get('/playback/play', (request, response) => {
  yamaha.play();
})

app.get('/playback/pause', (request, response) => {
  yamaha.pause();
})

app.get('/playback/stop', (request, response) => {
  yamaha.stop();
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})