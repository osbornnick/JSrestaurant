// jshint esversion: 6
export function render() {
  const row = document.querySelector('.content');
  row.classList.add('justify-content-center');
  row.classList.add('flex-grow-1');
  row.classList.add('align-items-center');

  const h1 = document.createElement('h1');
  h1.textContent = "Detroit's best noshing.";

  row.appendChild(h1);
}
