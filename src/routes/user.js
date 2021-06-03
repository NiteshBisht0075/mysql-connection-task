const controller = require('../controller/UserController')
function getUserHome(ctx) { ctx.body = "User Home Page" }

module.exports = function (app, Router) {
    const router = new Router({ prefix: '/user' });
    router.get('/', '/', getUserHome);
    router.post('/addUser', controller.add);
    app.use(router.routes()).use(router.allowedMethods());
}
