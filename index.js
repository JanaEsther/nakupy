import { addItem, list } from './shoplist.js';

const renderList = () => {
  const shoplistElement = document.querySelector('.shoplist');
  shoplistElement.innerHTML = '';
  list.forEach((item) => {
    let tickClass = 'btn-tick';

    if (item.bought) {
      tickClass += ' btn-tick--on';
    }

    shoplistElement.innerHTML += `
      <div class="shopitem">
        <button class="${tickClass}" class="shopitem__tick"></button>
        <div class="shopitem__name">${item.name}</div>
        <div class="shopitem__amount">${item.amount}</div>
        <button class="btn-delete">Smazat</button>
      </div>
    `;
  });

  const deleteButtons = document.querySelectorAll('.shopitem .btn-delete');
  deleteButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      list.splice(index, 1);
      renderList();
    });
  });

  const tickButtons = document.querySelectorAll('.shopitem .btn-tick');
  tickButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      list[index].bought = !list[index].bought;
      renderList();
    });
  });
};

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
