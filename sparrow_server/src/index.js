const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();

const testRouter = require("./api/index");

router.use('/test', testRouter.routes());

app.use(koaBodyParser());

router.get("/", ctx => {
    ctx.body = "Home";
});

router.get("/about", ctx => {
    ctx.body = "About";
});

router.get("/about/:name", ctx => {
    const {name} = ctx.params;
    ctx.body = name ? `about ${name}` : "About";
});

router.get("/post", ctx => {
    const {id} = ctx.query;
    ctx.body = id ? `${id}'s post` : 'no exist';
});

app.use(router.routes()).use(router.allowedMethods());

// request
app.listen(4000, () => {});
