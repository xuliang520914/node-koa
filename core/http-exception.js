class HttpException extends Error {
    constructor(msg = "服务器错误", errorCode = 1000, code = 400) {
        super()
        this.errorCode = errorCode
        this.msg = msg
        this.code = code
    }
}

class ParameterException extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.code = 400
        this.msg = msg || '参数有误'
        this.errorCode = errorCode || 10000
    }
}

module.exports = { HttpException, ParameterException }