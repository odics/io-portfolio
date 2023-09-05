const readMore = document.getElementById("readmore");
const readMore2 = document.getElementById("readmore2");

const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");

const moreContainer = document.getElementById("more-text");
const moreContainer2 = document.getElementById("more-text2");

readMore.addEventListener("click", () => {
  moreContainer.classList.toggle("active");
  arrow1.classList.toggle("rotate-up");
});

readMore2.addEventListener("click", () => {
  moreContainer2.classList.toggle("active");
  arrow2.classList.toggle("rotate-up");
});
