'use strict'

let quoteHTML = document.querySelector('.quote-text');
let url = 'https://api.quotable.io/random?maxLength=50';

async function getapi(url){
  const response = await fetch(url);
  var data = await response.json();
  return data.content;
}

getapi(url).then((data) => quoteHTML.innerHTML = `"${data}"`);