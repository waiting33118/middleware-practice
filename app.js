const express = require('express')
const app = express()
const port = 3000

app.use(function (req, res, next) {
  const d = new Date()
  const timeStamp = d.toString()
  const url = req.originalUrl
  const method = req.method
  const startTime = Date.now()

  res.on('finish', () => {
    console.log(
      `${timeStamp} | ${method} from ${url} | total time:${
        Date.now() - startTime
      }ms`
    )
  })

  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
