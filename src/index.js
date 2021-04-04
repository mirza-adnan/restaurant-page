const content = document.querySelector("#content");

function createHeader() {
const header = document.createElement("header");

  function createLogo() {
    const h2 = document.createElement("h2");
    h2.innerHTML = "POUTINE<br>ROUTINE";
    return h2;
  }

  function createNav() {
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    ul.className = "nav-links";
    ul.appendChild(homeBtn());
    ul.appendChild(menuBtn());
    ul.appendChild(aboutBtn());
    nav.appendChild(ul);
    return nav;
  }

  function homeBtn() {
    const li = document.createElement("li");
    li.classList.add("nav-link", "active");
    li.textContent = "Home";
    return li
  }

  function menuBtn() {
    const li = document.createElement("li");
    li.classList.add("nav-link");
    li.textContent = "Menu";
    return li
  }

  function aboutBtn() {
    const li = document.createElement("li");
    li.classList.add("nav-link");
    li.textContent = "About";
    return li
  }

  header.appendChild(createLogo());
  header.appendChild(createNav());
  return header;
}

function createFooter() {
  const footer = document.createElement("footer");
  const p = document.createElement("p");
  p.innerHTML = "Copyright &#169; 2021 <a href=''>Mirza Adnan";
  footer.appendChild(p);
  return footer;
}

content.appendChild(createHeader());
content.appendChild(createFooter());