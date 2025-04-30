const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const sTipo = document.querySelector('#m-tipo');
const sExpressao = document.querySelector('#m-expressao');
const sResultado = document.querySelector('#m-resultado');
const btnSalvar = document.querySelector('#btnSalvar');

let registros;
let id;

function openModal(edit = false, index = 0) {
  modal.classList.add('active');

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active');
    }
  };

  if (edit) {
    sTipo.value = registros[index].tipo;
    sExpressao.value = registros[index].expressao;
    sResultado.value = registros[index].resultado;
    id = index;
  }
}

function editItem(index) {
  openModal(true, index);
}

function deleteItem(index) {
  registros.splice(index, 1);
  setItensBD();
  loadItens();
}

function insertItem(item, index) {
  let tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${item.tipo}</td>
    <td>${item.expressao}</td>
    <td>${item.resultado}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit'></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `;

  tbody.appendChild(tr);
}

btnSalvar.onclick = e => {
  e.preventDefault();

  if (sTipo.value === '' || sExpressao.value === '' || sResultado.value === '') return;

  if (id !== undefined) {
    registros[id].tipo = sTipo.value;
    registros[id].expressao = sExpressao.value;
    registros[id].resultado = sResultado.value;
  }

  setItensBD();
  modal.classList.remove('active');
  loadItens();
  id = undefined;
};

function loadItens() {
  registros = getItensBD();
  tbody.innerHTML = '';
  registros.forEach((item, index) => insertItem(item, index));
}

const getItensBD = () => JSON.parse(localStorage.getItem('dbcalc')) ?? [];
const setItensBD = () => localStorage.setItem('dbcalc', JSON.stringify(registros));

loadItens();

