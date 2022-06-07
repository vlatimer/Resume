const anchorHome = document.getElementById("anchorHome");
const anchorResume = document.getElementById("anchorResume");
const anchorSkills = document.getElementById("anchorSkills");
const anchorPortfolio = document.getElementById("anchorPortfolio");
const anchorBlog = document.getElementById("anchorBlog");
const anchorContact = document.getElementById("anchorContact");
const restBox = document.getElementById("restBox");
const contactForm = document.getElementById("contactForm");

async function scrollToElem(elem) {
  let promise = new Promise((resolve) => {
    elem.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
    resolve("done");
  });
  await promise;
}

contactForm.onsubmit = (e) => {
  e.preventDefault();
  contactForm.reset();
}