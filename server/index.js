const express = require('express')
const Controller = require('./controller')
const app = express()
const port = 3001
const controller = new Controller()

app.get('/api/kits/search', (req, res) => controller.searchKits(req, res))
app.get('/api/kits/:kitId', (req, res) => controller.getKitById(req, res));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

