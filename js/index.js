/*
  Military Time Clock - index.js
  Author: Eric Liang
  Date: 9/21/2018
*/

var clock = document.getElementById('clock');

// Gets the current time and return as array.
function time() {
  var date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  var arr = [hours, minutes, seconds].map(function(num) {
    // 0 Padding If Single Digit
    return num < 10 ? "0" + num : String(num);
  });
  //return arr[0] + arr[1] + arr[2]; // Return Time As Separate Values
  return arr; // Return Time As Array Value
}

// Update Time Every Second
setInterval(function() {
  // Update Time Text
  clock.innerHTML = time().join(':');
  // Update Background Color via Time -> RGB
  document.body.style.backgroundColor = 'rgb(' + time().join(', ') + ')';
}, 1000);
