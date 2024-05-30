/**
 * Função para gerar a tabuada de um número
 */
function gerarTabuada() {
    const numero = document.getElementById('numero').value;
    const resultadoDiv = document.getElementById('resultado');
    const mensagemErro = document.getElementById('mensagemErro');

    // Limpa mensagens anteriores
    resultadoDiv.innerHTML = '';
    mensagemErro.textContent = '';

    // Verifica se o número é um inteiro válido
    if (numero === '' || isNaN(numero) || !Number.isInteger(Number(numero))) {
        mensagemErro.textContent = 'Por favor, insira um número inteiro válido.';
        return;
    }

    // Converte a entrada para número inteiro
    const num = parseInt(numero);

    // Gera a tabuada de 1 a 10
    let resultado = `<p>Tabuada do ${num}:</p>`;
    for (let i = 1; i <= 10; i++) {
        resultado += `<p>${num} x ${i} = ${num * i}</p>`;
    }

    // Exibe o resultado na página
    resultadoDiv.innerHTML = resultado;
}