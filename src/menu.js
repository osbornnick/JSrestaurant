// jshint esversion: 6

const menu = ['Everything', 'Sesame', 'Plain', 'Garlic', 'Cinnamon raisin', 'Poppy seed'];
function menuList(menu) {
  const list = document.createElement('ul');
  list.className = 'menu';

  menu.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });

  return list;
}

export function render() {
  const row = document.querySelector('.content');
  row.classList.add('justify-content-center');
  row.classList.add('flex-grow-1');
  row.classList.add('align-items-center');

  row.appendChild(menuList(menu));

}
