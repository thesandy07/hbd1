function showMessage() {
  const message = document.getElementById('extraMessage');
  message.innerHTML = "“Let’s party so hard that your future kids feel it! Happy Birthday, you legend!” 🔥😎";
  message.style.opacity = 1;

  document.body.style.background = "linear-gradient(135deg, #a18cd1, #fbc2eb)";

   var song = document.getElementById("birthdaySong");
   song.play();

  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 110 + "vw";
    confetti.style.animationDelay = Math.random() * 5 + "s";
    confetti.style.setProperty('--rand', Math.random());
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 100000);
  }
}
