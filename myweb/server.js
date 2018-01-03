const express = require('express')

// Constants
const PORT = 3000
const HOST = '0.0.0.0'

// App
const app = express()

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('<h1>LOVE</h1><img src="/cat.png">')
})

app.listen(PORT, HOST)
console.log(`Running at http://${HOST}:${PORT}`)