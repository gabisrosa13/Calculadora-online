function VerificarPalavra() {
    var p1 = document.getElementById("palavra1").value; //pega no htmlç oq está com id Palavra1
    var p2 = document.getElementById("palavra2").value;

    var juncao = p1 + p2; // concatenação das palavras
    var qtd = juncao.length; // calcula a quantidade de caracteres

    // Exibe o resultado na tela
    document.getElementById("resultado").innerHTML =
        `A concatenação das palavras é "${juncao}" e a quantidade de letras de "${juncao}" é ${qtd}.`;

    // Faz com que salve o historico
    salvarHistorico("Concatenação", `"${p1}" + "${p2}"`, `${juncao} - ${qtd} caracteres`);
}

//salvar o histórico no LocalStorage
function salvarHistorico(tipo, expressao, resultado) {
    const historico = JSON.parse(localStorage.getItem('dbcalc')) || []; // Pega o histórico armazenado ou cria um novo
    historico.push({ tipo, expressao, resultado }); // Adiciona o novo histórico
    localStorage.setItem('dbcalc', JSON.stringify(historico)); // Armazena o novo histórico
}