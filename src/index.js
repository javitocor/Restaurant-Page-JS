import { navbar } from './js/navbar.js';
import { about } from './js/about.js';
import { location } from './js/location.js';
import { menu } from './js/menu.js';
import { home } from './js/home.js';

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