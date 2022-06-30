const anchorHome = document.getElementById("anchorHome");
const anchorResume = document.getElementById("anchorResume");
const anchorSkills = document.getElementById("anchorSkills");
const anchorPortfolio = document.getElementById("anchorPortfolio");
const anchorBlog = document.getElementById("anchorBlog");
const anchorContact = document.getElementById("anchorContact");
const restBox = document.getElementById("restBox");
const contactForm = document.getElementById("contactForm");
const burger = document.getElementById("burger");
const burgerMenu = document.getElementById("burger-menu");

async function scrollToElem(elem) {
  let promise = new Promise((resolve) => {
    elem.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
    resolve("done");
  });
  await promise;
}

contactForm.onsubmit = (e) => {
  e.preventDefault();
  contactForm.reset();
};

function openBurger() {
  burger.classList.toggle("burger__btn-box_active");
  burgerMenu.classList.toggle("burger__btn-close_active");
}
