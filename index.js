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

function EscolherOpcao(opcao){
    switch(opcao){
        case '1':
            const nome = readline.question("Nome: ");
            const email = readline.question("Email: ");
            const telefone = readline.question("Telefone: ");
            contatoControlado.adicionarContato(nome, email, telefone);
            contatoControlado.encerrarProcesso()
            break;
        case "2":
            console.log(contatoControlado.listarContatos());
            contatoControlado.encerrarProcesso();
            break;
        case "3":
            const nomeBusca = readline.question("Nome do contato: ");
            const contatoEncontrado = contatoControlado.buscarContatos(nomeBusca);
            if(contatoEncontrado){
                console.log("Contato Encontrado");
                console.log(contatoEncontrado);

            }else{
                console.log("contato não encontrado");
            }
            contatoControlado.encerrarProcesso();
            break;
        case "4":
            const atualizarNome = readline.question("Nome do contato: ");
            const novoEmail = readline.question("Novo Email: ");
            const novoTelefone = readline.question("Novo Telefone: ");
            contatoControlado.atualizarContatos(atualizarNome, novoEmail, novoTelefone);
            contatoControlado.encerrarProcesso()
            break;
        case "5":
            const contatoRemovedor =  readline.question("Nome do contato: ");
            contatoControlado.removerContatos(contatoRemovedor);
            contatoControlado.encerrarProcesso()
            break;
        case "6":
            process.exit();
        default:
            console.log("opção inválida.");

    }   
}

function main(){
    while(true){
        menu();
       const opcao = readline.question("Escolha uma opção: ");
       EscolherOpcao(opcao);

    }
}

main();