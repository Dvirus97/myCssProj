const metaDarkToggle = () => {
  // ! meta tag color-scheme dark
  const meta = document.querySelector('meta[name="color-scheme"]');
  const select = document.querySelector("select");
  select.addEventListener("change", () => {
    meta.content = select.value;
  });
};

const htmlDark = () => {
  // ! html class color-scheme dark
  const darkBtn = document.querySelector("nav button");
  // const html = document.querySelector("html");
  const useDark = window.matchMedia("(prefers-color-scheme: dark)");
  useDark.matches && document.documentElement.classList.add("darkMode");

  darkBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("darkMode");
  });
};

const navTitle = () => {
  // ! div in nav change text
  const titleDiv = document.querySelector(".navTitle");
  const inputTitle = document.querySelector('[name="header"]');

  inputTitle.addEventListener("input", () => {
    titleDiv.innerHTML = `<b>${inputTitle.value}</b>`;
    document.title = inputTitle.value;
  });
};

document.addEventListener("DOMContentLoaded", () => {
  //   metaDarkToggle();

  htmlDark();

  navTitle();
});
