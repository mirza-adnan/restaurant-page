import {resetMain} from "./index.js";
function createHome() {
  const h1 = document.createElement("h1");
  h1.textContent = "Poutine Routine";
  const p = document.createElement("p");
  p.textContent = "The Only Routine You Need";
  return [h1, p];
}

function loadHome() {
  resetMain();
  const main = document.querySelector("main");
  main.className = "main-home";
  main.appendChild(createHome()[0]);
  main.appendChild(createHome()[1]);
}

export default loadHome