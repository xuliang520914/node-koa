const { LinValidator, Rule } = require("../../core/lin-validator");

// 正整数校验
class PositiveIntergerValidator extends LinValidator {
    constructor() {
        super()
        this.id = [
            new Rule('isInt', "需要是正整数", { min: 1 })
        ]
    }
}

class RegisterValidator extends LinValidator {
    constructor() {
        super()
        this.email = [
            new Rule('isEmail', '请输入正确的邮箱')
        ]
        this.password1 = [
            new Rule('isLength', '密码长度6-32个字符', {
                min: 6,
                max: 32
            }),
            new Rule('matches', '密码需要数字字母和特殊字符', '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]')
        ],
        this.password2 = this.password1,
        this.nickname = [
            new Rule('isLength', '昵称长度4-32个字符', {
                min: 4,
                max: 32
            }),
        ]
    }

    validatePassword(vals) {
        const password1 = vals.body.password1
        const password2 = vals.body.password2
        if (password1 !== password2) {
            throw new Error("两次密码必须一样")
        }
    }
}

module.exports = { PositiveIntergerValidator, RegisterValidator }