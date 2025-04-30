// pega os botões da tela e o lugar onde aparece o resultado
const btnPotencia = document.querySelector("#btn-potencia");
const btnRaiz = document.querySelector("#btn-raiz");
const resultado = document.querySelector("#resultado");


btnPotencia.addEventListener("click", function() {
  // pega os números que a pessoa digitou em cima
  const base = Number(document.querySelector("#base").value);
  const expoente = Number(document.querySelector("#expoente").value);

  // faz a conta de potência
  const potencia = base ** expoente;

  // mostra o resultado
  resultado.textContent = `Resultado de ${base} ^ ${expoente} = ${potencia}`;
});


btnRaiz.addEventListener("click", function() {
  // pega o número que a pessoa digitou pra calcular a raiz
  const numero = Number(document.querySelector("#raiz").value);

  // calcula a raiz quadrada
  const raiz = numero ** 0.5;

  // mostra o resultado na tela
  resultado.textContent = `Raiz quadrada de ${numero} = ${raiz}`;
});
