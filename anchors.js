const anchorHome = document.getElementById("anchorHome");
const anchorResume = document.getElementById("anchorResume");
const anchorSkills = document.getElementById("anchorSkills");
const anchorPortfolio = document.getElementById("anchorPortfolio");
const anchorBlog = document.getElementById("anchorBlog");
const anchorContacts = document.getElementById("anchorContacts");
const restBox = document.getElementById("restBox");

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