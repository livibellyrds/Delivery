class Delivery {

  constructor() {
    this.arrayEntrega = [];
  }

  lerDados() {
    let entrega = {};

    entrega.nome = document.getElementById("nome").value;
    entrega.peso = document.getElementById("peso").value;
    entrega.endereco = document.getElementById("endereco").value;
    entrega.telefone = document.getElementById("telefone").value;

    return entrega;
  }

  listar() {
    let tbody = document.getElementById("tbody");

    tbody.innerHTML = "";

    for (let i = 0; i < this.arrayEntrega.length; i++) {
      let tr = tbody.insertRow();
      
      let td_nome = tr.insertCell();
      let td_peso = tr.insertCell();
      let td_endereco = tr.insertCell();
      let td_telefone = tr.insertCell();
      let td_acoes = tr.insertCell();


      td_nome.innerText =  this.arrayEntrega[i].nome;
      td_endereco.innerText = this.arrayEntrega[i].endereco;
      td_telefone.innerText = this.arrayEntrega[i].telefone;
      td_peso.innerText =  this.arrayEntrega[i].peso;

      td_acoes.innerHTML =  `<span class='btn' onclick='entrega.excluir(${this.arrayEntrega[i].id})'>excluir</span>`;
      td_acoes.classList.add("center");

    }
  }

  cadastrar() {
    let entrega = this.lerDados();
    this.adicionar(entrega);
  }

  async adicionar(entrega) {
    const result = await fetch("/deliveries", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(entrega)
    });
    const content = await result.json();
    this.arrayEntrega.push(entrega);
    this.buscar();
  }
  
  limpar() {
    document.getElementById("nome").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("telefone").value = "";
  }

  async excluir(id) {
    const result = await fetch(`/deliveries/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
    const content = await result.json();
    alert(content[0]);
    this.buscar();
  }

  async buscar() {
    this.arrayEntrega = [];

    let result = await fetch("/deliveries");
    let json = await result.json();
    json.forEach(delivery => {
      this.arrayEntrega.push(delivery);
    });
    entrega.listar();
  }

}

var entrega = new Delivery();
entrega.buscar();
