module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "leesola97",
    DB: "fintech2",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };