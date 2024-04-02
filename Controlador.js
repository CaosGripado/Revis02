const Contato = require('./Modelo');

const contatos = [];

function adicionarContato(Nome,Email,Telefone){
    const novoContato = new Contato (Nome,Email,Telefone);
    contatos.push(novoContato);
}

function listarContatos(){
    return contatos;
}

function buscarContatos(Nome){
return contatos.find(Contato => Contato.Nome === Nome);
}

function atualizarContatos(Nome, Email, Telefone){
  const contato = buscarContatos(Nome);
  if(contato){
    contato.Email = Email
    contato.Telefone = Telefone
}
}

function removerContatos(Nome){
    const index = contatos.findIndex(Contato => Contato.Nome === Nome)
    if(index !== -1){
        contatos.splice(index, 1)
    }
}

module.exports = {
    adicionarContato,
    listarContatos,
    buscarContatos,
    atualizarContatos,
    removerContatos,

}