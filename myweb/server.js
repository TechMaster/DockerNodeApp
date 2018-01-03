const express = require('express')
const http = require('http')
const winston = require('winston')

// Constants
const PORT = 3000
const HOST = '0.0.0.0'

// Logger
const logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)(),
      new (winston.transports.File)({ filename: '../logs/weblog.log' })
    ]
  });

// App
const app = express()

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('<h1>LOVE</h1><img src="/cat.png">')
})

const server = http.createServer(app)
//Hàm bắt lỗi khi express chạy
server.on('error', (error) => {
   logger.log('error', error)
})

//app.listen(PORT, HOST)
server.listen(PORT, HOST, ()=> {
   logger.log('info', `Server is started at ${new Date()}`)
})
console.log(`Running on http://${HOST}:${PORT}`)