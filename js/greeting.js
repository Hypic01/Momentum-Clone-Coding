'use strict'

let user = [];
let greetingText = document.querySelector('.greeting-text');
let inputHTML = document.querySelector('.input');
let headerHTML = document.querySelector('.header');
let footerHTML = document.querySelector('.footer');
let todoHTML = document.querySelector('.todo');
let todoTextHTML = document.querySelector('.todo-text');
let todoInputHTML = document.querySelector('.todo-input');

inputHTML.addEventListener('keypress', checkUserEvent);

function checkUserEvent(e) {
  if(e.key === 'Enter'){
    e.preventDefault();
    checkUser(inputHTML.value);
  }
}

function todoEvent(e) {
  if(e.key === 'Enter'){
    e.preventDefault();
    todo(inputHTML.value);
  }
}

function checkUser(name){
  if(user.includes(name)) {
    fadeOut(greetingText);
    greetingText.innerHTML = `Welcome back, ${name}!`;
    fadeIn(greetingText);
    
  } else {
    user.push(name);

    let time = new Date();
    let hour = time.getHours();
    
    fadeOut(greetingText);
    if(hour < 11) greetingText.innerHTML = `Good morning, ${name}.`;
    if(hour < 18) greetingText.innerHTML = `Good afternoon, ${name}.`;
    else greetingText.innerHTML = `Good evening, ${name}.`;
    fadeIn(greetingText);
  }
  inputHTML.value = '';
  // inputHTML.style.
  headerHTML.classList.remove('hidden');
  footerHTML.classList.remove('hidden');
  todoHTML.classList.remove('hidden');

  fadeIn(headerHTML);
  fadeIn(footerHTML);
  setTimeout(fadeIn(todoHTML), 1000);

  inputHTML.style.top = '75%';
  // inputHTML.addEventListener('keypress', function(e){
  //   if(e.key === 'Enter'){
  //     e.preventDefault();
  //     todo(inputHTML.value);
  //     }
  //   });
  
  inputHTML.removeEventListener('keypress', checkUserEvent);
  inputHTML.addEventListener('keypress', todoEvent);
}


function todo(todoText){
  todoTextHTML.innerHTML = "TODAY";
  todoInputHTML.innerHTML = todoText;
  todoInputHTML.classList.remove('hidden');
  inputHTML.classList.add('hidden');
  todoTextHTML.style.fontWeight = '600';
  todoTextHTML.style.fontSize = '2.5rem';
  fadeIn(todoTextHTML);
  fadeIn(todoInputHTML);
  inputHTML.value = '';
}

const fadeOutAnimation = [
  { opacity: 1 }, { opacity: 0 }
];

const fadeInAnimation = [
  { opacity: 0 }, { opacity: 1 }
];

const duration = { duration: 1000, iterations: 1 };

function fadeOut(src){
  src.animate(fadeOutAnimation, duration);
}

function fadeIn(src){
  src.animate(fadeInAnimation, duration);
}

