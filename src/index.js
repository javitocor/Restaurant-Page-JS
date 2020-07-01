import { navbar } from './js/navbar.js';
import { about } from './js/about.js';
import { location } from './js/location.js';
import { menu } from './js/menu.js';

let nav = navbar();
let aboutUs = about();
let loc = location();
let eat = menu();

nav.header();
eat.render();
aboutUs.info();
loc.restaurants();
nav.footer();