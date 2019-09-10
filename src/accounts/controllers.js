const passport = require("koa-passport");
const config = require("config");
const jwt = require("jwt-simple");
const User = require("./models/user");

exports.signIn = async (ctx, next) => {
  await passport.authenticate("local", (err, user) => {
    if (user) {
      const payload = {
        // eslint-disable-next-line no-underscore-dangle
        id: user._id
      };
      ctx.body = {
        token: jwt.encode(payload, config.get("jwtSecret")),
        user: {
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          photo: user.photo
        }
      };
    } else {
      ctx.body = {
        error: err
      };
    }
  })(ctx, next);
};

exports.signUp = async ctx => {
  const { firstname, lastname, email, username, password } = ctx.request.body;
  console.log(ctx.request.body);
  try {
    const emailFromDB = await User.find({
      email
    });
    console.log(emailFromDB);
    if (emailFromDB.length !== 0) {
      ctx.response.status = 400;
      ctx.body = {
        err: "This is email already registrated "
      };
    } else {
      const user = new User({
        firstname,
        lastname,
        username,
        email,
        password
      });
      await user.save();
      ctx.status = 200;
    }
  } catch (err) {
    console.log(err);
  }
};

exports.profile = async ctx => {
  ctx.body = "SUPER SECRET CONTENT ONLY FOR USERS!";
};
