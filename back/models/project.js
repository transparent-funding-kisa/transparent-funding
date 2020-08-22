module.exports = (sequelize, Sequelize) => {
  const Project = sequelize.define("project", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    content: {
      //본문 내용
      type: Sequelize.STRING,
      allowNull: true,
    },
    goal: {
      //목표금액
      type: Sequelize.DOUBLE,
      allowNull: true,
    },
  });

  return Project;
};
