class HttpException extends Error {
    constructor(msg = "服务器错误", errorCode = 1000, code = 400) {
        super()
        this.errorCode = errorCode
        this.msg = msg
        this.code = code
     }
}

module.exports = {HttpException}