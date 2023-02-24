const Router = require('koa-router')
const { PositiveIntergerValidator } = require('../../validators/validator')
const router = new Router()

router.post('/v1/:id/classic/latest', (ctx, next) => {
    const v = new PositiveIntergerValidator().validate(ctx)
    
})

module.exports = router