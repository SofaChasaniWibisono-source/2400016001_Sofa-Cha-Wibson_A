const box = document.getElementById("box");
const scoreDisplay = document.getElementById("score");
const gameArea = document.getElementById("gameArea");

let skor = 0;
let berjalan = true;

function acakPosisi() {
  if (!berjalan) return;
  const maxX = gameArea.clientWidth - box.clientWidth;
  const maxY = gameArea.clientHeight - box.clientHeight;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
}

box.addEventListener("click", () => {
  skor++;
  scoreDisplay.textContent = "Skor: " + skor;
  acakPosisi();
});

function mulaiGame() {
  skor = 0;
  berjalan = true;
  scoreDisplay.textContent = "Skor: 0";
  acakPosisi();
  gerakOtomatis();
}

function gerakOtomatis() {
  const interval = setInterval(() => {
    if (!berjalan) {
      clearInterval(interval);
      return;
    }
    acakPosisi();
  }, 800);

  setTimeout(() => {
    berjalan = false;
    alert("Waktu Habis! Skor Akhir: " + skor);
  }, 60000); // durasi 60 detik
}

mulaiGame();
