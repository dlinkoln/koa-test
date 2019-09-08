module.exports = {
  port: 3000,
  databaseUrl:
    "mongodb+srv://dlinkoln:pass@cluster0-l1na3.mongodb.net/test?retryWrites=true&w=majority",
  defaultUserPhotoUrl: "https://www.placecage.com/200/300",
  crypto: {
    hash: {
      length: 100,
      iterations: 1000
    }
  },
  jwtSecret: "fsdgdfglwefkdlfp2304923041231221030"
};
