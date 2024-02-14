//Grab elements
const selectElement = (selector) => {
  const element = document.querySelector(selector)
  if (element) return element;
  throw new console.error("Error, Element not found");
};

//Nav styles on scroll
const scrollHeader = () => {
  const headerElement = selectElement("#Header");
  if (this.scrollY >= 15) {
    headerElement.classList.add("activated");
  } else {
    headerElement.classList.remove("activated");
  }
};

window.addEventListener("scroll", scrollHeader);
// Open menu & search pop-up
const menuToggleIcon = selectElement("#menu-toggle-icon");

const openMenu = () => {
  const menuElement = selectElement("#menu");
  menuElement.classList.toggle("activated");
  menuToggleIcon.classList.toggle("activated");
};

menuToggleIcon.addEventListener("click", openMenu);
// Open/Close search form popup
const bodyElement = document.body;
const themeToggleIcon = selectElement("#theme-toggle-btn");
const currentSetTheme = localStorage.getItem("currentTheme");

if(currentSetTheme){
  bodyElement.classList.add(currentSetTheme);
}

themeToggleIcon.addEventListener("click", function (){
  bodyElement.classList.toggle("light-theme");

  if(bodyElement.classList.contains("light-theme")){
    localStorage.setItem("currentTheme", "light-theme");
  }else{
    localStorage.removeItem("light-theme");
  }
});
// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage

// Swiper
