 function listaDeliveries() {
  let tbody = document.getElementById("tbody");

  for (let i = 0; i < array.arrayDeliveries.length; i++) {
    let tr = tbody.insertRow();

    let td_nome = tr.insertCell();
    let td_peso = tr.insertCell();
    let td_endereco = tr.insertCell();
    let td_telefone = tr.insertCell();
    let td_acoes = tr.insertCell();

    td_nome.innerText = this.arrayDeliveries[i].nome;
    td_peso.innerText = this.arrayDeliveries[i].peso;
    td_endereco.innerText = this.arrayDeliveries[i].endereco;
    td_telefone.innerText = this.arrayDeliveries[i].telefone;
    td_acoes.innerText = "excluir";

    td.acoes.classList.add("center");
  }
}