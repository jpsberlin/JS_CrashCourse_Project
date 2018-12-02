const express = require('express')
const bodyParser = require('body-parser')

const TechyogiService = require('./services/techyogi-service')
const YogasessionService = require('./services/yogasession-service')

// require('./mongo-connection')

const app = express()

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index')
})

// techyogi ENDPOINTs

app.get('/techyogi/all', async (req, res) => {
  const people = await techyogiService.findAll()
  res.render('people', { people })
})

app.get('/techyogi/:id', async (req, res) => {
  const user = await TechyogiService.find(req.params.id)
  res.render('data', { data: user })
})

app.post('/techyogi', async (req, res) => {
  const user = await TechyogiService.add(req.body)
  res.send(user)
})

app.delete('/techyogi/:id', async (req, res) => {
  const user = await TechyogiService.del(req.params.id)
  res.send(user)
})

// Yogasession ENDPOINTS

app.get('/yogasession/all', async (req, res) => {
  const yogasessions = await YogasessionService.findAll()
  res.send(yogasessions)
})

app.get('/yogasession/:id', async (req, res) => {
  const yogasession = await YogasessionService.find(req.params.id)
  res.send(yogasession)
})

app.post('/yogasession', async (req, res) => {
  const yogasession = await YogasessionService.add(req.body)
  res.send(yogasession)
})

app.post('/yogasession/:id/addAttendee', async (req, res) => {
  const yogasession = await YogasessionService.addAttendee(req.params.id, req.body.techyogiId)
  res.send(yogasession)
})

app.listen(3000, () => {
  console.log('Server listening')
})
