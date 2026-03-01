let password = [0, 2, 0, 3]; // ganti sesuai tanggal kalian
let current = [0, 0, 0, 0];

function changeDigit(index, change) {
  current[index] += change;

  if (current[index] > 9) current[index] = 0;
  if (current[index] < 0) current[index] = 9;

  document.getElementById("digit" + index).innerText = current[index];

  checkPassword();
}

function checkPassword() {
  if (current.join("") === password.join("")) {
    window.location.href = "home.html";
  }
}

// ===== FLOWER OVERLAY =====
const flowerBtn = document.getElementById("flowerBtn");
const flowerOverlay = document.getElementById("flowerOverlay");
const closeFlower = document.getElementById("closeFlower");

flowerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  flowerOverlay.classList.add("show");
});

closeFlower.addEventListener("click", function () {
  flowerOverlay.classList.remove("show");
});

flowerOverlay.addEventListener("click", function (e) {
  if (e.target === flowerOverlay) {
    flowerOverlay.classList.remove("show");
  }
});

// ===== LETTER OVERLAY =====
const letterTrigger = document.getElementById("letterTrigger");
const letterOverlay = document.getElementById("letterOverlay");
const closeLetter = document.getElementById("closeLetter");

letterTrigger.addEventListener("click", function () {
  letterOverlay.classList.add("show");
});

closeLetter.addEventListener("click", function () {
  letterOverlay.classList.remove("show");
});

letterOverlay.addEventListener("click", function (e) {
  if (e.target === letterOverlay) {
    letterOverlay.classList.remove("show");
  }
});

// ===== MUSIC =====
const music = document.getElementById("bg-music");
music.volume = 0.4;

document.addEventListener(
  "click",
  function () {
    music.play();
  },
  { once: true },
);
