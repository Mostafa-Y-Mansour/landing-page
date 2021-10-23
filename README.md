# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

### This is a **Landing Page Project**

#### What is this Wep page All About?
This page has a 4 section of content, you can add more if you wont to, and a navigation menu that is built dynamically as an unordered list. and it is represents which section is being viewed while scrolling through the page. and when clicking on the item on the navigation menu it scroll to the section that presents. I added a scroll to top button that Appears after scrolling down,
And the navigation menu is disapears while scrolling down and apears again after scrolling up with nice smooth animation.

#### Performance

To improve the performance of the loading time I used **document.createDocumentFragment()**

#### Dynamic Navigation Menu
Navigation is built dynamically as an unordered list. Start with empty ul and dynamically build navigation using appendChild(), createElement(), and textContent().

#### Present the section that is being viewed

I have used getBoundingClientRect(), classList.add(), and classList.remove() method to add and remove "your-active-class", and "active" class to Present the section that is being viewed while scrolling through the page.

#### Click on item from the navigation menu 

By clicking an item from the navigation menu, the link should scroll to the appropriate section. using scrollIntoView(), and preventDefault().