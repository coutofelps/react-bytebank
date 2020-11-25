const formCadastroCliente = document.querySelector('[data-form]');

formCadastroCliente.addEventListener('submit', event => {
    event.preventDefault();

    const nome = event.target.querySelector('[data-nome]').value;
    const cpf = event.target.querySelector('[data-cpf]').value;

    if (validaCPF(cpf)) {
        cadastrarClientes(nome.value, cpf.value);
    } else {
        alert('CPF não é válido.');
    }
});