const db = require("../config/db");
const Delivery = db.deliveries;

//list
const listDeliveries = (req,res) => {

  Delivery.findAll()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Ocorreu erro."
    });
  });
};

//create
const createDeliveries = (req, res) => {

  if(!req.body.nome||!req.body.peso || !req.body.endereco || !req.body.telefone){
    res.status(400).send({
      message: "Favor preencher todas as informações."
    });
    return;
  };
  
  const delivery = {
    nome: req.body.nome,
    peso: req.body.peso,
    endereco: req.body.endereco,
    telefone: req.body.telefone
  }
  // salvar minhas informações no banco com uma chamada assincrona se foi salvo ou não no banco
  Delivery.create(delivery) 
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message 
      });
    });
};



//delete
const deleteDeliveries = (req, res) => {
  const id = req.params.id;
  Delivery.destroy({
    where: {id: id}
  })
    .then(num => {
    if (num == 1) {
      res.status(202).send({message:"Excluído com sucesso"});
    } else {
      res.status(404).send({message:"Id não encontrado"})
    }
  })
  .catch(err => {
    res.status(500).send({message: "Não foi possível excluir."});
  });
  

}

module.exports = {
  listDeliveries,
  createDeliveries,
  deleteDeliveries
}