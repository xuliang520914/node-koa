const { LinValidator, Roule, Rule } = require("../../core/lin-validator");

// 正整数校验
class PositiveIntergerValidator extends LinValidator {
    constructor() {
        super()
        this.id = [
            new Rule('isInt', "需要是正整数", { min: 1 })
        ]
    }
}

module.exports = {PositiveIntergerValidator}