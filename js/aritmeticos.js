function VerificarNumero() { // essa é a função que vai calcular a operação de acordo com a operação escolhida
    var numero1 = Number(document.getElementById("numero1").value); // vai pegar o valor do primeiro número digitado e transformar em número
    var numero2 = Number(document.getElementById("numero2").value); // faz o mesmo com o segundo número
    var operacao = document.getElementById("operacao").value; // vai pegar a operação que o usuário escolheu

    // variáveis vazias, mas que depois serão inseridas as informações
    var resultado = "";
    var total = "";
    var expressao = "";

    // vai ver se o número 1 e o número 2 são diferentes de 0
    if (numero1 != 0 && numero2 != 0) {
        if (operacao == "somar") { // de acordo com a escolha da operação do usuário vai calculando o resultado
            total = numero1 + numero2; // vai somar
            resultado = "Resultado: " + total; // concatenação do "resultado" com o total
            expressao = numero1 + " + " + numero2; // concatenação para soma - e só depois só vai adaptando para a opreção escolhida
        } else if (operacao == "subtrair") {
            total = numero1 - numero2;
            resultado = "Resultado: " + total;
            expressao = numero1 + " - " + numero2;
        } else if (operacao == "multiplicar") {
            total = numero1 * numero2;
            resultado = "Resultado: " + total;
            expressao = numero1 + " * " + numero2;
        } else if (operacao == "dividir") {
            total = numero1 / numero2;
            resultado = "Resultado: " + total;
            expressao = numero1 + " / " + numero2;
        } else {
            total = numero1 % numero2;
            resultado = "Resultado: " + total;
            expressao = numero1 + " % " + numero2;
        }
        salvarHistorico("Aritmético", expressao, total); // vai salvar o histórico
    } else {
        resultado = "Digite valores maiores que zero."; // se os números não forem diferentes de 0, será pedido para preecher de novo
    }

    // aqui é a função para salvar o histórico
    function salvarHistorico(tipo, expressao, resultado) {
        const historico = JSON.parse(localStorage.getItem('dbcalc')) || []; // vai pegar o histórico ou criar um novo array se não houver histórico
        historico.push({ tipo, expressao, resultado }); // vai adicionar a conta ao histórico
        localStorage.setItem('dbcalc', JSON.stringify(historico)); // vai salvar o histórico atualizado
    }

    document.getElementById("resultado").innerHTML = resultado; // vai mostrar o resultado da conta na tela do usuário
}