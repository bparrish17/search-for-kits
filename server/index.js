const path = require('path')
const express = require('express')
const app = express()
const PORT = 3001
const Controller = require('./controller')
const controller = new Controller()

app.use(express.static(path.join(__dirname, '../client/build')));
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// api routes
app.get('/api/kits/search', (req, res) => controller.searchKits(req, res))
app.get('/api/kits/:kitId', (req, res) => controller.getKitById(req, res));


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

