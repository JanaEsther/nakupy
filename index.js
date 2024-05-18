import { addItem, list } from './shoplist.js';
import { renderList } from './render.js';

const addBtn = document.querySelector('.btn-add');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const nameInput = document.querySelector('#input-name');
  const amountInput = document.querySelector('#input-amount');

  addItem(nameInput.value, amountInput.value);

  renderList();

  nameInput.value = '';
  amountInput.value = '';
});

renderList();
