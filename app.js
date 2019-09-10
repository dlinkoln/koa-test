const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-body");
const cors = require("koa2-cors");
const config = require("config");
require("./src/libs/mongoose");
const passport = require("./src/libs/passport/index");

passport.initialize();

const app = new Koa();
const router = new Router();

app.use(
  cors({
    origin() {
      return "*";
    }
  })
);

app.use(
  bodyParser({
    multipart: true
  })
);

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    // console.log(err);
    // const errors = [];
    // Object.keys(err.errors).forEach((key) => {
    //   errors.push(err.errors[key].message);
    // });
    ctx.status = 500;
    ctx.body = {
      error: true
    };
  }
});

router.use("/accounts", require("./src/accounts/routes").routes());

app.use(router.routes());

const PORT = process.env.PORT || 3000;
app.listen(PORT);
