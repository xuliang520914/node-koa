const catchErr = async(ctx, next) => {
    try{
        await next()
    } catch (err) {
        ctx.body = "报错了"
    }
}

module.exports = catchErr