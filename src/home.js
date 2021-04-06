import {resetMain} from "./index.js";
import loadMenu from "./menu.js"
function createHome() {
  const h1 = document.createElement("h1");
  h1.textContent = "Poutine Routine";
  const p = document.createElement("p");
  p.textContent = "The Only Routine You Need";
  const button = document.createElement("button");
  button.className = "order-button";
  button.textContent = "Order Now";
  button.addEventListener("click", loadMenu);
  return [h1, p, button];
}

function loadHome() {
  resetMain();
  const main = document.querySelector("main");
  main.className = "main-home fade-slide"
  main.appendChild(createHome()[0]);
  main.appendChild(createHome()[1]);
  main.appendChild(createHome()[2]);
}

export default loadHome