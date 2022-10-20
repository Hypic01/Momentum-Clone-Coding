'use strict'

let hourHTML = document.querySelector('.hour');
let minuteHTML = document.querySelector('.minute');




function clock() {
  let time = new Date();
  
  let hour = String(time.getHours()).padStart(2, 0);
  let minute = String(time.getMinutes()).padStart(2, 0);

  hourHTML.innerHTML = hour;
  minuteHTML.innerHTML = minute;
  
}

clock();
setInterval(clock, 1000);
