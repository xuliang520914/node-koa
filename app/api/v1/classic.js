const Router = require('koa-router')
const { HttpException } = require('../../../core/http-exception')
const router = new Router()

router.post('/v1/:id/classic/latest', (ctx, next) => {
    throw new HttpException("Hello", 10001, 400)
    console.log(ctx.method)
    console.log(ctx.params)
    console.log(ctx.request.body)
    console.log(ctx.request.header)
    console.log(ctx.request.query)
    ctx.body = {
        key: "classic"
    }
})

module.exports = router