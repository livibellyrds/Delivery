

module.exports = (sequelize,Sequelize) => {
  const Delivery = sequelize.define("delivery",{

    nome:{
      type: Sequelize.STRING
    },
    peso:{
      type: Sequelize.DOUBLE
    },
    endereco: {
      type:Sequelize.STRING
    },
    telefone: {
      type:Sequelize.STRING
    }
  });

  return Delivery;
}