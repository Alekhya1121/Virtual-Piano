// get all keys
const keys = document.querySelectorAll(".key")
const blackKeys = document.getElementsByClassName("black");
const whiteKeys = document.getElementsByClassName("white");
const switcher = document.getElementById("switcher");
var counter = 0;

function playNote(event) {
  
  let audioKeyCode = getKeyCode(event);

  // typed or pressed key
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

  // if key exists
  const cantFoundAnyKey = !key

  if(cantFoundAnyKey) {
    return;
  }

  addPlayingClass(key)
  playAudio(audioKeyCode)
}

function addPlayingClass(key) {
  key.classList.add('playing')
}

function getKeyCode(event) {
  let keyCode;

  const isKeyboard = event.type === "keydown"
  if(isKeyboard) {
    keyCode = event.keyCode
  } else {
    keyCode = event.target.dataset.key
  }

  return keyCode
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
  audio.currentTime = 0;
  audio.play()
}

function removePlayingClass(event) {
  event.target.classList.remove("playing")
}

function registerEvents() {
  // click with mouse
  keys.forEach( function(key) {
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass)
  })

  // keyboard type
  window.addEventListener("keydown", playNote)
}

window.addEventListener("load", registerEvents)


function colorswap() {
  if (counter%3 == 0) {
    for (var i = 0; i < blackKeys.length; i++) {
      blackKeys[i].style.background="rgb(61, 24, 4)";
    }
    for (var j = 0; j < whiteKeys.length; j++) {
      whiteKeys[j].style.background="#e6cfb6";
    }
    switcher.style.backgroundColor="#e6cfb6"
  }
  else if (counter%3 == 1) {
    for (var i = 0; i < blackKeys.length; i++) {
      blackKeys[i].style.background="#612b1a";
    }
    for (var j = 0; j < whiteKeys.length; j++) {
      whiteKeys[j].style.background="#cdf0d4";
    }
    switcher.style.backgroundColor="#cdf0d4"
  }
  else if (counter%3 == 2) {
    for (var i = 0; i < blackKeys.length; i++) {
      blackKeys[i].style.background="black";
    }
    for (var j = 0; j < whiteKeys.length; j++) {
      whiteKeys[j].style.background="white";
    }
    switcher.style.backgroundColor="white"
  }
  counter=counter+1;
}