module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("project", {
      id :{
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull : false,
      },
      userId: {
        type : Sequelize.INTEGER,
        allowNull : false
      },
      content: { //본문 내용
        type: Sequelize.STRING,
        allowNull : false
      },
      goal: { //목표금액
        type: Sequelize.DOUBLE, 
        allowNull : true
      },
      imageUrl: {
        type: Sequelize.STRING,
        allowNull : true
      }
    });
  
    return Project;
  };