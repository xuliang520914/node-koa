const Router = require('koa-router')
const { PositiveIntergerValidator } = require('../../validators/validator')
const router = new Router()

router.post('/v1/:id/classic/latest', async(ctx, next) => {
    const v = await new PositiveIntergerValidator().validate(ctx)
    
})

module.exports = router