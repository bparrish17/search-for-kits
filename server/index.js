const express = require('express')
const app = express()
const PORT = 3001
const Controller = require('./controller')
const controller = new Controller()

app.get('/api/kits/search', (req, res) => controller.searchKits(req, res))
app.get('/api/kits/:kitId', (req, res) => controller.getKitById(req, res));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

