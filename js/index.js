const readMore = document.getElementById("readmore");
const readMore2 = document.getElementById("readmore2");

const moreContainer = document.getElementById("more-text");
const moreContainer2 = document.getElementById("more-text2");

readMore.addEventListener("click", () => {
  moreContainer.classList.toggle("active");
});

readMore2.addEventListener("click", () => {
  moreContainer2.classList.toggle("active");
});
