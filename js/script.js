let navLinks=document.querySelector("#nav-links");
let hideMenu = document.querySelector("#hide-menu");
let showMenu = document.querySelector("#show-menu");

showMenu.addEventListener("click", ()=>{
    navLinks.style.display="block";
    navLinks.style.right = 0;
})

hideMenu.addEventListener("click", ()=>{
    navLinks.style.display="none";
})

// function HideMenu()
//  {
  
//  }
// function ShowMenu()
//  {
//   navLinks.style.display="block";
//  }   