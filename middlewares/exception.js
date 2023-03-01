const config = require("../config/config")
const { HttpException } = require("../core/http-exception")

const catchErr = async(ctx, next) => {
    try{
        await next()
    } catch (err) {
        const isDev = config.environment === 'development'
        const isHttpException = err instanceof HttpException

        if (isDev && !isHttpException) {
            throw err
        }
        if (isHttpException) {
            ctx.body = {
                msg: err.msg,
                errorCode: err.errorCode,
                request:`${ctx.method} ${ctx.path}`,
            }
            ctx.status = err.code
        } else {
            ctx.body = {
                msg: '服务器出错了o(╥﹏╥)o',
                errorCode: 999,
                request:`${ctx.method} ${ctx.path}`,
            }
            ctx.status = 500
        }
    }
}

module.exports = catchErr