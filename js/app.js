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



const navBarList = document.getElementById("navbar__list");

const dataNav = document.querySelectorAll("[data-nav]");


for (let i = 0; i < dataNav.length; i++) {
  const navDataName = dataNav[i].getAttribute("data-nav");
  
  const navId = dataNav[i].getAttribute("id");
  
  const newList = document.createElement("li");
  newList.classList.add(`menu__link`);
  
  const newLink = document.createElement("a");
  newLink.setAttribute("href", `#${navId}`)
  newLink.textContent = navDataName;
  
  newList.appendChild(newLink);
  navBarList.appendChild(newList);
  
  console.log(navDataName);
  console.log(navId);
  console.log(newList);
}











/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


