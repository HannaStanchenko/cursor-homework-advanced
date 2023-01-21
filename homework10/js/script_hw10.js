function forKeyboard(e) {
    const audio = document.querySelector(`audio[id="${e.keyCode}"]`);
    const key = document.querySelector(`.key[id="${e.keyCode}"]`);
    playSound(audio, key)
};
function forMouse (e) {
  const audio = document.querySelector(`audio[id="${e.getAttribute("id")}"]`);
  const key = document.querySelector(`.key[id="${e.getAttribute("id")}"]`);
  playSound(audio, key)
};
function removeTransition (e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing")
};
function playSound (audio, key) {
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing")
};

const keys = document.querySelectorAll(".key");
for(let el of keys) {
  el.addEventListener("click", () => forMouse(el), true);
  el.addEventListener("transitionend", removeTransition)
};
window.addEventListener("keydown", forKeyboard);