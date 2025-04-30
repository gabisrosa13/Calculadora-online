document.getElementById('numeros').addEventListener('submit', function(event) { //puxa o form do html com id 'numeros' e coloca um ouvinte de evento pra quando o formulario for enviado
    event.preventDefault(); //impede o envio padrao do formulario que iria recarregar a pagina

    const numero1 = Number(document.getElementById('numero1').value); //pega o valor que a pessoa insere no espaço com id 'numero 1' e converte essa string pra numero 
    const numero2 = Number(document.getElementById('numero2').value); //pega o valor que a pessoa insere no espaço com id 'numero 2' e converte essa string pra numero 

    let resultado = ''; //inicializa a variavel resultado como uma string vazia

    if (numero1 > numero2) { //verifica se o numero1 é maior que o numero 2
        resultado = numero1 + ' > ' + numero2; //se for maior, atribui a variavel resultado que o numero1 é maior que o numero2
    } else if (numero1 < numero2) { //verifica se o numero1 é menor que o numero 2
        resultado = numero1 + ' < ' + numero2; //se for menor, atribui a variavel resultado que o numero1 é menor que o numero2
    } else { //se nao for maior nem menor então sao iguais
        resultado = numero1 + ' = ' + numero2; //atribui a variavel resultado que os numeros são iguais
    }

    document.getElementById('resultado').innerText = resultado; //mostra o resultado na pagina no elemento com id 'resultado'

// crud

    const novoRegistro = {
        tipo: "Relacional",
        expressao: `${numero1} e ${numero2}`,
        resultado: resultado
    };

    const historico = JSON.parse(localStorage.getItem('dbcalc')) ?? [];
    historico.push(novoRegistro);
    localStorage.setItem('dbcalc', JSON.stringify(historico));
});
