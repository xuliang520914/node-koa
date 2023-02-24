const { HttpException } = require("../core/http-exception")

const catchErr = async(ctx, next) => {
    try{
        await next()
    } catch (err) {
        if (err instanceof HttpException) {
            ctx.body = {
                msg: err.msg,
                errorCode: err.errorCode,
                request:`${ctx.method} ${ctx.path}`,
            }
            ctx.status = err.code
        }
    }
}

module.exports = catchErr