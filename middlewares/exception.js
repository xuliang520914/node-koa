const { HttpException } = require("../core/http-exception")

const catchErr = async(ctx, next) => {
    try{
        console.log("begin")
        await next()
        console.log("end")
    } catch (err) {
        console.log("catch")
        if (err instanceof HttpException) {
            console.log("Error")
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