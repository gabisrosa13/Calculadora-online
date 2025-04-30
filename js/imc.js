function CalcularIMC() {
    var peso = Number(document.getElementById("peso").value); // vai pegar o valor do peso digitado e transformar em número
    var altura = Number(document.getElementById("altura").value); // faz o mesmo com a altura

    // variáveis vazias, mas que depois serão inseridas as informações
    var resultado = "";
    var imc = "";
    var expressao = "";
    var total = "";

    // vai ver se o peso e a altura é maior que 0
    if (peso > 0 && altura > 0) {
        imc = peso / (altura * altura); // calcula o imc
        imc = imc.toFixed(2); // vai colocar duas casas decimais no imc

        // de acordo com o resultado, vai classificando o IMC do usuário
        if (imc < 18.5) { 
            resultado = "IMC: " + imc + " - Abaixo do peso";
            total = imc + " - Abaixo do peso"; // expressão que vai ser salva no histórico
        } else if (imc < 24.9) {
            resultado = "IMC: " + imc + " - Peso normal";
            total = imc + " - Peso normal";
        } else if (imc < 29.9) {
            resultado = "IMC: " + imc + " - Sobrepeso";
            total = imc +  " - Sobrepeso";
        } else if (imc < 34.9) {
            resultado = "IMC: " + imc + " - Obesidade Grau I";
            total = imc + " - Obesidade Grau I";
        } else if (imc < 39.9) {
            resultado = "IMC: " + imc + " - Obesidade Grau II";
            total = imc + " - Obesidade Grau II";
        } else {
        resultado = "IMC: " + imc + " - Obesidade Grau III";
        total = imc + " - Obesidade Grau III";
    }
    } else {
        resultado = "Digite valores maiores que zero."; // se o peso ou altura não for maior que 0, será pedido para preecher de novo
    }

    // vai ciar a expressão para ficar no histórico
    expressao = peso + "kg / (" + altura + "m * " + altura + "m)";

    // vai salvar no histórico a classificação, expressão e resultado 
    salvarHistorico("IMC", expressao, total);

    // aqui é a função para salvar o histórico
    function salvarHistorico(tipo, expressao, resultado) {
        const historico = JSON.parse(localStorage.getItem('dbcalc')) || []; // vai pegar o histórico ou criar um novo array se não houver histórico
        historico.push({ tipo, expressao, resultado }); // vai adicionar a conta ao histórico
        localStorage.setItem('dbcalc', JSON.stringify(historico)); // vai salvar o histórico atualizado
    }

    document.getElementById("resultado").innerHTML = resultado; // vai mostrar o resultado do IMC na tela do usuário
}