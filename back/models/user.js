module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      id :{
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull : false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull : false
      },
      password: {
        type: Sequelize.STRING,
        allowNull : false
      },
      money: {
        type: Sequelize.INTEGER,
        allowNull : true
      }
    });
  
    return User;
  };