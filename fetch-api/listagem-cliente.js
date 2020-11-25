const removeCliente = id => {
    if (confirm('Deseja excluir o cliente?')) {
        deletaClientes(id);
    }
};

const exibeCliente = (cpf, nome, id) => {
    const linha = document.createElement("tr");

    const conteudoLinha = `
        
        <td>${cpf}</td>
        <td>${nome}</td>
        <td><a href="edita-clientes.html?id=${id}"><button type="button" class="btn btn-info">Editar</button></a></td>
        <td><button type="button" class="btn btn-danger" onclick="removeCliente(${id})">Excluir</button</td>
    `;

    linha.innerHTML = conteudoLinha;

    return linha;
};

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

listarClientes().then(clientes => {
    clientes.forEach(indice => {
        corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id));
    });
});