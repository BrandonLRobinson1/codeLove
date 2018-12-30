console.log('🙇‍♀️ test.... icles');

const createElement = (tag) => document.createElement(tag);
const createElementWithClass = (tag, className) => {
  const newElement = document.createElement(tag);
  newElement.className = className;
  return newElement;
};
const createElementWithAttribute = (tag, attributeType, attribute) => {
  let newElement = document.createElement(tag);
  newElement.setAttribute(attributeType, attribute);
  return newElement
};

const addClass = (thing, className) => thing.classList.add(className);

const form = createElementWithClass('FORM','supaForm');
const name = createElement('INPUT');
const button = createElement('BUTTON');

document.getElementById('form').append(form);