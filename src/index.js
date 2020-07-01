import { navbar } from './js/navbar';
import { about } from './js/about';
import { location } from './js/location';
import { menu } from './js/menu';
import { home } from './js/home';
import './style/style.css';


const nav = navbar();
const aboutUs = about();
const loc = location();
const eat = menu();
const landing = home();

nav.header();
landing.render();
eat.render();
aboutUs.info();
loc.restaurants();
nav.footer();

function navigation(link) {
  switch (link) {
    case '0':
      landing.main.classList.remove('hide');
      eat.main.classList.add('hide');
      aboutUs.main.classList.add('hide');
      loc.main.classList.add('hide');
      break;
    case '1':
      landing.main.classList.add('hide');
      eat.main.classList.remove('hide');
      aboutUs.main.classList.add('hide');
      loc.main.classList.add('hide');
      break;
    case '2':
      landing.main.classList.add('hide');
      eat.main.classList.add('hide');
      aboutUs.main.classList.remove('hide');
      loc.main.classList.add('hide');
      break;
    case '3':
      landing.main.classList.add('hide');
      eat.main.classList.add('hide');
      aboutUs.main.classList.add('hide');
      loc.main.classList.remove('hide');
      break;
    default:
  }
}


document.querySelectorAll('.hyperlink').forEach(link => link.addEventListener('click', () => {
  navigation(link.id);
}));