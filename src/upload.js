import _ from 'lodash';
import axios from 'axios';
import './index.css';

console.log('🙇‍♀️ test.... icles2');

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

const entryPoint = createElement('DIV');
entryPoint.id = 'form';
document.getElementsByTagName('body')[0].append(entryPoint);

const uploadForm = createElementWithClass('FORM','uploadForm');
uploadForm.action = '/upload'; //this is how this button just automatically just makes call
uploadForm.method = 'post';
uploadForm.enctype = 'multipart/form-data';

const upload = createElementWithClass('INPUT', 'photoUpload');
upload.type = 'file';
upload.name = 'photo'; // *** photo upload will fail withouth this * also, req.body.photo ... whatever "name" is is on the req.body
upload.accept = 'image/gif, image/gif, image/png, image/jpeg';
const uploadPhotoButton = createElementWithClass('BUTTON', 'uploadPhotoButton');
uploadPhotoButton.type = 'submit';
uploadPhotoButton.value = 'submit';
uploadPhotoButton.innerHTML = 'submit';
uploadPhotoButton.name = 'photoTing';


// getByID('form').append(myIcon) // remove

getByID('form').append(uploadForm);
getByClass('uploadForm')[0].append(upload);
getByClass('uploadForm')[0].append(uploadPhotoButton);

