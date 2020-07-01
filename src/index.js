import { navbar } from './js/navbar.js';
import { about } from './js/about.js';
import { location } from './js/location.js';
import { menu } from './js/menu.js';
import { home } from './js/home.js';
import './style/style.css';


let nav = navbar();
let aboutUs = about();
let loc = location();
let eat = menu();
let landing = home();

nav.header();
landing.render();
eat.render();
aboutUs.info();
loc.restaurants();
nav.footer();

function navigation(link) {
    switch(link) {
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
    }
}



document.querySelectorAll(".hyperlink").forEach(link => link.addEventListener("click", function () {
    navigation(link.id);
}));