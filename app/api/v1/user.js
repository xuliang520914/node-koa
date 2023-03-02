const Router = require('koa-router')
const { RegisterValidator } = require('../../validators/validator')
const router = new Router({ prefix: '/v1/user/' })

// 新增用户
router.post('register', async (ctx) => {
    const v = await new RegisterValidator().validate(ctx)
})

module.exports = router