import {resetMain} from "./index.js";

function createAboutSection() {
  const div = document.createElement("div");
  div.className = "about";
  const h1 = document.createElement("h1");
  h1.textContent = "About us";
  const paragraph1 = document.createElement("p");
  paragraph1.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, maxime reiciendis nam atque rem inventore distinctio minus temporibus deserunt iusto voluptatibus. Tempora atque ipsam eius et tempore vitae nisi eaque.";
  
  const paragraph2 = document.createElement("p");
  paragraph2.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam voluptatum officia, ipsum voluptatem exercitationem molestias ex aut sint dignissimos accusantium.";

  const paragraph3 = document.createElement("p");
  paragraph3.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto provident sapiente rem nemo quas labore officia necessitatibus eligendi tempora placeat nulla, mollitia tempore obcaecati reiciendis quae minima odio quam reprehenderit.";
  div.appendChild(h1);
  div.appendChild(paragraph1);
  div.appendChild(paragraph2);
  div.appendChild(paragraph3);
  return div
}

function loadAbout() {
  resetMain();
  const main = document.querySelector("main");
  main.className = "main-about";
  main.appendChild(createAboutSection());
}

export default loadAbout;