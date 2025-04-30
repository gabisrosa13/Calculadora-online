
function calcular() { // botão que executa o calculo (foi chamado no html)
    var valor1 = document.getElementById("valor1").value === "true";
    var valor2 = document.getElementById("valor2").value === "true"; // pega o valor1 e o valor2 e converte de string(sequencia de caracteres) para boolenao(verdadeiro ou falso)
    var operacao = document.getElementById("operacao").value;
    var resultado; // armazena o resultado da operação

    // verifica qual operação foi escolhida 
    if (operacao === "and") {  // "===" é comparação -> ve se os dois valores são iguais e do mesmo tipo
        resultado = valor1 && valor2;  // "&&" E -> ele retorna 'verdadeiro' somente quando os dois valores forem iguais(verdadeiros)
    } else if (operacao === "or") {
        resultado = valor1 || valor2;  // "||" OU -> ele retorna 'verdadeiro' se pelo menos um dos valores forem verdadeiro
    } else if (operacao === "not") {
        resultado = !valor1;   // "!" NÃO -> inverte o resultado do 'valor1'
    }

    // mostra o resultado no html dentro do id="resultado"
    if (resultado === true) {  // verifica se o resultado é 'verdadeiro'
        document.getElementById("resultado").textContent = "Verdadeiro";  //se for verdadeiro, vai exibir a resposta "Verdadeiro" no id="resultado"
    } else {   // ele aparece caso a condição do if for falso
        document.getElementById("resultado").textContent = "Falso";   //depois do else, se for o resultado for falso, vai exibir a resposta "Falso" no id="resultado"
    }

    // crud

    function salvarHistorico(tipo, expressao, resultado) {
        const historico = JSON.parse(localStorage.getItem('dbcalc')) || [];
        historico.push({ tipo, expressao, resultado });
        localStorage.setItem('dbcalc', JSON.stringify(historico));
    }

    // Gera a expressão de forma legível
    let expressao;
    if (operacao === "not") {
        expressao = `!${valor1}`;
    } else {
        expressao = `${valor1} ${operacao.toUpperCase()} ${valor2}`;
    }

    // Chama a função para salvar
    salvarHistorico("Lógica", expressao, resultado ? "Verdadeiro" : "Falso");
}
