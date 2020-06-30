import { navbar } from './js/navbar.js';
import { about } from './js/about.js';
import { location } from './js/location.js';

let nav = navbar();
let aboutUs = about();
let loc = location();

nav.header();
loc.restaurants();
nav.footer();