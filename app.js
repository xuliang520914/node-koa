const Koa = require('koa')
const parser = require('koa-bodyparser')
const catchErr = require('./middlewares/exception')
const InitManager = require('./Core/init')

const app = new Koa()

app.use(catchErr)
app.use(parser())
InitManager.initCore(app)

app.listen(3001)