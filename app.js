const Koa = require('koa')
const parser = require('koa-bodyparser')
const InitManager = require('./Core/init')

const app = new Koa()

app.use(parser())
InitManager.initCore(app)

app.listen(3001)