'use strict'

const images = [1, 2, 3, 4, 5, 6, 7];
let num = Math.floor(Math.random() * 7 + 1);

const bgImage = document.createElement("img");

bgImage.src = `img/img-${num}.png`;

document.body.querySelector('.container').appendChild(bgImage);
bgImage.classList.add("bgImage");