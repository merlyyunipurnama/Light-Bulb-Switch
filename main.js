const off = document.getElementById("off");
const image = document.getElementById("image");
const on = document.getElementById("on");
const onSound = new Audio("on-sound.mp3");
const offSound = new Audio("off-sound.mp3");

off.addEventListener("click", () => {
  image.src = "off.png";
  offSound.play();
});

on.addEventListener("click", () => {
  image.src = "on.png";
  onSound.play();
});
