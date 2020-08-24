module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "leesola97",
    DB: "fintech",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };