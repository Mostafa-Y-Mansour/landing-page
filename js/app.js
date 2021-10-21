/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

// select The ul Element with id of "#navbar__list" //
const navBarList = document.getElementById("navbar__list");

// select All Section With An Attribute "[data-nav]" //
const dataNav = document.querySelectorAll("[data-nav]");

// Creat a Fragment //
const fragment = document.createDocumentFragment();

// A for loop to loop over every section //
for (let i = 0; i < dataNav.length; i++) {
  const navDataName = dataNav[i].getAttribute("data-nav");

  const newList = document.createElement("li");
  newList.classList.add(`menu__link`);
  newList.textContent = navDataName;

  fragment.appendChild(newList);
}

// Add the created "fragment" to the "ul" Element //
navBarList.appendChild(fragment);

// Add Scroll Animation //
for (let i = 0; i < dataNav.length; i++) {
  const list = document.querySelectorAll("li");
  list[i].addEventListener("click", function () {
    dataNav[i].scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  });
}

window.addEventListener("scroll", () => {
  for (let i = 0; i < dataNav.length; i++) {
    const rect = dataNav[i].getBoundingClientRect();
    const menuLink = document.getElementsByClassName("menu__link");
    if (rect.top < window.innerHeight - 150 && rect.top >= -50) {
      dataNav[i].classList.add("your-active-class");
      menuLink[i].classList.add("active");
    } else {
      dataNav[i].classList.remove("your-active-class");
      menuLink[i].classList.remove("active");
    }
  }
});

// Scroll To The Top Button //

const topBtn = document.getElementById("top--btn");

topBtn.addEventListener("click", () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
);

// Make the to top button visable after Scrolling //

let topBtnStyle = topBtn.style;

topBtnStyle.transform = "translateY(110%)";
document.addEventListener("scroll", () => {
  topBtnStyle.transform = "translateY(110%)";
  if (window.scrollY <= window.innerHeight + 100) {
  } else {
    topBtnStyle.transform = "translateY(0%)";
  }
});


// Hide the navBar when scrolling down And UnHide it when scrolling up //

let pageHeader = document.querySelector(".page__header");

let lastScrollValue = 0;

document.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  if (scroll > lastScrollValue) {
    pageHeader.style.transform = "translateY(-100%)";
  } else {
    pageHeader.style.transform = "translateY(0%)";

  }
  lastScrollValue = scroll;
});