const themeBtn = document.querySelector("#themeBtn");
const statusText = document.querySelector("#status");
const page = document.documentElement;

themeBtn.addEventListener("click", function () {
  if (page.getAttribute("data-theme") === "light") {
    page.setAttribute("data-theme", "dark");
    themeBtn.textContent = "Switch to Light Mode";
    statusText.textContent = "Current theme: Dark";
  } else {
    page.setAttribute("data-theme", "light");
    themeBtn.textContent = "Switch to Dark Mode";
    statusText.textContent = "Current theme: Light";
  }
});
