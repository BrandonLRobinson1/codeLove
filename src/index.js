import _ from 'lodash';
import axios from 'axios';
import me from './me.png';
import './index.css';

console.log('🙇‍♀️ test.... icles');

const getByID = (name) => document.getElementById(name);
const getByClass = (name) => document.getElementsByClassName(name); // returns array like thing so you have to isolate
const createElement = (tag) => document.createElement(tag);
const createElementWithClass = (tag, className) => {
  const newElement = document.createElement(tag);
  newElement.className = className;
  return newElement;
};
const createElementWithAttribute = (tag, attributeType, attribute) => {
  const newElement = document.createElement(tag);
  newElement.setAttribute(attributeType, attribute);
  return newElement
};

const addClass = (thing, className) => thing.classList.add(className);

const header = createElement('h2');
header.innerHTML = 'title';
document.getElementsByTagName('body')[0].append(header);

const entryPoint = createElement('DIV');
entryPoint.id = 'form';
document.getElementsByTagName('body')[0].append(entryPoint);

const form = createElementWithClass('FORM','supaForm');
const name = createElementWithClass('INPUT', 'name');
const password = createElementWithClass('INPUT', 'password');

const button = createElementWithClass('BUTTON', 'buttonBoys');
button.innerHTML = 'button gawd';

// let myIcon = new Image(); // remove
// myIcon.src = me; // remove

getByID('form').append(form);
getByClass('supaForm')[0].append(name);
getByClass('supaForm')[0].append(password);
getByClass('supaForm')[0].append(button);

// getByID('form').append(myIcon) // remove

document.getElementsByClassName('buttonBoys')[0].addEventListener("click", function(e){
  e.preventDefault();
  const nameVal = name.value;
  const passVal = password.value;

  // axios(`/logthename/${nameVal}`)
  //   .then(data => console.log('🏀', data))
  //   .catch(err => console.log('⚽', err));

  axios.post(`/home`, {
    user: {
      "email": "bonaroo@gmail.com",
      "password": "jeatsass"
    }
  })
    .then(data => console.log('🏀', data))
    .catch(err => console.log('⚽', err));

  name.value = '';
  password.value = '';
  return
});