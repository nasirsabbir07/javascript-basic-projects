window.addEventListener("keydown", playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //attribute selector
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

  if (!audio) return; //*stop the function from running upon no designated key
  audio.currentTime = 0; //* rewind to start
  audio.play();
  key.classList.add("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //*skip it if not a transform
  this.classList.remove("playing");
}
