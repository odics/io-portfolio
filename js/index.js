const dropdownButtons = document.querySelectorAll(".dropdown-button");
const projectImages = document.querySelectorAll(".img-one");

dropdownButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const contentID = button.getAttribute("data-target");
    const contentBox = document.getElementById(contentID);

    button.querySelector("i").classList.toggle("rotate-up");

    contentBox.classList.toggle("active");
  });
});

const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".img-modal");

projectImages.forEach((image) => {
  image.addEventListener("click", () => {
    modalOverlay.classList.toggle("display-modal");
    modal.classList.toggle("display-modal");
  });
});

const modalCloseButton = document
  .querySelector(".modal-close-button")
  .addEventListener("click", () => {
    modalOverlay.classList.toggle("display-modal");
    modal.classList.toggle("display-modal");
  });

function isCardInViewport(element) {
  const rect = element.getBoundingClientRect();
  const height = window.innerHeight || document.documentElement.clientHeight;
  const width = window.innerWidth || document.documentElement.clientWidth;
  const offset = { left: 0, right: 0, top: 0, bottom: 0 };
  return (
    rect.right >= -offset.left &&
    rect.bottom >= -offset.top &&
    rect.left <= width + offset.right &&
    rect.top <= height + offset.bottom
  );
}

const projectCard = document.querySelectorAll(".project-card");

document.addEventListener(
  "scroll",
  () => {
    projectCard.forEach((card) => {
      if (isCardInViewport(card)) {
        card.classList.add("fade-in");
      }
    });
  },
  {
    passive: true,
  }
);
