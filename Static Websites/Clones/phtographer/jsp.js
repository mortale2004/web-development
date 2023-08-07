burger = document.querySelector('.burger')
Navbar = document.querySelector('.Navbar')
first = document.querySelector('.first')
second = document.querySelector('.second')


burger.addEventListener('click',()=>{
    first.classList.toggle('v-none-resp');
    Navbar.classList.toggle('h-nav-resp');
    second.classList.toggle('v-none-resp');

})