// jshint esversion: 6
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import {render as renderHome} from './home';
import {render as renderMenu} from './menu';
import {render as renderAbout} from './about';

function reset() {
  const content = document.querySelector('.content');
  content.className = 'content row';
  content.innerHTML = '';
}

function setup() {
  reset();
  renderHome();
  document.querySelectorAll('.nav-item').forEach(nav => {
    nav.addEventListener('click', e => {
      reset();
      const id = e.target.id;
      activateMenu(id);
      renderChoice(id);
    });
  });
}

function activateMenu(menu) {
  Array.from(document.querySelector('.navbar-nav').children).forEach(child => {
    child.classList.remove('active');
  });

  document.querySelector(`#${menu}`).classList.add('active');
}

function renderChoice(page) {
  switch (page) {
    case 'home':
      renderHome();
      break;
    case 'menu':
      renderMenu();
      break;
    case 'about':
      renderAbout();
      break;
    // case 'contact':
    //   renderContact();
    //   break;
  }
}

setup();
