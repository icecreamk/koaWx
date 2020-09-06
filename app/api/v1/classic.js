const Router = require('koa-router')
const { HttpException } = require('../../../core/http-exception')
const router = new Router()

router.post('/v1/:id/classic/latest', (ctx, next) => {
    ctx.body = {
        key: 'classic'
    }
    throw new HttpException('why', 10001, 400)
})

module.exports = router