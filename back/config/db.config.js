module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "a59340",
    DB: "fintech",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };