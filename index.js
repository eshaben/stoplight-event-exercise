(function() {
  'use strict';
})();

var selectStop = document.querySelector('#stopButton')
var selectSlow = document.querySelector('#slowButton')
var selectGo = document.querySelector('#goButton')
var lightStop = document.querySelector('#stopLight')
var lightSlow = document.querySelector('#slowLight')
var lightGo = document.querySelector('#goLight')


console.log(selectStop)
console.log(selectSlow)
console.log(selectGo)

selectStop.addEventListener('click', function(){
  lightStop.classList.toggle('stop')
})

selectSlow.addEventListener('click', function(){
  lightSlow.classList.toggle('slow')
})

selectGo.addEventListener('click', function(){
  lightGo.classList.toggle('go')
})

selectStop.addEventListener('mouseenter', function(){
  console.log("Entered " + selectStop.textContent + " button")
})

selectStop.addEventListener('mouseleave', function(){
  console.log("Left " + selectStop.textContent + " button")
})

selectSlow.addEventListener('mouseenter', function(){
  console.log("Entered " + selectSlow.textContent + " button")
})

selectSlow.addEventListener('mouseleave', function(){
  console.log("Left " + selectSlow.textContent + " button")
})

selectGo.addEventListener('mouseenter', function(){
  console.log("Entered " + selectGo.textContent + " button")
})

selectGo.addEventListener('mouseleave', function(){
  console.log("Left " + selectGo.textContent + " button")
})
