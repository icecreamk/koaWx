const Router = require('koa-router')
const router = new Router()

router.post('/v1/:id/classic/latest', (ctx, next) => {
    ctx.body = {
        key: 'classic'
    }
    throw new global.errs.NotFound()
})

module.exports = router