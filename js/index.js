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
    const imgSource = image.getAttribute("data-img");
    modal.childNodes[1].setAttribute("src", imgSource);
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

const animateFirstName = () => {
  const firstName = document.querySelector(".first-name-initial");
  firstName.classList.add("animate");
};

const animateLastName = () => {
  const lastName = document.querySelector(".text-container");
  lastName.classList.add("animate");

  const mobileLastName = document.querySelector(".mobile-h2");
  mobileLastName.classList.add("animate");
};

const animateTagLine = () => {
  const tagLine = document.querySelector(".tagline");
  tagLine.classList.add("animate");
};

const animateAbout = () => {
  const about = document.querySelector("#aboutLink").classList.add("animate");
};

const animateProjects = () => {
  const projects = document
    .querySelector("#projectsLink")
    .classList.add("animate");
};

const animateContact = () => {
  const contact = document
    .querySelector("#contactLink")
    .classList.add("animate");
};

document.addEventListener("DOMContentLoaded", () => {
  const firstNameDelay = setTimeout(animateFirstName, 1000);
  const lastNameDelay = setTimeout(animateLastName, 2000);
  const tagLineDelay = setTimeout(animateTagLine, 3000);
  const aboutDelay = setTimeout(animateAbout, 4000);
  const projectsDelay = setTimeout(animateProjects, 4300);
  const contactDelay = setTimeout(animateContact, 4600);
});
