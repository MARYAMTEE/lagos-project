const localGovt = document.querySelector(".local-gvt");
const dropdownMenu = document.querySelector(".dropdown-menu");

localGovt.addEventListener("click", ()=> {  
    dropdownMenu.classList.toggle("toggle");
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!localGovt.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove("toggle");
  }
});

window.addEventListener('load', () => {
    imageMapResize();
  });