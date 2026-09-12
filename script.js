const buttons = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

function showPage(name) {
  pages.forEach(page => {
    page.classList.toggle("active-page", page.id === name);
  });
  buttons.forEach(button => {
    button.classList.toggle("active", button.dataset.page === name);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
  history.replaceState(null, "", "#" + name);
}

buttons.forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.page));
});

document.querySelector(".brand").addEventListener("click", (event) => {
  event.preventDefault();
  showPage("home");
});

const initial = window.location.hash.replace("#", "");
if (["home", "research", "personal"].includes(initial)) {
  showPage(initial);
}
