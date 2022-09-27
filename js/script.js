let navLinks=document.querySelector("#nav-links");
let hideMenu = document.querySelector("#hide-menu");
let showMenu = document.querySelector("#show-menu");

hideMenu.addEventListener("click", ()=>{
    navLinks.style.display="none";
})
showMenu.addEventListener("click", ()=>{
    navLinks.style.display="block";
})
// function HideMenu()
//  {
  
//  }
// function ShowMenu()
//  {
//   navLinks.style.display="block";
//  }   