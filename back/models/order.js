module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
      id :{
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
        projectId: {
        type: Sequelize.INTEGER,
        allowNull : false,
      },
      userId: {
        type : Sequelize.INTEGER,
        allowNull : false
      },
      money: { //투자금
        type: Sequelize.INTEGER,
        allowNull : false
      },
    });
  
    return Order;
  };