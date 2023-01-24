const menuToggle = document.querySelector('.toggle')
const pg1 = document.querySelector('.pg1')

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  pg1.classList.toggle('active')
});

// slideshow cotrols 

const next = document.getElementById("next");
const prev = document.getElementById("prev");
const slider = document.querySelector(".slider");
const img = document.querySelectorAll(".slider img");

let index = 0;
let width = img[index].clientWidth;

next.addEventListener("click", () => {
  index++;

  slider.style.transform = `translate(${-index * (width + 10)}px)`;

  if (index === img.length -1) {
    next.classList.add("disable");
  } else {
    prev.classList.remove("disable")
  }
});

prev.addEventListener("click", () => {
  index--;

  slider.style.transform = `translate(${-index * (width + 10)}px)`;

  if (index === 0) {
    prev.classList.add("disable");
  } else {
    next.classList.remove("disable");
  }
});

prev.classList.add("disable")