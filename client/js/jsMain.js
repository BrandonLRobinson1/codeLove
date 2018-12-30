console.log('🙇‍♀️ test.... icles');

const createElement = (tag) => document.createElement(tag);
const addClass = (thing, className) => thing.classList.add(className);

const form = createElement('FORM');
addClass(form, 'superForm');

const name = createElement('INPUT');
const button = createElement('BUTTON');

document.getElementById('form').append(form);
