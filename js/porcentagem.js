function CalcularPorcentagem() {
    var numero = Number(document.getElementById("numero").value); // vai pegar o valor do número digitado e transformar em número
    var porcentagem = Number(document.getElementById("porcentagem").value); // faz o mesmo com o número da porcentagem
    var operacao = document.getElementById("operacao").value;  // vai pegar a operação que o usuário escolheu

    // variáveis vazias, mas que depois serão inseridas as informações
    var resultado = "";
    var valorPorcentagem = 0;
    var total = 0;
    var expressao = "";

    // vai ver se o número e a porcentagem é maior que 0
    if (numero > 0 && porcentagem > 0) {
        valorPorcentagem = (numero * porcentagem) / 100; // calcula a porcentagem

        // de acordo com a operação escolhida, vai sendo calculado a porcentagem
        if (operacao == "somar") {
            total = numero + valorPorcentagem;
            resultado = "Resultado final com soma: " + total;
            expressao = numero + " + " + porcentagem + "%"; // vai ciar a expressão para ficar no histórico
        } else if (operacao == "subtrair") {
            total = numero - valorPorcentagem;
            resultado = "Resultado final com subtração: " + total;
            expressao = numero + " - " + porcentagem + "%";
        }
        salvarHistorico("Porcentagem", expressao, total); // vai salvar no histórico a classificação, expressão e resultado
    } else {
        resultado = "Digite valores maiores que zero."; // se os números não forem maiores que 0, será pedido para preecher de novo
    }

    // aqui é a função para salvar o histórico
    function salvarHistorico(tipo, expressao, resultado) {
        const historico = JSON.parse(localStorage.getItem('dbcalc')) || []; // vai pegar o histórico ou criar um novo array se não houver histórico
        historico.push({ tipo, expressao, resultado }); // vai adicionar a conta ao histórico
        localStorage.setItem('dbcalc', JSON.stringify(historico)); // vai salvar o histórico atualizado
    }

    document.getElementById("resultado").innerHTML = resultado; // vai mostrar o resultado da conta na tela do usuário
}