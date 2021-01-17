const express = require('express')
const app = express()
const ip = 'IP HERE'
const port = PORT HERE

var indexRouter = require('./routes/index')
var learnasmRouter = require('./routes/learnasm')

app.set('view engine', 'pug')
app.use('/', indexRouter)
app.use('/learnasm', learnasmRouter)

app.use(express.static(__dirname + '/public'))
app.locals.basedir = __dirname + '/public'

app.listen(port, () => {
})
