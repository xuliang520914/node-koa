const Router = require('koa-router')
const requireDirectory = require('require-directory')

class InitManager {
    static initCore(app) {
        InitManager.app = app
        InitManager.initLoadRouter()
    }

    static initLoadRouter() {
        const apiDirectory = `${process.cwd()}/app/api`
        requireDirectory(module, apiDirectory, {visit: whenLoadModule})

        function whenLoadModule(obj) {
            if (obj instanceof Router) {
                InitManager.app.use(obj.routes())
            }
        }

    }
}

module.exports = InitManager