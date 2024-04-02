const readline = require('readline-sync');
const contatoControlado = require('./Controlador');

function menu(){
    console.log('1. Adicionar contato');
    console.log('2. Listar contatos');
    console.log('3. Buscar contato');
    console.log('4. Atualizar contato');
    console.log('5. Remover contato');
    console.log('6. Sair');
}

