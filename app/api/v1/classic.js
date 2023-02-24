const Router = require('koa-router')
const router = new Router()

router.post('/v1/:id/classic/latest', (ctx, next) => {
    throw new Error()
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