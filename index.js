const menuBtn = document.querySelector('.menu')
const navlinks =  document.querySelector('nav.links')

menuBtn.addEventListener('click', ()=> {
    navlinks.classList.toggle('bar')
})