import inicializaCadastro from "./componentes/cadastro/componente-cadastro";
import inicializaTabela from "./componentes/listagem/listagem-cliente";
import { inicializaFormEdicao } from "./componentes/edita/form-edicao";

const rotas = {
    "/": inicializaTabela,
    "/cadastro": inicializaCadastro,
    "/editar" : inicializaFormEdicao
}

const rootDiv = document.querySelector('[data-container]')

const navegacao = pathname => {
    window.history.pushState({}, pathname, window.location.origin + pathname);

    rootDiv.innerHTML = "";
    const iniciarRota = rotas[window.location.pathname];

    rootDiv.appendChild(iniciarRota());
}

// Tornando função 'navegacao' global
window.navegacao = navegacao;

// Método de backspace para zerar a div e adicionar a rota que o app pegou ao voltar
window.onpopstate = () => {
    rootDiv.innerHTML = "";

    // Voltando para rota anterior
    rootDiv.appendChild(rotas[window.location.pathname]());
}

export { navegacao };