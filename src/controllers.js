exports.homePage = async (ctx) => {
  await ctx.render('index', {
    username: 'john smith',
  });
};
exports.otherPage = async (ctx) => {
  await ctx.render('other', {
    lifehack: 'do anything at the last minutес ',
  });
};
exports.maybeYes = async (ctx) => {
  await ctx.render('maybe', {
    importantInformation:
      'Here should have been page layouts,but already they arent exist ',
  });
};
