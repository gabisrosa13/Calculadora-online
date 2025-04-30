document.getElementById('formData').addEventListener('submit', function(event) { ////puxa o form do html com id 'formData' e coloca um ouvinte de evento pra quando o formulario for enviado
    event.preventDefault(); //impede o envio padrao do formulario que iria recarregar a pagina

    const hoje = new Date(); //cria um objeto date com a data de hoje
    const dataEvento = new Date(document.getElementById('dataEvento').value); //cria um objeto date com a data que a pessoa inseriu no elemento com id 'dataEvento'

    //zera as horas da data atual e da data do evento para comparar só os dias
    hoje.setHours(0, 0, 0, 0);
    dataEvento.setHours(0, 0, 0, 0);

    const diferencaMs = dataEvento - hoje; //calcula a diferença em milisegundos da data do evento e da data de hoje

    const resultado = document.getElementById('resultado'); //puxa o elemento com id 'resultado' que é onde ira aparecer o resultado

    if (isNaN(dataEvento)) { //verifica se a data escolhida é valida
      resultado.innerText = "Por favor, escolha uma data válida."; //se não for, retorna essa mensagem
      return;
    }
 
    if (diferencaMs < 0) { //verifica se a data ja passou (já que o tempo é menor que 0)
      resultado.innerText = "Essa data já passou.";
    } else if (diferencaMs === 0) { //verfica se o evento é hoje (se o tempo for igual a 0)
      resultado.innerText = "O evento é hoje!";
    } else { //else pra se o evento ainda vai acontecer
      const dias = Math.ceil(diferencaMs / (1000 * 60 * 60 * 24)); //converte milissegundos para dias (1000 ms = 1 segundo, 60 segundos * 60 = 1 hora e 1 hora * 24 = 1 dia), ele divide a diferença entre as datas em milissegundos pela quantidade de milissegundos em 1 dia. Math.ceil() serve pra arredondar o número pra cima pois mesmo se faltar apenas uma parte do dia para o evento, ele mostrara que falta o dia inteiro.
      resultado.innerText = `Faltam ${dias} dia(s) para o evento.`; //exibe o resultado na página, '${dias}' serve pra inserir uma variavel dentro da string
    }

// crud
    const novoRegistro = {
        tipo: "Data",
        expressao: `Evento em: ${dataEvento.toLocaleDateString()}`,
        resultado: resultado.innerText
    };

    const historico = JSON.parse(localStorage.getItem('dbcalc')) ?? [];
    historico.push(novoRegistro);
    localStorage.setItem('dbcalc', JSON.stringify(historico));
});
