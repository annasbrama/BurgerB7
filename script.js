// const hambButton = document.querySelector('#hambButton')
// const closeButton = document.querySelector('#closeButton')

// const menuMobile = document.querySelector('#mobileMenu')

// hambButton.addEventListener('click', () =>{
//     menuMobile.classList.add('flex')
// })

// closeButton.addEventListener('click', () =>{
//     menuMobile.classList.remove('flex')
// })


const hambButton = document.querySelector("#hambButton");
const closeButton = document.querySelector("#closeButton");

const mobileMenu = document.querySelector("#mobileMenu");

hambButton.addEventListener("click", function () {
  mobileMenu.classList.add("flex");
});

closeButton.addEventListener("click", function () {
  mobileMenu.classList.remove("flex");
});