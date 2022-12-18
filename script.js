const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const stopAnimation = document.getElementById("root");
const displayHeroSection = document.getElementById("hero");
const hiddenElements = document.querySelectorAll(".hidden");
const enableFunctionality = document.querySelectorAll(".enableFunctionality");
hiddenElements.forEach((el) => observer.observe(el));

function playMusic() {
  var audio = new Audio("asdf.mp3");
  audio.play();
}

function pageScroll() {
  window.scrollBy(0, 1);
  scrolldelay = setTimeout(pageScroll, 50);
}

setTimeout(() => {
  stopAnimation.innerText = "";
}, 2000);

setTimeout(() => {
  document.body.style.display = "block";
  displayHeroSection.style.display = "grid";
  displayHeroSection.style.opacity = 1;
}, 3000);

setTimeout(() => {
  displayHeroSection.style.display = "none";
}, 4500);

setTimeout(() => {
  enableFunctionality.forEach((el) => (el.style.display = "flex"));
  playMusic();
  setupTimers();
}, 6000);

var timeoutInMiliseconds = 5000;
var timeoutId;

function startTimer() {
  timeoutId = window.setTimeout(pageScroll, timeoutInMiliseconds);
}

function resetTimer() {
  window.clearTimeout(timeoutId);
  startTimer();
}

function setupTimers() {
  document.addEventListener("mousemove", resetTimer);
  document.addEventListener("mousedown", resetTimer);
  document.addEventListener("keypress", resetTimer);
  document.addEventListener("touchmove", resetTimer);

  startTimer();
}
